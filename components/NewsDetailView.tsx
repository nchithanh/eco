"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { NewsBodyText } from "@/components/NewsBodyText";
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
  type NewsBodyBlock,
  type NewsSlug,
} from "@/lib/news-details";

function newsBodyBlockKey(block: NewsBodyBlock, index: number) {
  if (block.type === "image") return `image-${block.src}-${index}`;
  return `${block.type}-${block.text.slice(0, 48)}-${index}`;
}

function NewsBodyBlockView({ block }: { block: NewsBodyBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="pt-4 font-display text-xl font-semibold tracking-tight text-[var(--kuct-text)] first:pt-0 sm:text-2xl">
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="pt-2 font-display text-lg font-semibold tracking-tight text-[var(--kuct-text)] sm:text-xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "lead") {
    return (
      <p className="rounded-2xl border border-[var(--kuct-accent)]/25 bg-[rgba(var(--kuct-accent-rgb),0.08)] px-5 py-4 text-base leading-relaxed text-[var(--kuct-text)] sm:text-lg">
        <NewsBodyText text={block.text} />
      </p>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--kuct-border)]">
        <LazyImage
          src={assetPath(block.src)}
          alt={block.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
        />
      </figure>
    );
  }

  return (
    <p className="text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
      <NewsBodyText text={block.text} />
    </p>
  );
}

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
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqItems = detail.faq ?? [];

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
          <Reveal immediate={embedded}>
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
          </Reveal>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-10 lg:mt-8">
            <Reveal immediate={embedded}>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
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

                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
                  {detail.title}
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                  {detail.excerpt}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} variant="right" immediate={embedded}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.6)] shadow-[0_1rem_2.5rem_rgba(139,92,246,0.12)] lg:aspect-auto lg:min-h-[18rem]">
                <LazyImage
                  src={themeAsset(detail.image, theme)}
                  alt={detail.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 36rem"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.35)] via-transparent to-transparent lg:bg-gradient-to-l lg:from-[rgba(4,4,12,0.4)] lg:via-transparent lg:to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-3xl px-6">
          <Reveal immediate={embedded}>
            <div className="space-y-5">
              {detail.body.map((block, index) => (
                <NewsBodyBlockView
                  key={newsBodyBlockKey(block, index)}
                  block={block}
                />
              ))}
            </div>
          </Reveal>

          {faqItems.length > 0 ? (
            <Reveal delay={40} immediate={embedded}>
              <aside className="mt-14 border-t border-[var(--kuct-accent)]/15 pt-10">
                <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)] sm:text-xl">
                  {ui.faqTitle}
                </h2>
                <div className="mt-4 divide-y divide-[var(--kuct-border)] overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)]">
                  {faqItems.map((item, index) => {
                    const open = openFaq === index;
                    const panelId = `${faqId}-panel-${index}`;
                    const buttonId = `${faqId}-btn-${index}`;
                    return (
                      <div key={item.q}>
                        <h3>
                          <button
                            type="button"
                            id={buttonId}
                            aria-expanded={open}
                            aria-controls={panelId}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.12)] sm:px-6 sm:text-base"
                            onClick={() =>
                              setOpenFaq((cur) => (cur === index ? null : index))
                            }
                          >
                            <span>{item.q}</span>
                            <span aria-hidden className="text-[var(--kuct-accent)]">
                              {open ? "−" : "+"}
                            </span>
                          </button>
                        </h3>
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          hidden={!open}
                          className="px-5 pb-4 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:px-6"
                        >
                          <FaqAnswerText text={item.a} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </aside>
            </Reveal>
          ) : null}

          {related.length > 0 ? (
            <Reveal delay={60} immediate={embedded}>
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

          <Reveal className="mt-12" immediate={embedded}>
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
