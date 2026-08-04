"use client";

import type { MouseEvent, PointerEvent as ReactPointerEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";
import { useTheme } from "@/lib/theme";
import {
  getNewsImage,
  listNews,
  type NewsListItem,
} from "@/lib/news-details";

const HOME_DISPLAY_COUNT = 5;
const DRAG_THRESHOLD_PX = 48;

type SlideDirection = 1 | -1;

type DragState = {
  pointerId: number | null;
  startX: number;
  deltaX: number;
  dragging: boolean;
  suppressClick: boolean;
};

function resolveSlideDirection(
  from: number,
  to: number,
  total: number,
): SlideDirection {
  if (from === to) return 1;
  const forward = (to - from + total) % total;
  return forward <= total / 2 ? 1 : -1;
}

function formatCarouselDate(locale: Locale, isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  const tag =
    locale === "vi" ? "vi-VN" : locale === "ja" ? "ja-JP" : "en-US";
  return new Intl.DateTimeFormat(tag, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

function CarouselCard({
  item,
  categoryLabel,
  dateLabel,
  active,
  onOpen,
}: {
  item: NewsListItem;
  categoryLabel: string;
  dateLabel: string;
  active: boolean;
  onOpen: (href: string, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { theme } = useTheme();
  const href = assetPath(`/news/${item.slug}/`);

  return (
    <article className="contents">
      <a
        href={href}
        draggable={false}
        onClick={(event) => onOpen(href, event)}
        className={
          active
            ? "group relative flex w-[min(100%,18.5rem)] shrink-0 flex-col overflow-hidden rounded-2xl border border-[var(--kuct-accent)]/55 bg-[rgba(8,8,20,0.92)] shadow-[0_0_2.5rem_rgba(var(--kuct-accent-rgb),0.28)] transition duration-500 sm:w-[20rem] lg:w-[21rem]"
            : "group relative flex w-[min(78vw,15rem)] shrink-0 flex-col overflow-hidden rounded-2xl border border-[var(--kuct-border)]/80 bg-[rgba(6,6,14,0.78)] opacity-55 transition duration-500 hover:opacity-75 sm:w-[16rem] lg:w-[17rem]"
        }
        aria-current={active ? "true" : undefined}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[rgba(12,10,24,0.6)]">
          <LazyImage
            src={themeAsset(getNewsImage(item.slug), theme)}
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 78vw, 21rem"
          />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.75)] via-transparent to-[rgba(4,4,12,0.15)]" />
        <time
          dateTime={item.date}
          className="absolute left-3 top-3 rounded-full border border-[var(--kuct-accent)]/30 bg-[rgba(6,6,14,0.82)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--kuct-text)] backdrop-blur-sm"
        >
          {dateLabel}
        </time>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--kuct-accent)] uppercase">
          {categoryLabel}
        </p>
        <h3 className="mt-2 line-clamp-3 font-display text-base font-semibold leading-snug tracking-tight text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)] sm:text-[1.05rem]">
          {item.title}
        </h3>
        <div className="mt-auto flex items-end justify-between pt-4">
          <span
            aria-hidden
            className="text-sm text-[var(--kuct-muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--kuct-accent)]"
          >
            →
          </span>
          {active ? (
            <span
              aria-hidden
              className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--kuct-accent)]/45 bg-[rgba(var(--kuct-accent-rgb),0.14)] text-[var(--kuct-accent)] shadow-[0_0_1.25rem_rgba(var(--kuct-accent-rgb),0.35)] transition group-hover:bg-[rgba(var(--kuct-accent-rgb),0.22)]"
            >
              ↗
            </span>
          ) : null}
        </div>
      </div>
    </a>
    </article>
  );
}

