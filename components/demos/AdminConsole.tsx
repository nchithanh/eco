"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type DragEvent,
  type FormEvent,
} from "react";
import { ThemedLogoImg } from "@/components/ThemedLogoImg";
import { assetPath } from "@/lib/asset";
import {
  type AdminLead,
  type AdminLeadSource,
  type LeadWriteInput,
  DEFAULT_LEAD_OWNER,
  LEAD_OWNERS,
  LEAD_SOURCES,
  clearStoredAdminToken,
  createAdminLead,
  deleteAdminLead,
  getStoredAdminToken,
  listAdminLeads,
  normalizeLeadOwner,
  setStoredAdminToken,
  updateAdminLead,
} from "@/lib/demos/admin-leads-api";
import {
  ADMIN_CONTRACTS,
  contractTitle,
} from "@/lib/demos/admin-contracts";
import {
  type DolphinSalesCopy,
  type SalesLocale,
  SALES_LOCALE_KEY,
  getDolphinSalesCopy,
  isSalesLocale,
  salesStageLabel,
  salesStageShort,
} from "@/lib/demos/dolphin-sales-copy";
import {
  type LeadStage,
  LEAD_STAGES,
  normalizeLeadStage,
} from "@/lib/demos/sales-process";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type WorkspaceId = "sale" | "crm" | "analytics" | "contracts";
type SaleNavId = "pipeline" | "playbook";
type PipelineView = "list" | "board";
type SourceFilter = "all" | "exclude-careers" | AdminLeadSource;
type StageTab = "all" | LeadStage;
type OwnerFilter = "all" | string;
type IdleFilter = "all" | "ok" | "warn" | "bad";
type ContactKindFilter = "all" | "hotline" | "owner" | "unknown";
type AtRiskFilter = "all" | "yes" | "no";

type LeadFormState = {
  source: AdminLeadSource;
  name: string;
  contact: string;
  note: string;
  locale: string;
  stage: LeadStage;
  title: string;
  company: string;
  amount: string;
  currency: string;
  closeDate: string;
  probability: string;
  owner: string;
  atRisk: boolean;
};

const EMPTY_FORM: LeadFormState = {
  source: "manual",
  name: "",
  contact: "",
  note: "",
  locale: "vi",
  stage: "new",
  title: "",
  company: "",
  amount: "0",
  currency: "VND",
  closeDate: "",
  probability: "10",
  owner: DEFAULT_LEAD_OWNER,
  atRisk: false,
};

const OPEN_STAGES: LeadStage[] = [
  "hotline",
  "new",
  "qualified",
  "discover",
  "propose",
];

const IN_PROGRESS_STAGES: LeadStage[] = ["discover", "propose"];

const STAGE_TABS: LeadStage[] = [
  "hotline",
  "new",
  "qualified",
  "discover",
  "propose",
  "won",
  "lost",
];

/** Heuristic win probability by stage — UI forecast only. */
const STAGE_WEIGHT: Partial<Record<LeadStage, number>> = {
  hotline: 0.05,
  new: 0.1,
  qualified: 0.25,
  discover: 0.4,
  propose: 0.65,
  won: 1,
  deliver: 1,
  expand: 0.8,
  lost: 0,
  nurture: 0.15,
  out_of_scope: 0,
};

const PAGE_SIZE = 10;

function formatMoney(
  amount: number,
  currency = "VND",
  salesLocale: SalesLocale = "vi",
): string {
  const safe = Number.isFinite(amount) && amount > 0 ? amount : 0;
  const tag = salesLocale === "en" ? "en-US" : "vi-VN";
  if (currency === "VND") {
    if (safe >= 1_000_000) {
      const m = safe / 1_000_000;
      return `${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M₫`;
    }
    return `${Math.round(safe).toLocaleString(tag)}₫`;
  }
  if (safe >= 1000) {
    return `$${(safe / 1000).toFixed(safe >= 10000 ? 0 : 1)}K`;
  }
  if (safe === 0) return currency === "VND" ? "0₫" : `${currency} 0`;
  return `${currency} ${safe}`;
}

function readPayload(lead: AdminLead): Record<string, unknown> {
  if (
    lead.payload &&
    typeof lead.payload === "object" &&
    !Array.isArray(lead.payload)
  ) {
    return { ...(lead.payload as Record<string, unknown>) };
  }
  return {};
}

function stageDefaultProb(stage: LeadStage): number {
  return Math.round((STAGE_WEIGHT[stage] ?? 0) * 100);
}

function clampProb(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

/** Override in payload.probability, else stage default. */
function getProbability(lead: AdminLead): number {
  const raw = readPayload(lead).probability;
  if (typeof raw === "number") return clampProb(raw);
  if (typeof raw === "string" && raw.trim() !== "") {
    const n = Number(raw);
    if (Number.isFinite(n)) return clampProb(n);
  }
  return stageDefaultProb(lead.stage);
}

function formatClose(iso: string, salesLocale: SalesLocale): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
  return d.toLocaleDateString(salesLocale === "en" ? "en-US" : "vi-VN", {
    day: "numeric",
    month: "short",
  });
}

function relativeActivity(iso: string, salesLocale: SalesLocale): string {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return "—";
  const mins = Math.floor((Date.now() - t) / 60_000);
  if (mins < 60) return salesLocale === "vi" ? `${mins}p trước` : `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 48) return salesLocale === "vi" ? `${hours}h trước` : `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return salesLocale === "vi" ? "Hôm qua" : "Yesterday";
  return salesLocale === "vi" ? `${days}d trước` : `${days}d ago`;
}

function idleDays(iso: string): number {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return 0;
  return Math.max(0, Math.floor((Date.now() - t) / 86_400_000));
}

function idleTone(days: number): "ok" | "warn" | "bad" {
  if (days <= 2) return "ok";
  if (days <= 6) return "warn";
  return "bad";
}

