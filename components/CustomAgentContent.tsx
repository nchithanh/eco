"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { getCustomAgentCopy } from "@/lib/i18n/custom-agent-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/components/QuoteProvider";

export function CustomAgentContent({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const c = getCustomAgentCopy(locale);
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const homePath = assetPath("/").replace(/\/$/, "");
  const contactHref = embedded ? `${homePath}/#contact` : "#contact";
  const servicesHref = embedded ? `${homePath}/#capabilities` : "/#capabilities";

  return (
    <div className={embedded ? "pb-6" : undefined}>
      <section
        className={
          embedded
            ? "relative overflow-hidden border-b border-[var(--kuct-border)] py-12 sm:py-16"
            : "relative overflow-hidden border-b border-[var(--kuct-border)] py-20 sm:py-28"
        }
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.08)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.05)]" />
        <div className="relative mx-auto max-w-6xl px-6 text-left">
          <Reveal className="max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[48rem] font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-5xl">
              <AccentText>{c.headline}</AccentText>
            </h1>
            <p className="mt-5 max-w-[78ch] text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg lg:max-w-4xl">
              {c.support}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                {c.ctaPrimary}
              </button>
              <a
                href={servicesHref}
                className="kuct-btn-ghost inline-flex items-center rounded-full px-7 py-3 text-sm font-medium"
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

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.compareEyebrow}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.compareTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
              {c.compareSupport}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <Reveal delay={40} className="h-full">
              <article className="kuct-glass flex h-full flex-col rounded-[1.5rem] p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-[var(--kuct-muted)]">
                  {c.offShelfTitle}
                </h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {c.offShelfItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-[var(--kuct-accent)]/50">
                        –
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={100} className="h-full">
              <article className="kuct-glass flex h-full flex-col rounded-[1.5rem] border-[var(--kuct-accent)]/35 p-6 sm:p-8 ring-1 ring-[var(--kuct-accent)]/20">
                <h3 className="font-display text-xl font-semibold text-[var(--kuct-text)]">
                  {c.customTitle}
                </h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-[var(--kuct-text)]">
                  {c.customItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="font-semibold text-[var(--kuct-accent)]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="kuct-section-wash scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.whenEyebrow}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.whenTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
              {c.whenSupport}
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {c.whenItems.map((item, index) => (
              <Reveal
                key={item.title}
                as="li"
                delay={40 + index * 40}
                className="kuct-glass rounded-2xl p-6"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-[var(--kuct-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-[var(--kuct-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.processEyebrow}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.processTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
              {c.processSupport}
            </p>
          </Reveal>
          <ol className="mx-auto mt-12 max-w-3xl space-y-4">
            {c.processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                as="li"
                delay={40 + index * 40}
                className="kuct-glass flex gap-4 rounded-2xl p-5 sm:p-6"
              >
                <span
                  aria-hidden
                  className="grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--kuct-accent)" }}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="kuct-section-wash scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.industriesEyebrow}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.industriesTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
              {c.industriesSupport}
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.industries.map((item, index) => (
              <Reveal
                key={item.name}
                as="li"
                delay={40 + (index % 3) * 40}
                className="kuct-glass rounded-2xl p-5"
              >
                <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.faqEyebrow}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.faqTitle}</AccentText>
            </h2>
          </Reveal>
          <Reveal
            delay={60}
            className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.7)] shadow-[0_1rem_2.5rem_rgb(var(--kuct-accent-rgb)/0.12)] backdrop-blur-md"
          >
            {c.faqItems.map((item, index) => {
              const open = openFaq === index;
              const panelId = `${faqId}-panel-${index}`;
              const buttonId = `${faqId}-btn-${index}`;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.12)] sm:px-6 sm:text-base"
                      onClick={() =>
                        setOpenFaq((cur) => (cur === index ? null : index))
                      }
                    >
                      <span>{item.q}</span>
                      <span aria-hidden className="text-[var(--kuct-accent)]">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-5 pb-4 text-sm leading-relaxed text-[var(--kuct-muted)] sm:px-6"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section
        id={embedded ? undefined : "contact"}
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.closeEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              <AccentText>{c.closeTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--kuct-muted)]">
              {c.closeSupport}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                {c.closeCta}
              </button>
              {!embedded ? (
                <a
                  href={contactHref}
                  className="kuct-btn-ghost inline-flex items-center rounded-full px-7 py-3 text-sm font-medium"
                >
                  {c.ctaPrimary}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function CustomAgentPage() {
  return (
    <main>
      <Nav />
      <CustomAgentContent />
      <Footer />
    </main>
  );
}
