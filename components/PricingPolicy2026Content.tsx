"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import {
  CARE_STANDALONE,
  COMBO_PACKAGES,
  IMPORTANT_RULES,
  INTEGRATION_OUTSOURCE,
  ONETIME_WEB,
  PRICING_CTA,
  PRICING_POLICY_META,
  PRICING_PRINCIPLES,
  SAAS_MONTHLY,
  DOLPHIN_CARE_GLOSS,
  DOLPHIN_CARE_WITH_GLOSS,
  formatVnd,
  type ComboPackage,
} from "@/lib/pricing/dolphin-pricing-policy-2026";

function PrincipleIcon({ kind }: { kind: (typeof PRICING_PRINCIPLES)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (kind) {
    case "base":
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <path d="M6 20V10l6-4 6 4v10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "growth":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M7 15l4-5 3 3 5-7" />
          <path d="M15 6h4v4" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 13h4" />
        </svg>
      );
    case "pay":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 14h4" />
        </svg>
      );
    case "trial":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "third":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.5" />
          <circle cx="16" cy="8" r="2.5" />
          <circle cx="12" cy="16" r="2.5" />
          <path d="M10 9.2 11.2 14" />
          <path d="M14 9.2 12.8 14" />
        </svg>
      );
    default:
      return null;
  }
}

