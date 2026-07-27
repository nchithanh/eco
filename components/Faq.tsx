"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Faq() {
  const { t } = useLocale();
  const f = t.faq;
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="kuct-section-wash scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {f.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl">
            <AccentText>{f.title}</AccentText>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
            {f.support}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden rounded-2xl border border-white/60 bg-white/55 shadow-[0_1rem_2.5rem_rgb(var(--kuct-accent-rgb)/0.08)] backdrop-blur-md">
          {f.items.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-btn-${index}`;
            const open = openIndex === index;

            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-white/50 sm:px-6 sm:text-base"
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? null : index))
                    }
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden
                      className="grid size-7 shrink-0 place-items-center rounded-full border border-[var(--kuct-accent)]/25 bg-white/70 text-[var(--kuct-accent)]"
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="px-5 pb-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:px-6 sm:text-[0.9375rem]"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
