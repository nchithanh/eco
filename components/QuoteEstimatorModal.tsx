"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  getQuoteCopy,
  QUOTE_PUBLIC_EXTRA_KEYS,
  type QuotePublicExtraKey,
} from "@/lib/i18n/quote-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { assetPath } from "@/lib/asset";
import { PRICING_POLICY_PATH } from "@/lib/pricing/dolphin-pricing-policy-2026";
import { formatPackageMoney } from "@/lib/pricing-fx";
import { submitLead } from "@/lib/leads-api";
import { useTurnstileGate } from "@/components/TurnstileGate";
import {
  CARE_STANDALONE,
  COMBOS,
  EMPTY_EXTRAS,
  MONTHLY,
  ONCE,
  comboGiftLines,
  comboIncludesCare,
  computeQuoteTotals,
  extraPriceHint,
  formatVnd,
  getCombo,
  type CareStandaloneTerm,
  type ComboId,
  type ExtraSelection,
  type QuoteInput,
} from "@/lib/quotes/ma-dance-pricing";

const fieldClass =
  "mt-1.5 w-full rounded-[10px] border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-[var(--kuct-text)] outline-none transition focus:border-[rgba(var(--kuct-accent-rgb),0.35)]";

type FormValues = {
  name: string;
  contact: string;
  note: string;
  honeypot: string;
};

const DEFAULT_QUOTE: QuoteInput = {
  comboId: "crm-care-12",
  careStandalone: null,
  intelligence: false,
  extras: { ...EMPTY_EXTRAS },
};

function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-[var(--kuct-accent)]/80 uppercase">
      {children}
    </p>
  );
}

function productsShort(
  products: readonly ("crm" | "care" | "ops")[],
): string {
  return products
    .map((p) => (p === "care" ? "Care" : p === "ops" ? "Ops" : "CRM"))
    .join(" + ");
}

