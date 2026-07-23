"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { isServiceSlug } from "@/lib/i18n/service-details";

export function Capabilities() {
  const { t } = useLocale();
  const { items, filterAll, learnMore } = t.capabilities;
  const [active, setActive] = useState<string>("all");

  const filters = useMemo(() => {
    const cats = items.map((item) => ({
      id: item.id,
      label: item.category,
    }));
    return [{ id: "all", label: filterAll }, ...cats];
  }, [items, filterAll]);

  const visible = useMemo(
    () =>
      active === "all" ? items : items.filter((item) => item.id === active),
    [active, items],
  );

  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {t.capabilities.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {t.capabilities.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">
          {t.capabilities.support}
        </p>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label={t.capabilities.eyebrow}
        >
          {filters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter.id)}
                className={
                  isActive
                    ? "rounded-full bg-[var(--kuct-accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(155,126,248,0.35)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_24px_rgba(155,126,248,0.45)]"
                    : "kuct-chip rounded-full border border-[var(--kuct-text)]/80 bg-transparent px-4 py-2 text-sm font-medium text-[var(--kuct-text)]"
                }
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => {
            const href = isServiceSlug(item.id)
              ? `/services/${item.id}`
              : "/#contact";

            return (
              <li key={item.id}>
                <Link
                  href={href}
                  className="group flex min-h-[280px] flex-col items-center rounded-2xl border border-[var(--kuct-accent)]/15 bg-gradient-to-br from-white via-[#faf5ff] to-[#f3e8ff]/70 px-6 py-8 text-center shadow-[0_10px_30px_rgba(139,92,246,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#fdf2f8] hover:via-[#f5f3ff] hover:to-[#ede9fe] hover:shadow-[0_18px_40px_rgba(139,92,246,0.14)]"
                >
                  <h3 className="font-display text-sm font-bold tracking-[0.08em] text-[var(--kuct-text)] uppercase">
                    {item.title}
                  </h3>
                  <div
                    aria-hidden
                    className="mt-4 h-px w-12 bg-[var(--kuct-text)]/25 transition group-hover:bg-[var(--kuct-accent)]/50"
                  />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 rounded-full border border-[var(--kuct-text)]/70 bg-white/80 px-4 py-2 text-xs font-semibold text-[var(--kuct-text)] transition duration-200 group-hover:border-[var(--kuct-accent)] group-hover:text-[var(--kuct-accent)]">
                    {learnMore}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
