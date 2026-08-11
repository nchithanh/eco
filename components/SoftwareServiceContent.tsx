"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { getDetailExtrasUi, getServiceExtras } from "@/lib/detail-extras";
import {
  getServiceDetail,
  getServiceDetailUi,
} from "@/lib/i18n/service-details";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";

const IMG = {
  hero: "/services/software/hero.jpg",
  highlights: "/services/software/highlights.jpg",
  process: "/services/software/process.jpg",
  deliverables: "/services/software/deliverables.jpg",
  useCases: "/services/software/use-cases.jpg",
  audience: "/services/software/audience.jpg",
} as const;

const USE_CASES_TITLE: Record<Locale, string> = {
  vi: "Ứng dụng thực tế",
  en: "Practical use cases",
  ja: "実践的なユースケース",
};

const AUDIENCE_TITLE: Record<Locale, string> = {
  vi: "Phù hợp với ai?",
  en: "Who is this for?",
  ja: "どなた向けか？",
};

const CLOSE_COPY: Record<
  Locale,
  { eyebrow: string; title: string; support: string }
> = {
  vi: {
    eyebrow: "Get started",
    title: "Từ bài toán đến bàn giao",
    support:
      "Làm rõ bài toán → chốt phạm vi → xây dựng → bàn giao. Báo giá theo phạm vi thực tế, không khóa bạn vào một nhà cung cấp.",
  },
  en: {
    eyebrow: "Get started",
    title: "From problem to handoff",
    support:
      "Clarify the problem → scope it → build → hand off. Quotes follow real scope — you keep the software after delivery.",
  },
  ja: {
    eyebrow: "Get started",
    title: "課題から引き渡しまで",
    support:
      "課題の明確化 → 範囲確定 → 開発 → 引き渡し。見積もりは実スコープに基づき、納品後もソフトウェアは手元に残ります。",
  },
};

const FAQ_EYEBROW: Record<Locale, string> = {
  vi: "FAQ",
  en: "FAQ",
  ja: "FAQ",
};

