import type { NewsCategory } from "@/lib/news-details";

/** Dark-surface chips — muted fill + accent-readable text per category. */
export const newsCategoryChipClass: Record<NewsCategory, string> = {
  process:
    "border border-sky-400/25 bg-sky-500/10 text-sky-200",
  product:
    "border border-emerald-400/25 bg-emerald-500/10 text-emerald-200",
  tech:
    "border border-amber-400/25 bg-amber-500/10 text-amber-200",
  studio:
    "border border-[rgba(var(--kuct-accent-rgb),0.35)] bg-[rgba(var(--kuct-accent-rgb),0.12)] text-[var(--kuct-accent)]",
  cases:
    "border border-white/15 bg-white/5 text-[var(--kuct-muted)]",
};

export function newsCategoryChipClasses(category: NewsCategory): string {
  return `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${newsCategoryChipClass[category]}`;
}
