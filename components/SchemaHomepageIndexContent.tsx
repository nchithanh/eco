"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { assetPath } from "@/lib/asset";
import { SCHEMA_HOMEPAGE_SLUGS } from "@/lib/schema/catalog";

const labels: Record<(typeof SCHEMA_HOMEPAGE_SLUGS)[number], string> = {
 hero: "Hero",
 stats: "Outcomes (#stats)",
 why: "Why Dolphin",
 capabilities: "How we help",
 works: "Projects",
 "dolphin-care": "Dolphin Care",
 "dolphin-ops": "Dolphin Ops",
 technology: "Technology",
 "ai-edge": "Dolphin Intelligence / AiEdge",
 stack: "Tech stack (#stack)",
 process: "Process",
 fit: "Fit",
 "popular-services": "Solutions",
 faq: "FAQ",
 contact: "Contact CTA",
};

export function SchemaHomepageIndexContent() {
 return (
 <section className="scroll-mt-20 py-16 sm:py-20">
 <div className="mx-auto max-w-7xl px-6">
 <nav className="mb-4 flex flex-wrap gap-2 text-xs text-[var(--kuct-muted)]">
 <Link href={assetPath("/schema/")} className="hover:text-[var(--kuct-accent)]">
 schema
 </Link>
 <span aria-hidden>/</span>
 <span className="text-[var(--kuct-text)]">homepage</span>
 </nav>

 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 Schema · Homepage
 </p>
 <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
 <AccentText>Homepage sections</AccentText>
 </h1>
 <p className="mt-4 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 Thứ tự story hiện tại. Click section để xem JSON. Overview đầy đủ:{" "}
 <a
 href={assetPath("/schema/homepage/overview.json")}
 className="font-medium text-[var(--kuct-accent)] underline-offset-2 hover:underline"
 >
 /schema/homepage/overview.json
 </a>
 .
 </p>

 <ol className="mt-10 list-none space-y-2 p-0">
 {SCHEMA_HOMEPAGE_SLUGS.map((slug, i) => (
 <li key={slug}>
 <Link
 href={assetPath(`/schema/homepage/${slug}/`)}
 className="flex items-center gap-3 rounded-lg bg-[var(--kuct-panel)] px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:"
 >
 <span className="w-7 shrink-0 text-xs font-semibold tabular-nums text-[var(--kuct-muted)]">
 {String(i + 1).padStart(2, "0")}
 </span>
 <span className="min-w-0 flex-1">
 <span className="block font-medium text-[var(--kuct-text)]">
 {labels[slug]}
 </span>
 <span className="mt-0.5 block text-xs text-[var(--kuct-muted)]">
 /schema/homepage/{slug}/
 </span>
 </span>
 <span className="text-[var(--kuct-accent)]" aria-hidden>
 →
 </span>
 </Link>
 </li>
 ))}
 </ol>
 </div>
 </section>
 );
}
