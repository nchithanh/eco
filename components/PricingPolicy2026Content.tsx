"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import {
  CARE_STANDALONE,
  CARE_STANDALONE_NOTE,
  COMBO_PACKAGES,
  IMPORTANT_RULES,
  INTEGRATION_OUTSOURCE,
  ONETIME_WEB,
  PRICING_CTA,
  PRICING_POLICY_META,
  PRICING_PRINCIPLES,
  SAAS_MONTHLY,
  formatVnd,
} from "@/lib/pricing/dolphin-pricing-policy-2026";

function PriceTable({
  headers,
  children,
  minWidth = "28rem",
}: {
  headers: string[];
  children: ReactNode;
  minWidth?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[10px] kuct-surface-card">
      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse text-left text-sm"
          style={{ minWidth }}
        >
          <thead>
            <tr className="border-b border-[var(--kuct-border)] bg-[var(--kuct-panel-2)]">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-semibold text-[var(--kuct-text)] sm:px-5"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ cells }: { cells: ReactNode[] }) {
  return (
    <tr className="border-b border-[var(--kuct-border)]/60 last:border-0">
      {cells.map((cell, index) => (
        <td
          key={index}
          className="px-4 py-3 text-[var(--kuct-muted)] sm:px-5 [&:first-child]:font-medium [&:first-child]:text-[var(--kuct-text)]"
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

export function PricingPolicy2026Content() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden py-20 sm:py-24"
        aria-labelledby="pricing-policy-heading"
      >
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-4xl">
            <p className="kuct-type-eyebrow">{PRICING_POLICY_META.eyebrow}</p>
            <h1
              id="pricing-policy-heading"
              className="kuct-type-h1 mt-4 font-display text-4xl text-[var(--kuct-text)] sm:text-5xl"
            >
              <AccentText>{PRICING_POLICY_META.title}</AccentText>
            </h1>
            <p className="mt-3 text-sm text-[var(--kuct-muted)]">{PRICING_POLICY_META.updated}</p>
            <p className="kuct-type-body mt-5 max-w-[70ch]">{PRICING_POLICY_META.intro}</p>
          </Reveal>
        </div>
      </section>

      <section
        id="pricing-principles"
        aria-labelledby="pricing-principles-heading"
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <h2
              id="pricing-principles-heading"
              className="kuct-type-h2 font-display text-2xl sm:text-3xl"
            >
              1. Nguyên tắc định giá
            </h2>
          </Reveal>
          <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING_PRINCIPLES.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <li className="h-full rounded-[10px] kuct-surface-card p-5 sm:p-6">
                  <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.65] text-[var(--kuct-muted)]">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="pricing-list"
        aria-labelledby="pricing-list-heading"
        className="scroll-mt-20 kuct-section-wash py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <h2
              id="pricing-list-heading"
              className="kuct-type-h2 font-display text-2xl sm:text-3xl"
            >
              2. Giá niêm yết gốc
            </h2>
          </Reveal>

          <Reveal className="mt-10">
            <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              Sản phẩm SaaS (theo tháng)
            </h3>
            <div className="mt-4">
              <PriceTable headers={["Sản phẩm", "Giá / tháng"]}>
                {SAAS_MONTHLY.map((row) => (
                  <TableRow
                    key={row.product}
                    cells={[row.product, formatVnd(row.price)]}
                  />
                ))}
              </PriceTable>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={40}>
            <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              Website &amp; Landing (one-time)
            </h3>
            <div className="mt-4">
              <PriceTable headers={["Hạng mục", "Giá"]}>
                {ONETIME_WEB.map((row) => (
                  <TableRow key={row.item} cells={[row.item, formatVnd(row.price)]} />
                ))}
              </PriceTable>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={80}>
            <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              Dịch vụ Tích hợp &amp; Outsource (one-time)
            </h3>
            <div className="mt-4">
              <PriceTable headers={["Hạng mục", "Giá"]} minWidth="32rem">
                {INTEGRATION_OUTSOURCE.map((row) => (
                  <TableRow key={row.item} cells={[row.item, row.price]} />
                ))}
              </PriceTable>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="pricing-combos"
        aria-labelledby="pricing-combos-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <h2
              id="pricing-combos-heading"
              className="kuct-type-h2 font-display text-2xl sm:text-3xl"
            >
              3. 6 gói Combo chính thức
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[var(--kuct-muted)]">
              Giá thanh toán trước theo kỳ hạn gói. Hỗ trợ Website/Landing áp dụng khi khách
              triển khai hạng mục tương ứng.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <PriceTable
              headers={[
                "STT",
                "Tên gói",
                "Thành phần",
                "Thời hạn",
                "Giá trả trước",
                "Hỗ trợ Website/Landing",
              ]}
              minWidth="56rem"
            >
              {COMBO_PACKAGES.map((pkg) => (
                <TableRow
                  key={pkg.no}
                  cells={[
                    pkg.no,
                    <strong key="name">{pkg.name}</strong>,
                    pkg.components,
                    pkg.term,
                    <strong key="price">{formatVnd(pkg.prepaid)}</strong>,
                    pkg.webSupport,
                  ]}
                />
              ))}
            </PriceTable>
          </Reveal>
        </div>
      </section>

      <section
        id="pricing-care-standalone"
        aria-labelledby="pricing-care-standalone-heading"
        className="scroll-mt-20 kuct-section-wash py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <h2
              id="pricing-care-standalone-heading"
              className="kuct-type-h2 font-display text-2xl sm:text-3xl"
            >
              4. Gói thuê lẻ Dolphin Care
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[var(--kuct-muted)]">
              {CARE_STANDALONE_NOTE}
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <PriceTable
              headers={[
                "Thời hạn",
                "Giá gốc",
                "Giá ưu đãi",
                "Mức giảm",
                "Giá TB / tháng",
              ]}
              minWidth="40rem"
            >
              {CARE_STANDALONE.map((row) => (
                <TableRow
                  key={row.term}
                  cells={[
                    <strong key="term">{row.term}</strong>,
                    formatVnd(row.list),
                    <strong key="price">{formatVnd(row.price)}</strong>,
                    row.discount,
                    formatVnd(row.avgMonthly),
                  ]}
                />
              ))}
            </PriceTable>
          </Reveal>
        </div>
      </section>

      <section
        id="pricing-rules"
        aria-labelledby="pricing-rules-heading"
        className="scroll-mt-20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <h2
              id="pricing-rules-heading"
              className="kuct-type-h2 font-display text-2xl sm:text-3xl"
            >
              5. Quy tắc quan trọng
            </h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="rounded-[10px] kuct-surface-card p-6 sm:p-8">
              <ul className="list-disc space-y-3 pl-5 text-sm leading-[1.7] text-[var(--kuct-muted)] marker:text-[var(--kuct-accent)]">
                {IMPORTANT_RULES.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="pricing-contact"
        aria-labelledby="pricing-contact-heading"
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="mx-auto max-w-2xl text-center">
            <h2
              id="pricing-contact-heading"
              className="kuct-type-h2 font-display text-2xl sm:text-3xl"
            >
              {PRICING_CTA.title}
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[var(--kuct-muted)]">
              {PRICING_CTA.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACTS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
              >
                {PRICING_CTA.zaloLabel}
              </a>
              <Link
                href={assetPath("/#contact")}
                className="kuct-btn-ghost inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
              >
                {PRICING_CTA.contactLabel}
              </Link>
            </div>
            <p className="mt-4 text-sm text-[var(--kuct-muted)]">
              Hotline / Zalo:{" "}
              <a href={`tel:${CONTACTS.phone}`} className="text-[var(--kuct-accent)]">
                {CONTACTS.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
