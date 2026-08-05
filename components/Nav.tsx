"use client";

import { useEffect, useId, useRef, useState } from "react";
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
 <ul className="overflow-hidden rounded-xl bg-white py-1.5 shadow-[0_16px_40px_rgb(26_21_32/0.1)]">
 {items.map((item) => {
 const active = isPageActive(item.href);
 return (
 <li key={item.href + item.label} role="none">
 <a
 role="menuitem"
 href={item.href}
 aria-current={active ? "page" : undefined}
 className={
 "block px-4 py-2.5 text-sm font-medium text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.1)] hover:text-[var(--kuct-accent)]"
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
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const servicesMenuId = useId();
  const agentMenuId = useId();
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
        setServicesOpenDesktop(false);
        setAgentOpenDesktop(false);
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

 const dropdownTriggerClass =
 "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)]";

 return (
 <div
 className={`kuct-site-header sticky top-0 z-50 ${
 headerHidden ? "is-hidden" : ""
 }`}
 >
 <AnnouncementBar />
 <header className="border-b border-black/8 bg-white">
 <nav
 className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:h-[3.75rem]"
 aria-label={t.nav.ariaMain}
 >
 <a
 href={homeHref}
 className="relative flex h-full shrink-0 items-center text-[var(--kuct-text)] transition hover:opacity-85 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[var(--kuct-accent)] after:content-['']"
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
 className={dropdownTriggerClass}
 aria-expanded={servicesOpenDesktop}
 aria-haspopup="true"
 aria-controls={servicesMenuId}
 onClick={() => setServicesOpenDesktop((open) => !open)}
 >
 {t.nav.services}
 <span aria-hidden className="text-[0.65rem] text-[var(--kuct-text)]">
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
 className={dropdownTriggerClass}
 aria-expanded={agentOpenDesktop}
 aria-haspopup="true"
 aria-controls={agentMenuId}
 onClick={() => setAgentOpenDesktop((open) => !open)}
 >
 {t.nav.agents}
 <span aria-hidden className="text-[0.65rem] text-[var(--kuct-text)]">
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
 className="inline-flex rounded-full px-3 py-1.5 text-sm font-medium text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)] hover:text-[var(--kuct-accent)]"
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
 <LanguageSwitcher />
 <button
 type="button"
 className="grid size-9 place-items-center text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)] lg:hidden"
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
