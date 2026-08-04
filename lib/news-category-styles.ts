import type { NewsCategory } from "@/lib/news-details";

/** Light-canvas chips — stronger fill + darker text per category. */
export const newsCategoryChipClass: Record<NewsCategory, string> = {
  process:
    "border border-sky-300 bg-sky-100 text-sky-900",
  product:
    "border border-emerald-300 bg-emerald-100 text-emerald-900",
  tech:
    "border border-amber-300 bg-amber-100 text-amber-950",
  studio:
    "border border-[rgb(var(--kuct-accent-rgb)/0.45)] bg-[rgb(var(--kuct-accent-rgb)/0.14)] text-[var(--kuct-accent)]",
  cases:
    "border border-black/15 bg-black/[0.06] text-[var(--kuct-text)]",
};

export function newsCategoryChipClasses(category: NewsCategory): string {
  return `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${newsCategoryChipClass[category]}`;
}
