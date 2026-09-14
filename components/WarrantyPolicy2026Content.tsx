"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import { PRICING_POLICY_PATH } from "@/lib/pricing/dolphin-pricing-policy-2026";
import {
  WARRANTY_COMMITMENTS,
  WARRANTY_COVERED,
  WARRANTY_CTA,
  WARRANTY_MAINTENANCE,
  WARRANTY_MAINTENANCE_NOTES,
  WARRANTY_OUT,
  WARRANTY_POLICY_META,
  WARRANTY_PRIORITIES,
  WARRANTY_SCOPE_ROWS,
  WARRANTY_SLA_HOURS,
} from "@/lib/pricing/dolphin-warranty-policy-2026";

export function WarrantyPolicy2026Content() {
  return (
    <div className="pp26 pp26--pad-sticky">
      <section
        className="relative isolate overflow-hidden py-16 sm:py-20"
        aria-labelledby="warranty-policy-heading"
      >
        <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-4xl">
            <p className="kuct-type-eyebrow">{WARRANTY_POLICY_META.eyebrow}</p>
            <h1
              id="warranty-policy-heading"
              className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--kuct-text)] sm:text-5xl lg:text-[3.25rem]"
            >
              <AccentText>{WARRANTY_POLICY_META.title}</AccentText>
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-[1.7] text-[var(--kuct-muted)] sm:text-lg">
              {WARRANTY_POLICY_META.subtitle}
            </p>
            <div className="pp26__doc-meta">
              <span className="pp26__pill">Bảo hành · Hậu mãi · 2026</span>
              <p className="pp26__updated">{WARRANTY_POLICY_META.updated}</p>
            </div>
            <p className="pp26__badge-line">{WARRANTY_POLICY_META.badge}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACTS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
              >
                {WARRANTY_CTA.zaloLabel}
              </a>
              <Link
                href={assetPath(PRICING_POLICY_PATH)}
                className="kuct-btn-ghost inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
              >
                {WARRANTY_CTA.pricingLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="warranty-scope"
        aria-labelledby="warranty-scope-heading"
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">01 · Phạm vi</p>
            <h2
              id="warranty-scope-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Phạm vi bảo hành theo loại sản phẩm
            </h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="pp26__list-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="pp26__table" style={{ minWidth: "44rem" }}>
                  <thead>
                    <tr>
                      <th scope="col">Hạng mục</th>
                      <th scope="col">Thời gian</th>
                      <th scope="col">Hình thức</th>
                      <th scope="col">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WARRANTY_SCOPE_ROWS.map((row) => (
                      <tr key={row.item}>
                        <td>{row.item}</td>
                        <td className="pp26__num">{row.duration}</td>
                        <td>{row.form}</td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="warranty-covered"
        aria-labelledby="warranty-covered-heading"
        className="scroll-mt-20 kuct-section-wash py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="pp26__section-label">02 · Covered</p>
              <h2
                id="warranty-covered-heading"
                className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Trong thời gian bảo hành
              </h2>
              <ul className="pp26__rules mt-8">
                {WARRANTY_COVERED.map((item, index) => (
                  <li key={item}>
                    <div className="pp26__rule">
                      <span className="pp26__rule-n" aria-hidden>
                        {index + 1}
                      </span>
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={40}>
              <p className="pp26__section-label">03 · Out of warranty</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Ngoài bảo hành
              </h2>
              <p className="mt-3 text-sm text-[var(--kuct-muted)]">
                Các hạng mục dưới đây báo giá riêng.
              </p>
              <ul className="pp26__rules mt-8">
                {WARRANTY_OUT.map((item, index) => (
                  <li key={item}>
                    <div className="pp26__rule">
                      <span className="pp26__rule-n" aria-hidden>
                        {index + 1}
                      </span>
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="warranty-maintenance"
        aria-labelledby="warranty-maintenance-heading"
        className="scroll-mt-20 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">04 · Sau bảo hành</p>
            <h2
              id="warranty-maintenance-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Gói hỗ trợ dài hạn
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[var(--kuct-muted)]">
              Đăng ký tối thiểu 3 tháng — đưa vào chính sách chung của Dolphin Software.
            </p>
          </Reveal>
          <div className="pp26__care-grid mt-10">
            {WARRANTY_MAINTENANCE.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * 40}>
                <article className={`pp26__care${index === 1 ? " pp26__care--best" : ""}`}>
                  <p className="pp26__care-term">{pkg.name}</p>
                  <p className="pp26__care-price" style={{ fontSize: "1.35rem" }}>
                    {pkg.price}
                    <span className="pp26__combo-price-label" style={{ marginTop: "0.35rem" }}>
                      / tháng
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-[1.65] text-[var(--kuct-muted)]">{pkg.scope}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-[1.65] text-[var(--kuct-muted)] marker:text-[var(--kuct-accent)]">
              {WARRANTY_MAINTENANCE_NOTES.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="warranty-sla"
        aria-labelledby="warranty-sla-heading"
        className="scroll-mt-20 kuct-section-wash py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">05 · SLA</p>
            <h2
              id="warranty-sla-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Thời gian phản hồi &amp; mức ưu tiên
            </h2>
          </Reveal>
          <Reveal className="mt-8">
            <div className="pp26__list-card p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                Giờ hỗ trợ
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-[1.65] text-[var(--kuct-muted)] marker:text-[var(--kuct-accent)]">
                {WARRANTY_SLA_HOURS.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="pp26__combo-grid mt-8">
            {WARRANTY_PRIORITIES.map((row, index) => (
              <Reveal key={row.level} delay={index * 30}>
                <article className={`pp26__combo${row.level === "P1" ? " pp26__combo--hot" : ""}`}>
                  <p className="pp26__combo-no">{row.level}</p>
                  <h3 className="pp26__combo-name">{row.title}</h3>
                  <p className="pp26__combo-meta">{row.definition}</p>
                  <p className="pp26__combo-gift">
                    <strong>Cam kết:</strong> {row.commit}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="warranty-commitments"
        aria-labelledby="warranty-commitments-heading"
        className="scroll-mt-20 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="title" className="max-w-3xl">
            <p className="pp26__section-label">06 · Cam kết</p>
            <h2
              id="warranty-commitments-heading"
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Cam kết chung
            </h2>
          </Reveal>
          <ol className="pp26__rules mt-10">
            {WARRANTY_COMMITMENTS.map((item, index) => (
              <Reveal key={item} delay={index * 25} as="li">
                <div className="pp26__rule">
                  <span className="pp26__rule-n" aria-hidden>
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="warranty-contact"
        aria-labelledby="warranty-contact-heading"
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="pp26__cta">
              <p className="pp26__section-label">Liên hệ hỗ trợ</p>
              <h2
                id="warranty-contact-heading"
                className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {WARRANTY_CTA.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
                {WARRANTY_CTA.body}
              </p>
              <p className="mx-auto mt-3 max-w-[52ch] text-sm text-[var(--kuct-muted)]">
                Khi báo sự cố: ghi rõ môi trường, bước tái hiện, ảnh/video nếu có — để phân loại
                P1/P2/P3 nhanh hơn.
              </p>
              <div className="pp26__cta-actions">
                <a
                  href={CONTACTS.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuct-btn-primary inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
                >
                  {WARRANTY_CTA.zaloLabel}
                </a>
                <Link
                  href={assetPath(PRICING_POLICY_PATH)}
                  className="kuct-btn-ghost inline-flex items-center rounded-[10px] px-5 py-3.5 text-sm font-semibold"
                >
                  {WARRANTY_CTA.pricingLabel}
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
          {WARRANTY_CTA.stickyLabel}
        </a>
      </div>
    </div>
  );
}
