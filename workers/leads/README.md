# dolphin-leads (Cloudflare Worker + D1 Free)

Stores site form submissions (quote drawer, careers apply, …). **No email required** — SoT is D1 rows.

## URLs

| | |
| --- | --- |
| Workers.dev | `https://dolphin-kick.nchithanh9999.workers.dev` |
| Health | `GET /api/health` |
| Create | `POST /api/leads` |
| List | `GET /api/leads` + `Authorization: Bearer <LEADS_ADMIN_TOKEN>` |

## Bindings / secrets

| Name | Type | Purpose |
| --- | --- | --- |
| `LEADS_DB` | D1 binding | Database (create DB `dolphin-leads` → bind as `LEADS_DB`) |
| `LEADS_ADMIN_TOKEN` | Secret | Required to list leads |

## Deploy (dashboard)

1. Create Worker named **`dolphin-kick`** (workers.dev subdomain same name).
2. Create D1 database **`dolphin-leads`** (or any name) → bind to Worker as **`LEADS_DB`**.
3. Paste `worker.js` → Deploy.
4. Secret `LEADS_ADMIN_TOKEN` (long random string).
5. Optional: run `schema.sql` in D1 console (Worker also `CREATE TABLE IF NOT EXISTS` on first write).

Or paste **`CF-AI-PROMPT.md`** into Cloudflare AI / dashboard assistant to scaffold.

## Client

`lib/leads-api.ts` → `QuoteEstimatorModal`, `CareersApplyForm`.  
Override: `NEXT_PUBLIC_LEADS_API_URL`.

## Test

```bash
curl -sS -X POST 'https://dolphin-kick.nchithanh9999.workers.dev/api/leads' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://dolphin-software.io.vn' \
  -d '{"source":"quote","name":"Test","contact":"zalo:090","note":"hi","locale":"vi","payload":{"estimate":"1–2M"},"honeypot":""}'

curl -sS 'https://dolphin-kick.nchithanh9999.workers.dev/api/leads?limit=10' \
  -H "Authorization: Bearer $LEADS_ADMIN_TOKEN"
```

## Body (`POST`)

```json
{
  "source": "quote | careers | contact",
  "name": "…",
  "contact": "email / Zalo / phone",
  "note": "optional",
  "locale": "vi",
  "payload": { "any": "extra fields" },
  "honeypot": ""
}
```

Spam: honeypot + **10** inserts / IP (rate key) / rolling hour → `429 rate_limited`.
