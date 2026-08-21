"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  OpsAdminCustomizeDemo,
  OpsDynamicUiDemo,
  OpsHeroDemo,
  OpsHumanControlDemo,
  OpsPipelineDemo,
  OpsToolsDemo,
} from "@/components/DolphinOpsDemos";
import { getDolphinOpsCopy } from "@/lib/i18n/dolphin-ops-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/components/QuoteProvider";

const ZALO_HREF = "https://zalo.me/0779937633";

export function DolphinOpsContent() {
  const { locale } = useLocale();
  const c = getDolphinOpsCopy(locale);
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 kuct-hero-wash"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="title" className="text-left">
              <p className="kuct-type-eyebrow">{c.eyebrow}</p>
              <h1 className="kuct-type-h1 mt-4 max-w-[48rem] font-display text-3xl text-[var(--kuct-text)] sm:text-5xl">
                <AccentText>{c.headline}</AccentText>
              </h1>
              <p className="mt-5 max-w-[78ch] text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
                {c.support}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#ops-how"
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  {c.ctaPrimary}
                </a>
                <button
                  type="button"
                  onClick={openQuote}
                  className="kuct-btn-ghost inline-flex items-center"
                >
                  {c.ctaSecondary}
                </button>
              </div>
              <p className="mt-6 text-xs font-medium tracking-wide text-[var(--kuct-muted)]">
                {c.trustLine}
              </p>
            </Reveal>
            <Reveal delay={80} className="min-w-0">
              <OpsHeroDemo copy={c} />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="ops-problem"
        className="kuct-section-wash scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-problem-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.problemEyebrow}
            </p>
            <h2
              id="ops-problem-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.problemTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.problemSupport}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-2xl border border-[var(--kuct-border)] bg-[var(--kuct-surface)] p-6">
                <h3 className="font-display text-lg text-[var(--kuct-text)]">
                  {c.problemTraditionalTitle}
                </h3>
                <ol className="mt-4 space-y-2">
                  {c.problemTraditionalSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-center gap-2 text-sm text-[var(--kuct-muted)]"
                    >
                      <span className="font-mono text-xs text-[var(--kuct-accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                      {i < c.problemTraditionalSteps.length - 1 ? (
                        <span aria-hidden className="text-[var(--kuct-border)]">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
            <Reveal delay={40}>
              <article className="h-full rounded-2xl border border-[var(--kuct-accent)]/35 bg-[var(--kuct-accent)]/5 p-6">
                <h3 className="font-display text-lg text-[var(--kuct-text)]">
                  {c.problemOpsTitle}
                </h3>
                <ol className="mt-4 space-y-2">
                  {c.problemOpsSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-center gap-2 text-sm text-[var(--kuct-text)]"
                    >
                      <span className="font-mono text-xs text-[var(--kuct-accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                      {i < c.problemOpsSteps.length - 1 ? (
                        <span aria-hidden className="text-[var(--kuct-accent)]/50">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <article className="rounded-xl border border-[var(--kuct-border)] p-5">
                <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                  {c.vsCareTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {c.vsCareBody}
                </p>
              </article>
            </Reveal>
            <Reveal delay={30}>
              <article className="rounded-xl border border-[var(--kuct-accent)]/35 bg-[var(--kuct-accent)]/5 p-5">
                <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                  {c.vsOpsTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {c.vsOpsBody}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="ops-how"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-how-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.howEyebrow}
            </p>
            <h2
              id="ops-how-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.howTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.howSupport}
            </p>
          </Reveal>
          <Reveal delay={50} className="mt-10">
            <OpsPipelineDemo copy={c} />
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {c.howSteps.map((step, i) => (
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
        id="ops-tools"
        className="kuct-section-wash scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-tools-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.toolsEyebrow}
            </p>
            <h2
              id="ops-tools-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.toolsTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.toolsSupport}
            </p>
          </Reveal>
          <Reveal delay={50} className="mt-10">
            <OpsToolsDemo copy={c} />
          </Reveal>
        </div>
      </section>

      <section
        id="ops-dynamic"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-dynamic-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.dynamicEyebrow}
            </p>
            <h2
              id="ops-dynamic-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.dynamicTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.dynamicSupport}
            </p>
            <p className="mt-3 text-sm font-medium text-[var(--kuct-text)]">
              {c.dynamicQuote}
            </p>
          </Reveal>
          <Reveal delay={50} className="mt-10">
            <OpsDynamicUiDemo copy={c} />
          </Reveal>
        </div>
      </section>

      <section
        id="ops-customize"
        className="kuct-section-wash scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-customize-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.customizeEyebrow}
            </p>
            <h2
              id="ops-customize-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.customizeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.customizeSupport}
            </p>
          </Reveal>
          <Reveal delay={50} className="mt-10">
            <OpsAdminCustomizeDemo copy={c} />
          </Reveal>
        </div>
      </section>

      <section
        id="ops-examples"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-examples-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.examplesEyebrow}
            </p>
            <h2
              id="ops-examples-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.examplesTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.examplesSupport}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {c.examples.map((item, i) => (
              <Reveal key={item.title} delay={i * 30}>
                <article className="h-full rounded-xl border border-[var(--kuct-border)] bg-[var(--kuct-surface)] p-5">
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
        id="ops-control"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-control-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="title">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
                {c.controlEyebrow}
              </p>
              <h2
                id="ops-control-heading"
                className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
              >
                {c.controlTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                {c.controlSupport}
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--kuct-text)]">
                {c.controlConcept}
              </p>
              <ul className="mt-6 space-y-2">
                {c.controlSensitive.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[var(--kuct-muted)]"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={60}>
              <OpsHumanControlDemo copy={c} />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="ops-philosophy"
        className="kuct-section-wash scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-philosophy-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.philosophyEyebrow}
            </p>
            <h2
              id="ops-philosophy-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.philosophyTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.philosophySupport}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-xl border border-[var(--kuct-border)] p-5">
                <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                  {c.philosophyTraditional.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {c.philosophyTraditional.body}
                </p>
              </article>
            </Reveal>
            <Reveal delay={30}>
              <article className="h-full rounded-xl border border-[var(--kuct-accent)]/35 bg-[var(--kuct-accent)]/5 p-5">
                <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                  {c.philosophyOps.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {c.philosophyOps.body}
                </p>
              </article>
            </Reveal>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {c.philosophyPills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-[var(--kuct-border)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-text)]"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="ops-who"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-who-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.whoEyebrow}
            </p>
            <h2
              id="ops-who-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.whoTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {c.whoSupport}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {c.whoItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 30}>
                <article className="h-full rounded-xl border border-[var(--kuct-border)] p-5">
                  <h3 className="text-base font-semibold text-[var(--kuct-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    <FaqAnswerText text={item.body} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ops-faq"
        className="scroll-mt-20 py-16 sm:py-20"
        aria-labelledby="ops-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <Reveal variant="title" className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.faqEyebrow}
            </p>
            <h2
              id="ops-faq-heading"
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
        id="ops-close"
        className="scroll-mt-20 py-16 sm:py-24"
        aria-labelledby="ops-close-heading"
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
              id="ops-close-heading"
              className="mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
            >
              {c.closeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              <FaqAnswerText text={c.closeSupport} />
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={ZALO_HREF}
                className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
              >
                {c.zaloLabel}
              </a>
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-ghost inline-flex items-center"
              >
                {c.closeCta}
              </button>
              <a href="#ops-how" className="kuct-btn-ghost inline-flex items-center">
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

export function DolphinOpsPage() {
  return (
    <main>
      <Nav />
      <DolphinOpsContent />
      <Footer />
    </main>
  );
}
