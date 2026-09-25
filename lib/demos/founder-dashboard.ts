/** Founder dashboard — period P&L from deals, HR salary, sale policy, expenses. */

import { type AdminLead, type AdminUser } from "@/lib/demos/admin-leads-api";
import { formatVnd } from "@/lib/demos/money-format";
import { computeSalesComp, isRevenueStage } from "@/lib/demos/sales-comp";

export const DASH_PERIODS = ["month", "year", "all"] as const;
export type DashPeriod = (typeof DASH_PERIODS)[number];

export const EXPENSE_CATEGORIES = [
  "infra",
  "tools",
  "ads",
  "rent",
  "other",
] as const;
export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

export function normalizeExpenseCategory(value: unknown): ExpenseCategory {
  if (
    typeof value === "string" &&
    (EXPENSE_CATEGORIES as readonly string[]).includes(value)
  ) {
    return value as ExpenseCategory;
  }
  return "infra";
}

export function parseDashDate(raw: string): Date | null {
  const s = raw.trim();
  if (!s) return null;
  const ymd = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (ymd) {
    return new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]));
  }
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function monthKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

export function parseMonthKey(ym: string): Date | null {
  const match = ym.trim().match(/^(\d{4})-(\d{2})$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, 1);
}

export function leadRevenueDate(lead: AdminLead): Date | null {
  return (
    parseDashDate(lead.closeDate) ||
    parseDashDate(lead.lastActivityAt) ||
    parseDashDate(lead.createdAt)
  );
}

function enumerateMonths(from: Date, toExclusive: Date): string[] {
  const keys: string[] = [];
  const cur = new Date(from.getFullYear(), from.getMonth(), 1);
  const end = new Date(toExclusive.getFullYear(), toExclusive.getMonth(), 1);
  while (cur < end) {
    keys.push(monthKey(cur));
    cur.setMonth(cur.getMonth() + 1);
  }
  return keys;
}

export function lastNMonthKeys(count: number, now = new Date()): string[] {
  const safe = Math.max(1, Math.round(count));
  return enumerateMonths(
    new Date(now.getFullYear(), now.getMonth() - (safe - 1), 1),
    new Date(now.getFullYear(), now.getMonth() + 1, 1),
  );
}

export function shiftDate(
  now: Date,
  months: number,
  years = 0,
): Date {
  return new Date(now.getFullYear() + years, now.getMonth() + months, now.getDate());
}

export function comparePct(current: number, previous: number): number | null {
  if (!Number.isFinite(current) || !Number.isFinite(previous)) return null;
  if (previous === 0) return current === 0 ? 0 : null;
  return Math.round(((current - previous) / Math.abs(previous)) * 100);
}

export function periodMonths(period: DashPeriod, now = new Date()): string[] {
  if (period === "month") return [monthKey(now)];
  if (period === "year") {
    return enumerateMonths(
      new Date(now.getFullYear(), 0, 1),
      new Date(now.getFullYear() + 1, 0, 1),
    );
  }
  return [];
}

export type SalaryMonth = {
  userId: string;
  ym: string;
  amount: number;
  updatedAt: string;
};

export type SalaryResolve = {
  amount: number;
  sourceYm: string | null;
  carried: boolean;
};

export function resolveSalaryForMonth(
  person: AdminUser,
  ym: string,
  rows: SalaryMonth[],
): SalaryResolve {
  const mine = rows
    .filter((row) => row.userId === person.id)
    .sort((a, b) => a.ym.localeCompare(b.ym));
  const exact = mine.find((row) => row.ym === ym);
  if (exact) {
    return { amount: exact.amount || 0, sourceYm: ym, carried: false };
  }
  const earlier = mine.filter((row) => row.ym < ym);
  if (earlier.length) {
    const last = earlier[earlier.length - 1];
    return { amount: last.amount || 0, sourceYm: last.ym, carried: true };
  }
  const fallback = person.salary || 0;
  return { amount: fallback, sourceYm: null, carried: fallback > 0 };
}

export function teamSalaryForMonth(
  people: AdminUser[],
  ym: string,
  rows: SalaryMonth[],
): number {
  return people
    .filter((person) => person.active)
    .reduce((sum, person) => sum + resolveSalaryForMonth(person, ym, rows).amount, 0);
}

export type SalaryViewRow = {
  userId: string;
  name: string;
  ym: string;
  amount: number;
  carried: boolean;
  sourceYm: string | null;
};

export function salaryViewRows(
  people: AdminUser[],
  months: string[],
  rows: SalaryMonth[],
): SalaryViewRow[] {
  return months.flatMap((ym) =>
    people
      .filter((person) => person.active)
      .map((person) => {
        const resolved = resolveSalaryForMonth(person, ym, rows);
        return {
          userId: person.id,
          name: person.displayName || person.id,
          ym,
          amount: resolved.amount,
          carried: resolved.carried,
          sourceYm: resolved.sourceYm,
        };
      }),
  );
}

