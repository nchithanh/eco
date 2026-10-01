"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { getPosHubCopy, getPosPageCopy } from "@/lib/i18n/pos-copy";
import { POS_CATALOG } from "@/lib/pos/catalog";

export function PosHubContent() {
  const hub = getPosHubCopy();
  const pricingHref = `${assetPath("/chinh-sach-gia-dolphin-2026/")}#pos`;

  return (
    <main>
      <Nav />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal variant="title">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--kuct-muted)]">
              <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0">
                <li>
                  <Link href={assetPath("/")} className="hover:text-[var(--kuct-text)]">
                    Trang chủ
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[var(--kuct-text)]">POS</li>
              </ol>
            </nav>
            <p className="kuct-section-eyebrow mt-6">Dolphin POS</p>
            <h1 className="mt-3 max-w-[22ch] font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.5rem]">
              <AccentText>{hub.h1}</AccentText>
            </h1>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[var(--kuct-muted)]">
              {hub.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={pricingHref}
                className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
              >
                Xem bảng giá POS
              </a>
              <Link
                href={assetPath("/industries/")}
                className="inline-flex items-center justify-center rounded-full border border-[var(--kuct-border)] px-5 py-2.5 text-sm font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
              >
                CRM theo ngành →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-[var(--kuct-border)] py-12 sm:py-14"
        aria-labelledby="pos-hub-answer"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2
            id="pos-hub-answer"
            className="font-display text-xl font-semibold sm:text-2xl"
          >
            <AccentText>{hub.answerTitle}</AccentText>
          </h2>
          <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-[var(--kuct-text)]">
            {hub.answerFirst}
          </p>
          <ul className="mt-5 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm font-medium">
            <li>
              <Link
                href={pricingHref}
                className="text-[var(--kuct-accent)] hover:underline"
              >
                Bảng giá POS
              </Link>
            </li>
            <li>
              <Link
                href={assetPath("/industries/")}
                className="text-[var(--kuct-accent)] hover:underline"
              >
                CRM · ngành dịch vụ
              </Link>
            </li>
            <li>
              <Link
                href={assetPath("/faq/")}
                className="text-[var(--kuct-accent)] hover:underline"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href={assetPath("/contact/")}
                className="text-[var(--kuct-accent)] hover:underline"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" aria-labelledby="pos-hub-list">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="pos-hub-list" className="sr-only">
            Danh sách ngành POS
          </h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {POS_CATALOG.map((item) => {
              const copy = getPosPageCopy(item.slug);
              return (
                <li key={item.slug}>
                  <Link
                    href={assetPath(`/pos/${item.slug}/`)}
                    className="flex h-full flex-col rounded-[10px] bg-[var(--kuct-surface-muted)] px-5 py-5 no-underline transition hover:bg-[color-mix(in_srgb,var(--kuct-surface-muted)_70%,var(--kuct-border))]"
                  >
                    <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                      {copy.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                      {copy.answerFirst.slice(0, 120)}…
                    </p>
                    <span className="mt-4 text-sm font-semibold text-[var(--kuct-accent)]">
                      Xem POS ngành →
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
