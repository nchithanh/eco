"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath, routePath } from "@/lib/asset";
import {
  getAgentDolphinHomeCopy,
  type AgentDolphinHomeCard,
  type AgentDolphinHomeMessage,
} from "@/lib/i18n/agent-dolphin-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useDesktopMotion } from "@/lib/motion";

const CHAT_AVATAR = "/mascot/dolphin-chat.webp";
const CHAR_MS = 28;
const USER_GAP_MS = 480;
const BEFORE_TYPE_MS = 420;
const AFTER_REPLY_MS = 560;

function IconReply() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M5 12h11M12 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHandsFree() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M8 14V9a4 4 0 1 1 8 0v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 14h12v2.5a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 6 16.5V14z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEfficiency() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M4 16l5-5 3.5 3.5L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BENEFIT_ICONS: ReactNode[] = [
  <IconReply key="reply" />,
  <IconHandsFree key="hands" />,
  <IconEfficiency key="eff" />,
];

function ChatCard({
  card,
  agentName,
  online,
  inputPlaceholder,
  animate,
}: {
  card: AgentDolphinHomeCard;
  agentName: string;
  online: string;
  inputPlaceholder: string;
  animate: boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [committed, setCommitted] = useState<AgentDolphinHomeMessage[]>(
    animate ? [] : card.messages,
  );
  const [streamText, setStreamText] = useState<string | null>(null);
  const [awaitingType, setAwaitingType] = useState(false);

  useEffect(() => {
    if (!animate) {
      setCommitted(card.messages);
      setStreamText(null);
      setAwaitingType(false);
      return;
    }

    const el = panelRef.current;
    if (!el) return;

    if (typeof IntersectionObserver !== "function") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate, card.messages]);

  useEffect(() => {
    if (!animate) return;

    if (!inView) {
      setCommitted([]);
      setStreamText(null);
      setAwaitingType(false);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    setCommitted([]);
    setStreamText(null);
    setAwaitingType(false);

    const runFrom = (index: number) => {
      if (cancelled) return;
      if (index >= card.messages.length) {
        setAwaitingType(false);
        setStreamText(null);
        return;
      }

      const msg = card.messages[index];
      if (!msg) return;

      if (msg.role === "user") {
        setCommitted((prev) => [...prev, msg]);
        schedule(() => runFrom(index + 1), USER_GAP_MS);
        return;
      }

      setAwaitingType(true);
      schedule(() => {
        if (cancelled) return;
        setAwaitingType(false);
        let charIndex = 0;
        setStreamText("");

        const tick = () => {
          if (cancelled) return;
          charIndex += 1;
          setStreamText(msg.text.slice(0, charIndex));
          if (charIndex < msg.text.length) {
            schedule(tick, CHAR_MS);
            return;
          }
          setCommitted((prev) => [...prev, msg]);
          setStreamText(null);
          schedule(() => runFrom(index + 1), AFTER_REPLY_MS);
        };

        tick();
      }, BEFORE_TYPE_MS);
    };

    schedule(() => runFrom(0), 240);

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [animate, inView, card.messages]);

  return (
    <div
      ref={panelRef}
      className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.96)] shadow-[0_18px_48px_rgba(var(--kuct-accent-rgb),0.12)] backdrop-blur-xl"
      aria-label={`${agentName} — ${card.context}`}
    >
      <header className="flex items-center gap-3 border-b border-[var(--kuct-border)] bg-gradient-to-r from-[var(--kuct-btn-from)] via-[var(--kuct-btn-mid)] to-[var(--kuct-btn-to)] px-3.5 py-2.5 text-white sm:px-4 sm:py-3">
        <span className="relative shrink-0">
          <img
            src={assetPath(CHAT_AVATAR)}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="size-9 rounded-full object-cover"
          />
          <span className="absolute right-0 bottom-0 size-2 rounded-full bg-emerald-400 ring-2 ring-[rgba(6,6,14,0.96)]" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{agentName}</p>
          <p className="truncate text-[11px] text-white/85">{card.context}</p>
        </div>
        <span className="hidden shrink-0 text-[10px] font-medium tracking-wide text-white/80 sm:inline">
          {online}
        </span>
      </header>

      <div className="flex min-h-[18rem] flex-1 flex-col gap-2.5 overflow-y-auto px-3.5 py-3.5 sm:min-h-[22rem] sm:px-4 sm:py-4 lg:min-h-[26rem]">
        {committed.map((m, i) => (
          <div
            key={`c-${i}-${m.role}`}
            className={
              m.role === "user"
                ? "ml-6 self-end rounded-2xl rounded-br-md bg-[var(--kuct-accent)] px-3 py-2 text-[13px] leading-relaxed text-white sm:text-sm"
                : "mr-5 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3 py-2 text-[13px] leading-relaxed text-[var(--kuct-text)] sm:text-sm"
            }
          >
            {m.text}
          </div>
        ))}

        {awaitingType ? (
          <div
            className="mr-5 flex items-center gap-1 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3 py-2.5"
            aria-hidden
          >
            <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse" />
            <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:150ms]" />
            <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:300ms]" />
          </div>
        ) : null}

        {streamText !== null ? (
          <div className="mr-5 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3 py-2 text-[13px] leading-relaxed text-[var(--kuct-text)] sm:text-sm">
            {streamText}
            <span className="ml-0.5 inline-block w-[0.45ch] text-[var(--kuct-accent)] lg:animate-pulse">
              |
            </span>
          </div>
        ) : null}
      </div>

      <div className="border-t border-[var(--kuct-border)] px-3 py-2.5 sm:px-3.5 sm:py-3">
        <div className="flex items-center gap-2 rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.7)] px-3.5 py-2 text-xs text-[var(--kuct-muted)]/60 sm:text-sm">
          <span className="min-w-0 flex-1 truncate">{inputPlaceholder}</span>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--kuct-accent)]/80 text-white sm:size-8">
            <svg className="size-3 sm:size-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h12M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function AgentDolphinHome() {
  const { locale } = useLocale();
  const { openQuote } = useQuote();
  const c = getAgentDolphinHomeCopy(locale);
  const motion = useDesktopMotion();

  return (
    <section id="dolphin-care" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="min-w-0">
          <Reveal variant="title" className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {c.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
              <AccentText>{c.title}</AccentText>
            </h2>
            <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {c.support}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <ul className="mt-8 grid gap-3 sm:mt-9">
              {c.benefits.map((benefit, index) => (
                <li
                  key={benefit.title}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(8,8,14,0.45)] px-4 py-3"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[rgba(var(--kuct-accent-rgb),0.1)] text-[var(--kuct-accent)] ring-1 ring-[var(--kuct-accent)]/25">
                    {BENEFIT_ICONS[index] ?? BENEFIT_ICONS[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-[var(--kuct-text)]">
                      {benefit.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                      {benefit.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {c.situations && c.situations.length > 0 ? (
            <Reveal delay={90} className="mt-7">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
                {c.situationsLabel}
              </p>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {c.situations.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,14,0.35)] px-3 py-1.5 text-xs font-medium text-[var(--kuct-text)]"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {c.industries && c.industries.length > 0 ? (
            <Reveal delay={110} className="mt-6">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
                {c.industriesLabel}
              </p>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {c.industries.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--kuct-border)] px-3 py-1 text-xs font-medium text-[var(--kuct-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={140} className="mt-8 sm:mt-9">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={routePath("/dolphin-care/")}
                className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
              >
                {c.cta}
              </Link>
              <button
                type="button"
                onClick={openQuote}
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--kuct-border)] px-6 py-3 text-sm font-medium text-[var(--kuct-muted)] transition duration-200 hover:border-[var(--kuct-accent)]/45 hover:bg-[var(--kuct-accent)]/10 hover:text-[var(--kuct-text)] sm:w-auto"
              >
                {c.ctaSecondary}
              </button>
            </div>
            <p className="mt-4 text-sm text-[var(--kuct-muted)]">{c.trustMicro}</p>
          </Reveal>
        </div>

        <Reveal delay={100} className="min-w-0 lg:justify-self-stretch">
          <ChatCard
            card={c.card}
            agentName={c.agentName}
            online={c.online}
            inputPlaceholder={c.inputPlaceholder}
            animate={motion}
          />
          {c.pipeline && c.pipeline.length > 0 ? (
            <div className="mt-4 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(8,8,14,0.45)] px-4 py-3.5">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)] uppercase">
                {c.pipelineLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {c.pipeline.join(" → ")}
              </p>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
