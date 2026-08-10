"use client";

import { useEffect, useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { EmbedSiteMock } from "@/components/EmbedSiteMock";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { getAgentDolphinCopy } from "@/lib/i18n/agent-dolphin-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { MASCOT } from "@/lib/mascot";
import { useDesktopMotion } from "@/lib/motion";
import { useQuote } from "@/components/QuoteProvider";

const IMG = {
 compare: "/services/agent-dolphin/compare.jpg",
 context: "/services/agent-dolphin/context.jpg",
 care: "/services/agent-dolphin/care.jpg",
} as const;

const CHAT_AVATAR = MASCOT.chat;
const CHAR_MS = 26;
const BEFORE_TYPE_MS = 420;
const AFTER_CARD_MS = 700;
const LOOP_PAUSE_MS = 2200;

function HeroChatCards({
 agentName,
 justNow,
 cards,
 priority,
}: {
 agentName: string;
 justNow: string;
 cards: readonly [string, string, string];
 priority?: boolean;
}) {
 const motion = useDesktopMotion();
 const [inView, setInView] = useState(false);
 const [visibleCards, setVisibleCards] = useState(0);
 const [streamIndex, setStreamIndex] = useState<number | null>(null);
 const [streamText, setStreamText] = useState("");
 const [awaitingType, setAwaitingType] = useState(false);
 const [doneTexts, setDoneTexts] = useState<string[]>(["", "", ""]);

 // Hero is above the fold — start as soon as desktop motion is allowed.
 useEffect(() => {
 setInView(motion);
 }, [motion, cards]);

 useEffect(() => {
 if (!motion) {
 setVisibleCards(3);
 setDoneTexts([...cards]);
 setStreamIndex(null);
 setStreamText("");
 setAwaitingType(false);
 return;
 }

 if (!inView) return;

 let cancelled = false;
 const timers: number[] = [];
 const schedule = (fn: () => void, ms: number) => {
 const id = window.setTimeout(fn, ms);
 timers.push(id);
 };

 const reset = () => {
 setVisibleCards(0);
 setStreamIndex(null);
 setStreamText("");
 setAwaitingType(false);
 setDoneTexts(["", "", ""]);
 };

 const playCard = (index: number) => {
 if (cancelled) return;
 if (index >= cards.length) {
 schedule(() => {
 if (cancelled) return;
 reset();
 schedule(() => playCard(0), 320);
 }, LOOP_PAUSE_MS);
 return;
 }

 const full = cards[index] ?? "";
 setVisibleCards(index + 1);
 setAwaitingType(true);
 setStreamIndex(null);
 setStreamText("");

 schedule(() => {
 if (cancelled) return;
 setAwaitingType(false);
 setStreamIndex(index);
 let charIndex = 0;
 setStreamText("");

 const tick = () => {
 if (cancelled) return;
 charIndex += 1;
 setStreamText(full.slice(0, charIndex));
 if (charIndex < full.length) {
 schedule(tick, CHAR_MS);
 return;
 }
 setDoneTexts((prev) => {
 const next = [...prev];
 next[index] = full;
 return next;
 });
 setStreamIndex(null);
 setStreamText("");
 schedule(() => playCard(index + 1), AFTER_CARD_MS);
 };

 tick();
 }, BEFORE_TYPE_MS);
 };

 reset();
 schedule(() => playCard(0), 200);

 return () => {
 cancelled = true;
 timers.forEach((id) => window.clearTimeout(id));
 };
 }, [motion, inView, cards]);

 const offsets = [
 "translate-x-0 lg:translate-x-2",
 "translate-x-0 lg:-translate-x-1",
 "translate-x-0 lg:translate-x-4",
 ] as const;

 return (
 <div
 className="relative min-h-[22rem] overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_1rem_2.5rem_rgb(26_21_32/0.08)] sm:min-h-[26rem] lg:min-h-[28rem]"
 data-motion={motion ? "desktop" : "static"}
 >
 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(var(--kuct-accent-rgb),0.18),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(var(--kuct-accent-rgb),0.1),transparent_50%)]" />
 <div className="relative flex h-full items-center justify-center px-4 py-6 sm:px-10 sm:py-8">
 <ul className="flex w-full max-w-md list-none flex-col gap-3 p-0 sm:gap-3.5">
 {cards.map((full, index) => {
 if (index >= visibleCards) return null;
 const isStreaming = streamIndex === index;
 const isAwaiting =
 awaitingType && visibleCards === index + 1 && streamIndex === null;
 const text = isStreaming ? streamText : doneTexts[index] || "";
 const showCursor = isStreaming && streamText.length < full.length;

 return (
 <li
 key={`hero-card-${index}`}
 className={`kuct-ai-chat__toast w-full max-w-[22rem] self-center sm:max-w-none ${offsets[index] ?? ""}`}
 style={
 motion ? { animationDelay: `${index * 40}ms` } : { animation: "none" }
 }
 >
 <span className="flex items-center gap-2">
 <span className="kuct-ai-chat__toast-avatar" aria-hidden>
 <img
 src={assetPath(CHAT_AVATAR)}
 alt=""
 width={28}
 height={28}
 loading={priority && index === 0 ? "eager" : "lazy"}
 decoding="async"
 />
 </span>
 <span className="relative flex min-w-0 flex-1 items-center gap-1.5">
 <span
 className="size-1.5 shrink-0 rounded-full bg-emerald-500"
 aria-hidden
 />
 <span className="truncate text-xs font-semibold text-[var(--kuct-text)]">
 {agentName}
 </span>
 <span className="ml-auto shrink-0 text-[0.65rem] text-[var(--kuct-muted)]">
 {justNow}
 </span>
 </span>
 </span>
 <span
 className="mt-2 block min-h-[2.75rem] text-xs leading-relaxed text-[var(--kuct-muted)] sm:text-[0.8rem]"
 aria-live="polite"
 >
 {isAwaiting ? (
 <span className="inline-flex items-center gap-1 pt-1" aria-hidden>
 <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse" />
 <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:150ms]" />
 <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:300ms]" />
 </span>
 ) : (
 <>
 {text}
 {showCursor ? (
 <span
 className="ml-0.5 inline-block text-[var(--kuct-accent)]"
 aria-hidden
 >
 ▍
 </span>
 ) : null}
 </>
 )}
 </span>
 </li>
 );
 })}
 </ul>
 </div>
 </div>
 );
}

