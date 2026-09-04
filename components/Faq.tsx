"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
    >
      <path
        d={open ? "M6 14.5L12 8.5l6 6" : "M6 9.5l6 6 6-6"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Homepage FAQ — Jasper 2-col (badge + accordion); Dolphin violet accent. */
export function Faq() {
  const { t } = useLocale();
  const f = t.faq;
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="kuct-faq scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start lg:gap-14">
          <Reveal variant="title" className="lg:sticky lg:top-28">
            <span className="kuct-faq-badge">{f.eyebrow}</span>
            <h2
              id="faq-heading"
              className="mt-6 max-w-[16ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
            >
              <AccentText>{f.title}</AccentText>
            </h2>
            <p className="mt-4 max-w-[36ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {f.support}
            </p>
          </Reveal>

          <Reveal delay={40} className="min-w-0">
            <div className="kuct-faq-panel">
              {f.items.map((item, index) => {
                const panelId = `${baseId}-panel-${index}`;
                const buttonId = `${baseId}-btn-${index}`;
                const open = openIndex === index;
                const isLast = index === f.items.length - 1;

                return (
                  <div
                    key={item.q}
                    className={
                      isLast
                        ? "kuct-faq-row"
                        : "kuct-faq-row kuct-faq-row--divided"
                    }
                  >
                    <h3 className="m-0">
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        className="kuct-faq-trigger flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                        onClick={() =>
                          setOpenIndex((current) =>
                            current === index ? null : index,
                          )
                        }
                      >
                        <span className="font-display text-base font-semibold leading-snug text-[var(--kuct-text)] sm:text-lg">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="kuct-faq-chevron grid size-8 shrink-0 place-items-center rounded-[10px]"
                        >
                          <Chevron open={open} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!open}
                      className="px-5 pb-5 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:px-6 sm:pb-6"
                    >
                      <FaqAnswerText text={item.a} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
