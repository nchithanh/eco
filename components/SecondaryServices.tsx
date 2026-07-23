"use client";

import Image from "next/image";
import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const services = [
  {
    key: "architecture" as const,
    image: "/service-architecture.jpg",
    titleKey: "architectureTitle" as const,
    bodyKey: "architectureBody" as const,
  },
  {
    key: "stock" as const,
    image: "/service-stock.jpg",
    titleKey: "stockTitle" as const,
    bodyKey: "stockBody" as const,
  },
];

export function SecondaryServices() {
  const { t } = useLocale();
  const s = t.secondary;

  return (
    <section id="services" className="scroll-mt-20 border-t border-white/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {s.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          <BrandText size="md">{s.title}</BrandText>
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">{s.support}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.key}
              className="kuct-glass kuct-card-hover group overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={s[item.titleKey]}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium">
                  {s[item.titleKey]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {s[item.bodyKey]}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--kuct-accent)] transition duration-200 hover:gap-2 hover:underline"
                >
                  {s.learnMore}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
