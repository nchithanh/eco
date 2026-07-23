"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const home = pathname === "/" ? "" : "/";

  const links = [
    { href: `${home}#capabilities`, label: t.nav.services },
    { href: `${home}#process`, label: t.nav.process },
    { href: `${home}#stack`, label: t.nav.stack },
    { href: "/careers", label: t.nav.careers },
    { href: `${home}#contact`, label: t.nav.contact },
  ] as const;

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header className="border-b border-white/40 bg-white/35 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
          aria-label={t.nav.ariaMain}
        >
          <a
            href={pathname === "/" ? "#top" : "/"}
            className="text-[var(--kuct-text)] transition duration-200 hover:opacity-75 hover:scale-[1.02]"
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
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
            <a
              href={`${home}#contact`}
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
        {isMenuOpen && (
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
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
