"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PosAppStage } from "@/components/PosAppStage";
import { PosFeatureBento } from "@/components/PosFeatureBento";
import { PosProblemIcon, PosWorkflowIcon } from "@/components/PosSceneArt";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { getPosPageCopy } from "@/lib/i18n/pos-copy";
import {
  posBySlug,
  pricingHashForPosSlug,
  type PosSlug,
} from "@/lib/pos/catalog";

const ZALO = "https://zalo.me/0779937633";

export function PosPageContent({ slug }: { slug: PosSlug }) {
  const c = getPosPageCopy(slug);
  const meta = posBySlug(slug);
  const { openQuote } = useQuote();
  const faqId = useId();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pricingHref = `${assetPath("/chinh-sach-gia-dolphin-2026/")}${pricingHashForPosSlug(slug)}`;

  const bentoCards = [
    { title: c.posTitle, body: c.posBody, art: "counter" as const },
    { title: c.inventoryTitle, body: c.inventoryBody, art: "inventory" as const },
    { title: c.channelsTitle, body: c.channelsBody, art: "channels" as const },
    { title: c.plansTitle, body: c.plansBody, art: "plans" as const },
  ];

  return (
    <main className="bg-[var(--kuct-bg)]">
      <Nav />

      {/* Hero — centered, white, no frame */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
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
                    href={assetPath("/pos/")}
                    className="hover:text-[var(--kuct-text)]"
                  >
                    POS
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[var(--kuct-text)]">{meta.labelVi}</li>
              </ol>
            </nav>
            <p className="kuct-section-eyebrow mt-6">Dolphin POS · {c.label}</p>
            <h1 className="mx-auto mt-4 max-w-[16ch] font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-[var(--kuct-text)] sm:text-[2.5rem] lg:text-[2.75rem]">
              <AccentText>{c.h1}</AccentText>
            </h1>
            <p className="mx-auto mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.answerFirst}
            </p>
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
                className="kuct-btn-outline inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
              >
                Xem bảng giá
              </a>
            </div>
            <ul className="mt-5 flex list-none flex-wrap items-center justify-center gap-x-4 gap-y-2 p-0 text-sm font-medium">
              <li>
                <Link
                  href={assetPath("/pos/")}
                  className="text-[var(--kuct-muted)] no-underline hover:text-[var(--kuct-text)]"
                >
                  Tất cả POS
                </Link>
              </li>
              <li>
                <Link
                  href={assetPath("/industries/")}
                  className="text-[var(--kuct-muted)] no-underline hover:text-[var(--kuct-text)]"
                >
                  CRM · dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href={assetPath("/faq/")}
                  className="text-[var(--kuct-muted)] no-underline hover:text-[var(--kuct-text)]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Product stage */}
      <section className="pb-10 sm:pb-14" aria-label="Minh họa Dolphin POS">
        <PosAppStage slug={slug} demo={c} />
      </section>

      {/* Feature bento */}
      <PosFeatureBento
        eyebrow={c.featuresEyebrow}
        title={c.featuresTitle}
        support={c.featuresSupport}
        cards={bentoCards}
      />

      {/* Problems — clean icon rows */}
      <section
        className="border-t border-[var(--kuct-border)] py-16 sm:py-20"
        aria-labelledby="pos-problems"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-xl">
            <h2
              id="pos-problems"
              className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
            >
              <AccentText>{c.problemsTitle}</AccentText>
            </h2>
            <p className="mt-3 text-[var(--kuct-muted)]">{c.problemsLead}</p>
          </div>
          <ul className="mt-12 grid list-none grid-cols-1 gap-x-16 gap-y-10 p-0 sm:grid-cols-3">
            {c.problems.map((item, index) => (
              <li key={item.title}>
                <span className="inline-flex text-[var(--kuct-muted)]">
                  <PosProblemIcon index={index} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-[var(--kuct-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[32ch] text-sm leading-[1.7] text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workflow */}
      <section
        className="border-t border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)] py-16 sm:py-20"
        aria-labelledby="pos-workflow"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="pos-workflow"
            className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.workflowTitle}</AccentText>
          </h2>
          <ol className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-3">
            {c.workflow.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[10px] border border-[var(--kuct-border)] bg-white px-5 py-5"
              >
                <span className="inline-flex text-[var(--kuct-muted)]">
                  <PosWorkflowIcon index={index} />
                </span>
                <p className="mt-4 m-0 text-xs font-semibold tabular-nums tracking-[0.12em] text-[var(--kuct-muted)] uppercase">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Feature bullets (from demo.features) — compact strip */}
      <section
        className="border-t border-[var(--kuct-border)] py-16 sm:py-20"
        aria-labelledby="pos-answer"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="pos-answer"
            className="max-w-[22ch] font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.answerTitle}</AccentText>
          </h2>
          <ul className="mt-10 grid list-none gap-3 p-0 sm:grid-cols-3">
            {c.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-[10px] border border-[var(--kuct-border)] bg-white px-5 py-5"
              >
                <h3 className="m-0 text-sm font-semibold text-[var(--kuct-text)]">
                  {feature.title}
                </h3>
                <p className="mt-2 m-0 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--kuct-border)] py-16 sm:py-20" aria-labelledby="pos-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="pos-faq"
            className="text-center font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.faqTitle}</AccentText>
          </h2>
          <div className="mt-10 divide-y divide-[var(--kuct-border)] overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-white">
            {c.faq.map((item, index) => {
              const open = openFaq === index;
              const buttonId = `${faqId}-q-${index}`;
              const panelId = `${faqId}-a-${index}`;
              return (
                <div key={item.q}>
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)]"
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
                    className="px-5 pb-4 text-sm leading-relaxed text-[var(--kuct-muted)]"
                  >
                    <FaqAnswerText text={item.a} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t border-[var(--kuct-border)] py-16 sm:py-20"
        aria-labelledby="pos-cta"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            id="pos-cta"
            className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.ctaTitle}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-[var(--kuct-muted)]">
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
              className="kuct-btn-outline inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
            >
              Chat Zalo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
