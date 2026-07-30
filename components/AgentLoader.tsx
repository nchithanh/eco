"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const MIN_DURATION_MS = 1500;
const EXIT_MS = 420;

type AgentKey = "scout" | "plan" | "build" | "ship";

const AGENT_LAYOUT: {
  key: AgentKey;
  x: number;
  y: number;
  delay: string;
}[] = [
  { key: "scout", x: 50, y: 8, delay: "0s" },
  { key: "plan", x: 88, y: 42, delay: "0.35s" },
  { key: "build", x: 50, y: 88, delay: "0.7s" },
  { key: "ship", x: 12, y: 42, delay: "1.05s" },
];

type AgentLoaderProps = {
  /** Skip overlay (default in Vitest so page tests stay interactive). */
  disabled?: boolean;
  minDurationMs?: number;
};

function isTestRuntime() {
  return typeof process !== "undefined" && process.env.NODE_ENV === "test";
}

function lockScroll() {
  const html = document.documentElement;
  const body = document.body;
  html.classList.add("kuct-loading");
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
}

function unlockScroll() {
  const html = document.documentElement;
  const body = document.body;
  html.classList.remove("kuct-loading");
  html.style.overflow = "";
  body.style.overflow = "";
  html.style.touchAction = "";
  body.style.touchAction = "";
}

export function AgentLoader({
  disabled = isTestRuntime(),
  minDurationMs = MIN_DURATION_MS,
}: AgentLoaderProps = {}) {
  const { t } = useLocale();
  const [phase, setPhase] = useState<"running" | "exiting" | "done">(
    disabled ? "done" : "running",
  );
  const [progress, setProgress] = useState(disabled ? 100 : 0);

  useEffect(() => {
    if (disabled) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? Math.min(450, minDurationMs) : minDurationMs;
    const start = performance.now();
    let raf = 0;
    let exitTimer = 0;
    let safetyTimer = 0;
    let finished = false;

    lockScroll();

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      setPhase("exiting");
      exitTimer = window.setTimeout(() => {
        setPhase("done");
        unlockScroll();
      }, EXIT_MS);
    };

    const tick = (now: number) => {
      const ratio = Math.min(1, (now - start) / duration);
      setProgress(ratio * 100);
      if (ratio < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    raf = requestAnimationFrame(tick);

    // Hard unlock if exit animation / rAF stalls (e.g. background tab)
    safetyTimer = window.setTimeout(() => {
      finished = true;
      setPhase("done");
      unlockScroll();
    }, duration + EXIT_MS + 800);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) unlockScroll();
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        // Recover if class stuck after tab switch
        if (document.documentElement.classList.contains("kuct-loading") && finished) {
          unlockScroll();
        }
      }
    };
    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(safetyTimer);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
      unlockScroll();
    };
  }, [disabled, minDurationMs]);

  if (phase === "done") return null;

  const agents = t.loader.agents;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={phase === "running"}
      aria-label={t.loader.aria}
      className={`kuct-loader fixed inset-0 z-[200] flex flex-col items-center justify-center px-6 ${
        phase === "exiting" ? "kuct-loader--exit" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="kuct-glow-orb animate-kuct-glow absolute left-1/2 top-1/2 size-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-[0.45]" />
        <div className="kuct-loader-grid absolute inset-0 opacity-[0.35]" />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-8">
        <div className="relative aspect-square w-[min(78vw,280px)]">
          <svg
            className="absolute inset-0 size-full"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r="34"
              className="kuct-loader-orbit stroke-[var(--kuct-accent)]/25"
              strokeWidth="0.6"
              strokeDasharray="2.5 3.5"
            />
            {AGENT_LAYOUT.map((agent) => (
              <line
                key={`link-${agent.key}`}
                x1="50"
                y1="50"
                x2={agent.x}
                y2={agent.y}
                className="kuct-loader-link stroke-[var(--kuct-accent)]/45"
                strokeWidth="0.55"
                strokeDasharray="2 2.5"
                style={{ animationDelay: agent.delay }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
            <div className="kuct-loader-core grid place-items-center rounded-2xl p-3">
              <Logo variant="mark" className="h-10 w-auto" />
            </div>
          </div>

          {AGENT_LAYOUT.map((agent) => (
            <div
              key={agent.key}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${agent.x}%`,
                top: `${agent.y}%`,
              }}
            >
              <div
                className="kuct-loader-node flex flex-col items-center gap-1.5"
                style={{ animationDelay: agent.delay }}
              >
                <span className="kuct-loader-node__badge grid size-9 place-items-center rounded-full text-[10px] font-bold tracking-wide">
                  {agents[agent.key].slice(0, 1)}
                </span>
                <span className="kuct-loader-node__label rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-[0.08em] uppercase shadow-sm">
                  {agents[agent.key]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[220px] text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--kuct-accent)] uppercase">
            {t.loader.status}
          </p>
          <div
            className="kuct-loader-progress mt-3 h-1 overflow-hidden rounded-full"
            aria-hidden
          >
            <div
              className="kuct-loader-progress__bar h-full rounded-full transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
