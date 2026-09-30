"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Compact trust stats strip — sits directly under Hero. */
export function TrustMetrics() {
  const { t } = useLocale();
  const { aria, items } = t.trustMetrics;

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
            <li key={item.label} className="min-w-0 text-center">
              <p className="font-display text-2xl font-medium tracking-tight text-[var(--kuct-text)] sm:text-[1.75rem]">
                {item.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-[var(--kuct-muted)]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
