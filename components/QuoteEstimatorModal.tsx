"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getQuoteCopy } from "@/lib/i18n/quote-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  DEFAULT_QUOTE_SELECTION,
  estimateQuote,
  formatMillionVnd,
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

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.72)] px-4 py-2.5 text-sm text-[var(--kuct-text)] outline-none transition focus:border-[var(--kuct-accent)]/60";

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
          ? "flex min-h-[2.75rem] flex-col justify-center rounded-xl border border-[var(--kuct-accent)]/55 bg-[rgba(var(--kuct-accent-rgb),0.12)] px-3 py-2 text-left text-sm font-semibold text-[var(--kuct-text)] ring-1 ring-[var(--kuct-accent)]/20"
          : "flex min-h-[2.75rem] flex-col justify-center rounded-xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.55)] px-3 py-2 text-left text-sm font-medium text-[var(--kuct-muted)] transition duration-200 hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-text)]"
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

  const intlLocale =
    locale === "vi"
      ? "vi-VN"
      : locale === "ja"
        ? "ja-JP"
        : locale === "de"
          ? "de-DE"
          : "en-US";

  const estimateText = `${formatMillionVnd(range.min, intlLocale)} – ${formatMillionVnd(range.max, intlLocale)} ${q.estimateUnit}`;

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
    <div className="fixed inset-0 z-[145] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(2,2,8,0.72)] backdrop-blur-sm"
        aria-label={q.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="kuct-quote-title"
        className="relative z-10 flex max-h-[min(92svh,52rem)] w-full max-w-2xl flex-col overflow-hidden rounded-[1.5rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.97)] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.55),0_0_0_1px_rgba(var(--kuct-accent-rgb),0.08)]"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[var(--kuct-border)] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <h2
              id="kuct-quote-title"
              className="font-display text-lg font-semibold tracking-tight text-[var(--kuct-text)] sm:text-xl"
            >
              {q.title}
            </h2>
            <p className="mt-1.5 max-w-[42ch] text-xs leading-relaxed text-[var(--kuct-muted)]">
              {q.disclaimer}
            </p>
          </div>
          <button
            type="button"
            className="grid size-8 shrink-0 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.7)] text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-text)]"
            aria-label={q.close}
            onClick={onClose}
          >
            <IconClose className="size-3.5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-h-0 flex-1 flex-col"
          noValidate
        >
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
            <div className="sticky top-0 z-[1] mb-7 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.95)] px-4 py-4 ring-1 ring-[var(--kuct-accent)]/20 backdrop-blur-md sm:px-5">
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
                          hint={q.projectTypes[id].hint}
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

            <div className="border-t border-[var(--kuct-border)] pt-6">
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

          <div className="shrink-0 border-t border-[var(--kuct-border)] bg-[rgba(6,6,14,0.98)] px-5 py-4 sm:px-6">
            <button
              type="submit"
              className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
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
      </div>
    </div>
  );
}
