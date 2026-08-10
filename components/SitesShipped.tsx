"use client";

import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { assetPath, themeAsset } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme";
import { isWorkSlug } from "@/lib/works-details";

const WORK_IMAGES: Record<string, string> = {
 billiard: "/works/billiard.jpg",
 badminton: "/works/badminton.jpg",
 tickets: "/works/tickets.jpg",
 beauty: "/works/beauty.jpg",
 cafe: "/works/tickets.jpg",
 clinic: "/works/beauty.jpg",
};

export function SitesShipped({
 embedded = false,
}: {
 embedded?: boolean;
}) {
 const { t } = useLocale();
 const { theme } = useTheme();
 const w = t.works;

 return (
 <section
 id="sites-shipped"
 className={
 embedded
 ? "scroll-mt-20 py-14 sm:py-16"
 : "scroll-mt-20 py-24"
 }
 >
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {w.eyebrow}
 </p>
 <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
 <AccentText>{w.title}</AccentText>
 </h2>
 <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {w.support}
 </p>
 </Reveal>

 <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
 {w.items.map((item, index) => {
 const slug = isWorkSlug(item.id) ? item.id : null;
 const href = slug ? assetPath(`/works/${slug}/`) : `${assetPath("/")}#contact`;
 const image = WORK_IMAGES[item.id] ?? "/works/billiard.jpg";
 return (
 <Reveal key={item.id} delay={index * 40}>
 <a
 href={href}
 className="group flex w-full flex-col overflow-hidden kuct-surface-card text-left transition "
 >
 <div className="relative aspect-[16/10] overflow-hidden">
 <LazyImage
 src={themeAsset(image, theme)}
 alt={item.title}
 fill
 className="object-cover transition duration-500 group-hover:scale-[1.03]"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20rem"
 />
 </div>
 <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
 <p className="text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
 {item.tag}
 </p>
 <h3 className="font-display text-base font-semibold tracking-tight text-[var(--kuct-text)] sm:text-lg">
 {item.title}
 </h3>
 <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.result}
 </p>
 </div>
 </a>
 </Reveal>
 );
 })}
 </div>

 <Reveal className="mt-8 text-center sm:mt-10">
 <a
 href={`${assetPath("/")}#contact`}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 >
 {w.cta}
 </a>
 </Reveal>
 </div>
 </section>
 );
}
