"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const LEAD_STEP_INDEXES = new Set([2, 4]); // Run, Govern

function OpsVisualScene({
  chips,
  steps,
  loopHint,
}: {
  chips: string[];
  steps: { name: string }[];
  loopHint: string;
}) {
  return (
    <div
      className="relative flex h-full min-h-[18rem] w-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 backdrop-blur-md sm:min-h-[22rem] sm:p-6 lg:min-h-[36rem] lg:p-7"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-[12%] rounded-full opacity-70 blur-2xl kuct-glow-orb" />

      <div className="relative z-[1] flex flex-wrap items-center justify-center gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,20,0.9)] px-3 py-1 text-[11px] font-semibold tracking-wide text-[var(--kuct-muted)]"
          >
            <span className="mr-2 size-1.5 rounded-full bg-[var(--kuct-accent)]/80" />
            {chip}
          </span>
        ))}
      </div>

      <div className="relative z-[1] mx-auto mt-4 mb-3 h-6 w-px bg-gradient-to-b from-[rgba(var(--kuct-accent-rgb),0.45)] to-[rgba(var(--kuct-accent-rgb),0.15)]" />

      <ol className="relative z-[1] m-0 flex flex-1 list-none flex-col justify-between gap-2 p-0">
        <span
          className="pointer-events-none absolute top-3 bottom-10 left-[1.15rem] w-px bg-[rgba(var(--kuct-accent-rgb),0.28)] sm:left-[1.25rem]"
        />

        {steps.map((step, index) => {
          const isLead = LEAD_STEP_INDEXES.has(index);

          return (
            <li key={`${step.name}-${index}`} className="relative flex items-center gap-3">
              <span
                className={
                  isLead
                    ? "relative z-[1] grid size-9 shrink-0 place-items-center rounded-full border border-[var(--kuct-accent)]/50 bg-[rgba(12,8,24,0.95)] text-[0.65rem] font-semibold tabular-nums text-[var(--kuct-accent)] ring-1 ring-[var(--kuct-accent)]/35 sm:size-10 sm:text-xs"
                    : "relative z-[1] grid size-9 shrink-0 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.95)] text-[0.65rem] font-semibold tabular-nums text-[var(--kuct-muted)] sm:size-10 sm:text-xs"
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                className={
                  isLead
                    ? "min-w-0 flex-1 rounded-xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.92)] px-3.5 py-2.5 ring-1 ring-[var(--kuct-accent)]/25 sm:px-4"
                    : "min-w-0 flex-1 rounded-xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.72)] px-3.5 py-2.5 sm:px-4"
                }
              >
                <span className="block truncate text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {step.name}
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="relative z-[1] mt-4 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-accent)]/80 uppercase">
        <span aria-hidden>↻</span>
        {loopHint}
      </p>
    </div>
  );
}

export function OpsLifecycle() {
  const { t } = useLocale();
  const o = t.ops;

  return (
    <section id="ops" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-stretch gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <Reveal className="max-w-xl" variant="left">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {o.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
              <AccentText>{o.title}</AccentText>
            </h2>
            <p className="mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {o.support}
            </p>

            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
              <span>{o.before}</span>
              <span aria-hidden className="text-[var(--kuct-accent)]/70">
                →
              </span>
              <span className="text-[var(--kuct-text)]">{o.after}</span>
            </p>

            <ol className="mt-8 grid gap-2.5" aria-label={o.eyebrow}>
              {o.steps.map((step, index) => {
                const isLead = LEAD_STEP_INDEXES.has(index);

                return (
                  <li
                    key={`${step.name}-${index}`}
                    className={
                      isLead
                        ? "flex gap-3.5 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-4 ring-1 ring-[var(--kuct-accent)]/25 backdrop-blur-md"
                        : "flex gap-3.5 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-4 backdrop-blur-md"
                    }
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 font-display text-xs font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <span className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                        {step.name}
                      </span>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <a
              href="#contact"
              className="kuct-btn-primary mt-8 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
            >
              {o.cta}
            </a>
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className="relative min-h-[18rem] w-full sm:min-h-[22rem] lg:min-h-[36rem]"
            inViewOptions={{ threshold: 0.05, rootMargin: "0px 0px -2% 0px" }}
          >
            <OpsVisualScene
              chips={o.chips}
              steps={o.steps}
              loopHint={o.loopHint}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
