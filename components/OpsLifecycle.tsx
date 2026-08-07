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
 className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md sm:p-6"
 aria-hidden
 >
 <div className="pointer-events-none absolute inset-[18%] rounded-full opacity-60 blur-2xl kuct-glow-orb" />

 <div className="relative z-[1] flex w-full max-w-[17.5rem] flex-col items-center sm:max-w-[19rem]">
 <div className="flex flex-wrap items-center justify-center gap-2">
 {chips.map((chip) => (
 <span
 key={chip}
 className="inline-flex items-center rounded-[10px] bg-[rgba(10,10,20,0.9)] px-3 py-1 text-[11px] font-semibold tracking-wide text-[var(--kuct-muted)]"
 >
 <span className="mr-2 size-1.5 rounded-full bg-[var(--kuct-accent)]/80" />
 {chip}
 </span>
 ))}
 </div>

 <div className="mx-auto mt-3 mb-2 h-4 w-px bg-gradient-to-b from-[rgba(var(--kuct-accent-rgb),0.45)] to-[rgba(var(--kuct-accent-rgb),0.15)]" />

 <ol className="relative m-0 w-full list-none space-y-2 p-0">
 <span
 className="pointer-events-none absolute top-3 bottom-3 left-[0.95rem] w-px bg-[rgba(var(--kuct-accent-rgb),0.28)] sm:left-[1.05rem]"
 />

 {steps.map((step, index) => {
 const isLead = LEAD_STEP_INDEXES.has(index);

 return (
 <li key={`${step.name}-${index}`} className="relative flex items-center gap-2.5">
 <span
 className={
 isLead
 ? "relative z-[1] grid size-8 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel-2)] text-[0.65rem] font-semibold tabular-nums text-[var(--kuct-accent)] "
 : "relative z-[1] grid size-8 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel)] text-[0.65rem] font-semibold tabular-nums text-[var(--kuct-muted)]"
 }
 >
 {String(index + 1).padStart(2, "0")}
 </span>
 <div
 className={
 isLead
 ? "min-w-0 flex-1 rounded-lg bg-[var(--kuct-panel-2)] px-3 py-2 "
 : "min-w-0 flex-1 rounded-lg bg-[var(--kuct-panel-2)] px-3 py-2"
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

 <p className="mt-3 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-accent)]/80 uppercase">
 <span aria-hidden>↻</span>
 {loopHint}
 </p>
 </div>
 </div>
 );
}

export function OpsLifecycle() {
 const { t } = useLocale();
 const o = t.ops;

 return (
 <section id="ops" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-8 lg:gap-x-16">
 <Reveal variant="title" className="max-w-xl md:col-start-1 md:row-start-1">
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
 </Reveal>

 <Reveal variant="left" className="md:col-start-1 md:row-start-2">
 <ol className="grid gap-2.5" aria-label={o.eyebrow}>
 {o.steps.map((step, index) => {
 const isLead = LEAD_STEP_INDEXES.has(index);

 return (
 <li
 key={`${step.name}-${index}`}
 className={
 isLead
 ? "flex gap-3.5 rounded-xl bg-[var(--kuct-panel)] p-4 backdrop-blur-md"
 : "flex gap-3.5 rounded-xl bg-[var(--kuct-panel)] p-4 backdrop-blur-md"
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
 </Reveal>

 <Reveal
 variant="right"
 delay={120}
 className="relative h-full w-full md:col-start-2 md:row-start-2"
 inViewOptions={{ threshold: 0.05, rootMargin: "0px 0px -2% 0px" }}
 >
 <OpsVisualScene
 chips={o.chips}
 steps={o.steps}
 loopHint={o.loopHint}
 />
 </Reveal>

 <Reveal className="md:col-start-1 md:row-start-3">
 <a
 href="#contact"
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 >
 {o.cta}
 </a>
 </Reveal>
 </div>
 </div>
 </section>
 );
}
