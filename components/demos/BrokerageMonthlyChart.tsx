"use client";

import { useMemo, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/lib/useInView";
import { brokerageDemoCopy as c } from "@/lib/demos/brokerage-copy";

export function BrokerageMonthlyChart() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const series = c.demoData.monthlyPnl;
  const maxAbs = useMemo(
    () => Math.max(...series.map((d) => Math.abs(d.pct)), 1),
    [series],
  );

  return (
    <section
      id="performance"
      className="nva-section nva-perf"
      aria-labelledby="nva-perf-title"
    >
      <div className="nva-wrap">
        <Reveal>
          <p className="nva-eyebrow">{c.performance.eyebrow}</p>
          <h2 id="nva-perf-title" className="nva-h2">
            {c.performance.title}
          </h2>
          <p className="nva-lead">{c.performance.support}</p>
        </Reveal>

        <Reveal delay={80} className="nva-perf__stats">
          <div>
            <strong className="nva-tone-text--up">{c.performance.best}</strong>
            <span>{c.performance.bestLabel}</span>
          </div>
          <div>
            <strong className="nva-tone-text--down">{c.performance.worst}</strong>
            <span>{c.performance.worstLabel}</span>
          </div>
          <div>
            <strong className="nva-tone-text--up">{c.performance.avg}</strong>
            <span>{c.performance.avgLabel}</span>
          </div>
          <div>
            <strong className="nva-tone-text--up">
              {c.demoData.portfolio.ytdPct}
            </strong>
            <span>YTD danh mục mẫu</span>
          </div>
        </Reveal>

        <div
          ref={ref}
          className={`nva-chart ${inView ? "is-inview" : ""}`}
          role="img"
          aria-label="Biểu đồ lợi nhuận theo tháng, dữ liệu demo"
        >
          <div className="nva-chart__head">
            <span>{c.demoData.portfolio.name}</span>
            <span className="nva-pill nva-pill--dark">{c.demoData.label}</span>
          </div>
          <div className="nva-chart__plot">
            <div className="nva-chart__zero" aria-hidden />
            {series.map((point, index) => {
              const height = (Math.abs(point.pct) / maxAbs) * 100;
              const up = point.pct >= 0;
              return (
                <div
                  key={point.month}
                  className="nva-chart__col"
                  style={{ "--nva-bar-delay": `${index * 45}ms` } as CSSProperties}
                >
                  <span
                    className={`nva-chart__val ${up ? "nva-tone-text--up" : "nva-tone-text--down"}`}
                  >
                    {point.pct > 0 ? "+" : ""}
                    {point.pct}%
                  </span>
                  <div className="nva-chart__bar-wrap">
                    <div className="nva-chart__half nva-chart__half--up">
                      {up ? (
                        <div
                          className="nva-chart__bar is-up"
                          style={{ height: `${height}%` }}
                        />
                      ) : null}
                    </div>
                    <div className="nva-chart__half nva-chart__half--down">
                      {!up ? (
                        <div
                          className="nva-chart__bar is-down"
                          style={{ height: `${height}%` }}
                        />
                      ) : null}
                    </div>
                  </div>
                  <span className="nva-chart__month">{point.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
