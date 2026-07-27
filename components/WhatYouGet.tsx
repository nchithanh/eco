"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { AccentText } from "@/components/BrandName";
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
  isFirst,
  isLast,
}: {
  title: string;
  body: string;
  index: number;
  tone: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`kuct-reveal relative flex h-full min-w-[220px] flex-1 flex-col items-center sm:min-w-0${inView ? " is-inview" : ""}`}
      style={
        {
          "--kuct-reveal-delay": `${Math.min(index, 5) * 70}ms`,
        } as CSSProperties
      }
    >
      {!isFirst ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-5 right-1/2 left-0 hidden h-px bg-[rgba(var(--kuct-accent-rgb),0.32)] md:block"
        />
      ) : null}
      {!isLast ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-5 right-0 left-1/2 hidden h-px bg-[rgba(var(--kuct-accent-rgb),0.32)] md:block"
        />
      ) : null}

      <span
        aria-hidden
        className="relative z-10 grid size-10 place-items-center rounded-full text-sm font-bold text-white"
        style={{
          background: tone,
          boxShadow: `0 8px 22px color-mix(in srgb, ${tone} 40%, transparent)`,
        }}
      >
        {index + 1}
      </span>

      <span
        aria-hidden
        className="h-5 w-px bg-[rgba(var(--kuct-accent-rgb),0.28)] md:h-6"
      />

      <article
        className="flex w-full flex-1 flex-col touch-pan-y rounded-2xl border border-white/60 bg-white/55 p-4 text-center shadow-[0_10px_28px_rgba(var(--kuct-accent-rgb),0.08)] backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[var(--kuct-accent)]/45 hover:shadow-[0_16px_36px_rgba(var(--kuct-accent-rgb),0.14)] sm:p-5 md:text-left"
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

function HorizontalTreeRow({
  items,
  startIndex,
}: {
  items: { title: string; body: string }[];
  startIndex: number;
}) {
  return (
    <div className="relative min-w-0">
      <span
        aria-hidden
        className="pointer-events-none absolute top-5 right-[calc(100%/6)] left-[calc(100%/6)] hidden h-px bg-[rgba(var(--kuct-accent-rgb),0.32)] md:block"
      />
      <ol className="m-0 flex list-none gap-6 overflow-x-auto p-0 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-0 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map((item, rowIndex) => {
          const index = startIndex + rowIndex;
          return (
            <DeliverableNode
              key={item.title}
              title={item.title}
              body={item.body}
              index={index}
              tone={ROW_TONES[index % ROW_TONES.length]}
              isFirst={rowIndex === 0}
              isLast={rowIndex === items.length - 1}
            />
          );
        })}
      </ol>
    </div>
  );
}

export function WhatYouGet() {
  const { t } = useLocale();
  const { eyebrow, title, support, items } = t.whatYouGet;
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3, 6);

  return (
    <section
      id="what-you-get"
      className="scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
          <AccentText>{title}</AccentText>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
          {support}
        </p>

        <div className="kuct-glass mx-auto mt-14 overflow-hidden rounded-[1.75rem] p-5 sm:p-8">
          <div className="relative flex flex-col gap-12 md:gap-14">
            <span
              aria-hidden
              className="pointer-events-none absolute top-[calc(50%-0.5rem)] left-1/2 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[rgba(var(--kuct-accent-rgb),0.22)] md:block"
            />
            <HorizontalTreeRow items={firstRow} startIndex={0} />
            <HorizontalTreeRow items={secondRow} startIndex={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
