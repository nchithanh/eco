"use client";

import { usePagePreview } from "@/components/PagePreviewProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { TECH_NAME_TO_SLUG } from "@/lib/tech-stack";

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
  AWS: "#FF9900",
  Kubernetes: "#326CE5",
  Grafana: "#F46800",
  Elasticsearch: "#005571",
  Redis: "#DC382D",
  Terraform: "#7B42BC",
};

export function TechStack() {
  const { t } = useLocale();
  const { openTech } = usePagePreview();
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

      <div className="relative mx-auto max-w-5xl px-6 text-left">
        <p className="text-xs font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase">
          {eyebrow}
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
          <span className="block">{titleLead}</span>
          <span className="font-serif-accent mt-1 block whitespace-nowrap text-[1.08em] font-normal">
            {titleHighlight}
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
          {support}
        </p>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-6">
          {logos.map((name) => {
            const slug = TECH_NAME_TO_SLUG[name];
            if (!slug) return null;
            const href = assetPath(`/tech/${slug}/`);

            return (
              <li key={name}>
                <a
                  href={href}
                  title={name}
                  aria-label={name}
                  onClick={(event) => {
                    event.preventDefault();
                    openTech(slug);
                  }}
                  className="group flex touch-pan-y items-center gap-2 text-base font-semibold text-[var(--kuct-text)]/80 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--kuct-text)]"
                >
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/70 text-[0.625rem] font-bold shadow-sm ring-1 ring-[var(--kuct-accent)]/15 backdrop-blur-sm transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-md group-hover:ring-[var(--kuct-accent)]/40"
                    style={{ color: LOGO_COLORS[name] ?? "var(--kuct-accent)" }}
                  >
                    {name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