function ownerInitials(owner: string): string {
  const parts = owner.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "DS";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/** Initials for lead mark — prefer company / deal title over contact name. */
function leadInitials(lead: AdminLead): string {
  const source = (lead.company || lead.title || lead.name || "").trim();
  if (!source) return "·";
  const words = source
    .replace(/[—–\-·|,/]+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0 && !/^(the|a|an|và|cho|của)$/i.test(w));
  if (words.length === 0) return source.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function leadContactKind(lead: AdminLead): ContactKindFilter {
  const payload = readPayload(lead);
  const raw = String(payload.contactKind || "").toLowerCase();
  if (raw === "hotline" || raw === "owner" || raw === "unknown") return raw;
  if (lead.stage === "hotline" || (lead.title || "").includes("[Hotline]")) {
    return "hotline";
  }
  return "unknown";
}

function leadSecondary(lead: AdminLead): string {
  const primary = (lead.title || lead.name).trim();
  const company = lead.company.trim();
  if (company && company !== primary) return company;
  if (lead.name.trim() && lead.name.trim() !== primary) return lead.name.trim();
  if (lead.contact.trim()) return lead.contact.trim();
  return "";
}

function stageTone(stage: LeadStage): string {
  switch (stage) {
    case "hotline":
      return "is-hotline";
    case "new":
      return "is-new";
    case "qualified":
      return "is-qualified";
    case "discover":
      return "is-discover";
    case "propose":
      return "is-propose";
    case "won":
    case "deliver":
    case "expand":
      return "is-won";
    case "lost":
    case "out_of_scope":
      return "is-lost";
    default:
      return "is-muted";
  }
}

function suggestedNext(
  lead: AdminLead,
  t: DolphinSalesCopy,
): string {
  const idle = idleDays(lead.lastActivityAt);
  if (lead.stage === "lost" || lead.stage === "out_of_scope") {
    return t.nextAction.none;
  }
  if (idle >= 7 && OPEN_STAGES.includes(lead.stage)) {
    return t.nextAction.followUp;
  }
  switch (lead.stage) {
    case "new":
      return idle >= 1 ? t.nextAction.followUp : t.nextAction.qualify;
    case "qualified":
      return t.nextAction.discover;
    case "discover":
      return t.nextAction.propose;
    case "propose":
      return t.nextAction.close;
    case "won":
    case "deliver":
      return t.nextAction.deliver;
    case "expand":
    case "nurture":
      return t.nextAction.nurture;
    default:
      return t.nextAction.followUp;
  }
}

function toWriteInput(form: LeadFormState): LeadWriteInput {
  const probability = clampProb(Number(form.probability));
  return {
    source: form.source,
    name: form.name.trim(),
    contact: form.contact.trim(),
    note: form.note.trim(),
    locale: form.locale.trim() || "vi",
    stage: form.stage,
    title: form.title.trim() || form.name.trim(),
    company: form.company.trim(),
    amount: Number(form.amount) || 0,
    currency: form.currency.trim() || "VND",
    closeDate: form.closeDate.trim(),
    owner: form.owner.trim() || DEFAULT_LEAD_OWNER,
    atRisk: form.atRisk,
    payload: { probability },
  };
}

function leadSourceForWrite(lead: AdminLead): AdminLeadSource {
  return (
    LEAD_SOURCES.includes(lead.source as AdminLeadSource)
      ? lead.source
      : "manual"
  ) as AdminLeadSource;
}

function leadToWrite(
  lead: AdminLead,
  patch?: Partial<LeadWriteInput>,
): LeadWriteInput {
  const basePayload = readPayload(lead);
  const base: LeadWriteInput = {
    source: leadSourceForWrite(lead),
    name: lead.name,
    contact: lead.contact,
    note: lead.note || "",
    locale: lead.locale || "vi",
    stage: lead.stage,
    title: lead.title || lead.name,
    company: lead.company,
    amount: lead.amount,
    currency: lead.currency,
    closeDate: lead.closeDate,
    owner: lead.owner,
    atRisk: lead.atRisk,
    payload: basePayload,
  };
  if (!patch) return base;
  const { payload: patchPayload, ...rest } = patch;
  return {
    ...base,
    ...rest,
    payload: patchPayload
      ? { ...basePayload, ...patchPayload }
      : basePayload,
  };
}

function fillTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

function WinRateDisplay({
  rate,
  decided,
  t,
}: {
  rate: number | null;
  decided: number;
  t: DolphinSalesCopy;
}) {
  return (
    <>
      <strong>{rate == null ? "—" : `${rate}%`}</strong>
      <em className="df-kpi__sub">
        {decided === 0
          ? t.forecast.noClosed
          : fillTemplate(t.forecast.closedSample, { n: decided })}
      </em>
    </>
  );
}

type InlineKind = "amount" | "close" | "prob";

function InlineQuickField({
  kind,
  lead,
  salesLocale,
  t,
  disabled,
  onSaveAmount,
  onSaveClose,
  onSaveProb,
}: {
  kind: InlineKind;
  lead: AdminLead;
  salesLocale: SalesLocale;
  t: DolphinSalesCopy;
  disabled?: boolean;
  onSaveAmount: (lead: AdminLead, amount: number) => void | Promise<void>;
  onSaveClose: (lead: AdminLead, closeDate: string) => void | Promise<void>;
  onSaveProb: (lead: AdminLead, probability: number) => void | Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const initial =
    kind === "amount"
      ? lead.amount > 0
        ? String(lead.amount)
        : ""
      : kind === "close"
        ? lead.closeDate.slice(0, 10)
        : String(getProbability(lead));
  const [value, setValue] = useState(initial);

  useEffect(() => {
    if (!open) {
      setValue(
        kind === "amount"
          ? lead.amount > 0
            ? String(lead.amount)
            : ""
          : kind === "close"
            ? lead.closeDate.slice(0, 10)
            : String(getProbability(lead)),
      );
    }
  }, [lead, kind, open]);

  async function commit() {
    setOpen(false);
    if (kind === "amount") {
      const next = Math.max(0, Number(value) || 0);
      if (next === lead.amount) return;
      await onSaveAmount(lead, next);
      return;
    }
    if (kind === "close") {
      const next = value.trim();
      if (next === lead.closeDate.slice(0, 10)) return;
      await onSaveClose(lead, next);
      return;
    }
    const next = clampProb(Number(value));
    if (next === getProbability(lead)) return;
    await onSaveProb(lead, next);
  }

  if (open) {
    return (
      <input
        className="df-inline-input"
        type={kind === "close" ? "date" : "number"}
        min={kind === "prob" ? 0 : undefined}
        max={kind === "prob" ? 100 : undefined}
        step={kind === "amount" ? 1000 : kind === "prob" ? 5 : undefined}
        value={value}
        autoFocus
        disabled={disabled}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => void commit()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            void commit();
          }
          if (e.key === "Escape") {
            e.preventDefault();
            setOpen(false);
          }
        }}
        aria-label={
          kind === "amount"
            ? t.table.amount
            : kind === "close"
              ? t.table.closeDate
              : t.table.probability
        }
      />
    );
  }

  const empty =
    kind === "amount"
      ? !(lead.amount > 0)
      : kind === "close"
        ? !lead.closeDate
        : false;
  const label =
    kind === "amount"
      ? empty
        ? t.table.setValue
        : formatMoney(lead.amount, lead.currency, salesLocale)
      : kind === "close"
        ? empty
          ? t.table.setClose
          : formatClose(lead.closeDate, salesLocale)
        : `${getProbability(lead)}%`;

  return (
    <button
      type="button"
      className={`df-inline-btn${empty ? " is-empty" : ""}`}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(true);
      }}
    >
      {label}
    </button>
  );
}

