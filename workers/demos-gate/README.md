# demos-gate (Cloudflare Worker)

Protects `/demos/*` on **dolphin-software.io.vn** so demo HTML is not public without a signed HttpOnly cookie. Password lives only in Worker secrets — not in the Next.js static bundle.

## Secrets

| Name | Purpose |
| --- | --- |
| `DEMOS_PASSWORD` | Vault password |
| `DEMOS_COOKIE_SECRET` | HMAC key for cookie (`dolphin_demos`) |

Dashboard → Workers → `demos-gate` → Settings → Variables and Secrets.

## Deploy

1. Create Worker `demos-gate`, paste `worker.js` (module Worker).
2. Add the two secrets.
3. **Workers Routes** (zone `dolphin-software.io.vn`, Proxied):
   - Route: `dolphin-software.io.vn/demos*`
   - Worker: `demos-gate`
4. Purge Cloudflare cache for `/demos*` after first deploy.

Optional: also assign a `*.workers.dev` URL for health checks (`GET /` → `demos-gate ok`).

## Behaviour

| Request | Result |
| --- | --- |
| `POST /demos/api/unlock` `{ password }` | Sets `dolphin_demos` HttpOnly cookie (`Path=/demos`, 12h) |
| `GET /demos/api/status` | `{ unlocked: boolean }` |
| `POST /demos/api/lock` | Clears cookie |
| `GET /demos/*` without cookie | `401` + unlock HTML (no origin HTML) |
| `GET /demos/*` with valid cookie | `fetch(request)` → GitHub Pages origin |

## Client

`components/demos/DemoGate.tsx` + `lib/demos/gate-api.ts` call the same-origin APIs with `credentials: "include"`. Localhost without the route still talks to Worker if `NEXT_PUBLIC_DEMOS_GATE_URL` is set; otherwise shows a soft message that the vault needs Cloudflare.

## Note

Direct hits to `*.github.io` (if still public) bypass this Worker — custom domain + Proxied DNS is required for protection.
