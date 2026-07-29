"use client";

import Link from "next/link";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BrandText } from "@/components/BrandName";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { useQuote } from "@/components/QuoteProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  getServiceDetail,
  getServiceDetailUi,
  type ServiceSlug,
} from "@/lib/i18n/service-details";
import {
  getDetailExtrasUi,
  getServiceExtras,
  serviceHero,
} from "@/lib/detail-extras";
import { useTheme } from "@/lib/theme";

export function ServiceDetailContent({
  slug,
  embedded = false,
}: {
  slug: ServiceSlug;
  embedded?: boolean;
}) {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const { close } = usePagePreview();
  const { openQuote } = useQuote();
  const detail = getServiceDetail(locale, slug);
  const ui = getServiceDetailUi(locale);
  const extras = getServiceExtras(locale, slug);
  const xui = getDetailExtrasUi(locale);
  const card = t.capabilities.items.find((item) => item.id === slug);
  const hero = serviceHero(slug, theme);

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
          {!embedded ? (
            <Link
              href="/#capabilities"
              className="kuct-link inline-flex text-sm font-medium text-[var(--kuct-muted)]"
            >
              {ui.back}
            </Link>
          ) : null}
          <div
            className={`${embedded ? "mt-0" : "mt-6"} relative aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl border border-[var(--kuct-border)] shadow-[0_1rem_2.5rem_rgba(139,92,246,0.12)]`}
          >
            <LazyImage
              src={hero}
              alt={detail.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
          </div>
          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            {card?.category ?? t.capabilities.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
            <BrandText size="sm">{detail.intro}</BrandText>
          </p>
          {card?.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] px-3 py-1 text-xs font-semibold text-[var(--kuct-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3">
          <DetailBlock title={ui.highlightsTitle} items={detail.highlights} />
          <DetailBlock title={ui.processTitle} items={detail.process} />
          <DetailBlock
            title={ui.deliverablesTitle}
            items={detail.deliverables}
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {xui.audienceTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {extras.audience}
            </p>
            <h3 className="mt-6 font-display text-base font-semibold text-[var(--kuct-text)]">
              {xui.useCasesTitle}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)]">
              {extras.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {xui.faqTitle}
            </h2>
            <ul className="mt-4 space-y-4">
              {extras.faq.map((item) => (
                <li key={item.q}>
                  <p className="text-sm font-semibold text-[var(--kuct-text)]">
                    {item.q}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <button
            type="button"
            className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
            onClick={() => {
              if (embedded) close();
              openQuote();
            }}
          >
            {ui.cta}
          </button>
        </div>
      </section>
    </div>
  );
}

export function ServiceDetailView({ slug }: { slug: ServiceSlug }) {
  return (
    <main>
      <Nav />
      <ServiceDetailContent slug={slug} />
      <Footer />
    </main>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="kuct-glass kuct-card-hover rounded-2xl p-6">
      <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
        {title}
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
