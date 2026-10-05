"use client";

import { useCallback, useMemo, useState } from "react";
import { assetPath } from "@/lib/asset";
import type { DolphinSalesCopy } from "@/lib/demos/dolphin-sales-copy";
import {
  buildSchemaExportBundle,
  listSchemaBrowseEntries,
  type SchemaBrowseEntry,
  type SchemaBrowseGroup,
} from "@/lib/schema/entries";

const GROUP_ORDER: SchemaBrowseGroup[] = [
  "company",
  "company-profile",
  "homepage",
  "services",
  "agents",
];

function groupLabel(
  group: SchemaBrowseGroup,
  copy: DolphinSalesCopy["schemaPage"],
): string {
  switch (group) {
    case "company":
      return copy.groupCompany;
    case "company-profile":
      return copy.groupCompanyProfile;
    case "homepage":
      return copy.groupHomepage;
    case "services":
      return copy.groupServices;
    case "agents":
      return copy.groupAgents;
  }
}

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function AdminSchemaPanel({ copy }: { copy: DolphinSalesCopy }) {
  const t = copy.schemaPage;
  const entries = useMemo(() => listSchemaBrowseEntries(), []);
  const [selectedId, setSelectedId] = useState(entries[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  const selected: SchemaBrowseEntry | undefined = useMemo(
    () => entries.find((e) => e.id === selectedId) ?? entries[0],
    [entries, selectedId],
  );

  const pretty = useMemo(
    () => (selected ? JSON.stringify(selected.data, null, 2) : ""),
    [selected],
  );

  const grouped = useMemo(() => {
    const map = new Map<SchemaBrowseGroup, SchemaBrowseEntry[]>();
    for (const g of GROUP_ORDER) map.set(g, []);
    for (const entry of entries) {
      map.get(entry.group)?.push(entry);
    }
    return map;
  }, [entries]);

  const onCopy = useCallback(async () => {
    if (!pretty) return;
    try {
      await navigator.clipboard.writeText(pretty);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [pretty]);

  const onExportOne = useCallback(() => {
    if (!selected) return;
    const name = selected.rawPath.replace(/^\//, "").replace(/\//g, "__");
    downloadJson(name || "schema.json", selected.data);
  }, [selected]);

  const onExportAll = useCallback(() => {
    downloadJson(
      "dolphin-schema-export.json",
      buildSchemaExportBundle(entries),
    );
  }, [entries]);

  if (!selected) return null;

  return (
    <div className="df-panel">
      <div className="df-panel__head">
        <div>
          <p className="df-panel__lede">{t.lede}</p>
          <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-df-muted">
            {t.hint}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="df-btn is-ghost" onClick={onExportAll}>
            {t.exportAll}
          </button>
          <a
            href={assetPath("/schema/")}
            target="_blank"
            rel="noopener noreferrer"
            className="df-btn is-ghost"
          >
            {t.openPublic}
          </a>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(14rem,18rem)_minmax(0,1fr)]">
        <aside
          className="rounded-[10px] border border-df-border bg-df-card p-3"
          aria-label={t.listAria}
        >
          {GROUP_ORDER.map((group) => {
            const items = grouped.get(group) ?? [];
            if (items.length === 0) return null;
            return (
              <div key={group} className="mb-4 last:mb-0">
                <p className="mb-1.5 px-1 text-[10px] font-semibold tracking-[0.16em] text-df-faint uppercase">
                  {groupLabel(group, t)}
                </p>
                <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                  {items.map((entry) => {
                    const active = entry.id === selected.id;
                    return (
                      <li key={entry.id}>
                        <button
                          type="button"
                          className={[
                            "w-full rounded-[10px] px-2.5 py-2 text-left text-sm transition-colors",
                            active
                              ? "bg-df-accent text-df-ink"
                              : "text-df-muted hover:bg-df-elev hover:text-df-text",
                          ].join(" ")}
                          onClick={() => setSelectedId(entry.id)}
                        >
                          <span className="block truncate font-medium">
                            {entry.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </aside>

        <section
          className="min-w-0 rounded-[10px] border border-df-border bg-df-card"
          aria-labelledby="admin-schema-file-title"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-df-border px-4 py-3">
            <div className="min-w-0">
              <h2
                id="admin-schema-file-title"
                className="truncate text-sm font-semibold text-df-text"
              >
                {selected.label}
              </h2>
              <p className="mt-0.5 truncate text-xs text-df-faint">
                {selected.rawPath}
              </p>
              <p className="mt-1 text-[11px] text-df-muted">{t.readOnly}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="df-btn" onClick={() => void onCopy()}>
                {copied ? t.copied : t.copy}
              </button>
              <button type="button" className="df-btn is-ghost" onClick={onExportOne}>
                {t.download}
              </button>
              <a
                href={assetPath(selected.rawPath)}
                target="_blank"
                rel="noopener noreferrer"
                className="df-btn is-ghost"
              >
                {t.openRaw}
              </a>
            </div>
          </div>
          <pre
            className="max-h-[min(70vh,40rem)] overflow-auto p-4 text-left text-[12px] leading-relaxed text-df-muted sm:text-[13px]"
            tabIndex={0}
          >
            <code>{pretty}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
