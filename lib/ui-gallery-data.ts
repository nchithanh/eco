export const UI_GALLERY_IMAGE_BASE =
  "https://pub-0a31f9a8b1e7482c97358b9371b0c390.r2.dev/uploads/kho-giao-dien-website";

export type UiGalleryFilter =
  | "landing"
  | "business"
  | "webapp"
  | "ecommerce"
  | "corporate"
  | "portfolio"
  | "startup";

export type UiGalleryItemData = {
  id: string;
  num: number;
  categories: UiGalleryFilter[];
  featured?: boolean;
};

export const UI_GALLERY_FILTERS: readonly ("all" | UiGalleryFilter)[] = [
  "all",
  "landing",
  "business",
  "webapp",
  "ecommerce",
  "corporate",
  "portfolio",
  "startup",
] as const;

export const UI_GALLERY_ITEMS: UiGalleryItemData[] = [
  { id: "01", num: 1, categories: ["landing"], featured: true },
  { id: "02", num: 2, categories: ["landing", "startup"] },
  { id: "03", num: 3, categories: ["business"] },
  { id: "04", num: 4, categories: ["business", "corporate"], featured: true },
  { id: "05", num: 5, categories: ["startup"] },
  { id: "06", num: 6, categories: ["landing"] },
  { id: "07", num: 7, categories: ["portfolio"] },
  { id: "08", num: 8, categories: ["portfolio", "startup"] },
  { id: "09", num: 9, categories: ["corporate"] },
  { id: "10", num: 10, categories: ["corporate", "business"] },
  { id: "11", num: 11, categories: ["ecommerce"] },
  { id: "12", num: 12, categories: ["ecommerce"], featured: true },
  { id: "13", num: 13, categories: ["ecommerce", "business"] },
  { id: "14", num: 14, categories: ["webapp"] },
  { id: "15", num: 15, categories: ["webapp", "startup"] },
  { id: "16", num: 16, categories: ["webapp"] },
  { id: "17", num: 17, categories: ["business", "corporate"] },
  { id: "18", num: 18, categories: ["portfolio"] },
  { id: "19", num: 19, categories: ["corporate", "landing"] },
  { id: "20", num: 20, categories: ["ecommerce", "startup"] },
];

export function uiGalleryImageUrl(num: number): string {
  return `${UI_GALLERY_IMAGE_BASE}/ximitech_${num}.png`;
}
