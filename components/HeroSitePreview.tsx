"use client";

import { Logo } from "@/components/Logo";

/** Decorative site preview inside Hero collage (matches design mock; aria-hidden parent). */
export function HeroSitePreview() {
  return (
    <div className="kuct-hero-preview flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[10px] bg-[var(--kuct-surface)] shadow-[0_0.5rem_1.5rem_rgb(26_22_37/0.06)] sm:min-h-[22rem] lg:min-h-[24rem]">
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <Logo variant="mark" imageClassName="h-5 w-auto sm:h-6" />
          <span className="font-display truncate text-[0.7rem] font-bold tracking-tight text-[var(--kuct-text)] sm:text-xs">
            Dolphin Software
          </span>
        </div>
        <nav
          className="ml-auto hidden items-center gap-3 text-[0.65rem] font-medium text-[var(--kuct-muted)] md:flex md:gap-3.5"
          aria-hidden
        >
          <span>Giới thiệu</span>
          <span>Giải pháp</span>
          <span>Case studies</span>
          <span>Blog</span>
        </nav>
        <span className="ml-auto inline-flex shrink-0 rounded-md bg-[var(--kuct-accent)] px-2.5 py-1 text-[0.6rem] font-semibold text-white md:ml-0 sm:px-3 sm:text-[0.65rem]">
          Liên hệ
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 p-3 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] sm:gap-4 sm:p-4">
        <div className="flex flex-col justify-center gap-2.5 text-left sm:gap-3">
          <p className="font-display text-[0.95rem] font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-[1.15rem] lg:text-[1.25rem]">
            Giải pháp công nghệ tạo giá trị thật cho doanh nghiệp
          </p>
          <div className="space-y-1.5" aria-hidden>
            <span className="block h-2 w-[92%] rounded-full bg-black/10" />
            <span className="block h-2 w-[72%] rounded-full bg-black/8" />
          </div>
          <div className="mt-1 flex flex-wrap gap-2">
            <span className="inline-flex rounded-md bg-[var(--kuct-accent)] px-2.5 py-1.5 text-[0.6rem] font-semibold text-white sm:text-[0.65rem]">
              Tìm hiểu giải pháp
            </span>
            <span className="inline-flex rounded-[10px] bg-white px-2.5 py-1.5 text-[0.6rem] font-semibold text-[var(--kuct-accent)] shadow-[0_1px_3px_rgb(26_22_37/0.08)] sm:text-[0.65rem]">
              Liên hệ tư vấn
            </span>
          </div>
        </div>

        <div
          className="relative flex min-h-[7rem] items-center justify-center overflow-hidden rounded-xl bg-[color-mix(in_srgb,var(--kuct-accent)_14%,white)] sm:min-h-0"
          aria-hidden
        >
          <svg
            viewBox="0 0 120 80"
            className="h-[55%] w-[70%] text-[var(--kuct-accent)] opacity-45"
            fill="none"
          >
            <path
              d="M8 58 L38 32 L58 48 L88 22 L112 58 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle
              cx="92"
              cy="22"
              r="8"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      <div
        className="grid shrink-0 grid-cols-3 gap-2 border-t border-black/[0.06] p-2.5 sm:gap-2.5 sm:p-3"
        aria-hidden
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-[color-mix(in_srgb,var(--kuct-accent)_6%,white)] px-2 py-2 sm:px-2.5"
          >
            <PreviewCardIcon index={i} />
            <div className="min-w-0 flex-1 space-y-1">
              <span className="block h-1.5 w-[85%] rounded-full bg-black/12" />
              <span className="block h-1.5 w-[55%] rounded-full bg-black/8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewCardIcon({ index }: { index: number }) {
  const cls = "size-6 shrink-0 text-[var(--kuct-accent)] sm:size-7";
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4 12h16M12 4c2.2 2.3 3.2 4.8 3.2 8S14.2 17.7 12 20c-2.2-2.3-3.2-4.8-3.2-8S9.8 6.3 12 4z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <rect
          x="7"
          y="8"
          width="10"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12.5" r="1.6" fill="currentColor" />
        <path
          d="M10 8V6.5A2 2 0 0112 4.5v0a2 2 0 012 2V8"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
      <path
        d="M5 17V11M10 17V7M15 17v-4M20 17V9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
