/**
 * Dolphin POS industry landings — separate from CRM `/industries/*`.
 * Pricing anchors: `/chinh-sach-gia-dolphin-2026/#pos-{pricingId}`
 */

export const POS_SLUGS = [
  "fnb",
  "cafe",
  "tra-sua",
  "pet",
  "fashion",
  "retail",
] as const;

export type PosSlug = (typeof POS_SLUGS)[number];

/** Tab id on pricing POS line (must exist in POS_INDUSTRIES). */
export type PosPricingId =
  | "fnb"
  | "cafe"
  | "tra-sua"
  | "pet"
  | "fashion"
  | "retail";

export type PosCatalogEntry = {
  slug: PosSlug;
  labelVi: string;
  pricingId: PosPricingId;
  priority: "p0" | "p1";
};

export const POS_CATALOG: readonly PosCatalogEntry[] = [
  { slug: "fnb", labelVi: "F&B", pricingId: "fnb", priority: "p0" },
  { slug: "cafe", labelVi: "Tiệm cafe", pricingId: "cafe", priority: "p0" },
  {
    slug: "tra-sua",
    labelVi: "Trà sữa",
    pricingId: "tra-sua",
    priority: "p0",
  },
  { slug: "pet", labelVi: "Pet shop", pricingId: "pet", priority: "p0" },
  {
    slug: "fashion",
    labelVi: "Fashion",
    pricingId: "fashion",
    priority: "p0",
  },
  {
    slug: "retail",
    labelVi: "Shop bán hàng",
    pricingId: "retail",
    priority: "p0",
  },
] as const;

export function isPosSlug(value: string): value is PosSlug {
  return (POS_SLUGS as readonly string[]).includes(value);
}

export function posBySlug(slug: PosSlug): PosCatalogEntry {
  return POS_CATALOG.find((item) => item.slug === slug)!;
}

export function pricingHashForPosSlug(slug: PosSlug): string {
  const entry = posBySlug(slug);
  return `#pos-${entry.pricingId}`;
}
