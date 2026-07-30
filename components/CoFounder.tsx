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
    <section id="cofounder" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-8 backdrop-blur-md sm:p-10 lg:grid-cols-[200px_1fr] lg:gap-14 lg:p-12">
          <Reveal className="relative mx-auto w-full max-w-[180px]" variant="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--kuct-border)] ring-1 ring-[var(--kuct-accent)]/25">
              <LazyImage
                src={assetPath("/about/founder.png")}
                alt={`${c.name} — ${c.role}`}
                fill
                className="object-cover object-top"
                sizes="180px"
                watermark={false}
              />
            </div>
          </Reveal>

          <Reveal className="min-w-0 text-left" variant="right" delay={100}>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {c.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.5rem] lg:leading-[1.08]">
              {c.name}
            </h2>
            <p className="mt-2 text-sm font-medium tracking-wide text-[var(--kuct-muted)]">
              {c.role}
            </p>
            <p className="mt-5 max-w-[52ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              <BrandText size="sm">{c.description}</BrandText>
            </p>

            {c.stack.length > 0 ? (
              <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
                {c.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.75)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
