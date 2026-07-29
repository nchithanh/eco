"use client";

import {
  type CSSProperties,
} from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/lib/useInView";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const ROW_TONES = [
  "var(--kuct-accent)",
  "var(--kuct-accent-2)",
  "var(--kuct-btn-from)",
  "var(--kuct-accent-3)",
  "var(--kuct-btn-to)",
  "var(--kuct-accent)",
] as const;

function DeliverableNode({
  title,
  body,
  index,
  tone,
}: {
  title: string;
  body: string;
  index: number;
  tone: string;
}) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
  const col = index % 3;

  return (
    <li
      ref={ref}
      className={`kuct-reveal relative flex h-full min-w-0 flex-col items-center${inView ? " is-inview" : ""}`}
      style={
        {
          "--kuct-reveal-delay": `${Math.min(index, 5) * 70}ms`,
        } as CSSProperties
      }
    >
      {/* Horizontal connectors — only when 3-col tree is active (md+) */}
      {col !== 0 ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-5 right-1/2 left-0 hidden h-px bg-[rgba(var(--kuct-accent-rgb),0.32)] md:block"
        />
      ) : null}
      {col !== 2 ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-5 right-0 left-1/2 hidden h-px bg-[rgba(var(--kuct-accent-rgb),0.32)] md:block"
        />
      ) : null}

      <span
        aria-hidden
        className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
        style={{
          background: tone,
          boxShadow: `0 8px 22px color-mix(in srgb, ${tone} 40%, transparent)`,
        }}
      >
        {index + 1}
      </span>

      <span
        aria-hidden
        className="h-4 w-px shrink-0 bg-[rgba(var(--kuct-accent-rgb),0.28)] sm:h-5 md:h-6"
      />

      <article
        className="flex w-full flex-1 flex-col touch-pan-y rounded-2xl border border-white/60 bg-white/55 p-4 text-left shadow-[0_10px_28px_rgba(var(--kuct-accent-rgb),0.08)] backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[var(--kuct-accent)]/45 hover:shadow-[0_16px_36px_rgba(var(--kuct-accent-rgb),0.14)] sm:p-5"
        style={{
          borderTopWidth: "3px",
          borderTopColor: tone,
        }}
      >
        <h3 className="font-display text-base font-semibold leading-snug text-[var(--kuct-text)] sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
          {body}
        </p>
      </article>
    </li>
  );
}

export function WhatYouGet() {
  const { t } = useLocale();
  const { eyebrow, title, support, items } = t.whatYouGet;

  return (
    <section
      id="what-you-get"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <div className="kuct-glass mx-auto mt-10 overflow-hidden rounded-[1.75rem] p-4 sm:mt-14 sm:p-6 md:p-8">
          <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3 md:gap-x-4 md:gap-y-10">
            {items.map((item, index) => (
              <DeliverableNode
                key={item.title}
                title={item.title}
                body={item.body}
                index={index}
                tone={ROW_TONES[index % ROW_TONES.length]}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
