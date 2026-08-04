"use client";

import Link from "next/link";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AccentText, BrandText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { PopularServices } from "@/components/PopularServices";
import { Reveal } from "@/components/Reveal";
import { SitesShipped } from "@/components/SitesShipped";
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

 const openQuoteFlow = () => {
 if (embedded) close();
 openQuote();
 };

 return (
 <div>
 <section
 className={
 embedded
 ? "relative overflow-hidden py-10 sm:py-12"
 : "relative overflow-hidden py-16 sm:py-20 lg:py-24"
 }
 >
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.12)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.04)]" />
 <div className="pointer-events-none absolute top-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[rgba(var(--kuct-accent-rgb),0.08)] blur-3xl" />

 <div className="relative mx-auto max-w-6xl px-6">
 {!embedded ? (
 <Link
 href="/#popular-services"
 className="inline-flex text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-accent)]"
 >
 {ui.back}
 </Link>
 ) : null}

 <div
 className={`${embedded ? "mt-0" : "mt-8"} grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14`}
 >
 <Reveal variant="title" className="min-w-0">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {card?.category ?? t.capabilities.eyebrow}
 </p>
 <h1 className="mt-4 max-w-[18ch] font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
 <AccentText>{detail.title}</AccentText>
 </h1>
 <p className="mt-5 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)] sm:text-[1.0625rem]">
 <BrandText size="sm">{detail.intro}</BrandText>
 </p>

 {card?.tags ? (
 <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
 {card.tags.map((tag) => (
 <li
 key={tag}
 className="rounded-full bg-[var(--kuct-panel-2)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-muted)]"
 >
 {tag}
 </li>
 ))}
 </ul>
 ) : null}

 <div className="mt-8 flex flex-wrap items-center gap-3">
 <button
 type="button"
 className="kuct-btn-primary inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold shadow-[0_14px_36px_rgb(26_21_32/0.18)]"
 onClick={openQuoteFlow}
 >
 {ui.cta}
 </button>
 {slug === "web" ? (
 <a
 href="#web-pricing"
 className="kuct-btn-ghost inline-flex items-center "
 >
 {ui.packagesCta}
 </a>
 ) : null}
 </div>
 </Reveal>

 <Reveal variant="right" delay={80} className="relative">
 <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--kuct-panel)] sm:aspect-[16/11]">
 <div className="pointer-events-none absolute inset-[18%] rounded-full opacity-50 blur-3xl kuct-glow-orb" />
 <LazyImage
 src={hero}
 alt={detail.title}
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 32rem"
 priority={!embedded}
 />
 </div>
 </Reveal>
 </div>
 </div>
 </section>

 <section
 id="service-details"
 className={embedded ? "scroll-mt-20 py-12 sm:py-14" : "scroll-mt-20 py-20 sm:py-24"}
 >
 <div className="mx-auto max-w-6xl px-6">
 <div className="grid gap-4 md:grid-cols-3 md:gap-5">
 <DetailBlock
 index={0}
 title={detail.highlightsTitle ?? ui.highlightsTitle}
 leadText={detail.highlightsLead}
 items={detail.highlights}
 lead
 />
 <DetailBlock
 index={1}
 title={detail.processTitle ?? ui.processTitle}
 leadText={detail.processLead}
 items={detail.process}
 />
 <DetailBlock
 index={2}
 title={detail.deliverablesTitle ?? ui.deliverablesTitle}
 leadText={detail.deliverablesLead}
 items={detail.deliverables}
 lead
 />
 </div>

 <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5">
 <Reveal className="rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md sm:p-6">
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

 <Reveal delay={60} className="rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md sm:p-6">
 <h2 className="text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-accent)] uppercase">
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
 className="kuct-btn-primary inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold shadow-[0_14px_36px_rgb(26_21_32/0.18)]"
 onClick={openQuoteFlow}
 >
 {ui.cta}
 </button>
 </Reveal>
 </div>
 </section>

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
}: {
 title: string;
 items: string[];
 index: number;
 lead?: boolean;
 leadText?: string;
}) {
 return (
 <Reveal
 delay={index * 50}
 className={
 lead
 ? "rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md sm:p-6"
 : "rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md sm:p-6"
 }
 >
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