export type DashExpense = {
  id: string;
  incurredAt: string;
  category: ExpenseCategory;
  title: string;
  amount: number;
  currency: string;
  recurring: boolean;
  note: string;
  createdAt: string;
  createdBy: string;
};

export type DashMonthRow = {
  month: string;
  revenue: number;
  salary: number;
  commission: number;
  bonus: number;
  infra: number;
  cost: number;
  profit: number;
};

export type FounderSnapshot = {
  period: DashPeriod;
  monthCount: number;
  months: string[];
  wonCount: number;
  revenue: number;
  salary: number;
  commission: number;
  bonus: number;
  infra: number;
  cost: number;
  profit: number;
  margin: number | null;
  series: DashMonthRow[];
};

function expenseHitsMonth(expense: DashExpense, ym: string): boolean {
  const start = parseDashDate(expense.incurredAt);
  if (!start) return false;
  const startKey = monthKey(start);
  if (expense.recurring) return startKey <= ym;
  return startKey === ym;
}

export function buildFounderSnapshot(
  leads: AdminLead[],
  people: AdminUser[],
  expenses: DashExpense[],
  period: DashPeriod,
  now = new Date(),
  salaryMonths: SalaryMonth[] = [],
): FounderSnapshot {
  const saleLeads = leads.filter((lead) => lead.source !== "careers");
  let months = periodMonths(period, now);
  if (period === "all") {
    const dates = [
      ...saleLeads.map(leadRevenueDate),
      ...expenses.map((row) => parseDashDate(row.incurredAt)),
      ...salaryMonths.map((row) => parseMonthKey(row.ym)),
    ].filter((d): d is Date => Boolean(d));
    const min = dates.length
      ? dates.reduce((a, b) => (a < b ? a : b))
      : now;
    months = enumerateMonths(
      new Date(min.getFullYear(), min.getMonth(), 1),
      new Date(now.getFullYear(), now.getMonth() + 1, 1),
    );
    if (months.length === 0) months = [monthKey(now)];
  }

  const monthSet = new Set(months);

  const periodLeads = saleLeads.filter((lead) => {
    if (!isRevenueStage(lead.stage)) return false;
    const date = leadRevenueDate(lead);
    return date ? monthSet.has(monthKey(date)) : false;
  });
  const revenue = periodLeads.reduce((sum, lead) => sum + (lead.amount || 0), 0);
  const wonCount = periodLeads.length;
  const sales = computeSalesComp(revenue, wonCount, 0, 0);
  const salary = months.reduce(
    (sum, ym) => sum + teamSalaryForMonth(people, ym, salaryMonths),
    0,
  );

  let infra = 0;
  for (const expense of expenses) {
    for (const ym of months) {
      if (expenseHitsMonth(expense, ym)) infra += expense.amount || 0;
    }
  }

  const cost = salary + sales.commission + sales.bonus + infra;
  const profit = revenue - cost;
  const margin = revenue > 0 ? Math.round((profit / revenue) * 100) : null;

  return {
    period,
    monthCount: months.length,
    months,
    wonCount,
    revenue,
    salary,
    commission: sales.commission,
    bonus: sales.bonus,
    infra,
    cost,
    profit,
    margin,
    series: lastNMonthKeys(6, now).map((ym) => {
      const monthLeads = saleLeads.filter((lead) => {
        if (!isRevenueStage(lead.stage)) return false;
        const date = leadRevenueDate(lead);
        return date ? monthKey(date) === ym : false;
      });
      const monthRevenue = monthLeads.reduce(
        (sum, lead) => sum + (lead.amount || 0),
        0,
      );
      const monthSales = computeSalesComp(monthRevenue, monthLeads.length, 0, 0);
      let monthInfra = 0;
      for (const expense of expenses) {
        if (expenseHitsMonth(expense, ym)) monthInfra += expense.amount || 0;
      }
      const monthSalary = teamSalaryForMonth(people, ym, salaryMonths);
      const monthCost =
        monthSalary + monthSales.commission + monthSales.bonus + monthInfra;
      return {
        month: ym,
        revenue: monthRevenue,
        salary: monthSalary,
        commission: monthSales.commission,
        bonus: monthSales.bonus,
        infra: monthInfra,
        cost: monthCost,
        profit: monthRevenue - monthCost,
      };
    }),
  };
}

export function formatDashMoneyFull(
  amount: number,
  _locale: "vi" | "en" = "vi",
): string {
  return formatVnd(amount);
}

export function formatDashMoney(
  amount: number,
  locale: "vi" | "en" = "vi",
): string {
  return formatDashMoneyFull(amount, locale);
}
