"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { isWorkSlug } from "@/lib/works-details";

const WORK_IMAGES: Record<string, string> = {
  billiard: "/works/billiard.jpg",
  badminton: "/works/badminton.jpg",
  tickets: "/works/tickets.jpg",
  beauty: "/works/beauty.jpg",
  cafe: "/works/tickets.jpg",
  clinic: "/works/beauty.jpg",
};

const DESKTOP_MQ = "(min-width: 640px)";
const SWIPE_THRESHOLD = 48;

export function WorksShowcase() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const { openWork } = usePagePreview();
  const w = t.works;
  const { prevPage, nextPage } = t.capabilities;

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const pointerAxis = useRef<"none" | "x" | "y">("none");

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      setPageSize(3);
      return;
    }
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => setPageSize(mq.matches ? 3 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pageCount = Math.max(1, Math.ceil(w.items.length / pageSize));

  useEffect(() => {
    setPage(0);
  }, [pageSize, w.items.length]);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return w.items.slice(start, start + pageSize);
  }, [w.items, page, pageSize]);

  const goPrev = useCallback(() => {
    setPage((current) => (current - 1 + pageCount) % pageCount);
  }, [pageCount]);

  const goNext = useCallback(() => {
    setPage((current) => (current + 1) % pageCount);
  }, [pageCount]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    pointerAxis.current = "none";
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    if (!start || pointerAxis.current !== "none") return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
    pointerAxis.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    const axis = pointerAxis.current;
    pointerStart.current = null;
    pointerAxis.current = "none";
    if (start == null || pageCount <= 1 || axis === "y") return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const onPointerCancel = () => {
    pointerStart.current = null;
    pointerAxis.current = "none";
  };

  return (
    <section id="works" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="title">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {w.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
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
                  className="rounded-full border border-[var(--kuct-border)] px-3 py-1 text-xs font-medium text-[var(--kuct-muted)]"
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

        <div
          className="relative mt-12 touch-pan-y sm:mt-14"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <ul
            className={`m-0 grid list-none gap-5 p-0 ${
              pageSize === 1 ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visible.map((item, index) => {
              const slug = isWorkSlug(item.id) ? item.id : null;
              const href = slug ? assetPath(`/works/${slug}/`) : "#contact";

              return (
                <Reveal as="li" key={item.id} delay={index * 60}>
                  <a
                    href={href}
                    onClick={(event) => {
                      if (!slug) return;
                      event.preventDefault();
                      openWork(slug);
                    }}
                    className="group flex h-full touch-pan-y flex-col overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] text-left backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40 hover:ring-1 hover:ring-[var(--kuct-accent)]/20"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <LazyImage
                        src={themeAsset(
                          WORK_IMAGES[item.id] ?? WORK_IMAGES.billiard,
                          theme,
                        )}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ animationDelay: `${index * 80}ms` }}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(2,2,8,0.75)] via-transparent to-transparent"
                      />
                      <span className="absolute left-3 top-3 rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.88)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase backdrop-blur-md">
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
                            {w.beforeLabel ?? "Before"}
                          </span>
                          {": "}
                          {item.before}
                          <span className="mx-1.5 text-[var(--kuct-accent)]/70" aria-hidden>
                            →
                          </span>
                          <span className="font-semibold text-[var(--kuct-text)]/80">
                            {w.afterLabel ?? "After"}
                          </span>
                          {": "}
                          {item.after}
                        </p>
                      ) : null}

                      <dl className="mt-4 flex flex-1 flex-col text-sm leading-relaxed">
                        <div>
                          <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
                            {w.problemLabel}
                          </dt>
                          <dd className="mt-1 text-[var(--kuct-muted)]">
                            {item.problem}
                          </dd>
                        </div>
                        <div className="mt-3">
                          <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
                            {w.scopeLabel}
                          </dt>
                          <dd className="mt-1 text-[var(--kuct-muted)]">
                            {item.scope}
                          </dd>
                        </div>
                        <div className="mt-auto pt-3">
                          <div className="flex min-h-[4.75rem] flex-col justify-center rounded-xl border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.65)] px-3 py-2.5 ring-1 ring-[var(--kuct-accent)]/15">
                            <dt className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
                              {w.resultLabel}
                            </dt>
                            <dd className="mt-1 whitespace-pre-line font-medium text-[var(--kuct-text)]">
                              {item.result}
                            </dd>
                          </div>
                        </div>
                      </dl>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </ul>

          {pageCount > 1 ? (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label={prevPage}
                className="grid size-10 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.85)] text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
              >
                <span aria-hidden>←</span>
              </button>
              <p
                className="text-sm tabular-nums text-[var(--kuct-muted)]"
                aria-live="polite"
              >
                {page + 1} / {pageCount}
              </p>
              <button
                type="button"
                onClick={goNext}
                aria-label={nextPage}
                className="grid size-10 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.85)] text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
              >
                <span aria-hidden>→</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
