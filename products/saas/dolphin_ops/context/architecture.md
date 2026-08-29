# Architecture

Two folders, two deployables. Marketing Next.js at repo root is **not** this app.

```
dolphin_ops/
  frontend/   Next.js App Router — UI (repo `nchithanh/dolphinOps`)
  backend/    Go CRM API (repo `nchithanh/dolphinOpsBackend`) — Worker gateway + Container; Postgres
```

Backend is **CRM only**. No Agent runtime, tools, or intent on this service.

```
Client → Worker (src/worker.ts) → Container (Go :8080) → PostgreSQL
```

- Worker: route `container.fetch` only — no SQL.
- Container: chi, controller → service → repository. `pgxpool` TCP — **no Hyperdrive, no D1**.
- Postgres: one database, tenant column `organization_id` on every business table. Table `organization` uses `id` (not a self-FK).
- Catalog (mounted): `organization`, `menu_group`, `menu_item` (`code`), `organization_menu` (`label_display_vi` / `label_display_en`), `"user"`, `"action"`, `user_action`. PK for group/item/action: `(organization_id, id)`.
- Merchant: resource under an organization (`merchants.organization_id`) — **not mounted**. Customers / bookings / staff have `organization_id` only (no `merchant_id`) — **not mounted**.

## Host

Planned: **`https://dolphin-ops.dolphin-software.io.vn`**

- Frontend: Cloudflare (OpenNext or Pages-for-Workers) — **TODO** bind hostname
- Backend: Worker + Container on that host — **TODO** DNS / CORS wiring

Local: frontend `:3010`, Go `go run ./cmd/api` `:8080`. CORS allow `http://localhost:3010`. `wrangler dev` only to emulate the gateway. OpenAPI: `GET /api/openapi.yaml`, UI `/swagger/`.

## Data

Migrations: `backend/internal/database/migrations/` (catalog menu live; `merchants` / `customers` / `bookings` / `staff` not created yet). External Postgres (e.g. Neon) in production; Docker Compose locally.

Seed demo: `sen-spa` (Sen Spa, user `user_lan`) and `mama-dancer` (mamaDancer, user `user_minh`). Same sidebar `id`/`code`; display vi/en differs by industry. No booking/customer/inbox/task/staff/room seed on the API.

## Auth

**TODO**. JWT must carry `organization_id`. Do not read tenant from the request body. Do not ship a fake “logged in as admin”.

Demo (catalog only): required header `X-Organization-Id`, optional `X-User-Id`. CORS allows `http://localhost:3010` and those headers.