function SectionImage({
 src,
 alt,
 priority = false,
 aspect = "aspect-[16/9]",
}: {
 src: string;
 alt: string;
 priority?: boolean;
 aspect?: string;
}) {
 return (
 <div
 className={`relative ${aspect} overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_1rem_2.5rem_rgb(26_21_32/0.08)]`}
 >
 <LazyImage
 src={assetPath(src)}
 alt={alt}
 fill
 className="object-cover"
 sizes="(min-width: 1024px) 56rem, 100vw"
 priority={priority}
 />
 </div>
 );
}

export function AgentDolphinContent({ embedded = false }: { embedded?: boolean }) {
 const { locale } = useLocale();
 const c = getAgentDolphinCopy(locale);
 const { openQuote } = useQuote();
 const faqId = useId();
 const [openFaq, setOpenFaq] = useState<number | null>(0);
 const homePath = assetPath("/").replace(/\/$/, "");
 const zaloHref = "https://zalo.me/0779937633";
 const secondaryIsZalo = /zalo/i.test(c.ctaSecondary);
 const secondaryHref = secondaryIsZalo ? zaloHref : assetPath("/ai-transform/");

 return (
 <div className={embedded ? "pb-6" : undefined}>
 <section
 className={
 embedded
 ? "relative overflow-hidden py-12 sm:py-16"
 : "relative overflow-hidden py-20 sm:py-28"
 }
 >
 <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
 <div className="relative mx-auto max-w-6xl px-6">
 <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
 <Reveal variant="title">
 <div className="text-left">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.eyebrow}
 </p>
 <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
 <AccentText>{c.headline}</AccentText>
 </h1>
 <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
 {c.support}
 </p>
 <div className="mt-8 flex flex-wrap items-center gap-3">
 <button
 type="button"
 onClick={openQuote}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 >
 {c.ctaPrimary}
 </button>
 <a
 href={secondaryHref}
 className="kuct-btn-ghost inline-flex items-center "
 {...(secondaryIsZalo
 ? { target: "_blank", rel: "noopener noreferrer" }
 : {})}
 >
 {c.ctaSecondary}
 </a>
 </div>
 <p className="mt-6 text-xs font-medium tracking-wide text-[var(--kuct-muted)]">
 {c.trustLine}
 </p>
 </div>
 </Reveal>
 <Reveal delay={80} variant="right">
 <div className="min-w-0">
 <HeroChatCards
 agentName={c.heroAgentName}
 justNow={c.heroJustNow}
 cards={c.heroCards}
 priority={!embedded}
 />
 </div>
 </Reveal>
 </div>
 </div>
 </section>

 <section className="kuct-section-wash scroll-mt-20 py-20">
 <div className="mx-auto max-w-6xl px-6">
 <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
 <Reveal>
 <div>
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.whatEyebrow}
 </p>
 <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.whatTitle}</AccentText>
 </h2>
 <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
 {c.whatSupport}
 </p>
 <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.pillarsEyebrow}
 </p>
 <h3 className="mt-2 font-display text-xl font-semibold text-[var(--kuct-text)] sm:text-2xl">
 <AccentText>{c.pillarsTitle}</AccentText>
 </h3>
 <p className="mt-2 max-w-xl text-sm text-[var(--kuct-muted)]">
 {c.pillarsSupport}
 </p>
 <ul className="mt-6 space-y-0">
 {c.pillars.map((item, index) => (
 <li key={item.title} className="relative flex gap-3 pb-5 last:pb-0">
 <div className="relative flex w-6 shrink-0 flex-col items-center">
 <span
 aria-hidden
 className="relative z-[1] grid size-6 place-items-center rounded-[10px] bg-white text-[10px] font-bold leading-none tabular-nums text-[var(--kuct-accent)] ring-2 ring-[rgba(var(--kuct-accent-rgb),0.35)]"
 >
 {String(index + 1).padStart(2, "0")}
 </span>
 {index < c.pillars.length - 1 ? (
 <span
 aria-hidden
 className="absolute top-6 bottom-[-1.25rem] w-px bg-[rgba(var(--kuct-accent-rgb),0.28)]"
 />
 ) : null}
 </div>
 <div className="min-w-0 pt-0.5">
 <h3 className="font-display text-[0.95rem] font-semibold leading-snug text-[var(--kuct-text)] sm:text-base">
 {item.title}
 </h3>
 <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.body}
 </p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </Reveal>
 <Reveal delay={80} variant="right">
 <SectionImage
 src={IMG.context}
 alt=""
 aspect="aspect-square max-w-lg mx-auto w-full lg:max-w-none lg:sticky lg:top-28"
 />
 </Reveal>
 </div>
 </div>
 </section>

 <section className="scroll-mt-20 py-20">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.featuresEyebrow}
 </p>
 <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.featuresTitle}</AccentText>
 </h2>
 </Reveal>
 <ul className="mt-10 grid gap-5 sm:grid-cols-2">
 {c.features.map((feature, index) => (
 <Reveal as="li" key={feature.title} delay={index * 60}>
 <article className="kuct-glass flex h-full flex-col rounded-xl p-6 sm:p-7">
 <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)] sm:text-xl">
 {feature.title}
 </h3>
 <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {feature.body}
 </p>
 {feature.items?.length ? (
 <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--kuct-text)]">
 {feature.items.map((item) => (
 <li key={item} className="flex gap-2">
 <span aria-hidden className="text-[var(--kuct-accent)]">
 •
 </span>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 ) : null}
 </article>
 </Reveal>
 ))}
 </ul>
 </div>
 </section>

 <section className="kuct-section-wash scroll-mt-20 py-20">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.compareEyebrow}
 </p>
 <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.compareTitle}</AccentText>
 </h2>
 <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
 {c.compareSupport}
 </p>
 </Reveal>
 <Reveal delay={60} className="mx-auto mt-10 max-w-4xl">
 <SectionImage src={IMG.compare} alt="" />
 </Reveal>
 <Reveal delay={100} className="mt-10 overflow-x-auto">
 <table className="w-full min-w-[36rem] border-collapse overflow-hidden rounded-xl bg-[var(--kuct-panel)] text-left text-sm shadow-[0_1rem_2.5rem_rgb(26_21_32/0.08)]">
 <caption className="sr-only">{c.compareTitle.replace(/\[\[|\]\]/g, "")}</caption>
 <thead>
 <tr className="border-b border-[var(--kuct-border)] bg-[rgba(var(--kuct-accent-rgb),0.06)]">
 {c.compareHeaders.map((header) => (
 <th
 key={header}
 scope="col"
 className="px-4 py-3 font-semibold text-[var(--kuct-text)] sm:px-5"
 >
 {header}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {c.compareRows.map((row) => (
 <tr
 key={row.criterion}
 className="border-b border-[var(--kuct-border)] last:border-b-0"
 >
 <th
 scope="row"
 className="px-4 py-3.5 font-medium text-[var(--kuct-text)] sm:px-5"
 >
 {row.criterion}
 </th>
 <td className="px-4 py-3.5 text-[var(--kuct-muted)] sm:px-5">
 {row.old}
 </td>
 <td className="px-4 py-3.5 font-medium text-[var(--kuct-text)] sm:px-5">
 {row.care}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </Reveal>
 <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-[var(--kuct-muted)]">
 {c.compareNote}
 </p>
 </div>
 </section>

 <section className="scroll-mt-20 py-20">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.industriesEyebrow}
 </p>
 <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.industriesTitle}</AccentText>
 </h2>
 <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
 {c.industriesSupport}
 </p>
 </Reveal>
 <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
 {c.industries.map((item, index) => (
 <Reveal as="li" key={item.name} delay={index * 40}>
 <article className="kuct-glass h-full rounded-xl p-5">
 <h3 className="font-display text-base font-semibold text-[var(--kuct-text)] sm:text-lg">
 {item.name}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.body}
 </p>
 </article>
 </Reveal>
 ))}
 </ul>
 </div>
 </section>

 <section className="kuct-section-wash scroll-mt-20 py-20">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.howEyebrow}
 </p>
 <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.howTitle}</AccentText>
 </h2>
 <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--kuct-muted)]">
 {c.howSupport}
 </p>
 </Reveal>
 <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-stretch">
 <Reveal delay={40} className="h-full min-h-0">
 <EmbedSiteMock {...c.embedMock} />
 </Reveal>
 <Reveal delay={100} className="h-full">
 <ol className="flex h-full list-none flex-col gap-4 p-0">
 {c.howSteps.map((step, index) => (
 <li
 key={step.title}
 className="kuct-glass flex flex-1 gap-4 rounded-xl p-5 sm:p-6"
 >
 <span
 aria-hidden
 className="grid size-10 shrink-0 place-items-center rounded-[10px] text-sm font-bold text-white"
 style={{ background: "var(--kuct-accent)" }}
 >
 {index + 1}
 </span>
 <div>
 <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {step.title}
 </h3>
 <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {step.body}
 </p>
 </div>
 </li>
 ))}
 </ol>
 </Reveal>
 </div>
 <Reveal delay={60} className="mx-auto mt-12 max-w-4xl">
 <SectionImage src={IMG.care} alt="" />
 </Reveal>
 </div>
 </section>

 <section className="scroll-mt-20 py-20">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-center text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.faqEyebrow}
 </p>
 <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.faqTitle}</AccentText>
 </h2>
 </Reveal>
 <Reveal
 delay={60}
 className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_1rem_2.5rem_rgb(26_21_32/0.08)] backdrop-blur-md"
 >
 {c.faqItems.map((item, index) => {
 const open = openFaq === index;
 const panelId = `${faqId}-panel-${index}`;
 const buttonId = `${faqId}-btn-${index}`;
 return (
 <div key={item.q}>
 <h3>
 <button
 type="button"
 id={buttonId}
 aria-expanded={open}
 aria-controls={panelId}
 className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.12)] sm:px-6 sm:text-base"
 onClick={() =>
 setOpenFaq((cur) => (cur === index ? null : index))
 }
 >
 <span>{item.q}</span>
 <span aria-hidden className="text-[var(--kuct-accent)]">
 {open ? "−" : "+"}
 </span>
 </button>
 </h3>
 <div
 id={panelId}
 role="region"
 aria-labelledby={buttonId}
 hidden={!open}
 className="px-5 pb-4 text-sm leading-relaxed text-[var(--kuct-muted)] sm:px-6"
 >
 <FaqAnswerText text={item.a} />
 </div>
 </div>
 );
 })}
 </Reveal>
 </div>
 </section>

 <section
 id={embedded ? undefined : "contact"}
 className="kuct-section-wash scroll-mt-20 py-20"
 >
 <div className="mx-auto max-w-3xl px-6 text-center">
 <Reveal variant="title">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.closeEyebrow}
 </p>
 <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
 <AccentText>{c.closeTitle}</AccentText>
 </h2>
 <p className="mx-auto mt-4 max-w-xl text-[var(--kuct-muted)]">
 {c.closeSupport}
 </p>
 <div className="mt-8 flex flex-wrap justify-center gap-3">
 <button
 type="button"
 onClick={openQuote}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 >
 {c.closeCta}
 </button>
 {c.closeLinks.map((link) => {
 const external = link.href.startsWith("http");
 const href = external
 ? link.href
 : link.href.startsWith("/#")
 ? embedded
 ? `${homePath}${link.href}`
 : link.href
 : assetPath(link.href);
 return (
 <a
 key={link.label}
 href={href}
 className="kuct-btn-ghost inline-flex items-center "
 {...(external
 ? { target: "_blank", rel: "noopener noreferrer" }
 : {})}
 >
 {link.label}
 </a>
 );
 })}
 </div>
 </Reveal>
 </div>
 </section>
 </div>
 );
}

export function AgentDolphinPage() {
 return (
 <main>
 <Nav />
 <AgentDolphinContent />
 <Footer />
 </main>
 );
}
