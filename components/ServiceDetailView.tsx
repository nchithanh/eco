"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { EmbedSiteMock } from "@/components/EmbedSiteMock";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AccentText, BrandText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { PopularServices } from "@/components/PopularServices";
import { Reveal } from "@/components/Reveal";
import { SitesShipped } from "@/components/SitesShipped";
import { SoftwareServiceContent } from "@/components/SoftwareServiceContent";
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
import { assetPath } from "@/lib/asset";
import { useTheme } from "@/lib/theme";

const MOBILE_IMG = {
  highlights: "/services/mobile/highlights.jpg",
  process: "/services/mobile/process.jpg",
  deliverables: "/services/mobile/deliverables.jpg",
  audience: "/services/mobile/audience.jpg",
} as const;

function MobileSectionImage({
  src,
  alt,
  className = "relative mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-[var(--kuct-panel)]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <LazyImage
        src={assetPath(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 28rem, 100vw"
      />
    </div>
  );
}

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
  const useDevicesMock = slug === "mobile";
  const isMobilePage = slug === "mobile";
  const isWebPage = slug === "web";
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqId = useId();

  const openQuoteFlow = () => {
    if (embedded) close();
    openQuote();
  };

  if (slug === "software") {
    return <SoftwareServiceContent embedded={embedded} />;
  }

  return (
    <div>
      <section
        id="service-hero"
        aria-labelledby="service-hero-heading"
        className={
          embedded
            ? "relative overflow-hidden py-10 sm:py-12"
            : "relative overflow-hidden py-16 sm:py-20 lg:py-24"
        }
      >
        <div
          className="pointer-events-none absolute inset-0 kuct-hero-wash"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6">
          {!embedded ? (
            <Link
              href="/#popular-services"
              className="kuct-hero-back inline-flex text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-accent)]"
            >
              {ui.back}
            </Link>
          ) : null}

          <div
            className={`${embedded ? "mt-0" : "mt-8"} grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14`}
          >
            <Reveal variant="title" className="min-w-0">
              <p className="kuct-type-eyebrow">
                {card?.category ?? t.capabilities.eyebrow}
              </p>
              <h1
                id="service-hero-heading"
                className="kuct-title-enter kuct-type-h1 mt-4 max-w-[18ch] font-display text-3xl text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem]"
              >
                <AccentText>{detail.title}</AccentText>
              </h1>
              <p className="kuct-type-body mt-5 max-w-[42ch]">
                <BrandText size="sm">{detail.intro}</BrandText>
              </p>

              {card?.tags ? (
                <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
                  {card.tags.map((tag) => (
                    <li key={tag} className="kuct-badge">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold shadow-[var(--kuct-shadow)]"
                  onClick={openQuoteFlow}
                >
                  {ui.cta}
                </button>
                {slug === "web" ? (
                  <a
                    href="#web-pricing"
                    className="kuct-btn-ghost inline-flex items-center"
                  >
                    {ui.packagesCta}
                  </a>
                ) : null}
              </div>
            </Reveal>

            <Reveal variant="right" delay={80} className="relative min-w-0">
              {useDevicesMock ? (
                <EmbedSiteMock variant="devices" showChat={false} animate />
              ) : isWebPage ? (
                <EmbedSiteMock
                  url="yourbusiness.com"
                  showChat={false}
                  animate
                  className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-xl border border-[var(--kuct-border)] bg-[var(--kuct-panel)] shadow-[var(--kuct-shadow)] sm:min-h-[26rem]"
                />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--kuct-panel)] sm:aspect-[16/11]">
                  <LazyImage
                    src={hero}
                    alt={detail.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 32rem"
                    priority={!embedded}
                  />
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="service-details"
        className={
          embedded
            ? "scroll-mt-20 py-12 sm:py-14"
            : "scroll-mt-20 py-20 sm:py-24"
        }
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            <DetailBlock
              index={0}
              title={detail.highlightsTitle ?? ui.highlightsTitle}
              leadText={detail.highlightsLead}
              items={detail.highlights}
              lead
              image={
                isMobilePage
                  ? {
                      src: MOBILE_IMG.highlights,
                      alt: detail.highlightsTitle ?? "",
                    }
                  : undefined
              }
            />
            <DetailBlock
              index={1}
              title={detail.processTitle ?? ui.processTitle}
              leadText={detail.processLead}
              items={detail.process}
              image={
                isMobilePage
                  ? {
                      src: MOBILE_IMG.process,
                      alt: detail.processTitle ?? "",
                    }
                  : undefined
              }
            />
            <DetailBlock
              index={2}
              title={detail.deliverablesTitle ?? ui.deliverablesTitle}
              leadText={detail.deliverablesLead}
              items={detail.deliverables}
              lead
              image={
                isMobilePage
                  ? {
                      src: MOBILE_IMG.deliverables,
                      alt: detail.deliverablesTitle ?? "",
                    }
                  : undefined
              }
            />
          </div>

          {!isMobilePage ? (
            <>
              <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5">
                <Reveal className="kuct-surface-card p-5 sm:p-6">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-accent)] uppercase">
                    {xui.audienceTitle}
                  </p>
                  <p className="mt-3 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:text-base">
                    {extras.audience}
                  </p>
                  <h2 className="mt-6 font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                    {xui.useCasesTitle}
                  </h2>
                  <ul className="mt-3 list-none space-y-2.5 p-0">
                    {extras.useCases.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-[var(--kuct-muted)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]/75"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={60} className="kuct-surface-card p-5 sm:p-6">
                  <h2 className="kuct-type-eyebrow text-center">
                    {xui.faqTitle}
                  </h2>
                  <ul className="mt-4 list-none space-y-3 p-0">
                    {extras.faq.map((item) => (
                      <li
                        key={item.q}
                        className="rounded-lg bg-[var(--kuct-panel-2)] px-3.5 py-3"
                      >
                        <h3 className="text-sm font-semibold text-[var(--kuct-text)]">
                          {item.q}
                        </h3>
                        <p className="mt-1.5 text-sm leading-[1.65] text-[var(--kuct-muted)]">
                          <FaqAnswerText text={item.a} />
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal className="mt-12 rounded-xl bg-[var(--kuct-panel)] px-6 py-8 text-center sm:mt-14 sm:px-10 sm:py-10">
                <button
                  type="button"
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold"
                  onClick={openQuoteFlow}
                >
                  {ui.cta}
                </button>
              </Reveal>
            </>
          ) : null}
        </div>
      </section>

      {isMobilePage ? (
        <>
          <section
            id="mobile-audience"
            className="kuct-section-wash scroll-mt-20 py-20 sm:py-24"
            aria-labelledby="mobile-audience-heading"
          >
            <div className="mx-auto max-w-7xl px-6">
              <Reveal variant="title">
                <h2
                  id="mobile-audience-heading"
                  className="text-center font-display text-3xl font-semibold sm:text-4xl"
                >
                  <AccentText>{xui.audienceTitle}</AccentText>
                </h2>
              </Reveal>
              <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
                <Reveal delay={40}>
                  <div className="kuct-surface-card rounded-xl p-6 sm:p-8">
                    <p className="text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
                      {extras.audience}
                    </p>
                    <h3 className="mt-8 font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                      {xui.useCasesTitle}
                    </h3>
                    <ul className="mt-3 list-none space-y-2.5 p-0">
                      {extras.useCases.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-[var(--kuct-muted)]"
                        >
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]/75"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal
                  delay={80}
                  variant="right"
                  className="lg:sticky lg:top-28"
                >
                  <MobileSectionImage
                    src={MOBILE_IMG.audience}
                    alt={xui.audienceTitle}
                    className="relative aspect-[16/9] overflow-hidden kuct-surface-card"
                  />
                </Reveal>
              </div>
            </div>
          </section>

          <section
            id="mobile-faq"
            className="scroll-mt-20 py-20 sm:py-24"
            aria-labelledby="mobile-faq-heading"
          >
            <div className="mx-auto max-w-7xl px-6">
              <Reveal
                variant="title"
                className="mx-auto max-w-3xl text-center"
              >
                <p className="kuct-type-eyebrow">FAQ</p>
                <h2
                  id="mobile-faq-heading"
                  className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl"
                >
                  <AccentText>{xui.faqTitle}</AccentText>
                </h2>
              </Reveal>
              <ul className="mx-auto mt-10 max-w-3xl list-none space-y-3 p-0">
                {extras.faq.map((item, index) => {
                  const open = openFaq === index;
                  const panelId = `${faqId}-panel-${index}`;
                  const buttonId = `${faqId}-btn-${index}`;
                  return (
                    <li key={item.q}>
                      <Reveal delay={index * 30} className="kuct-surface-card">
                        <h3>
                          <button
                            type="button"
                            id={buttonId}
                            aria-expanded={open}
                            aria-controls={panelId}
                            className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                            onClick={() =>
                              setOpenFaq(open ? null : index)
                            }
                          >
                            <span className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)] sm:text-base">
                              {item.q}
                            </span>
                            <span
                              aria-hidden
                              className={`mt-0.5 shrink-0 text-[var(--kuct-accent)] transition ${open ? "rotate-45" : ""}`}
                            >
                              +
                            </span>
                          </button>
                        </h3>
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          hidden={!open}
                          className="border-t border-[var(--kuct-border)]/50 px-5 pb-5 sm:px-6 sm:pb-6"
                        >
                          <p className="pt-4 text-sm leading-[1.7] text-[var(--kuct-muted)]">
                            <FaqAnswerText text={item.a} />
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section className="scroll-mt-20 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal className="rounded-xl bg-[var(--kuct-panel)] px-6 py-8 text-center sm:px-10 sm:py-10">
                <button
                  type="button"
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold"
                  onClick={openQuoteFlow}
                >
                  {ui.cta}
                </button>
              </Reveal>
            </div>
          </section>
        </>
      ) : null}

      {slug === "web" ? (
        <>
          <PopularServices embedded sectionId="web-pricing" />
          <SitesShipped embedded={embedded} />
        </>
      ) : null}
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

function DetailBlock({
  title,
  items,
  index,
  lead = false,
  leadText,
  image,
}: {
  title: string;
  items: string[];
  index: number;
  lead?: boolean;
  leadText?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <Reveal
      delay={index * 50}
      className="kuct-surface-card p-5 sm:p-6"
    >
      {image ? (
        <MobileSectionImage src={image.src} alt={image.alt || title} />
      ) : null}
      <p className="text-[11px] font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2 className="mt-2 font-display text-base font-semibold tracking-wide text-[var(--kuct-text)] sm:text-lg">
        {title}
      </h2>
      {leadText ? (
        <p className="mt-3 text-sm leading-[1.65] text-[var(--kuct-muted)]">
          {leadText}
        </p>
      ) : null}
      <ul className="mt-4 list-none space-y-2.5 p-0">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-[1.65] text-[var(--kuct-muted)]"
          >
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]/70"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
