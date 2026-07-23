"use client";

import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CareersHero() {
  const { t } = useLocale();
  const h = t.careers.hero;

  return (
    <section className="relative overflow-hidden border-b border-white/40 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-white/40 to-[#ede9fe]/80" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {h.eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-5xl">
          <BrandText size="md">{h.headline}</BrandText>
        </h1>
        <p className="mt-4 max-w-xl text-base text-[var(--kuct-muted)] sm:text-lg">
          {h.support}
        </p>
      </div>
    </section>
  );
}
