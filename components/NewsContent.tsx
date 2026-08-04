"use client";

import type { MouseEvent } from "react";
import { useMemo, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { newsCategoryChipClasses } from "@/lib/news-category-styles";
import {
 NEWS_CATEGORIES,
 formatNewsDate,
 getNewsImage,
 listNews,
 type NewsCategory,
 type NewsListItem,
} from "@/lib/news-details";

function filterButtonClass(active: boolean) {
 return active
 ? "rounded-full bg-[var(--kuct-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--kuct-text)]"
 : "rounded-full bg-[var(--kuct-panel)] px-4 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-text)]";
}

/** Canva pageNew — featured split: copy left, image right + ↗ overlay. */
function FeaturedArticleBlock({
 item,
 categoryLabel,
 featuredLabel,
 readMoreLabel,
 onOpen,
}: {
 item: NewsListItem;
 categoryLabel: string;
 featuredLabel: string;
 readMoreLabel: string;
 onOpen: (href: string, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
 const { locale } = useLocale();
 const { theme } = useTheme();
 const href = assetPath(`/news/${item.slug}/`);

 return (
 <article>
 <a
 href={href}
 onClick={(event) => onOpen(href, event)}
        className="group grid overflow-hidden rounded-xl bg-[var(--kuct-panel)] transition duration-500 lg:grid-cols-2"
 >
 <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-10">
 <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--kuct-accent)] uppercase">
 {featuredLabel}
 </p>
 <p className="mt-3 text-xs font-medium tracking-wide text-[var(--kuct-muted)]">
 <time dateTime={item.date}>{formatNewsDate(locale, item.date)}</time>
 <span aria-hidden className="mx-2 text-[var(--kuct-border)]">
 •
 </span>
 <span className={newsCategoryChipClasses(item.category)}>
 {categoryLabel}
 </span>
 </p>
 <h2 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)] sm:text-2xl md:text-[1.65rem]">
 {item.title}
 </h2>
 <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {item.excerpt}
 </p>
 <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--kuct-accent)] transition group-hover:text-[var(--kuct-text)]">
 {readMoreLabel}
 <span
 aria-hidden
 className="inline-flex size-8 items-center justify-center rounded-full text-xs"
 >
 ↗
 </span>
 </span>
 </div>

 <div className="relative aspect-[16/10] overflow-hidden bg-[var(--kuct-panel)] lg:aspect-auto lg:min-h-[18rem]">
 <LazyImage
 src={themeAsset(getNewsImage(item.slug), theme)}
 alt={item.title}
 fill
 className="object-cover transition duration-500 group-hover:scale-[1.02]"
 sizes="(max-width: 1024px) 100vw, 36rem"
 priority
 />
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.35)] via-transparent to-transparent lg:bg-gradient-to-l lg:from-[rgba(4,4,12,0.45)] lg:via-transparent lg:to-transparent" />
 <span
 aria-hidden
 className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-[rgba(var(--kuct-accent-rgb),0.14)] text-sm text-[var(--kuct-accent)] shadow-[0_0_1.25rem_rgba(var(--kuct-accent-rgb),0.35)] transition group-hover:bg-[rgba(var(--kuct-accent-rgb),0.22)]"
 >
 ↗
 </span>
 </div>
 </a>
 </article>
 );
}

