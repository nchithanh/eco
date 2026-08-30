"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type ProcessStepData = {
  name: string;
  detail: string;
  deliverable: string;
};

function ProcessStep({
  step,
  index,
  deliverableLabel,
}: {
  step: ProcessStepData;
  index: number;
  deliverableLabel: string;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="li" delay={index * 50} className="h-full">
      <article className="flex h-full flex-col gap-4 rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)] p-5 sm:flex-row sm:gap-6 sm:p-6">
        <span
          aria-hidden
          className="font-display text-4xl font-semibold leading-none tracking-tight text-[var(--kuct-accent)] tabular-nums sm:text-5xl"
        >
          {num}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
            {step.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
            {step.detail}
          </p>
          <dl className="mt-4 border-t border-[var(--kuct-border)] pt-3">
            <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
              {deliverableLabel}:
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-[var(--kuct-text)]">
              {step.deliverable}
            </dd>
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

export function Process() {
  const { t } = useLocale();
  const { eyebrow, title, support, steps, deliverableLabel } = t.process;

  return (
    <section
      id="process"
      className="kuct-section-soft scroll-mt-20 py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title" className="mx-auto max-w-3xl text-center">
          <p className="kuct-section-eyebrow">{eyebrow}</p>
          <h2
            id="process-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mx-auto mt-5 max-w-[64ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <ol className="mx-auto mt-12 grid max-w-4xl list-none grid-cols-1 gap-4 p-0 sm:mt-14">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.name}
              step={step}
              index={index}
              deliverableLabel={deliverableLabel}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
