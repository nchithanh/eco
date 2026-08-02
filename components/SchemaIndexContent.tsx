"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { assetPath } from "@/lib/asset";
import {
  SCHEMA_AGENT_SLUGS,
  SCHEMA_HOMEPAGE_SLUGS,
  SCHEMA_SERVICE_SLUGS,
} from "@/lib/schema/catalog";

const sections: {
  href: string;
  title: string;
  body: string;
  children?: { href: string; label: string }[];
}[] = [
  {
    href: "/schema/company/",
    title: "Company",
    body: "Overview — knowledge pack, values, positioning, FAQ neo.",
  },
  {
    href: "/schema/homepage/",
    title: "Homepage",
    body: "Thứ tự section + JSON từng khối (VI SoT).",
    children: SCHEMA_HOMEPAGE_SLUGS.map((slug) => ({
      href: `/schema/homepage/${slug}/`,
      label: slug,
    })),
  },
  {
    href: "/schema/services/",
    title: "Services",
    body: "Index + JSON chi tiết từng dịch vụ.",
    children: SCHEMA_SERVICE_SLUGS.map((slug) => ({
      href: `/schema/services/${slug}/`,
      label: slug,
    })),
  },
  {
    href: "/schema/agents/",
    title: "Agents",
    body: "Index + JSON Dolphin Care, custom agent, AI transform.",
    children: SCHEMA_AGENT_SLUGS.map((slug) => ({
      href: `/schema/agents/${slug}/`,
      label: slug,
    })),
  },
];

export function SchemaIndexContent() {
  return (
    <section className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
          Schema
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
          <AccentText>Dolphin Software — schema JSON</AccentText>
        </h1>
        <p className="mt-4 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
          Chọn nhóm bên dưới để xem / tải JSON. Trang nội bộ (`noindex`).
        </p>

        <ul className="mt-10 list-none space-y-4 p-0">
          {sections.map((section) => (
            <li
              key={section.href}
              className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 sm:p-6"
            >
              <Link
                href={assetPath(section.href)}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kuct-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--kuct-bg)]"
              >
                <h2 className="font-display text-xl font-semibold text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)]">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {section.body}
                </p>
                <p className="mt-3 text-xs font-medium tracking-wide text-[var(--kuct-accent)]">
                  {section.href} →
                </p>
              </Link>

              {section.children && section.children.length > 0 ? (
                <ul className="mt-4 flex list-none flex-wrap gap-2 border-t border-[var(--kuct-border)] pt-4 p-0">
                  {section.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={assetPath(child.href)}
                        className="inline-flex rounded-full border border-[var(--kuct-border)] px-3 py-1.5 text-xs font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)] hover:text-[var(--kuct-text)]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
