"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const MIN_DURATION_MS = 3000;
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

    document.documentElement.classList.add("kuct-loading");
    document.body.style.overflow = "hidden";

    const finish = () => {
      setProgress(100);
      setPhase("exiting");
      exitTimer = window.setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
        document.documentElement.classList.remove("kuct-loading");
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

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("kuct-loading");
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
        <div className="animate-kuct-glow absolute left-1/2 top-1/2 size-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(192,132,252,0.45)_0%,_transparent_68%)] blur-2xl" />
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
            <div className="kuct-loader-core grid place-items-center rounded-2xl border border-white/70 bg-white/55 p-3 shadow-[0_18px_50px_rgba(139,92,246,0.28)] backdrop-blur-xl">
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
                <span className="grid size-9 place-items-center rounded-full border border-white/70 bg-white/70 text-[10px] font-bold tracking-wide text-[var(--kuct-accent)] shadow-[0_10px_28px_rgba(139,92,246,0.22)] backdrop-blur-md ring-2 ring-[var(--kuct-accent)]/20">
                  {agents[agent.key].slice(0, 1)}
                </span>
                <span className="rounded-full border border-white/55 bg-white/55 px-2 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-[var(--kuct-text)] uppercase shadow-sm backdrop-blur-md">
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
            className="mt-3 h-1 overflow-hidden rounded-full bg-white/50 ring-1 ring-white/60"
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#c084fc] transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
