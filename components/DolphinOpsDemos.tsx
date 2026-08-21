"use client";

import { useEffect, useId, useState } from "react";
import type {
  DolphinOpsCopy,
  OpsCustomizeKind,
  OpsToolId,
  OpsUiKind,
} from "@/lib/i18n/dolphin-ops-copy";
import { useDesktopMotion } from "@/lib/motion";
import "./DolphinOpsDemos.css";

const HERO_LAST = 8;
const CHART_HEIGHTS = [42, 58, 51, 72, 64, 88, 47];

function useCycle(length: number, ms: number, enabled: boolean) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled || length < 2) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, ms);
    return () => window.clearInterval(id);
  }, [enabled, length, ms]);

  return enabled ? index : Math.max(0, length - 1);
}

function AppChrome({
  copy,
  running,
  label,
}: {
  copy: DolphinOpsCopy;
  running: boolean;
  label: string;
}) {
  return (
    <div className="ops-app__bar">
      <div className="ops-app__brand">
        <span className="ops-app__logo" aria-hidden>
          D
        </span>
        <span>{copy.heroChromeTitle}</span>
      </div>
      <p className="ops-app__status">
        <span
          className={running ? "ops-app__dot is-run" : "ops-app__dot"}
          aria-hidden
        />
        {running ? copy.heroStatusRunning : copy.heroStatusReady}
        <span className="sr-only"> — {label}</span>
      </p>
    </div>
  );
}

function BookingFormPreview({
  copy,
  step,
}: {
  copy: DolphinOpsCopy;
  step: number;
}) {
  const showForm = step >= 4;
  const showStaff = step >= 6;
  const ready = step >= 7;
  const done = step >= 8;

  return (
    <div className={showForm ? "ops-form is-on" : "ops-form"} aria-hidden={!showForm}>
      <p className="ops-form__title">{copy.heroFormTitle}</p>
      <div className="ops-form__grid">
        <div className={step >= 4 ? "ops-field is-on" : "ops-field"}>
          <span className="ops-field__label">{copy.heroFieldCustomer}</span>
          <span className="ops-field__value">{copy.heroCustomerValue}</span>
        </div>
        <div className={step >= 4 ? "ops-field is-on" : "ops-field"}>
          <span className="ops-field__label">{copy.heroFieldService}</span>
          <span className="ops-field__value">{copy.heroServiceValue}</span>
        </div>
        <div className={step >= 5 ? "ops-field is-on" : "ops-field"}>
          <span className="ops-field__label">{copy.heroFieldDate}</span>
          <span className="ops-field__value">{copy.heroDateValue}</span>
        </div>
        <div className={step >= 5 ? "ops-field is-on" : "ops-field"}>
          <span className="ops-field__label">{copy.heroFieldTime}</span>
          <span className="ops-field__value">{copy.heroTimeValue}</span>
        </div>
        <div
          className={
            step >= 5 ? "ops-field ops-field--wide is-on" : "ops-field ops-field--wide"
          }
        >
          <span className="ops-field__label">{copy.heroFieldStaff}</span>
          <span
            className={
              showStaff ? "ops-field__value" : "ops-field__value is-empty"
            }
          >
            {showStaff ? copy.heroStaffValue : copy.heroStaffPlaceholder}
          </span>
        </div>
      </div>
      <div className={ready ? "ops-form__btn is-ready" : "ops-form__btn"}>
        {copy.heroConfirm}
      </div>
      <p className={done ? "ops-form__ok is-on" : "ops-form__ok"}>{copy.heroSuccess}</p>
    </div>
  );
}

function Customer360Preview({ copy }: { copy: DolphinOpsCopy }) {
  return (
    <div className="ops-form is-on ops-table">
      <p className="ops-form__title">{copy.tools[1].previewLabel}</p>
      <p className="ops-table__head">{copy.customer360Name}</p>
      <p className="ops-table__meta">{copy.customer360Meta}</p>
      {copy.customer360Rows.map((row) => (
        <div key={row.label} className="ops-table__row">
          <span>{row.label}</span>
          <b>{row.value}</b>
        </div>
      ))}
    </div>
  );
}

