"use client";

import { useEffect, useRef, useState } from "react";
import {
  type AgentDolphinHomeCard,
  type AgentDolphinHomeMessage,
} from "@/lib/i18n/agent-dolphin-copy";
import { useMascotSrc } from "@/components/useMascotSrc";

/** Faster typewriter — description column is not blocked by this chunk. */
const CHAR_MS = 14;
const USER_GAP_MS = 320;
const BEFORE_TYPE_MS = 280;
const AFTER_REPLY_MS = 380;

export function CareHomeChatDemo({
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
  const chatAvatar = useMascotSrc("chat");
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

    schedule(() => runFrom(0), 160);

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [animate, inView, card.messages]);

  return (
    <div
      ref={panelRef}
      className="flex h-full flex-col overflow-hidden rounded-[10px] bg-[var(--kuct-panel)] shadow-[0_18px_48px_rgb(26_21_32/0.07)] backdrop-blur-xl"
      aria-label={`${agentName} — ${card.context}`}
    >
      <header className="flex items-center gap-3 bg-gradient-to-r from-[var(--kuct-btn-from)] via-[var(--kuct-btn-mid)] to-[var(--kuct-btn-to)] px-3.5 py-2.5 text-white sm:px-4 sm:py-3">
        <span className="relative shrink-0">
          <img
            src={chatAvatar}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="size-9 rounded-full object-cover"
          />
          <span className="absolute right-0 bottom-0 size-2 rounded-full bg-emerald-400 ring-2 ring-white" />
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
                ? "ml-6 self-end rounded-[10px] rounded-br-md bg-[var(--kuct-accent)] px-3 py-2 text-[13px] leading-relaxed text-white sm:text-sm"
                : "mr-5 self-start rounded-[10px] rounded-bl-md bg-[var(--kuct-panel-2)] px-3 py-2 text-[13px] leading-relaxed text-[var(--kuct-text)] sm:text-sm"
            }
          >
            {m.text}
          </div>
        ))}

        {awaitingType ? (
          <div
            className="mr-5 flex items-center gap-1 self-start rounded-[10px] rounded-bl-md bg-[var(--kuct-panel-2)] px-3 py-2.5"
            aria-hidden
          >
            <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse" />
            <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:150ms]" />
            <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:300ms]" />
          </div>
        ) : null}

        {streamText !== null ? (
          <div className="mr-5 self-start rounded-[10px] rounded-bl-md bg-[var(--kuct-panel-2)] px-3 py-2 text-[13px] leading-relaxed text-[var(--kuct-text)] sm:text-sm">
            {streamText}
            <span className="ml-0.5 inline-block w-[0.45ch] text-[var(--kuct-accent)] lg:animate-pulse">
              |
            </span>
          </div>
        ) : null}
      </div>

      <div className="px-3 py-2.5 sm:px-3.5 sm:py-3">
        <div className="flex items-center gap-2 rounded-[10px] bg-[var(--kuct-panel-2)] px-3.5 py-2 text-xs text-[var(--kuct-muted)]/60 sm:text-sm">
          <span className="min-w-0 flex-1 truncate">{inputPlaceholder}</span>
          <span className="grid size-7 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-accent)]/80 text-white sm:size-8">
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
