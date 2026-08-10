"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { assetPath } from "@/lib/asset";
import { MASCOT } from "@/lib/mascot";
import { useDesktopMotion } from "@/lib/motion";

const CHAT_AVATAR = MASCOT.chat;
/** Full scroll cycle (down with pauses + quick return). */
const SCROLL_CYCLE_MS = 7000;

const SECTION_URLS = [
  "yourbusiness.com",
  "yourbusiness.com/services",
  "yourbusiness.com/contact",
] as const;

/** Progress points in the CSS keyframe cycle when URL switches. */
const URL_AT_MS = [0, 2100, 4200] as const;

export type EmbedSiteMockProps = {
  url: string;
  agentName?: string;
  userMsg?: string;
  agentLines?: readonly [string, string, string];
  inputPlaceholder?: string;
  /** Dolphin Care chat overlay; default true (Care how-section). */
  showChat?: boolean;
  /** Auto mouse-scroll through tall wireframe (web hero). */
  animate?: boolean;
  className?: string;
};

function BlockHome() {
  return (
    <div className="flex h-full min-h-full flex-col gap-3">
      <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 rounded-lg bg-[var(--kuct-panel-2)] p-3 sm:gap-4 sm:p-4">
        <div className="flex flex-col justify-center gap-2">
          <span className="h-2.5 w-16 rounded-full bg-[var(--kuct-accent)]/35" />
          <span className="h-3 w-[90%] rounded-full bg-black/10" />
          <span className="h-2.5 w-[70%] rounded-full bg-black/8" />
          <span className="mt-1 inline-flex h-7 w-20 items-center justify-center rounded-full bg-[var(--kuct-accent)] text-[0.6rem] font-semibold text-white">
            ···
          </span>
        </div>
        <div className="min-h-[5.5rem] rounded-lg bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.18)] via-[var(--kuct-panel)] to-[var(--kuct-panel-2)] sm:min-h-[7rem]" />
      </div>
      <div className="grid shrink-0 grid-cols-4 gap-2 sm:gap-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg bg-[var(--kuct-panel-2)]"
          >
            <div
              className="aspect-square bg-gradient-to-br from-black/5 to-transparent"
              style={{
                opacity: 0.55 + i * 0.08,
                backgroundImage: `linear-gradient(145deg, rgba(var(--kuct-accent-rgb),${0.12 + i * 0.04}), #f0f0f0)`,
              }}
            />
            <div className="space-y-1.5 p-1.5 sm:p-2">
              <span className="block h-1.5 w-[80%] rounded-full bg-black/10" />
              <span className="block h-1.5 w-1/2 rounded-full bg-[var(--kuct-accent)]/40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlockServices() {
  return (
    <div className="flex h-full min-h-full flex-col gap-2.5 rounded-lg bg-[var(--kuct-panel-2)] p-3 sm:gap-3 sm:p-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-12 rounded-full bg-[var(--kuct-accent)]/40" />
        <span className="h-2 flex-1 rounded-full bg-black/8" />
        <span className="h-2 w-8 rounded-full bg-black/6" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-1 items-center gap-3 rounded-lg bg-[var(--kuct-panel)] p-2.5 sm:p-3"
        >
          <div
            className="size-9 shrink-0 rounded-md sm:size-11"
            style={{
              backgroundImage: `linear-gradient(145deg, rgba(var(--kuct-accent-rgb),${0.14 + i * 0.05}), #ececf2)`,
            }}
          />
          <div className="min-w-0 flex-1 space-y-1.5">
            <span className="block h-2 w-[55%] rounded-full bg-black/12" />
            <span className="block h-1.5 w-[85%] rounded-full bg-black/7" />
          </div>
          <span className="hidden h-6 w-12 shrink-0 rounded-[10px] bg-[var(--kuct-accent)]/25 sm:block" />
        </div>
      ))}
    </div>
  );
}

function BlockContact() {
  return (
    <div className="flex h-full min-h-full flex-col items-center justify-center gap-3 rounded-lg bg-[var(--kuct-panel-2)] p-4 sm:gap-4 sm:p-6">
      <span className="h-2.5 w-20 rounded-full bg-[var(--kuct-accent)]/35" />
      <span className="h-3 w-[70%] max-w-[12rem] rounded-full bg-black/10" />
      <span className="h-2.5 w-[50%] max-w-[9rem] rounded-full bg-black/7" />
      <div className="mt-1 w-full max-w-[14rem] space-y-2">
        <span className="block h-7 w-full rounded-[10px] bg-[var(--kuct-panel)] ring-1 ring-black/5" />
        <span className="block h-7 w-full rounded-[10px] bg-[var(--kuct-panel)] ring-1 ring-black/5" />
        <span className="mx-auto mt-1 flex h-8 w-28 items-center justify-center rounded-[10px] bg-[var(--kuct-accent)] text-[0.6rem] font-semibold text-white">
          ···
        </span>
      </div>
    </div>
  );
}

