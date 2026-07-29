"use client";

import { LazyImage } from "@/components/LazyImage";
import { BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CoFounder() {
  const { t } = useLocale();
  const c = t.cofounder;

  return (
    <section
      id="cofounder"
      className="kuct-section-wash scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="kuct-glass kuct-card-hover grid items-center gap-10 rounded-3xl p-8 sm:p-10 lg:grid-cols-[200px_1fr] lg:gap-14">
          <Reveal className="relative mx-auto w-full max-w-[180px]" variant="left">
            <div
              aria-hidden
              className="animate-kuct-avatar-ring absolute -inset-3 rounded-2xl bg-[var(--kuct-accent)]/25 blur-[1px]"
            />
            <div className="animate-kuct-avatar relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white/80 shadow-[0_20px_50px_rgb(var(--kuct-accent-rgb)/0.25)] ring-4 ring-[var(--kuct-accent)]/25">
              <LazyImage
                src={assetPath("/avatar.png")}
                alt={`${c.name} — ${c.role}`}
                fill
                className="object-cover object-center"
                sizes="180px"
                watermark={false}
              />
            </div>
          </Reveal>

          <Reveal className="text-left" variant="right" delay={100}>
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.eyebrow}
            </p>
            <p className="mt-3 text-sm font-medium text-[var(--kuct-muted)]">
              {c.role}
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl">
              {c.name}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
              <BrandText size="sm">{c.description}</BrandText>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
