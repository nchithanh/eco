"use client";

import Image from "next/image";
import { AccentText, BrandText } from "@/components/BrandName";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  parallaxPx,
  useParallaxScrollY,
} from "@/lib/use-parallax-scroll";

function IconWeb() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden>
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6.2" cy="6.5" r="0.8" fill="currentColor" />
      <circle cx="8.6" cy="6.5" r="0.8" fill="currentColor" />
      <rect
        x="7"
        y="11.5"
        width="6"
        height="4"
        rx="1"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden>
      <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 7h8M7.2 8.8l3.5 6M16.8 8.8l-3.5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAi() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden>
      <path
        d="M12 3.5l1.4 4.2L17.5 9l-4.1 1.3L12 14.5l-1.4-4.2L6.5 9l4.1-1.3L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 14.2l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M5.5 15.5l.55 1.65L7.7 17.7l-1.65.55L5.5 19.9l-.55-1.65L3.3 17.7l1.65-.55.55-1.65z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

function GlassPanels() {
  const { t } = useLocale();
  const v = t.hero.visual;
  const scrollY = useParallaxScrollY();
  const glowY = parallaxPx(scrollY, 0.1, 36);
  const midY = parallaxPx(scrollY, 0.06, 24);
  const sideY = parallaxPx(scrollY, 0.04, 18);
  const lateY = parallaxPx(scrollY, 0.08, 28);
  const mascotY = parallaxPx(scrollY, 0.14, 42);

  const panels = [
    {
      key: "automation",
      label: v.automation,
      icon: <IconAutomation />,
      y: sideY,
      className:
        "kuct-glass-panel kuct-hero-panel kuct-hero-panel--side absolute left-[2%] top-[18%] z-[1] flex h-[58%] w-[32%] -rotate-[5deg] flex-col items-center justify-center gap-2 rounded-xl p-3 text-center opacity-75",
    },
    {
      key: "web",
      label: v.web,
      icon: <IconWeb />,
      y: midY,
      className:
        "kuct-glass-panel kuct-hero-panel kuct-hero-panel--mid absolute left-[28%] top-[4%] z-10 flex h-[78%] w-[44%] rotate-[3deg] flex-col items-center justify-center gap-3 rounded-xl p-5 text-center",
    },
    {
      key: "ai",
      label: v.ai,
      icon: <IconAi />,
      y: lateY,
      className:
        "kuct-glass-panel kuct-hero-panel kuct-hero-panel--side kuct-hero-panel--late absolute right-[6%] top-[22%] z-[1] flex h-[54%] w-[30%] rotate-[5deg] flex-col items-center justify-center gap-2 rounded-xl p-3 text-center opacity-70",
    },
  ] as const;

  return (
    <div
      className="pointer-events-none relative mx-auto h-[260px] w-full max-w-md touch-pan-y sm:h-[320px] lg:mx-0 lg:h-[440px] lg:max-w-none"
      aria-hidden
    >
      <div
        className="kuct-glow-orb kuct-glow-orb--soft absolute inset-[18%] rounded-full opacity-40 blur-3xl will-change-transform"
        style={{ transform: `translate3d(0, ${glowY}px, 0)` }}
      />
      {panels.map((panel) => (
        <div
          key={panel.key}
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(0, ${panel.y}px, 0)` }}
        >
          <div className={panel.className}>
            <div
              className={
                panel.key === "web"
                  ? "grid size-12 place-items-center rounded-xl bg-[var(--kuct-panel-2)] text-[var(--kuct-accent)] shadow-[0_8px_20px_rgb(26_21_32/0.08)] sm:size-14"
                  : "grid size-9 place-items-center rounded-lg bg-[var(--kuct-panel-2)] text-[var(--kuct-accent)] shadow-[0_4px_12px_rgb(26_21_32/0.06)] sm:size-10"
              }
            >
              {panel.icon}
            </div>
            <p
              className={
                panel.key === "web"
                  ? "font-display text-[11px] font-bold tracking-[0.08em] text-[var(--kuct-text)] uppercase sm:text-xs"
                  : "font-display text-[10px] font-semibold tracking-[0.06em] text-[var(--kuct-muted)] uppercase"
              }
            >
              {panel.label}
            </p>
            {panel.key === "web" ? (
              <div className="mt-1 h-1 w-10 rounded-full bg-[var(--kuct-accent)]/40" />
            ) : null}
          </div>
        </div>
      ))}
      <div className="kuct-hero-reflection absolute inset-x-0 top-full h-[40%] opacity-40" />
      <div
        className="pointer-events-none absolute -right-3 -bottom-2 z-20 max-w-[42%] will-change-transform sm:-right-4 sm:max-w-[40%] lg:-right-10 lg:-bottom-3 lg:max-w-[42%]"
        style={{ transform: `translate3d(0, ${mascotY}px, 0)` }}
      >
        <Image
          src={assetPath("/mascot/dolphin-eco.webp")}
          alt=""
          width={800}
          height={994}
          aria-hidden
          priority
          className="kuct-mascot-float h-40 w-auto object-contain drop-shadow-[0_16px_32px_rgb(26_21_32/0.12)] select-none sm:h-48 lg:h-52"
        />
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
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-16">
        <div className="relative z-10 max-w-xl touch-pan-y">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {t.hero.eyebrow}
            </p>
            {t.hero.aiPill ? (
              <span className="rounded-[10px] bg-[rgba(var(--kuct-accent-rgb),0.1)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-accent)] uppercase">
                {t.hero.aiPill}
              </span>
            ) : null}
          </div>
          <h1 className="kuct-title-enter mt-5 max-w-[28ch] font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:max-w-[32ch] sm:text-4xl lg:max-w-[30ch] lg:text-[2.85rem] lg:leading-[1.1]">
            <AccentText>{t.hero.headline}</AccentText>
          </h1>
          <p className="kuct-title-enter mt-4 max-w-[44ch] font-display text-base font-semibold leading-snug tracking-tight text-[var(--kuct-text)] [animation-delay:80ms] sm:text-lg lg:text-xl lg:leading-snug">
            <AccentText>{t.hero.subhead}</AccentText>
          </p>
          <p className="mt-5 max-w-[42ch] touch-pan-y text-base leading-[1.7] text-[var(--kuct-muted)] sm:text-[1.0625rem] sm:leading-[1.7]">
            <BrandText size="sm">{t.hero.support}</BrandText>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openQuote}
              className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold shadow-[0_14px_36px_rgb(26_21_32/0.18)]"
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
        <div className="animate-kuct-fade relative z-0 [animation-delay:120ms]">
          <GlassPanels />
        </div>
      </div>
    </section>
  );
}
