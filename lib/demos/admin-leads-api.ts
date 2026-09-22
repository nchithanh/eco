/**
 * Admin leads client → Cloudflare Worker D1 inbox.
 * Token stays in sessionStorage only (never baked into the build).
 */

import { getLeadsApiUrl } from "@/lib/leads-api";
import {
  type LeadStage,
  normalizeLeadStage,
} from "@/lib/demos/sales-process";

export const LEADS_ADMIN_TOKEN_KEY = "dolphin-leads-admin-token";

export const LEAD_SOURCES = [
  "quote",
  "careers",
  "contact",
  "website-36-thang",
  "manual",
] as const;

export type AdminLeadSource = (typeof LEAD_SOURCES)[number];

export const LEAD_OWNERS = ["thanhnc", "nghianh", "hoangpt"] as const;

export type LeadOwner = (typeof LEAD_OWNERS)[number];

export const DEFAULT_LEAD_OWNER: LeadOwner = "thanhnc";

/** Legacy deal owner id → canonical user id */
const OWNER_ALIASES: Record<string, LeadOwner> = {
  nghiahq: "nghianh",
};

export function normalizeLeadOwner(value: unknown): LeadOwner {
  if (typeof value !== "string") return DEFAULT_LEAD_OWNER;
  const raw = value.trim();
  const aliased = OWNER_ALIASES[raw] ?? raw;
  if ((LEAD_OWNERS as readonly string[]).includes(aliased)) {
    return aliased as LeadOwner;
  }
  return DEFAULT_LEAD_OWNER;
}

export type AdminLead = {
  id: string;
  createdAt: string;
  source: string;
  name: string;
  contact: string;
  note: string | null;
  locale: string | null;
  payload: unknown;
  stage: LeadStage;
  title: string;
  company: string;
  amount: number;
  currency: string;
  closeDate: string;
  owner: string;
  lastActivityAt: string;
  atRisk: boolean;
};

export type LeadWriteInput = {
  source: AdminLeadSource;
  name: string;
  contact: string;
  note?: string;
  locale?: string;
  stage?: LeadStage;
  title?: string;
  company?: string;
  amount?: number;
  currency?: string;
  closeDate?: string;
  owner?: string;
  atRisk?: boolean;
  payload?: Record<string, unknown> | null;
};

export function getStoredAdminToken(): string {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(LEADS_ADMIN_TOKEN_KEY)?.trim() || "";
}

export function setStoredAdminToken(token: string): void {
  sessionStorage.setItem(LEADS_ADMIN_TOKEN_KEY, token.trim());
}

export function clearStoredAdminToken(): void {
  sessionStorage.removeItem(LEADS_ADMIN_TOKEN_KEY);
}

function authHeaders(token: string): HeadersInit {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function parseJson(res: Response): Promise<Record<string, unknown>> {
  return (await res.json().catch(() => ({}))) as Record<string, unknown>;
}

function mapLead(raw: unknown): AdminLead {
  const row = (raw || {}) as Record<string, unknown>;
  const name = String(row.name || "");
  return {
    id: String(row.id || ""),
    createdAt: String(row.createdAt || ""),
    source: String(row.source || ""),
    name,
    contact: String(row.contact || ""),
    note: row.note == null ? null : String(row.note),
    locale: row.locale == null ? null : String(row.locale),
    payload: row.payload ?? null,
    stage: normalizeLeadStage(row.stage),
    title: String(row.title || name || ""),
    company: String(row.company || ""),
    amount: Number(row.amount) || 0,
    currency: String(row.currency || "VND"),
    closeDate: String(row.closeDate || ""),
    owner: normalizeLeadOwner(row.owner),
    lastActivityAt: String(row.lastActivityAt || row.createdAt || ""),
    atRisk: Boolean(row.atRisk),
  };
}

function writeBody(input: LeadWriteInput) {
  return {
    source: input.source,
    name: input.name,
    contact: input.contact,
    note: input.note ?? "",
    locale: input.locale ?? "vi",
    stage: input.stage ?? "new",
    title: input.title ?? input.name,
    company: input.company ?? "",
    amount: input.amount ?? 0,
    currency: input.currency ?? "VND",
    closeDate: input.closeDate ?? "",
    owner: input.owner ?? DEFAULT_LEAD_OWNER,
    atRisk: input.atRisk ?? false,
    payload: input.payload ?? undefined,
    honeypot: "",
  };
}

export async function listAdminLeads(
  token: string,
  opts?: { limit?: number; source?: string; stage?: string },
): Promise<{ ok: true; leads: AdminLead[] } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  const params = new URLSearchParams();
  params.set("limit", String(opts?.limit ?? 1000));
  if (opts?.source) params.set("source", opts.source);
  if (opts?.stage) params.set("stage", opts.stage);

  try {
    const res = await fetch(`${base}/api/leads?${params}`, {
      headers: authHeaders(token),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    const leads = ((data.leads as unknown[]) || []).map(mapLead);
    return { ok: true, leads };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function createAdminLead(
  token: string,
  input: LeadWriteInput,
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/leads`, {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify(writeBody(input)),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, id: String(data.id || "") };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function updateAdminLead(
  token: string,
  id: string,
  input: LeadWriteInput,
): Promise<{ ok: true; lead: AdminLead } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  const body = writeBody(input);
  try {
    const res = await fetch(`${base}/api/leads/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: authHeaders(token),
      body: JSON.stringify({
        ...body,
        payload: input.payload ?? null,
        honeypot: undefined,
      }),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, lead: mapLead(data.lead) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function deleteAdminLead(
  token: string,
  id: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/leads/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: authHeaders(token),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}
