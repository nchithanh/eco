"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Logo } from "@/components/Logo";
import { BASE_PATH, assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { usePagePreview } from "@/components/PagePreviewProvider";

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const { openHref } = usePagePreview();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionBase = pathname === "/" ? "" : `${BASE_PATH}/`;
  const contactHref = `${sectionBase}#contact`;
  const homeHref = pathname === "/" ? "#top" : assetPath("/");

  // Close mobile drawer when switching to desktop breakpoint
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

  const links = [
    { href: `${sectionBase}#capabilities`, label: t.nav.services },
    { href: `${sectionBase}#process`, label: t.nav.process },
    { href: `${sectionBase}#technology`, label: t.nav.stack },
    { href: assetPath("/news/"), label: t.nav.news },
    { href: assetPath("/careers/"), label: t.nav.careers },
  ] as const;

  const onNavClick = (
    href: string,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (href.includes("/careers")) {
      openHref(href, event);
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header className="border-b border-white/40 bg-white/35 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
          aria-label={t.nav.ariaMain}
        >
          <a
            href={homeHref}
            className="flex shrink-0 items-center text-[var(--kuct-text)] transition duration-200 hover:opacity-75 hover:scale-[1.02]"
            aria-label="KU THANH"
          >
            <Logo className="h-9 w-auto sm:h-10" />
          </a>
          <div className="flex items-center gap-5">
            <ul className="hidden gap-7 text-sm text-[var(--kuct-muted)] md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="kuct-link"
                    onClick={(event) => onNavClick(l.href, event)}
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
              className="kuct-btn-primary hidden rounded-full px-4 py-2 text-xs font-semibold sm:inline-flex"
            >
              {t.nav.contact}
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-white/60 bg-white/40 text-[var(--kuct-text)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-[var(--kuct-accent)] hover:bg-white/70 hover:shadow-[0_8px_20px_rgba(139,92,246,0.15)] md:hidden"
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
            className="border-t border-white/40 bg-white/50 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--kuct-muted)]">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="kuct-link"
                    onClick={(event) => {
                      onNavClick(link.href, event);
                      setIsMenuOpen(false);
                    }}
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
