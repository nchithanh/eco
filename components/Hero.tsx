"use client";

import Image from "next/image";
import { AccentText, BrandText } from "@/components/BrandName";
import { EmbedSiteMock } from "@/components/EmbedSiteMock";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { MASCOT } from "@/lib/mascot";

function HeroSignature() {
  const { t } = useLocale();
  const metrics = t.hero.metrics;

  return (
    <div className="relative mx-auto w-full max-w-md touch-pan-y lg:mx-0 lg:max-w-none">
      <div className="relative min-h-[22rem] sm:min-h-[26rem]">
        <EmbedSiteMock
          url="yourbusiness.com"
          showChat={false}
          animate
          className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-xl border border-[var(--kuct-border)] bg-[var(--kuct-panel)] shadow-[var(--kuct-shadow)] sm:min-h-[26rem]"
        />

        <div
          className="pointer-events-none absolute -bottom-2 -left-2 z-20 flex max-w-[min(100%,14rem)] gap-2 sm:-bottom-3 sm:-left-3"
          aria-hidden
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="kuct-surface-card rounded-[10px] bg-white/95 px-3 py-2 backdrop-blur-sm"
            >
              <p className="font-display text-lg font-semibold tracking-tight text-[var(--kuct-text)]">
                {m.value}
              </p>
              <p className="text-[0.65rem] leading-snug font-medium text-[var(--kuct-muted)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute -right-2 -bottom-3 z-20 max-w-[38%] sm:-right-4 sm:max-w-[36%] lg:-right-6 lg:-bottom-4 lg:max-w-[40%]">
          <Image
            src={assetPath(MASCOT.eco)}
            alt=""
            width={800}
            height={994}
            aria-hidden
            priority
            className="h-28 w-auto object-contain drop-shadow-[0_12px_28px_rgb(26_21_32/0.12)] select-none sm:h-36 lg:h-40"
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLocale();
  const { openQuote } = useQuote();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[min(100svh,52rem)] items-center overflow-x-clip touch-pan-y lg:min-h-[calc(100svh-5.5rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 kuct-hero-wash"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-16">
        <div className="relative z-10 max-w-xl touch-pan-y">
          <p className="kuct-type-eyebrow text-[11px] sm:text-xs">
            {t.hero.eyebrow}
          </p>
          {t.hero.aiPill ? (
            <span className="kuct-badge mt-3">{t.hero.aiPill}</span>
          ) : null}

          <h1 className="kuct-title-enter kuct-type-h1 mt-5 max-w-[28ch] text-[1.85rem] sm:max-w-[32ch] sm:text-4xl lg:max-w-[30ch] lg:text-[2.85rem]">
            <AccentText>{t.hero.headline}</AccentText>
          </h1>
          <p className="kuct-title-enter mt-4 max-w-[44ch] font-display text-base font-semibold leading-snug tracking-tight text-[var(--kuct-text)] [animation-delay:80ms] sm:text-lg lg:text-xl lg:leading-snug">
            <AccentText>{t.hero.subhead}</AccentText>
          </p>
          <p className="kuct-type-body mt-5 max-w-[42ch] touch-pan-y text-base sm:text-[1.0625rem]">
            <BrandText size="sm">{t.hero.support}</BrandText>
          </p>

          <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
            {t.hero.tags.map((tag) => (
              <li key={tag}>
                <span className="kuct-badge">{tag}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openQuote}
              className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold shadow-[var(--kuct-shadow)]"
            >
              {t.hero.ctaPrimary}
            </button>
            <a
              href="#capabilities"
              className="kuct-btn-ghost inline-flex items-center self-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed tracking-wide text-[var(--kuct-muted)]">
            {t.hero.trustLine}
          </p>
        </div>

        <div className="animate-kuct-fade relative z-0 pb-10 [animation-delay:120ms] sm:pb-12">
          <HeroSignature />
        </div>
      </div>
    </section>
  );
}
