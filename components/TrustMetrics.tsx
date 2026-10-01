"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Stats + positioning chips — sits directly under Hero. */
export function TrustMetrics() {
  const { t } = useLocale();
  const { aria, items, chips } = t.trustMetrics;

  return (
    <section
      id="trust"
      aria-labelledby="home-trust-heading"
      className="scroll-mt-20 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="home-trust-heading" className="sr-only">
          {aria}
        </h2>
        <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-8 p-0 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
          {items.map((item) => (
            <li key={`stat-${item.label}`} className="min-w-0 text-center">
              <p className="font-display text-2xl font-medium tracking-tight text-[var(--kuct-text)] sm:text-[1.75rem]">
                {item.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-[var(--kuct-muted)]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        {chips.length > 0 ? (
          <ul className="mt-8 flex list-none flex-wrap items-center justify-center gap-2 p-0 sm:mt-10">
            {chips.map((chip) => (
              <li
                key={`chip-${chip.value}-${chip.label}`}
                className="rounded-[10px] bg-[var(--kuct-surface-muted)] px-3 py-2 text-center sm:px-4"
              >
                <span className="block text-sm font-medium tracking-tight text-[var(--kuct-text)]">
                  {chip.value}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-[var(--kuct-muted)]">
                  {chip.label}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
