/**
 * Cloudflare Worker — Dolphin leads inbox (Free + D1).
 *
 * POST /api/leads  — store form submissions (quote, careers, …)
 * GET  /api/leads  — list recent (Authorization: Bearer LEADS_ADMIN_TOKEN)
 * GET  /api/health — ok
 *
 * Bindings (dashboard):
 *   D1  LEADS_DB
 * Secrets:
 *   LEADS_ADMIN_TOKEN (optional but required for GET list)
 *
 * workers.dev: https://dolphin-kick.nchithanh9999.workers.dev
 */
const ALLOW_ORIGINS = [
  "https://dolphin-software.io.vn",
  "https://www.dolphin-software.io.vn",
  "http://localhost:3000",
  "http://localhost:3002",
];

const SOURCES = new Set(["quote", "careers", "contact"]);
const MAX_NAME = 120;
const MAX_CONTACT = 200;
const MAX_NOTE = 4000;
const MAX_PAYLOAD_JSON = 8000;
/** Max successful POSTs per IP (or fallback key) in a rolling hour. */
const RATE_LIMIT_PER_HOUR = 10;

function corsHeaders(origin) {
  const allow = ALLOW_ORIGINS.includes(origin) ? origin : ALLOW_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(origin),
    },
  });
}

function clientIp(request) {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("True-Client-IP") ||
    request.headers.get("X-Real-IP") ||
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
    ""
  );
}

/** Stable key for rate limit — never empty (empty IP would skip the check). */
function rateKey(request) {
  const ip = clientIp(request);
  if (ip) return `ip:${ip}`;
  const ua = (request.headers.get("User-Agent") || "").slice(0, 80);
  const al = (request.headers.get("Accept-Language") || "").slice(0, 40);
  return `anon:${ua}|${al}` || "anon:unknown";
}

function trimStr(v, max) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function newId() {
  return crypto.randomUUID();
}

async function ensureSchema(db) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS leads (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        source TEXT NOT NULL,
        name TEXT NOT NULL,
        contact TEXT NOT NULL,
        note TEXT,
        locale TEXT,
        payload TEXT,
        ip TEXT,
        user_agent TEXT
      )`,
    )
    .run();
  await db
    .prepare(
      `CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC)`,
    )
    .run();
  await db
    .prepare(
      `CREATE INDEX IF NOT EXISTS idx_leads_ip_created ON leads(ip, created_at DESC)`,
    )
    .run();
}

/**
 * True when this client already has >= RATE_LIMIT_PER_HOUR rows in the last hour.
 * Matches new keys (`ip:1.2.3.4`) and legacy plain-IP rows from older deploys.
 * Uses LIMIT fetch (more reliable than COUNT(*) across D1 bindings).
 */
async function rateLimited(db, key, rawIp) {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const keys = rawIp && rawIp !== key ? [key, rawIp] : [key];
  const placeholders = keys.map(() => "?").join(", ");
  const result = await db
    .prepare(
      `SELECT id FROM leads WHERE ip IN (${placeholders}) AND created_at >= ? LIMIT ?`,
    )
    .bind(...keys, since, RATE_LIMIT_PER_HOUR)
    .all();
  return (result?.results?.length || 0) >= RATE_LIMIT_PER_HOUR;
}

async function handlePostLead(request, env, origin) {
  if (!env.LEADS_DB) {
    return json({ ok: false, error: "misconfigured" }, 500, origin);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }

  // Honeypot — bots fill; humans leave empty
  const honeypot = trimStr(body?.honeypot ?? body?.company_url ?? "", 200);
  if (honeypot) {
    return json({ ok: true, id: "ok" }, 200, origin);
  }

  const source = trimStr(body?.source, 32);
  if (!SOURCES.has(source)) {
    return json({ ok: false, error: "invalid_source" }, 400, origin);
  }

  const name = trimStr(body?.name, MAX_NAME);
  const contact = trimStr(body?.contact, MAX_CONTACT);
  const note = trimStr(body?.note ?? "", MAX_NOTE);
  const locale = trimStr(body?.locale ?? "", 16) || null;

  if (!name || !contact) {
    return json({ ok: false, error: "missing_fields" }, 400, origin);
  }

  let payloadJson = null;
  if (body?.payload != null) {
    try {
      const raw =
        typeof body.payload === "string"
          ? body.payload
          : JSON.stringify(body.payload);
      if (raw.length > MAX_PAYLOAD_JSON) {
        return json({ ok: false, error: "payload_too_large" }, 400, origin);
      }
      payloadJson = raw;
    } catch {
      return json({ ok: false, error: "invalid_payload" }, 400, origin);
    }
  }

  await ensureSchema(env.LEADS_DB);

  const rawIp = clientIp(request);
  const key = rateKey(request);
  if (await rateLimited(env.LEADS_DB, key, rawIp)) {
    return json({ ok: false, error: "rate_limited" }, 429, origin);
  }

  const id = newId();
  const createdAt = new Date().toISOString();
  const ua = trimStr(request.headers.get("User-Agent") || "", 400) || null;

  await env.LEADS_DB.prepare(
    `INSERT INTO leads (id, created_at, source, name, contact, note, locale, payload, ip, user_agent)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id,
      createdAt,
      source,
      name,
      contact,
      note || null,
      locale,
      payloadJson,
      key,
      ua,
    )
    .run();

  return json({ ok: true, id, createdAt }, 201, origin);
}

