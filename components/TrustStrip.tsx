"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export function TrustStrip() {
  const { t } = useLocale();
  const { aria, eyebrow, title, support, items } = t.trust;

  return (
    <section
      id="handover"
      aria-label={aria}
      className="border-t border-white/40 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-center font-display text-2xl font-semibold sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
          {support}
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {items.map((item) => (
            <li
              key={item.value}
              className="kuct-glass rounded-2xl px-4 py-4 text-left"
            >
              <p className="font-display text-sm font-semibold text-[var(--kuct-text)] sm:text-base">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-[var(--kuct-muted)] sm:text-sm">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}