function ChartPreview({ copy }: { copy: DolphinOpsCopy }) {
  return (
    <div className="ops-form is-on">
      <p className="ops-form__title">{copy.chartTitle}</p>
      <div className="ops-chart" aria-hidden>
        {CHART_HEIGHTS.map((h, i) => (
          <div key={copy.chartDays[i]} className="ops-chart__col">
            <span className="ops-chart__bar" style={{ height: `${h}%` }} />
            <span className="ops-chart__lbl">{copy.chartDays[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotifyPreview({ copy }: { copy: DolphinOpsCopy }) {
  return (
    <div className="ops-form is-on">
      <p className="ops-form__title">{copy.notifyListTitle}</p>
      <ul className="ops-notify m-0 p-0">
        {copy.notifyItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="ops-form__btn is-ready">{copy.controlConfirm}</div>
    </div>
  );
}

function PaymentPreview({ copy }: { copy: DolphinOpsCopy }) {
  return (
    <div className="ops-form is-on ops-table">
      <p className="ops-form__title">{copy.tools[4].previewLabel}</p>
      <div className="ops-table__row">
        <span>{copy.heroCustomerValue}</span>
        <b>{copy.heroServiceValue}</b>
      </div>
      <div className="ops-table__row">
        <span>{copy.heroDateValue}</span>
        <b>{copy.heroTimeValue}</b>
      </div>
      <div className="ops-form__btn is-ready">{copy.controlReview}</div>
    </div>
  );
}

function StaffPreview({ copy }: { copy: DolphinOpsCopy }) {
  return (
    <div className="ops-form is-on ops-table">
      <p className="ops-form__title">{copy.tools[5].previewLabel}</p>
      <div className="ops-table__row">
        <span>{copy.heroStaffValue}</span>
        <b>09:00–18:00</b>
      </div>
      <div className="ops-table__row">
        <span>Hạnh</span>
        <b>12:00–20:00</b>
      </div>
    </div>
  );
}

function ToolPreview({
  copy,
  id,
}: {
  copy: DolphinOpsCopy;
  id: OpsToolId;
}) {
  switch (id) {
    case "booking":
      return <BookingFormPreview copy={copy} step={HERO_LAST} />;
    case "customer":
      return <Customer360Preview copy={copy} />;
    case "notification":
      return <NotifyPreview copy={copy} />;
    case "reports":
      return <ChartPreview copy={copy} />;
    case "payment":
      return <PaymentPreview copy={copy} />;
    case "staff":
      return <StaffPreview copy={copy} />;
    default:
      return null;
  }
}

function DynamicUiFrame({
  copy,
  kind,
}: {
  copy: DolphinOpsCopy;
  kind: OpsUiKind;
}) {
  if (kind === "booking") return <BookingFormPreview copy={copy} step={HERO_LAST} />;
  if (kind === "customer360") return <Customer360Preview copy={copy} />;
  if (kind === "chart") return <ChartPreview copy={copy} />;
  return <NotifyPreview copy={copy} />;
}

export function OpsHeroDemo({ copy }: { copy: DolphinOpsCopy }) {
  const motion = useDesktopMotion();
  const step = useCycle(HERO_LAST + 1, 1300, motion);

  return (
    <div
      className="ops-app"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.heroFormTitle}
    >
      <AppChrome copy={copy} running={motion && step < HERO_LAST} label={copy.heroIntentText} />
      <div className="ops-app__body">
        <div className="ops-hero">
          <div className="ops-intent">
            <p className="ops-intent__label">{copy.heroIntentLabel}</p>
            <p className={step >= 1 ? "ops-intent__bubble is-in" : "ops-intent__bubble"}>
              {copy.heroIntentText}
            </p>
            <div className="ops-trace">
              <div className={step >= 2 ? "ops-trace__row is-on" : "ops-trace__row"}>
                <span className="ops-trace__mark" aria-hidden>
                  1
                </span>
                {copy.heroUnderstanding}
              </div>
              <div className={step >= 3 ? "ops-trace__row is-on" : "ops-trace__row"}>
                <span className="ops-trace__mark" aria-hidden>
                  2
                </span>
                {copy.heroToolSelected}
              </div>
            </div>
          </div>
          <BookingFormPreview copy={copy} step={step} />
        </div>
      </div>
    </div>
  );
}

export function OpsPipelineDemo({ copy }: { copy: DolphinOpsCopy }) {
  const motion = useDesktopMotion();
  const step = useCycle(copy.howPipeline.length, 1400, motion);

  return (
    <div
      className="ops-app"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.howTitle}
    >
      <AppChrome copy={copy} running={motion} label={copy.howPipeline[step]?.label ?? ""} />
      <div className="ops-app__body">
        <div className="ops-pipe">
          {copy.howPipeline.map((node, i) => {
            const state = i === step ? "is-on" : i < step ? "is-done" : "";
            return (
              <div
                key={node.id}
                className={["ops-pipe__node", state].filter(Boolean).join(" ")}
                aria-current={i === step ? "step" : undefined}
              >
                <span className="ops-pipe__idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="ops-pipe__label">{node.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function OpsToolsDemo({ copy }: { copy: DolphinOpsCopy }) {
  const motion = useDesktopMotion();
  const auto = useCycle(copy.tools.length, 2200, motion);
  const [picked, setPicked] = useState<number | null>(null);
  const index = picked ?? auto;
  const tool = copy.tools[index] ?? copy.tools[0];

  return (
    <div
      className="ops-app"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.toolsTitle}
    >
      <AppChrome copy={copy} running={picked === null && motion} label={tool.title} />
      <div className="ops-app__body">
        <div className="ops-tools">
          <div className="ops-tools__list" role="tablist" aria-label={copy.toolsEyebrow}>
            {copy.tools.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={i === index ? "ops-tool is-on" : "ops-tool"}
                onClick={() => setPicked(i)}
              >
                <span className="ops-tool__idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="ops-tool__name">{item.title}</span>
                <p className="ops-tool__body">{item.body}</p>
              </button>
            ))}
          </div>
          <div className="ops-preview" role="tabpanel">
            <ToolPreview copy={copy} id={tool.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OpsDynamicUiDemo({ copy }: { copy: DolphinOpsCopy }) {
  const motion = useDesktopMotion();
  const auto = useCycle(copy.dynamicScenes.length, 2400, motion);
  const [picked, setPicked] = useState<number | null>(null);
  const index = picked ?? auto;
  const scene = copy.dynamicScenes[index] ?? copy.dynamicScenes[0];
  const tabId = useId();

  return (
    <div
      className="ops-app"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.dynamicTitle}
    >
      <AppChrome copy={copy} running={picked === null && motion} label={scene.uiLabel} />
      <div className="ops-app__body ops-dyn">
        <div className="ops-dyn__tabs" role="tablist" aria-label={copy.dynamicEyebrow}>
          {copy.dynamicScenes.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${tabId}-${item.id}`}
              aria-selected={i === index}
              className={i === index ? "ops-dyn__tab is-on" : "ops-dyn__tab"}
              onClick={() => setPicked(i)}
            >
              {item.uiLabel}
            </button>
          ))}
        </div>
        <div className="ops-dyn__stage">
          <div className="ops-intent">
            <p className="ops-intent__label">{copy.heroIntentLabel}</p>
            <p className="ops-intent__bubble is-in">{scene.user}</p>
            <div className="ops-trace">
              <div className="ops-trace__row is-on">
                <span className="ops-trace__mark" aria-hidden>
                  →
                </span>
                {scene.uiLabel}
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby={`${tabId}-${scene.id}`}>
            <DynamicUiFrame copy={copy} kind={scene.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OpsHumanControlDemo({ copy }: { copy: DolphinOpsCopy }) {
  const motion = useDesktopMotion();
  const step = useCycle(6, 1500, motion);
  const showPanel = step >= 2;
  const sent = step >= 5;

  return (
    <div
      className="ops-app"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.controlTitle}
    >
      <AppChrome copy={copy} running={motion && !sent} label={copy.controlActionLabel} />
      <div className="ops-app__body ops-human">
        <p className="ops-human__agent">{copy.controlAgentLine}</p>
        {showPanel ? (
          <div className="ops-human__panel">
            <p className="ops-human__action">{copy.controlActionLabel}</p>
            <div className="ops-human__btns">
              <button
                type="button"
                className={step === 3 ? "is-review" : undefined}
                tabIndex={-1}
              >
                {copy.controlReview}
              </button>
              <button
                type="button"
                className={step >= 4 && !sent ? "is-go" : undefined}
                tabIndex={-1}
              >
                {copy.controlConfirm}
              </button>
            </div>
            {sent ? <p className="ops-human__ok">{copy.controlSent}</p> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CustomizeFormPreview({
  copy,
  step,
}: {
  copy: DolphinOpsCopy;
  step: number;
}) {
  const showNote = step >= 3;

  return (
    <div className="ops-form is-on">
      <p className="ops-form__title">{copy.heroFormTitle}</p>
      <div className="ops-form__grid">
        <div className="ops-field is-on">
          <span className="ops-field__label">{copy.heroFieldCustomer}</span>
          <span className="ops-field__value">{copy.heroCustomerValue}</span>
        </div>
        <div className="ops-field is-on">
          <span className="ops-field__label">{copy.heroFieldService}</span>
          <span className="ops-field__value">{copy.heroServiceValue}</span>
        </div>
        <div className="ops-field is-on">
          <span className="ops-field__label">{copy.heroFieldDate}</span>
          <span className="ops-field__value">{copy.heroDateValue}</span>
        </div>
        <div className="ops-field is-on">
          <span className="ops-field__label">{copy.heroFieldTime}</span>
          <span className="ops-field__value">{copy.heroTimeValue}</span>
        </div>
        {showNote ? (
          <div className="ops-field ops-field--wide is-on is-new">
            <span className="ops-field__label">
              {copy.customizeNoteLabel}
              {step >= 4 ? (
                <span className="ops-req">{copy.customizeNoteRequired}</span>
              ) : null}
            </span>
            <span className="ops-field__value is-empty">
              {copy.customizeNotePlaceholder}
            </span>
          </div>
        ) : null}
      </div>
      <p className={step >= 5 ? "ops-form__ok is-on" : "ops-form__ok"}>
        {copy.customizeApplied}
      </p>
    </div>
  );
}

function CustomizeReportPreview({
  copy,
  step,
}: {
  copy: DolphinOpsCopy;
  step: number;
}) {
  const showChart = step >= 3;

  return (
    <div className="ops-form is-on">
      <p className="ops-form__title">{copy.customizeReportTitle}</p>
      <p className={step >= 2 ? "ops-formula is-on" : "ops-formula"}>
        <span className="ops-formula__lbl">{copy.customizeFormulaLabel}</span>
        {copy.customizeFormula}
      </p>
      {showChart ? (
        <div className="ops-chart" aria-hidden>
          {CHART_HEIGHTS.map((h, i) => (
            <div key={copy.chartDays[i]} className="ops-chart__col">
              <span className="ops-chart__bar" style={{ height: `${h}%` }} />
              <span className="ops-chart__lbl">{copy.chartDays[i]}</span>
            </div>
          ))}
        </div>
      ) : null}
      <p className={step >= 5 ? "ops-form__ok is-on" : "ops-form__ok"}>
        {copy.customizeApplied}
      </p>
    </div>
  );
}

export function OpsAdminCustomizeDemo({ copy }: { copy: DolphinOpsCopy }) {
  const motion = useDesktopMotion();
  const auto = useCycle(copy.customizeScenes.length * 6, 1300, motion);
  const [picked, setPicked] = useState<number | null>(null);
  const sceneIndex =
    (picked ?? Math.floor(auto / 6)) % Math.max(copy.customizeScenes.length, 1);
  const step = picked !== null ? 5 : auto % 6;
  const scene = copy.customizeScenes[sceneIndex] ?? copy.customizeScenes[0];
  const tabId = useId();
  const kind: OpsCustomizeKind = scene.id;

  return (
    <div
      className="ops-app"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.customizeTitle}
    >
      <AppChrome
        copy={copy}
        running={picked === null && motion && step < 5}
        label={scene.tab}
      />
      <div className="ops-app__body ops-dyn">
        <div className="ops-dyn__tabs" role="tablist" aria-label={copy.customizeEyebrow}>
          {copy.customizeScenes.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${tabId}-${item.id}`}
              aria-selected={i === sceneIndex}
              className={i === sceneIndex ? "ops-dyn__tab is-on" : "ops-dyn__tab"}
              onClick={() => setPicked(i)}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="ops-dyn__stage">
          <div className="ops-intent">
            <p className="ops-intent__label">{copy.adminIntentLabel}</p>
            <p className="ops-intent__bubble is-in">{scene.user}</p>
            <div className="ops-trace">
              <div className={step >= 1 ? "ops-trace__row is-on" : "ops-trace__row"}>
                <span className="ops-trace__mark" aria-hidden>
                  1
                </span>
                {copy.customizeApplying}
              </div>
              <div className={step >= 2 ? "ops-trace__row is-on" : "ops-trace__row"}>
                <span className="ops-trace__mark" aria-hidden>
                  2
                </span>
                {scene.uiLabel}
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby={`${tabId}-${scene.id}`}>
            {kind === "form" ? (
              <CustomizeFormPreview copy={copy} step={step} />
            ) : (
              <CustomizeReportPreview copy={copy} step={step} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
