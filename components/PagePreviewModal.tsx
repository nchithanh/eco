"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { PreviewTarget } from "@/components/PagePreviewProvider";

const ServiceDetailContent = lazy(() =>
  import("@/components/ServiceDetailView").then((mod) => ({
    default: mod.ServiceDetailContent,
  })),
);

const CareersContent = lazy(() =>
  import("@/components/CareersContent").then((mod) => ({
    default: mod.CareersContent,
  })),
);

const NewsContent = lazy(() =>
  import("@/components/NewsContent").then((mod) => ({
    default: mod.NewsContent,
  })),
);

const NewsDetailContent = lazy(() =>
  import("@/components/NewsDetailView").then((mod) => ({
    default: mod.NewsDetailContent,
  })),
);

const TechDetailContent = lazy(() =>
  import("@/components/TechDetailView").then((mod) => ({
    default: mod.TechDetailContent,
  })),
);

const WorkDetailContent = lazy(() =>
  import("@/components/WorkDetailView").then((mod) => ({
    default: mod.WorkDetailContent,
  })),
);

const MoreDetailContent = lazy(() =>
  import("@/components/MoreDetailView").then((mod) => ({
    default: mod.MoreDetailContent,
  })),
);

const MIN_LOADING_MS = 550;

function PreviewLoading({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[18rem] flex-col items-center justify-center gap-4 px-6 py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      <div
        aria-hidden
        className="size-10 animate-spin rounded-full border-2 border-[var(--kuct-accent)]/25 border-t-[var(--kuct-accent)]"
      />
      <p className="text-sm font-medium tracking-wide text-[var(--kuct-muted)]">
        {label}
      </p>
      <div
        aria-hidden
        className="h-1 w-40 overflow-hidden rounded-full bg-white/60 ring-1 ring-white/70"
      >
        <div className="h-full w-1/2 animate-kuct-glow rounded-full bg-gradient-to-r from-[var(--kuct-btn-from)] via-[var(--kuct-btn-mid)] to-[var(--kuct-btn-to)]" />
      </div>
    </div>
  );
}

export function PagePreviewModal({
  target,
  onClose,
}: {
  target: PreviewTarget | null;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const p = t.preview;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!target) {
      setReady(false);
      return;
    }
    setReady(false);
    const id = window.setTimeout(() => setReady(true), MIN_LOADING_MS);
    return () => window.clearTimeout(id);
  }, [target]);

  if (!target) return null;

  return (
    <div className="fixed inset-0 z-[140] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#1e1b2e]/45 backdrop-blur-sm"
        aria-label={p.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={p.viewFull}
        className="relative z-10 flex max-h-[min(92svh,56rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-[var(--kuct-bg)] shadow-[0_1.5rem_4rem_rgba(30,27,46,0.35)]"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/50 bg-white/55 px-4 py-3 backdrop-blur-xl sm:px-5">
          <button
            type="button"
            className="kuct-btn-ghost rounded-full px-4 py-2 text-sm font-medium"
            onClick={onClose}
          >
            {p.close}
          </button>
          <a
            href={target.href}
            className="kuct-btn-primary rounded-full px-4 py-2 text-sm font-semibold"
          >
            {p.viewFull}
          </a>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {!ready ? (
            <PreviewLoading label={p.loading} />
          ) : (
            <Suspense fallback={<PreviewLoading label={p.loading} />}>
              {target.kind === "service" ? (
                <ServiceDetailContent slug={target.slug} embedded />
              ) : target.kind === "tech" ? (
                <TechDetailContent slug={target.slug} embedded />
              ) : target.kind === "work" ? (
                <WorkDetailContent slug={target.slug} embedded />
              ) : target.kind === "more" ? (
                <MoreDetailContent slug={target.slug} embedded />
              ) : target.kind === "news" ? (
                <NewsContent embedded />
              ) : target.kind === "news-detail" ? (
                <NewsDetailContent slug={target.slug} embedded />
              ) : (
                <CareersContent embedded />
              )}
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
