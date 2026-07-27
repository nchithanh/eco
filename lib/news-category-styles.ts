import type { NewsCategory } from "@/lib/news-details";

/** Soft tinted chips — distinct per category, readable on light glass surfaces. */
export const newsCategoryChipClass: Record<NewsCategory, string> = {
  process: "bg-sky-100 text-sky-800",
  product: "bg-emerald-100 text-emerald-900",
  tech: "bg-amber-100 text-amber-900",
  studio: "bg-rose-100 text-rose-800",
  cases: "bg-slate-200/80 text-slate-800",
};

export function newsCategoryChipClasses(category: NewsCategory): string {
  return `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ${newsCategoryChipClass[category]}`;
}
