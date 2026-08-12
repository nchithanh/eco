"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { IntelligenceWorkflowDemo } from "@/components/IntelligenceWorkflowDemo";
import { getDolphinIntelligenceCopy } from "@/lib/i18n/dolphin-intelligence-copy";
import type { WorkflowNodeKind } from "@/lib/i18n/dolphin-intelligence-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/components/QuoteProvider";

const KIND_ACCENT: Record<WorkflowNodeKind, string> = {
  agent: "border-sky-500/35",
  action: "border-emerald-500/35",
  logic: "border-amber-500/40",
  human: "border-orange-500/40",
};

export function DolphinIntelligenceContent({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const { locale } = useLocale();
  const c = getDolphinIntelligenceCopy(locale);
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={embedded ? "pb-6" : undefined}>
      <section
        className={
          embedded
            ? "relative overflow-hidden py-12 sm:py-16"
            : "relative overflow-hidden py-20 sm:py-28"
        }
      >
        <div
          className="pointer-events-none absolute inset-0 kuct-hero-wash"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-4xl text-left">
            <p className="kuct-type-eyebrow">{c.eyebrow}</p>
            <h1 className="kuct-type-h1 mt-4 max-w-[48rem] font-display text-3xl text-[var(--kuct-text)] sm:text-5xl">
              <AccentText>{c.headline}</AccentText>
            </h1>
            <p className="mt-5 max-w-[78ch] text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
              {c.support}
            </p>
            <p className="mt-3 max-w-[78ch] text-sm leading-relaxed text-[var(--kuct-muted)]">
              {c.audienceLine}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
              >
                {c.ctaPrimary}
              </button>
              <a
                href="#workflow-demo"
                className="kuct-btn-ghost inline-flex items-center"
              >
                {c.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 text-xs font-medium tracking-wide text-[var(--kuct-muted)]">
              {c.trustLine}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="workflow-demo"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-workflow-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.workflowEyebrow}
            </p>
            <h2
              id="di-workflow-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.workflowTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.workflowSupport}
            </p>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <IntelligenceWorkflowDemo copy={c} />
          </Reveal>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-pain-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.painEyebrow}
            </p>
            <h2
              id="di-pain-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.painTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.painSupport}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {c.painCols.map((col, i) => (
              <Reveal key={col.title} delay={i * 40}>
                <div
                  className={`h-full rounded-2xl border p-6 ${
                    i === 1
                      ? "border-[var(--kuct-accent)]/35 bg-[var(--kuct-accent)]/5"
                      : "border-[var(--kuct-border)] bg-[var(--kuct-surface)]"
                  }`}
                >
                  <h3 className="font-display text-lg text-[var(--kuct-text)]">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-what-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.whatEyebrow}
            </p>
            <h2
              id="di-what-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.whatTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.whatSupport}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.whatVs.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <div className="h-full rounded-xl border border-[var(--kuct-border)] p-5">
                  <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-pillars-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.pillarsEyebrow}
            </p>
            <h2
              id="di-pillars-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.pillarsTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.pillarsSupport}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 40}>
                <article
                  className={`h-full rounded-xl border-l-4 bg-[var(--kuct-surface)] p-5 ring-1 ring-[var(--kuct-border)] ${KIND_ACCENT[p.kind]}`}
                >
                  <h3 className="font-display text-lg text-[var(--kuct-text)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-agent-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="title">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
                {c.agentEyebrow}
              </p>
              <h2
                id="di-agent-heading"
                className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
              >
                {c.agentTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                {c.agentSupport}
              </p>
              <ul className="mt-6 space-y-4">
                {c.agentItems.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-sm font-semibold text-[var(--kuct-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--kuct-muted)]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={60}>
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
                {c.actionEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl">
                {c.actionTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                {c.actionSupport}
              </p>
              <ul className="mt-6 space-y-2.5">
                {c.actionItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[var(--kuct-muted)]"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-why-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.whyEyebrow}
            </p>
            <h2
              id="di-why-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.whyTitle}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 30}>
                <article className="h-full rounded-xl border border-[var(--kuct-border)] p-5">
                  <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-deploy-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.deployEyebrow}
            </p>
            <h2
              id="di-deploy-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.deployTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.deploySupport}
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.deploySteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 25} as="li">
                <div className="h-full rounded-xl border border-[var(--kuct-border)] p-5">
                  <p className="text-xs font-semibold tracking-wide text-[var(--kuct-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-[var(--kuct-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="di-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <Reveal variant="title" className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.faqEyebrow}
            </p>
            <h2
              id="di-faq-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.faqTitle}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-2">
            {c.faqItems.map((item, i) => {
              const open = openFaq === i;
              const panelId = `${faqId}-panel-${i}`;
              const btnId = `${faqId}-btn-${i}`;
              return (
                <Reveal key={item.q} delay={Math.min(i * 20, 120)}>
                  <div className="rounded-xl border border-[var(--kuct-border)]">
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-[var(--kuct-text)]"
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      {item.q}
                      <span aria-hidden className="text-[var(--kuct-muted)]">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open ? (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        className="border-t border-[var(--kuct-border)] px-4 py-3 text-sm leading-relaxed text-[var(--kuct-muted)]"
                      >
                        <FaqAnswerText text={item.a} />
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 py-16 sm:py-24"
        aria-labelledby="di-close-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal
            variant="title"
            className="mx-auto max-w-3xl rounded-2xl border border-[var(--kuct-accent)]/30 bg-[var(--kuct-accent)]/5 px-6 py-10 text-center sm:px-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.closeEyebrow}
            </p>
            <h2
              id="di-close-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.closeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.closeSupport}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
              >
                {c.closeCta}
              </button>
              <a
                href="#workflow-demo"
                className="kuct-btn-ghost inline-flex items-center"
              >
                {c.closeSecondary}
              </a>
            </div>
            <p className="mt-6 text-xs text-[var(--kuct-muted)]">{c.closeTrust}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function DolphinIntelligencePage() {
  return (
    <main>
      <Nav />
      <DolphinIntelligenceContent />
      <Footer />
    </main>
  );
}
