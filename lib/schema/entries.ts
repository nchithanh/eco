/**
 * Flat list of marketing schema JSON for Admin browse / export.
 * SoT remains `public/schema/` via `catalog.ts`.
 */

import {
  SCHEMA_AGENT_SLUGS,
  SCHEMA_HOMEPAGE_SLUGS,
  SCHEMA_SERVICE_SLUGS,
  schemaAgentsBySlug,
  schemaAgentsIndex,
  schemaCompany,
  schemaCompanyProfile,
  schemaHomepageBySlug,
  schemaHomepageIndex,
  schemaServicesBySlug,
  schemaServicesIndex,
} from "@/lib/schema/catalog";

export type SchemaBrowseGroup =
  | "company"
  | "company-profile"
  | "homepage"
  | "services"
  | "agents";

export type SchemaBrowseEntry = {
  id: string;
  group: SchemaBrowseGroup;
  label: string;
  rawPath: string;
  data: object;
};

function rawFromMeta(data: object, fallback: string): string {
  const meta = (data as { meta?: { rawPath?: string } }).meta;
  return typeof meta?.rawPath === "string" && meta.rawPath
    ? meta.rawPath
    : fallback;
}

/** Ordered catalog for view-only Admin Schema tab. */
export function listSchemaBrowseEntries(): SchemaBrowseEntry[] {
  const entries: SchemaBrowseEntry[] = [
    {
      id: "company",
      group: "company",
      label: "company",
      rawPath: rawFromMeta(schemaCompany, "/schema/company.json"),
      data: schemaCompany,
    },
    {
      id: "company-profile",
      group: "company-profile",
      label: "company-profile",
      rawPath: rawFromMeta(
        schemaCompanyProfile,
        "/schema/company-profile.json",
      ),
      data: schemaCompanyProfile,
    },
    {
      id: "homepage-index",
      group: "homepage",
      label: "homepage/index",
      rawPath: rawFromMeta(schemaHomepageIndex, "/schema/homepage/index.json"),
      data: schemaHomepageIndex,
    },
  ];

  for (const slug of SCHEMA_HOMEPAGE_SLUGS) {
    const data = schemaHomepageBySlug[slug];
    entries.push({
      id: `homepage-${slug}`,
      group: "homepage",
      label: `homepage/${slug}`,
      rawPath: rawFromMeta(data, `/schema/homepage/${slug}.json`),
      data,
    });
  }

  entries.push({
    id: "services-index",
    group: "services",
    label: "services/index",
    rawPath: rawFromMeta(schemaServicesIndex, "/schema/services/index.json"),
    data: schemaServicesIndex,
  });

  for (const slug of SCHEMA_SERVICE_SLUGS) {
    const data = schemaServicesBySlug[slug];
    entries.push({
      id: `services-${slug}`,
      group: "services",
      label: `services/${slug}`,
      rawPath: rawFromMeta(data, `/schema/services/${slug}.json`),
      data,
    });
  }

  entries.push({
    id: "agents-index",
    group: "agents",
    label: "agents/index",
    rawPath: rawFromMeta(schemaAgentsIndex, "/schema/agents/index.json"),
    data: schemaAgentsIndex,
  });

  for (const slug of SCHEMA_AGENT_SLUGS) {
    const data = schemaAgentsBySlug[slug];
    entries.push({
      id: `agents-${slug}`,
      group: "agents",
      label: `agents/${slug}`,
      rawPath: rawFromMeta(data, `/schema/agents/${slug}.json`),
      data,
    });
  }

  return entries;
}

/** Single JSON blob for bulk download (anti–AI-tone review). */
export function buildSchemaExportBundle(
  entries: SchemaBrowseEntry[] = listSchemaBrowseEntries(),
): Record<string, object> {
  const out: Record<string, object> = {};
  for (const entry of entries) {
    out[entry.rawPath] = entry.data;
  }
  return out;
}