export function QuoteEstimatorModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const q = getQuoteCopy(locale);
  const money = (vnd: number) => formatPackageMoney(locale, vnd);

  const [quote, setQuote] = useState<QuoteInput>(DEFAULT_QUOTE);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { requestToken, gate: turnstileGate } = useTurnstileGate();

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(1, q.errors.name),
        contact: z.string().trim().min(1, q.errors.contact),
        note: z.string(),
        honeypot: z.string(),
      }),
    [q.errors],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", note: "", honeypot: "" },
  });

  const totals = useMemo(() => computeQuoteTotals(quote), [quote]);
  const showCareStandalone = !comboIncludesCare(totals.combo);
  const giftLines = comboGiftLines(totals.combo);
  const policyHref = assetPath(PRICING_POLICY_PATH);

  const setCombo = useCallback((comboId: ComboId) => {
    setQuote((prev) => ({
      ...prev,
      comboId,
      careStandalone: getCombo(comboId).products.includes("care")
        ? null
        : prev.careStandalone,
    }));
  }, []);

  const toggleExtra = useCallback((key: QuotePublicExtraKey, checked: boolean) => {
    setQuote((prev) => {
      const extras: ExtraSelection = { ...prev.extras, [key]: checked };
      if (prev.comboId === "crm-base-12" && checked) {
        if (key === "landing") extras.website = false;
        if (key === "website") extras.landing = false;
      }
      return { ...prev, extras };
    });
  }, []);

  const choiceSummary = () => {
    const lines = [
      `Combo: ${totals.combo.name} (${productsShort(totals.combo.products)} · ${totals.combo.months} ${q.monthsLabel})`,
      `Combo prepaid: ${formatVnd(totals.combo.price)}`,
    ];
    if (totals.careLine) {
      lines.push(
        `Care standalone: ${totals.careLine.title} → ${formatVnd(totals.careLine.due)}`,
      );
    }
    for (const line of totals.extraLines) {
      const gift = line.giftLabel ? ` (${line.giftLabel})` : "";
      lines.push(`Extra: ${line.title} → ${formatVnd(line.due)}${gift}`);
    }
    if (quote.intelligence) {
      lines.push(
        `Intelligence: ${formatVnd(MONTHLY.intelligence)}/mo × ${totals.combo.months} = ${formatVnd(totals.intelligenceDue)}`,
      );
    }
    if (totals.volumeDiscount > 0) {
      lines.push(totals.volumeDiscountLabel);
    }
    lines.push(`Prepaid total: ${formatVnd(totals.prepaid)}`);
    lines.push(`List before discounts: ${formatVnd(totals.list)}`);
    return lines.join("\n");
  };

  const onSubmit = async (data: FormValues) => {
    if (submitting) return;
    setSubmitting(true);
    setSendError(false);
    setSent(false);

    const turnstileToken = await requestToken();
    if (!turnstileToken) {
      setSubmitting(false);
      return;
    }

    const result = await submitLead({
      source: "quote",
      name: data.name,
      contact: data.contact,
      note: data.note,
      locale,
      payload: {
        estimate: formatVnd(totals.prepaid),
        choices: choiceSummary(),
        selection: quote,
        schema: "dolphin-quote-public/v1",
      },
      honeypot: data.honeypot,
      turnstileToken,
    });

    setSubmitting(false);
    if (result.ok) {
      setSent(true);
      return;
    }
    setSendError(true);
  };

  if (!open) return null;

  return (
    <>
      {turnstileGate}
      <button
        type="button"
        className="kuct-ai-chat__backdrop fixed inset-0 z-[185] bg-[rgb(26_21_32/0.28)] backdrop-blur-[2px]"
        aria-label={q.close}
        onClick={onClose}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="kuct-quote-title"
        className="kuct-quote-drawer fixed inset-y-0 left-0 z-[190] flex w-full max-w-[30rem] flex-col border-r border-black/[0.08] bg-white shadow-[16px_0_48px_rgb(26_21_32/0.1)] sm:max-w-[32rem]"
        data-lenis-prevent
        data-lenis-prevent-wheel
      >
        <header className="flex shrink-0 items-center gap-2 border-b border-black/[0.06] bg-white px-3 py-2.5 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4">
          <div className="min-w-0 flex-1 px-2 py-1">
            <h2
              id="kuct-quote-title"
              className="truncate text-sm font-medium text-[var(--kuct-text)]"
            >
              {q.title}
            </h2>
          </div>
          <button
            type="button"
            className="grid size-8 shrink-0 place-items-center rounded-[10px] text-[var(--kuct-muted)] transition hover:bg-black/[0.04] hover:text-[var(--kuct-text)]"
            aria-label={q.close}
            onClick={onClose}
          >
            <IconClose className="size-4" />
          </button>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-h-0 flex-1 flex-col"
          noValidate
        >
          <div
            className="kuct-ai-chat__dots flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
            data-lenis-prevent
            data-lenis-prevent-wheel
          >
            <p className="mb-3 text-xs leading-relaxed text-[var(--kuct-muted)]">
              {q.disclaimer}{" "}
              <a
                href={policyHref}
                className="font-semibold text-[var(--kuct-accent)] underline-offset-2 hover:underline"
              >
                {q.policyLinkLabel}
              </a>
            </p>

            <div className="sticky top-0 z-[1] mb-6 rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-3.5 py-3.5 shadow-[0_1px_2px_rgb(26_21_32/0.04)] sm:px-4">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--kuct-accent)] uppercase">
                {q.estimateLabel}
              </p>
              <p className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-[1.85rem]">
                {money(totals.prepaid)}
              </p>
              <p className="mt-1 text-[0.7rem] text-[var(--kuct-muted)]">
                {q.estimateListLabel}: {money(totals.list)}
                {totals.volumeDiscount > 0
                  ? ` · ${q.volumeDiscountHint}`
                  : null}
              </p>
            </div>

            <section className="mb-7">
              <SectionLabel>{q.comboGroup}</SectionLabel>
              <p className="mb-3 text-xs leading-relaxed text-[var(--kuct-muted)]">
                {q.comboHint}
              </p>
              <div
                className="grid gap-2"
                role="radiogroup"
                aria-label={q.comboGroup}
              >
                {COMBOS.map((combo) => {
                  const active = quote.comboId === combo.id;
                  return (
                    <button
                      key={combo.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setCombo(combo.id)}
                      className={
                        active
                          ? "rounded-[10px] border border-[rgba(var(--kuct-accent-rgb),0.28)] bg-white px-3 py-2.5 text-left shadow-[0_1px_2px_rgb(26_21_32/0.04)]"
                          : "rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-3 py-2.5 text-left transition hover:border-[rgba(var(--kuct-accent-rgb),0.28)] hover:bg-white"
                      }
                    >
                      <span className="flex items-start justify-between gap-2">
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-[var(--kuct-text)]">
                            {combo.name}
                          </span>
                          <span className="mt-0.5 block text-[0.7rem] text-[var(--kuct-muted)]">
                            {productsShort(combo.products)} · {combo.months}{" "}
                            {q.monthsLabel}
                          </span>
                        </span>
                        <span className="shrink-0 text-sm font-semibold text-[var(--kuct-text)]">
                          {money(combo.price)}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-[0.65rem] leading-snug text-[var(--kuct-muted)]">
                        {combo.support}
                      </span>
                    </button>
                  );
                })}
              </div>

              {giftLines.length > 0 ? (
                <div className="mt-3 rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-3 py-2.5">
                  <p className="text-[11px] font-semibold text-[var(--kuct-text)]">
                    {q.giftTitle}
                  </p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[0.7rem] text-[var(--kuct-muted)]">
                    {giftLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>

            {showCareStandalone ? (
              <section className="mb-7">
                <SectionLabel>{q.careGroup}</SectionLabel>
                <p className="mb-3 text-xs leading-relaxed text-[var(--kuct-muted)]">
                  {q.careHint}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setQuote((prev) => ({ ...prev, careStandalone: null }))
                    }
                    className={
                      quote.careStandalone === null
                        ? "rounded-[10px] border border-[rgba(var(--kuct-accent-rgb),0.28)] bg-white px-2 py-2 text-center text-xs font-semibold text-[var(--kuct-text)]"
                        : "rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-2 py-2 text-center text-xs font-medium text-[var(--kuct-muted)]"
                    }
                  >
                    {q.careNone}
                  </button>
                  {CARE_STANDALONE.map((plan) => {
                    const term = plan.term as CareStandaloneTerm;
                    const active = quote.careStandalone === term;
                    return (
                      <button
                        key={plan.term}
                        type="button"
                        onClick={() =>
                          setQuote((prev) => ({
                            ...prev,
                            careStandalone: term,
                          }))
                        }
                        className={
                          active
                            ? "rounded-[10px] border border-[rgba(var(--kuct-accent-rgb),0.28)] bg-white px-2 py-2 text-left text-xs font-semibold text-[var(--kuct-text)]"
                            : "rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-2 py-2 text-left text-xs font-medium text-[var(--kuct-muted)]"
                        }
                      >
                        <span className="block">{q.careTermLabel(plan.months)}</span>
                        <span className="mt-0.5 block text-[0.65rem] font-normal">
                          {money(plan.price)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ) : null}

            <section className="mb-7">
              <SectionLabel>{q.extrasGroup}</SectionLabel>
              <p className="mb-3 text-xs leading-relaxed text-[var(--kuct-muted)]">
                {q.extrasHint}
              </p>
              <div className="space-y-2">
                {QUOTE_PUBLIC_EXTRA_KEYS.map((key) => {
                  const label = q.extraLabels[key];
                  const checked = quote.extras[key];
                  const hintText =
                    key === "payment-online"
                      ? money(ONCE.paymentOnline)
                      : extraPriceHint(totals.combo, key);
                  return (
                    <label
                      key={key}
                      className={
                        checked
                          ? "flex cursor-pointer items-start gap-3 rounded-[10px] border border-[rgba(var(--kuct-accent-rgb),0.28)] bg-white px-3 py-2.5"
                          : "flex cursor-pointer items-start gap-3 rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-3 py-2.5"
                      }
                    >
                      <input
                        type="checkbox"
                        className="mt-1 size-4 accent-[var(--kuct-accent)]"
                        checked={checked}
                        onChange={(e) => toggleExtra(key, e.target.checked)}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-2">
                          <span className="text-sm font-semibold text-[var(--kuct-text)]">
                            {label.title}
                          </span>
                          <span className="shrink-0 text-xs font-semibold text-[var(--kuct-text)]">
                            {hintText}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-[0.7rem] text-[var(--kuct-muted)]">
                          {label.scope}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="mb-7">
              <SectionLabel>{q.intelligenceGroup}</SectionLabel>
              <p className="mb-3 text-xs leading-relaxed text-[var(--kuct-muted)]">
                {q.intelligenceHint}
              </p>
              <label
                className={
                  quote.intelligence
                    ? "flex cursor-pointer items-start gap-3 rounded-[10px] border border-[rgba(var(--kuct-accent-rgb),0.28)] bg-white px-3 py-2.5"
                    : "flex cursor-pointer items-start gap-3 rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-3 py-2.5"
                }
              >
                <input
                  type="checkbox"
                  className="mt-1 size-4 accent-[var(--kuct-accent)]"
                  checked={quote.intelligence}
                  onChange={(e) =>
                    setQuote((prev) => ({
                      ...prev,
                      intelligence: e.target.checked,
                    }))
                  }
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-2">
                    <span className="text-sm font-semibold text-[var(--kuct-text)]">
                      {q.intelligenceLabel}
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-[var(--kuct-text)]">
                      {money(MONTHLY.intelligence * totals.combo.months)}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-[0.7rem] text-[var(--kuct-muted)]">
                    {money(MONTHLY.intelligence)}
                    {q.perMonth} × {totals.combo.months}
                  </span>
                </span>
              </label>
            </section>

            <div className="pb-2">
              <h3 className="font-display text-base font-semibold tracking-tight text-[var(--kuct-text)]">
                {q.contactTitle}
              </h3>
              <div className="mt-4 space-y-3.5">
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden
                >
                  <label htmlFor="quote-honeypot">Company</label>
                  <input
                    id="quote-honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("honeypot")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-name"
                    className="block text-[11px] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase"
                  >
                    {q.name}
                  </label>
                  <input
                    id="quote-name"
                    className={fieldClass}
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="quote-contact"
                    className="block text-[11px] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase"
                  >
                    {q.contact}
                  </label>
                  <input
                    id="quote-contact"
                    className={fieldClass}
                    {...register("contact")}
                  />
                  {errors.contact ? (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.contact.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="quote-note"
                    className="block text-[11px] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase"
                  >
                    {q.note}
                  </label>
                  <textarea
                    id="quote-note"
                    rows={2}
                    placeholder={q.notePlaceholder}
                    className={`${fieldClass} resize-none`}
                    {...register("note")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-black/[0.06] bg-white px-4 py-3.5 pb-[max(0.85rem,env(safe-area-inset-bottom))] sm:px-5">
            <button
              type="submit"
              disabled={submitting}
              className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-[10px] px-5 py-3 text-sm font-semibold disabled:opacity-50"
            >
              {q.submit}
            </button>
            {sent ? (
              <p className="mt-2.5 text-center text-xs text-[var(--kuct-accent)]">
                {q.sent}
              </p>
            ) : null}
            {sendError ? (
              <p className="mt-2.5 text-center text-xs text-red-500">
                {q.sendError}
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </>
  );
}
