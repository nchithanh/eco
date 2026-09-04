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
    <Reveal as="li" delay={index * 40} className="h-full">
      <article
        className="kuct-process-card flex h-full flex-col p-5 sm:p-6"
      >
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
          <span className="tabular-nums text-[var(--kuct-accent)]">{num}. </span>
          {step.name}
        </h3>
        <div className="kuct-process-card__rule mt-4 mb-4" aria-hidden />
        <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
          {step.detail}
        </p>
        <dl className="kuct-process-card__out mt-auto pt-3">
          <dt className="text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
            {deliverableLabel}:
          </dt>
          <dd className="mt-1 text-sm leading-snug text-[var(--kuct-text)]">
            {step.deliverable}
          </dd>
        </dl>
      </article>
    </Reveal>
  );
}

/** Process (#process) — Jasper horizontal pastel step cards. */
export function Process() {
  const { t } = useLocale();
  const { eyebrow, title, support, steps, deliverableLabel } = t.process;

  return (
    <section
      id="process"
      className="scroll-mt-20 py-20 sm:py-24"
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

        <ol className="kuct-process-grid mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
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
