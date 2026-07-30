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

  const links: NavLink[] = [
    { href: `${sectionBase}#capabilities`, label: t.nav.services },
    { href: `${sectionBase}#process`, label: t.nav.process },
    { href: `${sectionBase}#technology`, label: t.nav.stack },
    { href: assetPath("/news/"), label: t.nav.news },
    { href: assetPath("/about/"), label: t.nav.about },
    { href: assetPath("/careers/"), label: t.nav.careers },
  ];

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

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header className="border-b border-[var(--kuct-border)] bg-[rgba(4,4,12,0.95)] backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-2.5 sm:py-3"
          aria-label={t.nav.ariaMain}
        >
          <a
            href={homeHref}
            className="flex min-w-0 max-w-[min(100%,10rem)] shrink items-center text-[var(--kuct-text)] transition duration-200 hover:opacity-75 sm:max-w-[12rem] lg:max-w-none"
            aria-label="Dolphin Kick"
          >
            <Logo showWordmark />
          </a>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2.5 sm:gap-4">
            <ul className="hidden items-center gap-5 text-[0.8125rem] text-[var(--kuct-muted)] lg:gap-6 md:flex">
              <li>
                <a href={`${sectionBase}#capabilities`} className="kuct-link">
                  {t.nav.services}
                </a>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setAgentOpenDesktop(true)}
                onMouseLeave={() => setAgentOpenDesktop(false)}
              >
                <button
                  type="button"
                  className="kuct-link inline-flex items-center gap-1"
                  aria-expanded={agentOpenDesktop}
                  aria-haspopup="true"
                  aria-controls={agentMenuId}
                  onClick={() => setAgentOpenDesktop((open) => !open)}
                >
                  {t.nav.customAgent}
                  <span aria-hidden className="text-[0.65rem]">
                    ▾
                  </span>
                </button>
                <div
                  id={agentMenuId}
                  role="menu"
                  hidden={!agentOpenDesktop}
                  className="absolute top-full left-0 z-50 pt-2"
                >
                  <ul className="min-w-[16rem] overflow-hidden rounded-xl border border-[var(--kuct-border)] bg-[rgba(8,8,18,0.95)] py-1 shadow-[0_12px_30px_rgb(0_0_0/0.5)] backdrop-blur-xl">
                    {agentItems.map((item) => (
                      <li key={item.href} role="none">
                        <a
                          role="menuitem"
                          href={item.href}
                          className="kuct-menu-item block px-4 py-2.5 text-sm text-[var(--kuct-text)]"
                          onClick={() => setAgentOpenDesktop(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {links.slice(1).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="kuct-link"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
            <LanguageSwitcher />
            <a
              href={contactHref}
              className="kuct-btn-primary hidden rounded-full px-5 py-2.5 text-xs font-semibold shadow-[0_10px_24px_rgb(var(--kuct-accent-rgb)/0.35)] sm:inline-flex"
            >
              {t.nav.contact}
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.8)] text-[var(--kuct-text)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-[var(--kuct-accent)] hover:bg-[rgba(var(--kuct-accent-rgb),0.2)] hover:shadow-[0_8px_20px_rgba(139,92,246,0.15)] md:hidden"
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
            className="border-t border-[var(--kuct-border)] bg-[rgba(4,4,12,0.95)] px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--kuct-muted)]">
              <li>
                <a
                  href={`${sectionBase}#capabilities`}
                  className="kuct-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="kuct-link flex w-full items-center justify-between"
                  aria-expanded={agentOpenMobile}
                  onClick={() => setAgentOpenMobile((open) => !open)}
                >
                  <span>{t.nav.customAgent}</span>
                  <span aria-hidden>{agentOpenMobile ? "−" : "+"}</span>
                </button>
                {agentOpenMobile ? (
                  <ul className="mt-2 space-y-2 border-l border-[var(--kuct-border)] pl-3">
                    {agentItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="kuct-link block"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setAgentOpenMobile(false);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
              {links.slice(1).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="kuct-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contactHref}
                  className="kuct-link"
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
