"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  PastelPlatformArt,
  type PastelArtId,
} from "@/components/PastelPlatformArt";
import { Reveal } from "@/components/Reveal";

export type PastelTone = "mint" | "peach" | "sky" | "lavender";

export const PASTEL_TONES: PastelTone[] = [
  "mint",
  "peach",
  "sky",
  "lavender",
];

export type PastelPlatformItem = {
  key: string;
  title: string;
  body: string;
  art: PastelArtId;
  href?: string;
  tag?: string;
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-4 shrink-0 text-[var(--kuct-accent)]"
      fill="none"
    >
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RowShell({
  item,
  children,
}: {
  item: PastelPlatformItem;
  children: ReactNode;
}) {
  if (item.href) {
    return (
      <Link
        href={item.href}
        className="kuct-pastel-scroll-row group flex gap-4 no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--kuct-accent)_5%,transparent)]"
      >
        {children}
      </Link>
    );
  }
  return <div className="kuct-pastel-scroll-row flex gap-4">{children}</div>;
}

/** FAQ-style split: sticky copy left, scroll panel of items right. */
export function PastelPlatformSplit({
  eyebrow,
  headingId,
  title,
  support,
  subline,
  footnote,
  actions,
  items,
  tone = "lavender",
}: {
  eyebrow: ReactNode;
  headingId: string;
  title: ReactNode;
  support: ReactNode;
  subline?: ReactNode;
  footnote?: ReactNode;
  actions?: ReactNode;
  items: PastelPlatformItem[];
  tone?: PastelTone;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start lg:gap-14">
      <Reveal variant="title" className="lg:sticky lg:top-28">
        <p className="kuct-section-eyebrow">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-5 max-w-[16ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
        >
          {title}
        </h2>
        {subline ? (
          <p className="mt-3 text-sm font-semibold tracking-wide text-[var(--kuct-accent)] sm:text-base">
            {subline}
          </p>
        ) : null}
        <p className="mt-4 max-w-[36ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
          {support}
        </p>
        {footnote ? (
          <p className="mt-4 text-sm font-medium tracking-wide text-[var(--kuct-text)]">
            {footnote}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
        ) : null}
      </Reveal>

      <Reveal delay={40} className="min-w-0">
        <div
          className="kuct-pastel-scroll-panel"
          data-tone={tone}
          tabIndex={0}
          role="region"
          aria-labelledby={headingId}
        >
          <ul className="m-0 list-none p-0">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li
                  key={item.key}
                  className={
                    isLast
                      ? "kuct-pastel-scroll-item"
                      : "kuct-pastel-scroll-item kuct-pastel-scroll-item--divided"
                  }
                >
                  <RowShell item={item}>
                    <span
                      className="kuct-pastel-scroll-art shrink-0 text-[var(--pastel-ink,var(--kuct-accent))]"
                      aria-hidden
                    >
                      <PastelPlatformArt id={item.art} />
                    </span>
                    <div className="min-w-0 flex-1">
                      {item.tag ? (
                        <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--pastel-ink,var(--kuct-accent))] uppercase opacity-80">
                          {item.tag}
                        </p>
                      ) : null}
                      <h3
                        className={
                          item.tag
                            ? "mt-1.5 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl"
                            : "font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl"
                        }
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {item.body}
                      </p>
                    </div>
                    {item.href ? (
                      <span className="mt-1 shrink-0 self-start">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </RowShell>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
