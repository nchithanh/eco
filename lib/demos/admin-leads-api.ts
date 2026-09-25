/**
 * Admin leads client → Cloudflare Worker D1 inbox.
 * Token stays in sessionStorage only (never baked into the build).
 */

import { getLeadsApiUrl } from "@/lib/leads-api";
import {
  type LeadStage,
  normalizeLeadStage,
} from "@/lib/demos/sales-process";
import {
  type SalesComp,
  computeSalesComp,
} from "@/lib/demos/sales-comp";

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

export type LeadOwner = string;

export const DEFAULT_LEAD_OWNER = "thanhnc";

export const USER_ROLES = ["sales", "admin", "ops"] as const;
export type UserRole = (typeof USER_ROLES)[number];

/** Legacy deal owner id → canonical user id */
const OWNER_ALIASES: Record<string, string> = {
  nghiahq: "nghianh",
};

export function normalizeLeadOwner(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return DEFAULT_LEAD_OWNER;
  const raw = value.trim();
  return OWNER_ALIASES[raw] ?? raw;
}

export function normalizeUserRole(value: unknown): UserRole {
  if (typeof value === "string" && (USER_ROLES as readonly string[]).includes(value)) {
    return value as UserRole;
  }
  return "sales";
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

export type AdminComment = {
  id: string;
  leadId: string;
  body: string;
  author: string;
  stageAt: string;
  createdAt: string;
};

function mapComment(raw: unknown): AdminComment {
  const row = (raw || {}) as Record<string, unknown>;
  return {
    id: String(row.id || ""),
    leadId: String(row.leadId || ""),
    body: String(row.body || ""),
    author: normalizeLeadOwner(row.author),
    stageAt: String(row.stageAt || ""),
    createdAt: String(row.createdAt || ""),
  };
}

export async function listLeadComments(
  token: string,
  leadId: string,
): Promise<
  { ok: true; comments: AdminComment[] } | { ok: false; error: string }
> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(
      `${base}/api/leads/${encodeURIComponent(leadId)}/comments`,
      { headers: authHeaders(token) },
    );
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    const comments = ((data.comments as unknown[]) || []).map(mapComment);
    return { ok: true, comments };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function createLeadComment(
  token: string,
  leadId: string,
  input: { body: string; author?: string; stageAt?: string },
): Promise<
  { ok: true; comment: AdminComment } | { ok: false; error: string }
> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(
      `${base}/api/leads/${encodeURIComponent(leadId)}/comments`,
      {
        method: "POST",
        headers: authHeaders(token),
        body: JSON.stringify({
          body: input.body,
          author: input.author ?? DEFAULT_LEAD_OWNER,
          stageAt: input.stageAt ?? "",
        }),
      },
    );
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, comment: mapComment(data.comment) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export type AdminUser = {
  id: string;
  displayName: string;
  role: UserRole;
  active: boolean;
  createdAt: string;
  title: string;
  phone: string;
  email: string;
  salary: number;
  kpiTarget: number;
  stats: SalesComp;
};

export type UserWriteInput = {
  id?: string;
  displayName: string;
  role?: UserRole;
  active?: boolean;
  title?: string;
  phone?: string;
  email?: string;
  salary?: number;
  kpiTarget?: number;
};

function mapUser(raw: unknown): AdminUser {
  const row = (raw || {}) as Record<string, unknown>;
  const salary = Number(row.salary) || 0;
  const kpiTarget = Number(row.kpiTarget) || 0;
  const rawStats = (row.stats || {}) as Record<string, unknown>;
  const revenue = Number(rawStats.revenue) || 0;
  const wonCount = Number(rawStats.wonCount) || 0;
  return {
    id: String(row.id || ""),
    displayName: String(row.displayName || ""),
    role: normalizeUserRole(row.role),
    active: Boolean(row.active),
    createdAt: String(row.createdAt || ""),
    title: String(row.title || ""),
    phone: String(row.phone || ""),
    email: String(row.email || ""),
    salary,
    kpiTarget,
    stats: computeSalesComp(revenue, wonCount, salary, kpiTarget),
  };
}

export async function listAdminUsers(
  token: string,
  opts?: { activeOnly?: boolean },
): Promise<{ ok: true; users: AdminUser[] } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  const params = new URLSearchParams();
  if (opts?.activeOnly) params.set("active", "1");
  const qs = params.toString();
  try {
    const res = await fetch(`${base}/api/users${qs ? `?${qs}` : ""}`, {
      headers: authHeaders(token),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, users: ((data.users as unknown[]) || []).map(mapUser) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function createAdminUser(
  token: string,
  input: UserWriteInput & { id: string },
): Promise<{ ok: true; user: AdminUser } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/users`, {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify({
        id: input.id,
        displayName: input.displayName,
        role: input.role ?? "sales",
        active: input.active ?? true,
        title: input.title ?? "",
        phone: input.phone ?? "",
        email: input.email ?? "",
        salary: input.salary ?? 0,
        kpiTarget: input.kpiTarget ?? 0,
      }),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, user: mapUser(data.user) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function updateAdminUser(
  token: string,
  id: string,
  input: UserWriteInput,
): Promise<{ ok: true; user: AdminUser } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/users/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: authHeaders(token),
      body: JSON.stringify({
        displayName: input.displayName,
        role: input.role ?? "sales",
        active: input.active ?? true,
        title: input.title ?? "",
        phone: input.phone ?? "",
        email: input.email ?? "",
        salary: input.salary ?? 0,
        kpiTarget: input.kpiTarget ?? 0,
      }),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, user: mapUser(data.user) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function deleteAdminUser(
  token: string,
  id: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/users/${encodeURIComponent(id)}`, {
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

export type AdminExpense = {
  id: string;
  incurredAt: string;
  category: string;
  title: string;
  amount: number;
  currency: string;
  recurring: boolean;
  note: string;
  createdAt: string;
  createdBy: string;
};

export type ExpenseWriteInput = {
  title: string;
  amount: number;
  incurredAt?: string;
  category?: string;
  currency?: string;
  recurring?: boolean;
  note?: string;
  createdBy?: string;
};

function mapExpense(raw: unknown): AdminExpense {
  const row = (raw || {}) as Record<string, unknown>;
  return {
    id: String(row.id || ""),
    incurredAt: String(row.incurredAt || ""),
    category: String(row.category || "infra"),
    title: String(row.title || ""),
    amount: Number(row.amount) || 0,
    currency: String(row.currency || "VND"),
    recurring: Boolean(row.recurring),
    note: String(row.note || ""),
    createdAt: String(row.createdAt || ""),
    createdBy: String(row.createdBy || ""),
  };
}

export async function listAdminExpenses(
  token: string,
): Promise<
  { ok: true; expenses: AdminExpense[] } | { ok: false; error: string }
> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/expenses`, {
      headers: authHeaders(token),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return {
      ok: true,
      expenses: ((data.expenses as unknown[]) || []).map(mapExpense),
    };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function updateAdminExpense(
  token: string,
  id: string,
  input: ExpenseWriteInput,
): Promise<{ ok: true; expense: AdminExpense } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/expenses/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: authHeaders(token),
      body: JSON.stringify({
        title: input.title,
        amount: input.amount,
        incurredAt: input.incurredAt ?? "",
        category: input.category ?? "infra",
        currency: input.currency ?? "VND",
        recurring: input.recurring ?? false,
        note: input.note ?? "",
      }),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, expense: mapExpense(data.expense) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export type AdminSalaryMonth = {
  userId: string;
  ym: string;
  amount: number;
  updatedAt: string;
};

export type SalaryMonthWriteInput = {
  userId: string;
  ym: string;
  amount: number;
};

function mapSalaryMonth(raw: unknown): AdminSalaryMonth {
  const row = (raw || {}) as Record<string, unknown>;
  return {
    userId: String(row.userId || row.user_id || ""),
    ym: String(row.ym || ""),
    amount: Number(row.amount) || 0,
    updatedAt: String(row.updatedAt || row.updated_at || ""),
  };
}

export async function listAdminSalaryMonths(
  token: string,
): Promise<
  { ok: true; salaryMonths: AdminSalaryMonth[] } | { ok: false; error: string }
> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/salary-months`, {
      headers: authHeaders(token),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return {
      ok: true,
      salaryMonths: ((data.salaryMonths as unknown[]) || []).map(mapSalaryMonth),
    };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function upsertAdminSalaryMonth(
  token: string,
  input: SalaryMonthWriteInput,
): Promise<
  { ok: true; salaryMonth: AdminSalaryMonth } | { ok: false; error: string }
> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/salary-months`, {
      method: "PUT",
      headers: authHeaders(token),
      body: JSON.stringify({
        userId: input.userId,
        ym: input.ym,
        amount: input.amount,
      }),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, salaryMonth: mapSalaryMonth(data.salaryMonth) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function deleteAdminSalaryMonth(
  token: string,
  userId: string,
  ym: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(
      `${base}/api/salary-months/${encodeURIComponent(userId)}/${encodeURIComponent(ym)}`,
      {
        method: "DELETE",
        headers: authHeaders(token),
      },
    );
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function createAdminExpense(
  token: string,
  input: ExpenseWriteInput,
): Promise<{ ok: true; expense: AdminExpense } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/expenses`, {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify({
        title: input.title,
        amount: input.amount,
        incurredAt: input.incurredAt ?? "",
        category: input.category ?? "infra",
        currency: input.currency ?? "VND",
        recurring: input.recurring ?? false,
        note: input.note ?? "",
        createdBy: input.createdBy ?? DEFAULT_LEAD_OWNER,
      }),
    });
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true, expense: mapExpense(data.expense) };
  } catch {
    return { ok: false, error: "network" };
  }
}

export async function deleteAdminExpense(
  token: string,
  id: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(`${base}/api/expenses/${encodeURIComponent(id)}`, {
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

export async function deleteLeadComment(
  token: string,
  commentId: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const base = getLeadsApiUrl();
  try {
    const res = await fetch(
      `${base}/api/comments/${encodeURIComponent(commentId)}`,
      {
        method: "DELETE",
        headers: authHeaders(token),
      },
    );
    const data = await parseJson(res);
    if (!res.ok || !data.ok) {
      return { ok: false, error: String(data.error || `http_${res.status}`) };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}
