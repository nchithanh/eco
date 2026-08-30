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

function isDolphinProductHref(href: string) {
  return /\/(ai-transform|dolphin-(care|ops|intelligence))\/?$/.test(href);
}

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
  const [headerHidden, setHeaderHidden] = useState(false);
  const closeMenuRef = useRef<HTMLButtonElement>(null);
  const [hash, setHash] = useState("");
  const lastScrollY = useRef(0);
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
  const contactHref = `${sectionBase}#contact`;
  const homeHref = pathname === "/" ? "#top" : assetPath("/");
  const current = normalizePath(pathname);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash.replace(/^#/, ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

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
      href: assetPath("/services/landing/"),
      label: t.nav.serviceLanding,
    },
    {
      href: assetPath("/services/mobile/"),
      label: t.nav.serviceMobile,
    },
    {
      href: assetPath("/services/software/"),
      label: t.nav.serviceBackend,
    },
  ];

  const agentItems: NavLink[] = [
    {
      href: assetPath("/ai-transform/"),
      label: t.nav.aiTransform,
    },
    {
      href: assetPath("/dolphin-care/"),
      label: t.nav.agentDolphin,
    },
    {
      href: assetPath("/dolphin-ops/"),
      label: t.nav.dolphinOps,
    },
    {
      href: assetPath("/dolphin-intelligence/"),
      label: t.nav.dolphinIntelligence,
    },
  ];

  const pageLinks: NavLink[] = [
    { href: assetPath("/demos/"), label: t.nav.templates },
    { href: assetPath("/news/"), label: t.nav.news },
    { href: assetPath("/about/"), label: t.nav.about },
    { href: assetPath("/careers/"), label: t.nav.careers },
  ];

  const solutionsLink: NavLink = {
    href: `${sectionBase}#solutions`,
    label: t.nav.solutions,
  };
  const desktopGnbLinks: NavLink[] = [solutionsLink, ...serviceItems, ...agentItems];
  const allNavLinks = [solutionsLink, ...serviceItems, ...agentItems, ...pageLinks];

  const isPageActive = (href: string) => {
    const [pathPart, hashPart] = href.split("#");
    const path = normalizePath(pathPart || href);
    if (path !== current) return false;
    if (hashPart) return hash === hashPart;
    const hashOwnedBySibling = allNavLinks.some((item) => {
      const [p, h] = item.href.split("#");
      return Boolean(h) && normalizePath(p || item.href) === path && hash === h;
    });
    return !hashOwnedBySibling;
  };

  const isHomeActive = current === "/" && (hash === "" || hash === "top");
  const isContactActive = hash === "contact";

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setIsMenuOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeMenuRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const gnbLinkClass =
    "kuct-gnb-link inline-flex h-[2.75rem] shrink-0 items-center text-[0.875rem] leading-none tracking-[-0.02em] text-[var(--kuct-text)] transition-colors hover:text-[var(--kuct-accent)]";
  const gnbLinkActiveClass = " text-[var(--kuct-accent)]";
  const utilityLinkClass =
    "kuct-nav-utility kuct-gnb-link inline-flex h-[2.75rem] shrink-0 items-center text-[0.875rem] leading-none tracking-[-0.02em] text-[var(--kuct-text)] transition-colors hover:text-[var(--kuct-accent)]";
  const logoLinkClass =
    "inline-flex h-[2.75rem] shrink-0 items-center text-[var(--kuct-text)] transition hover:opacity-85";
  const logoActiveWordmark =
    "font-display text-base font-bold leading-none tracking-tight text-[var(--kuct-accent)] sm:text-lg";
  const logoActiveTagline =
    "text-[9px] font-medium tracking-[0.34em] text-[var(--kuct-accent)] uppercase opacity-80 sm:text-[10px]";

  const closeMenu = () => setIsMenuOpen(false);
  const menuIconClass =
    "kuct-mobile-nav__icon grid size-10 place-items-center text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]";

  return (
    <>
    <div
      className={`kuct-site-header sticky top-0 z-50 ${
        headerHidden ? "is-hidden" : ""
      }`}
    >
      <AnnouncementBar />
      <header className="bg-white">
        <nav
          className="mx-auto max-w-7xl px-6"
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
              <a
                href={contactHref}
                aria-current={isContactActive ? "page" : undefined}
                className={`${utilityLinkClass}${
                  isContactActive ? gnbLinkActiveClass : ""
                }`}
              >
                {t.nav.talk}
              </a>
              <div className="kuct-nav-utility kuct-gnb-link flex h-[2.75rem] items-center text-[0.875rem]">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="flex min-h-[3.65rem] items-center gap-6 pb-3 xl:gap-8">
              <a
                href={homeHref}
                className={`${logoLinkClass}${
                  isHomeActive ? gnbLinkActiveClass : ""
                }`}
                aria-label="Dolphin Software"
                aria-current={isHomeActive ? "page" : undefined}
              >
                <Logo
                  showWordmark
                  wordmarkClassName={
                    isHomeActive ? logoActiveWordmark : undefined
                  }
                  wordmarkTaglineClassName={
                    isHomeActive ? logoActiveTagline : undefined
                  }
                />
              </a>

              <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1 xl:gap-x-5">
                {desktopGnbLinks.map((link) => {
                  const active = isPageActive(link.href);
                  const dolphin = isDolphinProductHref(link.href);
                  return (
                    <li key={link.href + link.label}>
                      <a
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`${gnbLinkClass}${
                          dolphin ? " kuct-nav-dolphin" : ""
                        }${active ? gnbLinkActiveClass : ""}`}
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
              className={`${logoLinkClass}${
                isHomeActive ? gnbLinkActiveClass : ""
              }`}
              aria-label="Dolphin Software"
              aria-current={isHomeActive ? "page" : undefined}
            >
              <Logo
                showWordmark
                wordmarkClassName={
                  isHomeActive ? logoActiveWordmark : undefined
                }
                wordmarkTaglineClassName={
                  isHomeActive ? logoActiveTagline : undefined
                }
              />
            </a>

            <div className="flex shrink-0 items-center gap-2 text-[0.875rem]">
              <LanguageSwitcher />
              <button
                type="button"
                className={menuIconClass}
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
      </header>
    </div>

        {isMenuOpen ? (
          <nav
            id="mobile-nav"
            aria-label={t.nav.ariaMobile}
            className="kuct-mobile-nav fixed inset-0 z-[70] flex h-dvh flex-col lg:hidden"
          >
            <div className="kuct-mobile-nav__bar flex h-14 shrink-0 items-center justify-between gap-4 px-6 sm:h-[3.75rem]">
              <a
                href={homeHref}
                className={`${logoLinkClass}${
                  isHomeActive ? gnbLinkActiveClass : ""
                }`}
                aria-label="Dolphin Software"
                aria-current={isHomeActive ? "page" : undefined}
                onClick={closeMenu}
              >
                <Logo
                  showWordmark
                  wordmarkClassName={
                    isHomeActive ? logoActiveWordmark : undefined
                  }
                  wordmarkTaglineClassName={
                    isHomeActive ? logoActiveTagline : undefined
                  }
                />
              </a>
              <div className="flex shrink-0 items-center gap-2 text-[0.875rem]">
                <LanguageSwitcher />
                <button
                  ref={closeMenuRef}
                  type="button"
                  className={menuIconClass}
                  aria-label={t.nav.closeMenu}
                  onClick={closeMenu}
                >
                  <span aria-hidden="true" className="text-lg leading-none">
                    ×
                  </span>
                </button>
              </div>
            </div>

            <ul className="mx-auto flex min-h-0 w-full max-w-lg flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-3">
              <li>
                <a
                  href={solutionsLink.href}
                  aria-current={isPageActive(solutionsLink.href) ? "page" : undefined}
                  className="kuct-mobile-nav__link"
                  onClick={closeMenu}
                >
                  {solutionsLink.label}
                </a>
              </li>
              <li className="kuct-mobile-nav__label" aria-hidden="true">
                {t.nav.services}
              </li>
              {serviceItems.map((item) => (
                <li key={item.href + item.label}>
                  <a
                    href={item.href}
                    aria-current={isPageActive(item.href) ? "page" : undefined}
                    className="kuct-mobile-nav__link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="kuct-mobile-nav__label" aria-hidden="true">
                {t.nav.agents}
              </li>
              {agentItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isPageActive(item.href) ? "page" : undefined}
                    className={`kuct-mobile-nav__link${
                      isDolphinProductHref(item.href) ? " kuct-nav-dolphin" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li
                className="mt-3 border-t border-[var(--kuct-border)] pt-3"
                aria-hidden="true"
              />
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isPageActive(link.href) ? "page" : undefined}
                    className="kuct-mobile-nav__link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <ThemeSwitcher />
              </li>
            </ul>

            <div className="kuct-mobile-nav__foot shrink-0">
              <a
                href={contactHref}
                className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-lg px-4 py-3.5 text-sm font-semibold"
                onClick={closeMenu}
              >
                {t.nav.talk}
              </a>
            </div>
          </nav>
        ) : null}
    </>
  );
}
