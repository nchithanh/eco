"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath, routePath } from "@/lib/asset";
import { getAgentDolphinHomeCopy } from "@/lib/i18n/agent-dolphin-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useDesktopMotion } from "@/lib/motion";

const CHAT_AVATAR = "/mascot/dolphin-chat.webp";
const CHAR_MS = 28;
const USER_GAP_MS = 520;
const BEFORE_TYPE_MS = 480;
const AFTER_REPLY_MS = 640;

type DemoMessage = { role: "user" | "assistant"; text: string };

export function AgentDolphinHome() {
  const { locale } = useLocale();
  const c = getAgentDolphinHomeCopy(locale);
  const motion = useDesktopMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [committed, setCommitted] = useState<DemoMessage[]>([]);
  const [streamText, setStreamText] = useState<string | null>(null);
  const [awaitingType, setAwaitingType] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (!motion) {
      setInView(false);
      return;
    }

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
      { threshold: 0.08, rootMargin: "0px 0px -2% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [motion, locale]);

  useEffect(() => {
    if (!motion) {
      setCommitted(c.messages);
      setStreamText(null);
      setAwaitingType(false);
      return;
    }

    if (!inView) {
      setCommitted([]);
      setStreamText(null);
      setAwaitingType(false);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.push(id);
    };

    setCommitted([]);
    setStreamText(null);
    setAwaitingType(false);

    const runFrom = (index: number) => {
      if (cancelled) return;
      if (index >= c.messages.length) {
        setAwaitingType(false);
        setStreamText(null);
        return;
      }

      const msg = c.messages[index];
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
          const next = msg.text.slice(0, charIndex);
          setStreamText(next);
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

    schedule(() => runFrom(0), 280);

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [motion, inView, c.messages]);

  return (
    <section id="dolphin-care" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22.5rem)] lg:gap-14">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {c.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{c.title}</AccentText>
          </h2>
          <p className="mt-5 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {c.support}
          </p>
          <Link
            href={routePath("/dolphin-care/")}
            className="kuct-btn-primary mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            {c.cta}
          </Link>
        </Reveal>

        <Reveal delay={80} variant="right">
          <div
            ref={panelRef}
            className="overflow-hidden rounded-[1.25rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.96)] shadow-[0_18px_48px_rgba(var(--kuct-accent-rgb),0.14)] backdrop-blur-xl"
            aria-label={c.agentName}
          >
            <header className="flex items-center gap-3 border-b border-[var(--kuct-border)] bg-gradient-to-r from-[var(--kuct-btn-from)] via-[var(--kuct-btn-mid)] to-[var(--kuct-btn-to)] px-4 py-3 text-white">
              <span className="relative shrink-0">
                <img
                  src={assetPath(CHAT_AVATAR)}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="size-10 rounded-full object-cover"
                />
                <span className="absolute right-0 bottom-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[rgba(6,6,14,0.96)]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{c.agentName}</p>
                <p className="text-xs text-white/85">{c.online}</p>
              </div>
            </header>

            <div className="flex min-h-[16.5rem] flex-col gap-3 px-4 py-4">
              {committed.map((m, i) => (
                <div
                  key={`c-${i}-${m.role}`}
                  className={
                    m.role === "user"
                      ? "ml-8 self-end rounded-2xl rounded-br-md bg-[var(--kuct-accent)] px-3.5 py-2.5 text-sm leading-relaxed text-white"
                      : "mr-6 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3.5 py-2.5 text-sm leading-relaxed text-[var(--kuct-text)]"
                  }
                >
                  {m.text}
                </div>
              ))}

              {awaitingType ? (
                <div
                  className="mr-6 flex items-center gap-1 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3.5 py-3"
                  aria-hidden
                >
                  <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse" />
                  <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:150ms]" />
                  <span className="size-1.5 rounded-full bg-[var(--kuct-muted)] lg:animate-pulse lg:[animation-delay:300ms]" />
                </div>
              ) : null}

              {streamText !== null ? (
                <div className="mr-6 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3.5 py-2.5 text-sm leading-relaxed text-[var(--kuct-text)]">
                  {streamText}
                  <span className="ml-0.5 inline-block w-[0.45ch] text-[var(--kuct-accent)] lg:animate-pulse">
                    |
                  </span>
                </div>
              ) : null}
            </div>

            <div className="border-t border-[var(--kuct-border)] px-3 py-3">
              <div className="flex items-center gap-2 rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.7)] px-4 py-2.5 text-sm text-[var(--kuct-muted)]/60">
                <span className="min-w-0 flex-1 truncate">{c.inputPlaceholder}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--kuct-accent)]/80 text-white">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
        </Reveal>
      </div>
    </section>
  );
}
