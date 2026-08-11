/**
 * Demo vault unlock API — Cloudflare Worker (password never in static bundle).
 * Production: same-origin `/demos/api/*` via Workers Route.
 * Optional: `NEXT_PUBLIC_DEMOS_GATE_URL` → Worker origin (e.g. workers.dev) for API-only tests.
 */

export const DEMO_GATE_STORAGE_KEY = "dolphin-demos-unlocked-v1";

function apiUrl(path: "unlock" | "status" | "lock"): string {
  const env = process.env.NEXT_PUBLIC_DEMOS_GATE_URL?.replace(/\/$/, "");
  if (env) {
    // workers.dev exposes /api/*; custom domain uses /demos/api/*
    if (env.includes("workers.dev")) {
      return `${env}/api/${path}`;
    }
    return `${env}/demos/api/${path}`;
  }
  if (typeof window !== "undefined") {
    return `${window.location.origin}/demos/api/${path}`;
  }
  return `/demos/api/${path}`;
}

export async function fetchDemoGateStatus(): Promise<boolean> {
  try {
    const res = await fetch(apiUrl("status"), {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { unlocked?: boolean };
    return data.unlocked === true;
  } catch {
    return false;
  }
}

export async function unlockDemoGate(
  password: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch(apiUrl("unlock"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: password.trim() }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    if (!res.ok) {
      return { ok: false, error: data.error || "Mật khẩu không đúng." };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Không kết nối được vault (Cloudflare Worker).",
    };
  }
}
