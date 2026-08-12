"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { isWorkSlug } from "@/lib/works-details";

/** Case previews — real screenshots only; TODO: dedicated cafe.jpg / clinic.jpg */
const WORK_IMAGES: Record<string, string> = {
  billiard: "/works/billiard.jpg",
  badminton: "/works/badminton.jpg",
  tickets: "/works/tickets.jpg",
  beauty: "/works/beauty.jpg",
  cafe: "/works/tickets.jpg",
  clinic: "/works/beauty.jpg",
};

const DRAG_THRESHOLD_PX = 48;
const AUTOPLAY_MS = 6000;

type DragState = {
  pointerId: number | null;
  startX: number;
  deltaX: number;
  dragging: boolean;
  suppressClick: boolean;
};

type WorkItem = {
  id: string;
  tag: string;
  title: string;
  problem: string;
  scope: string;
  result: string;
  before?: string;
  after?: string;
};

function WorkCard({
  item,
  active,
  labels,
  onNavigate,
}: {
  item: WorkItem;
  active: boolean;
  labels: {
    problemLabel: string;
    scopeLabel: string;
    resultLabel: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  onNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { theme } = useTheme();
  const slug = isWorkSlug(item.id) ? item.id : null;
  const href = slug ? assetPath(`/works/${slug}/`) : "#contact";

  return (
    <a
      href={href}
      draggable={false}
      onClick={onNavigate}
      data-works-card
      data-active={active ? "true" : "false"}
      className={
        active
          ? "group flex w-[min(85vw,20rem)] shrink-0 flex-col overflow-hidden rounded-xl border border-[var(--kuct-accent)]/30 bg-[var(--kuct-panel)] text-left transition duration-500 sm:w-[22rem] lg:w-[24rem]"
          : "group flex w-[min(85vw,20rem)] shrink-0 scale-[0.9] flex-col overflow-hidden rounded-xl border border-transparent bg-[var(--kuct-panel)] text-left opacity-55 transition duration-500 hover:opacity-80 sm:w-[22rem] lg:w-[24rem]"
      }
      aria-current={active ? "true" : undefined}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <LazyImage
          src={themeAsset(WORK_IMAGES[item.id] ?? WORK_IMAGES.billiard, theme)}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 85vw, 24rem"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(2,2,8,0.75)] via-transparent to-transparent"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--kuct-panel)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase backdrop-blur-md">
          {item.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
          {item.title}
        </h3>

        {item.before && item.after ? (
          <p className="mt-3 text-xs leading-relaxed text-[var(--kuct-muted)]">
            <span className="font-semibold text-[var(--kuct-text)]/80">
              {labels.beforeLabel ?? "Before"}
            </span>
            {": "}
            {item.before}
            <span
              className="mx-1.5 text-[var(--kuct-accent)]/70"
              aria-hidden
            >
              →
            </span>
            <span className="font-semibold text-[var(--kuct-text)]/80">
              {labels.afterLabel ?? "After"}
            </span>
            {": "}
            {item.after}
          </p>
        ) : null}

        <dl className="mt-4 flex flex-1 flex-col text-sm leading-relaxed">
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
              {labels.problemLabel}
            </dt>
            <dd className="mt-1 text-[var(--kuct-muted)]">{item.problem}</dd>
          </div>
          <div className="mt-3">
            <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
              {labels.scopeLabel}
            </dt>
            <dd className="mt-1 text-[var(--kuct-muted)]">{item.scope}</dd>
          </div>
          <div className="mt-auto pt-3">
            <div className="flex min-h-[4.75rem] flex-col justify-center rounded-lg bg-[var(--kuct-panel-2)] px-3 py-2.5">
              <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
                {labels.resultLabel}
              </dt>
              <dd className="mt-1 whitespace-pre-line font-medium text-[var(--kuct-text)]">
                {item.result}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </a>
  );
}

function NavCircleButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full bg-[var(--kuct-panel-2)] text-base text-[var(--kuct-muted)] transition hover:bg-white hover:text-[var(--kuct-text)]"
    >
      <span aria-hidden>{children}</span>
    </button>
  );
}

