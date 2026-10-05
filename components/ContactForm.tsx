"use client";

import Link from "next/link";
import { AccentText, BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function ContactForm({
  variant = "section",
}: {
  /** `page` = standalone `/contact/` (h1); `section` = homepage embed (h2) */
  variant?: "section" | "page";
}) {
  const { t } = useLocale();
  const c = t.contact;
  const isPage = variant === "page";
  const HeadingTag = isPage ? "h1" : "h2";

  return (
    <section
      id="contact"
      aria-labelledby={isPage ? "contact-page-heading" : "home-contact-heading"}
      className={
        isPage
          ? "scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
          : "kuct-cv-auto scroll-mt-20 py-24"
      }
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="title">
            <p className="kuct-type-eyebrow">{c.eyebrow}</p>
            <HeadingTag
              id={isPage ? "contact-page-heading" : "home-contact-heading"}
              className="mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
            >
              <AccentText>{c.title}</AccentText>
            </HeadingTag>
            <p className="mt-5 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              <BrandText size="sm">{c.support}</BrandText>
            </p>
            {c.afterSubmitTitle && c.afterSubmitItems?.length ? (
              <div className="mt-6 max-w-[42ch]">
                <p className="text-sm font-semibold text-[var(--kuct-text)]">
                  {c.afterSubmitTitle}
                </p>
                <ul className="mt-3 list-none space-y-2 p-0">
                  {c.afterSubmitItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--kuct-muted)]"
                    >
                      <span
                        className="shrink-0 text-[var(--kuct-accent)]"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href={CONTACTS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="kuct-btn-primary inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold"
              >
                {c.ctaZalo}
              </a>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="kuct-btn-ghost inline-flex items-center self-center "
              >
                {c.ctaEmail}
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--kuct-muted)]">
              {c.nextHint}
            </p>
            <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-[var(--kuct-muted)]">
              <span className="font-medium text-[var(--kuct-text)]">
                {c.addressLabel}
              </span>
              <br />
              <a
                href={CONTACTS.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block transition hover:text-[var(--kuct-accent)]"
              >
                {CONTACTS.address.label}
              </a>
            </p>
            {isPage ? (
              <ul className="mt-6 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm font-medium">
                <li>
                  <Link href={assetPath("/industries/")} className="text-[var(--kuct-accent)] hover:underline">
                    Ngành
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
                  <Link
                    href={assetPath("/chinh-sach-gia-dolphin-2026/")}
                    className="text-[var(--kuct-accent)] hover:underline"
                  >
                    Bảng giá
                  </Link>
                </li>
                <li>
                  <Link href={assetPath("/dolphin-care/")} className="text-[var(--kuct-accent)] hover:underline">
                    Care
                  </Link>
                </li>
                <li>
                  <Link href={assetPath("/dolphin-ops/")} className="text-[var(--kuct-accent)] hover:underline">
                    Ops
                  </Link>
                </li>
              </ul>
            ) : null}
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="overflow-hidden rounded-[10px] bg-[var(--kuct-panel)] shadow-[0_0.35rem_1.25rem_rgb(26_22_37/0.06)]">
              <iframe
                title={c.mapTitle}
                src={CONTACTS.maps.embedSrc}
                className="block aspect-[4/3] w-full border-0 lg:aspect-[5/4] lg:min-h-[22rem]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
