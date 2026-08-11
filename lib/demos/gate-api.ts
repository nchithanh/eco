/**
 * Demo vault unlock API — Cloudflare Worker checks password only.
 * Client session validity uses COOKIE_CONSENT_REVISION (bumped on each push):
 * sessionStorage value must match current revision or user must login again.
 *
 * - Override: `NEXT_PUBLIC_DEMOS_GATE_URL`
 * - Localhost: default `https://dolphin-demos.nchithanh9999.workers.dev`
 * - Production custom domain: same-origin `/demos/api/*`
 */

import { COOKIE_CONSENT_REVISION } from "@/lib/cookie-consent";

export const DEFAULT_DEMOS_GATE_URL =
  "https://dolphin-demos.nchithanh9999.workers.dev";

/** sessionStorage key — value = COOKIE_CONSENT_REVISION when unlocked */
export const DEMO_GATE_STORAGE_KEY = "dolphin-demos-unlocked-rev";

function isLocalHost(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]"
  );
}

function apiUrl(path: "unlock" | "status" | "lock"): string {
  const env = process.env.NEXT_PUBLIC_DEMOS_GATE_URL?.replace(/\/$/, "");
  if (env) {
    if (env.includes("workers.dev")) {
      return `${env}/api/${path}`;
    }
    if (env.endsWith("/demos") || env.includes("/demos/")) {
      return `${env.replace(/\/$/, "")}/api/${path}`;
    }
    return `${env}/demos/api/${path}`;
  }

  if (typeof window !== "undefined") {
    if (isLocalHost(window.location.hostname)) {
      return `${DEFAULT_DEMOS_GATE_URL}/api/${path}`;
    }
    return `${window.location.origin}/demos/api/${path}`;
  }

  return `${DEFAULT_DEMOS_GATE_URL}/api/${path}`;
}

export function isDemoGateUnlockedLocally(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return (
      sessionStorage.getItem(DEMO_GATE_STORAGE_KEY) === COOKIE_CONSENT_REVISION
    );
  } catch {
    return false;
  }
}

export function markDemoGateUnlockedLocally(): void {
  try {
    sessionStorage.setItem(DEMO_GATE_STORAGE_KEY, COOKIE_CONSENT_REVISION);
  } catch {
    /* ignore */
  }
}

export function clearDemoGateLocalSession(): void {
  try {
    sessionStorage.removeItem(DEMO_GATE_STORAGE_KEY);
    // legacy key from pre-revision gate
    sessionStorage.removeItem("dolphin-demos-unlocked-v1");
  } catch {
    /* ignore */
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

/** True when this page load should reload after unlock (edge cookie on custom domain). */
export function shouldReloadAfterDemoUnlock(): boolean {
  if (typeof window === "undefined") return false;
  return !isLocalHost(window.location.hostname);
}
