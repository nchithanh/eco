"use client";

import { usePathname } from "next/navigation";
import { BrandName } from "@/components/BrandName";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BASE_PATH, assetPath } from "@/lib/asset";
import { SOCIAL_PROFILES, TEAM_EMAILS } from "@/lib/contacts";
import { INDUSTRY_CATALOG } from "@/lib/industries/catalog";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { getIndustryPageCopy } from "@/lib/i18n/industries-copy";

export function Footer() {
  const { t } = useLocale();
  const pathname = usePathname();
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
  const f = t.footer;
  const pricingHref = assetPath("/chinh-sach-gia-dolphin-2026/");

  const topGroups = [
    {
      label: f.groupCrm,
      links: [
        {
          href: assetPath("/industries/"),
          label: "Tất cả ngành",
        },
        ...INDUSTRY_CATALOG.map((industry) => ({
          href: assetPath(`/industries/${industry.slug}/`),
          label: getIndustryPageCopy(industry.slug).label,
        })),
      ],
    },
    {
      label: f.groupExplore,
      links: [
        { href: `${sectionBase}#solutions`, label: t.nav.solutions },
        { href: assetPath("/dolphin-care/"), label: t.nav.agentDolphin },
        { href: assetPath("/dolphin-ops/"), label: t.nav.dolphinOps },
        { href: assetPath("/dolphin-intelligence/"), label: t.nav.dolphinIntelligence },
        { href: assetPath("/ai-transform/"), label: t.nav.aiTransform },
        { href: assetPath("/faq/"), label: "FAQ" },
        { href: assetPath("/services/web/"), label: t.nav.serviceWeb },
      ],
    },
    {
      label: f.groupStudio,
      links: [
        { href: assetPath("/services/software/"), label: t.nav.serviceBackend },
        { href: assetPath("/services/landing/"), label: t.nav.serviceLanding },
        { href: assetPath("/services/design/"), label: t.nav.serviceDesign },
        { href: assetPath("/services/integrations/"), label: f.integrations },
        { href: assetPath("/case-studies/"), label: "Case studies" },
        { href: assetPath("/news/"), label: t.nav.news },
        { href: pricingHref, label: f.pricingPolicy },
        { href: assetPath("/chinh-sach-bao-hanh-ho-tro-2026/"), label: f.warrantyPolicy },
      ],
    },
  ] as const;

  const bottomGroups = [
    {
      label: f.groupEmails,
      links: TEAM_EMAILS.map((item) => ({
        href: `mailto:${item.address}`,
        label: item.address,
      })),
    },
    {
      label: f.groupSocials,
      links: SOCIAL_PROFILES.map((profile) => ({
        href: profile.href,
        label: profile.label,
        external: true as const,
      })),
    },
    {
      label: f.groupCompany,
      links: [
        { href: assetPath("/contact/"), label: t.nav.contact },
        { href: assetPath("/faq/"), label: "FAQ" },
        { href: assetPath("/about/"), label: t.nav.about },
        { href: assetPath("/careers/"), label: t.nav.careers },
        { href: assetPath("/company-profile/"), label: t.nav.companyProfile },
        { href: assetPath("/privacy/"), label: f.privacy },
        { href: pricingHref, label: t.nav.pricing },
      ],
    },
  ] as const;

  return (
    <footer className="kuct-footer bg-[var(--kuct-surface-muted)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(10rem,13rem)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <div className="flex flex-col gap-4">
            <BrandName size="sm" />
            <LanguageSwitcher variant="footer" />
            <p className="max-w-[22ch] text-sm leading-relaxed text-[var(--kuct-muted)]">
              {f.blurb}
            </p>
          </div>

          <nav aria-label="Footer" className="min-w-0">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-12 lg:gap-y-12">
              {topGroups.map((group) => (
                <FooterColumn key={group.label} label={group.label} links={group.links} />
              ))}
              {bottomGroups.map((group) => (
                <FooterColumn key={group.label} label={group.label} links={group.links} />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: readonly FooterLink[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-[var(--kuct-muted)]">{label}</p>
      <ul className="mt-4 flex list-none flex-col gap-2.5 p-0 sm:mt-5 sm:gap-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <a
              href={link.href}
              className="break-all text-sm leading-snug text-[var(--kuct-text)] no-underline transition hover:opacity-60 sm:break-normal"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
