"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import {
  industryBySlug,
  pricingHashForSlug,
  type IndustrySlug,
} from "@/lib/industries/catalog";
import { getIndustryPageCopy } from "@/lib/i18n/industries-copy";
import { useQuote } from "@/components/QuoteProvider";

const ZALO = "https://zalo.me/0779937633";

export function IndustryPageContent({ slug }: { slug: IndustrySlug }) {
  const c = getIndustryPageCopy(slug);
  const meta = industryBySlug(slug);
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pricingHash = pricingHashForSlug(slug);
  const pricingHref = pricingHash
    ? `${assetPath("/chinh-sach-gia-dolphin-2026/")}${pricingHash}`
    : assetPath("/chinh-sach-gia-dolphin-2026/");

  return (
    <main>
      <Nav />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal variant="title">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--kuct-muted)]">
              <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-1.5 p-0">
                <li>
                  <Link href={assetPath("/")} className="hover:text-[var(--kuct-text)]">
                    Trang chủ
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={assetPath("/industries/")}
                    className="hover:text-[var(--kuct-text)]"
                  >
                    Ngành
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[var(--kuct-text)]">{meta.labelVi}</li>
              </ol>
            </nav>
            <p className="kuct-section-eyebrow mt-6">{c.label}</p>
            <h1 className="mx-auto mt-3 max-w-[20ch] font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem]">
              <AccentText>{c.h1}</AccentText>
            </h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {c.ctaTitle}
              </button>
              <a
                href={pricingHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--kuct-border)] px-5 py-2.5 text-sm font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
              >
                Xem bảng giá ngành
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--kuct-border)] py-14 sm:py-16" aria-labelledby="industry-answer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="industry-answer" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            <AccentText>{c.answerTitle}</AccentText>
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--kuct-text)]">
            {c.answerFirst}
          </p>
          <ul className="mt-5 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm font-medium">
            <li>
              <Link href={assetPath("/dolphin-care/")} className="text-[var(--kuct-accent)] hover:underline">
                Dolphin Care
              </Link>
            </li>
            <li>
              <Link href={assetPath("/dolphin-ops/")} className="text-[var(--kuct-accent)] hover:underline">
                Dolphin Ops
              </Link>
            </li>
            <li>
              <Link href={pricingHref} className="text-[var(--kuct-accent)] hover:underline">
                Bảng giá
              </Link>
            </li>
            <li>
              <Link href={assetPath("/case-studies/")} className="text-[var(--kuct-accent)] hover:underline">
                Case studies
              </Link>
            </li>
            <li>
              <Link href={assetPath("/faq/")} className="text-[var(--kuct-accent)] hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href={assetPath("/contact/")} className="text-[var(--kuct-accent)] hover:underline">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="kuct-section-wash py-14 sm:py-16" aria-labelledby="industry-problems">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="industry-problems" className="font-display text-2xl font-semibold sm:text-3xl">
            <AccentText>{c.problemsTitle}</AccentText>
          </h2>
          <p className="mt-3 max-w-[52ch] text-[var(--kuct-muted)]">{c.problemsLead}</p>
          <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3">
            {c.problems.map((item) => (
              <li
                key={item.title}
                className="rounded-[10px] bg-[var(--kuct-surface)] px-5 py-5"
              >
                <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="industry-solutions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="industry-solutions" className="font-display text-2xl font-semibold sm:text-3xl">
            <AccentText>{c.solutionsTitle}</AccentText>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { t: c.careTitle, b: c.careBody },
              { t: c.crmTitle, b: c.crmBody },
              { t: c.automationTitle, b: c.automationBody },
              { t: c.webTitle, b: c.webBody },
            ].map((block) => (
              <article
                key={block.t}
                className="rounded-[10px] bg-[var(--kuct-surface-muted)] px-5 py-5"
              >
                <h3 className="font-display text-base font-semibold">{block.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-text)]">
                  {block.b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kuct-section-wash py-14 sm:py-16" aria-labelledby="industry-workflow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="industry-workflow" className="font-display text-2xl font-semibold sm:text-3xl">
            <AccentText>{c.workflowTitle}</AccentText>
          </h2>
          <ol className="mt-8 list-none space-y-0 p-0">
            {c.workflow.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-t border-[var(--kuct-border)] py-4 first:border-t-0 first:pt-0">
                <span className="font-display text-sm font-semibold tabular-nums text-[var(--kuct-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-[var(--kuct-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="industry-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="industry-faq" className="font-display text-2xl font-semibold sm:text-3xl">
            <AccentText>{c.faqTitle}</AccentText>
          </h2>
          <div className="mt-8 space-y-2">
            {c.faq.map((item, index) => {
              const open = openFaq === index;
              const buttonId = `${faqId}-q-${index}`;
              const panelId = `${faqId}-a-${index}`;
              return (
                <div
                  key={item.q}
                  className="rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)]"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-[var(--kuct-text)]"
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      {item.q}
                      <span aria-hidden className="text-[var(--kuct-muted)]">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-4 pb-4 text-sm leading-relaxed text-[var(--kuct-muted)]"
                  >
                    <FaqAnswerText text={item.a} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="kuct-section-wash py-14 sm:py-16" aria-labelledby="industry-cta">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="industry-cta" className="font-display text-2xl font-semibold sm:text-3xl">
            <AccentText>{c.ctaTitle}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-[var(--kuct-muted)]">
            {c.ctaSupport}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={openQuote}
              className="kuct-btn-primary inline-flex rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {c.ctaTitle}
            </button>
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--kuct-border)] px-5 py-2.5 text-sm font-semibold no-underline"
            >
              Chat Zalo
            </a>
            <Link
              href={assetPath("/contact/")}
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--kuct-accent)] no-underline hover:underline"
            >
              Trang liên hệ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
