/**
 * Write public/sitemap.xml from lib/sitemap.ts registries.
 * Usage: npx tsx scripts/generate-sitemap.ts
 */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getSitemapEntries, renderSitemapXml } from "../lib/sitemap";

const out = join(process.cwd(), "public", "sitemap.xml");
const entries = getSitemapEntries();
writeFileSync(out, `${renderSitemapXml(entries)}\n`, "utf8");
console.log(`Wrote ${entries.length} URLs → ${out}`);
