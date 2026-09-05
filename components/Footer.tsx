"use client";

import { usePathname } from "next/navigation";
import { BrandMotto, BrandName } from "@/components/BrandName";
import { SocialProfiles } from "@/components/SocialProfiles";
import { BASE_PATH, assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Footer() {
 const { t } = useLocale();
 const pathname = usePathname();
 const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
 const f = t.footer;

 const groups = [
 {
 label: f.groupExplore,
 links: [
 { href: `${sectionBase}#solutions`, label: t.nav.solutions },
 { href: assetPath("/services/web/"), label: t.nav.serviceWeb },
 { href: assetPath("/services/mobile/"), label: t.nav.serviceMobile },
 { href: assetPath("/ai-transform/"), label: t.nav.aiTransform },
 { href: assetPath("/dolphin-care/"), label: t.nav.agentDolphin },
 { href: assetPath("/dolphin-ops/"), label: t.nav.dolphinOps },
 { href: assetPath("/dolphin-intelligence/"), label: t.nav.dolphinIntelligence },
 ],
 },
 {
 label: f.groupStudio,
 links: [
 { href: assetPath("/services/software/"), label: t.nav.serviceBackend },
 { href: assetPath("/about/"), label: t.nav.about },
 ],
 },
 {
 label: f.groupUpdates,
    links: [
      { href: assetPath("/demos/"), label: t.nav.templates },
      { href: assetPath("/news/"), label: t.nav.news },
      { href: assetPath("/careers/"), label: t.nav.careers },
    ],
 },
 {
 label: f.groupConnect,
 links: [
 { href: `${sectionBase}#contact`, label: t.nav.contact },
 { href: assetPath("/privacy/"), label: f.privacy },
 ],
 },
 ] as const;

 return (
 <footer className="py-12 sm:py-14">
 <div className="mx-auto max-w-7xl px-6">
 <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-14">
 <div className="flex shrink-0 flex-col gap-3">
 <p className="flex items-center gap-2 text-sm font-medium text-[var(--kuct-text)]">
 <BrandName size="sm" />
 <span className="text-xs text-[var(--kuct-muted)]">· © 2026</span>
 </p>
 <p className="max-w-[28ch] text-sm leading-relaxed text-[var(--kuct-muted)]">
 {f.blurb}
 </p>
 <SocialProfiles ariaLabel={f.socialAria} className="mt-4" />
 </div>

 <nav
 className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6"
 aria-label="Footer"
 >
 {groups.map((group) => (
 <div key={group.label}>
 <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
 {group.label}
 </p>
 <ul className="mt-3 flex list-none flex-col gap-2 p-0">
 {group.links.map((link) => (
 <li key={link.href + link.label}>
 <a
 href={link.href}
 className="text-sm leading-relaxed text-[var(--kuct-muted)] transition hover:text-[var(--kuct-accent)]"
 >
 {link.label}
 </a>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </nav>
 </div>
 <BrandMotto className="mt-10 justify-center text-center" />
 </div>
 </footer>
 );
}
