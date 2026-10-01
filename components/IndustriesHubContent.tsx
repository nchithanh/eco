"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { INDUSTRY_CATALOG } from "@/lib/industries/catalog";
import { getIndustriesHubCopy, getIndustryPageCopy } from "@/lib/i18n/industries-copy";

export function IndustriesHubContent() {
  const hub = getIndustriesHubCopy();

  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal variant="title">
            <p className="kuct-section-eyebrow">Industries</p>
            <h1 className="mt-3 max-w-[22ch] font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem]">
              <AccentText>{hub.h1}</AccentText>
            </h1>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {hub.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--kuct-border)] py-12 sm:py-14" aria-labelledby="industries-answer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="industries-answer" className="font-display text-xl font-semibold sm:text-2xl">
            <AccentText>{hub.answerTitle}</AccentText>
          </h2>
          <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-[var(--kuct-text)]">
            {hub.answerFirst}
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
              <Link
                href={assetPath("/chinh-sach-gia-dolphin-2026/")}
                className="text-[var(--kuct-accent)] hover:underline"
              >
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
            <li>
              <Link href={assetPath("/pos/")} className="text-[var(--kuct-accent)] hover:underline">
                POS · bán hàng
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" aria-labelledby="industries-list">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="industries-list" className="sr-only">
            Danh sách ngành
          </h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_CATALOG.map((item) => {
              const copy = getIndustryPageCopy(item.slug);
              return (
                <li key={item.slug}>
                  <Link
                    href={assetPath(`/industries/${item.slug}/`)}
                    className="flex h-full flex-col rounded-[10px] bg-[var(--kuct-surface-muted)] px-5 py-5 no-underline transition hover:bg-[color-mix(in_srgb,var(--kuct-surface-muted)_70%,var(--kuct-border))]"
                  >
                    <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                      {copy.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                      {copy.answerFirst.slice(0, 120)}…
                    </p>
                    <span className="mt-4 text-sm font-semibold text-[var(--kuct-accent)]">
                      Xem ngành →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
