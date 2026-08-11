# demos-gate (Cloudflare Worker)

Protects `/demos/*` on **dolphin-software.io.vn**. Worker **only checks password** (`DEMOS_PASSWORD`). Deploy revision / “still logged in?” is handled by the Next.js client via `COOKIE_CONSENT_REVISION` in `sessionStorage` (bumped on every commit/push).

## URLs

| | |
| --- | --- |
| Workers.dev | `https://dolphin-demos.nchithanh9999.workers.dev` |
| Custom domain route | `dolphin-software.io.vn/demos*` |

Client (`lib/demos/gate-api.ts`): localhost → workers.dev `/api/*`; production → same-origin `/demos/api/*`.

## Secrets

| Name | Purpose |
| --- | --- |
| `DEMOS_PASSWORD` | Vault password |

`DEMOS_COOKIE_SECRET` is **no longer required** (HMAC removed). You may delete it from the dashboard.

## Client session (revision)

After unlock OK, client stores `COOKIE_CONSENT_REVISION` under `dolphin-demos-unlocked-rev`. Next visit: same revision → stay open; after push/bump → login again.

## Deploy Worker

1. Paste `worker.js`; workers.dev host **`dolphin-demos`**.
2. Secret `DEMOS_PASSWORD` only.
3. Route `dolphin-software.io.vn/demos*` → this Worker.
4. Purge `/demos*` cache.

Edge cookie after unlock: simple `dolphin_demos=1` (HttpOnly). Cross-site local: `SameSite=None; Secure`.

## Behaviour

| Request | Result |
| --- | --- |
| `POST /api/unlock` (pass OK) | `{ ok: true }` + Set-Cookie |
| `GET /api/status` | `{ unlocked }` from edge cookie presence |
| `GET /demos/*` no cookie | `401` unlock HTML |
| `GET /demos/*` + cookie | proxy origin |
