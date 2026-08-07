"use client";

import type { MouseEvent, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { assetPath, routePath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";

const DRAG_THRESHOLD_PX = 48;
const AUTOPLAY_MS = 5500;

type SlideDirection = 1 | -1;

type DragState = {
  pointerId: number | null;
  startX: number;
  deltaX: number;
  dragging: boolean;
  suppressClick: boolean;
};

type Offer = {
  id: string;
  title: string;
  body: string;
  meta: string;
  href: string;
};

const OFFER_IMAGES: Record<string, string> = {
  landing: "/capabilities/web.jpg",
  business: "/capabilities/design.jpg",
  shop: "/capabilities/integrations.jpg",
  webapp: "/capabilities/backend.jpg",
  build: "/capabilities/web.jpg",
  modernize: "/capabilities/design.jpg",
  automate: "/capabilities/integrations.jpg",
  care: "/capabilities/agent-dolphin.jpg",
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

function OfferCard({
  offer,
  learnMore,
  active,
  onNavigate,
}: {
  offer: Offer;
  learnMore: string;
  active: boolean;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { theme } = useTheme();
  const imageSrc = themeAsset(
    OFFER_IMAGES[offer.id] ?? "/capabilities/web.jpg",
    theme,
  );
  const href = offer.href.startsWith("#")
    ? offer.href
    : routePath(offer.href.endsWith("/") ? offer.href : `${offer.href}/`);

  return (
    <article className="contents">
      <Link
        href={href}
        draggable={false}
        onClick={onNavigate}
        className={
          active
            ? "group relative flex w-[min(100%,18.5rem)] shrink-0 flex-col overflow-hidden rounded-[10px] bg-[var(--kuct-panel-2)] shadow-[0_12px_36px_rgb(26_21_32/0.1)] transition duration-500 sm:w-[20rem] lg:w-[21.5rem]"
            : "group relative flex w-[min(78vw,14.5rem)] shrink-0 flex-col overflow-hidden rounded-[10px] bg-[var(--kuct-panel-2)] opacity-55 shadow-[0_8px_24px_rgb(26_21_32/0.06)] transition duration-500 hover:opacity-75 sm:w-[15.5rem] lg:w-[16.5rem]"
        }
        aria-current={active ? "true" : undefined}
      >
        <div className="p-3 sm:p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[var(--kuct-panel)]">
            <LazyImage
              src={imageSrc}
              alt={offer.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 78vw, 22rem"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.35)] via-transparent to-transparent"
              aria-hidden
            />
            <span className="absolute left-3 top-3 rounded-[10px] bg-[var(--kuct-panel-2)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-[var(--kuct-muted)] uppercase backdrop-blur-sm">
              {offer.meta}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center px-4 pb-4 pt-4 text-center sm:px-5 sm:pb-5">
          <h3
            className={
              active
                ? "font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)] sm:text-xl"
                : "font-display text-base font-semibold leading-snug text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)]"
            }
          >
            {offer.title}
          </h3>
          <p
            className={
              active
                ? "mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--kuct-muted)]"
                : "mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
            }
          >
            {offer.body}
          </p>
          <span className="mt-4 inline-flex w-fit items-center border-b border-current pb-0.5 text-sm font-bold text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)]">
            {learnMore}
          </span>
        </div>
      </Link>
    </article>
  );
}

export function Capabilities() {
  const { t } = useLocale();
  const c = t.capabilities;
  const offers = c.offers;

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(1);
  const [slideTick, setSlideTick] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);

  const dragRef = useRef<DragState>({
    pointerId: null,
    startX: 0,
    deltaX: 0,
    dragging: false,
    suppressClick: false,
  });

  const count = offers.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const prevIndex = (safeIndex - 1 + count) % count;
  const nextIndex = (safeIndex + 1) % count;
  const showSideCards = count > 1;
  const showNextSide = showSideCards && count > 2;

  const hubHref = (c.ctaSecondaryHref ?? "#popular-services").startsWith("#")
    ? (c.ctaSecondaryHref ?? "#popular-services")
    : assetPath(c.ctaSecondaryHref!);

  const navigate = (next: number, direction: SlideDirection) => {
    if (next === safeIndex || count === 0) return;
    setSlideDirection(direction);
    setSlideTick((tick) => tick + 1);
    setActiveIndex(next);
  };

  const goPrev = () => navigate(prevIndex, -1);
  const goNext = () => navigate(nextIndex, 1);
  const goTo = (index: number) => {
    navigate(index, resolveSlideDirection(safeIndex, index, count));
  };

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => {
        const from = current % count;
        const to = (from + 1) % count;
        setSlideDirection(1);
        setSlideTick((tick) => tick + 1);
        return to;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const handleCardNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dragRef.current.suppressClick) {
      event.preventDefault();
      dragRef.current.suppressClick = false;
    }
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
      id="capabilities"
      aria-labelledby="home-capabilities-heading"
      className="kuct-capabilities relative scroll-mt-20 overflow-hidden py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal variant="title">
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-panel-2)] text-[var(--kuct-accent)] shadow-[0_4px_12px_rgb(26_21_32/0.06)]"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none">
                <path
                  d="M5 7h14M5 12h10M5 17h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span
              className="hidden h-px min-w-0 flex-1 border-t border-dashed border-[var(--kuct-border)] sm:block"
              aria-hidden
            />
            <a
              href={hubHref}
              className="ml-auto inline-flex shrink-0 items-center rounded-[10px] border border-[var(--kuct-text)] px-4 py-2 text-xs font-bold tracking-wide text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)] hover:text-[var(--kuct-accent)] sm:px-5 sm:text-sm"
            >
              {c.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-12">
            <h2
              id="home-capabilities-heading"
              className="max-w-[20ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
            >
              <AccentText>{c.title}</AccentText>
            </h2>
            <p className="max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)] lg:justify-self-end">
              {c.support}
            </p>
          </div>
        </Reveal>

        {count > 0 ? (
          <Reveal delay={60} className="relative mt-10 sm:mt-12">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              {showSideCards ? (
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={c.prevPage}
                  className="hidden size-10 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel-2)] text-[var(--kuct-muted)] shadow-[0_4px_14px_rgb(26_21_32/0.08)] transition hover:text-[var(--kuct-text)] sm:grid"
                >
                  <span aria-hidden>←</span>
                </button>
              ) : null}

              <div
                role="region"
                aria-roledescription="carousel"
                aria-label={c.eyebrow}
                className={`kuct-home-news-track min-w-0 flex-1 sm:flex-none ${isDragging ? "is-dragging" : ""}`.trim()}
                onPointerDown={onTrackPointerDown}
                onPointerMove={onTrackPointerMove}
                onPointerUp={finishDrag}
                onPointerCancel={finishDrag}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocusCapture={() => setPaused(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setPaused(false);
                  }
                }}
              >
                <div
                  key={slideTick}
                  style={trackStyle}
                  className={`flex min-w-0 items-stretch justify-center gap-3 overflow-hidden sm:gap-5 lg:gap-6 ${slideClass}`.trim()}
                >
                  {showSideCards ? (
                    <OfferCard
                      offer={offers[prevIndex]!}
                      learnMore={c.learnMore}
                      active={false}
                      onNavigate={handleCardNavigate}
                    />
                  ) : null}

                  <OfferCard
                    offer={offers[safeIndex]!}
                    learnMore={c.learnMore}
                    active
                    onNavigate={handleCardNavigate}
                  />

                  {showNextSide ? (
                    <OfferCard
                      offer={offers[nextIndex]!}
                      learnMore={c.learnMore}
                      active={false}
                      onNavigate={handleCardNavigate}
                    />
                  ) : null}
                </div>
              </div>

              {showSideCards ? (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={c.nextPage}
                  className="hidden size-10 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel-2)] text-[var(--kuct-muted)] shadow-[0_4px_14px_rgb(26_21_32/0.08)] transition hover:text-[var(--kuct-text)] sm:grid"
                >
                  <span aria-hidden>→</span>
                </button>
              ) : null}
            </div>

            <div className="mt-6 flex justify-center">
              <div
                role="tablist"
                aria-label={c.eyebrow}
                className="flex items-center gap-2"
              >
                {offers.map((offer, index) => {
                  const selected = index === safeIndex;
                  return (
                    <button
                      key={offer.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={`${offer.title}`}
                      onClick={() => goTo(index)}
                      className={
                        selected
                          ? "h-2 w-6 rounded-full bg-[var(--kuct-accent)]"
                          : "size-2 rounded-full bg-[var(--kuct-border)] transition hover:bg-[var(--kuct-muted)]"
                      }
                    />
                  );
                })}
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