function NavIcon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "pipeline":
      return (
        <svg {...common}>
          <path d="M2 4h12M2 8h8M2 12h10" strokeLinecap="round" />
        </svg>
      );
    case "deals":
      return (
        <svg {...common}>
          <rect x="2.5" y="3" width="11" height="10" rx="1.5" />
          <path d="M5 6.5h6M5 9.5h4" strokeLinecap="round" />
        </svg>
      );
    case "contacts":
      return (
        <svg {...common}>
          <circle cx="8" cy="5.5" r="2.2" />
          <path d="M3.5 13c.8-2.2 2.4-3.3 4.5-3.3S11.7 10.8 12.5 13" strokeLinecap="round" />
        </svg>
      );
    case "companies":
      return (
        <svg {...common}>
          <path d="M3 13V5.5L8 3l5 2.5V13" strokeLinejoin="round" />
          <path d="M6 13v-3h4v3" />
        </svg>
      );
    case "playbook":
      return (
        <svg {...common}>
          <path d="M3 3.5h7.5L13 6v6.5H3z" strokeLinejoin="round" />
          <path d="M10.5 3.5V6H13" />
        </svg>
      );
    case "activities":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="5.5" />
          <path d="M8 5.5V8l2 1.5" strokeLinecap="round" />
        </svg>
      );
    case "overview":
      return (
        <svg {...common}>
          <path d="M2.5 12.5 6 8l2.5 2.5L13.5 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "reports":
      return (
        <svg {...common}>
          <path d="M3 12.5V7M7 12.5V4.5M11 12.5V9" strokeLinecap="round" />
        </svg>
      );
    case "contracts":
      return (
        <svg {...common}>
          <path d="M4 2.5h6.5L13 5v8.5H4z" strokeLinejoin="round" />
          <path d="M10.5 2.5V5H13M6 8h4M6 10.5h3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function AdminConsole() {
  const siteLocale = useLocale().locale;
  const [salesLocale, setSalesLocale] = useState<SalesLocale>("vi");
  const [localeReady, setLocaleReady] = useState(false);
  const t = useMemo(() => getDolphinSalesCopy(salesLocale), [salesLocale]);

  const [workspace, setWorkspace] = useState<WorkspaceId>("sale");
  const [nav, setNav] = useState<SaleNavId>("pipeline");
  const [token, setToken] = useState("");
  const [tokenReady, setTokenReady] = useState(false);
  const [tokenInput, setTokenInput] = useState("");
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [tableQuery, setTableQuery] = useState("");
  const [sourceFilter, setSourceFilter] =
    useState<SourceFilter>("exclude-careers");
  const [ownerFilter, setOwnerFilter] = useState<OwnerFilter>("all");
  const [idleFilter, setIdleFilter] = useState<IdleFilter>("all");
  const [contactKindFilter, setContactKindFilter] =
    useState<ContactKindFilter>("all");
  const [atRiskFilter, setAtRiskFilter] = useState<AtRiskFilter>("all");
  const [amountMin, setAmountMin] = useState("");
  const [amountMax, setAmountMax] = useState("");
  const [closeFrom, setCloseFrom] = useState("");
  const [closeTo, setCloseTo] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [stageTab, setStageTab] = useState<StageTab>("all");
  const [pipelineView, setPipelineView] = useState<PipelineView>("board");
  const [page, setPage] = useState(0);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<AdminLead | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<LeadFormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [stageSavingId, setStageSavingId] = useState<string | null>(null);
  const [dragLeadId, setDragLeadId] = useState<string | null>(null);
  const [dragOverStage, setDragOverStage] = useState<LeadStage | null>(null);
  const detailBodyRef = useRef<HTMLDivElement | null>(null);

  /** Keep wheel scroll on the detail body (Cursor preview / nested layout). */
  useEffect(() => {
    const el = detailBodyRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (el.scrollHeight <= el.clientHeight + 1) return;
      const next = el.scrollTop + event.deltaY;
      const max = el.scrollHeight - el.clientHeight;
      el.scrollTop = Math.max(0, Math.min(max, next));
      event.preventDefault();
      event.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [editorOpen, selectedId, nav]);

  useEffect(() => {
    const stored = sessionStorage.getItem(SALES_LOCALE_KEY);
    if (isSalesLocale(stored)) setSalesLocale(stored);
    else if (siteLocale === "en" || siteLocale === "vi") setSalesLocale(siteLocale);
    else setSalesLocale("vi");
    setLocaleReady(true);
    setToken(getStoredAdminToken());
    setTokenReady(true);
  }, [siteLocale]);

  function changeSalesLocale(next: SalesLocale) {
    setSalesLocale(next);
    sessionStorage.setItem(SALES_LOCALE_KEY, next);
  }

  const sourceFilterOptions = useMemo(
    () => [
      { value: "exclude-careers" as const, label: t.filters.excludeCareers },
      { value: "all" as const, label: t.filters.allSources },
      ...LEAD_SOURCES.map((source) => ({
        value: source as SourceFilter,
        label: source,
      })),
    ],
    [t],
  );

  const refresh = useCallback(async (auth: string) => {
    setLoading(true);
    setError("");
    const result = await listAdminLeads(auth, { limit: 1000 });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      if (result.error === "unauthorized") {
        clearStoredAdminToken();
        setToken("");
      }
      return;
    }
    setLeads(result.leads);
    setSelectedId((cur) => {
      if (cur && result.leads.some((l) => l.id === cur)) return cur;
      return result.leads[0]?.id ?? null;
    });
  }, []);

  useEffect(() => {
    if (!tokenReady || !token) return;
    void refresh(token);
  }, [tokenReady, token, refresh]);

  const scoped = useMemo(() => {
    let rows = leads;
    if (sourceFilter === "exclude-careers") {
      rows = rows.filter((l) => l.source !== "careers");
    } else if (sourceFilter !== "all") {
      rows = rows.filter((l) => l.source === sourceFilter);
    }
    if (ownerFilter !== "all") {
      rows = rows.filter((l) => normalizeLeadOwner(l.owner) === ownerFilter);
    }
    if (idleFilter !== "all") {
      rows = rows.filter((l) => idleTone(idleDays(l.lastActivityAt)) === idleFilter);
    }
    if (contactKindFilter !== "all") {
      rows = rows.filter((l) => leadContactKind(l) === contactKindFilter);
    }
    if (atRiskFilter === "yes") {
      rows = rows.filter((l) => l.atRisk);
    } else if (atRiskFilter === "no") {
      rows = rows.filter((l) => !l.atRisk);
    }
    const min = amountMin.trim() === "" ? null : Number(amountMin);
    const max = amountMax.trim() === "" ? null : Number(amountMax);
    if (min != null && Number.isFinite(min)) {
      rows = rows.filter((l) => l.amount >= min);
    }
    if (max != null && Number.isFinite(max)) {
      rows = rows.filter((l) => l.amount <= max);
    }
    if (closeFrom) {
      rows = rows.filter((l) => l.closeDate && l.closeDate >= closeFrom);
    }
    if (closeTo) {
      rows = rows.filter((l) => l.closeDate && l.closeDate <= closeTo);
    }
    const q = (query || tableQuery).trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((l) =>
      [
        l.title,
        l.name,
        l.company,
        l.contact,
        l.note || "",
        l.source,
        l.stage,
        salesStageLabel(salesLocale, l.stage),
        l.owner,
        leadContactKind(l),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [
    leads,
    sourceFilter,
    ownerFilter,
    idleFilter,
    contactKindFilter,
    atRiskFilter,
    amountMin,
    amountMax,
    closeFrom,
    closeTo,
    query,
    tableQuery,
    salesLocale,
  ]);

  const filtersActive =
    sourceFilter !== "exclude-careers" ||
    ownerFilter !== "all" ||
    idleFilter !== "all" ||
    contactKindFilter !== "all" ||
    atRiskFilter !== "all" ||
    Boolean(amountMin.trim()) ||
    Boolean(amountMax.trim()) ||
    Boolean(closeFrom) ||
    Boolean(closeTo) ||
    Boolean(query.trim() || tableQuery.trim());

  const metrics = useMemo(() => {
    const total = scoped.length;
    const qualified = scoped.filter((l) => l.stage === "qualified").length;
    const inProgress = scoped.filter((l) =>
      IN_PROGRESS_STAGES.includes(l.stage),
    ).length;
    const converted = scoped.filter(
      (l) =>
        l.stage === "won" || l.stage === "deliver" || l.stage === "expand",
    ).length;
    const openDeals = scoped.filter((l) => OPEN_STAGES.includes(l.stage));
    const openAmount = openDeals.reduce((s, l) => s + (l.amount || 0), 0);
    const weighted = openDeals.reduce(
      (s, l) => s + (l.amount || 0) * (getProbability(l) / 100),
      0,
    );
    const lost = scoped.filter(
      (l) => l.stage === "lost" || l.stage === "out_of_scope",
    ).length;
    const decided = converted + lost;
    const winRate =
      decided === 0 ? null : Math.round((converted / decided) * 100);
    const atRisk = scoped.filter(
      (l) => l.atRisk || idleDays(l.lastActivityAt) > 6,
    ).length;
    return {
      total,
      qualified,
      inProgress,
      converted,
      openAmount,
      weighted,
      winRate,
      decided,
      atRisk,
    };
  }, [scoped]);

  const teamRows = useMemo(() => {
    return LEAD_OWNERS.map((owner) => {
      const rows = scoped.filter((l) => normalizeLeadOwner(l.owner) === owner);
      const open = rows.filter((l) => OPEN_STAGES.includes(l.stage)).length;
      const won = rows.filter(
        (l) =>
          l.stage === "won" || l.stage === "deliver" || l.stage === "expand",
      ).length;
      const lost = rows.filter(
        (l) => l.stage === "lost" || l.stage === "out_of_scope",
      ).length;
      const decided = won + lost;
      const winRate =
        decided === 0 ? null : Math.round((won / decided) * 100);
      const atRisk = rows.filter(
        (l) => l.atRisk || idleDays(l.lastActivityAt) > 6,
      ).length;
      return { owner, open, won, winRate, decided, atRisk, total: rows.length };
    });
  }, [scoped]);

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = { all: scoped.length };
    for (const stage of STAGE_TABS) {
      counts[stage] = scoped.filter((l) => l.stage === stage).length;
    }
    return counts;
  }, [scoped]);

  const filtered = useMemo(() => {
    if (stageTab === "all") return scoped;
    return scoped.filter((l) => l.stage === stageTab);
  }, [scoped, stageTab]);

  const boardColumns = useMemo(() => {
    const stages: LeadStage[] = [...STAGE_TABS];
    for (const lead of filtered) {
      if (!stages.includes(lead.stage)) stages.push(lead.stage);
    }
    const visible = stageTab === "all" ? stages : stages.filter((s) => s === stageTab);
    return visible.map((stage) => ({
      stage,
      leads: filtered.filter((lead) => lead.stage === stage),
    }));
  }, [filtered, stageTab]);

  useEffect(() => {
    setPage(0);
  }, [
    stageTab,
    query,
    tableQuery,
    sourceFilter,
    ownerFilter,
    idleFilter,
    contactKindFilter,
    atRiskFilter,
    amountMin,
    amountMax,
    closeFrom,
    closeTo,
  ]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = useMemo(() => {
    const start = page * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const selected = useMemo(
    () => leads.find((l) => l.id === selectedId) ?? null,
    [leads, selectedId],
  );

  function clearFilters() {
    setSourceFilter("exclude-careers");
    setOwnerFilter("all");
    setIdleFilter("all");
    setContactKindFilter("all");
    setAtRiskFilter("all");
    setAmountMin("");
    setAmountMax("");
    setCloseFrom("");
    setCloseTo("");
    setQuery("");
    setTableQuery("");
    setStageTab("all");
  }

  function unlockToken(event: FormEvent) {
    event.preventDefault();
    const next = tokenInput.trim();
    if (!next) {
      setError(t.gate.tokenRequired);
      return;
    }
    setStoredAdminToken(next);
    setToken(next);
    setTokenInput("");
    setError("");
  }

  function lockToken() {
    clearStoredAdminToken();
    setToken("");
    setLeads([]);
    setSelectedId(null);
  }

  function selectDeal(id: string) {
    setSelectedId(id);
    setEditorOpen(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({
      ...EMPTY_FORM,
      probability: String(stageDefaultProb("new")),
    });
    setEditorOpen(true);
  }

  function openEdit(lead: AdminLead) {
    setEditing(lead);
    setForm({
      source: leadSourceForWrite(lead),
      name: lead.name,
      contact: lead.contact,
      note: lead.note || "",
      locale: lead.locale || "vi",
      stage: normalizeLeadStage(lead.stage),
      title: lead.title || lead.name,
      company: lead.company,
      amount: String(lead.amount || 0),
      currency: lead.currency || "VND",
      closeDate: lead.closeDate || "",
      probability: String(getProbability(lead)),
      owner: normalizeLeadOwner(lead.owner),
      atRisk: lead.atRisk,
    });
    setEditorOpen(true);
  }

  async function saveLead(event: FormEvent) {
    event.preventDefault();
    if (!token) return;
    const input = toWriteInput(form);
    if (!input.name || !input.contact) {
      setError(t.form.requiredFields);
      return;
    }
    setSaving(true);
    setError("");
    const result = editing
      ? await updateAdminLead(
          token,
          editing.id,
          leadToWrite(editing, {
            ...input,
            payload: {
              ...readPayload(editing),
              ...(input.payload || {}),
            },
          }),
        )
      : await createAdminLead(token, {
          ...input,
          source: input.source || "manual",
        });
    setSaving(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setEditorOpen(false);
    await refresh(token);
  }

  async function applyLeadPatch(
    lead: AdminLead,
    patch: Partial<LeadWriteInput>,
  ) {
    if (!token) return;
    setStageSavingId(lead.id);
    setError("");
    const result = await updateAdminLead(token, lead.id, leadToWrite(lead, patch));
    setStageSavingId(null);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setLeads((cur) =>
      cur.map((row) => (row.id === lead.id ? result.lead : row)),
    );
  }

  async function changeStage(lead: AdminLead, stage: LeadStage) {
    if (!token || lead.stage === stage) return;
    await applyLeadPatch(lead, { stage });
  }

  async function changeOwner(lead: AdminLead, owner: string) {
    const next = normalizeLeadOwner(owner);
    if (!token || lead.owner === next) return;
    await applyLeadPatch(lead, { owner: next });
  }

  async function changeAmount(lead: AdminLead, amount: number) {
    if (!token || lead.amount === amount) return;
    await applyLeadPatch(lead, { amount: Math.max(0, amount) });
  }

  async function changeCloseDate(lead: AdminLead, closeDate: string) {
    if (!token || lead.closeDate === closeDate) return;
    await applyLeadPatch(lead, { closeDate });
  }

  async function changeProbability(lead: AdminLead, probability: number) {
    const next = clampProb(probability);
    if (!token || getProbability(lead) === next) return;
    await applyLeadPatch(lead, {
      payload: { ...readPayload(lead), probability: next },
    });
  }

  function onBoardDragStart(event: DragEvent, leadId: string) {
    setDragLeadId(leadId);
    event.dataTransfer.setData("text/plain", leadId);
    event.dataTransfer.effectAllowed = "move";
  }

  function onBoardDragEnd() {
    setDragLeadId(null);
    setDragOverStage(null);
  }

  function onBoardDragOver(event: DragEvent, stage: LeadStage) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (dragOverStage !== stage) setDragOverStage(stage);
  }

  async function onBoardDrop(event: DragEvent, stage: LeadStage) {
    event.preventDefault();
    const id =
      event.dataTransfer.getData("text/plain") || dragLeadId || "";
    setDragLeadId(null);
    setDragOverStage(null);
    const lead = leads.find((l) => l.id === id);
    if (!lead) return;
    await changeStage(lead, stage);
  }

  async function removeLead(lead: AdminLead) {
    if (!token) return;
    const title = lead.title || lead.name;
    if (!window.confirm(fillTemplate(t.drawer.deleteConfirm, { title }))) {
      return;
    }
    const result = await deleteAdminLead(token, lead.id);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    if (selectedId === lead.id) setSelectedId(null);
    await refresh(token);
  }

  const langSwitch = (
    <div className="df-lang" role="group" aria-label={t.side.langLabel}>
      <button
        type="button"
        className={salesLocale === "vi" ? "is-active" : undefined}
        onClick={() => changeSalesLocale("vi")}
      >
        VI
      </button>
      <button
        type="button"
        className={salesLocale === "en" ? "is-active" : undefined}
        onClick={() => changeSalesLocale("en")}
      >
        EN
      </button>
    </div>
  );

  if (!tokenReady || !localeReady) {
    return (
      <div className="df" data-lenis-prevent data-lenis-prevent-wheel>
        <p className="df__muted">{t.loading}</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="df df--gate" data-lenis-prevent data-lenis-prevent-wheel>
        <div className="df-gate">
          <div className="df-gate__top">
            <div className="df-gate__brand">
              <ThemedLogoImg className="df-mark" width={28} height={28} alt="" />
              <strong>{t.brand}</strong>
            </div>
            {langSwitch}
          </div>
          <h1>{t.gate.title}</h1>
          <p>{t.gate.lead}</p>
          <form onSubmit={unlockToken}>
            <label>
              {t.gate.tokenLabel}
              <input
                type="password"
                autoComplete="off"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder={t.gate.tokenPlaceholder}
              />
            </label>
            {error ? <p className="df__error">{error}</p> : null}
            <button type="submit">{t.gate.submit}</button>
          </form>
          <Link href={assetPath("/demos/")}>{t.gate.back}</Link>
        </div>
      </div>
    );
  }

  const showingFrom = filtered.length === 0 ? 0 : page * PAGE_SIZE + 1;
  const showingTo = Math.min(filtered.length, (page + 1) * PAGE_SIZE);
  const emptyMessage =
    loading
      ? t.table.loading
      : filtersActive || stageTab !== "all"
        ? t.table.emptyFiltered
        : t.table.emptyAll;

  function switchWorkspace(next: WorkspaceId) {
    setWorkspace(next);
    if (next === "sale") setNav("pipeline");
  }

  const crumbLabel =
    workspace === "crm"
      ? t.workspaces.crm
      : workspace === "analytics"
        ? t.workspaces.analytics
        : workspace === "contracts"
          ? t.workspaces.contracts
          : nav === "playbook"
            ? t.side.navPlaybook
            : t.hero.title;

  return (
    <div className="df" data-lenis-prevent data-lenis-prevent-wheel>
      <aside className="df-side" aria-label={t.brand}>
        <div className="df-side__brand">
          <ThemedLogoImg className="df-mark" width={28} height={28} alt="" />
          <div>
            <strong>{t.brand}</strong>
            <em>{t.workspaceName}</em>
          </div>
        </div>

        <p className="df-side__label">{t.workspaces.label}</p>
        <nav className="df-side__nav df-side__workspaces" aria-label={t.workspaces.label}>
          <button
            type="button"
            className={workspace === "sale" ? "is-active" : undefined}
            onClick={() => switchWorkspace("sale")}
          >
            <NavIcon name="pipeline" />
            {t.workspaces.sale}
          </button>
          <button
            type="button"
            className={workspace === "crm" ? "is-active" : undefined}
            onClick={() => switchWorkspace("crm")}
          >
            <NavIcon name="contacts" />
            {t.workspaces.crm}
          </button>
          <button
            type="button"
            className={workspace === "analytics" ? "is-active" : undefined}
            onClick={() => switchWorkspace("analytics")}
          >
            <NavIcon name="overview" />
            {t.workspaces.analytics}
          </button>
          <button
            type="button"
            className={workspace === "contracts" ? "is-active" : undefined}
            onClick={() => switchWorkspace("contracts")}
          >
            <NavIcon name="contracts" />
            {t.workspaces.contracts}
          </button>
        </nav>

        {workspace === "sale" ? (
          <>
            <p className="df-side__label">{t.side.saleGroup}</p>
            <nav className="df-side__nav">
              <button
                type="button"
                className={nav === "pipeline" ? "is-active" : undefined}
                onClick={() => setNav("pipeline")}
              >
                <NavIcon name="deals" />
                {t.side.navPipeline}
              </button>
              <button
                type="button"
                className={nav === "playbook" ? "is-active" : undefined}
                onClick={() => setNav("playbook")}
              >
                <NavIcon name="playbook" />
                {t.side.navPlaybook}
              </button>
              <button type="button" disabled title={t.soon}>
                <NavIcon name="activities" />
                {t.side.navActivities}
                <span className="df-side__soon">{t.soon}</span>
              </button>
            </nav>
          </>
        ) : null}

        {workspace === "crm" ? (
          <>
            <p className="df-side__label">{t.side.crmGroup}</p>
            <nav className="df-side__nav">
              <button type="button" disabled title={t.soon}>
                <NavIcon name="contacts" />
                {t.side.navContacts}
                <span className="df-side__soon">{t.soon}</span>
              </button>
              <button type="button" disabled title={t.soon}>
                <NavIcon name="companies" />
                {t.side.navCompanies}
                <span className="df-side__soon">{t.soon}</span>
              </button>
            </nav>
          </>
        ) : null}

        {workspace === "analytics" ? (
          <>
            <p className="df-side__label">{t.side.analyticsGroup}</p>
            <nav className="df-side__nav">
              <button type="button" className="is-active">
                <NavIcon name="overview" />
                {t.side.navOverview}
              </button>
              <button type="button" disabled title={t.soon}>
                <NavIcon name="reports" />
                {t.side.navReports}
                <span className="df-side__soon">{t.soon}</span>
              </button>
              <button
                type="button"
                onClick={() => void refresh(token)}
              >
                <NavIcon name="overview" />
                {loading ? t.side.refreshing : t.side.refresh}
              </button>
            </nav>
          </>
        ) : null}

        {workspace === "contracts" ? (
          <>
            <p className="df-side__label">{t.side.contractsGroup}</p>
            <nav className="df-side__nav">
              <button type="button" className="is-active">
                <NavIcon name="contracts" />
                {t.side.navContracts}
              </button>
            </nav>
          </>
        ) : null}

        <div className="df-side__foot">
          {langSwitch}
          <Link href={assetPath("/demos/")}>{t.side.demoVault}</Link>
          <button type="button" className="df-side__ghost" onClick={lockToken}>
            {t.side.signOut}
          </button>
          <div className="df-side__user">
            <span className="df-avatar">{ownerInitials(DEFAULT_LEAD_OWNER)}</span>
            <div>
              <strong>{DEFAULT_LEAD_OWNER}</strong>
              <em>
                <i className="df-dot" aria-hidden />
                {t.side.available}
              </em>
            </div>
          </div>
        </div>
      </aside>

      <div className="df-shell">
        <header className="df-topbar">
          <nav className="df-crumb" aria-label="Breadcrumb">
            <span>{t.top.breadcrumbHome}</span>
            <span aria-hidden>/</span>
            <strong>{crumbLabel}</strong>
          </nav>
          <label className="df-topbar__search">
            <span className="df__sr">{t.side.search}</span>
            <span className="df-topbar__search-icon" aria-hidden>
              ⌕
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.top.searchPlaceholder}
            />
          </label>
          <div className="df-topbar__meta">
            {metrics.atRisk > 0 ? (
              <span className="df-chip is-warn">
                {metrics.atRisk} {t.kpi.atRisk}
              </span>
            ) : (
              <span className="df-chip">
                {metrics.total} deals
              </span>
            )}
          </div>
        </header>

        <div className="df-canvas">
          {error ? <p className="df__error">{error}</p> : null}

          {workspace === "crm" ? (
            <div className="df-panel">
              <div className="df-panel__head">
                <div>
                  <h1>{t.crmPage.title}</h1>
                  <p>{t.crmPage.description}</p>
                </div>
              </div>
              <div className="df-soon-card">
                <h2>{t.crmPage.soonTitle}</h2>
                <p>{t.crmPage.soonBody}</p>
                <button
                  type="button"
                  className="df-btn"
                  onClick={() => switchWorkspace("sale")}
                >
                  {t.workspaces.sale}
                </button>
              </div>
            </div>
          ) : null}

          {workspace === "analytics" ? (
            <div className="df-panel">
              <div className="df-panel__head">
                <div>
                  <h1>{t.analyticsPage.title}</h1>
                  <p>{t.analyticsPage.description}</p>
                </div>
                <button
                  type="button"
                  className="df-btn is-ghost"
                  onClick={() => void refresh(token)}
                >
                  {loading ? t.side.refreshing : t.side.refresh}
                </button>
              </div>

              <section className="df-kpis" aria-label="KPIs">
                <article className="df-kpi">
                  <p>{t.kpi.totalLeads}</p>
                  <strong>{metrics.total}</strong>
                </article>
                <article className="df-kpi">
                  <p>{t.kpi.converted}</p>
                  <strong>{metrics.converted}</strong>
                </article>
                <article className="df-kpi">
                  <p>{t.forecast.winRate}</p>
                  <WinRateDisplay
                    rate={metrics.winRate}
                    decided={metrics.decided}
                    t={t}
                  />
                </article>
                <article className={`df-kpi${metrics.atRisk ? " is-warn" : ""}`}>
                  <p>{t.kpi.atRisk}</p>
                  <strong>{metrics.atRisk}</strong>
                </article>
              </section>

              <section className="df-forecast" aria-labelledby="df-forecast-h">
                <div className="df-forecast__head">
                  <h2 id="df-forecast-h">{t.forecast.title}</h2>
                  <p>{t.forecast.hint}</p>
                </div>
                <div className="df-forecast__grid">
                  <article>
                    <p>{t.forecast.pipeline}</p>
                    <strong>
                      {formatMoney(metrics.openAmount, "VND", salesLocale)}
                    </strong>
                  </article>
                  <article>
                    <p>{t.forecast.weighted}</p>
                    <strong>
                      {formatMoney(metrics.weighted, "VND", salesLocale)}
                    </strong>
                  </article>
                  <article>
                    <p>{t.forecast.winRate}</p>
                    <WinRateDisplay
                      rate={metrics.winRate}
                      decided={metrics.decided}
                      t={t}
                    />
                  </article>
                </div>
              </section>

              <section className="df-team" aria-labelledby="df-team-h">
                <h2 id="df-team-h">{t.teamKpi.title}</h2>
                <p className="df__muted">
                  {t.teamKpi.soonCalls} · {t.teamKpi.soonMeetings}
                </p>
                <div className="df-table-wrap">
                  <table className="df-table">
                    <thead>
                      <tr>
                        <th>{t.teamKpi.owner}</th>
                        <th className="is-num">{t.teamKpi.openDeals}</th>
                        <th className="is-num">{t.teamKpi.won}</th>
                        <th className="is-num">{t.teamKpi.winRate}</th>
                        <th className="is-num">{t.teamKpi.atRisk}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamRows.map((row) => (
                        <tr key={row.owner}>
                          <td>
                            <span className="df-owner">
                              <span className="df-avatar df-avatar--sm">
                                {ownerInitials(row.owner)}
                              </span>
                              {row.owner}
                            </span>
                          </td>
                          <td className="is-num">{row.open}</td>
                          <td className="is-num">{row.won}</td>
                          <td className="is-num">
                            {row.winRate == null ? "—" : `${row.winRate}%`}
                            {row.decided > 0 ? (
                              <em className="df-kpi__sub df-kpi__sub--inline">
                                {fillTemplate(t.forecast.closedSample, {
                                  n: row.decided,
                                })}
                              </em>
                            ) : null}
                          </td>
                          <td className="is-num">{row.atRisk}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          ) : null}

          {workspace === "contracts" ? (
            <div className="df-panel">
              <div className="df-panel__head">
                <div>
                  <h1>{t.contractsPage.title}</h1>
                  <p>{t.contractsPage.description}</p>
                </div>
              </div>
              <div className="df-table-card">
                <div className="df-table-wrap">
                  <table className="df-table">
                    <thead>
                      <tr>
                        <th>{t.contractsPage.colTitle}</th>
                        <th>{t.contractsPage.colClient}</th>
                        <th>{t.contractsPage.colStatus}</th>
                        <th>{t.contractsPage.colDate}</th>
                        <th>{t.contractsPage.colActions}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ADMIN_CONTRACTS.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="df-table__empty">
                            {t.contractsPage.empty}
                          </td>
                        </tr>
                      ) : (
                        ADMIN_CONTRACTS.map((c) => {
                          const statusLabel =
                            c.status === "draft"
                              ? t.contractsPage.statusDraft
                              : c.status === "signed"
                                ? t.contractsPage.statusSigned
                                : t.contractsPage.statusReady;
                          return (
                            <tr key={c.id}>
                              <td>
                                <strong>{contractTitle(c, salesLocale)}</strong>
                              </td>
                              <td>{c.client}</td>
                              <td>
                                <span
                                  className={`df-chip${c.status === "ready" ? " is-ok" : ""}`}
                                >
                                  {statusLabel}
                                </span>
                              </td>
                              <td className="df__muted">
                                {c.signedAt ?? "—"}
                              </td>
                              <td>
                                <div className="df-row-actions is-visible">
                                  <a
                                    className="df-btn is-ghost is-sm"
                                    href={assetPath(c.href)}
                                  >
                                    {t.contractsPage.view}
                                  </a>
                                  <a
                                    className="df-btn is-sm"
                                    href={assetPath(`${c.href}?print=1`)}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {t.contractsPage.printPdf}
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}

          {workspace === "sale" && nav === "pipeline" ? (
            <div className="df-panel">
              <div className="df-panel__head">
                <div>
                  <h1>{t.hero.title}</h1>
                  <p>{t.hero.description}</p>
                </div>
                <div className="df-panel__actions">
                  <button
                    type="button"
                    className={`df-btn is-ghost${filtersOpen || filtersActive ? " is-on" : ""}`}
                    onClick={() => setFiltersOpen((v) => !v)}
                  >
                    {t.top.filters}
                    {filtersActive ? (
                      <em className="df-btn__dot" aria-label={t.top.filtersActive} />
                    ) : null}
                  </button>
                  <button type="button" className="df-btn" onClick={openCreate}>
                    {t.hero.newDeal}
                  </button>
                </div>
              </div>

              <section className="df-kpis" aria-label="KPIs">
                <article className="df-kpi">
                  <p>{t.kpi.totalLeads}</p>
                  <strong>{metrics.total}</strong>
                </article>
                <article className="df-kpi">
                  <p>{t.kpi.qualified}</p>
                  <strong>{metrics.qualified}</strong>
                </article>
                <article className="df-kpi">
                  <p>{t.kpi.inProgress}</p>
                  <strong>{metrics.inProgress}</strong>
                </article>
                <article className="df-kpi">
                  <p>{t.kpi.converted}</p>
                  <strong>{metrics.converted}</strong>
                </article>
                <article className="df-kpi">
                  <p>{t.kpi.pipelineValue}</p>
                  <strong>
                    {formatMoney(metrics.openAmount, "VND", salesLocale)}
                  </strong>
                </article>
                <article className={`df-kpi${metrics.atRisk ? " is-warn" : ""}`}>
                  <p>{t.kpi.atRisk}</p>
                  <strong>{metrics.atRisk}</strong>
                </article>
              </section>

              <section className="df-forecast df-forecast--compact" aria-labelledby="df-sale-forecast-h">
                <div className="df-forecast__head">
                  <h2 id="df-sale-forecast-h">{t.forecast.title}</h2>
                  <p>{t.forecast.hint}</p>
                </div>
                <div className="df-forecast__grid">
                  <article>
                    <p>{t.forecast.pipeline}</p>
                    <strong>
                      {formatMoney(metrics.openAmount, "VND", salesLocale)}
                    </strong>
                  </article>
                  <article>
                    <p>{t.forecast.weighted}</p>
                    <strong>
                      {formatMoney(metrics.weighted, "VND", salesLocale)}
                    </strong>
                  </article>
                  <article>
                    <p>{t.forecast.winRate}</p>
                    <WinRateDisplay
                      rate={metrics.winRate}
                      decided={metrics.decided}
                      t={t}
                    />
                  </article>
                </div>
              </section>

              {filtersOpen ? (
                <div className="df-filters">
                  <label>
                    <span>{t.filters.stage}</span>
                    <select
                      className="df-select"
                      value={stageTab}
                      onChange={(e) =>
                        setStageTab(e.target.value as StageTab)
                      }
                    >
                      <option value="all">{t.filters.stageAll}</option>
                      {STAGE_TABS.map((stage) => (
                        <option key={stage} value={stage}>
                          {salesStageShort(salesLocale, stage)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>{t.filters.owner}</span>
                    <select
                      className="df-select"
                      value={ownerFilter}
                      onChange={(e) => setOwnerFilter(e.target.value)}
                    >
                      <option value="all">{t.filters.ownerAll}</option>
                      {LEAD_OWNERS.map((owner) => (
                        <option key={owner} value={owner}>
                          {owner}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>{t.filters.source}</span>
                    <select
                      className="df-select"
                      value={sourceFilter}
                      onChange={(e) =>
                        setSourceFilter(e.target.value as SourceFilter)
                      }
                    >
                      {sourceFilterOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>{t.filters.contactKind}</span>
                    <select
                      className="df-select"
                      value={contactKindFilter}
                      onChange={(e) =>
                        setContactKindFilter(
                          e.target.value as ContactKindFilter,
                        )
                      }
                    >
                      <option value="all">{t.filters.contactKindAll}</option>
                      <option value="hotline">
                        {t.filters.contactKindHotline}
                      </option>
                      <option value="owner">
                        {t.filters.contactKindOwner}
                      </option>
                      <option value="unknown">
                        {t.filters.contactKindUnknown}
                      </option>
                    </select>
                  </label>
                  <label>
                    <span>{t.filters.atRisk}</span>
                    <select
                      className="df-select"
                      value={atRiskFilter}
                      onChange={(e) =>
                        setAtRiskFilter(e.target.value as AtRiskFilter)
                      }
                    >
                      <option value="all">{t.filters.atRiskAll}</option>
                      <option value="yes">{t.filters.atRiskYes}</option>
                      <option value="no">{t.filters.atRiskNo}</option>
                    </select>
                  </label>
                  <label>
                    <span>{t.filters.idle}</span>
                    <select
                      className="df-select"
                      value={idleFilter}
                      onChange={(e) =>
                        setIdleFilter(e.target.value as IdleFilter)
                      }
                    >
                      <option value="all">{t.filters.idleAll}</option>
                      <option value="ok">{t.filters.idleOk}</option>
                      <option value="warn">{t.filters.idleWarn}</option>
                      <option value="bad">{t.filters.idleBad}</option>
                    </select>
                  </label>
                  <label>
                    <span>{t.filters.amountMin}</span>
                    <input
                      className="df-input"
                      type="number"
                      min={0}
                      inputMode="numeric"
                      value={amountMin}
                      onChange={(e) => setAmountMin(e.target.value)}
                      placeholder="0"
                    />
                  </label>
                  <label>
                    <span>{t.filters.amountMax}</span>
                    <input
                      className="df-input"
                      type="number"
                      min={0}
                      inputMode="numeric"
                      value={amountMax}
                      onChange={(e) => setAmountMax(e.target.value)}
                      placeholder="∞"
                    />
                  </label>
                  <label>
                    <span>{t.filters.closeFrom}</span>
                    <input
                      className="df-input"
                      type="date"
                      value={closeFrom}
                      onChange={(e) => setCloseFrom(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>{t.filters.closeTo}</span>
                    <input
                      className="df-input"
                      type="date"
                      value={closeTo}
                      onChange={(e) => setCloseTo(e.target.value)}
                    />
                  </label>
                  {filtersActive ? (
                    <button
                      type="button"
                      className="df-link"
                      onClick={clearFilters}
                    >
                      {t.top.clearFilters}
                    </button>
                  ) : null}
                </div>
              ) : null}

              {filtersActive ? (
                <div className="df-filter-chips" aria-label={t.top.filtersActive}>
                  {stageTab !== "all" ? (
                    <span className="df-chip">
                      {t.filters.stage}: {salesStageShort(salesLocale, stageTab)}
                    </span>
                  ) : null}
                  {ownerFilter !== "all" ? (
                    <span className="df-chip">{t.filters.owner}: {ownerFilter}</span>
                  ) : null}
                  {sourceFilter !== "exclude-careers" ? (
                    <span className="df-chip">
                      {t.filters.source}:{" "}
                      {sourceFilter === "all"
                        ? t.filters.allSources
                        : sourceFilter}
                    </span>
                  ) : null}
                  {contactKindFilter !== "all" ? (
                    <span className="df-chip">
                      {t.filters.contactKind}: {contactKindFilter}
                    </span>
                  ) : null}
                  {atRiskFilter !== "all" ? (
                    <span className="df-chip">
                      {t.filters.atRisk}: {atRiskFilter}
                    </span>
                  ) : null}
                  {idleFilter !== "all" ? (
                    <span className="df-chip">
                      {t.filters.idle}: {idleFilter}
                    </span>
                  ) : null}
                  {amountMin.trim() || amountMax.trim() ? (
                    <span className="df-chip">
                      Value: {amountMin || "0"}–{amountMax || "∞"}
                    </span>
                  ) : null}
                  {closeFrom || closeTo ? (
                    <span className="df-chip">
                      Close: {closeFrom || "…"} → {closeTo || "…"}
                    </span>
                  ) : null}
                  {query.trim() || tableQuery.trim() ? (
                    <span className="df-chip">
                      ⌕ {query.trim() || tableQuery.trim()}
                    </span>
                  ) : null}
                  <button type="button" className="df-link" onClick={clearFilters}>
                    {t.top.clearFilters}
                  </button>
                </div>
              ) : null}

              <section className="df-table-card">
                <div className="df-table-tools">
                  <div className="df-view" role="tablist" aria-label={t.view.label}>
                    <button
                      type="button"
                      role="tab"
                      className={pipelineView === "list" ? "is-active" : undefined}
                      aria-selected={pipelineView === "list"}
                      onClick={() => setPipelineView("list")}
                    >
                      {t.view.list}
                    </button>
                    <button
                      type="button"
                      role="tab"
                      className={pipelineView === "board" ? "is-active" : undefined}
                      aria-selected={pipelineView === "board"}
                      onClick={() => setPipelineView("board")}
                    >
                      {t.view.board}
                    </button>
                  </div>
                  <div className="df-stages" role="tablist" aria-label="Stages">
                    <button
                      type="button"
                      role="tab"
                      className={stageTab === "all" ? "is-active" : undefined}
                      aria-selected={stageTab === "all"}
                      onClick={() => setStageTab("all")}
                    >
                      {t.tabs.all}
                      <em>{stageCounts.all}</em>
                    </button>
                    {STAGE_TABS.map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        role="tab"
                        className={stageTab === stage ? "is-active" : undefined}
                        aria-selected={stageTab === stage}
                        onClick={() => setStageTab(stage)}
                      >
                        {salesStageShort(salesLocale, stage)}
                        <em>{stageCounts[stage] ?? 0}</em>
                      </button>
                    ))}
                  </div>
                  <input
                    className="df-input"
                    value={tableQuery}
                    onChange={(e) => setTableQuery(e.target.value)}
                    placeholder={t.table.searchLeads}
                    aria-label={t.table.searchLeads}
                  />
                </div>

                {pipelineView === "board" ? (
                  <div className="df-board" role="region" aria-label={t.view.board}>
                    {boardColumns.map((column) => {
                      const colSum = column.leads.reduce(
                        (s, l) => s + (l.amount || 0),
                        0,
                      );
                      return (
                      <section
                        key={column.stage}
                        className={`df-board__col${
                          dragOverStage === column.stage ? " is-drop" : ""
                        }`}
                        onDragOver={(e) => onBoardDragOver(e, column.stage)}
                        onDragLeave={() => {
                          if (dragOverStage === column.stage) {
                            setDragOverStage(null);
                          }
                        }}
                        onDrop={(e) => void onBoardDrop(e, column.stage)}
                      >
                        <header className="df-board__head">
                          <span className={`df-status ${stageTone(column.stage)}`}>
                            {salesStageShort(salesLocale, column.stage)}
                          </span>
                          <div className="df-board__head-meta">
                            <em>{column.leads.length}</em>
                            <span>
                              {fillTemplate(t.board.columnSum, {
                                value: formatMoney(colSum, "VND", salesLocale),
                              })}
                            </span>
                          </div>
                        </header>
                        <div
                          className="df-board__list"
                          data-lenis-prevent
                          data-lenis-prevent-wheel
                        >
                          {column.leads.length === 0 ? (
                            <p className="df-board__empty">
                              {dragOverStage === column.stage
                                ? t.board.dropHere
                                : t.board.empty}
                            </p>
                          ) : (
                            column.leads.map((lead) => {
                              const idle = idleDays(lead.lastActivityAt);
                              const prob = getProbability(lead);
                              return (
                                <article
                                  key={lead.id}
                                  draggable
                                  className={
                                    selectedId === lead.id
                                      ? "df-board-card is-selected"
                                      : dragLeadId === lead.id
                                        ? "df-board-card is-dragging"
                                        : "df-board-card"
                                  }
                                  onDragStart={(e) =>
                                    onBoardDragStart(e, lead.id)
                                  }
                                  onDragEnd={onBoardDragEnd}
                                  onClick={() => selectDeal(lead.id)}
                                >
                                  <strong>{lead.title || lead.name}</strong>
                                  <span>{lead.company || lead.name}</span>
                                  <span className="df-board-card__meta">
                                    <InlineQuickField
                                      kind="amount"
                                      lead={lead}
                                      salesLocale={salesLocale}
                                      t={t}
                                      disabled={stageSavingId === lead.id}
                                      onSaveAmount={changeAmount}
                                      onSaveClose={changeCloseDate}
                                      onSaveProb={changeProbability}
                                    />
                                    <em className="df-board-card__prob">{prob}%</em>
                                    <span
                                      className={`df-idle is-${idleTone(idle)}`}
                                    >
                                      {fillTemplate(t.board.idle, { n: idle })}
                                    </span>
                                  </span>
                                  <span className="df-board-card__foot">
                                    <span className="df-owner">
                                      <span className="df-avatar df-avatar--sm">
                                        {ownerInitials(lead.owner)}
                                      </span>
                                      {lead.owner}
                                    </span>
                                    <span className="df-next">
                                      {suggestedNext(lead, t)}
                                    </span>
                                  </span>
                                </article>
                              );
                            })
                          )}
                        </div>
                      </section>
                      );
                    })}
                  </div>
                ) : (
                <>
                <div className="df-table-wrap">
                  <table className="df-table">
                    <thead>
                      <tr>
                        <th>{t.table.lead}</th>
                        <th>{t.table.company}</th>
                        <th>{t.table.stage}</th>
                        <th className="is-num">{t.table.amount}</th>
                        <th className="is-num">{t.table.probability}</th>
                        <th>{t.table.closeDate}</th>
                        <th>{t.table.source}</th>
                        <th>{t.table.owner}</th>
                        <th>{t.table.lastActivity}</th>
                        <th>{t.table.idle}</th>
                        <th>{t.table.nextAction}</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {pageRows.length === 0 ? (
                        <tr>
                          <td colSpan={12} className="df-table__empty">
                            <strong>{emptyMessage}</strong>
                            {!loading ? (
                              <p>{t.table.emptyHint}</p>
                            ) : null}
                            {!loading ? (
                              <button
                                type="button"
                                className="df-btn"
                                onClick={openCreate}
                              >
                                {t.hero.newDeal}
                              </button>
                            ) : null}
                          </td>
                        </tr>
                      ) : (
                        pageRows.map((lead) => {
                          const idle = idleDays(lead.lastActivityAt);
                          const secondary = leadSecondary(lead);
                          return (
                            <tr
                              key={lead.id}
                              className={
                                selectedId === lead.id ? "is-selected" : undefined
                              }
                              onClick={() => selectDeal(lead.id)}
                            >
                              <td>
                                <div className="df-name-cell">
                                  <span className="df-avatar" aria-hidden>
                                    {leadInitials(lead)}
                                  </span>
                                  <div>
                                    <strong>{lead.title || lead.name}</strong>
                                    {secondary ? <span>{secondary}</span> : null}
                                  </div>
                                </div>
                              </td>
                              <td className="df-cell-muted">
                                {lead.company || "—"}
                              </td>
                              <td>
                                <span
                                  className={`df-status ${stageTone(lead.stage)}`}
                                >
                                  {salesStageShort(salesLocale, lead.stage)}
                                </span>
                              </td>
                              <td className="is-num">
                                <InlineQuickField
                                  kind="amount"
                                  lead={lead}
                                  salesLocale={salesLocale}
                                  t={t}
                                  disabled={stageSavingId === lead.id}
                                  onSaveAmount={changeAmount}
                                  onSaveClose={changeCloseDate}
                                  onSaveProb={changeProbability}
                                />
                              </td>
                              <td className="is-num">
                                <InlineQuickField
                                  kind="prob"
                                  lead={lead}
                                  salesLocale={salesLocale}
                                  t={t}
                                  disabled={stageSavingId === lead.id}
                                  onSaveAmount={changeAmount}
                                  onSaveClose={changeCloseDate}
                                  onSaveProb={changeProbability}
                                />
                              </td>
                              <td>
                                <InlineQuickField
                                  kind="close"
                                  lead={lead}
                                  salesLocale={salesLocale}
                                  t={t}
                                  disabled={stageSavingId === lead.id}
                                  onSaveAmount={changeAmount}
                                  onSaveClose={changeCloseDate}
                                  onSaveProb={changeProbability}
                                />
                              </td>
                              <td className="df-cell-muted">{lead.source}</td>
                              <td>
                                <span className="df-owner">
                                  <span className="df-avatar df-avatar--sm">
                                    {ownerInitials(lead.owner)}
                                  </span>
                                  {lead.owner}
                                </span>
                              </td>
                              <td className="df-cell-muted">
                                {relativeActivity(
                                  lead.lastActivityAt,
                                  salesLocale,
                                )}
                              </td>
                              <td>
                                <span
                                  className={`df-idle is-${idleTone(idle)}`}
                                >
                                  {fillTemplate(t.board.idle, { n: idle })}
                                </span>
                              </td>
                              <td>
                                <span className="df-next">
                                  {suggestedNext(lead, t)}
                                </span>
                              </td>
                              <td className="df-row-actions">
                                <button
                                  type="button"
                                  className="df-link"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openEdit(lead);
                                  }}
                                >
                                  {t.table.edit}
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="df-table-foot">
                  <span>
                    {fillTemplate(t.table.showing, {
                      from: showingFrom,
                      to: showingTo,
                      total: filtered.length,
                    })}
                  </span>
                  <div className="df-pager">
                    <button
                      type="button"
                      disabled={page <= 0}
                      onClick={() => setPage((p) => Math.max(0, p - 1))}
                    >
                      ‹
                    </button>
                    <em>
                      {page + 1}/{pageCount}
                    </em>
                    <button
                      type="button"
                      disabled={page >= pageCount - 1}
                      onClick={() =>
                        setPage((p) => Math.min(pageCount - 1, p + 1))
                      }
                    >
                      ›
                    </button>
                  </div>
                </div>
                </>
                )}
              </section>
            </div>
          ) : null}

          {workspace === "sale" && nav === "playbook" ? (
            <div className="df-panel df-playbook">
              <h1>{t.playbook.title}</h1>
              <p className="df-playbook__intro">{t.playbook.intro}</p>
              <ul className="df-playbook__principles">
                {t.playbook.principles.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <ol className="df-playbook__steps">
                {t.playbook.steps.map((step) => (
                  <li key={step.stage}>
                    <div>
                      <span className={`df-status ${stageTone(step.stage)}`}>
                        {salesStageLabel(salesLocale, step.stage)}
                      </span>
                      <strong>{step.title}</strong>
                    </div>
                    <p>{step.body}</p>
                    <dl>
                      <div>
                        <dt>{t.playbook.sla}</dt>
                        <dd>{step.sla}</dd>
                      </div>
                      <div>
                        <dt>{t.playbook.output}</dt>
                        <dd>{step.output}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ol>
              <div className="df-playbook__qualify">
                <h2>{t.playbook.qualifyTitle}</h2>
                <ul>
                  {t.playbook.qualify.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {workspace !== "sale" ? null : editorOpen ? (
        <aside className="df-detail" aria-labelledby="df-detail-h">
          <header>
            <div>
              <p className="df-side__label">{t.drawer.lead}</p>
              <h2 id="df-detail-h">
                {editing ? t.form.editTitle : t.form.newTitle}
              </h2>
            </div>
          </header>
          <div
            className="df-detail__body"
            ref={detailBodyRef}
            tabIndex={0}
          >
            <form className="df-detail__form" onSubmit={saveLead}>
              <p className="df-form__section">{t.form.sectionBasic}</p>
              <label>
                {t.form.dealTitle}
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm((c) => ({ ...c, title: e.target.value }))
                  }
                  placeholder={t.form.dealTitlePh}
                />
              </label>
              <label>
                {t.form.company}
                <input
                  value={form.company}
                  onChange={(e) =>
                    setForm((c) => ({ ...c, company: e.target.value }))
                  }
                />
              </label>
              <div className="df-detail__form-row">
                <label>
                  {t.form.contactName}
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, name: e.target.value }))
                    }
                  />
                </label>
                <label>
                  {t.form.phone}
                  <input
                    required
                    value={form.contact}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, contact: e.target.value }))
                    }
                  />
                </label>
              </div>

              <p className="df-form__section">{t.form.sectionSales}</p>
              <div className="df-detail__form-row">
                <label>
                  {t.form.amount}
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={form.amount}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, amount: e.target.value }))
                    }
                  />
                </label>
                <label>
                  {t.form.currency}
                  <input
                    value={form.currency}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, currency: e.target.value }))
                    }
                  />
                </label>
              </div>
              <div className="df-detail__form-row">
                <label>
                  {t.form.stage}
                  <select
                    value={form.stage}
                    onChange={(e) => {
                      const stage = e.target.value as LeadStage;
                      setForm((c) => ({
                        ...c,
                        stage,
                        probability: String(stageDefaultProb(stage)),
                      }));
                    }}
                  >
                    {LEAD_STAGES.map((s) => (
                      <option key={s} value={s}>
                        {salesStageLabel(salesLocale, s)}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {t.form.closeDate}
                  <input
                    type="date"
                    value={form.closeDate.slice(0, 10)}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, closeDate: e.target.value }))
                    }
                  />
                </label>
              </div>
              <div className="df-detail__form-row">
                <label>
                  {t.form.probability}
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={5}
                    value={form.probability}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, probability: e.target.value }))
                    }
                  />
                </label>
                <label>
                  {t.form.owner}
                  <select
                    value={normalizeLeadOwner(form.owner)}
                    onChange={(e) =>
                      setForm((c) => ({ ...c, owner: e.target.value }))
                    }
                  >
                    {LEAD_OWNERS.map((owner) => (
                      <option key={owner} value={owner}>
                        {owner}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="df-detail__form-row">
                <label>
                  {t.form.source}
                  <select
                    value={form.source}
                    onChange={(e) =>
                      setForm((c) => ({
                        ...c,
                        source: e.target.value as AdminLeadSource,
                      }))
                    }
                  >
                    {LEAD_SOURCES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <span />
              </div>
              <label className="df-detail__check">
                <input
                  type="checkbox"
                  checked={form.atRisk}
                  onChange={(e) =>
                    setForm((c) => ({ ...c, atRisk: e.target.checked }))
                  }
                />
                {t.form.atRisk}
              </label>

              <p className="df-form__section">{t.form.sectionContext}</p>
              <label>
                {t.form.note}
                <textarea
                  rows={4}
                  value={form.note}
                  onChange={(e) =>
                    setForm((c) => ({ ...c, note: e.target.value }))
                  }
                />
              </label>
              <div className="df-detail__form-actions">
                <button
                  type="button"
                  className="df-btn is-ghost"
                  onClick={() => setEditorOpen(false)}
                >
                  {t.form.cancel}
                </button>
                <button type="submit" className="df-btn" disabled={saving}>
                  {saving ? t.form.saving : t.form.save}
                </button>
              </div>
            </form>
          </div>
        </aside>
      ) : selected ? (
        <aside className="df-detail" aria-labelledby="df-detail-h">
          <header className="df-detail__head">
            <div>
              <p className="df-side__label">{t.drawer.lead}</p>
              <h2 id="df-detail-h">{selected.title || selected.name}</h2>
              <p className="df-detail__sub">
                {selected.company || selected.name}
              </p>
            </div>
            <select
              className="df-select"
              value={selected.stage}
              disabled={stageSavingId === selected.id}
              aria-label={t.drawer.stage}
              onChange={(e) =>
                void changeStage(selected, e.target.value as LeadStage)
              }
            >
              {LEAD_STAGES.map((s) => (
                <option key={s} value={s}>
                  {salesStageLabel(salesLocale, s)}
                </option>
              ))}
            </select>
          </header>
          <div
            className="df-detail__body"
            ref={detailBodyRef}
            tabIndex={0}
          >
            <section className="df-detail__block">
              <h3>{t.drawer.contactSection}</h3>
              <dl>
                <div>
                  <dt>{t.drawer.contact}</dt>
                  <dd>{selected.name}</dd>
                </div>
                <div>
                  <dt>{t.drawer.phone}</dt>
                  <dd>
                    <a href={`tel:${selected.contact.replace(/\s/g, "")}`}>
                      {selected.contact}
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="df-detail__block">
              <h3>{t.drawer.dealSection}</h3>
              <dl>
                <div>
                  <dt>{t.drawer.amount}</dt>
                  <dd>
                    <InlineQuickField
                      kind="amount"
                      lead={selected}
                      salesLocale={salesLocale}
                      t={t}
                      disabled={stageSavingId === selected.id}
                      onSaveAmount={changeAmount}
                      onSaveClose={changeCloseDate}
                      onSaveProb={changeProbability}
                    />
                  </dd>
                </div>
                <div>
                  <dt>{t.drawer.probability}</dt>
                  <dd>
                    <InlineQuickField
                      kind="prob"
                      lead={selected}
                      salesLocale={salesLocale}
                      t={t}
                      disabled={stageSavingId === selected.id}
                      onSaveAmount={changeAmount}
                      onSaveClose={changeCloseDate}
                      onSaveProb={changeProbability}
                    />
                  </dd>
                </div>
                <div>
                  <dt>{t.drawer.close}</dt>
                  <dd>
                    <InlineQuickField
                      kind="close"
                      lead={selected}
                      salesLocale={salesLocale}
                      t={t}
                      disabled={stageSavingId === selected.id}
                      onSaveAmount={changeAmount}
                      onSaveClose={changeCloseDate}
                      onSaveProb={changeProbability}
                    />
                  </dd>
                </div>
                <div>
                  <dt>{t.drawer.owner}</dt>
                  <dd>
                    <select
                      className="df-select df-select--block"
                      value={normalizeLeadOwner(selected.owner)}
                      disabled={stageSavingId === selected.id}
                      onChange={(e) =>
                        void changeOwner(selected, e.target.value)
                      }
                    >
                      {LEAD_OWNERS.map((owner) => (
                        <option key={owner} value={owner}>
                          {owner}
                        </option>
                      ))}
                    </select>
                  </dd>
                </div>
                <div>
                  <dt>{t.drawer.account}</dt>
                  <dd>{selected.company || "—"}</dd>
                </div>
              </dl>
            </section>

            <section className="df-detail__block">
              <h3>{t.drawer.activitySection}</h3>
              <dl>
                <div>
                  <dt>{t.drawer.lastActivity}</dt>
                  <dd>
                    {relativeActivity(selected.lastActivityAt, salesLocale)}
                  </dd>
                </div>
                <div>
                  <dt>{t.drawer.idle}</dt>
                  <dd>
                    <span
                      className={`df-idle is-${idleTone(idleDays(selected.lastActivityAt))}`}
                    >
                      {fillTemplate(t.board.idle, {
                        n: idleDays(selected.lastActivityAt),
                      })}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt>{t.drawer.nextAction}</dt>
                  <dd>
                    <span className="df-next">{suggestedNext(selected, t)}</span>
                  </dd>
                </div>
              </dl>
              <p className="df__muted df-detail__soon">{t.drawer.tasksSoon}</p>
            </section>

            <section className="df-detail__block">
              <h3>{t.drawer.notesSection}</h3>
              <p className="df-detail__note">
                {selected.note?.trim() ? (
                  selected.note.trim()
                ) : (
                  <button
                    type="button"
                    className="df-inline-btn is-empty"
                    onClick={() => openEdit(selected)}
                  >
                    {t.drawer.setField}
                  </button>
                )}
              </p>
              <p className="df__muted df-detail__soon">{t.drawer.filesSoon}</p>
            </section>

            <section className="df-detail__block">
              <h3>{t.drawer.profile360}</h3>
              <p className="df__muted">{t.drawer.profile360Soon}</p>
            </section>

            <section className="df-detail__block">
              <h3>{t.drawer.timelineSection}</h3>
              <ol className="df-timeline">
                <li>
                  <span className="df-timeline__dot" aria-hidden />
                  <div>
                    <strong>{t.drawer.created}</strong>
                    <em>
                      {relativeActivity(selected.createdAt, salesLocale)}
                    </em>
                  </div>
                </li>
                <li>
                  <span className="df-timeline__dot" aria-hidden />
                  <div>
                    <strong>
                      {fillTemplate(t.drawer.stageChanged, {
                        stage: salesStageShort(salesLocale, selected.stage),
                      })}
                    </strong>
                    <em>
                      {relativeActivity(
                        selected.lastActivityAt || selected.createdAt,
                        salesLocale,
                      )}
                    </em>
                  </div>
                </li>
                {selected.lastActivityAt &&
                selected.lastActivityAt !== selected.createdAt ? (
                  <li>
                    <span className="df-timeline__dot" aria-hidden />
                    <div>
                      <strong>{t.drawer.activityTouch}</strong>
                      <em>
                        {relativeActivity(
                          selected.lastActivityAt,
                          salesLocale,
                        )}
                      </em>
                    </div>
                  </li>
                ) : null}
                {selected.note?.trim() ? (
                  <li>
                    <span className="df-timeline__dot" aria-hidden />
                    <div>
                      <strong>{t.drawer.noteOnFile}</strong>
                      <em className="df-timeline__note">
                        {selected.note.trim()}
                      </em>
                    </div>
                  </li>
                ) : null}
                {!selected.note?.trim() &&
                (!selected.lastActivityAt ||
                  selected.lastActivityAt === selected.createdAt) ? (
                  <li className="df-timeline__muted">
                    <span className="df-timeline__dot" aria-hidden />
                    <div>
                      <em>{t.drawer.noTimeline}</em>
                    </div>
                  </li>
                ) : null}
              </ol>
            </section>
          </div>
          <footer className="df-detail__foot">
            <button
              type="button"
              className="df-btn"
              onClick={() => openEdit(selected)}
            >
              {t.drawer.edit}
            </button>
            <button
              type="button"
              className="df-btn is-ghost is-danger"
              onClick={() => void removeLead(selected)}
            >
              {t.drawer.delete}
            </button>
          </footer>
        </aside>
      ) : (
        <aside className="df-detail df-detail--empty" aria-live="polite">
          <p className="df-side__label">{t.drawer.lead}</p>
          <h2>{t.drawer.emptyTitle}</h2>
          <p className="df__muted">{t.drawer.emptyBody}</p>
          <button type="button" className="df-btn" onClick={openCreate}>
            {t.hero.newDeal}
          </button>
        </aside>
      )}
    </div>
  );
}