function ChatOverlay({
  agentName,
  userMsg,
  agentLines,
  inputPlaceholder,
}: {
  agentName: string;
  userMsg: string;
  agentLines: readonly [string, string, string];
  inputPlaceholder: string;
}) {
  return (
    <div className="pointer-events-none absolute right-3 bottom-3 w-[min(13.5rem,68%)] sm:right-4 sm:bottom-4 sm:w-[15rem]">
      <div className="overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_12px_32px_rgba(0,0,0,0.45),0_0_20px_rgb(26_21_32/0.13)] backdrop-blur-md">
        <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--kuct-btn-from)] via-[var(--kuct-btn-mid)] to-[var(--kuct-btn-to)] px-2.5 py-2 text-white">
          <img
            src={assetPath(CHAT_AVATAR)}
            alt=""
            width={22}
            height={22}
            loading="lazy"
            decoding="async"
            className="size-[1.375rem] rounded-full object-cover ring-1 ring-white/40"
          />
          <span className="truncate text-[0.65rem] font-semibold">
            {agentName}
          </span>
        </div>
        <div className="flex flex-col gap-2 px-2.5 py-2.5">
          <div className="ml-6 self-end rounded-xl rounded-br-md bg-[var(--kuct-accent)] px-2.5 py-1.5 text-[0.6rem] leading-snug text-white">
            {userMsg}
          </div>
          <div className="mr-4 self-start rounded-xl rounded-bl-md bg-[var(--kuct-panel-2)] px-2.5 py-2 text-[0.6rem] leading-snug text-[var(--kuct-text)]">
            <ul className="space-y-1">
              {agentLines.map((line) => (
                <li key={line} className="flex gap-1.5">
                  <span className="font-bold text-[var(--kuct-accent)]">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-1.5 rounded-[10px] bg-[var(--kuct-panel)] px-2 py-1.5">
            <span className="min-w-0 flex-1 truncate text-[0.55rem] text-[var(--kuct-muted)]/70">
              {inputPlaceholder}
            </span>
            <span className="grid size-5 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-accent)] text-[0.55rem] text-white">
              →
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <span className="grid size-9 place-items-center overflow-hidden rounded-[10px] border-2 border-white/90 bg-gradient-to-br from-[var(--kuct-fab-from)] to-[var(--kuct-fab-to)] shadow-[0_8px_20px_rgb(26_21_32/0.18)]">
          <img
            src={assetPath(CHAT_AVATAR)}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </span>
      </div>
    </div>
  );
}

/** Browser chrome + fake site wireframes (+ optional Care chat). Decorative. */
export function EmbedSiteMock({
  url,
  agentName = "Dolphin Care",
  userMsg = "",
  agentLines = ["", "", ""] as const,
  inputPlaceholder = "",
  showChat = true,
  animate = false,
  className,
}: EmbedSiteMockProps) {
  const motion = useDesktopMotion();
  const live = animate && motion;
  const [section, setSection] = useState(0);

  useEffect(() => {
    if (!live) {
      setSection(0);
      return;
    }

    const started = performance.now();
    const tick = () => {
      const t = (performance.now() - started) % SCROLL_CYCLE_MS;
      if (t < URL_AT_MS[1]) setSection(0);
      else if (t < URL_AT_MS[2]) setSection(1);
      else setSection(2);
    };
    tick();
    const id = window.setInterval(tick, 120);
    return () => window.clearInterval(id);
  }, [live]);

  const displayUrl = live ? SECTION_URLS[section] : url;

  return (
    <div
      className={
        className ??
        "relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_1rem_2.5rem_rgb(26_21_32/0.08)]"
      }
      data-motion={live ? "on" : "off"}
      aria-hidden
    >
      <div
        className={`kuct-site-mock__chrome flex shrink-0 items-center gap-3 border-b bg-[var(--kuct-panel-2)] px-3 py-2.5 sm:px-4 ${live ? "kuct-site-mock__enter" : ""}`}
        style={
          live ? ({ "--kuct-mock-delay": "0ms" } as CSSProperties) : undefined
        }
      >
        <div className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-7 min-w-0 max-w-[14rem] flex-1 items-center justify-center rounded-[10px] bg-[var(--kuct-panel)] px-3 text-[0.65rem] text-[var(--kuct-muted)] sm:max-w-[18rem]">
          <span key={displayUrl} className="kuct-site-mock__url truncate">
            {displayUrl}
          </span>
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <span className="size-4 rounded-md bg-[rgba(255,255,255,0.06)]" />
          <span className="size-4 rounded-full bg-[rgba(255,255,255,0.06)]" />
          <span className="size-4 rounded-md bg-[rgba(255,255,255,0.06)]" />
        </div>
      </div>

      <div
        className={`relative flex min-h-0 flex-1 flex-col bg-[var(--kuct-panel)] p-3 sm:p-4 ${live ? "kuct-site-mock__enter" : ""}`}
        style={
          live ? ({ "--kuct-mock-delay": "80ms" } as CSSProperties) : undefined
        }
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          {live ? (
            <>
              <div className="kuct-site-mock__scroll absolute inset-x-0 top-0 flex flex-col will-change-transform">
                <div className="kuct-site-mock__pane">
                  <BlockHome />
                </div>
                <div className="kuct-site-mock__pane">
                  <BlockServices />
                </div>
                <div className="kuct-site-mock__pane">
                  <BlockContact />
                </div>
              </div>
              <div className="pointer-events-none absolute top-1 right-1 bottom-1 w-1 rounded-full bg-black/8">
                <span className="kuct-site-mock__thumb absolute left-0 w-full rounded-full bg-[var(--kuct-accent)]/55" />
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-0 flex-col">
              <BlockHome />
            </div>
          )}
        </div>

        {showChat ? (
          <ChatOverlay
            agentName={agentName}
            userMsg={userMsg}
            agentLines={agentLines}
            inputPlaceholder={inputPlaceholder}
          />
        ) : null}
      </div>
    </div>
  );
}
