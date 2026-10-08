"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PosAppStage } from "@/components/PosAppStage";
import {
  PosDayStrip,
  PosDescGrid,
} from "@/components/PosDescBlocks";
import { PosFeatureBento } from "@/components/PosFeatureBento";
import { PosProblemIcon } from "@/components/PosSceneArt";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { getPosPageCopy } from "@/lib/i18n/pos-copy";
import {
  POS_DAY_STEPS,
  POS_DEMO_URL,
  POS_LIMIT_CARDS,
  POS_WHO_CARDS,
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
  const faqItems = c.faq.slice(0, 6);

  const bentoCards = [
    { title: "Bán hàng", body: c.posBody, art: "counter" as const },
    { title: "Kho", body: c.inventoryBody, art: "inventory" as const },
    { title: "Tài chính & ca", body: c.channelsBody, art: "channels" as const },
    { title: "Gói theo năm", body: c.plansBody, art: "plans" as const },
  ];

  return (
    <main className="bg-[var(--kuct-bg)]">
      <Nav />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal variant="title">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-[var(--kuct-muted)]"
            >
              <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-1.5 p-0">
                <li>
                  <Link
                    href={assetPath("/")}
                    className="hover:text-[var(--kuct-text)]"
                  >
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
            <p className="kuct-section-eyebrow mt-6">
              Dolphin POS · {c.label}
            </p>
            <h1 className="mx-auto mt-4 max-w-[14ch] font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-[var(--kuct-text)] sm:text-[2.5rem] lg:text-[2.75rem]">
              <AccentText>{c.h1}</AccentText>
            </h1>
            <p className="mx-auto mt-5 max-w-[40ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {c.answerFirst}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={POS_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
              >
                Mở demo POS
              </a>
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-outline inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {c.ctaTitle}
              </button>
              <a
                href={pricingHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--kuct-border)] px-5 py-2.5 text-sm font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
              >
                Bảng giá
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-10 sm:pb-14" aria-label="Minh họa Dolphin POS">
        <PosAppStage slug={slug} demo={c} />
      </section>

      <PosDayStrip
        id="pos-day"
        title="Một ca trên Dolphin POS"
        steps={POS_DAY_STEPS}
      />

      <PosFeatureBento
        eyebrow={c.featuresEyebrow}
        title={c.featuresTitle}
        support="Mở demo để xem quầy, kho và quỹ — không cần đọc dài."
        cards={bentoCards}
      />

      <PosDescGrid
        id="pos-who"
        title="Ai dùng hàng ngày"
        cards={POS_WHO_CARDS}
        muted
      />

      <section
        className="border-t border-[var(--kuct-border)] bg-white py-14 sm:py-16"
        aria-labelledby="pos-problems"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="pos-problems"
            className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.problemsTitle}</AccentText>
          </h2>
          <p className="mt-2 max-w-[40ch] text-sm text-[var(--kuct-muted)]">
            {c.problemsLead}
          </p>
          <ul className="mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
            {c.problems.map((item, index) => (
              <li
                key={item.title}
                className="rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)] px-4 py-4"
              >
                <span className="inline-flex text-[var(--kuct-muted)]">
                  <PosProblemIcon index={index} />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-[var(--kuct-text)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 m-0 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PosDescGrid
        id="pos-limits"
        title="Nói rõ giới hạn"
        lead="Demo trung thực — biết trước khi tư vấn gói năm."
        cards={POS_LIMIT_CARDS}
        muted
      />

      <section
        className="border-t border-[var(--kuct-border)] bg-white py-14 sm:py-16"
        aria-labelledby="pos-faq"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="pos-faq"
            className="text-center font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.faqTitle}</AccentText>
          </h2>
          <div className="mt-8 divide-y divide-[var(--kuct-border)] overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)]">
            {faqItems.map((item, index) => {
              const open = openFaq === index;
              const buttonId = `${faqId}-q-${index}`;
              const panelId = `${faqId}-a-${index}`;
              return (
                <div key={item.q} className="bg-white">
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
          <p className="mt-4 text-center text-sm text-[var(--kuct-muted)]">
            Câu hỏi khác:{" "}
            <Link
              href={assetPath("/faq/")}
              className="font-semibold text-[var(--kuct-accent)]"
            >
              FAQ chung
            </Link>
          </p>
        </div>
      </section>

      <section
        className="border-t border-[var(--kuct-border)] py-14 sm:py-16"
        aria-labelledby="pos-cta"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            id="pos-cta"
            className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
          >
            <AccentText>{c.ctaTitle}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-[36ch] text-sm text-[var(--kuct-muted)]">
            {c.ctaSupport}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={POS_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kuct-btn-primary inline-flex rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
            >
              Mở demo POS
            </a>
            <button
              type="button"
              onClick={openQuote}
              className="kuct-btn-outline inline-flex rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {c.ctaTitle}
            </button>
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--kuct-border)] px-5 py-2.5 text-sm font-semibold no-underline transition hover:bg-[var(--kuct-surface-muted)]"
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
