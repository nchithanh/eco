"use client";

import { useMemo, useState } from "react";
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
  "mt-1 w-full rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.8)] px-4 py-2.5 text-[var(--kuct-text)] outline-none backdrop-blur-md kuct-field focus:border-[var(--kuct-accent)]";

type FormValues = {
  name: string;
  contact: string;
  note: string;
};

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
          ? "rounded-xl border border-[var(--kuct-accent)] bg-[rgba(var(--kuct-accent-rgb),0.15)] px-3 py-2.5 text-left text-sm font-semibold text-[var(--kuct-text)] shadow-sm"
          : "rounded-xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.6)] px-3 py-2.5 text-left text-sm font-medium text-[var(--kuct-muted)] transition duration-300 hover:border-[var(--kuct-accent)]/50 hover:bg-[rgba(var(--kuct-accent-rgb),0.1)]"
      }
    >
      <span className="block">{label}</span>
      {hint ? (
        <span className="mt-0.5 block text-[0.7rem] font-normal text-[var(--kuct-muted)]">
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
        className="absolute inset-0 bg-[#1e1b2e]/45 backdrop-blur-sm"
        aria-label={q.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="kuct-quote-title"
        className="relative z-10 flex max-h-[min(92svh,56rem)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.5rem] border border-[var(--kuct-border)] bg-[var(--kuct-bg)] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.6)]"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[var(--kuct-border)] bg-[rgba(8,8,18,0.9)] px-4 py-3 backdrop-blur-xl sm:px-5">
          <div className="min-w-0">
            <h2
              id="kuct-quote-title"
              className="font-display text-lg font-semibold text-[var(--kuct-text)] sm:text-xl"
            >
              {q.title}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[var(--kuct-muted)] sm:text-sm">
              {q.disclaimer}
            </p>
          </div>
          <button
            type="button"
            className="kuct-btn-ghost shrink-0 rounded-full px-3 py-1.5 text-sm font-medium"
            onClick={onClose}
          >
            {q.close}
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-5">
          <div className="sticky top-0 z-[1] mb-6 rounded-2xl border border-[var(--kuct-accent)]/25 bg-[rgba(var(--kuct-accent-rgb),0.08)] px-4 py-3 shadow-sm backdrop-blur-md">
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
              {q.estimateLabel}
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-[var(--kuct-text)] sm:text-3xl">
              {estimateText}
            </p>
          </div>

          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-[var(--kuct-text)]">
              {q.projectType}
            </legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {(Object.keys(q.projectTypes) as ProjectType[]).map((id) => (
                <ChoiceButton
                  key={id}
                  active={selection.projectType === id}
                  label={q.projectTypes[id].label}
                  hint={q.projectTypes[id].hint}
                  onClick={() =>
                    setSelection((s) => ({
                      ...s,
                      projectType: id,
                      aiFeatures:
                        id === "web" ? [] : s.aiFeatures,
                    }))
                  }
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 space-y-2">
            <legend className="text-sm font-semibold text-[var(--kuct-text)]">
              {q.scale}
            </legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {(Object.keys(q.scales) as ScaleId[]).map((id) => (
                <ChoiceButton
                  key={id}
                  active={selection.scale === id}
                  label={q.scales[id]}
                  onClick={() => setSelection((s) => ({ ...s, scale: id }))}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 space-y-2">
            <legend className="text-sm font-semibold text-[var(--kuct-text)]">
              {q.pages}
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(q.pagesOptions) as PagesId[]).map((id) => (
                <ChoiceButton
                  key={id}
                  active={selection.pages === id}
                  label={q.pagesOptions[id]}
                  onClick={() => setSelection((s) => ({ ...s, pages: id }))}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 space-y-2">
            <legend className="text-sm font-semibold text-[var(--kuct-text)]">
              {q.features}
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(q.featureOptions) as FeatureId[]).map((id) => (
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
              ))}
            </div>
          </fieldset>

          {showAi ? (
            <fieldset className="mt-6 space-y-2">
              <legend className="text-sm font-semibold text-[var(--kuct-text)]">
                {q.aiFeatures}
              </legend>
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

          <fieldset className="mt-6 space-y-2">
            <legend className="text-sm font-semibold text-[var(--kuct-text)]">
              {q.design}
            </legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {(Object.keys(q.designOptions) as DesignId[]).map((id) => (
                <ChoiceButton
                  key={id}
                  active={selection.design === id}
                  label={q.designOptions[id]}
                  onClick={() => setSelection((s) => ({ ...s, design: id }))}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6 space-y-2">
            <legend className="text-sm font-semibold text-[var(--kuct-text)]">
              {q.timeline}
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(q.timelineOptions) as TimelineId[]).map((id) => (
                <ChoiceButton
                  key={id}
                  active={selection.timeline === id}
                  label={q.timelineOptions[id]}
                  onClick={() =>
                    setSelection((s) => ({ ...s, timeline: id }))
                  }
                />
              ))}
            </div>
          </fieldset>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-4 border-t border-[var(--kuct-border)] pt-6"
            noValidate
          >
            <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
              {q.contactTitle}
            </h3>
            <div>
              <label
                htmlFor="quote-name"
                className="block text-sm text-[var(--kuct-muted)]"
              >
                {q.name}
              </label>
              <input
                id="quote-name"
                className={fieldClass}
                {...register("name")}
              />
              {errors.name ? (
                <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="quote-contact"
                className="block text-sm text-[var(--kuct-muted)]"
              >
                {q.contact}
              </label>
              <input
                id="quote-contact"
                className={fieldClass}
                {...register("contact")}
              />
              {errors.contact ? (
                <p className="mt-1 text-xs text-red-600">
                  {errors.contact.message}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="quote-note"
                className="block text-sm text-[var(--kuct-muted)]"
              >
                {q.note}
              </label>
              <textarea
                id="quote-note"
                rows={3}
                placeholder={q.notePlaceholder}
                className={fieldClass}
                {...register("note")}
              />
            </div>
            <button
              type="submit"
              className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
            >
              {q.submit}
            </button>
            {sent ? (
              <p className="text-sm text-[var(--kuct-accent)]">{q.sent}</p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
