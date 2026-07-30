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
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "text-sm font-semibold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]"
          : "text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-text)]"
      }
    >
      {label}
    </a>
  );
}

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [agentOpenMobile, setAgentOpenMobile] = useState(false);
  const [agentOpenDesktop, setAgentOpenDesktop] = useState(false);
  const agentMenuId = useId();
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
  const contactHref = `${sectionBase}#contact`;
  const homeHref = pathname === "/" ? "#top" : assetPath("/");
  const current = normalizePath(pathname);

  const agentItems: NavLink[] = [
    {
      href: assetPath("/custom-agent/"),
      label: t.nav.customAgentItem,
    },
    {
      href: assetPath("/ai-transform/"),
      label: t.nav.aiTransform,
    },
  ];

  const primaryLinks: NavLink[] = [
    { href: `${sectionBase}#capabilities`, label: t.nav.services },
    { href: `${sectionBase}#process`, label: t.nav.process },
    { href: `${sectionBase}#stack`, label: t.nav.stack },
  ];

  const pageLinks: NavLink[] = [
    { href: assetPath("/news/"), label: t.nav.news },
    { href: assetPath("/about/"), label: t.nav.about },
    { href: assetPath("/careers/"), label: t.nav.careers },
  ];

  const isAgentActive = agentItems.some(
    (item) => normalizePath(item.href) === current,
  );

  const isPageActive = (href: string) => normalizePath(href) === current;

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) {
        setIsMenuOpen(false);
        setAgentOpenMobile(false);
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setAgentOpenMobile(false);
    setAgentOpenDesktop(false);
  }, [pathname]);

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
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex rounded-full px-3 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)] hover:text-[var(--kuct-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li
              className="relative"
              onMouseEnter={() => setAgentOpenDesktop(true)}
              onMouseLeave={() => setAgentOpenDesktop(false)}
            >
              <button
                type="button"
                className={
                  isAgentActive
                    ? "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)]"
                    : "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.08)] hover:text-[var(--kuct-text)]"
                }
                aria-expanded={agentOpenDesktop}
                aria-haspopup="true"
                aria-controls={agentMenuId}
                onClick={() => setAgentOpenDesktop((open) => !open)}
              >
                {t.nav.customAgent}
                <span
                  aria-hidden
                  className={`text-[0.65rem] transition ${agentOpenDesktop ? "text-[var(--kuct-accent)]" : ""}`}
                >
                  ▾
                </span>
              </button>
              <div
                id={agentMenuId}
                role="menu"
                hidden={!agentOpenDesktop}
                className="absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-2"
              >
                <ul className="overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(8,8,18,0.96)] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)] ring-1 ring-[var(--kuct-accent)]/10 backdrop-blur-xl">
                  {agentItems.map((item) => {
                    const active = isPageActive(item.href);
                    return (
                      <li key={item.href} role="none">
                        <a
                          role="menuitem"
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={
                            active
                              ? "block px-4 py-2.5 text-sm font-semibold text-[var(--kuct-accent)]"
                              : "block px-4 py-2.5 text-sm font-medium text-[var(--kuct-muted)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.1)] hover:text-[var(--kuct-text)]"
                          }
                          onClick={() => setAgentOpenDesktop(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
            <ul className="mx-auto flex max-w-6xl flex-col gap-1">
              {[...primaryLinks, ...pageLinks].map((link) => {
                const active = link.href.includes("#")
                  ? false
                  : isPageActive(link.href);
                return (
                  <li key={link.href}>
                    <NavItemLink
                      href={link.href}
                      label={link.label}
                      active={active}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </li>
                );
              })}

              <li className="pt-1">
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
                  <span>{t.nav.customAgent}</span>
                  <span aria-hidden className="text-[var(--kuct-accent)]/80">
                    {agentOpenMobile ? "−" : "+"}
                  </span>
                </button>
                {agentOpenMobile ? (
                  <ul className="mb-2 space-y-1 border-l border-[var(--kuct-border)] pl-3">
                    {agentItems.map((item) => (
                      <li key={item.href}>
                        <NavItemLink
                          href={item.href}
                          label={item.label}
                          active={isPageActive(item.href)}
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
