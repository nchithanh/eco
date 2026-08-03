"use client";

import { useMemo } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { newsCategoryChipClasses } from "@/lib/news-category-styles";
import {
  estimateNewsReadMinutes,
  formatNewsDate,
  getNewsImage,
  listNews,
  type NewsListItem,
} from "@/lib/news-details";

const SECONDARY_COUNT = 4;

function formatReadMinutes(template: string, minutes: number): string {
  return template.replace("{n}", String(minutes));
}

function ArticleMeta({
  item,
  categoryLabel,
  dateLabel,
  readLabel,
}: {
  item: NewsListItem;
  categoryLabel: string;
  dateLabel: string;
  readLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className={newsCategoryChipClasses(item.category)}>{categoryLabel}</span>
      <time
        dateTime={item.date}
        className="text-[11px] font-medium tracking-wide text-[var(--kuct-muted)]"
      >
        {dateLabel}
      </time>
      <span className="text-[11px] font-medium tracking-wide text-[var(--kuct-muted)]">
        {readLabel}
      </span>
    </div>
  );
}

export function HomeNews() {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const { openHref } = usePagePreview();
  const n = t.news;

  const { featured, secondary } = useMemo(() => {
    const items = listNews(locale);
    return {
      featured: items[0] ?? null,
      secondary: items.slice(1, 1 + SECONDARY_COUNT),
    };
  }, [locale]);

  const viewAllHref = assetPath("/news/");

  return (
    <section id="news" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="title">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {n.homeEyebrow}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
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

        {featured ? (
          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 lg:items-stretch">
            <Reveal className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] shadow-[0_12px_40px_rgba(0,0,0,0.4)] ring-1 ring-[var(--kuct-accent)]/20 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/40">
                <a
                  href={assetPath(`/news/${featured.slug}/`)}
                  onClick={(event) =>
                    openHref(assetPath(`/news/${featured.slug}/`), event)
                  }
                  className="relative block aspect-[16/10] overflow-hidden border-b border-[var(--kuct-border)] bg-[rgba(12,10,24,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--kuct-accent)]"
                >
                  <LazyImage
                    src={themeAsset(getNewsImage(featured.slug), theme)}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 36rem"
                  />
                </a>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <ArticleMeta
                    item={featured}
                    categoryLabel={n.categories[featured.category]}
                    dateLabel={formatNewsDate(locale, featured.date)}
                    readLabel={formatReadMinutes(
                      n.readMinutes,
                      estimateNewsReadMinutes(locale, featured.slug),
                    )}
                  />
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-[1.35rem]">
                    <a
                      href={assetPath(`/news/${featured.slug}/`)}
                      className="transition duration-300 group-hover:text-[var(--kuct-accent)] focus-visible:text-[var(--kuct-accent)]"
                      onClick={(event) =>
                        openHref(assetPath(`/news/${featured.slug}/`), event)
                      }
                    >
                      {featured.title}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {featured.excerpt}
                  </p>
                  <a
                    href={assetPath(`/news/${featured.slug}/`)}
                    onClick={(event) =>
                      openHref(assetPath(`/news/${featured.slug}/`), event)
                    }
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--kuct-accent)] transition group-hover:gap-2"
                  >
                    {n.readMore}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>

            <ul className="flex list-none flex-col gap-2.5 p-0 sm:gap-3">
              {secondary.map((item, index) => {
                const href = assetPath(`/news/${item.slug}/`);
                return (
                  <Reveal as="li" key={item.slug} delay={index * 50} className="h-full">
                    <article className="group h-full rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] px-4 py-3 backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35 sm:px-4 sm:py-3.5">
                      <ArticleMeta
                        item={item}
                        categoryLabel={n.categories[item.category]}
                        dateLabel={formatNewsDate(locale, item.date)}
                        readLabel={formatReadMinutes(
                          n.readMinutes,
                          estimateNewsReadMinutes(locale, item.slug),
                        )}
                      />
                      <h3 className="mt-2 font-display text-[0.95rem] font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-base">
                        <a
                          href={href}
                          className="line-clamp-2 transition duration-300 group-hover:text-[var(--kuct-accent)] focus-visible:text-[var(--kuct-accent)]"
                          onClick={(event) => openHref(href, event)}
                        >
                          {item.title}
                        </a>
                      </h3>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
