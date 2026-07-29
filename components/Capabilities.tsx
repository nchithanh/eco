"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { isServiceSlug, type ServiceSlug } from "@/lib/i18n/service-details";
import { useTheme } from "@/lib/theme";

const CAPABILITY_IMAGES: Record<ServiceSlug, string> = {
  web: "/capabilities/web.jpg",
  mobile: "/capabilities/mobile.jpg",
  backend: "/capabilities/backend.jpg",
  design: "/capabilities/design.jpg",
  integrations: "/capabilities/integrations.jpg",
  agents: "/capabilities/agents.jpg",
  "custom-agent": "/capabilities/custom-agent.jpg",
};

const DESKTOP_MQ = "(min-width: 640px)";
const SWIPE_THRESHOLD = 48;

export function Capabilities() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const { openHref } = usePagePreview();
  const { items, filterAll, learnMore, prevPage, nextPage } = t.capabilities;

  const [active, setActive] = useState<string>("all");
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

  const filters = useMemo(() => {
    const cats = items.map((item) => ({
      id: item.id,
      label: item.category,
    }));
    return [{ id: "all", label: filterAll }, ...cats];
  }, [items, filterAll]);

  const filtered = useMemo(
    () =>
      active === "all" ? items : items.filter((item) => item.id === active),
    [active, items],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(0);
  }, [active, pageSize]);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  const goPrev = useCallback(() => {
    setPage((current) => (current - 1 + pageCount) % pageCount);
  }, [pageCount]);

  const goNext = useCallback(() => {
    setPage((current) => (current + 1) % pageCount);
  }, [pageCount]);

  const onNav = (href: string, event: MouseEvent<HTMLElement>) => {
    openHref(href, event);
  };

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
      id="capabilities"
      className="scroll-mt-20 border-t border-white/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {t.capabilities.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          <AccentText>{t.capabilities.title}</AccentText>
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">
          {t.capabilities.support}
        </p>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label={t.capabilities.eyebrow}
        >
          {filters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter.id)}
                className={
                  isActive
                    ? "rounded-full bg-[var(--kuct-accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgb(var(--kuct-accent-rgb)/0.35)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_24px_rgb(var(--kuct-accent-rgb)/0.45)]"
                    : "kuct-chip rounded-full border border-[var(--kuct-text)]/80 bg-transparent px-4 py-2 text-sm font-medium text-[var(--kuct-text)]"
                }
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div
          className="relative mt-10 touch-pan-y"
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
            {visible.map((item) => {
              const href =
                item.id === "custom-agent"
                  ? assetPath("/custom-agent/")
                  : isServiceSlug(item.id)
                    ? `/services/${item.id}`
                    : "/#contact";
              const image = isServiceSlug(item.id)
                ? themeAsset(CAPABILITY_IMAGES[item.id], theme)
                : undefined;

              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    onClick={(event) => onNav(href, event)}
                    className="group kuct-glass kuct-card-hover flex h-full touch-pan-y flex-col overflow-hidden rounded-2xl text-left"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {image ? (
                        <LazyImage
                          src={image}
                          alt=""
                          fill
                          className="object-cover transition duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-br from-[var(--kuct-card-from)] to-[var(--kuct-card-to)]"
                        />
                      )}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e1b2e]/30 via-transparent to-transparent opacity-80"
                      />
                      <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--kuct-text)] uppercase shadow-sm backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-medium text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {item.body}
                      </p>
                      <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-[var(--kuct-accent)]/25 bg-white/80 px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--kuct-text)] transition duration-300 group-hover:border-[var(--kuct-accent)]/45 group-hover:text-[var(--kuct-accent)]">
                        {learnMore}
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </li>
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
              <p className="text-sm text-[var(--kuct-muted)]" aria-live="polite">
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