function SectionImage({
  src,
  alt,
  priority = false,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden kuct-surface-card`}
    >
      <LazyImage
        src={assetPath(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 56rem, 100vw"
        priority={priority}
      />
    </div>
  );
}

/** Split "Title — body" (em/en dash) for layered list / use-case cards. */
function splitDash(text: string): { heading?: string; body: string } {
  const match = text.match(/^(.+?)\s+[—–]\s+(.+)$/);
  if (match) {
    return { heading: match[1].trim(), body: match[2].trim() };
  }
  return { body: text };
}

export function SoftwareServiceContent({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const { locale, t } = useLocale();
  const { close } = usePagePreview();
  const { openQuote } = useQuote();
  const detail = getServiceDetail(locale, "software");
  const ui = getServiceDetailUi(locale);
  const extras = getServiceExtras(locale, "software");
  const xui = getDetailExtrasUi(locale);
  const card = t.capabilities.items.find((item) => item.id === "software");
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeCopy = CLOSE_COPY[locale];
  const popularHref = assetPath("/#popular-services");

  const openQuoteFlow = () => {
    if (embedded) close();
    openQuote();
  };

  return (
    <div className={embedded ? "pb-6" : undefined}>
      <section
        className={
          embedded
            ? "relative overflow-hidden py-12 sm:py-16"
            : "relative overflow-hidden py-20 sm:py-28"
        }
      >
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <Reveal variant="title" className="max-w-5xl text-left">
              <p className="kuct-type-eyebrow">
                {card?.category ?? "Build"}
              </p>
              <h1 className="kuct-type-h1 mt-4 max-w-[22ch] font-display text-3xl text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem]">
                <AccentText>{detail.title}</AccentText>
              </h1>
              <p className="mt-5 max-w-[78ch] text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg lg:max-w-4xl">
                {detail.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
                <button
                  type="button"
                  onClick={openQuoteFlow}
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  {ui.cta}
                </button>
                <a
                  href={popularHref}
                  className="kuct-btn-ghost inline-flex items-center"
                >
                  {ui.back}
                </a>
              </div>
            </Reveal>
            <Reveal delay={80} variant="right">
              <SectionImage
                src={IMG.hero}
                alt={detail.title}
                priority={!embedded}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="kuct-section-wash scroll-mt-20 py-20"
        aria-labelledby="software-highlights-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <h2
              id="software-highlights-heading"
              className="text-center font-display text-3xl font-semibold sm:text-4xl"
            >
              <AccentText>
                {detail.highlightsTitle ?? ui.highlightsTitle}
              </AccentText>
            </h2>
            {detail.highlightsLead ? (
              <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
                {detail.highlightsLead}
              </p>
            ) : null}
          </Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <ol className="space-y-4">
              {detail.highlights.map((item, index) => {
                const { heading, body } = splitDash(item);
                return (
                  <Reveal
                    key={item}
                    as="li"
                    delay={40 + index * 40}
                    className="flex gap-4"
                  >
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-[10px] text-sm font-bold text-white"
                      style={{ background: "var(--kuct-accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 pt-1">
                      {heading ? (
                        <>
                          <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                            {heading}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                            {body}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
                          {body}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </ol>
            <Reveal delay={80} variant="right" className="lg:sticky lg:top-28">
              <SectionImage
                src={IMG.highlights}
                alt={detail.highlightsTitle ?? ui.highlightsTitle}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-20 py-20"
        aria-labelledby="software-process-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <h2
              id="software-process-heading"
              className="text-center font-display text-3xl font-semibold sm:text-4xl"
            >
              <AccentText>{detail.processTitle ?? ui.processTitle}</AccentText>
            </h2>
            {detail.processLead ? (
              <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
                {detail.processLead}
              </p>
            ) : null}
          </Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <ol className="space-y-4">
              {detail.process.map((step, index) => {
                const { heading, body } = splitDash(step);
                return (
                  <Reveal
                    key={step}
                    as="li"
                    delay={40 + index * 40}
                    className="kuct-surface-card flex gap-4 rounded-xl p-5 sm:p-6"
                  >
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-[10px] text-sm font-bold text-white"
                      style={{ background: "var(--kuct-accent)" }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      {heading ? (
                        <>
                          <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                            {heading}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                            {body}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
                          {body}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </ol>
            <Reveal delay={80} variant="right" className="lg:sticky lg:top-28">
              <SectionImage
                src={IMG.process}
                alt={detail.processTitle ?? ui.processTitle}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="deliverables"
        className="kuct-section-wash scroll-mt-20 py-20"
        aria-labelledby="software-deliverables-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <h2
              id="software-deliverables-heading"
              className="text-center font-display text-3xl font-semibold sm:text-4xl"
            >
              <AccentText>
                {detail.deliverablesTitle ?? ui.deliverablesTitle}
              </AccentText>
            </h2>
            {detail.deliverablesLead ? (
              <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
                {detail.deliverablesLead}
              </p>
            ) : null}
          </Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <Reveal delay={40}>
              <ul className="kuct-surface-card space-y-3 rounded-xl p-6 sm:p-8">
                {detail.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--kuct-text)]"
                  >
                    <span
                      aria-hidden
                      className="font-semibold text-[var(--kuct-accent)]"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} variant="right" className="lg:sticky lg:top-28">
              <SectionImage
                src={IMG.deliverables}
                alt={detail.deliverablesTitle ?? ui.deliverablesTitle}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="use-cases"
        className="scroll-mt-20 py-20"
        aria-labelledby="software-use-cases-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {xui.useCasesTitle}
            </p>
            <h2
              id="software-use-cases-heading"
              className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl"
            >
              <AccentText>{USE_CASES_TITLE[locale]}</AccentText>
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <ul className="grid gap-4">
              {extras.useCases.map((item, index) => {
                const { heading, body } = splitDash(item);
                return (
                  <Reveal
                    key={item}
                    as="li"
                    delay={40 + index * 30}
                    className="kuct-surface-card rounded-xl p-5 sm:p-6"
                  >
                    {heading ? (
                      <>
                        <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                          {heading}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                          {body}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {body}
                      </p>
                    )}
                  </Reveal>
                );
              })}
            </ul>
            <Reveal delay={80} variant="right" className="lg:sticky lg:top-28">
              <SectionImage
                src={IMG.useCases}
                alt={USE_CASES_TITLE[locale]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="audience"
        className="kuct-section-wash scroll-mt-20 py-20"
        aria-labelledby="software-audience-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <h2
              id="software-audience-heading"
              className="text-center font-display text-3xl font-semibold sm:text-4xl"
            >
              <AccentText>{AUDIENCE_TITLE[locale]}</AccentText>
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <Reveal delay={40}>
              <div className="kuct-surface-card rounded-xl p-6 sm:p-8">
                <p className="text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
                  {extras.audience}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80} variant="right" className="lg:sticky lg:top-28">
              <SectionImage src={IMG.audience} alt={AUDIENCE_TITLE[locale]} />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-20 py-20"
        aria-labelledby="software-faq-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title">
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {FAQ_EYEBROW[locale]}
            </p>
            <h2
              id="software-faq-heading"
              className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl"
            >
              <AccentText>{xui.faqTitle}</AccentText>
            </h2>
          </Reveal>
          <Reveal
            delay={60}
            className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden kuct-surface-card"
          >
            {extras.faq.map((item, index) => {
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
                    className="px-5 pb-4 text-sm leading-relaxed text-[var(--kuct-muted)] sm:px-6"
                  >
                    <FaqAnswerText text={item.a} />
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {!embedded ? (
        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal variant="title">
              <p className="kuct-type-eyebrow">
                {closeCopy.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                <AccentText>{closeCopy.title}</AccentText>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--kuct-muted)]">
                {closeCopy.support}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={openQuoteFlow}
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  {ui.cta}
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function SoftwareServicePage() {
  return (
    <main>
      <Nav />
      <SoftwareServiceContent />
      <Footer />
    </main>
  );
}