export function HomeNews() {
  const { locale, t } = useLocale();
  const { openHref } = usePagePreview();
  const n = t.news;

  const items = useMemo(
    () => listNews(locale).slice(0, HOME_DISPLAY_COUNT),
    [locale],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(1);
  const [slideTick, setSlideTick] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<DragState>({
    pointerId: null,
    startX: 0,
    deltaX: 0,
    dragging: false,
    suppressClick: false,
  });

  if (items.length === 0) {
    return null;
  }

  const viewAllHref = assetPath("/news/");
  const count = items.length;
  const safeIndex = activeIndex % count;
  const prevIndex = (safeIndex - 1 + count) % count;
  const nextIndex = (safeIndex + 1) % count;
  const showSideCards = count > 1;
  /** With exactly 2 items, prev and next resolve to the same slug — show one peek only. */
  const showPrevSide = showSideCards;
  const showNextSide = showSideCards && count > 2;

  const navigate = (nextIndex: number, direction: SlideDirection) => {
    if (nextIndex === safeIndex) return;
    setSlideDirection(direction);
    setSlideTick((tick) => tick + 1);
    setActiveIndex(nextIndex);
  };

  const goPrev = () => navigate(prevIndex, -1);
  const goNext = () => navigate(nextIndex, 1);
  const goTo = (index: number) => {
    navigate(index, resolveSlideDirection(safeIndex, index, count));
  };

  const handleCardOpen = (href: string, event: MouseEvent<HTMLAnchorElement>) => {
    if (dragRef.current.suppressClick) {
      event.preventDefault();
      dragRef.current.suppressClick = false;
      return;
    }
    openHref(href, event);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const target = event.currentTarget;
    if (target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }

    if (drag.dragging && Math.abs(drag.deltaX) >= DRAG_THRESHOLD_PX) {
      drag.suppressClick = true;
      if (drag.deltaX < 0) goNext();
      else goPrev();
    }

    dragRef.current = {
      pointerId: null,
      startX: 0,
      deltaX: 0,
      dragging: false,
      suppressClick: drag.suppressClick,
    };
    setDragOffset(0);
    setIsDragging(false);
  };

  const onTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!showSideCards || event.button !== 0) return;
    // Desktop: let card links receive plain clicks; use arrows/dots to slide.
    if (event.pointerType === "mouse") return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      deltaX: 0,
      dragging: false,
      suppressClick: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onTrackPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    drag.deltaX = deltaX;

    if (!drag.dragging && Math.abs(deltaX) > 8) {
      drag.dragging = true;
      setIsDragging(true);
    }

    if (drag.dragging) {
      setDragOffset(deltaX);
    }
  };

  const slideClass =
    slideTick > 0 && !isDragging
      ? slideDirection === 1
        ? "kuct-home-news-slide-next"
        : "kuct-home-news-slide-prev"
      : "";

  const trackStyle =
    dragOffset !== 0
      ? {
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging
            ? "none"
            : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }
      : undefined;

  return (
    <section
      id="news"
      aria-labelledby="home-news-heading"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -left-24 top-8 size-56 rounded-full bg-[rgba(var(--kuct-accent-rgb),0.12)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-[rgba(59,130,246,0.08)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="title">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <p className="shrink-0 text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
                {n.homeCarouselEyebrow}
              </p>
              <span
                className="h-px flex-1 max-w-xs bg-gradient-to-r from-[var(--kuct-accent)]/50 to-transparent"
                aria-hidden
              />
            </div>
            <h2
              id="home-news-heading"
              className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
            >
              <AccentText>{n.homeCarouselTitle}</AccentText>
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="max-w-[42ch] text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                {n.homeCarouselSupport}
              </p>
              <a
                href={viewAllHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--kuct-accent)] transition hover:text-[var(--kuct-text)]"
                onClick={(event) => openHref(viewAllHref, event)}
              >
                {n.viewAll}
                <span
                  aria-hidden
                  className="inline-flex size-7 items-center justify-center rounded-full border border-[var(--kuct-accent)]/35 text-xs"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60} className="relative mt-10 sm:mt-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {showSideCards ? (
              <button
                type="button"
                onClick={goPrev}
                aria-label={n.prevPage}
                className="hidden shrink-0 rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-2.5 text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-text)] sm:inline-flex"
              >
                <span aria-hidden className="text-lg leading-none">
                  ←
                </span>
              </button>
            ) : null}

            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={n.homeCarouselTitle}
              className={`kuct-home-news-track min-w-0 flex-1 sm:flex-none ${isDragging ? "is-dragging" : ""}`.trim()}
              onPointerDown={onTrackPointerDown}
              onPointerMove={onTrackPointerMove}
              onPointerUp={finishDrag}
              onPointerCancel={finishDrag}
            >
              <div
                key={slideTick}
                style={trackStyle}
                className={`flex min-w-0 items-center justify-center gap-3 overflow-hidden sm:gap-5 lg:gap-6 ${slideClass}`.trim()}
              >
                {showPrevSide ? (
                  <CarouselCard
                    item={items[prevIndex]!}
                    categoryLabel={n.categories[items[prevIndex]!.category]}
                    dateLabel={formatCarouselDate(
                      locale,
                      items[prevIndex]!.date,
                    )}
                    active={false}
                    onOpen={handleCardOpen}
                  />
                ) : null}

                <CarouselCard
                  item={items[safeIndex]!}
                  categoryLabel={n.categories[items[safeIndex]!.category]}
                  dateLabel={formatCarouselDate(locale, items[safeIndex]!.date)}
                  active
                  onOpen={handleCardOpen}
                />

                {showNextSide ? (
                  <CarouselCard
                    item={items[nextIndex]!}
                    categoryLabel={n.categories[items[nextIndex]!.category]}
                    dateLabel={formatCarouselDate(
                      locale,
                      items[nextIndex]!.date,
                    )}
                    active={false}
                    onOpen={handleCardOpen}
                  />
                ) : null}
              </div>
            </div>

            {showSideCards ? (
              <button
                type="button"
                onClick={goNext}
                aria-label={n.nextPage}
                className="hidden shrink-0 rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-2.5 text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-text)] sm:inline-flex"
              >
                <span aria-hidden className="text-lg leading-none">
                  →
                </span>
              </button>
            ) : null}
          </div>

          {showSideCards ? (
            <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8">
              <button
                type="button"
                onClick={goPrev}
                aria-label={n.prevPage}
                className="inline-flex rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-2 text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-text)] sm:hidden"
              >
                ←
              </button>
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label={n.homeCarouselEyebrow}
              >
                {items.map((item, index) => (
                  <button
                    key={item.slug}
                    type="button"
                    role="tab"
                    aria-selected={index === safeIndex}
                    aria-label={item.title}
                    onClick={() => goTo(index)}
                    className={
                      index === safeIndex
                        ? "h-1.5 w-8 rounded-full bg-[var(--kuct-accent)] shadow-[0_0_0.75rem_rgba(var(--kuct-accent-rgb),0.55)] transition-all duration-500 ease-out"
                        : "size-1.5 rounded-full bg-[var(--kuct-muted)]/40 transition-all duration-500 ease-out hover:bg-[var(--kuct-muted)] hover:scale-125"
                    }
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                aria-label={n.nextPage}
                className="inline-flex rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-2 text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-text)] sm:hidden"
              >
                →
              </button>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
