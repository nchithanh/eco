"use client";

import type { PosFeatureDemo } from "@/lib/i18n/pos-copy";
import { POS_DEMO_URL, type PosSlug } from "@/lib/pos/catalog";

const NAV = [
  { id: "home", label: "Tổng quan" },
  { id: "sell", label: "Bán hàng" },
  { id: "stock", label: "Kho" },
  { id: "finance", label: "Tài chính" },
] as const;

const METRICS: Record<PosSlug, { label: string; value: string }[]> = {
  fnb: [
    { label: "Đơn hôm nay", value: "86" },
    { label: "Doanh thu ca", value: "12,4tr" },
    { label: "Món bán chạy", value: "Cơm gà" },
    { label: "Tồn gạo", value: "42 kg" },
  ],
  cafe: [
    { label: "Đơn hôm nay", value: "124" },
    { label: "Doanh thu ca", value: "8,9tr" },
    { label: "Hạt Arabica", value: "6,2 kg" },
    { label: "Sữa còn", value: "14 hộp" },
  ],
  "tra-sua": [
    { label: "Đơn hôm nay", value: "210" },
    { label: "Doanh thu ca", value: "11,2tr" },
    { label: "Trân châu", value: "3,5 kg" },
    { label: "Peak giờ", value: "17–19h" },
  ],
  pet: [
    { label: "Đơn hôm nay", value: "38" },
    { label: "Doanh thu ca", value: "9,6tr" },
    { label: "Hạt mèo", value: "22 túi" },
    { label: "SKU sắp hết", value: "5" },
  ],
  fashion: [
    { label: "Đơn hôm nay", value: "27" },
    { label: "Doanh thu ca", value: "18,5tr" },
    { label: "Biến thể lệch", value: "3" },
    { label: "Tồn size M", value: "41" },
  ],
  retail: [
    { label: "Hóa đơn", value: "64" },
    { label: "Doanh thu ca", value: "7,1tr" },
    { label: "SKU bán", value: "112" },
    { label: "Tồn cảnh báo", value: "8" },
  ],
};

type Props = {
  slug: PosSlug;
  demo: Pick<
    PosFeatureDemo,
    | "demoProduct"
    | "demoContext"
    | "demoStatus"
    | "demoLines"
    | "demoTotalLabel"
    | "demoTotal"
    | "demoPayLabel"
    | "demoFootnote"
    | "pipelineLabel"
    | "pipeline"
  >;
};

/** Product stage — mirrors Dolphin POS AppShell (sidebar + branch + sell). */
export function PosAppStage({ slug, demo }: Props) {
  const metrics = METRICS[slug];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-[10px] bg-[var(--kuct-surface-muted)] p-2 sm:p-3 lg:p-4">
        <div
          className="overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-white"
          aria-label={`${demo.demoProduct} — ${demo.demoContext}`}
        >
          <div className="grid min-h-[22rem] lg:min-h-[28rem] lg:grid-cols-[13rem_minmax(0,1fr)]">
            <aside className="hidden border-r border-[var(--kuct-border)] bg-white p-3 lg:flex lg:flex-col">
              <div className="flex items-center gap-2 px-1 pb-3">
                <span className="grid size-8 place-items-center overflow-hidden rounded-[10px] bg-emerald-500 text-[11px] font-bold text-white">
                  D
                </span>
                <div className="min-w-0">
                  <p className="m-0 truncate text-xs font-bold tracking-wide text-emerald-600 uppercase">
                    Dolphin POS
                  </p>
                  <p className="m-0 truncate text-[10px] text-[var(--kuct-muted)]">
                    {demo.demoProduct}
                  </p>
                </div>
              </div>
              <p className="mb-1 px-2.5 text-[10px] font-bold tracking-wide text-slate-400 uppercase">
                Chi nhánh
              </p>
              <div className="mb-3 rounded-[10px] border border-slate-200 px-3 py-2 text-left text-xs font-semibold">
                {demo.demoContext}
              </div>
              <nav aria-label="POS mock" className="flex flex-col gap-0.5">
                {NAV.map((item, index) => (
                  <span
                    key={item.id}
                    className={`relative rounded-[10px] px-2.5 py-2 text-xs font-medium ${
                      index === 1
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    {index === 1 ? (
                      <span className="absolute top-1/2 left-0 h-5 w-1 -translate-y-1/2 rounded-r-full bg-emerald-500" />
                    ) : null}
                    {item.label}
                  </span>
                ))}
              </nav>
              <p className="mt-auto px-2.5 pt-6 text-[10px] text-slate-400">
                {demo.demoStatus}
              </p>
            </aside>

            <div className="flex min-w-0 flex-col">
              <header className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--kuct-border)] px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="m-0 truncate text-sm font-semibold text-[var(--kuct-text)] sm:text-base">
                    {demo.demoContext}
                  </p>
                  <p className="mt-0.5 m-0 text-xs text-[var(--kuct-muted)]">
                    Đang mở ca · VI
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-600">
                    Support
                  </span>
                  <a
                    href={POS_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-bold text-white no-underline hover:bg-emerald-600"
                  >
                    Mở demo
                  </a>
                </div>
              </header>

              <div className="grid grid-cols-2 gap-2 border-b border-[var(--kuct-border)] px-4 py-3 sm:grid-cols-4 sm:px-5">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="min-w-0 rounded-[10px] bg-[var(--kuct-surface-muted)] px-2.5 py-2"
                  >
                    <p className="m-0 font-display text-lg font-semibold tabular-nums tracking-tight text-[var(--kuct-text)] sm:text-xl">
                      {m.value}
                    </p>
                    <p className="mt-0.5 m-0 text-[11px] text-[var(--kuct-muted)]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5">
                <p className="m-0 text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
                  Đơn hiện tại
                </p>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {demo.demoLines.map((line) => (
                    <li
                      key={line.name + line.meta}
                      className="flex items-start justify-between gap-3 rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)]/60 px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="m-0 text-sm font-semibold text-[var(--kuct-text)]">
                          {line.name}
                        </p>
                        <p className="mt-0.5 m-0 text-xs text-[var(--kuct-muted)]">
                          {line.meta}
                        </p>
                      </div>
                      <p className="m-0 shrink-0 text-sm font-semibold tabular-nums">
                        {line.price}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[var(--kuct-border)] pt-3">
                  <div>
                    <p className="m-0 text-xs text-[var(--kuct-muted)]">
                      {demo.demoTotalLabel}
                    </p>
                    <p className="m-0 font-display text-xl font-semibold tabular-nums">
                      {demo.demoTotal}
                    </p>
                  </div>
                  <span className="inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white">
                    {demo.demoPayLabel}
                  </span>
                </div>
                <p className="m-0 text-[11px] text-[var(--kuct-muted)]">
                  {demo.demoFootnote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {demo.pipeline.length > 0 ? (
        <div className="mx-auto mt-4 max-w-4xl rounded-[10px] border border-[var(--kuct-border)] bg-white px-4 py-3.5 sm:px-5">
          <p className="kuct-section-eyebrow text-[10px] tracking-[0.16em]">
            {demo.pipelineLabel}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
            {demo.pipeline.join(" → ")}
          </p>
        </div>
      ) : null}
    </div>
  );
}
