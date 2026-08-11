"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getQuoteCopy } from "@/lib/i18n/quote-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  DEFAULT_QUOTE_SELECTION,
  CAP,
  estimateQuote,
  toggleInList,
  type AiFeatureId,
  type DesignId,
  type FeatureId,
  type PagesId,
  type ProjectType,
  type QuoteSelection,
  type ScaleId,
  type TimelineId,
} from "@/lib/quote-estimator";
import {
  formatQuoteEstimateRange,
  formatQuoteHintRange,
} from "@/lib/pricing-fx";

const fieldClass =
  "mt-1.5 w-full rounded-[10px] border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-[var(--kuct-text)] outline-none transition focus:border-[rgba(var(--kuct-accent-rgb),0.35)]";

type FormValues = {
  name: string;
  contact: string;
  note: string;
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

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <legend className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
      {children}
    </legend>
  );
}

function ChoiceButton({
  active,
  label,
  hint,
  onClick,
}: {
  active: boolean;
  label: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "flex min-h-[2.75rem] flex-col justify-center rounded-xl border border-[rgba(var(--kuct-accent-rgb),0.28)] bg-white px-3 py-2 text-left text-sm font-semibold text-[var(--kuct-text)] shadow-[0_1px_2px_rgb(26_21_32/0.04)]"
          : "flex min-h-[2.75rem] flex-col justify-center rounded-xl border border-black/[0.06] bg-[var(--kuct-bg)] px-3 py-2 text-left text-sm font-medium text-[var(--kuct-muted)] transition duration-200 hover:border-[rgba(var(--kuct-accent-rgb),0.28)] hover:bg-white hover:text-[var(--kuct-text)]"
      }
    >
      <span className="block leading-snug">{label}</span>
      {hint && active ? (
        <span className="mt-0.5 block text-[0.65rem] font-normal text-[var(--kuct-muted)]">
          {hint}
        </span>
      ) : null}
    </button>
  );
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
  const [selection, setSelection] = useState<QuoteSelection>(
    DEFAULT_QUOTE_SELECTION,
  );
  const [sent, setSent] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(1, q.errors.name),
        contact: z.string().trim().min(1, q.errors.contact),
        note: z.string(),
      }),
    [q.errors],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", note: "" },
  });

  const range = estimateQuote(selection);
  const showAi =
    selection.projectType === "ai" || selection.projectType === "both";

  const estimateText = formatQuoteEstimateRange(locale, range);

  const choiceSummary = () => {
    const lines = [
      `${q.projectType}: ${q.projectTypes[selection.projectType].label}`,
      `${q.scale}: ${q.scales[selection.scale]}`,
      `${q.pages}: ${q.pagesOptions[selection.pages]}`,
      `${q.features}: ${
        selection.features.length
          ? selection.features.map((id) => q.featureOptions[id]).join(", ")
          : "—"
      }`,
    ];
    if (showAi) {
      lines.push(
        `${q.aiFeatures}: ${
          selection.aiFeatures.length
            ? selection.aiFeatures
                .map((id) => q.aiFeatureOptions[id])
                .join(", ")
            : "—"
        }`,
      );
    }
    lines.push(`${q.design}: ${q.designOptions[selection.design]}`);
    lines.push(`${q.timeline}: ${q.timelineOptions[selection.timeline]}`);
    return lines.join("\n");
  };

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`${q.mailSubject} ${data.name}`);
    const body = encodeURIComponent(
      [
        `${q.mailBodyName}: ${data.name}`,
        `${q.mailBodyContact}: ${data.contact}`,
        `${q.mailBodyEstimate}: ${estimateText}`,
        "",
        `${q.mailBodyChoices}:`,
        choiceSummary(),
        "",
        `${q.mailBodyNote}:`,
        data.note || "—",
      ].join("\n"),
    );
    window.location.href = `mailto:nchithanh9999@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (!open) return null;

  return (
    <>
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
            <p className="mb-4 text-xs leading-relaxed text-[var(--kuct-muted)]">
              {q.disclaimer}
            </p>

            <div className="sticky top-0 z-[1] mb-6 rounded-[10px] border border-black/[0.06] bg-[var(--kuct-bg)] px-3.5 py-3.5 shadow-[0_1px_2px_rgb(26_21_32/0.04)] sm:px-4">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--kuct-accent)] uppercase">
                {q.estimateLabel}
              </p>
              <p className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-[1.85rem]">
                {estimateText}
              </p>
            </div>

            <section className="mb-7">
              <SectionLabel>{q.scopeGroup}</SectionLabel>
              <div className="space-y-5">
                <fieldset>
                  <FieldLabel>{q.projectType}</FieldLabel>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {(Object.keys(q.projectTypes) as ProjectType[]).map(
                      (id) => (
                        <ChoiceButton
                          key={id}
                          active={selection.projectType === id}
                          label={q.projectTypes[id].label}
                          hint={formatQuoteHintRange(locale, CAP[id])}
                          onClick={() =>
                            setSelection((s) => ({
                              ...s,
                              projectType: id,
                              aiFeatures: id === "web" ? [] : s.aiFeatures,
                            }))
                          }
                        />
                      ),
                    )}
                  </div>
                </fieldset>

                <fieldset>
                  <FieldLabel>{q.scale}</FieldLabel>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {(Object.keys(q.scales) as ScaleId[]).map((id) => (
                      <ChoiceButton
                        key={id}
                        active={selection.scale === id}
                        label={q.scales[id]}
                        onClick={() =>
                          setSelection((s) => ({ ...s, scale: id }))
                        }
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <FieldLabel>{q.pages}</FieldLabel>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(q.pagesOptions) as PagesId[]).map((id) => (
                      <ChoiceButton
                        key={id}
                        active={selection.pages === id}
                        label={q.pagesOptions[id]}
                        onClick={() =>
                          setSelection((s) => ({ ...s, pages: id }))
                        }
                      />
                    ))}
                  </div>
                </fieldset>
              </div>
            </section>

            <section className="mb-7">
              <SectionLabel>{q.optionsGroup}</SectionLabel>
              <div className="space-y-5">
                <fieldset>
                  <FieldLabel>{q.features}</FieldLabel>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {(Object.keys(q.featureOptions) as FeatureId[]).map(
                      (id) => (
                        <ChoiceButton
                          key={id}
                          active={selection.features.includes(id)}
                          label={q.featureOptions[id]}
                          onClick={() =>
                            setSelection((s) => ({
                              ...s,
                              features: toggleInList(s.features, id),
                            }))
                          }
                        />
                      ),
                    )}
                  </div>
                </fieldset>

                {showAi ? (
                  <fieldset>
                    <FieldLabel>{q.aiFeatures}</FieldLabel>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {(Object.keys(q.aiFeatureOptions) as AiFeatureId[]).map(
                        (id) => (
                          <ChoiceButton
                            key={id}
                            active={selection.aiFeatures.includes(id)}
                            label={q.aiFeatureOptions[id]}
                            onClick={() =>
                              setSelection((s) => ({
                                ...s,
                                aiFeatures: toggleInList(s.aiFeatures, id),
                              }))
                            }
                          />
                        ),
                      )}
                    </div>
                  </fieldset>
                ) : null}

                <fieldset>
                  <FieldLabel>{q.design}</FieldLabel>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {(Object.keys(q.designOptions) as DesignId[]).map((id) => (
                      <ChoiceButton
                        key={id}
                        active={selection.design === id}
                        label={q.designOptions[id]}
                        onClick={() =>
                          setSelection((s) => ({ ...s, design: id }))
                        }
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <FieldLabel>{q.timeline}</FieldLabel>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {(Object.keys(q.timelineOptions) as TimelineId[]).map(
                      (id) => (
                        <ChoiceButton
                          key={id}
                          active={selection.timeline === id}
                          label={q.timelineOptions[id]}
                          onClick={() =>
                            setSelection((s) => ({ ...s, timeline: id }))
                          }
                        />
                      ),
                    )}
                  </div>
                </fieldset>
              </div>
            </section>

            <div className="pb-2">
              <h3 className="font-display text-base font-semibold tracking-tight text-[var(--kuct-text)]">
                {q.contactTitle}
              </h3>
              <div className="mt-4 space-y-3.5">
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
              className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-[10px] px-5 py-3 text-sm font-semibold"
            >
              {q.submit}
            </button>
            {sent ? (
              <p className="mt-2.5 text-center text-xs text-[var(--kuct-accent)]">
                {q.sent}
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </>
  );
}
