"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Logo } from "@/components/Logo";
import { BASE_PATH, assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type NavLink = {
  href: string;
  label: string;
};

function normalizePath(path: string) {
  const stripped = path.replace(BASE_PATH, "") || "/";
  const clean = stripped.replace(/\/$/, "") || "/";
  return clean;
}

function NavItemLink({
  href,
  label,
  active,
  onClick,
  className,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const tone =
    "text-sm font-medium text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]";
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={className ? `${tone} ${className}` : tone}
    >
      {label}
    </a>
  );
}

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [agentOpenMobile, setAgentOpenMobile] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
  const contactHref = `${sectionBase}#contact`;
  const homeHref = pathname === "/" ? "#top" : assetPath("/");
  const current = normalizePath(pathname);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (isMenuOpen || y < 24) {
        setHeaderHidden(false);
      } else if (delta > 8) {
        setHeaderHidden(true);
      } else if (delta < -8) {
        setHeaderHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) setHeaderHidden(false);
  }, [isMenuOpen]);

  const serviceItems: NavLink[] = [
    {
      href: assetPath("/services/web/"),
      label: t.nav.serviceWeb,
    },
    {
      href: `${assetPath("/services/web/")}#web-pricing`,
      label: t.nav.serviceLanding,
    },
    {
      href: assetPath("/services/mobile/"),
      label: t.nav.serviceMobile,
    },
    {
      href: assetPath("/services/backend/"),
      label: t.nav.serviceBackend,
    },
  ];

  const agentItems: NavLink[] = [
    {
      href: assetPath("/dolphin-care/"),
      label: t.nav.agentDolphin,
    },
    {
      href: assetPath("/ai-transform/"),
      label: t.nav.aiTransform,
    },
  ];

  const pageLinks: NavLink[] = [
    { href: assetPath("/news/"), label: t.nav.news },
    { href: assetPath("/about/"), label: t.nav.about },
    { href: assetPath("/careers/"), label: t.nav.careers },
  ];

  const desktopGnbLinks: NavLink[] = [...serviceItems, ...agentItems];

  const isPageActive = (href: string) => {
    const pathOnly = href.split("#")[0] ?? href;
    return normalizePath(pathOnly) === current;
  };

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) {
        setIsMenuOpen(false);
        setServicesOpenMobile(false);
        setAgentOpenMobile(false);
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpenMobile(false);
    setAgentOpenMobile(false);
  }, [pathname]);

  const gnbLinkClass =
    "kuct-gnb-link inline-flex h-[2.75rem] shrink-0 items-center border-b-[3px] border-transparent text-[0.875rem] leading-none tracking-[-0.02em] text-[var(--kuct-text)] transition-colors hover:text-[var(--kuct-accent)]";
  const gnbLinkActiveClass =
    " border-[var(--kuct-accent)] text-[var(--kuct-accent)]";
  const utilityLinkClass =
    "kuct-nav-utility kuct-gnb-link inline-flex h-[2.75rem] shrink-0 items-center border-b-[3px] border-transparent text-[0.875rem] leading-none tracking-[-0.02em] text-[var(--kuct-text)] transition-colors hover:text-[var(--kuct-accent)]";

  return (
    <div
      className={`kuct-site-header sticky top-0 z-50 ${
        headerHidden ? "is-hidden" : ""
      }`}
    >
      <AnnouncementBar />
      <header className="bg-white">
        <nav
          className="mx-auto max-w-6xl px-6"
          aria-label={t.nav.ariaMain}
        >
          {/* Desktop — two-tier, flat GNB (no dropdowns) */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-end gap-5">
              {pageLinks.map((link) => {
                const active = isPageActive(link.href);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`${utilityLinkClass}${
                      active ? gnbLinkActiveClass : ""
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a href={contactHref} className={utilityLinkClass}>
                {t.nav.contact}
              </a>
              <div className="kuct-nav-utility kuct-gnb-link flex h-[2.75rem] items-center text-[0.875rem]">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="flex min-h-[3.65rem] items-center gap-6 pb-3 xl:gap-8">
              <a
                href={homeHref}
                className="flex shrink-0 items-center text-[var(--kuct-text)] transition hover:opacity-85"
                aria-label="Dolphin Software"
              >
                <Logo showWordmark />
              </a>

              <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1 xl:gap-x-5">
                {desktopGnbLinks.map((link) => {
                  const active = isPageActive(link.href);
                  return (
                    <li key={link.href + link.label}>
                      <a
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`${gnbLinkClass}${
                          active ? gnbLinkActiveClass : ""
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Mobile / tablet — single compact row */}
          <div className="flex h-14 items-center justify-between gap-4 sm:h-[3.75rem] lg:hidden">
            <a
              href={homeHref}
              className="flex shrink-0 items-center text-[var(--kuct-text)] transition hover:opacity-85"
              aria-label="Dolphin Software"
            >
              <Logo showWordmark />
            </a>

            <div className="flex shrink-0 items-center gap-2 text-[0.875rem]">
              <LanguageSwitcher />
              <button
                type="button"
                className="grid size-9 place-items-center text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]"
                aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-controls="mobile-nav"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {isMenuOpen ? "×" : "≡"}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen ? (
          <nav
            id="mobile-nav"
            aria-label={t.nav.ariaMobile}
            className="border-t border-black/10 bg-white px-6 py-4 lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col">
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-[var(--kuct-text)]"
                  aria-expanded={servicesOpenMobile}
                  onClick={() => setServicesOpenMobile((open) => !open)}
                >
                  <span>{t.nav.services}</span>
                  <span aria-hidden className="text-[var(--kuct-text)]">
                    {servicesOpenMobile ? "−" : "+"}
                  </span>
                </button>
                {servicesOpenMobile ? (
                  <ul className="mb-1 space-y-0 pl-3">
                    {serviceItems.map((item) => (
                      <li key={item.href + item.label}>
                        <NavItemLink
                          href={item.href}
                          label={item.label}
                          active={isPageActive(item.href)}
                          className="block w-full py-1.5"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setServicesOpenMobile(false);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>

              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-[var(--kuct-text)]"
                  aria-expanded={agentOpenMobile}
                  onClick={() => setAgentOpenMobile((open) => !open)}
                >
                  <span>{t.nav.agents}</span>
                  <span aria-hidden className="text-[var(--kuct-text)]">
                    {agentOpenMobile ? "−" : "+"}
                  </span>
                </button>
                {agentOpenMobile ? (
                  <ul className="mb-1 space-y-0 pl-3">
                    {agentItems.map((item) => (
                      <li key={item.href}>
                        <NavItemLink
                          href={item.href}
                          label={item.label}
                          active={isPageActive(item.href)}
                          className="block w-full py-1.5"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setAgentOpenMobile(false);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>

              {pageLinks.map((link) => (
                <li key={link.href}>
                  <NavItemLink
                    href={link.href}
                    label={link.label}
                    active={isPageActive(link.href)}
                    className="block w-full py-2"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </li>
              ))}

              <li className="flex items-center gap-2 pt-3">
                <ThemeSwitcher />
              </li>

              <li className="pt-2">
                <a
                  href={contactHref}
                  className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