export function WorksShowcase() {
  const { t } = useLocale();
  const w = t.works;
  const { prevPage, nextPage } = t.capabilities;
  const items = w.items as WorkItem[];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTick, setSlideTick] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [trackOffset, setTrackOffset] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState>({
    pointerId: null,
    startX: 0,
    deltaX: 0,
    dragging: false,
    suppressClick: false,
  });

  const count = items.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const prevIndex = (safeIndex - 1 + count) % count;
  const nextIndex = (safeIndex + 1) % count;
  const showNav = count > 1;

  const navigate = (next: number) => {
    if (next === safeIndex || count === 0) return;
    setSlideTick((tick) => tick + 1);
    setActiveIndex(next);
  };

  const goPrev = () => navigate(prevIndex);
  const goNext = () => navigate(nextIndex);
  const goTo = (index: number) => navigate(index);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || count === 0) return;

    const measure = () => {
      const activeEl = track.querySelector<HTMLElement>(
        '[data-works-card][data-active="true"]',
      );
      if (!activeEl) return;
      const viewportCenter = viewport.clientWidth / 2;
      const cardCenter = activeEl.offsetLeft + activeEl.offsetWidth / 2;
      setTrackOffset(viewportCenter - cardCenter);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    ro.observe(track);
    return () => ro.disconnect();
  }, [safeIndex, count, slideTick]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => {
        const to = ((current % count) + 1) % count;
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
    if (!showNav || event.button !== 0) return;
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
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - drag.startX;
    drag.deltaX = deltaX;
    if (!drag.dragging && Math.abs(deltaX) > 8) {
      drag.dragging = true;
      setIsDragging(true);
    }
    if (drag.dragging) setDragOffset(deltaX);
  };

  const trackStyle = {
    transform: `translateX(${trackOffset + dragOffset}px)`,
    transition: isDragging
      ? "none"
      : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <section
      id="works"
      className="scroll-mt-20 py-24"
      aria-labelledby="home-works-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {w.eyebrow}
          </p>
          <h2
            id="home-works-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{w.title}</AccentText>
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {w.support}
          </p>
          {w.industries && w.industries.length > 0 ? (
            <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
              {w.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-[10px] px-3 py-1 text-xs font-medium text-[var(--kuct-muted)]"
                >
                  {industry}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--kuct-accent)] transition hover:text-[var(--kuct-text)]"
            >
              {w.cta}
              <span aria-hidden>→</span>
            </a>
            {w.ctaHint ? (
              <p className="mt-1.5 max-w-[42ch] text-sm leading-relaxed text-[var(--kuct-muted)]">
                {w.ctaHint}
              </p>
            ) : null}
          </div>
        </Reveal>

        {count > 0 ? (
          <Reveal delay={60} className="relative mt-12 sm:mt-14">
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={w.eyebrow}
              className={isDragging ? "is-dragging" : undefined}
              onPointerDown={onTrackPointerDown}
              onPointerMove={onTrackPointerMove}
              onPointerUp={finishDrag}
              onPointerCancel={finishDrag}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(event.relatedTarget as Node)
                ) {
                  setPaused(false);
                }
              }}
            >
              <div ref={viewportRef} className="overflow-hidden px-1 sm:px-2">
                <div
                  ref={trackRef}
                  style={trackStyle}
                  className="flex w-max items-stretch gap-4 py-1 sm:gap-5"
                >
                  {items.map((item, index) => (
                    <WorkCard
                      key={item.id}
                      item={item}
                      active={index === safeIndex}
                      labels={{
                        problemLabel: w.problemLabel,
                        scopeLabel: w.scopeLabel,
                        resultLabel: w.resultLabel,
                        beforeLabel: w.beforeLabel,
                        afterLabel: w.afterLabel,
                      }}
                      onNavigate={handleCardNavigate}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div
                role="tablist"
                aria-label={w.eyebrow}
                className="flex items-center gap-2"
              >
                {items.map((item, index) => {
                  const selected = index === safeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={item.title}
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

              {showNav ? (
                <div className="ml-auto flex items-center gap-2">
                  <NavCircleButton label={prevPage} onClick={goPrev}>
                    ‹
                  </NavCircleButton>
                  <NavCircleButton label={nextPage} onClick={goNext}>
                    ›
                  </NavCircleButton>
                </div>
              ) : null}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
