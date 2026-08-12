"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  DolphinIntelligenceCopy,
  WorkflowNodeKind,
} from "@/lib/i18n/dolphin-intelligence-copy";
import "./IntelligenceWorkflowDemo.css";

/** Play order is by stage index (0–7). */
const STAGE_NODE_IDS: readonly (readonly string[])[] = [
  ["cron", "research", "research-net"],
  ["content", "human"],
  ["jasper"],
  ["seo", "human-seo"],
  ["review", "human-publish"],
  ["landing", "publish"],
  ["media", "create-media"],
  ["human-report", "report", "next"],
] as const;

/** Stage 6 (Publish / Landing) is removed in the run simulation. */
const REMOVABLE_STAGE_INDEX = 5;

const KIND_ICON: Record<WorkflowNodeKind, string> = {
  agent: "✦",
  action: "⚡",
  logic: "◇",
  human: "✓",
};

const NODE_ICON: Record<string, string> = {
  cron: "◷",
  next: "↻",
  human: "✓",
  "human-seo": "✓",
  "human-publish": "✓",
  "human-report": "✓",
};

const STAGE_BADGES: Record<string, string[]> = {
  s2: ["approved", "reject"],
  s7: ["media"],
};

type Phase =
  | { kind: "run"; stage: number }
  | { kind: "removing"; stage: number }
  | { kind: "removed-hold"; stage: number };

function buildPhases(): Phase[] {
  const phases: Phase[] = [];
  for (let i = 0; i < REMOVABLE_STAGE_INDEX; i += 1) {
    phases.push({ kind: "run", stage: i });
  }
  phases.push({ kind: "removing", stage: REMOVABLE_STAGE_INDEX });
  phases.push({ kind: "removed-hold", stage: REMOVABLE_STAGE_INDEX });
  for (let i = REMOVABLE_STAGE_INDEX + 1; i < STAGE_NODE_IDS.length; i += 1) {
    phases.push({ kind: "run", stage: i });
  }
  return phases;
}

const PHASES = buildPhases();

type Props = {
  copy: Pick<
    DolphinIntelligenceCopy,
    | "workflowNodes"
    | "workflowLegend"
    | "workflowTitle"
    | "workflowCanvasTitle"
    | "workflowCampaignName"
    | "workflowRunningLabel"
    | "workflowStatusReady"
    | "workflowStatusRunning"
    | "workflowStageActive"
    | "workflowStageDone"
    | "workflowStageQueued"
    | "workflowStageRemoving"
    | "workflowStageRemoved"
    | "workflowCountNodes"
    | "workflowStages"
    | "workflowBadges"
  >;
};

