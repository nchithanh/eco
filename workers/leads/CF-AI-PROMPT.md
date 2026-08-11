# Prompt — paste vào Cloudflare AI / Workers assistant

Copy everything below the line into Cloudflare AI (Workers / dashboard) to create the lead-inbox Worker for Dolphin Software.

---

Create a Cloudflare Worker named **`dolphin-kick`** for the marketing site **dolphin-software.io.vn** (account workers.dev host: **`dolphin-kick.nchithanh9999.workers.dev`**).

## Goal

Store contact / lead form submissions in **D1** (not send email). Free plan is enough.

## Setup steps you must do / instruct

1. Create Worker `dolphin-leads`.
2. Create D1 database named `dolphin-leads` and bind it to the Worker as **`LEADS_DB`**.
3. Add secret **`LEADS_ADMIN_TOKEN`** (random long string) for admin list.
4. Deploy the Worker code below (or generate equivalent).

## CORS allowlist

- `https://dolphin-software.io.vn`
- `https://www.dolphin-software.io.vn`
- `http://localhost:3000`
- `http://localhost:3002`

## Routes

| Method | Path | Behaviour |
| --- | --- | --- |
| `OPTIONS` | `*` | CORS preflight |
| `GET` | `/api/health` | `{ ok: true, service: "dolphin-leads", hasDb }` |
| `POST` | `/api/leads` | Validate + insert lead; return `{ ok: true, id, createdAt }` |
| `GET` | `/api/leads` | List leads; require `Authorization: Bearer <LEADS_ADMIN_TOKEN>` |

Also accept `/leads` and `/health` as aliases.

## POST body

```json
{
  "source": "quote" | "careers" | "contact",
  "name": "string required max 120",
  "contact": "string required max 200",
  "note": "optional max 4000",
  "locale": "optional",
  "payload": "optional object or JSON string (max ~8KB)",
  "honeypot": "must be empty — if non-empty return fake success 200 {ok:true} without saving"
}
```

Also treat `company_url` as honeypot alias.

## Validation & abuse

- Reject unknown `source`, missing name/contact, oversized fields.
- Rate limit: max **10** inserts per client IP (`CF-Connecting-IP`, stored as `ip:…` rate key) per rolling hour (query D1). Never skip when IP missing — fallback anon key.
- On first use: `CREATE TABLE IF NOT EXISTS leads (...)` + index on `created_at DESC`.
- Columns: `id` (uuid), `created_at` (ISO), `source`, `name`, `contact`, `note`, `locale`, `payload` (TEXT JSON), `ip`, `user_agent`.

## GET list

- Without secret configured → 403 `admin_disabled`.
- Wrong/missing Bearer → 401.
- Query: `?limit=1..100` (default 50), optional `?source=quote`.
- Response: `{ ok: true, leads: [{ id, createdAt, source, name, contact, note, locale, payload }] }` (parse payload JSON when possible). **Do not** return `ip` / `user_agent` in list JSON.

## Implementation notes

- Single-file Worker module (`export default { fetch }`).
- No SMTP / Resend / MailChannels.
- No paid Workers features required.
- Keep responses JSON + CORS headers on every response including errors.

Generate the full `worker.js` ready to paste into Quick Edit, plus a short checklist for D1 binding and the admin secret.
