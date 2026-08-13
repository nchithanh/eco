"use client";

import { Reveal } from "@/components/Reveal";
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
 Golang: "#00ADD8",
 Laravel: "#FF2D20",
 MySQL: "#4479A1",
};

function TechChip({ name }: { name: string }) {
 const label = name === "React Native" ? "React" : name;
 return (
 <>
 <span
 aria-hidden
 className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-surface)] text-[0.625rem] font-bold shadow-[var(--kuct-shadow)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[var(--kuct-accent)]"
 style={{ color: LOGO_COLORS[name] ?? "var(--kuct-accent)" }}
 >
 {label.slice(0, 2).toUpperCase()}
 </span>
 <span className="min-w-0">{label}</span>
 </>
 );
}

export function TechStack() {
 const { t } = useLocale();
 const { eyebrow, titleLead, support, logos } = t.stack;

 return (
 <section
 id="stack"
 className="relative scroll-mt-20 overflow-hidden py-14 sm:py-16"
 aria-labelledby="home-stack-heading"
 >
 <div
 aria-hidden
 className="kuct-tech-ribbon pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[120%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
 />

 <div className="relative mx-auto max-w-7xl px-6 text-center">
 <Reveal variant="title">
 <p className="kuct-type-eyebrow text-[11px] sm:text-xs">
 {eyebrow}
 </p>

 <h2
 id="home-stack-heading"
 className="kuct-type-h2 mx-auto mt-4 max-w-3xl font-display text-3xl sm:text-[2.15rem] lg:text-[2.35rem]"
 >
 {titleLead}
 </h2>

 <p className="kuct-type-body mx-auto mt-5 max-w-[52ch]">
 {support}
 </p>
 </Reveal>

 <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-3 justify-items-center gap-x-3 gap-y-5 sm:mt-12 md:grid-cols-7 md:gap-x-4 md:gap-y-6">
 {logos.map((name, index) => {
 const slug = TECH_NAME_TO_SLUG[name];
 const className =
 "group flex touch-pan-y items-center justify-center gap-2 text-sm font-semibold text-[var(--kuct-text)]/80 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--kuct-text)] md:text-base";

 return (
 <Reveal as="li" key={name} delay={index * 40} variant="scale">
 {slug ? (
 <a
 href={assetPath(`/tech/${slug}/`)}
 title={name}
 aria-label={name}
 className={className}
 >
 <TechChip name={name} />
 </a>
 ) : (
 <span className={className} title={name}>
 <TechChip name={name} />
 </span>
 )}
 </Reveal>
 );
 })}
 </ul>
 </div>
 </section>
 );
}
