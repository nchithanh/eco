"use client";

import { useState } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";

const FIT_IMAGES = [
  "/fit/slide-01.jpg",
  "/fit/slide-02.jpg",
  "/fit/slide-03.jpg",
  "/fit/slide-04.jpg",
] as const;

function FitProfileIcon({ index }: { index: number }) {
  const cls = "size-4 shrink-0";
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4 12h16M12 4c2.2 2.3 3.2 4.8 3.2 8S14.2 17.7 12 20c-2.2-2.3-3.2-4.8-3.2-8S9.8 6.3 12 4z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <path
          d="M5 17l5-9 3 5 2-3 4 7H5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M14 8l2-3 2 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="6.5" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.5" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.5" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8.5 11.2l6.2-3.2M8.5 12.8l6.2 3.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
      <rect
        x="6"
        y="7"
        width="12"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 7V5.8A1.8 1.8 0 0110.8 4h2.4A1.8 1.8 0 0115 5.8V7M8 12h8M8 15h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Soft qualifier tour: ICP list + original Fit slide images. */
export function FitSection() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const fit = t.fit;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!fit) return null;

  const matrix = fit.matrix;
  const hasMatrix = Boolean(matrix && matrix.length > 0);
  const hasYesNo =
    Boolean(fit.noTitle && fit.noItems?.length) &&
    Boolean(fit.yesTitle && fit.yesItems?.length);

  if (!hasMatrix && !hasYesNo) return null;

  const items = hasMatrix
    ? matrix!.map((row, index) => ({
        key: row.profile,
        title: row.profile,
        lead: row.recommended,
        body: row.note,
        image: FIT_IMAGES[index % FIT_IMAGES.length]!,
      }))
    : [
        {
          key: "no",
          title: fit.noTitle!,
          lead: "",
          body: fit.noItems!.join(" · "),
          image: FIT_IMAGES[0]!,
        },
        {
          key: "yes",
          title: fit.yesTitle!,
          lead: "",
          body: fit.yesItems!.join(" · "),
          image: FIT_IMAGES[1]!,
        },
      ];

  const count = items.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const active = items[safeIndex]!;
  const exploreCta = fit.exploreCta ?? "→";

  return (
    <section
      id="fit"
      aria-labelledby="home-fit-heading"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title" className="mx-auto max-w-4xl text-center">
          <p className="kuct-section-eyebrow">{fit.eyebrow}</p>
          <h2
            id="home-fit-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText className="text-[var(--kuct-accent)]">
              {fit.title}
            </AccentText>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.7] text-[var(--kuct-muted)]">
            {fit.support}
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-10 sm:mt-14">
          <div className="kuct-fit-stage grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-12">
            <div className="relative z-10">
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0" role="list">
                {items.map((item, index) => {
                  const selected = index === safeIndex;
                  return (
                    <li key={item.key}>
                      <button
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setActiveIndex(index)}
                        className={
                          selected
                            ? "kuct-fit-item kuct-fit-item--active w-full text-left"
                            : "kuct-fit-item w-full text-left"
                        }
                      >
                        <span
                          className="kuct-fit-item__icon"
                          aria-hidden
                        >
                          <FitProfileIcon index={index % 4} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-sm font-semibold leading-snug text-[var(--kuct-text)] sm:text-[0.95rem]">
                            {item.title}
                          </span>
                          {selected && item.lead ? (
                            <span className="mt-2 inline-flex rounded-[10px] bg-[color-mix(in_srgb,var(--kuct-accent)_12%,white)] px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--kuct-accent)]">
                              {item.lead}
                            </span>
                          ) : null}
                          {selected ? (
                            <span className="mt-2 block text-sm leading-relaxed text-[var(--kuct-muted)]">
                              {item.body}
                            </span>
                          ) : null}
                        </span>
                        {!selected ? (
                          <span
                            className="shrink-0 text-[var(--kuct-muted)]"
                            aria-hidden
                          >
                            →
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--kuct-accent)] no-underline transition hover:opacity-90"
              >
                {exploreCta}
                <span aria-hidden> →</span>
              </a>

              <p className="sr-only" aria-live="polite">
                {active.title}. {active.lead}. {active.body}
              </p>
            </div>

            <div className="relative z-10">
              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-[var(--kuct-panel)] shadow-[0_1rem_2.5rem_rgb(26_22_37/0.08)]">
                <LazyImage
                  key={active.image}
                  src={themeAsset(active.image, theme)}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 36rem"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
