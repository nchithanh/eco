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
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, routePath, themeAsset } from "@/lib/asset";
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

type CapabilityGroup = "all" | "build" | "connect" | "ai";

const GROUP_IDS: Record<Exclude<CapabilityGroup, "all">, readonly string[]> = {
  build: ["web", "mobile", "backend", "design"],
  connect: ["integrations"],
  ai: ["agents", "custom-agent"],
};

function groupOf(id: string): Exclude<CapabilityGroup, "all"> | null {
  if (GROUP_IDS.build.includes(id)) return "build";
  if (GROUP_IDS.connect.includes(id)) return "connect";
  if (GROUP_IDS.ai.includes(id)) return "ai";
  return null;
}

export function Capabilities() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const { openHref } = usePagePreview();
  const {
    items,
    filterAll,
    filterBuild,
    filterConnect,
    filterAi,
    learnMore,
    prevPage,
    nextPage,
  } = t.capabilities;

  const [active, setActive] = useState<CapabilityGroup>("all");
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

  const filters = useMemo(
    () =>
      [
        { id: "all" as const, label: filterAll },
        { id: "build" as const, label: filterBuild },
        { id: "connect" as const, label: filterConnect },
        { id: "ai" as const, label: filterAi },
      ] as const,
    [filterAll, filterBuild, filterConnect, filterAi],
  );

  const filtered = useMemo(() => {
    if (active === "all") return items;
    const ids = GROUP_IDS[active];
    return items.filter((item) => ids.includes(item.id));
  }, [active, items]);

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
    <section id="capabilities" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {t.capabilities.eyebrow}
          </p>
          <h2 className="mt-4 whitespace-nowrap font-display text-2xl font-semibold leading-[1.15] tracking-tight text-[var(--kuct-text)] sm:text-3xl lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{t.capabilities.title}</AccentText>
          </h2>
          <p className="mt-5 max-w-2xl line-clamp-2 text-base leading-[1.7] text-[var(--kuct-muted)]">
            {t.capabilities.support}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-9 flex flex-wrap gap-2"
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
                      ? "rounded-full bg-[var(--kuct-accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgb(var(--kuct-accent-rgb)/0.3)] transition duration-200"
                      : "kuct-chip rounded-full border border-[var(--kuct-border)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--kuct-muted)] hover:border-[var(--kuct-accent)] hover:text-[var(--kuct-accent-3)]"
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          className="relative mt-9 touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <ul
            className={`grid gap-5 ${
              pageSize === 1 ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visible.map((item, index) => {
              const href =
                item.id === "custom-agent"
                  ? routePath("/custom-agent/")
                  : isServiceSlug(item.id)
                    ? `/services/${item.id}`
                    : "/#contact";
              const image = isServiceSlug(item.id)
                ? themeAsset(CAPABILITY_IMAGES[item.id], theme)
                : undefined;
              const isAiLead = groupOf(item.id) === "ai";

              return (
                <Reveal as="li" key={item.id} delay={index * 60}>
                  <Link
                    href={href}
                    onClick={(event) => onNav(href, event)}
                    className={
                      isAiLead
                        ? "group kuct-glass kuct-card-hover flex h-full touch-pan-y flex-col overflow-hidden rounded-2xl text-left ring-1 ring-[var(--kuct-accent)]/35"
                        : "group kuct-glass kuct-card-hover flex h-full touch-pan-y flex-col overflow-hidden rounded-2xl text-left"
                    }
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
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.55)] via-transparent to-transparent"
                      />
                      <span className="absolute left-3 top-3 rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-[var(--kuct-muted)] uppercase backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {item.body}
                      </p>
                      {item.tags.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {item.tags.slice(0, 3).map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-[var(--kuct-border)] px-2 py-0.5 text-[0.65rem] font-medium text-[var(--kuct-muted)]"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-[var(--kuct-accent)] transition group-hover:gap-1.5">
                        {learnMore}
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
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
              <p className="text-sm text-[var(--kuct-muted)]" aria-live="polite">
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
