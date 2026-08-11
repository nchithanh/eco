/**
 * Client → Cloudflare Worker (D1 leads inbox).
 * Default Free URL; override with NEXT_PUBLIC_LEADS_API_URL.
 */
export const DEFAULT_LEADS_API_URL =
  "https://dolphin-kick.nchithanh9999.workers.dev";

export type LeadSource = "quote" | "careers" | "contact";

export type SubmitLeadInput = {
  source: LeadSource;
  name: string;
  contact: string;
  note?: string;
  locale?: string;
  payload?: Record<string, unknown>;
  /** Must stay empty — spam honeypot */
  honeypot?: string;
};

export function getLeadsApiUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_LEADS_API_URL?.trim();
  return (fromEnv || DEFAULT_LEADS_API_URL).replace(/\/$/, "");
}

export async function submitLead(
  input: SubmitLeadInput,
  signal?: AbortSignal,
): Promise<{ ok: true; id?: string } | { ok: false; error?: string }> {
  const base = getLeadsApiUrl();
  if (!base) return { ok: false, error: "no_url" };

  try {
    const res = await fetch(`${base}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: input.source,
        name: input.name,
        contact: input.contact,
        note: input.note ?? "",
        locale: input.locale ?? "",
        payload: input.payload ?? undefined,
        honeypot: input.honeypot ?? "",
      }),
      signal,
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      id?: string;
      error?: string;
    };
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || `http_${res.status}` };
    }
    return { ok: true, id: data.id };
  } catch {
    return { ok: false, error: "network" };
  }
}
