"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { newsCategoryChipClasses } from "@/lib/news-category-styles";
import {
  formatNewsDate,
  getNewsImage,
  listNews,
} from "@/lib/news-details";

const PAGE_SIZE = 9;
const FEATURED_COUNT = 3;

export function HomeNews() {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const { openHref } = usePagePreview();
  const n = t.news;
  const [page, setPage] = useState(0);

  const items = useMemo(() => listNews(locale), [locale]);
  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  useEffect(() => {
    setPage(0);
  }, [locale]);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  const visible = useMemo(() => {
    const start = page * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  const goPrev = useCallback(() => {
    setPage((current) => (current - 1 + pageCount) % pageCount);
  }, [pageCount]);

  const goNext = useCallback(() => {
    setPage((current) => (current + 1) % pageCount);
  }, [pageCount]);

  const viewAllHref = assetPath("/news/");

  return (
    <section id="news" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {n.homeEyebrow}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
              <AccentText>{n.homeTitle}</AccentText>
            </h2>
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--kuct-accent)] transition hover:text-[var(--kuct-text)]"
            >
              {n.viewAll}
              <span aria-hidden>→</span>
            </a>
          </div>
          <p className="mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {n.blurb}
          </p>
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:mt-14 md:grid-cols-3">
          {visible.map((item, index) => {
            const href = assetPath(`/news/${item.slug}/`);
            const featured = index < FEATURED_COUNT;

            return (
              <Reveal
                as="li"
                key={item.slug}
                delay={index * 45}
                className={
                  featured
                    ? "group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] ring-1 ring-[var(--kuct-accent)]/20 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40"
                    : "group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35"
                }
              >
                {featured ? (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--kuct-border)] bg-[rgba(12,10,24,0.5)]">
                    <LazyImage
                      src={themeAsset(getNewsImage(item.slug), theme)}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 28rem"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <time
                      dateTime={item.date}
                      className="text-[11px] font-medium tracking-wide text-[var(--kuct-muted)]"
                    >
                      {formatNewsDate(locale, item.date)}
                    </time>
                    <span className={newsCategoryChipClasses(item.category)}>
                      {n.categories[item.category]}
                    </span>
                  </div>
                  <h3
                    className={
                      featured
                        ? "mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-[var(--kuct-text)]"
                        : "mt-3 font-display text-base font-semibold leading-snug tracking-tight text-[var(--kuct-text)]"
                    }
                  >
                    <a
                      href={href}
                      className="line-clamp-2 transition duration-300 group-hover:text-[var(--kuct-accent)] group-focus-within:text-[var(--kuct-accent)] focus-visible:text-[var(--kuct-accent)]"
                      onClick={(event) => openHref(href, event)}
                    >
                      {item.title}
                    </a>
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {pageCount > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label={n.prevPage}
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
              aria-label={n.nextPage}
              className="grid size-10 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.85)] text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
