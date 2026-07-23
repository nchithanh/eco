"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Process() {
  const { t } = useLocale();
  const { steps } = t.process;

  return (
    <section
      id="process"
      className="scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {t.process.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {t.process.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">
          {t.process.support}
        </p>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.name}
              className="kuct-glass kuct-card-hover flex flex-col rounded-2xl p-4"
            >
              <span className="text-xs font-medium tracking-widest text-[var(--kuct-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 min-h-[3.5rem] font-display text-lg font-medium leading-snug">
                {step.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--kuct-muted)]">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
