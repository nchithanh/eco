"use client";

import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function WhyKuct() {
  const { t } = useLocale();
  const { reasons } = t.why;

  return (
    <section
      id="why"
      className="scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          <BrandText size="xs">{t.why.eyebrow}</BrandText>
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {t.why.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">
          {t.why.support}
        </p>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="kuct-glass kuct-card-hover rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-medium text-[var(--kuct-text)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {reason.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