export function IntelligenceWorkflowDemo({ copy }: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setPhaseIndex((p) => (p + 1) % PHASES.length);
    }, 1500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const phase = reduceMotion ? null : PHASES[phaseIndex];
  /** Counts drop only after the stage is fully removed (not during shake). */
  const stageRemoved =
    !!phase &&
    (phase.kind === "removed-hold" ||
      (phase.kind === "run" && phase.stage > REMOVABLE_STAGE_INDEX));
  const stageBeingRemoved =
    !!phase &&
    (phase.kind === "removing" ||
      phase.kind === "removed-hold" ||
      (phase.kind === "run" && phase.stage > REMOVABLE_STAGE_INDEX));

  const nodeById = useMemo(
    () => Object.fromEntries(copy.workflowNodes.map((n) => [n.id, n])),
    [copy.workflowNodes],
  );

  const badgeById = useMemo(
    () => Object.fromEntries(copy.workflowBadges.map((b) => [b.id, b])),
    [copy.workflowBadges],
  );

  const stages = useMemo(() => {
    return copy.workflowStages.map((stage, index) => ({
      ...stage,
      nodeIds: STAGE_NODE_IDS[index] ?? [],
      index,
    }));
  }, [copy.workflowStages]);

  const counts = useMemo(() => {
    const excluded = new Set(
      stageRemoved ? (STAGE_NODE_IDS[REMOVABLE_STAGE_INDEX] ?? []) : [],
    );
    const tallies: Record<WorkflowNodeKind, number> = {
      agent: 0,
      action: 0,
      logic: 0,
      human: 0,
    };
    let nodes = 0;
    for (const node of copy.workflowNodes) {
      if (excluded.has(node.id)) continue;
      tallies[node.kind] += 1;
      nodes += 1;
    }
    return { ...tallies, nodes };
  }, [copy.workflowNodes, stageRemoved]);

  const runRows = useMemo(() => {
    const checks = [
      { label: nodeById.research?.label ?? "Research", stage: 0 },
      { label: nodeById.human?.label ?? "Human", stage: 1 },
      { label: nodeById["human-seo"]?.label ?? "SEO check", stage: 3 },
      {
        label: nodeById["human-publish"]?.label ?? "Publish check",
        stage: 4,
      },
    ];
    return checks.map((row) => {
      let mark = "Waiting";
      if (!phase) mark = "—";
      else if (phase.kind === "run" && phase.stage > row.stage) mark = "✓";
      else if (phase.kind === "run" && phase.stage === row.stage) mark = "●";
      else if (
        (phase.kind === "removing" || phase.kind === "removed-hold") &&
        row.stage < REMOVABLE_STAGE_INDEX
      ) {
        mark = "✓";
      } else if (phase.kind === "run" && phase.stage > REMOVABLE_STAGE_INDEX) {
        if (row.stage < REMOVABLE_STAGE_INDEX) mark = "✓";
      }
      return { label: row.label, mark };
    });
  }, [phase, nodeById]);

  const progressPct = reduceMotion
    ? 100
    : Math.round(((phaseIndex + 1) / PHASES.length) * 100);

  const activeLabel = (() => {
    if (!phase) return copy.workflowStatusReady;
    if (phase.kind === "removing") {
      return `${copy.workflowStageRemoving} ${copy.workflowStages[phase.stage]?.label ?? ""}`;
    }
    if (phase.kind === "removed-hold") {
      return `${copy.workflowStageRemoved} · ${copy.workflowStages[phase.stage]?.label ?? ""}`;
    }
    return copy.workflowStages[phase.stage]?.label ?? "";
  })();

  function stageUiState(
    index: number,
  ): "idle" | "done" | "active" | "removing" | "removed" {
    if (reduceMotion || !phase) return "idle";
    if (index === REMOVABLE_STAGE_INDEX) {
      if (phase.kind === "removing") return "removing";
      if (stageBeingRemoved) return "removed";
    }
    if (phase.kind === "run") {
      if (index < phase.stage) {
        if (index === REMOVABLE_STAGE_INDEX && stageBeingRemoved) return "removed";
        return "done";
      }
      if (index === phase.stage) return "active";
      return "idle";
    }
    // removing / removed-hold
    if (index < REMOVABLE_STAGE_INDEX) return "done";
    if (index === REMOVABLE_STAGE_INDEX) {
      return phase.kind === "removing" ? "removing" : "removed";
    }
    return "idle";
  }

  function connectorState(fromIndex: number): "idle" | "lit" | "flowing" {
    if (reduceMotion || !phase) return "idle";
    if (fromIndex === REMOVABLE_STAGE_INDEX && stageBeingRemoved) return "idle";

    if (phase.kind === "run") {
      const target = phase.stage;
      if (fromIndex === REMOVABLE_STAGE_INDEX - 1 && stageBeingRemoved) {
        if (target > REMOVABLE_STAGE_INDEX) {
          return target === REMOVABLE_STAGE_INDEX + 1 ? "flowing" : "lit";
        }
      }
      if (fromIndex < target - 1) return "lit";
      if (fromIndex === target - 1) return "flowing";
      return "idle";
    }

    if (fromIndex < REMOVABLE_STAGE_INDEX - 1) return "lit";
    if (fromIndex === REMOVABLE_STAGE_INDEX - 1) return "flowing";
    return "idle";
  }

  function statusText(state: ReturnType<typeof stageUiState>) {
    switch (state) {
      case "active":
        return copy.workflowStageActive;
      case "done":
        return copy.workflowStageDone;
      case "removing":
        return copy.workflowStageRemoving;
      case "removed":
        return copy.workflowStageRemoved;
      default:
        return copy.workflowStageQueued;
    }
  }

  return (
    <div
      className="di-wf"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.workflowTitle}
    >
      <div className="di-wf__chrome">
        <div className="di-wf__brand">
          <span className="di-wf__logo" aria-hidden>
            D
          </span>
          <span>Dolphin Intelligence</span>
          <span className="di-wf__name">{copy.workflowCampaignName}</span>
        </div>
        <ul className="di-wf__counts" aria-label="Node counts">
          <li>
            <span className="di-wf__dot di-wf__dot--agent" aria-hidden />
            {copy.workflowLegend.find((l) => l.kind === "agent")?.label}{" "}
            <b>{counts.agent}</b>
          </li>
          <li>
            <span className="di-wf__dot di-wf__dot--action" aria-hidden />
            {copy.workflowLegend.find((l) => l.kind === "action")?.label}{" "}
            <b>{counts.action}</b>
          </li>
          <li>
            <span className="di-wf__dot di-wf__dot--logic" aria-hidden />
            {copy.workflowLegend.find((l) => l.kind === "logic")?.label}{" "}
            <b>{counts.logic}</b>
          </li>
          <li>
            <span className="di-wf__dot di-wf__dot--human" aria-hidden />
            {copy.workflowLegend.find((l) => l.kind === "human")?.label}{" "}
            <b>{counts.human}</b>
          </li>
          <li>
            {copy.workflowCountNodes} <b>{counts.nodes}</b>
          </li>
        </ul>
      </div>

      <div className="di-wf__board">
        <div className="di-wf__board-top">
          <p className="di-wf__canvas-title">{copy.workflowCanvasTitle}</p>
          <ul className="di-wf__legend" aria-label="Legend">
            {copy.workflowLegend.map((item) => (
              <li key={item.kind}>
                <span
                  className={`di-wf__dot di-wf__dot--${item.kind}`}
                  aria-hidden
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="di-wf__stages">
          {stages.map((stage, index) => {
            const state = stageUiState(index);
            const showConnector = index % 4 !== 3 && index < stages.length - 1;
            const conn = connectorState(index);
            const badgeIds = STAGE_BADGES[stage.id] ?? [];
            const isGone = state === "removed" || state === "removing";

            return (
              <div key={stage.id} className="di-wf__stage-wrap">
                <section
                  className={[
                    "di-wf__stage",
                    state === "active" ? "is-active" : "",
                    state === "done" ? "is-done" : "",
                    state === "removing" ? "is-removing" : "",
                    state === "removed" ? "is-removed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-current={state === "active" ? "step" : undefined}
                >
                  <div className="di-wf__stage-head">
                    <p className="di-wf__stage-label">{stage.label}</p>
                    <span className="di-wf__stage-status">
                      {statusText(state)}
                    </span>
                  </div>

                  {!isGone || state === "removing" ? (
                    <div className="di-wf__nodes">
                      {stage.nodeIds.map((id) => {
                        const node = nodeById[id];
                        if (!node) return null;
                        return (
                          <article
                            key={id}
                            className={[
                              "di-wf__node",
                              `di-wf__node--${node.kind}`,
                              state === "active" ? "is-pulse" : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            data-node={id}
                          >
                            <div className="di-wf__node-head">
                              <div className="di-wf__node-icon" aria-hidden>
                                {NODE_ICON[id] ?? KIND_ICON[node.kind]}
                              </div>
                              <div>
                                <div className="di-wf__node-title">
                                  {node.label}
                                </div>
                                <div className="di-wf__node-type">
                                  {node.typeLabel}
                                </div>
                              </div>
                            </div>
                            <p className="di-wf__node-desc">{node.desc}</p>
                            <div className="di-wf__io">
                              {node.input ? (
                                <span>
                                  IN <b>{node.input}</b>
                                </span>
                              ) : (
                                <span />
                              )}
                              <span>
                                OUT <b>{node.output}</b>
                              </span>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="di-wf__removed-note">
                      {copy.workflowStageRemoved}
                    </p>
                  )}

                  {badgeIds.length > 0 && state !== "removed" ? (
                    <div className="di-wf__badge-row">
                      {badgeIds.map((bid) => {
                        const badge = badgeById[bid];
                        if (!badge) return null;
                        return (
                          <span
                            key={bid}
                            className={`di-wf__badge di-wf__badge--${badge.tone}`}
                          >
                            {badge.label}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}
                </section>

                {showConnector ? (
                  <div
                    className={[
                      "di-wf__connector",
                      conn === "lit" ? "is-lit" : "",
                      conn === "flowing" ? "is-flowing is-lit" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden
                  >
                    <span className="di-wf__connector-line" />
                    <span className="di-wf__connector-arrow">›</span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {!reduceMotion ? (
          <div className="di-wf__run" aria-hidden>
            <strong>{copy.workflowRunningLabel}</strong>
            <div className="di-wf__run-rows">
              {runRows.map((row) => (
                <div key={row.label} className="di-wf__run-row">
                  <span>{row.label}</span>
                  <b>{row.mark}</b>
                </div>
              ))}
            </div>
            <div className="di-wf__progress">
              <i style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        ) : null}
      </div>

      <div className="di-wf__footer">
        <span aria-live="polite">{activeLabel}</span>
        <span className="di-wf__status">
          <i
            className={`di-wf__status-dot${reduceMotion ? "" : " is-running"}`}
            aria-hidden
          />
          {reduceMotion
            ? copy.workflowStatusReady
            : copy.workflowStatusRunning}
        </span>
      </div>
    </div>
  );
}
