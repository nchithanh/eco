"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Footer } from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { assetPath, themeAsset } from "@/lib/asset";
import { getCaseStudiesHubCopy } from "@/lib/i18n/case-studies-copy";
import { useTheme } from "@/lib/theme";

export function CaseStudiesHubContent() {
  const hub = getCaseStudiesHubCopy();
  const { theme } = useTheme();

  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal variant="title">
            <p className="kuct-section-eyebrow">Case studies</p>
            <h1 className="mt-3 max-w-[22ch] font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem]">
              <AccentText>{hub.h1}</AccentText>
            </h1>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {hub.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-[var(--kuct-border)] py-12 sm:py-14"
        aria-labelledby="case-studies-answer"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="case-studies-answer"
            className="font-display text-xl font-semibold sm:text-2xl"
          >
            <AccentText>{hub.answerTitle}</AccentText>
          </h2>
          <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-[var(--kuct-text)]">
            {hub.answerFirst}
          </p>
        </div>
      </section>

      <section
        className="pb-12 sm:pb-16"
        aria-labelledby="case-studies-list"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="case-studies-list"
            className="font-display text-lg font-semibold sm:text-xl"
          >
            <AccentText>{hub.listTitle}</AccentText>
          </h2>
          <ul className="mt-6 m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {hub.cards.map((card) => (
              <li key={card.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)]">
                  <Link
                    href={assetPath(card.href)}
                    className="flex h-full flex-col no-underline"
                  >
                    <div className="relative aspect-[16/10] bg-[var(--kuct-surface-muted)]">
                      <LazyImage
                        src={themeAsset(card.image, theme)}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-4">
                      <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--kuct-muted)]">
                        {card.tag}
                      </p>
                      <h3 className="mt-1.5 font-display text-base font-semibold text-[var(--kuct-text)]">
                        {card.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {card.summary.length > 140
                          ? `${card.summary.slice(0, 140)}…`
                          : card.summary}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-[var(--kuct-accent)]">
                        {hub.cardCta}
                      </span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="kuct-section-wash py-12 sm:py-14"
        aria-labelledby="case-studies-note"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="case-studies-note"
            className="font-display text-lg font-semibold sm:text-xl"
          >
            <AccentText>{hub.noteTitle}</AccentText>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
            {hub.noteBody}
          </p>
          <ul className="mt-6 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm font-medium">
            <li>
              <Link href={assetPath("/contact/")} className="text-[var(--kuct-accent)] hover:underline">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link href={assetPath("/industries/")} className="text-[var(--kuct-accent)] hover:underline">
                Ngành
              </Link>
            </li>
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
              <Link
                href={assetPath("/chinh-sach-gia-dolphin-2026/")}
                className="text-[var(--kuct-accent)] hover:underline"
              >
                Bảng giá
              </Link>
            </li>
            <li>
              <Link href={assetPath("/faq/")} className="text-[var(--kuct-accent)] hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
