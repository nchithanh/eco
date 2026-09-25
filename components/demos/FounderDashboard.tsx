"use client";

import { useMemo, useState, type FormEvent } from "react";
import { EmptyState } from "@/components/demos/EmptyArt";
import { MoneyInput } from "@/components/demos/MoneyInput";
import { type AdminExpense, type AdminUser } from "@/lib/demos/admin-leads-api";
import { type DolphinSalesCopy, type SalesLocale } from "@/lib/demos/dolphin-sales-copy";
import { formatVnd, formatVndInput } from "@/lib/demos/money-format";
import {
  type DashExpense,
  type DashPeriod,
  type ExpenseCategory,
  type SalaryMonth,
  type SalaryViewRow,
  EXPENSE_CATEGORIES,
  buildFounderSnapshot,
  comparePct,
  formatDashMoney,
  formatDashMoneyFull,
  monthKey,
  normalizeExpenseCategory,
  resolveSalaryForMonth,
  salaryViewRows,
  shiftDate,
} from "@/lib/demos/founder-dashboard";

export type ExpenseFormKind = "opex" | "salary";

export type ExpenseFormState = {
  kind: ExpenseFormKind;
  editExpenseId: string;
  editSalary: boolean;
  title: string;
  amount: string;
  incurredAt: string;
  category: ExpenseCategory;
  recurring: boolean;
  note: string;
  userId: string;
  ym: string;
};

export const EMPTY_EXPENSE_FORM = (
  people: AdminUser[] = [],
): ExpenseFormState => ({
  kind: "opex",
  editExpenseId: "",
  editSalary: false,
  title: "",
  amount: "",
  incurredAt: new Date().toISOString().slice(0, 10),
  category: "infra",
  recurring: false,
  note: "",
  userId: people.find((person) => person.active)?.id ?? people[0]?.id ?? "",
  ym: monthKey(new Date()),
});

function fillTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

function categoryLabel(
  t: DolphinSalesCopy,
  category: ExpenseCategory,
): string {
  if (category === "tools") return t.dashboard.catTools;
  if (category === "ads") return t.dashboard.catAds;
  if (category === "rent") return t.dashboard.catRent;
  if (category === "other") return t.dashboard.catOther;
  return t.dashboard.catInfra;
}

function toDashExpenses(rows: AdminExpense[]): DashExpense[] {
  return rows.map((row) => ({
    ...row,
    category: normalizeExpenseCategory(row.category),
  }));
}

type ChartMode = "all" | "revenue" | "cost" | "profit";
type MixKey = "salary" | "commission" | "bonus" | "infra";

function TrendChart({
  series,
  locale,
  label,
  mode,
}: {
  series: ReturnType<typeof buildFounderSnapshot>["series"];
  locale: SalesLocale;
  label: string;
  mode: ChartMode;
}) {
  const showRev = mode === "all" || mode === "revenue";
  const showCost = mode === "all" || mode === "cost";
  const showProfit = mode === "all" || mode === "profit";
  const max = Math.max(
    1,
    ...series.flatMap((row) => [
      showRev ? row.revenue : 0,
      showCost ? row.cost : 0,
      showProfit ? Math.abs(row.profit) : 0,
    ]),
  );
  return (
    <div className="df-chart" role="img" aria-label={label}>
      {series.map((row) => (
        <div key={row.month} className="df-chart__col">
          <div className="df-chart__bars">
            {showRev ? (
              <span
                className="df-chart__bar is-rev"
                style={{ height: `${(row.revenue / max) * 100}%` }}
                title={`${row.month} ${formatDashMoneyFull(row.revenue, locale)}`}
              />
            ) : null}
            {showCost ? (
              <span
                className="df-chart__bar is-cost"
                style={{ height: `${(row.cost / max) * 100}%` }}
                title={`${row.month} ${formatDashMoneyFull(row.cost, locale)}`}
              />
            ) : null}
            {showProfit ? (
              <span
                className={`df-chart__bar${row.profit < 0 ? " is-loss" : " is-profit"}`}
                style={{ height: `${(Math.abs(row.profit) / max) * 100}%` }}
                title={`${row.month} ${formatDashMoneyFull(row.profit, locale)}`}
              />
            ) : null}
          </div>
          <span className="df-chart__label">{row.month.slice(5)}</span>
        </div>
      ))}
    </div>
  );
}

