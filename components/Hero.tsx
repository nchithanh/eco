"use client";

import Image from "next/image";
import { AccentText, BrandText } from "@/components/BrandName";
import { HeroSitePreview } from "@/components/HeroSitePreview";
import { useMascotSrc } from "@/components/useMascotSrc";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function TagIcon({ index }: { index: number }) {
  const common = "size-4 shrink-0 text-[var(--kuct-accent)]";
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <path
          d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
        <rect
          x="5"
          y="7"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7M8 12h8M8 15h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 12h15M12 4.5c2.2 2.4 3.3 4.9 3.3 7.5S14.2 17.1 12 19.5C9.8 17.1 8.7 14.6 8.7 12S9.8 6.9 12 4.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroCollage() {
  const { t } = useLocale();
  const metrics = t.hero.metrics;
  const tags = t.hero.tags;
  const ecoSrc = useMascotSrc("eco");

  return (
    <div className="kuct-hero-collage relative mx-auto w-full max-w-6xl touch-pan-y">
      <div className="kuct-hero-collage__stage" aria-hidden>
        <span className="kuct-hero-collage__shape kuct-hero-collage__shape--tri" />
        <span className="kuct-hero-collage__shape kuct-hero-collage__shape--orb" />
        <span className="kuct-hero-collage__shape kuct-hero-collage__shape--orb2" />
        <span className="kuct-hero-collage__shape kuct-hero-collage__shape--dots" />
        <span className="kuct-hero-collage__shape kuct-hero-collage__shape--dots-left" />
      </div>

      <div className="kuct-hero-collage__layout relative z-10">
        <ul className="kuct-hero-collage__tags">
          {tags.map((tag, index) => (
            <li key={tag}>
              <span className="kuct-hero-chip">
                <TagIcon index={index} />
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="kuct-hero-collage__frame">
          <div className="kuct-hero-collage__panel">
            <div aria-hidden>
              <HeroSitePreview />
            </div>
          </div>
        </div>

        <div className="kuct-hero-collage__aside">
          <div className="kuct-hero-collage__mascot" aria-hidden>
            <Image
              src={ecoSrc}
              alt=""
              width={800}
              height={994}
              priority
              className="h-28 w-auto object-contain drop-shadow-[0_12px_28px_rgb(26_21_32/0.14)] select-none sm:h-36 lg:h-40"
            />
          </div>
          <div className="kuct-hero-collage__metrics" aria-hidden>
            {metrics.map((m) => (
              <div key={m.label} className="kuct-hero-metric">
                <p className="kuct-hero-metric__value font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[0.7rem] leading-snug font-medium text-[var(--kuct-muted)]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLocale();
  const banner = t.banner;
  const offerHref = assetPath("/website-36-thang/");

  return (
    <section
      id="top"
      className="relative isolate overflow-x-clip touch-pan-y"
      aria-labelledby="home-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 kuct-hero-wash"
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-14 pb-16 text-center sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="relative z-10 w-full max-w-5xl touch-pan-y">
          {banner ? (
            <p className="mb-5 flex justify-center sm:mb-6">
              <a
                href={offerHref}
                className="kuct-hero-announce inline-flex max-w-full items-center gap-2 rounded-[10px] px-3.5 py-2 text-left no-underline transition hover:opacity-95 sm:px-4 sm:py-2.5"
              >
                <span className="min-w-0 text-[0.7rem] leading-snug font-medium text-[var(--kuct-text)] sm:text-[0.78rem]">
                  <BrandText size="xs">{banner.text}</BrandText>
                </span>
                <span className="shrink-0 text-[0.7rem] font-semibold text-[var(--kuct-accent)] sm:text-[0.78rem]">
                  {banner.ctaMore}
                  <span aria-hidden> →</span>
                </span>
              </a>
            </p>
          ) : null}

          <p className="kuct-section-eyebrow">{t.hero.eyebrow}</p>
          {t.hero.aiPill ? (
            <span className="kuct-badge mt-3">{t.hero.aiPill}</span>
          ) : null}

          <h1
            id="home-hero-heading"
            className="kuct-title-enter kuct-hero-display mt-4 text-[2.05rem] sm:mt-5 sm:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.05]"
          >
            <AccentText className="kuct-hero-accent">
              {t.hero.headline}
            </AccentText>
          </h1>

          <p className="kuct-title-enter mx-auto mt-5 max-w-5xl text-[0.98rem] leading-[1.65] font-medium text-[var(--kuct-muted)] [animation-delay:60ms] sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.7]">
            {t.hero.subhead}
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-[0.95rem] leading-[1.65] text-[var(--kuct-muted)] sm:text-base">
            <BrandText size="sm">{t.hero.support}</BrandText>
          </p>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed tracking-wide text-[var(--kuct-muted)] italic sm:mt-6 sm:text-[0.9375rem]">
            {t.hero.trustLine}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#solutions"
              className="kuct-btn-outline inline-flex min-w-[9.5rem] items-center justify-center rounded-lg px-6 py-3.5 text-sm"
            >
              {t.hero.ctaSecondary}
            </a>
            <a
              href="#contact"
              className="kuct-btn-primary inline-flex min-w-[12rem] items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold"
            >
              {t.hero.ctaPrimary}
            </a>
          </div>
        </div>

        <div className="animate-kuct-fade relative z-0 mt-10 w-full sm:mt-12 [animation-delay:100ms] lg:mt-14">
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}