async function handleListLeads(request, env, origin) {
  const token = env.LEADS_ADMIN_TOKEN;
  if (!token) {
    return json({ ok: false, error: "admin_disabled" }, 403, origin);
  }
  const auth = request.headers.get("Authorization") || "";
  const expected = `Bearer ${token}`;
  if (auth !== expected) {
    return json({ ok: false, error: "unauthorized" }, 401, origin);
  }
  if (!env.LEADS_DB) {
    return json({ ok: false, error: "misconfigured" }, 500, origin);
  }

  await ensureSchema(env.LEADS_DB);
  const url = new URL(request.url);
  const limit = Math.min(
    100,
    Math.max(1, Number(url.searchParams.get("limit") || 50)),
  );
  const source = trimStr(url.searchParams.get("source") || "", 32);

  let result;
  if (source && SOURCES.has(source)) {
    result = await env.LEADS_DB.prepare(
      `SELECT id, created_at, source, name, contact, note, locale, payload
       FROM leads WHERE source = ? ORDER BY created_at DESC LIMIT ?`,
    )
      .bind(source, limit)
      .all();
  } else {
    result = await env.LEADS_DB.prepare(
      `SELECT id, created_at, source, name, contact, note, locale, payload
       FROM leads ORDER BY created_at DESC LIMIT ?`,
    )
      .bind(limit)
      .all();
  }

  const leads = (result?.results || []).map((row) => {
    let payload = null;
    if (row.payload) {
      try {
        payload = JSON.parse(row.payload);
      } catch {
        payload = row.payload;
      }
    }
    return {
      id: row.id,
      createdAt: row.created_at,
      source: row.source,
      name: row.name,
      contact: row.contact,
      note: row.note,
      locale: row.locale,
      payload,
    };
  });

  return json({ ok: true, leads }, 200, origin);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (path === "/api/health" || path === "/health") {
      return json(
        { ok: true, service: "dolphin-leads", hasDb: Boolean(env.LEADS_DB) },
        200,
        origin,
      );
    }

    if (
      (path === "/api/leads" || path === "/leads") &&
      request.method === "POST"
    ) {
      return handlePostLead(request, env, origin);
    }

    if (
      (path === "/api/leads" || path === "/leads") &&
      request.method === "GET"
    ) {
      return handleListLeads(request, env, origin);
    }

    return json({ ok: false, error: "not_found" }, 404, origin);
  },
};
