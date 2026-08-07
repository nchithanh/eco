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

/** Soft qualifier carousel: who Dolphin Software fits (SEO). */
export function FitSection() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const fit = t.fit;
  const { prevPage, nextPage } = t.capabilities;
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [slideTick, setSlideTick] = useState(0);

  if (!fit) return null;

  const matrix = fit.matrix;
  const hasMatrix = Boolean(matrix && matrix.length > 0);
  const hasYesNo =
    Boolean(fit.noTitle && fit.noItems?.length) &&
    Boolean(fit.yesTitle && fit.yesItems?.length);

  if (!hasMatrix && !hasYesNo) return null;

  const slides = hasMatrix
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

  const count = slides.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const slide = slides[safeIndex]!;

  const navigate = (next: number, direction: 1 | -1) => {
    if (next === safeIndex || count === 0) return;
    setSlideDirection(direction);
    setSlideTick((tick) => tick + 1);
    setActiveIndex(next);
  };

  const goPrev = () => navigate((safeIndex - 1 + count) % count, -1);
  const goNext = () => navigate((safeIndex + 1) % count, 1);
  const goTo = (index: number) => {
    if (index === safeIndex) return;
    const forward = (index - safeIndex + count) % count;
    const direction: 1 | -1 = forward <= count / 2 ? 1 : -1;
    navigate(index, direction);
  };

  const slideClass =
    slideTick > 0
      ? slideDirection === 1
        ? "kuct-home-news-slide-next"
        : "kuct-home-news-slide-prev"
      : "";

  return (
    <section
      id="fit"
      aria-labelledby="home-fit-heading"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="title" className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {fit.eyebrow}
          </p>
          <h2
            id="home-fit-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{fit.title}</AccentText>
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-[var(--kuct-muted)]">
            {fit.support}
          </p>
        </Reveal>

        <Reveal delay={60} className="relative mt-10 sm:mt-14">
          <div className="flex items-center gap-3 sm:gap-5">
            {count > 1 ? (
              <button
                type="button"
                onClick={goPrev}
                aria-label={prevPage}
                className="hidden size-10 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel)] text-[var(--kuct-muted)] shadow-[0_4px_14px_rgb(26_21_32/0.08)] transition hover:text-[var(--kuct-text)] sm:grid"
              >
                <span aria-hidden>←</span>
              </button>
            ) : null}

            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={fit.eyebrow}
              className="min-w-0 flex-1 overflow-hidden"
            >
              <div
                key={`${safeIndex}-${slideTick}`}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${slideClass}`.trim()}
              >
                <div className="order-2 text-left lg:order-1">
                  <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-[1.75rem] lg:text-[2rem] lg:leading-[1.15]">
                    {slide.title}
                  </h3>
                  {slide.lead ? (
                    <p className="mt-4 text-sm font-semibold text-[var(--kuct-accent)] sm:text-base">
                      {slide.lead}
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
                    {slide.body}
                  </p>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[10px] bg-[var(--kuct-panel)]">
                    <LazyImage
                      src={themeAsset(slide.image, theme)}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 32rem"
                    />
                  </div>
                </div>
              </div>
            </div>

            {count > 1 ? (
              <button
                type="button"
                onClick={goNext}
                aria-label={nextPage}
                className="hidden size-10 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel)] text-[var(--kuct-muted)] shadow-[0_4px_14px_rgb(26_21_32/0.08)] transition hover:text-[var(--kuct-text)] sm:grid"
              >
                <span aria-hidden>→</span>
              </button>
            ) : null}
          </div>

          {count > 1 ? (
            <div className="mt-8 flex items-center justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={goPrev}
                aria-label={prevPage}
                className="grid size-10 place-items-center rounded-[10px] bg-[var(--kuct-panel)] text-[var(--kuct-muted)] shadow-[0_4px_14px_rgb(26_21_32/0.08)]"
              >
                <span aria-hidden>←</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={nextPage}
                className="grid size-10 place-items-center rounded-[10px] bg-[var(--kuct-panel)] text-[var(--kuct-muted)] shadow-[0_4px_14px_rgb(26_21_32/0.08)]"
              >
                <span aria-hidden>→</span>
              </button>
            </div>
          ) : null}

          {count > 1 ? (
            <div
              role="tablist"
              aria-label={fit.eyebrow}
              className="mt-6 flex justify-center gap-2"
            >
              {slides.map((item, index) => {
                const selected = index === safeIndex;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={item.title}
                    onClick={() => goTo(index)}
                    className={
                      selected
                        ? "h-2 w-6 rounded-[10px] bg-[var(--kuct-accent)]"
                        : "size-2 rounded-[10px] bg-[var(--kuct-border)] transition hover:bg-[var(--kuct-muted)]"
                    }
                  />
                );
              })}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
