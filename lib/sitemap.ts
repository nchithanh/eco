/**
 * Indexable public URLs for sitemap.xml — registries only, no demos/schema/redirects.
 * SoT: docs/GEO-IA.md §9 · Phase 10
 */

import { INDUSTRY_SLUGS } from "@/lib/industries/catalog";
import { SERVICE_SLUGS } from "@/lib/i18n/service-details";
import { MORE_SLUGS } from "@/lib/more-details";
import { NEWS_SLUGS } from "@/lib/news-details";
import { POS_SLUGS } from "@/lib/pos/catalog";
import { TECH_SLUGS } from "@/lib/tech-stack";
import { WORK_SLUGS } from "@/lib/works-details";
import { SITE_URL } from "@/lib/seo";

export type SitemapEntry = {
  path: string;
  /** ISO date YYYY-MM-DD */
  lastmod: string;
};

const TODAY = "2026-10-02";

/** Core marketing / GEO pages (hubs first). */
const CORE: SitemapEntry[] = [
  { path: "/", lastmod: TODAY },
  { path: "/about/", lastmod: "2026-07-31" },
  { path: "/contact/", lastmod: TODAY },
  { path: "/faq/", lastmod: TODAY },
  { path: "/case-studies/", lastmod: TODAY },
  { path: "/industries/", lastmod: TODAY },
  ...INDUSTRY_SLUGS.map((slug) => ({
    path: `/industries/${slug}/`,
    lastmod: TODAY,
  })),
  { path: "/pos/", lastmod: TODAY },
  ...POS_SLUGS.map((slug) => ({
    path: `/pos/${slug}/`,
    lastmod: TODAY,
  })),
  // company-profile / card-visit: noindex — omit from sitemap
  { path: "/privacy/", lastmod: "2026-08-27" },
  { path: "/chinh-sach-gia-dolphin-2026/", lastmod: TODAY },
  { path: "/chinh-sach-bao-hanh-ho-tro-2026/", lastmod: "2026-09-14" },
  { path: "/careers/", lastmod: "2026-07-31" },
  { path: "/news/", lastmod: TODAY },
  ...NEWS_SLUGS.map((slug) => ({
    path: `/news/${slug}/`,
    lastmod:
      slug === "truoc-khi-mo-cua-hang-dung-voi-chon-phan-mem-ban-hang" ||
      slug === "quan-ly-ton-kho-pet-shop" ||
      slug === "giam-that-thoat-nguyen-lieu-quan-cafe" ||
      slug === "tai-sao-can-dung-phan-mem-pos" ||
      slug === "co-duoc-nhac-toi-tren-chatgpt-gemini"
        ? TODAY
        : "2026-09-29",
  })),
  { path: "/dolphin-care/", lastmod: TODAY },
  { path: "/dolphin-ops/", lastmod: TODAY },
  { path: "/dolphin-intelligence/", lastmod: "2026-08-12" },
  { path: "/ai-transform/", lastmod: "2026-07-31" },
  // landing is a dedicated route; dynamic SERVICE_SLUGS excludes it
  { path: "/services/landing/", lastmod: "2026-08-06" },
  ...SERVICE_SLUGS.filter((slug) => slug !== "agents").map((slug) => ({
    path: `/services/${slug}/`,
    lastmod: "2026-07-31",
  })),
  ...WORK_SLUGS.map((slug) => ({
    path: `/works/${slug}/`,
    lastmod: TODAY,
  })),
  ...TECH_SLUGS.map((slug) => ({
    path: `/tech/${slug}/`,
    lastmod: "2026-07-31",
  })),
  ...MORE_SLUGS.map((slug) => ({
    path: `/more/${slug}/`,
    lastmod: "2026-07-31",
  })),
];

/** Dedupe by path (first wins). */
export function getSitemapEntries(): SitemapEntry[] {
  const seen = new Set<string>();
  const out: SitemapEntry[] = [];
  for (const entry of CORE) {
    if (seen.has(entry.path)) continue;
    seen.add(entry.path);
    out.push(entry);
  }
  return out;
}

export function renderSitemapXml(entries: SitemapEntry[] = getSitemapEntries()): string {
  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${SITE_URL}${entry.path === "/" ? "/" : entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
