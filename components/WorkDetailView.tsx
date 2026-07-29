"use client";

import Link from "next/link";
import { useState } from "react";
import { DesignViewerModal } from "@/components/DesignViewerModal";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  getWorkDetail,
  getWorkDetailUi,
  type WorkSlug,
} from "@/lib/works-details";
import { getDetailExtrasUi, getWorkExtras } from "@/lib/detail-extras";
import { themeAsset } from "@/lib/asset";
import { useTheme } from "@/lib/theme";

export function WorkDetailContent({
  slug,
  embedded = false,
}: {
  slug: WorkSlug;
  embedded?: boolean;
}) {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const { close } = usePagePreview();
  const detail = getWorkDetail(locale, slug);
  const ui = getWorkDetailUi(locale);
  const extras = getWorkExtras(locale, slug);
  const xui = getDetailExtrasUi(locale);
  const [viewerOpen, setViewerOpen] = useState(false);
  const showDesign = slug === "billiard";

  return (
    <div>
      <section
        className={
          embedded
            ? "relative overflow-hidden border-b border-[var(--kuct-border)] py-10 sm:py-12"
            : "relative overflow-hidden border-b border-[var(--kuct-border)] py-16 sm:py-20"
        }
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.08)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.05)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          {!embedded ? (
            <Link
              href="/#works"
              className="kuct-link inline-flex text-sm font-medium text-[var(--kuct-muted)]"
            >
              {ui.back}
            </Link>
          ) : null}
          <div
            className={`${embedded ? "mt-0" : "mt-6"} relative aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl border border-[var(--kuct-border)] shadow-[0_1rem_2.5rem_rgba(139,92,246,0.12)]`}
          >
            <LazyImage
              src={themeAsset(detail.image, theme)}
              alt={detail.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
            <span className="absolute left-4 top-4 rounded-full border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.78)] px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--kuct-text)] uppercase shadow-sm backdrop-blur-md">
              {detail.tag}
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
            {detail.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
            {detail.intro}
          </p>
        </div>
      </section>

      <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {ui.problemTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {detail.problem}
            </p>
          </div>
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {ui.scopeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {detail.scope}
            </p>
          </div>
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {ui.outcomesTitle}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {detail.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-6">
          <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
            {ui.highlightsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
            {detail.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {xui.timelineTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
              {extras.timeline}
            </p>
          </div>
          <div className="kuct-glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
              {xui.stackTitle}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {extras.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] px-3 py-1 text-xs font-semibold text-[var(--kuct-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center gap-3 px-6">
          {showDesign ? (
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
            >
              {ui.viewDesign}
            </button>
          ) : null}
          <Link
            href="/#contact"
            className={
              showDesign
                ? "kuct-btn-ghost inline-flex items-center rounded-full px-7 py-3 text-sm font-medium"
                : "kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
            }
            onClick={() => {
              if (embedded) close();
            }}
          >
            {ui.cta}
          </Link>
        </div>
      </section>

      {showDesign ? (
        <DesignViewerModal
          open={viewerOpen}
          onClose={() => setViewerOpen(false)}
        />
      ) : null}
    </div>
  );
}

export function WorkDetailView({ slug }: { slug: WorkSlug }) {
  return (
    <main>
      <Nav />
      <WorkDetailContent slug={slug} />
      <Footer />
    </main>
  );
}
