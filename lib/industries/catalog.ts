/**
 * GEO industry landings — URL slugs + pricing policy anchors.
 * SoT map: docs/GEO-IA.md
 */

export const INDUSTRY_SLUGS = [
  "spa",
  "salon",
  "nail",
  "clinic",
  "education",
  "dance-center",
  "shop",
  "transport",
  "sales",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

/** Pricing tab id on /chinh-sach-gia-dolphin-2026/ (null = no dedicated tab). */
export type PricingIndustryId =
  | "spa"
  | "salon"
  | "clinic"
  | "shop"
  | "edu"
  | "transport"
  | "sales"
  | null;

export type IndustryCatalogEntry = {
  slug: IndustrySlug;
  /** Footer / hub label (VI display; copy file may override) */
  labelVi: string;
  pricingId: PricingIndustryId;
  /** Minimum GEO set from brief */
  priority: "p0" | "p1";
};

export const INDUSTRY_CATALOG: readonly IndustryCatalogEntry[] = [
  { slug: "spa", labelVi: "Spa", pricingId: "spa", priority: "p0" },
  { slug: "salon", labelVi: "Salon", pricingId: "salon", priority: "p0" },
  { slug: "nail", labelVi: "Nail", pricingId: "salon", priority: "p0" },
  { slug: "clinic", labelVi: "Clinic", pricingId: "clinic", priority: "p0" },
  {
    slug: "education",
    labelVi: "Trung tâm giáo dục",
    pricingId: "edu",
    priority: "p0",
  },
  {
    slug: "dance-center",
    labelVi: "Trung tâm nhảy / dance",
    pricingId: "edu",
    priority: "p0",
  },
  { slug: "shop", labelVi: "Shop dịch vụ", pricingId: "shop", priority: "p1" },
  {
    slug: "transport",
    labelVi: "Vận tải",
    pricingId: "transport",
    priority: "p1",
  },
  {
    slug: "sales",
    labelVi: "Sales pipeline",
    pricingId: "sales",
    priority: "p1",
  },
] as const;

export function isIndustrySlug(value: string): value is IndustrySlug {
  return (INDUSTRY_SLUGS as readonly string[]).includes(value);
}

export function industryBySlug(slug: IndustrySlug): IndustryCatalogEntry {
  return INDUSTRY_CATALOG.find((item) => item.slug === slug)!;
}

/** Map pricing IndustryId → GEO landing slug for footer CRM column. */
export function geoSlugForPricingId(
  pricingId: string,
): IndustrySlug | null {
  const hit = INDUSTRY_CATALOG.find((item) => item.pricingId === pricingId);
  return hit?.slug ?? null;
}

export function pricingHashForSlug(slug: IndustrySlug): string | null {
  const id = industryBySlug(slug).pricingId;
  return id ? `#industry-${id}` : null;
}
