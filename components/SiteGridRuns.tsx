/** Purple run-lines on the site square-grid background (`body::after`). */

const GRID_RUN_LINES: {
  id: string;
  axis: "h" | "v";
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}[] = [
  { id: "h1", axis: "h", top: "12%", left: "2%", size: "42%", delay: "0s", duration: "3.2s" },
  { id: "h2", axis: "h", top: "26%", left: "38%", size: "50%", delay: "0.7s", duration: "3.8s" },
  { id: "h3", axis: "h", top: "44%", left: "6%", size: "46%", delay: "1.4s", duration: "2.9s" },
  { id: "h4", axis: "h", top: "58%", left: "40%", size: "52%", delay: "0.35s", duration: "3.5s" },
  { id: "h5", axis: "h", top: "74%", left: "10%", size: "58%", delay: "2s", duration: "3.1s" },
  { id: "h6", axis: "h", top: "88%", left: "28%", size: "40%", delay: "1.1s", duration: "3.6s" },
  { id: "v1", axis: "v", top: "4%", left: "14%", size: "40%", delay: "0.4s", duration: "3.4s" },
  { id: "v2", axis: "v", top: "20%", left: "32%", size: "62%", delay: "1.2s", duration: "3s" },
  { id: "v3", axis: "v", top: "2%", left: "50%", size: "48%", delay: "0.9s", duration: "3.9s" },
  { id: "v4", axis: "v", top: "16%", left: "68%", size: "56%", delay: "1.7s", duration: "2.8s" },
  { id: "v5", axis: "v", top: "8%", left: "84%", size: "44%", delay: "0.2s", duration: "3.3s" },
];

export function SiteGridRuns() {
  return (
    <div className="kuct-site-grid-runs" aria-hidden>
      {GRID_RUN_LINES.map((line) => (
        <span
          key={line.id}
          className={
            line.axis === "h"
              ? "kuct-site-grid-run kuct-site-grid-run--h"
              : "kuct-site-grid-run kuct-site-grid-run--v"
          }
          style={
            line.axis === "h"
              ? {
                  top: line.top,
                  left: line.left,
                  width: line.size,
                  animationDelay: line.delay,
                  animationDuration: line.duration,
                }
              : {
                  top: line.top,
                  left: line.left,
                  height: line.size,
                  animationDelay: line.delay,
                  animationDuration: line.duration,
                }
          }
        />
      ))}
    </div>
  );
}
