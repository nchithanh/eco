/**
 * Cloudflare Worker — Demo vault gate (option B).
 * Protects `/demos/*` on dolphin-software.io.vn: no valid cookie → unlock UI only;
 * with cookie → proxy to GitHub Pages origin.
 *
 * Secrets (Dashboard → Workers → Settings → Variables):
 *   DEMOS_PASSWORD     — vault password (never in the Next.js bundle)
 *   DEMOS_COOKIE_SECRET — HMAC secret for cookie signing
 *
 * Workers Route (same zone as site, Proxied):
 *   dolphin-software.io.vn/demos*
 *
 * Also deployable on *.workers.dev for unlock API during local/dev.
 */
const COOKIE_NAME = "dolphin_demos";
const COOKIE_MAX_AGE = 60 * 60 * 12; // 12h
const ALLOW_ORIGINS = [
  "https://dolphin-software.io.vn",
  "https://www.dolphin-software.io.vn",
  "http://localhost:3000",
  "http://localhost:3002",
];

function corsHeaders(origin) {
  const allow = ALLOW_ORIGINS.includes(origin) ? origin : ALLOW_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
  };
}

function b64url(buf) {
  const bytes =
    buf instanceof ArrayBuffer ? new Uint8Array(buf) : new Uint8Array(buf);
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSign(message, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return b64url(sig);
}

async function mintCookieValue(secret) {
  const exp = Math.floor(Date.now() / 1000) + COOKIE_MAX_AGE;
  const payload = `demos:${exp}`;
  const sig = await hmacSign(payload, secret);
  return `${exp}.${sig}`;
}

async function cookieValid(request, secret) {
  const raw = request.headers.get("Cookie") || "";
  const match = raw.match(
    new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`),
  );
  if (!match) return false;
  const value = decodeURIComponent(match[1]);
  const [expStr, sig] = value.split(".");
  if (!expStr || !sig) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) return false;
  const expected = await hmacSign(`demos:${exp}`, secret);
  if (expected.length !== sig.length) return false;
  let ok = 0;
  for (let i = 0; i < expected.length; i++) {
    ok |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  return ok === 0;
}

function setCookieHeader(value, requestUrl) {
  const url = new URL(requestUrl);
  const secure = url.protocol === "https:";
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(value)}`,
    "Path=/demos",
    `Max-Age=${COOKIE_MAX_AGE}`,
    "HttpOnly",
    "SameSite=Lax",
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

function clearCookieHeader(requestUrl) {
  const url = new URL(requestUrl);
  const secure = url.protocol === "https:";
  const parts = [
    `${COOKIE_NAME}=`,
    "Path=/demos",
    "Max-Age=0",
    "HttpOnly",
    "SameSite=Lax",
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

function unlockPageHtml(returnTo) {
  const safeReturn = returnTo.startsWith("/demos") ? returnTo : "/demos/";
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Demo vault · Dolphin Software</title>
  <style>
    :root { color-scheme: light; --bg:#fcfcfd; --text:#1a1520; --muted:#6b6570; --accent:#6b56d6; --border:#e6e4ea; }
    * { box-sizing: border-box; }
    body { margin:0; min-height:100vh; display:grid; place-items:center; font-family: system-ui, sans-serif; background:var(--bg); color:var(--text); padding:1.5rem; }
    .card { width:min(100%,24rem); border:1px solid var(--border); border-radius:12px; padding:1.75rem; background:#fff; }
    .eyebrow { font-size:0.7rem; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:var(--accent); margin:0 0 0.75rem; }
    h1 { font-size:1.35rem; margin:0 0 0.5rem; line-height:1.25; }
    p { color:var(--muted); font-size:0.9rem; line-height:1.55; margin:0 0 1.25rem; }
    label { display:block; font-size:0.8rem; font-weight:600; margin-bottom:0.4rem; }
    input { width:100%; padding:0.7rem 0.8rem; border:1px solid var(--border); border-radius:10px; font-size:1rem; }
    button { margin-top:0.9rem; width:100%; padding:0.75rem; border:0; border-radius:10px; background:var(--accent); color:#fff; font-weight:600; cursor:pointer; }
    .err { color:#b42318; font-size:0.85rem; margin-top:0.75rem; min-height:1.2em; }
    a { color:var(--accent); }
  </style>
</head>
<body>
  <div class="card">
    <p class="eyebrow">Dolphin Software · Demo vault</p>
    <h1>Nhập mật khẩu để xem demo</h1>
    <p>Vault được bảo vệ trên Cloudflare. Mật khẩu không nằm trong mã trang tĩnh.</p>
    <form id="f">
      <label for="p">Mật khẩu</label>
      <input id="p" name="password" type="password" autocomplete="current-password" required />
      <button type="submit">Mở vault</button>
      <p class="err" id="e" role="alert"></p>
    </form>
    <p><a href="/">← Về trang chủ</a></p>
  </div>
  <script>
    const returnTo = ${JSON.stringify(safeReturn)};
    document.getElementById("f").addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const err = document.getElementById("e");
      err.textContent = "";
      const password = document.getElementById("p").value;
      try {
        const res = await fetch("/demos/api/unlock", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify({ password }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          err.textContent = data.error || "Mật khẩu không đúng.";
          return;
        }
        location.href = returnTo;
      } catch {
        err.textContent = "Không kết nối được vault.";
      }
    });
  </script>
</body>
</html>`;
}

function isDemosPath(pathname) {
  return pathname === "/demos" || pathname.startsWith("/demos/");
}

function isApiPath(pathname) {
  return (
    pathname === "/demos/api/unlock" ||
    pathname === "/demos/api/status" ||
    pathname === "/demos/api/lock"
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    // Standalone workers.dev health
    if (
      url.hostname.endsWith(".workers.dev") &&
      request.method === "GET" &&
      (url.pathname === "/" || url.pathname === "")
    ) {
      return new Response("demos-gate ok", {
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
      });
    }

    const password = env.DEMOS_PASSWORD;
    const secret = env.DEMOS_COOKIE_SECRET;
    if (!password || !secret) {
      return new Response("Demo gate misconfigured (missing secrets)", {
        status: 500,
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
      });
    }

    // --- API (same-origin on site, or workers.dev) ---
    const apiPath = url.pathname.replace(/\/$/, "") || "/";
    const unlockPath =
      apiPath === "/demos/api/unlock" || apiPath === "/api/unlock";
    const statusPath =
      apiPath === "/demos/api/status" || apiPath === "/api/status";
    const lockPath = apiPath === "/demos/api/lock" || apiPath === "/api/lock";

    if (unlockPath && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return Response.json(
          { error: "Invalid JSON" },
          { status: 400, headers: cors },
        );
      }
      const given = String(body?.password ?? "").trim();
      if (!given || given !== password) {
        return Response.json(
          { error: "Mật khẩu không đúng." },
          { status: 401, headers: cors },
        );
      }
      const value = await mintCookieValue(secret);
      const headers = new Headers(cors);
      headers.set("Content-Type", "application/json;charset=UTF-8");
      headers.append("Set-Cookie", setCookieHeader(value, request.url));
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    if (statusPath && request.method === "GET") {
      const unlocked = await cookieValid(request, secret);
      return Response.json({ unlocked }, { headers: cors });
    }

    if (lockPath && request.method === "POST") {
      const headers = new Headers(cors);
      headers.set("Content-Type", "application/json;charset=UTF-8");
      headers.append("Set-Cookie", clearCookieHeader(request.url));
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // --- Page gate (Workers Route on /demos*) ---
    if (!isDemosPath(url.pathname)) {
      return new Response("Not found", { status: 404 });
    }

    if (isApiPath(url.pathname.replace(/\/$/, "") || url.pathname)) {
      return new Response("Not found", { status: 404 });
    }

    const unlocked = await cookieValid(request, secret);
    if (!unlocked) {
      const returnTo = url.pathname + url.search;
      return new Response(unlockPageHtml(returnTo), {
        status: 401,
        headers: {
          "Content-Type": "text/html;charset=UTF-8",
          "Cache-Control": "no-store",
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }

    // Proxy to origin (GitHub Pages via CF)
    return fetch(request);
  },
};
