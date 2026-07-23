"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  getServiceDetail,
  getServiceDetailUi,
  type ServiceSlug,
} from "@/lib/i18n/service-details";

export function ServiceDetailView({ slug }: { slug: ServiceSlug }) {
  const { locale, t } = useLocale();
  const detail = getServiceDetail(locale, slug);
  const ui = getServiceDetailUi(locale);
  const card = t.capabilities.items.find((item) => item.id === slug);

  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden border-b border-white/40 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-white/50 to-[#ede9fe]/80" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/#capabilities"
            className="kuct-link inline-flex text-sm font-medium text-[var(--kuct-muted)]"
          >
            {ui.back}
          </Link>
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
                  className="rounded-full border border-white/70 bg-white/50 px-3 py-1 text-xs font-semibold text-[var(--kuct-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3">
          <DetailBlock title={ui.highlightsTitle} items={detail.highlights} />
          <DetailBlock title={ui.processTitle} items={detail.process} />
          <DetailBlock
            title={ui.deliverablesTitle}
            items={detail.deliverables}
          />
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-6">
          <a
            href="/#contact"
            className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
          >
            {ui.cta}
          </a>
        </div>
      </section>
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