function ListBlock({
  title,
  note,
  headers,
  rows,
}: {
  title: string;
  note: string;
  headers: [string, string];
  rows: { label: string; value: string }[];
}) {
  return (
    <article className="pp26__list-card">
      <div className="pp26__list-card-head">
        <h3>{title}</h3>
        <p>{note}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="pp26__table">
          <thead>
            <tr>
              <th scope="col">{headers[0]}</th>
              <th scope="col">{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                <td className="pp26__num">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function ComboCard({ pkg }: { pkg: ComboPackage }) {
  return (
    <article
      className={`pp26__combo${pkg.highlight ? " pp26__combo--hot" : ""}`}
      aria-label={pkg.name}
    >
      {pkg.badge ? <span className="pp26__combo-badge">{pkg.badge}</span> : null}
      <p className="pp26__combo-no">Gói {pkg.no}</p>
      <h3 className="pp26__combo-name">{pkg.name}</h3>
      <p className="pp26__combo-meta">
        {pkg.components} · {pkg.term}
      </p>
      <p className="pp26__combo-price">
        <span className="pp26__combo-price-label">Thanh toán trước</span>
        {formatVnd(pkg.prepaid)}
      </p>
      <p className="pp26__combo-gift">
        <strong>Hỗ trợ web:</strong> {pkg.webSupport}
      </p>
    </article>
  );
}

export function PricingPolicy2026Content() {
  return (
    <div className="pp26 pp26--pad-sticky">
      <section
        className="relative isolate overflow-hidden py-16 sm:py-20"
        aria-labelledby="pricing-policy-heading"
      >
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-4xl">
            <p className="kuct-type-eyebrow">{PRICING_POLICY_META.eyebrow}</p>
            <h1
              id="pricing-policy-heading"
              className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--kuct-text)] sm:text-5xl lg:text-[3.25rem]"
            >
              <AccentText>{PRICING_POLICY_META.title}</AccentText>
            </h1>
            <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-[var(--kuct-muted)] sm:text-lg">
              {PRICING_POLICY_META.subtitle}
            </p>
            <div className="pp26__doc-meta">
              <span className="pp26__pill">Chính thức · 2026</span>
              <p className="pp26__updated">{PRICING_POLICY_META.updated}</p>
            </div>
            <p className="pp26__badge-line">{PRICING_POLICY_META.badge}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACTS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
              >
                {PRICING_CTA.zaloLabel}
              </a>
              <a
                href="#pricing-combos"
                className="kuct-btn-ghost inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
              >
                Xem 6 gói combo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="pricing-principles"
        aria-labelledby="pricing-principles-heading"
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">01 · Framework</p>
            <h2
              id="pricing-principles-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Nguyên tắc định giá
            </h2>
          </Reveal>
          <ul className="pp26__principle-grid mt-10">
            {PRICING_PRINCIPLES.map((item, index) => (
              <Reveal key={item.title} delay={index * 35} as="li" className="h-full">
                <div className="pp26__principle">
                  <div className="pp26__principle-top">
                    <span className="pp26__icon">
                      <PrincipleIcon kind={item.icon} />
                    </span>
                    <div>
                      <p className="pp26__principle-group">{item.group}</p>
                      <h3 className="pp26__principle-title">{item.title}</h3>
                    </div>
                  </div>
                  <p className="pp26__principle-body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="pricing-list"
        aria-labelledby="pricing-list-heading"
        className="scroll-mt-20 kuct-section-wash py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">02 · List price</p>
            <h2
              id="pricing-list-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Giá niêm yết gốc
            </h2>
          </Reveal>
          <div className="pp26__list-grid mt-10">
            <Reveal>
              <ListBlock
                title="Sản phẩm SaaS"
                note="Theo tháng · nhân với kỳ hạn gói"
                headers={["Sản phẩm", "Giá / tháng"]}
                rows={SAAS_MONTHLY.map((row) => ({
                  label: row.product,
                  value: formatVnd(row.price),
                }))}
              />
            </Reveal>
            <Reveal delay={40}>
              <ListBlock
                title="Website & Landing"
                note="One-time · áp dụng khi triển khai"
                headers={["Hạng mục", "Giá"]}
                rows={ONETIME_WEB.map((row) => ({
                  label: row.item,
                  value: formatVnd(row.price),
                }))}
              />
            </Reveal>
            <Reveal delay={80}>
              <ListBlock
                title="Tích hợp & Outsource"
                note="One-time · khoảng giá hoặc giá chốt"
                headers={["Hạng mục", "Giá"]}
                rows={INTEGRATION_OUTSOURCE.map((row) => ({
                  label: row.item,
                  value: row.price,
                }))}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="pricing-combos"
        aria-labelledby="pricing-combos-heading"
        className="scroll-mt-20 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">03 · Combo packages</p>
            <h2
              id="pricing-combos-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              6 gói Combo chính thức
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[var(--kuct-muted)]">
              Giá thanh toán trước theo kỳ hạn. Hỗ trợ Website/Landing áp dụng khi khách triển
              khai hạng mục tương ứng.{" "}
              <strong>Dolphin Care</strong> = {DOLPHIN_CARE_GLOSS}. Highlight: CRM + Care 12 và
              Full Growth 12.
            </p>
          </Reveal>
          <div className="pp26__combo-grid mt-10">
            {COMBO_PACKAGES.map((pkg, index) => (
              <Reveal key={pkg.no} delay={index * 30} className="h-full">
                <ComboCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing-care-standalone"
        aria-labelledby="pricing-care-standalone-heading"
        className="scroll-mt-20 kuct-section-wash py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">04 · Add Care</p>
            <h2
              id="pricing-care-standalone-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Gói thuê lẻ Dolphin Care
            </h2>
            <p className="mt-2 text-sm font-medium text-[var(--kuct-accent-2)]">
              {DOLPHIN_CARE_WITH_GLOSS}
            </p>
            <p className="mt-4 text-base leading-[1.7] text-[var(--kuct-muted)]">
              Dành cho khách đã có CRM — không tặng Website.
            </p>
          </Reveal>
          <div className="pp26__care-grid mt-10">
            {CARE_STANDALONE.map((row, index) => (
              <Reveal key={row.term} delay={index * 40}>
                <article
                  className={`pp26__care${row.recommended ? " pp26__care--best" : ""}`}
                >
                  <p className="pp26__care-term">{row.term}</p>
                  <p className="pp26__care-price">{formatVnd(row.price)}</p>
                  <p className="pp26__care-list">Giá gốc {formatVnd(row.list)}</p>
                  <div className="pp26__care-stats">
                    <span>
                      Giảm <strong>{row.discount}</strong>
                    </span>
                    <span>
                      TB / tháng <strong>{formatVnd(row.avgMonthly)}</strong>
                    </span>
                    {row.recommended ? (
                      <span>
                        <strong>Tiết kiệm hơn / tháng</strong>
                      </span>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing-rules"
        aria-labelledby="pricing-rules-heading"
        className="scroll-mt-20 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">05 · Rules</p>
            <h2
              id="pricing-rules-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Quy tắc quan trọng
            </h2>
          </Reveal>
          <ol className="pp26__rules mt-10">
            {IMPORTANT_RULES.map((rule, index) => (
              <Reveal key={rule} delay={index * 25} as="li">
                <div className="pp26__rule">
                  <span className="pp26__rule-n" aria-hidden>
                    {index + 1}
                  </span>
                  <p>{rule}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="pricing-contact"
        aria-labelledby="pricing-contact-heading"
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="pp26__cta">
              <p className="pp26__section-label">Bắt đầu</p>
              <h2
                id="pricing-contact-heading"
                className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {PRICING_CTA.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
                {PRICING_CTA.body}
              </p>
              <div className="pp26__cta-actions">
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
                <a href={`tel:${CONTACTS.phone}`} className="font-semibold text-[var(--kuct-accent)]">
                  {CONTACTS.phone}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pp26__sticky no-print">
        <a
          href={CONTACTS.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="kuct-btn-primary inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
        >
          {PRICING_CTA.stickyLabel}
        </a>
      </div>
    </div>
  );
}
