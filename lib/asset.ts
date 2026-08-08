import type { ThemeId } from "@/lib/theme";

/** Prefix for static public assets when hosted under GitHub Pages basePath. */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/**
 * App route for Next.js `<Link>` — omit BASE_PATH; Next.js applies basePath in production.
 * Use `assetPath` for plain `<a href>` and static assets (`img`, `public/`).
 */
export function routePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && normalized.startsWith(`${BASE_PATH}/`)) {
    return normalized.slice(BASE_PATH.length) || "/";
  }
  return normalized;
}

/** Resolve a root-absolute public path (e.g. `/logo.svg`) for current basePath. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

/** Logical public paths that have a slate-themed override under `/themes/slate/`. */
export const SLATE_THEME_ASSETS: ReadonlySet<string> = new Set([
  "/capabilities/design.jpg",
  "/capabilities/mobile.jpg",
  "/capabilities/integrations.jpg",
  "/capabilities/web.jpg",
  "/capabilities/agents.jpg",
  "/capabilities/software.jpg",
  "/services/design/hero.jpg",
  "/services/mobile/hero.jpg",
  "/services/integrations/hero.jpg",
  "/services/web/hero.jpg",
  "/services/landing/hero.jpg",
  "/services/agents/hero.jpg",
  "/services/custom-agent/hero.jpg",
  "/services/software/hero.jpg",
  "/works/beauty.jpg",
  "/works/badminton.jpg",
  "/works/tickets.jpg",
  "/works/billiard.jpg",
  "/service-stock.jpg",
  "/service-architecture.jpg",
  "/contact-visual.jpg",
  "/ops-lifecycle.jpg",
]);

const THEME_ASSET_OVERRIDES: Partial<Record<ThemeId, ReadonlySet<string>>> = {
  slate: SLATE_THEME_ASSETS,
};

/**
 * Resolve a themed public image path.
 * Falls back to the default (violet) asset when the theme has no override.
 */
export function themeAsset(path: string, theme: ThemeId): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const overrides = THEME_ASSET_OVERRIDES[theme];
  if (overrides?.has(normalized)) {
    return assetPath(`/themes/${theme}${normalized}`);
  }
  return assetPath(normalized);
}
