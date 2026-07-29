"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
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
    <section id="news" className="scroll-mt-20 border-t border-white/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {n.homeEyebrow}
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-display text-2xl font-semibold sm:text-3xl">
            <AccentText>{n.homeTitle}</AccentText>
          </h2>
          <a
            href={viewAllHref}
            className="kuct-link text-sm font-semibold text-[var(--kuct-text)]"
          >
            {n.viewAll}
          </a>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
          {n.blurb}
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-3">
          {visible.map((item, index) => {
            const href = assetPath(`/news/${item.slug}/`);
            const featured = index < FEATURED_COUNT;
            return (
              <li
                key={item.slug}
                className={`group kuct-list-hover touch-pan-y -mx-3 flex h-full flex-col rounded-2xl px-3 ${featured ? "py-4" : "py-3"}`}
              >
                {featured ? (
                  <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.5)]">
                    <LazyImage
                      src={themeAsset(getNewsImage(item.slug), theme)}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 28rem"
                    />
                  </div>
                ) : null}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <time
                    dateTime={item.date}
                    className="text-xs font-medium tracking-wide text-[var(--kuct-muted)]"
                  >
                    {formatNewsDate(locale, item.date)}
                  </time>
                  <span className={newsCategoryChipClasses(item.category)}>
                    {n.categories[item.category]}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-2xl">
                  <a
                    href={href}
                    className="line-clamp-2 transition duration-300 group-hover:text-[var(--kuct-accent)] group-focus-within:text-[var(--kuct-accent)] focus-visible:text-[var(--kuct-accent)]"
                    onClick={(event) => openHref(href, event)}
                  >
                    {item.title}
                  </a>
                </h3>
              </li>
            );
          })}
        </ul>

        {pageCount > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label={n.prevPage}
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
              aria-label={n.nextPage}
              className="grid size-10 place-items-center rounded-full border border-[var(--kuct-border)] bg-white/70 text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
