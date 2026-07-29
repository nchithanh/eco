"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function SiteOutcomes() {
  const { t } = useLocale();
  const { eyebrow, title, support, items } = t.siteOutcomes;

  return (
    <section
      id="outcomes"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">{support}</p>
        </Reveal>

        <div className="kuct-glass mt-14 rounded-[1.75rem] p-5 sm:p-8">
          <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5">
            {items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 60}
                className="flex gap-4 rounded-2xl border border-white/55 bg-white/45 p-4 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35 hover:bg-white/60 sm:p-5"
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[var(--kuct-accent)] text-xs font-bold text-white shadow-[0_8px_20px_rgba(var(--kuct-accent-rgb),0.28)] sm:size-10 sm:text-sm"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