/** Canva pageNew — grid card with thumbnail. */
function NewsGridCard({
 item,
 categoryLabel,
 readMoreLabel,
 onOpen,
}: {
 item: NewsListItem;
 categoryLabel: string;
 readMoreLabel: string;
 onOpen: (href: string, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
 const { locale } = useLocale();
 const { theme } = useTheme();
 const href = assetPath(`/news/${item.slug}/`);

 return (
 <li className="h-full">
 <article className="h-full">
 <a
 href={href}
 onClick={(event) => onOpen(href, event)}
 className="group flex h-full flex-col overflow-hidden rounded-xl bg-[var(--kuct-panel)] transition duration-500 hover:shadow-[0_0_1.75rem_rgba(var(--kuct-accent-rgb),0.16)]"
 >
 <div className="relative aspect-[16/10] overflow-hidden bg-[var(--kuct-panel)]">
 <LazyImage
 src={themeAsset(getNewsImage(item.slug), theme)}
 alt={item.title}
 fill
 className="object-cover transition duration-500 group-hover:scale-[1.02]"
 sizes="(max-width: 768px) 100vw, 20rem"
 />
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.55)] via-transparent to-transparent" />
 </div>
 <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
 <p className="text-xs font-medium tracking-wide text-[var(--kuct-muted)]">
 <time dateTime={item.date}>
 {formatNewsDate(locale, item.date)}
 </time>
 <span aria-hidden className="mx-2 text-[var(--kuct-border)]">
 •
 </span>
 <span className={newsCategoryChipClasses(item.category)}>
 {categoryLabel}
 </span>
 </p>
 <h2 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)] sm:text-xl">
 {item.title}
 </h2>
 <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.excerpt}
 </p>
 <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--kuct-accent)] transition group-hover:text-[var(--kuct-text)]">
 {readMoreLabel}
 <span
 aria-hidden
 className="inline-flex size-7 items-center justify-center rounded-full text-[10px]"
 >
 ↗
 </span>
 </span>
 </div>
 </a>
 </article>
 </li>
 );
}

export function NewsContent({ embedded = false }: { embedded?: boolean }) {
 const { locale, t } = useLocale();
 const { openHref } = usePagePreview();
 const n = t.news;
 const [filter, setFilter] = useState<NewsCategory | "all">("all");

 const allItems = useMemo(() => listNews(locale), [locale]);

 const items = useMemo(() => {
 if (filter === "all") return allItems;
 return allItems.filter((item) => item.category === filter);
 }, [allItems, filter]);

 const featured = items[0] ?? null;
 const restItems = items.slice(1);

 return (
 <div className={embedded ? "pb-10" : undefined}>
 <section
 aria-labelledby="news-page-heading"
 className={
 embedded
 ? "scroll-mt-16 py-10 sm:py-12"
 : "scroll-mt-20 py-16 sm:py-20 lg:py-24"
 }
 >
 <div className="mx-auto max-w-6xl px-4 sm:px-6">
 <Reveal delay={40} immediate={embedded}>
 <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
 <div className="max-w-2xl">
 <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--kuct-accent)] uppercase">
 {n.pageEyebrow}
 </p>
 <h1
 id="news-page-heading"
 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-3xl md:text-4xl"
 >
 <AccentText>{n.title}</AccentText>
 </h1>
 <p className="mt-4 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {n.blurb}
 </p>
 </div>

 <div
 className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end"
 role="group"
 aria-label={n.filterAll}
 >
 <button
 type="button"
 onClick={() => setFilter("all")}
 className={filterButtonClass(filter === "all")}
 >
 {n.filterAll}
 </button>
 {NEWS_CATEGORIES.map((cat) => (
 <button
 key={cat}
 type="button"
 onClick={() => setFilter(cat)}
 className={filterButtonClass(filter === cat)}
 >
 {n.categories[cat]}
 </button>
 ))}
 </div>
 </div>

 {items.length === 0 ? (
 <p className="mt-12 text-center text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {n.emptyState}
 </p>
 ) : (
 <>
 {featured ? (
 <div className="mt-10 sm:mt-12">
 <FeaturedArticleBlock
 item={featured}
 categoryLabel={n.categories[featured.category]}
 featuredLabel={n.featuredLabel}
 readMoreLabel={n.readMore}
 onOpen={(href, event) => openHref(href, event)}
 />
 </div>
 ) : null}

 {restItems.length > 0 ? (
 <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
 {restItems.map((item) => (
 <NewsGridCard
 key={item.slug}
 item={item}
 categoryLabel={n.categories[item.category]}
 readMoreLabel={n.readMore}
 onOpen={(href, event) => openHref(href, event)}
 />
 ))}
 </ul>
 ) : null}
 </>
 )}
 </Reveal>
 </div>
 </section>
 </div>
 );
}
