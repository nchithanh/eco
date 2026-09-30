"use client";

import { useMemo, useState } from "react";
import { assetPath } from "@/lib/asset";
import {
  CUSTOMER_FILES,
  type CustomerDoc,
  type CustomerDocKind,
  type CustomerFile,
} from "@/lib/demos/customer-files";
import type {DolphinSalesCopy, SalesLocale} from "@/lib/demos/dolphin-sales-copy";

function docHref(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  return assetPath(href);
}

function formatUpdated(iso: string, locale: SalesLocale): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

const GROUP_ORDER: CustomerDocKind[] = ["document", "discovery", "website", "crm"];

function groupKey(kind: CustomerDocKind): "documents" | "discovery" | "channels" {
  if (kind === "document") return "documents";
  if (kind === "discovery") return "discovery";
  return "channels";
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6 3.5 11 8 6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResourceCard({
  doc,
  locale,
  updatedLabel,
  activeLabel,
  active,
}: {
  doc: CustomerDoc;
  locale: SalesLocale;
  updatedLabel: string;
  activeLabel: string;
  active: boolean;
}) {
  const label = locale === "vi" ? doc.labelVi : doc.labelEn;
  const title = locale === "vi" ? doc.titleVi : doc.titleEn;
  const description = locale === "vi" ? doc.descriptionVi : doc.descriptionEn;
  return (
    <a
      href={docHref(doc.href)}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[10px] border border-df-border bg-df-card px-3 py-2.5 transition-colors hover:bg-df-elev"
    >
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span
            className={`text-[11px] font-bold tracking-wide ${
              doc.kind === "document" ? "text-df-accent" : "text-df-faint"
            }`}
          >
            {label}
          </span>
          {active ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-df-text">
              <span className="h-1.5 w-1.5 rounded-full bg-df-ok" aria-hidden />
              {activeLabel}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 block text-sm font-semibold text-df-text">{title}</span>
        <span className="mt-0.5 block text-xs text-df-muted">{description}</span>
        {doc.updated ? (
          <span className="mt-1 block text-[11px] text-df-faint">
            {updatedLabel} {formatUpdated(doc.updated, locale)}
          </span>
        ) : null}
      </span>
      <span className="text-df-faint">
        <Chevron />
      </span>
    </a>
  );
}

function CustomerWorkspace({
  customer,
  locale,
  page,
}: {
  customer: CustomerFile;
  locale: SalesLocale;
  page: DolphinSalesCopy["filesPage"];
}) {
  const name = locale === "vi" ? customer.nameVi : customer.nameEn;
  const summary = locale === "vi" ? customer.summaryVi : customer.summaryEn;
  const status = locale === "vi" ? customer.statusVi : customer.statusEn;
  const role = locale === "vi" ? customer.contactRoleVi : customer.contactRoleEn;
  const deal = locale === "vi" ? customer.dealVi : customer.dealEn;
  const projectCount = page.projectsActive.replace("{n}", String(customer.projects.length));
  const activeHrefs = new Set(customer.projects.map((project) => project.href));
  const groupLabel = {
    documents: page.groupDocuments,
    discovery: page.groupDiscovery,
    channels: page.groupChannels,
  };
  const groups = (["documents", "discovery", "channels"] as const)
    .map((key) => ({
      key,
      label: groupLabel[key],
      docs: customer.docs
        .filter((doc) => groupKey(doc.kind) === key)
        .sort((a, b) => GROUP_ORDER.indexOf(a.kind) - GROUP_ORDER.indexOf(b.kind)),
    }))
    .filter((group) => group.docs.length > 0);

  return (
    <div className="grid items-start gap-4 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="rounded-[10px] border border-df-border bg-df-card p-3">
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-df-accent text-xs font-bold text-df-ink"
            aria-hidden
          >
            {customer.initials}
          </span>
          <span className="min-w-0">
            <h2 className="truncate text-base font-semibold text-df-text">{name}</h2>
            <span className="block truncate text-xs text-df-muted">{summary}</span>
          </span>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-df-text">
          <span className="h-1.5 w-1.5 rounded-full bg-df-ok" aria-hidden />
          {status}
        </p>
        <dl className="mt-3 grid gap-2.5 border-t border-df-border pt-3 text-xs">
          <div>
            <dt className="text-df-faint">{page.contact}</dt>
            <dd className="mt-0.5 font-semibold text-df-text">{customer.contactName}</dd>
            <dd className="text-df-muted">{role}</dd>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <dt className="text-df-faint">{page.deal}</dt>
              <dd className="mt-0.5 font-semibold text-df-text">{deal}</dd>
            </div>
            <div>
              <dt className="text-df-faint">{page.projects}</dt>
              <dd className="mt-0.5 font-semibold text-df-text">{projectCount}</dd>
            </div>
          </div>
        </dl>
      </aside>

      <section className="min-w-0" aria-labelledby="df-customer-resources">
        <h3 id="df-customer-resources" className="text-sm font-semibold text-df-text">
          {page.resources}
        </h3>
        {groups.length === 0 ? (
          <p className="mt-2 text-sm text-df-muted">{page.emptyDocs}</p>
        ) : (
          <div className="mt-3 grid gap-4">
            {groups.map((group) => (
              <div key={group.key}>
                <h4 className="text-xs font-semibold text-df-faint">{group.label}</h4>
                <div className="mt-1.5 grid gap-2 lg:grid-cols-2">
                  {group.docs.map((doc) => (
                    <ResourceCard
                      key={doc.id}
                      doc={doc}
                      locale={locale}
                      updatedLabel={page.updated}
                      activeLabel={page.active}
                      active={activeHrefs.has(doc.href)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export function CustomerFilesPanel({
  copy,
  locale,
}: {
  copy: DolphinSalesCopy;
  locale: SalesLocale;
}) {
  const page = copy.filesPage;
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(CUSTOMER_FILES[0]?.id ?? "");
  const [picking, setPicking] = useState(false);
  const canPick = CUSTOMER_FILES.length > 1;
  const needle = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      CUSTOMER_FILES.filter((customer) => {
        if (!needle) return true;
        const name = `${customer.nameVi} ${customer.nameEn}`.toLowerCase();
        return name.includes(needle);
      }),
    [needle],
  );
  const selected =
    CUSTOMER_FILES.find((customer) => customer.id === selectedId) ?? CUSTOMER_FILES[0] ?? null;

  if ((picking && canPick) || !selected) {
    return (
      <div className="df-panel">
        <label className="sr-only" htmlFor="df-customer-search">
          {page.search}
        </label>
        <input
          id="df-customer-search"
          type="search"
          value={query}
          placeholder={page.search}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full max-w-sm rounded-[10px] border border-df-border bg-df-card px-3 py-2 text-base text-df-text"
        />
        {matches.length === 0 ? (
          <p className="text-sm text-df-muted">{page.emptySearch}</p>
        ) : (
          <div className="grid max-w-sm gap-1.5">
            {matches.map((customer) => {
              const name = locale === "vi" ? customer.nameVi : customer.nameEn;
              return (
                <button
                  key={customer.id}
                  type="button"
                  className="rounded-[10px] border border-df-border bg-df-card px-3 py-2 text-left text-sm font-semibold text-df-text transition-colors hover:bg-df-elev"
                  onClick={() => {
                    setSelectedId(customer.id);
                    setPicking(false);
                  }}
                >
                  {name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="df-panel">
      {canPick ? (
        <button
          type="button"
          className="w-fit text-xs font-semibold text-df-muted transition-colors hover:text-df-text"
          onClick={() => setPicking(true)}
        >
          ← {page.back}
        </button>
      ) : null}
      <CustomerWorkspace customer={selected} locale={locale} page={page} />
    </div>
  );
}
