"use client";

import { Logo } from "@/components/Logo";
import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function GlassPanels() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[280px] w-full max-w-md sm:h-[340px] lg:mx-0 lg:h-[420px] lg:max-w-none"
    >
      <div className="animate-kuct-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(192,132,252,0.35)_0%,_transparent_65%)] blur-2xl" />
      <div className="animate-kuct-float absolute left-[12%] top-[8%] h-[78%] w-[34%] rounded-[2rem] border border-white/50 bg-gradient-to-br from-white/50 via-[#e9d5ff]/35 to-[#c4b5fd]/25 shadow-[0_25px_60px_rgba(139,92,246,0.2)] backdrop-blur-xl" />
      <div className="animate-kuct-float-delay absolute left-[34%] top-[2%] h-[88%] w-[36%] rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#f5d0fe]/55 via-[#ddd6fe]/40 to-white/30 shadow-[0_30px_70px_rgba(168,85,247,0.22)] backdrop-blur-2xl" />
      <div className="animate-kuct-float absolute right-[8%] top-[12%] h-[72%] w-[32%] rounded-[2rem] border border-white/45 bg-gradient-to-br from-[#c4b5fd]/45 via-white/25 to-[#f0abfc]/30 shadow-[0_20px_50px_rgba(192,132,252,0.25)] backdrop-blur-xl [animation-delay:1.4s]" />
    </div>
  );
}

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-8">
        <div className="animate-kuct-fade relative z-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--kuct-accent)] uppercase shadow-sm backdrop-blur-md">
            {t.hero.eyebrow}
          </p>
          <div className="mt-6 text-[var(--kuct-text)]">
            <Logo className="h-14 w-auto sm:h-16 md:h-20" />
          </div>
          <h1 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
            <BrandText size="sm">{t.hero.support}</BrandText>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#capabilities"
              className="kuct-btn-ghost inline-flex items-center rounded-full px-7 py-3 text-sm font-medium"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="animate-kuct-fade relative z-0 [animation-delay:120ms]">
          <GlassPanels />
        </div>
      </div>
    </section>
  );
}
