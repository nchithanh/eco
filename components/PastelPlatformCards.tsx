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
      className="size-4 shrink-0 text-[var(--kuct-text)]"
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

export function PastelPlatformHeader({
  eyebrow,
  headingId,
  title,
  support,
  subline,
  footnote,
  actions,
}: {
  eyebrow: ReactNode;
  headingId: string;
  title: ReactNode;
  support: ReactNode;
  subline?: ReactNode;
  footnote?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <Reveal variant="title" className="mx-auto max-w-3xl text-center">
      <p className="kuct-section-eyebrow">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {subline ? (
        <p className="mt-3 text-sm font-semibold tracking-wide text-[var(--kuct-accent)] sm:text-base">
          {subline}
        </p>
      ) : null}
      <p className="mx-auto mt-4 max-w-[64ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
        {support}
      </p>
      {footnote ? (
        <p className="mx-auto mt-4 text-sm font-medium tracking-wide text-[var(--kuct-text)]">
          {footnote}
        </p>
      ) : null}
      {actions ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {actions}
        </div>
      ) : null}
    </Reveal>
  );
}

function CardShell({
  item,
  tone,
  children,
}: {
  item: PastelPlatformItem;
  tone: PastelTone;
  children: ReactNode;
}) {
  if (item.href) {
    return (
      <Link
        href={item.href}
        className="kuct-pastel-card group flex h-full flex-col no-underline"
        data-tone={tone}
      >
        {children}
      </Link>
    );
  }
  return (
    <div className="kuct-pastel-card flex h-full flex-col" data-tone={tone}>
      {children}
    </div>
  );
}

export function PastelPlatformGrid({
  items,
  columns = 3,
  tone: toneOverride,
}: {
  items: PastelPlatformItem[];
  columns?: 3 | 4;
  /** Force every card to one pastel tone (e.g. Why → lavender/violet). */
  tone?: PastelTone;
}) {
  const gridClass =
    columns === 4
      ? "mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4"
      : "mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={gridClass} data-pastel-cols={columns}>
      {items.map((item, index) => {
        const tone =
          toneOverride ?? PASTEL_TONES[index % PASTEL_TONES.length] ?? "mint";
        return (
          <Reveal as="li" key={item.key} delay={index * 40} className="h-full">
            <article className="h-full">
              <CardShell item={item} tone={tone}>
                <div className="kuct-pastel-card__body flex flex-1 flex-col p-5 sm:p-6">
                  <div className="kuct-pastel-card__head">
                    <p
                      className={
                        item.tag
                          ? "text-[10px] font-semibold tracking-[0.16em] text-[var(--pastel-ink)] uppercase opacity-80"
                          : "invisible text-[10px] font-semibold tracking-[0.16em] uppercase"
                      }
                      aria-hidden={!item.tag}
                    >
                      {item.tag ?? "·"}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-[var(--kuct-text)] sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className="kuct-pastel-card__art mt-4 flex flex-1 items-center justify-center text-[var(--pastel-ink)]"
                    aria-hidden
                  >
                    <span
                      className="kuct-pastel-card__art-stage"
                      style={{ animationDelay: `${(index % 4) * -0.9}s` }}
                    >
                      <PastelPlatformArt id={item.art} />
                    </span>
                  </div>
                </div>
                <div className="kuct-pastel-card__bar flex items-start justify-between gap-3 px-5 py-4 sm:px-6">
                  <p className="kuct-pastel-card__copy min-w-0 flex-1 text-sm leading-relaxed text-[var(--kuct-text)]">
                    {item.body}
                  </p>
                  {item.href ? (
                    <span className="mt-0.5 shrink-0">
                      <ArrowIcon />
                    </span>
                  ) : null}
                </div>
              </CardShell>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}
