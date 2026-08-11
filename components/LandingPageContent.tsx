"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Footer } from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { getLandingCopy } from "@/lib/i18n/landing-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { formatPackageMoney, PACKAGE_PRICES_VND } from "@/lib/pricing-fx";
import { useTheme } from "@/lib/theme";

const LANDING_IMG = {
  hero: "/services/landing/hero.jpg",
  what: "/services/landing/what.jpg",
  conversion: "/services/landing/conversion.jpg",
  process: "/services/landing/process.jpg",
  industries: "/services/landing/industries.jpg",
} as const;

function SectionImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden kuct-surface-card">
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

function withLandingPrice(text: string, price: string): string {
  return text.replaceAll("{{landingPrice}}", price);
}

export function LandingPageContent() {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const c = getLandingCopy(locale);
  const { openQuote } = useQuote();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqId = useId();
  const hero = themeAsset(LANDING_IMG.hero, theme);
  const landingPrice = formatPackageMoney(
    locale,
    PACKAGE_PRICES_VND.landing.now,
  );

  return (
    <main>
      <Nav />

      <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
               <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/#popular-services"
            className="inline-flex text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-accent)]"
          >
            ← {locale === "ja" ? "ホームへ" : locale === "en" ? "Home" : "Về trang chủ"}
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal variant="title" className="min-w-0">
              <p className="kuct-type-eyebrow">
                {c.eyebrow}
              </p>
              <h1 className="kuct-type-h1 mt-4 max-w-[22ch] font-display text-3xl text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem]">
                <AccentText>{c.title}</AccentText>
              </h1>
              <p className="kuct-type-body mt-5 max-w-[46ch]">
                {c.lead}
              </p>
              <p className="mt-4 max-w-[46ch] text-sm leading-[1.65] text-[var(--kuct-text)]/85">
                {c.fitLine}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold"
                  onClick={openQuote}
                >
                  {c.ctaPrimary}
                </button>
                <a
                  href="#landing-pricing"
                  className="kuct-btn-ghost inline-flex items-center"
                >
                  {c.ctaSecondary}
                </a>
              </div>
            </Reveal>
            <Reveal variant="right" delay={80} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden kuct-surface-card sm:aspect-[16/11]">
                                <LazyImage
                  src={hero}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32rem"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="landing-what"
        aria-labelledby="landing-what-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="kuct-type-eyebrow">
              {c.whatEyebrow}
            </p>
            <h2
              id="landing-what-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.whatTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.whatBody}
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <SectionImage src={LANDING_IMG.what} alt={c.whatTitle} />
          </Reveal>
          <Reveal className="mt-10 kuct-surface-card p-5 sm:p-6">
            <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
              {c.whenTitle}
            </h3>
            <ul className="mt-4 list-none space-y-2.5 p-0">
              {c.whenItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-[1.65] text-[var(--kuct-muted)]"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]/70"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="landing-why"
        aria-labelledby="landing-why-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="kuct-type-eyebrow">
              {c.whyEyebrow}
            </p>
            <h2
              id="landing-why-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.whyTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.whyIntro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.whyItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 40}
                className="kuct-surface-card p-5 sm:p-6"
              >
                <p className="text-[11px] font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="landing-include"
        aria-labelledby="landing-include-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="kuct-type-eyebrow">
              {c.includeEyebrow}
            </p>
            <h2
              id="landing-include-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.includeTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.includeIntro}
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <SectionImage
              src={LANDING_IMG.conversion}
              alt={c.includeTitle}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {c.includeGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 50}
                className="kuct-surface-card p-5 sm:p-6"
              >
                <h3 className="font-display text-base font-semibold tracking-wide text-[var(--kuct-text)]">
                  {group.title}
                </h3>
                <ul className="mt-4 list-none space-y-2.5 p-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-[1.65] text-[var(--kuct-muted)]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]/70"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="landing-industries"
        aria-labelledby="landing-industries-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="kuct-type-eyebrow">
              {c.industriesEyebrow}
            </p>
            <h2
              id="landing-industries-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.industriesTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.industriesIntro}
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <SectionImage
              src={LANDING_IMG.industries}
              alt={c.industriesTitle}
            />
          </Reveal>
          <Reveal className="mt-10 overflow-hidden kuct-surface-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--kuct-border)] bg-[var(--kuct-panel-2)]">
                    <th className="px-4 py-3 font-semibold text-[var(--kuct-text)] sm:px-5">
                      {c.industriesHeaders[0]}
                    </th>
                    <th className="px-4 py-3 font-semibold text-[var(--kuct-text)] sm:px-5">
                      {c.industriesHeaders[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.industries.map((row) => (
                    <tr
                      key={row.sector}
                      className="border-b border-[var(--kuct-border)]/60 last:border-0"
                    >
                      <td className="px-4 py-3 font-medium text-[var(--kuct-text)] sm:px-5">
                        {row.sector}
                      </td>
                      <td className="px-4 py-3 text-[var(--kuct-muted)] sm:px-5">
                        {row.goal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="landing-process"
        aria-labelledby="landing-process-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="kuct-type-eyebrow">
              {c.processEyebrow}
            </p>
            <h2
              id="landing-process-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.processTitle}</AccentText>
            </h2>
          </Reveal>
          <Reveal className="mt-8">
            <SectionImage src={LANDING_IMG.process} alt={c.processTitle} />
          </Reveal>
          <ol className="mt-10 list-none space-y-3 p-0">
            {c.processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 40}
                className="kuct-surface-card p-5 sm:p-6"
              >
                <div className="flex gap-4">
                  <span className="font-display text-sm font-semibold tabular-nums text-[var(--kuct-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)] sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.65] text-[var(--kuct-muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="landing-pricing"
        aria-labelledby="landing-pricing-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="kuct-type-eyebrow">
              {c.pricingEyebrow}
            </p>
            <h2
              id="landing-pricing-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.pricingTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.pricingNote}
            </p>
          </Reveal>
          <Reveal className="mt-10 overflow-hidden kuct-surface-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--kuct-border)] bg-[var(--kuct-panel-2)]">
                    {c.pricingHeaders.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 font-semibold text-[var(--kuct-text)] sm:px-5"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.pricingRows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[var(--kuct-border)]/60 last:border-0"
                    >
                      <td className="px-4 py-3 font-medium text-[var(--kuct-text)] sm:px-5">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 font-semibold text-[var(--kuct-accent)] sm:px-5">
                        {withLandingPrice(row.price, landingPrice)}
                      </td>
                      <td className="px-4 py-3 text-[var(--kuct-muted)] sm:px-5">
                        {row.timeline}
                      </td>
                      <td className="px-4 py-3 text-[var(--kuct-muted)] sm:px-5">
                        {row.fit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="mt-8">
            <button
              type="button"
              className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold"
              onClick={openQuote}
            >
              {c.pricingCta}
            </button>
          </div>
        </div>
      </section>

      <section
        id="landing-faq"
        aria-labelledby="landing-faq-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-3xl text-center">
            <p className="kuct-type-eyebrow">
              {c.faqEyebrow}
            </p>
            <h2
              id="landing-faq-heading"
              className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.faqTitle}</AccentText>
            </h2>
          </Reveal>
          <ul className="mt-10 list-none space-y-3 p-0">
            {c.faqItems.map((item, index) => {
              const open = openFaq === index;
              const panelId = `${faqId}-panel-${index}`;
              const buttonId = `${faqId}-btn-${index}`;
              return (
                <li key={item.q}>
                  <Reveal
                    delay={index * 30}
                    className="kuct-surface-card"
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                        onClick={() => setOpenFaq(open ? null : index)}
                      >
                        <span className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)] sm:text-base">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className={`mt-0.5 shrink-0 text-[var(--kuct-accent)] transition ${open ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!open}
                      className="border-t border-[var(--kuct-border)]/50 px-5 pb-5 sm:px-6 sm:pb-6"
                    >
                      <p className="pt-4 text-sm leading-[1.7] text-[var(--kuct-muted)]">
                        <FaqAnswerText
                          text={withLandingPrice(item.a, landingPrice)}
                        />
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        id="landing-close"
        aria-labelledby="landing-close-heading"
        className="scroll-mt-20 py-16 sm:py-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="kuct-surface-card px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="kuct-type-eyebrow">
              {c.closeEyebrow}
            </p>
            <h2
              id="landing-close-heading"
              className="mx-auto mt-4 max-w-[28ch] font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
            >
              <AccentText>{c.closeTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.closeSupport}
            </p>
            <ul className="mx-auto mt-6 flex max-w-lg list-none flex-col gap-2 p-0 text-left sm:text-center">
              {c.closeBullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2.5 text-sm leading-[1.65] text-[var(--kuct-muted)] sm:justify-center"
                >
                  <span aria-hidden className="text-[var(--kuct-accent)]">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {c.contactLinks.map((link) => {
                const isHash = link.href.startsWith("/#") || link.href === "/#contact";
                const isInternal = link.href.startsWith("/");
                if (isHash) {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
                      onClick={openQuote}
                    >
                      {link.label}
                    </button>
                  );
                }
                if (isInternal) {
                  return (
                    <Link
                      key={link.label}
                      href={assetPath(link.href)}
                      className="kuct-btn-ghost inline-flex items-center rounded-[10px] px-6 py-3 text-sm font-semibold"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kuct-btn-ghost inline-flex items-center rounded-[10px] px-6 py-3 text-sm font-semibold"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-xs text-[var(--kuct-muted)]">{c.closeHint}</p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
