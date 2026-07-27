"use client";

function WhaleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Body + head (stable) */}
      <g className="kuct-whale-body">
        <path
          d="M18 88c22-34 62-52 108-48 28 2 52 12 72 16 22 4 40 2 52-4 4 8 2 18-6 24-16 12-40 22-68 26-36 5-72-2-100-22-8-6-18-10-28-8-8 2-14-5-12-13z"
          fill="currentColor"
          opacity="0.92"
        />
        <path
          d="M96 98c8 14 4 28-6 36-3 2-7 0-7-4 2-10 4-20-1-28-1-3 2-6 6-6 3 0 6 1 8 2z"
          fill="currentColor"
          opacity="0.55"
        />
        <circle cx="72" cy="72" r="3.4" fill="var(--kuct-bg)" opacity="0.85" />
        <path
          d="M118 84c18 2 36 0 52-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
        />
      </g>

      {/* Tail flukes — pivot near body for wag */}
      <g className="kuct-whale-tail" style={{ transformOrigin: "236px 72px" }}>
        <path
          d="M210 70c18-4 34-2 48 8 12 8 28 10 42 4 4-2 8 2 6 6-10 18-30 30-52 32-14 1-28-4-38-14-8-8-12-18-10-28 1-4 3-7 4-8z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M248 58c12-18 28-28 44-32 4-1 8 3 6 7-6 16-18 28-34 36-4 2-10 0-12-4-2-3 0-5-4-7z"
          fill="currentColor"
          opacity="0.72"
        />
      </g>
    </svg>
  );
}

function Bubbles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 220" fill="none" aria-hidden>
      <circle
        className="kuct-whale-bubble"
        cx="30"
        cy="190"
        r="3.5"
        fill="currentColor"
        style={{ animationDelay: "0s" }}
      />
      <circle
        className="kuct-whale-bubble"
        cx="55"
        cy="205"
        r="2.4"
        fill="currentColor"
        style={{ animationDelay: "1.1s" }}
      />
      <circle
        className="kuct-whale-bubble"
        cx="78"
        cy="185"
        r="4.2"
        fill="currentColor"
        style={{ animationDelay: "2.2s" }}
      />
      <circle
        className="kuct-whale-bubble"
        cx="98"
        cy="200"
        r="2.6"
        fill="currentColor"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        className="kuct-whale-bubble"
        cx="42"
        cy="210"
        r="2"
        fill="currentColor"
        style={{ animationDelay: "2.8s" }}
      />
    </svg>
  );
}

export function WhaleBackdrop() {
  return (
    <div
      className="kuct-whale-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="kuct-whale-ascend relative w-[min(120vw,880px)] text-[var(--kuct-accent)] opacity-[0.11]">
          <WhaleSilhouette className="kuct-whale-figure h-auto w-full drop-shadow-[0_40px_70px_rgba(139,92,246,0.1)]" />
          <Bubbles className="absolute right-[6%] top-[12%] h-40 w-24 text-[var(--kuct-accent-2)] opacity-35" />
        </div>
      </div>
    </div>
  );
}
