"use client";

import { useMemo, useState } from "react";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { newsCategoryChipClasses } from "@/lib/news-category-styles";
import {
  NEWS_CATEGORIES,
  formatNewsDate,
  listNews,
  type NewsCategory,
} from "@/lib/news-details";

export function NewsContent({ embedded = false }: { embedded?: boolean }) {
  const { locale, t } = useLocale();
  const { openHref } = usePagePreview();
  const n = t.news;
  const [filter, setFilter] = useState<NewsCategory | "all">("all");

  const items = useMemo(() => {
    const all = listNews(locale);
    if (filter === "all") return all;
    return all.filter((item) => item.category === filter);
  }, [locale, filter]);

  return (
    <div className={embedded ? "pb-10" : undefined}>
      <section
        className={
          embedded
            ? "border-b border-white/40 py-10 sm:py-12"
            : "border-b border-white/40 py-16 sm:py-20"
        }
      >
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
            {n.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
            {n.blurb}
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label={n.filterAll}
          >
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "rounded-full border border-[var(--kuct-accent)]/40 bg-[var(--kuct-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--kuct-text)]"
                  : "rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/30 hover:text-[var(--kuct-text)]"
              }
            >
              {n.filterAll}
            </button>
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={
                  filter === cat
                    ? "rounded-full border border-[var(--kuct-accent)]/40 bg-[var(--kuct-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--kuct-text)]"
                    : "rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/30 hover:text-[var(--kuct-text)]"
                }
              >
                {n.categories[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={embedded ? "py-8 sm:py-10" : "py-12 sm:py-16"}>
        <div className="mx-auto max-w-6xl px-6">
          <ul className="divide-y divide-[var(--kuct-accent)]/12">
            {items.map((item) => {
              const href = assetPath(`/news/${item.slug}/`);
              return (
                <li
                  key={item.slug}
                  className="group kuct-list-hover touch-pan-y -mx-3 rounded-2xl px-3 py-6 first:mt-0"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
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
                  <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-2xl">
                    <a
                      href={href}
                      className="transition duration-300 group-hover:text-[var(--kuct-accent)] group-focus-within:text-[var(--kuct-accent)] focus-visible:text-[var(--kuct-accent)]"
                      onClick={(event) => openHref(href, event)}
                    >
                      {item.title}
                    </a>
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base line-clamp-2">
                    {item.excerpt}
                  </p>
                  <a
                    href={href}
                    className="kuct-link mt-3 inline-flex text-sm font-medium"
                    onClick={(event) => openHref(href, event)}
                  >
                    {n.readMore}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
