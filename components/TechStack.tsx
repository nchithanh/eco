"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

const LOGO_COLORS: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#111111",
  TypeScript: "#3178C6",
  Tailwind: "#06B6D4",
  "Node.js": "#339933",
  Flutter: "#02569B",
  "React Native": "#61DAFB",
  PostgreSQL: "#4169E1",
  Docker: "#2496ED",
  NestJS: "#E0234E",
  Express: "#444444",
  Strapi: "#4945FF",
};

export function TechStack() {
  const { t } = useLocale();
  const { eyebrow, titleLead, titleHighlight, support, logos } = t.stack;

  return (
    <section
      id="stack"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/40 py-24"
    >
      <div
        aria-hidden
        className="kuct-tech-ribbon pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[120%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.22em] text-[var(--kuct-muted)] uppercase">
          {eyebrow}
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
          {titleLead}{" "}
          <span className="font-serif-accent text-[1.08em] font-normal">
            {titleHighlight}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
          {support}
        </p>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10">
          {logos.map((name) => (
            <li
              key={name}
              className="group flex items-center gap-2 text-sm font-semibold text-[var(--kuct-text)]/80 transition duration-200 hover:-translate-y-0.5 hover:text-[var(--kuct-text)]"
              title={name}
            >
              <span
                aria-hidden
                className="grid size-8 place-items-center rounded-lg bg-white/70 text-[10px] font-bold shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md"
                style={{ color: LOGO_COLORS[name] ?? "var(--kuct-accent)" }}
              >
                {name.slice(0, 2).toUpperCase()}
              </span>
              <span className="hidden sm:inline">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
