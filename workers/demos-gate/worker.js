/**
 * Cloudflare Worker — Demo vault gate.
 * Unlock: password check only (secret DEMOS_PASSWORD).
 * Session “still valid after deploy” is owned by the site client via
 * COOKIE_CONSENT_REVISION in sessionStorage — not this Worker.
 *
 * Edge (custom domain route dolphin-software.io.vn/demos*):
 *   simple HttpOnly cookie dolphin_demos=1 after unlock → proxy HTML;
 *   missing cookie → unlock HTML.
 *
 * Workers.dev: https://dolphin-demos.nchithanh9999.workers.dev
 */
const COOKIE_NAME = "dolphin_demos";
const COOKIE_MAX_AGE = 60 * 60 * 12; // 12h
const COOKIE_VALUE = "1";
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

function isCrossSite(request) {
  const origin = request.headers.get("Origin") || "";
  if (!origin) return false;
  try {
    return new URL(origin).host !== new URL(request.url).host;
  } catch {
    return false;
  }
}

function cookiePathForRequest(requestUrl) {
  const pathname = new URL(requestUrl).pathname;
  return pathname.startsWith("/demos") ? "/demos" : "/";
}

function setCookieHeader(request) {
  const url = new URL(request.url);
  const crossSite = isCrossSite(request);
  const parts = [
    `${COOKIE_NAME}=${COOKIE_VALUE}`,
    `Path=${cookiePathForRequest(request.url)}`,
    `Max-Age=${COOKIE_MAX_AGE}`,
    "HttpOnly",
    crossSite ? "SameSite=None" : "SameSite=Lax",
  ];
  if (url.protocol === "https:" || crossSite) parts.push("Secure");
  return parts.join("; ");
}

function clearCookieHeader(request) {
  const url = new URL(request.url);
  const crossSite = isCrossSite(request);
  const parts = [
    `${COOKIE_NAME}=`,
    `Path=${cookiePathForRequest(request.url)}`,
    "Max-Age=0",
    "HttpOnly",
    crossSite ? "SameSite=None" : "SameSite=Lax",
  ];
  if (url.protocol === "https:" || crossSite) parts.push("Secure");
  return parts.join("; ");
}

function cookiePresent(request) {
  const raw = request.headers.get("Cookie") || "";
  const match = raw.match(
    new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`),
  );
  if (!match) return false;
  const value = decodeURIComponent(match[1] || "").trim();
  return value.length > 0;
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
    if (!password) {
      return new Response("Demo gate misconfigured (missing DEMOS_PASSWORD)", {
        status: 500,
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
      });
    }

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
      const headers = new Headers(cors);
      headers.set("Content-Type", "application/json;charset=UTF-8");
      headers.append("Set-Cookie", setCookieHeader(request));
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    if (statusPath && request.method === "GET") {
      return Response.json(
        { unlocked: cookiePresent(request) },
        { headers: cors },
      );
    }

    if (lockPath && request.method === "POST") {
      const headers = new Headers(cors);
      headers.set("Content-Type", "application/json;charset=UTF-8");
      headers.append("Set-Cookie", clearCookieHeader(request));
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    if (!isDemosPath(url.pathname)) {
      return new Response("Not found", { status: 404 });
    }

    if (isApiPath(url.pathname.replace(/\/$/, "") || url.pathname)) {
      return new Response("Not found", { status: 404 });
    }

    if (!cookiePresent(request)) {
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

    return fetch(request);
  },
};
