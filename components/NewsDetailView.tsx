"use client";

import Link from "next/link";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath, routePath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { newsCategoryChipClasses } from "@/lib/news-category-styles";
import {
  formatNewsDate,
  getNewsDetail,
  getNewsDetailUi,
  getRelatedNews,
  type NewsSlug,
} from "@/lib/news-details";

export function NewsDetailContent({
  slug,
  embedded = false,
}: {
  slug: NewsSlug;
  embedded?: boolean;
}) {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const { close, openHref } = usePagePreview();
  const detail = getNewsDetail(locale, slug);
  const ui = getNewsDetailUi(locale);
  const related = getRelatedNews(locale, slug, 3);
  const newsListHref = assetPath("/news/");
  const contactHref = assetPath("/#contact");

  return (
    <div>
      <section
        className={
          embedded
            ? "relative overflow-hidden border-b border-[var(--kuct-border)] py-10 sm:py-12"
            : "relative overflow-hidden border-b border-[var(--kuct-border)] py-16 sm:py-20"
        }
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.08)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.05)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-[var(--kuct-muted)]"
            >
              <Link
                href={routePath("/")}
                className="kuct-link"
                onClick={() => {
                  if (embedded) close();
                }}
              >
                {ui.breadcrumbHome}
              </Link>
              <span aria-hidden>/</span>
              <a
                href={newsListHref}
                className="kuct-link"
                onClick={(event) => {
                  if (embedded) {
                    event.preventDefault();
                    close();
                    openHref(newsListHref);
                  }
                }}
              >
                {ui.breadcrumbNews}
              </a>
              <span aria-hidden>/</span>
              <span className="text-[var(--kuct-text)] line-clamp-1">
                {detail.title}
              </span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className={newsCategoryChipClasses(detail.category)}>
                {t.news.categories[detail.category]}
              </span>
              <time
                dateTime={detail.date}
                className="text-xs font-medium tracking-wide text-[var(--kuct-muted)]"
              >
                {formatNewsDate(locale, detail.date)}
              </time>
            </div>

            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
              {detail.title}
            </h1>
          </Reveal>

          <Reveal delay={80} variant="right">
            <div className="mt-8 relative aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border border-[var(--kuct-border)] shadow-[0_1rem_2.5rem_rgba(139,92,246,0.12)]">
              <LazyImage
                src={themeAsset(detail.image, theme)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 56rem"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
              {detail.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {related.length > 0 ? (
            <Reveal delay={60}>
              <aside className="mt-14 border-t border-[var(--kuct-accent)]/15 pt-10">
                <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                  {ui.relatedTitle}
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((item) => {
                    const href = assetPath(`/news/${item.slug}/`);
                    return (
                      <li key={item.slug}>
                        <a
                          href={href}
                          className="group flex flex-wrap items-baseline gap-x-3 gap-y-1"
                          onClick={(event) => openHref(href, event)}
                        >
                          <span className="font-medium text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)]">
                            {item.title}
                          </span>
                          <time
                            dateTime={item.date}
                            className="text-xs text-[var(--kuct-muted)]"
                          >
                            {formatNewsDate(locale, item.date)}
                          </time>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </Reveal>
          ) : null}

          <Reveal className="mt-12">
            <a
              href={contactHref}
              className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
              onClick={() => {
                if (embedded) close();
              }}
            >
              {ui.cta}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function NewsDetailView({ slug }: { slug: NewsSlug }) {
  return (
    <main>
      <Nav />
      <NewsDetailContent slug={slug} />
      <Footer />
    </main>
  );
}
