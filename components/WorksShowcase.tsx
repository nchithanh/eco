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
    // Lock axis early so vertical page scroll is never treated as pagination
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
    <section
      id="works"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {w.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{w.title}</AccentText>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
            {w.support}
          </p>
          <a
            href="#contact"
            className="kuct-btn-primary mt-6 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
          >
            {w.cta}
          </a>
        </Reveal>

        <div
          className="relative mt-12 touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <ul
            className={`grid gap-5 ${
              pageSize === 1
                ? "grid-cols-1"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visible.map((item, index) => {
              const slug = isWorkSlug(item.id) ? item.id : null;
              const href = slug ? assetPath(`/works/${slug}/`) : "#contact";

              return (
                <Reveal as="li" key={item.id} delay={index * 70}>
                  <a
                    href={href}
                    onClick={(event) => {
                      if (!slug) return;
                      event.preventDefault();
                      openWork(slug);
                    }}
                    className="group kuct-glass kuct-card-hover flex h-full touch-pan-y flex-col overflow-hidden rounded-2xl text-left"
                  >
                    <div className="relative aspect-[16/10] max-h-56 overflow-hidden">
                      <LazyImage
                        src={themeAsset(
                          WORK_IMAGES[item.id] ?? WORK_IMAGES.billiard,
                          theme,
                        )}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ animationDelay: `${index * 80}ms` }}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e1b2e]/35 via-transparent to-transparent opacity-80 transition group-hover:opacity-90"
                      />
                      <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--kuct-text)] uppercase shadow-sm backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-medium text-[var(--kuct-text)]">
                        {item.title}
                      </h3>
                      <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                        <div>
                          <dt className="font-semibold text-[var(--kuct-accent)]">
                            {w.problemLabel}
                          </dt>
                          <dd className="text-[var(--kuct-muted)]">
                            {item.problem}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-[var(--kuct-accent)]">
                            {w.scopeLabel}
                          </dt>
                          <dd className="text-[var(--kuct-muted)]">
                            {item.scope}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-[var(--kuct-accent)]">
                            {w.resultLabel}
                          </dt>
                          <dd className="text-[var(--kuct-text)]">
                            {item.result}
                          </dd>
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
                className="grid size-10 place-items-center rounded-full border border-[var(--kuct-border)] bg-white/70 text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
              >
                <span aria-hidden>←</span>
              </button>
              <p
                className="text-sm text-[var(--kuct-muted)]"
                aria-live="polite"
              >
                {page + 1} / {pageCount}
              </p>
              <button
                type="button"
                onClick={goNext}
                aria-label={nextPage}
                className="grid size-10 place-items-center rounded-full border border-[var(--kuct-border)] bg-white/70 text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
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
