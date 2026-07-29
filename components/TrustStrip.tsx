"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function TrustStrip() {
  const { t } = useLocale();
  const { aria, eyebrow, title, support, items } = t.trust;

  const core = items.slice(0, 4);
  const warranty = items[4];

  return (
    <section
      id="handover"
      aria-label={aria}
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {core.map((item, index) => {
            const isLead = index === 0;

            return (
              <Reveal
                as="li"
                key={item.value}
                delay={index * 45}
                className={
                  isLead
                    ? "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/30 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40"
                    : "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35"
                }
              >
                <p className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                  {item.value}
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.label}
                </p>
              </Reveal>
            );
          })}
        </ul>

        {warranty ? (
          <Reveal
            delay={200}
            className="mt-5 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/30 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40 sm:p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <p className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                {warranty.value}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-right">
                {warranty.label}
              </p>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