function Delta({
  current,
  previous,
  label,
}: {
  current: number;
  previous: number;
  label: string;
}) {
  const pct = comparePct(current, previous);
  if (pct == null) return null;
  const up = pct > 0;
  return (
    <em className={`df-kpi__sub${up ? " is-up" : pct < 0 ? " is-down" : ""}`}>
      {up ? "+" : ""}
      {pct}% {label}
    </em>
  );
}

function MixBars({
  items,
  locale,
  active,
  onPick,
}: {
  items: { key: MixKey; label: string; value: number }[];
  locale: SalesLocale;
  active: MixKey | null;
  onPick: (key: MixKey) => void;
}) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return (
    <ul className="df-mix">
      {items.map((item) => {
        const pct = total > 0 ? Math.round((item.value / total) * 100) : 0;
        return (
          <li key={item.key}>
            <button
              type="button"
              className={`df-mix__btn${active === item.key ? " is-on" : ""}`}
              onClick={() => onPick(item.key)}
            >
              <div className="df-mix__meta">
                <span>{item.label}</span>
                <strong>
                  {formatDashMoney(item.value, locale)} · {pct}%
                </strong>
              </div>
              <div className="df-mix__track" aria-hidden>
                <span
                  className={`df-mix__fill is-${item.key}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function salaryPrefill(
  people: AdminUser[],
  salaryMonths: SalaryMonth[],
  userId: string,
  ym: string,
): { amount: string; hintYm: string | null; hintAmount: number } {
  const person = people.find((row) => row.id === userId);
  if (!person) return { amount: "", hintYm: null, hintAmount: 0 };
  const resolved = resolveSalaryForMonth(person, ym, salaryMonths);
  return {
    amount: resolved.amount > 0 ? formatVndInput(String(Math.round(resolved.amount))) : "",
    hintYm: resolved.carried ? resolved.sourceYm : resolved.sourceYm === ym ? null : resolved.sourceYm,
    hintAmount: resolved.amount,
  };
}

export function FounderDashboard({
  t,
  salesLocale,
  leads,
  people,
  expenses,
  salaryMonths,
  period,
  onPeriod,
  form,
  onForm,
  saving,
  onSubmit,
  onDelete,
  onDeleteSalary,
}: {
  t: DolphinSalesCopy;
  salesLocale: SalesLocale;
  leads: Parameters<typeof buildFounderSnapshot>[0];
  people: Parameters<typeof buildFounderSnapshot>[1];
  expenses: AdminExpense[];
  salaryMonths: SalaryMonth[];
  period: DashPeriod;
  onPeriod: (next: DashPeriod) => void;
  form: ExpenseFormState;
  onForm: (next: ExpenseFormState) => void;
  saving: boolean;
  onSubmit: (event: FormEvent) => void;
  onDelete: (row: AdminExpense) => void;
  onDeleteSalary: (row: SalaryViewRow) => void;
}) {
  const [chartMode, setChartMode] = useState<ChartMode>("all");
  const [mixKey, setMixKey] = useState<MixKey | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const dashRows = useMemo(() => toDashExpenses(expenses), [expenses]);
  const now = useMemo(() => new Date(), []);
  const snap = useMemo(
    () =>
      buildFounderSnapshot(leads, people, dashRows, period, now, salaryMonths),
    [leads, people, dashRows, period, now, salaryMonths],
  );
  const prev = useMemo(
    () =>
      period === "all"
        ? null
        : buildFounderSnapshot(
            leads,
            people,
            dashRows,
            period,
            shiftDate(now, period === "month" ? -1 : 0, period === "year" ? -1 : 0),
            salaryMonths,
          ),
    [leads, people, dashRows, period, now, salaryMonths],
  );
  const yoy = useMemo(
    () =>
      period === "all"
        ? null
        : buildFounderSnapshot(
            leads,
            people,
            dashRows,
            period,
            shiftDate(now, 0, -1),
            salaryMonths,
          ),
    [leads, people, dashRows, period, now, salaryMonths],
  );
  const salaryRows = useMemo(
    () => salaryViewRows(people, snap.months, salaryMonths),
    [people, snap.months, salaryMonths],
  );
  const d = t.dashboard;
  const showSalary = !mixKey || mixKey === "salary";
  const showOpex = !mixKey || mixKey === "infra";
  const editing = Boolean(form.editExpenseId || form.editSalary);
  const modalTitle = editing ? d.editExpense : d.addExpense;
  const person = people.find((row) => row.id === form.userId);
  const salaryHint = person
    ? resolveSalaryForMonth(person, form.ym, salaryMonths)
    : null;

  function closeForm() {
    setFormOpen(false);
  }

  function openAdd(kind: ExpenseFormKind) {
    const next = EMPTY_EXPENSE_FORM(people);
    if (kind === "salary") {
      const filled = salaryPrefill(people, salaryMonths, next.userId, next.ym);
      onForm({
        ...next,
        kind: "salary",
        amount: filled.amount,
      });
    } else {
      onForm({ ...next, kind: "opex" });
    }
    setFormOpen(true);
  }

  function openEditOpex(row: AdminExpense) {
    onForm({
      ...EMPTY_EXPENSE_FORM(people),
      kind: "opex",
      editExpenseId: row.id,
      title: row.title,
      amount: formatVndInput(String(Math.round(row.amount || 0))),
      incurredAt: row.incurredAt.slice(0, 10) || new Date().toISOString().slice(0, 10),
      category: normalizeExpenseCategory(row.category),
      recurring: row.recurring,
      note: row.note,
    });
    setFormOpen(true);
  }

  function openEditSalary(row: SalaryViewRow) {
    onForm({
      ...EMPTY_EXPENSE_FORM(people),
      kind: "salary",
      editSalary: !row.carried,
      userId: row.userId,
      ym: row.ym,
      amount: formatVndInput(String(Math.round(row.amount || 0))),
    });
    setFormOpen(true);
  }

  function switchKind(kind: ExpenseFormKind) {
    if (kind === form.kind) return;
    if (kind === "salary") {
      const userId = form.userId || EMPTY_EXPENSE_FORM(people).userId;
      const ym = form.ym || monthKey(new Date());
      const filled = salaryPrefill(people, salaryMonths, userId, ym);
      onForm({
        ...form,
        kind,
        userId,
        ym,
        amount: filled.amount || form.amount,
      });
      return;
    }
    onForm({ ...form, kind });
  }

  function changeSalaryTarget(userId: string, ym: string) {
    const filled = salaryPrefill(people, salaryMonths, userId, ym);
    const exact = salaryMonths.some((row) => row.userId === userId && row.ym === ym);
    onForm({
      ...form,
      userId,
      ym,
      editSalary: exact,
      amount: filled.amount,
    });
  }

  function submitExpense(event: FormEvent) {
    onSubmit(event);
    setFormOpen(false);
  }

  return (
    <>
      <div className="df-panel__actions">
        <div className="df-view" role="group" aria-label={d.title}>
          <button
            type="button"
            className={period === "month" ? "is-active" : undefined}
            onClick={() => onPeriod("month")}
          >
            {d.periodMonth}
          </button>
          <button
            type="button"
            className={period === "year" ? "is-active" : undefined}
            onClick={() => onPeriod("year")}
          >
            {d.periodYear}
          </button>
          <button
            type="button"
            className={period === "all" ? "is-active" : undefined}
            onClick={() => onPeriod("all")}
          >
            {d.periodAll}
          </button>
        </div>
      </div>

      <section className="df-kpis df-kpis--4" aria-label={d.title}>
        <article className="df-kpi">
          <p>{d.revenue}</p>
          <strong>{formatDashMoney(snap.revenue, salesLocale)}</strong>
          <em className="df-kpi__sub">
            {fillTemplate(d.wonDeals, { n: snap.wonCount })}
          </em>
          {prev ? (
            <Delta current={snap.revenue} previous={prev.revenue} label={t.ux.vsPrev} />
          ) : null}
          {yoy && period === "month" ? (
            <Delta current={snap.revenue} previous={yoy.revenue} label={t.ux.vsYoy} />
          ) : null}
        </article>
        <article className="df-kpi">
          <p>{d.cost}</p>
          <strong>{formatDashMoney(snap.cost, salesLocale)}</strong>
          {prev ? (
            <Delta current={snap.cost} previous={prev.cost} label={t.ux.vsPrev} />
          ) : null}
        </article>
        <article className={`df-kpi${snap.profit < 0 ? " is-warn" : ""}`}>
          <p>{d.profit}</p>
          <strong>{formatDashMoney(snap.profit, salesLocale)}</strong>
          {prev ? (
            <Delta current={snap.profit} previous={prev.profit} label={t.ux.vsPrev} />
          ) : null}
        </article>
        <article className="df-kpi">
          <p>{d.margin}</p>
          <strong>{snap.margin == null ? "—" : `${snap.margin}%`}</strong>
          {prev && prev.margin != null && snap.margin != null ? (
            <Delta current={snap.margin} previous={prev.margin} label={t.ux.vsPrev} />
          ) : null}
        </article>
      </section>

      <div className="df-dash-grid">
        <section className="df-dash-card" aria-labelledby="df-dash-trend-h">
          <h2 id="df-dash-trend-h">{d.trendTitle}</h2>
          <p className="df__muted">{d.trendHint}</p>
          <div className="df-view" role="group" aria-label={d.trendTitle}>
            {(
              [
                ["all", t.ux.chartAll],
                ["revenue", t.ux.chartRev],
                ["cost", t.ux.chartCost],
                ["profit", t.ux.chartProfit],
              ] as const
            ).map(([mode, label]) => (
              <button
                key={mode}
                type="button"
                className={chartMode === mode ? "is-active" : undefined}
                onClick={() => setChartMode(mode)}
              >
                {label}
              </button>
            ))}
          </div>
          {snap.series.length === 0 ? (
            <p className="df__muted">{d.empty}</p>
          ) : (
            <TrendChart
              series={snap.series}
              locale={salesLocale}
              label={d.trendTitle}
              mode={chartMode}
            />
          )}
          <ul className="df-chart__legend">
            <li>
              <i className="is-rev" aria-hidden />
              {d.revenue}
            </li>
            <li>
              <i className="is-cost" aria-hidden />
              {d.cost}
            </li>
            <li>
              <i className="is-profit" aria-hidden />
              {d.profit}
            </li>
          </ul>
        </section>

        <section className="df-dash-card" aria-labelledby="df-dash-mix-h">
          <h2 id="df-dash-mix-h">{d.mixTitle}</h2>
          <MixBars
            locale={salesLocale}
            active={mixKey}
            onPick={(key) => setMixKey((cur) => (cur === key ? null : key))}
            items={[
              { key: "salary", label: d.salary, value: snap.salary },
              { key: "commission", label: d.commission, value: snap.commission },
              { key: "bonus", label: d.bonus, value: snap.bonus },
              { key: "infra", label: d.infra, value: snap.infra },
            ]}
          />
        </section>
      </div>

      <section className="df-dash-card" aria-labelledby="df-dash-exp-h">
        <div className="df-dash-card__row">
          <div>
            <h2 id="df-dash-exp-h">{d.expensesTitle}</h2>
            <p className="df__muted">{d.expensesHint}</p>
          </div>
          <div className="df-dash-card__actions">
            <button type="button" className="df-btn is-ghost" onClick={() => openAdd("salary")}>
              {d.kindSalary}
            </button>
            <button type="button" className="df-btn" onClick={() => openAdd("opex")}>
              {d.addExpense}
            </button>
          </div>
        </div>
        {formOpen ? (
          <div className="df-modal" role="dialog" aria-labelledby="df-exp-form-h">
            <button
              type="button"
              className="df-sheet-backdrop"
              aria-label={t.side.closePanel}
              onClick={closeForm}
            />
            <div className="df-modal__panel">
              <header>
                <h3 id="df-exp-form-h">{modalTitle}</h3>
                <button
                  type="button"
                  className="df-detail__close"
                  aria-label={t.side.closePanel}
                  onClick={closeForm}
                >
                  ×
                </button>
              </header>
              <div className="df-kind" role="tablist" aria-label={d.expensesTitle}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={form.kind === "opex"}
                  className={form.kind === "opex" ? "is-active" : undefined}
                  onClick={() => switchKind("opex")}
                >
                  {d.kindOpex}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={form.kind === "salary"}
                  className={form.kind === "salary" ? "is-active" : undefined}
                  onClick={() => switchKind("salary")}
                >
                  {d.kindSalary}
                </button>
              </div>
              <form className="df-dash-form is-sheet" onSubmit={submitExpense}>
                {form.kind === "salary" ? (
                  <>
                    <label>
                      {d.formMonth}
                      <input
                        type="month"
                        required
                        value={form.ym}
                        onChange={(e) => changeSalaryTarget(form.userId, e.target.value)}
                      />
                    </label>
                    <label>
                      {d.formPerson}
                      <select
                        className="df-select"
                        required
                        value={form.userId}
                        onChange={(e) => changeSalaryTarget(e.target.value, form.ym)}
                      >
                        {people.length === 0 ? (
                          <option value="">{d.emptySalary}</option>
                        ) : (
                          people.map((row) => (
                            <option key={row.id} value={row.id}>
                              {row.displayName || row.id}
                            </option>
                          ))
                        )}
                      </select>
                    </label>
                    <label className="df-dash-form__wide">
                      {d.formAmount}
                      <MoneyInput
                        required
                        value={form.amount}
                        onChange={(amount) => onForm({ ...form, amount })}
                      />
                    </label>
                    {salaryHint?.carried && salaryHint.sourceYm ? (
                      <p className="df-carry">
                        {fillTemplate(d.carryHint, {
                          ym: salaryHint.sourceYm,
                          amount: formatVnd(salaryHint.amount),
                        })}
                      </p>
                    ) : null}
                  </>
                ) : (
                  <>
                    <label>
                      {d.formMonth}
                      <input
                        type="month"
                        required
                        value={form.incurredAt.slice(0, 7) || form.ym}
                        onChange={(e) => {
                          const ym = e.target.value;
                          const day = form.incurredAt.slice(8, 10) || "01";
                          onForm({
                            ...form,
                            ym,
                            incurredAt: ym ? `${ym}-${day}` : form.incurredAt,
                          });
                        }}
                      />
                    </label>
                    <label>
                      {d.colCategory}
                      <select
                        className="df-select"
                        value={form.category}
                        onChange={(e) =>
                          onForm({
                            ...form,
                            category: normalizeExpenseCategory(e.target.value),
                          })
                        }
                      >
                        {EXPENSE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {categoryLabel(t, cat)}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="df-dash-form__wide">
                      {d.formTitle}
                      <input
                        required
                        value={form.title}
                        onChange={(e) => onForm({ ...form, title: e.target.value })}
                      />
                    </label>
                    <label>
                      {d.formAmount}
                      <MoneyInput
                        required
                        value={form.amount}
                        onChange={(amount) => onForm({ ...form, amount })}
                      />
                    </label>
                    <label>
                      {d.formDate}
                      <input
                        type="date"
                        required
                        value={form.incurredAt}
                        onChange={(e) => onForm({ ...form, incurredAt: e.target.value })}
                      />
                    </label>
                    <label className="df-detail__check">
                      <input
                        type="checkbox"
                        checked={form.recurring}
                        onChange={(e) => onForm({ ...form, recurring: e.target.checked })}
                      />
                      {d.formRecurring}
                    </label>
                    <label className="df-dash-form__wide">
                      {d.formNote}
                      <input
                        value={form.note}
                        onChange={(e) => onForm({ ...form, note: e.target.value })}
                      />
                    </label>
                  </>
                )}
                <div className="df-dash-form__actions">
                  <button type="button" className="df-btn is-ghost" onClick={closeForm}>
                    {t.form.cancel}
                  </button>
                  <button type="submit" className="df-btn" disabled={saving}>
                    {saving ? t.form.saving : d.saveExpense}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {showSalary ? (
          <div className="df-table-wrap">
            <h3 className="df-dash-sub">{d.salaryTitle}</h3>
            <p className="df__muted">{d.salaryHint}</p>
            <table className="df-table">
              <thead>
                <tr>
                  <th>{d.colPerson}</th>
                  <th>{d.formMonth}</th>
                  <th className="is-num">{d.colAmount}</th>
                  <th>{d.colSource}</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {salaryRows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="df-table__empty">
                      <EmptyState kind="inbox" title={d.emptySalary} />
                    </td>
                  </tr>
                ) : (
                  salaryRows.map((row) => (
                    <tr
                      key={`${row.userId}-${row.ym}`}
                      className="is-click"
                      onClick={() => openEditSalary(row)}
                    >
                      <td>
                        <strong>{row.name}</strong>
                      </td>
                      <td>
                        <time dateTime={`${row.ym}-01`}>{row.ym}</time>
                      </td>
                      <td className="is-num">{formatDashMoney(row.amount, salesLocale)}</td>
                      <td>
                        {row.carried && row.sourceYm
                          ? fillTemplate(d.carried, { ym: row.sourceYm })
                          : d.thisMonth}
                      </td>
                      <td>
                        {!row.carried && row.amount > 0 ? (
                          <button
                            type="button"
                            className="df-btn is-ghost is-danger is-sm"
                            onClick={(event) => {
                              event.stopPropagation();
                              onDeleteSalary(row);
                            }}
                          >
                            {d.delete}
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="df-btn is-ghost is-sm"
                            onClick={(event) => {
                              event.stopPropagation();
                              openEditSalary(row);
                            }}
                          >
                            {d.edit}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}

        {showOpex ? (
          <div className="df-table-wrap">
            <h3 className="df-dash-sub">{d.infra}</h3>
            <table className="df-table">
              <thead>
                <tr>
                  <th>{d.colTitle}</th>
                  <th>{d.colCategory}</th>
                  <th className="is-num">{d.colAmount}</th>
                  <th>{d.colDate}</th>
                  <th>{d.colRecurring}</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {expenses.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="df-table__empty">
                      <EmptyState kind="inbox" title={d.empty} />
                    </td>
                  </tr>
                ) : (
                  expenses.map((row) => (
                    <tr
                      key={row.id}
                      className="is-click"
                      onClick={() => openEditOpex(row)}
                    >
                      <td>
                        <strong>{row.title}</strong>
                        {row.note ? <p className="df__muted">{row.note}</p> : null}
                      </td>
                      <td>
                        {categoryLabel(t, normalizeExpenseCategory(row.category))}
                      </td>
                      <td className="is-num">
                        {formatDashMoney(row.amount, salesLocale)}
                      </td>
                      <td>
                        <time dateTime={row.incurredAt}>{row.incurredAt}</time>
                      </td>
                      <td>{row.recurring ? d.formRecurring : "—"}</td>
                      <td>
                        <button
                          type="button"
                          className="df-btn is-ghost is-danger is-sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            onDelete(row);
                          }}
                        >
                          {d.delete}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </>
  );
}
