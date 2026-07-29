"use client";

import {
  type CSSProperties,
} from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/lib/useInView";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const STEP_TONES = [
  "var(--kuct-accent)",
  "var(--kuct-accent-2)",
  "var(--kuct-btn-from)",
  "var(--kuct-accent-3)",
  "var(--kuct-btn-to)",
] as const;

type ProcessStepData = {
  name: string;
  detail: string;
  deliverable: string;
};

function ProcessStep({
  step,
  index,
  tone,
  deliverableLabel,
}: {
  step: ProcessStepData;
  index: number;
  tone: string;
  deliverableLabel: string;
}) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.18, rootMargin: "0px 0px -6% 0px" });

  return (
    <li
      ref={ref}
      className={`kuct-reveal relative pl-12 sm:pl-14${inView ? " is-inview" : ""}`}
      style={
        {
          "--kuct-reveal-delay": `${Math.min(index, 4) * 70}ms`,
        } as CSSProperties
      }
    >
      <span
        aria-hidden
        className="absolute top-5 left-0 z-10 grid size-9 place-items-center rounded-full text-xs font-bold text-white shadow-[0_8px_20px_rgba(var(--kuct-accent-rgb),0.28)] sm:size-10 sm:text-sm"
        style={{
          background: tone,
          boxShadow: `0 8px 22px color-mix(in srgb, ${tone} 40%, transparent)`,
        }}
      >
        {index + 1}
      </span>

      <article
        className="touch-pan-y rounded-2xl border border-white/60 bg-white/55 p-5 shadow-[0_10px_28px_rgba(var(--kuct-accent-rgb),0.08)] backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[var(--kuct-accent)]/45 hover:shadow-[0_16px_36px_rgba(var(--kuct-accent-rgb),0.14)] sm:p-6"
        style={{
          borderLeftWidth: "4px",
          borderLeftColor: tone,
        }}
      >
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
          {step.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
          {step.detail}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-text)]">
          <span className="font-semibold text-[var(--kuct-accent)]">
            {deliverableLabel}:{" "}
          </span>
          {step.deliverable}
        </p>
      </article>
    </li>
  );
}

export function Process() {
  const { t } = useLocale();
  const { steps, deliverableLabel } = t.process;

  return (
    <section
      id="process"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{t.process.title}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
            {t.process.support}
          </p>
        </Reveal>

        <div className="kuct-glass mx-auto mt-14 max-w-3xl rounded-[1.75rem] p-5 sm:p-8">
          <ol className="relative m-0 list-none space-y-5 p-0 sm:space-y-6">
            <div
              aria-hidden
              className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-[rgba(var(--kuct-accent-rgb),0.22)] sm:left-[1.4rem]"
            />

            {steps.map((step, i) => (
              <ProcessStep
                key={step.name}
                step={step}
                index={i}
                tone={STEP_TONES[i % STEP_TONES.length]}
                deliverableLabel={deliverableLabel}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
