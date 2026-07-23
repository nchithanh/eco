"use client";

import { useState } from "react";

const links = [
  { href: "#capabilities", label: "Năng lực" },
  { href: "#process", label: "Quy trình" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#contact", label: "Liên hệ" },
] as const;

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B1220]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Chính"
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-[var(--yega-text)]">
          YeGa
        </a>
        <ul className="hidden gap-8 text-sm text-[var(--yega-muted)] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-[var(--yega-accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="grid size-9 place-items-center border border-white/10 text-[var(--yega-text)] transition-colors hover:border-[var(--yega-accent)] md:hidden"
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-controls="mobile-nav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {isMenuOpen ? "×" : "≡"}
          </span>
        </button>
      </nav>
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Điều hướng di động"
          className="border-t border-white/5 px-6 py-4 md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--yega-muted)]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[var(--yega-accent)]"
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
  );
}
