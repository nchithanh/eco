"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function WhatYouGet() {
  const { t } = useLocale();
  const { eyebrow, title, support, groupOwn, groupRun, items } = t.whatYouGet;

  const own = items.slice(0, 3);
  const run = items.slice(3, 6);

  return (
    <section id="what-you-get" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="title">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          <DeliverableGroup
            label={groupOwn}
            items={own}
            indexOffset={0}
            leadIndexes={[1]}
          />
          <DeliverableGroup
            label={groupRun}
            items={run}
            indexOffset={3}
            leadIndexes={[5]}
          />
        </div>
      </div>
    </section>
  );
}

function DeliverableGroup({
  label,
  items,
  indexOffset,
  leadIndexes,
}: {
  label: string;
  items: { title: string; body: string }[];
  indexOffset: number;
  leadIndexes: number[];
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-[var(--kuct-muted)] uppercase">
        {label}
      </p>
      <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const index = indexOffset + i;
          const isLead = leadIndexes.includes(index);

          return (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 45}
              className={
                isLead
                  ? "flex gap-3.5 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/30 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40 sm:gap-4"
                  : "flex gap-3.5 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35 sm:gap-4"
              }
            >
              <span
                aria-hidden
                className="mt-0.5 shrink-0 font-display text-xs font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
