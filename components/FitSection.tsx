"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Soft qualifier: fit matrix (SEO) or yes/no columns. */
export function FitSection() {
  const { t } = useLocale();
  const fit = t.fit;
  if (!fit) return null;

  const matrix = fit.matrix;
  const hasMatrix = Boolean(matrix && matrix.length > 0);
  const hasYesNo =
    Boolean(fit.noTitle && fit.noItems?.length) &&
    Boolean(fit.yesTitle && fit.yesItems?.length);

  if (!hasMatrix && !hasYesNo) return null;

  return (
    <section id="fit" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="title" className="max-w-2xl">
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

        {hasMatrix ? (
          <ul className="mt-10 grid list-none gap-4 p-0 sm:mt-12 sm:grid-cols-2">
            {matrix!.map((row, index) => (
              <Reveal
                as="li"
                key={row.profile}
                delay={index * 50}
                className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 sm:p-6"
              >
                <h3 className="font-display text-base font-semibold text-[var(--kuct-text)] sm:text-lg">
                  {row.profile}
                </h3>
                <p className="mt-3 text-sm font-medium text-[var(--kuct-accent)]">
                  {row.recommended}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {row.note}
                </p>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                {fit.noTitle}
              </h3>
              <ul className="mt-4 list-none space-y-3 p-0">
                {fit.noItems!.map((item) => (
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
                {fit.yesItems!.map((item) => (
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
        )}
      </div>
    </section>
  );
}
