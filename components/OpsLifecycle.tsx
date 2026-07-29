"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Slack / Jira on top; Docs / Lifecycle lower sides (never above step cards). */
const CHIP_POSITIONS = [
  "left-[3%] top-[2%]",
  "right-[3%] top-[3%]",
  "left-[2%] bottom-[18%]",
  "right-[2%] bottom-[16%]",
] as const;

/**
 * Decorative card positions — zigzag L/R but strict top→bottom order 01→06.
 * Cards start below Slack/Jira chips; vertical tops increase each step.
 */
const STEP_LAYOUT = [
  {
    /* 01 — uppermost left */
    className:
      "animate-kuct-soft-float absolute left-[6%] top-[12%] w-[40%] -rotate-[6deg]",
  },
  {
    /* 02 — below 01, right */
    className:
      "animate-kuct-soft-float-alt absolute right-[5%] top-[22%] w-[38%] rotate-[5deg] [animation-delay:0.5s]",
  },
  {
    /* 03 — below 02, left (inward) */
    className:
      "animate-kuct-soft-float absolute left-[10%] top-[36%] w-[42%] rotate-[2deg] [animation-delay:1s]",
  },
  {
    /* 04 — below 03, right (inward) */
    className:
      "animate-kuct-soft-float-alt absolute right-[8%] top-[48%] w-[40%] -rotate-[3deg] [animation-delay:1.4s]",
  },
  {
    /* 05 — below 04, left */
    className:
      "animate-kuct-soft-float absolute left-[20%] top-[62%] w-[38%] rotate-[4deg] [animation-delay:1.8s]",
  },
  {
    /* 06 — lowest, right */
    className:
      "animate-kuct-soft-float-alt absolute right-[5%] top-[74%] w-[40%] -rotate-[2deg] [animation-delay:2.2s]",
  },
] as const;

/** Visual-only extras (EN labels, same as Collect / Normalize / Run / Govern). */
const VISUAL_EXTRA_STEPS = ["Observe", "Improve"] as const;

/** Decorative living ops scene — animated on lg+; static layers below lg / reduced motion. */
function OpsVisualScene({
  chips,
  stepNames,
}: {
  chips: string[];
  stepNames: string[];
}) {
  const visualStepNames = [...stepNames, ...VISUAL_EXTRA_STEPS];

  return (
    <div
      className="relative min-h-[18rem] w-full overflow-hidden sm:min-h-[22rem] lg:min-h-[36rem]"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="kuct-glow-orb animate-kuct-glow absolute inset-[10%] rounded-full blur-2xl opacity-80" />

        {visualStepNames.map((name, index) => {
          const layout = STEP_LAYOUT[index] ?? STEP_LAYOUT[0];
          return (
            <div key={`${name}-${index}`} className={layout.className}>
              <div className="kuct-glass-panel rounded-2xl px-3.5 py-3 shadow-[0_1rem_2rem_rgba(139,92,246,0.14)]">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[var(--kuct-accent)]/20 text-[0.65rem] font-semibold text-[var(--kuct-accent)] ring-1 ring-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate text-xs font-semibold tracking-wide text-[var(--kuct-text)]">
                    {name}
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-white/55" />
                  <div className="h-1.5 w-[70%] rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ul className="pointer-events-none absolute inset-0 z-[2]">
        {chips.map((chip, index) => {
          const position = CHIP_POSITIONS[index] ?? CHIP_POSITIONS[0];
          const motion =
            index % 2 === 0
              ? "animate-kuct-soft-float"
              : "animate-kuct-soft-float-alt";

          return (
            <li
              key={chip}
              className={`absolute ${position} ${motion}`}
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <span className="inline-flex items-center rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--kuct-text)] shadow-[0_0.75rem_1.5rem_rgba(139,92,246,0.18)] backdrop-blur-md ring-1 ring-[var(--kuct-accent)]/15">
                <span className="mr-2 size-1.5 rounded-full bg-[var(--kuct-accent)] shadow-[0_0_0.5rem_rgba(155,126,248,0.8)]" />
                {chip}
              </span>
            </li>
          );
        })}
      </ul>
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
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {o.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              <AccentText>{o.title}</AccentText>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {o.support}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <p className="kuct-glass rounded-2xl border border-white/60 px-4 py-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {o.before}
              </p>
              <p className="kuct-glass rounded-2xl border border-[rgba(var(--kuct-accent-rgb),0.45)] px-4 py-3 text-sm leading-relaxed text-[var(--kuct-text)]">
                {o.after}
              </p>
            </div>

            <ol className="mt-8 grid gap-3" aria-label={o.eyebrow}>
              {o.steps.map((step, index) => (
                <li
                  key={`${step.name}-${index}`}
                  className="kuct-glass rounded-2xl border border-white/60 p-4"
                >
                  <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--kuct-accent)] uppercase">
                    {String(index + 1).padStart(2, "0")} · {step.name}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {step.detail}
                  </p>
                </li>
              ))}
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
              stepNames={o.steps.map((s) => s.name)}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
