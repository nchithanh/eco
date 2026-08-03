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
  isLead,
}: {
  step: ProcessStepData;
  index: number;
  deliverableLabel: string;
  isLead: boolean;
}) {
  return (
    <Reveal
      as="li"
      delay={index * 50}
      className="relative pl-12 sm:pl-14"
    >
      <span
        aria-hidden
        className={
          isLead
            ? "absolute top-5 left-0 z-10 grid size-9 place-items-center rounded-full border border-[var(--kuct-accent)]/50 bg-[rgba(12,8,24,0.95)] font-display text-xs font-semibold tabular-nums text-[var(--kuct-accent)] ring-1 ring-[var(--kuct-accent)]/35 sm:size-10"
            : "absolute top-5 left-0 z-10 grid size-9 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.95)] font-display text-xs font-semibold tabular-nums text-[var(--kuct-accent)]/80 sm:size-10"
        }
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <article
        className={
          isLead
            ? "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/25 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40 sm:p-6"
            : "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35 sm:p-6"
        }
      >
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
          {step.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
          {step.detail}
        </p>

        <dl className="mt-4 rounded-xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.65)] px-3 py-2.5 ring-1 ring-[var(--kuct-accent)]/15">
          <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
            {deliverableLabel}:
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-[var(--kuct-text)]">
            {step.deliverable}
          </dd>
        </dl>
      </article>
    </Reveal>
  );
}

export function Process() {
  const { t } = useLocale();
  const { eyebrow, title, support, steps, deliverableLabel } = t.process;
  const lastIndex = steps.length - 1;

  return (
    <section id="process" className="scroll-mt-20 py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="title" className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {eyebrow}
          </p>
          <h2
            id="process-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <ol className="relative mx-auto mt-12 max-w-3xl list-none space-y-5 p-0 sm:mt-14">
          <span
            aria-hidden
            className="pointer-events-none absolute top-3 bottom-3 left-[1.05rem] w-px bg-[rgba(var(--kuct-accent-rgb),0.28)] sm:left-[1.15rem]"
          />

          {steps.map((step, index) => (
            <ProcessStep
              key={step.name}
              step={step}
              index={index}
              deliverableLabel={deliverableLabel}
              isLead={index === lastIndex}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
