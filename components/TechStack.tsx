"use client";

import { usePagePreview } from "@/components/PagePreviewProvider";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { TECH_NAME_TO_SLUG } from "@/lib/tech-stack";

const STACK_GROUPS = [
  {
    key: "frontend" as const,
    names: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Flutter",
      "React Native",
    ],
    emphasize: true,
  },
  {
    key: "backend" as const,
    names: ["Node.js", "NestJS", "Express", "Strapi", "PostgreSQL"],
    emphasize: true,
  },
  {
    key: "infra" as const,
    names: ["Docker", "AWS", "Kubernetes", "Terraform"],
    emphasize: false,
  },
  {
    key: "data" as const,
    names: ["Redis", "Elasticsearch", "Grafana"],
    emphasize: false,
  },
] as const;

export function TechStack() {
  const { t } = useLocale();
  const { openTech } = usePagePreview();
  const { eyebrow, titleLead, titleHighlight, support, logos, groups } = t.stack;
  const logoSet = new Set(logos);

  return (
    <section id="stack" className="relative scroll-mt-20 py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {eyebrow}
          </p>

          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <span className="block">{titleLead}</span>
            <span className="font-serif-accent mt-2 block text-[1.15rem] font-normal text-[var(--kuct-accent)] sm:text-[1.35rem]">
              {titleHighlight}
            </span>
          </h2>

          <p className="mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8 sm:mt-14">
          {STACK_GROUPS.map((group, groupIndex) => {
            const items = group.names.filter((name) => logoSet.has(name));
            if (items.length === 0) return null;

            return (
              <Reveal key={group.key} delay={groupIndex * 60}>
                <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
                  {groups[group.key]}
                </p>
                <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 sm:gap-3">
                  {items.map((name) => {
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
                          className={
                            group.emphasize
                              ? "inline-flex items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] px-3.5 py-2 text-sm font-semibold text-[var(--kuct-text)] backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-accent)]"
                              : "inline-flex items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] px-3.5 py-2 text-sm font-medium text-[var(--kuct-muted)] backdrop-blur-md transition duration-300 hover:border-[var(--kuct-accent)]/35 hover:text-[var(--kuct-text)]"
                          }
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
