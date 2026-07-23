"use client";

import { Logo } from "@/components/Logo";
import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

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
      <rect x="7" y="11.5" width="6" height="4" rx="1" fill="currentColor" opacity="0.35" />
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

  const panels = [
    {
      key: "web",
      label: v.web,
      icon: <IconWeb />,
      className:
        "animate-kuct-float absolute left-[6%] top-[10%] flex h-[72%] w-[38%] -rotate-[10deg] flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-white/55 bg-gradient-to-br from-white/70 via-[#e9d5ff]/45 to-[#c4b5fd]/30 p-4 text-center shadow-[0_25px_60px_rgba(139,92,246,0.2)] backdrop-blur-xl",
    },
    {
      key: "automation",
      label: v.automation,
      icon: <IconAutomation />,
      className:
        "animate-kuct-float-delay absolute left-[31%] top-[2%] z-10 flex h-[82%] w-[40%] rotate-[6deg] flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-white/65 bg-gradient-to-br from-[#f5d0fe]/65 via-[#ddd6fe]/45 to-white/40 p-4 text-center shadow-[0_30px_70px_rgba(168,85,247,0.22)] backdrop-blur-2xl",
    },
    {
      key: "ai",
      label: v.ai,
      icon: <IconAi />,
      className:
        "animate-kuct-float absolute right-[4%] top-[14%] flex h-[68%] w-[36%] rotate-[14deg] flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-white/50 bg-gradient-to-br from-[#c4b5fd]/50 via-white/30 to-[#f0abfc]/35 p-4 text-center shadow-[0_20px_50px_rgba(192,132,252,0.25)] backdrop-blur-xl [animation-delay:1.4s]",
    },
  ] as const;

  return (
    <div
      className="relative mx-auto h-[280px] w-full max-w-md sm:h-[340px] lg:mx-0 lg:h-[420px] lg:max-w-none"
      aria-hidden
    >
      <div className="animate-kuct-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(192,132,252,0.35)_0%,_transparent_65%)] blur-2xl" />
      {panels.map((panel) => (
        <div key={panel.key} className={panel.className}>
          <div className="grid size-12 place-items-center rounded-2xl bg-white/55 text-[var(--kuct-accent)] shadow-sm ring-1 ring-white/70">
            {panel.icon}
          </div>
          <p className="font-display text-[11px] font-bold tracking-[0.06em] text-[var(--kuct-text)] uppercase sm:text-xs">
            {panel.label}
          </p>
          <div className="mt-1 h-1 w-10 rounded-full bg-[var(--kuct-accent)]/35" />
        </div>
      ))}
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
