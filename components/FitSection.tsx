"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Soft qualifier: who we are / aren’t a fit for (Basecamp-style). */
export function FitSection() {
  const { t } = useLocale();
  const fit = t.fit;
  if (!fit) return null;

  return (
    <section id="fit" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {fit.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{fit.title}</AccentText>
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {fit.support}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {fit.noTitle}
            </h3>
            <ul className="mt-4 list-none space-y-3 p-0">
              {fit.noItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
                >
                  <span className="shrink-0 text-[var(--kuct-muted)]" aria-hidden>
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={60}
            className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/20 sm:p-6"
          >
            <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {fit.yesTitle}
            </h3>
            <ul className="mt-4 list-none space-y-3 p-0">
              {fit.yesItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
                >
                  <span className="shrink-0 text-[var(--kuct-accent)]" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
