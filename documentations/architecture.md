# Architecture

## Stack

| Layer | Detail |
| --- | --- |
| Next.js | 16.x (App Router) — read `node_modules/next/dist/docs/` before new APIs |
| React | 19.x |
| Tailwind | v4 (`app/globals.css`) |
| Forms | react-hook-form + zod |
| Tests | Vitest + Testing Library (`tests/`) |
| Themes | `lib/theme.tsx` — violet default; UI switcher exposes violet + slate |

## SEO (static export)

- `public/robots.txt` → allows `/`, points to sitemap
- `public/sitemap.xml` → static URL list (regenerate when adding routes)
- `public/og-default.png` → default Open Graph / Twitter image (1200×630)
- Per-page metadata via `lib/seo.ts` `buildPageMetadata` + `generateMetadata` / `export const metadata`
- Root layout: **no** site-wide canonical `/` (each page sets its own)
- JSON-LD: Organization + WebSite in `app/layout.tsx`; Service + FAQPage on Dolphin Care / AI Transform
- Legacy `/custom-agent/` and `/services/custom-agent/` permanently redirect (noindex) → `/ai-transform/`

After deploy: submit `https://dolphin-software.io.vn/sitemap.xml` in Google Search Console.

## Static export

`next.config.ts` enables `output: "export"` + `trailingSlash` when `GITHUB_PAGES=true`. Custom domain serves at `/` (no `basePath`). Images are `unoptimized` — prefer compressed **WebP** under `public/` for mascots/brand. Prefer `assetPath()` for public URLs.

GitHub Pages serves via Fastly with short `Cache-Control: max-age=600` and **no custom headers** — hashed `/_next/static/*` cannot get immutable TTL from origin alone.

## CDN — Cloudflare (optional, recommended)

Put **Cloudflare Free** in front of Pages for edge cache, Brotli/HTTP3, and longer TTL on static assets. Domain stays `dolphin-software.io.vn`; origin remains GitHub Pages.

### DNS (Cloudflare, Proxied / orange cloud)

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | Proxied |
| A | `@` | `185.199.109.153` | Proxied |
| A | `@` | `185.199.110.153` | Proxied |
| A | `@` | `185.199.111.153` | Proxied |
| CNAME | `www` | `nchithanh.github.io` | Proxied |

At Mat Bao: set nameservers to the two Cloudflare NS (replace `ns1/ns2.matbao.vn`). Wait until zone is **Active**.

### SSL / performance

- SSL/TLS mode: **Full** (not Flexible); Always Use HTTPS
- Enable Brotli, HTTP/3 when available
- Next.js: `experimental.inlineCss: true` — CSS inlined into HTML to cut PageSpeed **Render-blocking requests** (stylesheet chunks)

### Cache Rules (examples)

1. URI Path starts with `/_next/static` → Eligible for cache, long Edge TTL (e.g. 1 month)
2. Images (`/mascot`, `/brand`, `/capabilities`, `*.png|jpg|webp|ico`) → long Edge TTL
3. HTML / other → shorter Edge TTL (15–60 min) so deploys show up without waiting forever

After a large deploy: Caching → **Purge Everything** (or purge `/` + critical URLs).

### Verify

```bash
curl -sI https://dolphin-software.io.vn/ | rg -i 'cf-ray|cf-cache|server|age'
```

Expect `cf-ray` and later `cf-cache-status: HIT` on static paths. Keep GitHub Pages custom domain + Enforce HTTPS unchanged.

## AI chat — Cloudflare Worker (Free)

Static Pages cannot keep a Groq API key. Chat calls a **Workers Free** proxy:

| | |
| --- | --- |
| Worker | `dolphin-chat` |
| URL | `https://dolphin-chat.nchithanh9999.workers.dev` |
| Source | `workers/dolphin-chat/` — `system-context.js` (prompt SoT), `worker.js`, `paste-for-dashboard.js` (Quick Edit) |
| Secret | `GROQ_API_KEY` (dashboard **Secret** only; never `NEXT_PUBLIC_*`) |
| Client | `lib/chat-api.ts` → `AiChatWidget` right drawer (welcome + thread); banner **Ask AI** via `AiChatProvider`; fallback `matchAiChatReply` |

Optional env: `NEXT_PUBLIC_CHAT_API_URL` (Worker URL). No paid Workers plan required for chat volume on Free.

## Top folders

| Path | Role |
| --- | --- |
| `app/` | Routes & root layout |
| `components/` | UI sections & shared chrome |
| `lib/` | i18n, estimators, `pricing-fx` (locale package prices), content data, theme, assets |
| `workers/` | Cloudflare Worker sources (e.g. `dolphin-chat` Groq proxy) |
| `public/` | Static assets (mascot, brand, about, tech, themes) |
| `tests/` | Vitest suites |
| `documentations/` | Canonical project docs (this tree) |
| `.cursor/rules/` | Always-on agent rules |

## Motion / mobile

Under `max-width: 1023px`, CSS kill-switch disables decorative animations (see `app/globals.css`). Tailwind `hover` custom variant only applies on fine pointer + `lg+`.

**Scroll note:** Decorative `body::before` noise must stay at `z-index ≤ 0` (and is off on mobile). Never place full-viewport fixed layers above page content without `pointer-events: none` *and* low z-index — high z + `mix-blend-mode` can break touch scrolling. Modal/chat overlays use `lib/scroll-lock.ts`. **Do not** scroll-lock the splash `AgentLoader` — the overlay already covers the viewport; locking caused stuck `touch-action` / `overflow` on mobile.
