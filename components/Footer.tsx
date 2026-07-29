"use client";

import { usePathname } from "next/navigation";
import { BrandName } from "@/components/BrandName";
import { BASE_PATH, assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
export function Footer() {
  const { t } = useLocale();
  const pathname = usePathname();
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;

  const linkClass = "kuct-link";

  return (
    <footer className="border-t border-white/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm font-medium text-[var(--kuct-text)]">
          <BrandName size="sm" />
          <span className="text-[var(--kuct-muted)]">· © 2026</span>
        </p>
        <nav
          className="flex flex-wrap gap-4 text-sm text-[var(--kuct-muted)]"
          aria-label="Footer"
        >
          <a href={`${sectionBase}#capabilities`} className={linkClass}>
            {t.nav.services}
          </a>
          <a href={assetPath("/custom-agent/")} className={linkClass}>
            {t.nav.customAgentItem}
          </a>
          <a href={assetPath("/ai-transform/")} className={linkClass}>
            {t.nav.aiTransform}
          </a>
          <a href={`${sectionBase}#process`} className={linkClass}>
            {t.nav.process}
          </a>
          <a href={`${sectionBase}#technology`} className={linkClass}>
            {t.nav.stack}
          </a>
          <a href={assetPath("/news/")} className={linkClass}>
            {t.nav.news}
          </a>
          <a href={assetPath("/careers/")} className={linkClass}>
            {t.nav.careers}
          </a>
          <a href={`${sectionBase}#contact`} className={linkClass}>
            {t.nav.contact}
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs text-[var(--kuct-muted)]">
        {t.footer.disclaimer}
      </p>
    </footer>
  );
}
