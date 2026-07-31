"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { assetPath } from "@/lib/asset";
import { getAgentDolphinCopy } from "@/lib/i18n/agent-dolphin-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/components/QuoteProvider";

const IMG = {
  hero: "/services/agent-dolphin/hero.jpg",
  compare: "/services/agent-dolphin/compare.jpg",
  context: "/services/agent-dolphin/context.jpg",
  care: "/services/agent-dolphin/care.jpg",
  embed: "/services/agent-dolphin/embed.jpg",
} as const;

function SectionImage({
  src,
  alt,
  priority = false,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-[1.5rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] shadow-[0_1rem_2.5rem_rgb(var(--kuct-accent-rgb)/0.12)]`}
    >
      <LazyImage
        src={assetPath(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 56rem, 100vw"
        priority={priority}
      />
    </div>
  );
}

export function AgentDolphinContent({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const c = getAgentDolphinCopy(locale);
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const homePath = assetPath("/").replace(/\/$/, "");
  const contactHref = embedded ? `${homePath}/#contact` : "#contact";
  const otherAgentsHref = assetPath("/custom-agent/");

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
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.eyebrow}
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-5xl">
              <AccentText>{c.headline}</AccentText>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
              {c.support}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                {c.ctaPrimary}
              </button>
              <a
                href={otherAgentsHref}
                className="kuct-btn-ghost inline-flex items-center rounded-full px-7 py-3 text-sm font-medium"
              >
                {c.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 text-xs font-medium tracking-wide text-[var(--kuct-muted)]">
              {c.trustLine}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <SectionImage
              src={IMG.hero}
              alt=""
              priority={!embedded}
            />
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {c.compareEyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{c.compareTitle}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
            {c.compareSupport}
          </p>
          <div className="mx-auto mt-10 max-w-4xl">
            <SectionImage src={IMG.compare} alt="" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="kuct-glass rounded-[1.5rem] p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-[var(--kuct-muted)]">
                {c.oldTitle}
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {c.oldItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-[var(--kuct-accent)]/50">
                      –
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="kuct-glass rounded-[1.5rem] border-[var(--kuct-accent)]/35 p-6 sm:p-8 ring-1 ring-[var(--kuct-accent)]/20">
              <h3 className="font-display text-xl font-semibold text-[var(--kuct-text)]">
                {c.newTitle}
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--kuct-text)]">
                {c.newItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="font-semibold text-[var(--kuct-accent)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="kuct-section-wash scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
                {c.pillarsEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                <AccentText>{c.pillarsTitle}</AccentText>
              </h2>
              <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
                {c.pillarsSupport}
              </p>
              <ul className="mt-8 space-y-4">
                {c.pillars.map((item, index) => (
                  <li key={item.title} className="kuct-glass rounded-2xl p-5">
                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--kuct-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-[var(--kuct-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <SectionImage
              src={IMG.context}
              alt=""
              aspect="aspect-square max-w-lg mx-auto w-full lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {c.howEyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{c.howTitle}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
            {c.howSupport}
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start">
            <SectionImage src={IMG.embed} alt="" />
            <ol className="space-y-4">
              {c.howSteps.map((step, index) => (
                <li
                  key={step.title}
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
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <SectionImage src={IMG.care} alt="" />
          </div>
        </div>
      </section>

      <section className="kuct-section-wash scroll-mt-20 border-t border-[var(--kuct-border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {c.faqEyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{c.faqTitle}</AccentText>
          </h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.7)] shadow-[0_1rem_2.5rem_rgb(var(--kuct-accent-rgb)/0.12)] backdrop-blur-md">
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
          </div>
        </div>
      </section>

      <section
        id={embedded ? undefined : "contact"}
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
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
        </div>
      </section>
    </div>
  );
}

export function AgentDolphinPage() {
  return (
    <main>
      <Nav />
      <AgentDolphinContent />
      <Footer />
    </main>
  );
}
