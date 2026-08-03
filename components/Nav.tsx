"use client";

import { useEffect, useId, useState } from "react";
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
  const tone = active
    ? "text-sm font-semibold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]"
    : "text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-text)]";
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

function DropdownMenu({
  items,
  open,
  menuId,
  onClose,
  isPageActive,
}: {
  items: NavLink[];
  open: boolean;
  menuId: string;
  onClose: () => void;
  isPageActive: (href: string) => boolean;
}) {
  return (
    <div
      id={menuId}
      role="menu"
      hidden={!open}
      className="absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-2"
    >
      <ul className="overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(8,8,18,0.96)] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)] ring-1 ring-[var(--kuct-accent)]/10 backdrop-blur-xl">
        {items.map((item) => {
          const active = isPageActive(item.href);
          return (
            <li key={item.href + item.label} role="none">
              <a
                role="menuitem"
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "block px-4 py-2.5 text-sm font-semibold text-[var(--kuct-accent)]"
                    : "block px-4 py-2.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.1)] hover:text-[var(--kuct-text)]"
                }
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [agentOpenMobile, setAgentOpenMobile] = useState(false);
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [agentOpenDesktop, setAgentOpenDesktop] = useState(false);
  const servicesMenuId = useId();
  const agentMenuId = useId();
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
  const contactHref = `${sectionBase}#contact`;
  const homeHref = pathname === "/" ? "#top" : assetPath("/");
  const current = normalizePath(pathname);

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

  const isPageActive = (href: string) => {
    const pathOnly = href.split("#")[0] ?? href;
    return normalizePath(pathOnly) === current;
  };

  const isServicesActive = serviceItems.some((item) => isPageActive(item.href));
  const isAgentActive = agentItems.some((item) => isPageActive(item.href));

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
    setServicesOpenDesktop(false);
    setAgentOpenDesktop(false);
  }, [pathname]);

  const dropdownTriggerClass = (active: boolean) =>
    active
      ? "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)]"
      : "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)] hover:text-[var(--kuct-text)]";

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header className="border-b border-[var(--kuct-border)] bg-[rgba(4,4,12,0.82)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(4,4,12,0.72)]">
        <nav
          className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:h-[3.75rem]"
          aria-label={t.nav.ariaMain}
        >
          <a
            href={homeHref}
            className="flex shrink-0 items-center text-[var(--kuct-text)] transition hover:opacity-85"
            aria-label="Dolphin Software"
          >
            <Logo showWordmark />
          </a>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-1.5">
            <li
              className="relative"
              onMouseEnter={() => setServicesOpenDesktop(true)}
              onMouseLeave={() => setServicesOpenDesktop(false)}
            >
              <button
                type="button"
                className={dropdownTriggerClass(isServicesActive)}
                aria-expanded={servicesOpenDesktop}
                aria-haspopup="true"
                aria-controls={servicesMenuId}
                onClick={() => setServicesOpenDesktop((open) => !open)}
              >
                {t.nav.services}
                <span
                  aria-hidden
                  className={`text-[0.65rem] transition ${servicesOpenDesktop ? "text-[var(--kuct-accent)]" : ""}`}
                >
                  ▾
                </span>
              </button>
              <DropdownMenu
                items={serviceItems}
                open={servicesOpenDesktop}
                menuId={servicesMenuId}
                onClose={() => setServicesOpenDesktop(false)}
                isPageActive={isPageActive}
              />
            </li>

            <li
              className="relative"
              onMouseEnter={() => setAgentOpenDesktop(true)}
              onMouseLeave={() => setAgentOpenDesktop(false)}
            >
              <button
                type="button"
                className={dropdownTriggerClass(isAgentActive)}
                aria-expanded={agentOpenDesktop}
                aria-haspopup="true"
                aria-controls={agentMenuId}
                onClick={() => setAgentOpenDesktop((open) => !open)}
              >
                {t.nav.agents}
                <span
                  aria-hidden
                  className={`text-[0.65rem] transition ${agentOpenDesktop ? "text-[var(--kuct-accent)]" : ""}`}
                >
                  ▾
                </span>
              </button>
              <DropdownMenu
                items={agentItems}
                open={agentOpenDesktop}
                menuId={agentMenuId}
                onClose={() => setAgentOpenDesktop(false)}
                isPageActive={isPageActive}
              />
            </li>

            {pageLinks.map((link) => {
              const active = isPageActive(link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "inline-flex rounded-full px-3 py-1.5 text-sm font-semibold text-[var(--kuct-text)] ring-1 ring-[var(--kuct-accent)]/25 transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)]"
                        : "inline-flex rounded-full px-3 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)] hover:text-[var(--kuct-text)]"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            <a
              href={contactHref}
              className="kuct-btn-primary hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_10px_28px_rgb(var(--kuct-accent-rgb)/0.38)] sm:inline-flex"
            >
              {t.nav.contact}
            </a>
            <LanguageSwitcher />
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-accent)] lg:hidden"
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
        </nav>

        {isMenuOpen ? (
          <nav
            id="mobile-nav"
            aria-label={t.nav.ariaMobile}
            className="border-t border-[var(--kuct-border)] bg-[rgba(4,4,12,0.96)] px-6 py-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col">
              <li>
                <button
                  type="button"
                  className={
                    isServicesActive
                      ? "flex w-full items-center justify-between py-2 text-sm font-semibold text-[var(--kuct-text)]"
                      : "flex w-full items-center justify-between py-2 text-sm font-medium text-[var(--kuct-muted)]"
                  }
                  aria-expanded={servicesOpenMobile}
                  onClick={() => setServicesOpenMobile((open) => !open)}
                >
                  <span>{t.nav.services}</span>
                  <span aria-hidden className="text-[var(--kuct-accent)]/80">
                    {servicesOpenMobile ? "−" : "+"}
                  </span>
                </button>
                {servicesOpenMobile ? (
                  <ul className="mb-1 space-y-0 border-l border-[var(--kuct-border)] pl-3">
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
                  className={
                    isAgentActive
                      ? "flex w-full items-center justify-between py-2 text-sm font-semibold text-[var(--kuct-text)]"
                      : "flex w-full items-center justify-between py-2 text-sm font-medium text-[var(--kuct-muted)]"
                  }
                  aria-expanded={agentOpenMobile}
                  onClick={() => setAgentOpenMobile((open) => !open)}
                >
                  <span>{t.nav.agents}</span>
                  <span aria-hidden className="text-[var(--kuct-accent)]/80">
                    {agentOpenMobile ? "−" : "+"}
                  </span>
                </button>
                {agentOpenMobile ? (
                  <ul className="mb-1 space-y-0 border-l border-[var(--kuct-border)] pl-3">
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

              <li className="flex items-center gap-2 border-t border-[var(--kuct-border)] pt-3">
                <ThemeSwitcher />
              </li>

              <li className="pt-2">
                <a
                  href={contactHref}
                  className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
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
