const links = [
  { href: "#capabilities", label: "Năng lực" },
  { href: "#process", label: "Quy trình" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#contact", label: "Liên hệ" },
] as const;

export function Nav() {
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
      </nav>
    </header>
  );
}
