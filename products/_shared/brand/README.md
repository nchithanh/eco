# Shared brand (products)

Mirror of Dolphin Software visual tokens for apps under `products/`.

| File | Role |
| --- | --- |
| `tokens.css` | `--kuct-*` default (violet) — copy from `app/globals.css` `:root` |
| `brand.md` | Display name, motto, accent, do/don’t |

## Sync (agents)

When you change **tone / brand** at repo root (`app/globals.css` `:root` / `html[data-theme="violet"]`, `BRAND_DISPLAY_NAME` in `components/Logo.tsx`, or brand facts in `.cursor/knowledge/company.md`):

1. Update `tokens.css` and `brand.md` here.
2. Copy `tokens.css` → each product FE that vendors it (Ops: `saas/dolphin_ops/frontend/app/tokens.css`).
3. Do **not** copy marketing ICP, news, Care copy, or homepage section order into product `context/`.
