"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import {
  CARE_STANDALONE,
  CARE_STANDALONE_AUDIENCE,
  COMBO_PACKAGES,
  INTEGRATION_OUTSOURCE,
  ONETIME_WEB,
  PRICING_CTA,
  PRICING_FAQ_ITEMS,
  SAAS_MONTHLY,
  DOLPHIN_CARE_GLOSS,
  formatVnd,
  type ComboPackage,
} from "@/lib/pricing/dolphin-pricing-policy-2026";
import {
  PRICING_INDUSTRIES,
  featuresForCombo,
  type IndustryId,
} from "@/lib/pricing/dolphin-pricing-industries-2026";
import { WARRANTY_POLICY_PATH } from "@/lib/pricing/dolphin-warranty-policy-2026";

type ViewId = "packages" | "care" | "list" | "outsource";

const VIEWS: { id: ViewId; label: string }[] = [
  { id: "packages", label: "Gói combo" },
  { id: "care", label: "Care lẻ" },
  { id: "list", label: "Niêm yết" },
  { id: "outsource", label: "Outsource" },
];

const DRAG_THRESHOLD_PX = 28;
const AXIS_LOCK_PX = 6;
/** Max feature lines on narrow screens before “Xem thêm”. */
const FEATURE_PREVIEW = 6;

function FeatureIcon() {
  return (
    <svg className="elp__fi" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.2 8.2 6.3 11.1 12.8 4.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TabDot({ active }: { active: boolean }) {
  return (
    <span className={`elp__tab-dot${active ? " is-on" : ""}`} aria-hidden />
  );
}

type DragAxis = null | "x" | "y";

/** Free horizontal strip — drag only when content overflows (clicks always work). */
function DragStrip({
  className,
  trackClassName,
  children,
  label,
  resetKey,
  activeSelector,
}: {
  className?: string;
  trackClassName?: string;
  children: ReactNode;
  label: string;
  resetKey?: string;
  /** CSS selector for the active control — centers it when overflow. */
  activeSelector?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [dragPx, setDragPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const dragRef = useRef<{
    pointerId: number | null;
    startX: number;
    startY: number;
    origin: number;
    axis: DragAxis;
    suppressClick: boolean;
  }>({
    pointerId: null,
    startX: 0,
    startY: 0,
    origin: 0,
    axis: null,
    suppressClick: false,
  });

  const clamp = (value: number) => {
    const vp = viewportRef.current?.clientWidth ?? 0;
    const tw = trackRef.current?.scrollWidth ?? 0;
    const min = Math.min(0, vp - tw - 1);
    return Math.max(min, Math.min(0, value));
  };

  useEffect(() => {
    setOffset(0);
    setDragPx(0);
  }, [resetKey]);

  useEffect(() => {
    const vpEl = viewportRef.current;
    const trEl = trackRef.current;
    if (!vpEl || !trEl) return;

    const measure = () => {
      setCanDrag(trEl.scrollWidth > vpEl.clientWidth + 2);
      setOffset((o) => clamp(o));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(vpEl);
    ro.observe(trEl);
    return () => ro.disconnect();
  }, [resetKey, children]);

  useEffect(() => {
    if (!activeSelector || !canDrag) return;
    const vpEl = viewportRef.current;
    const trEl = trackRef.current;
    const active = trEl?.querySelector<HTMLElement>(activeSelector);
    if (!vpEl || !trEl || !active) return;

    const vpRect = vpEl.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();
    const delta =
      aRect.left + aRect.width / 2 - (vpRect.left + vpRect.width / 2);
    if (Math.abs(delta) < 8) return;
    setOffset((o) => clamp(o - delta));
  }, [activeSelector, canDrag]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!canDrag || event.button !== 0) return;
    /* Do not capture yet — early capture steals clicks from industry tabs. */
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      origin: offset,
      axis: null,
      suppressClick: false,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.axis) {
      if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;
      drag.axis = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      if (drag.axis === "y") return;
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
      setDragging(true);
    }
    if (drag.axis !== "x") return;

    setDragPx(dx);
    event.preventDefault();
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (drag.axis === "x") {
      const next = clamp(drag.origin + dragPx);
      if (Math.abs(dragPx) >= DRAG_THRESHOLD_PX) drag.suppressClick = true;
      setOffset(next);
    }
    dragRef.current = {
      pointerId: null,
      startX: 0,
      startY: 0,
      origin: 0,
      axis: null,
      suppressClick: drag.suppressClick,
    };
    setDragPx(0);
    setDragging(false);
  };

  const onClickCapture = (event: React.MouseEvent) => {
    if (!dragRef.current.suppressClick) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("button, a, [role='tab']")) {
      dragRef.current.suppressClick = false;
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    dragRef.current.suppressClick = false;
  };

  const x = clamp(offset + (dragging ? dragPx : 0));

  return (
    <div
      ref={viewportRef}
      className={`elp__dragstrip${canDrag ? " elp__dragstrip--overflow" : ""}${className ? ` ${className}` : ""}`}
      role="region"
      aria-label={label}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
    >
      <div
        ref={trackRef}
        className={`elp__dragstrip-track${dragging ? " is-dragging" : ""}${trackClassName ? ` ${trackClassName}` : ""}`}
        style={{ transform: `translate3d(${x}px, 0, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}

/** Peek carousel — fixed card width + translateX by measured step. */
function PlanSlider({
  label,
  resetKey,
  slides,
}: {
  label: string;
  resetKey: string;
  slides: ReactNode[];
}) {
  const count = slides.length;
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const dragRef = useRef<{
    pointerId: number | null;
    startX: number;
    startY: number;
    deltaX: number;
    axis: DragAxis;
    suppressClick: boolean;
  }>({
    pointerId: null,
    startX: 0,
    startY: 0,
    deltaX: 0,
    axis: null,
    suppressClick: false,
  });

  useEffect(() => {
    setIndex(0);
    setDragOffset(0);
    setIsDragging(false);
  }, [resetKey]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isDesktop) return;
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;

    const measure = () => {
      const slide = track.querySelector<HTMLElement>(".elp__slide");
      if (!slide) return;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
      setStep(slide.getBoundingClientRect().width + gap);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(slider);
    ro.observe(track);
    return () => ro.disconnect();
  }, [count, resetKey, isDesktop]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(count - 1, i + 1));
  const goTo = (i: number) => setIndex(Math.max(0, Math.min(count - 1, i)));

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (isDesktop || count <= 1 || event.button !== 0) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("a, button")) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      deltaX: 0,
      axis: null,
      suppressClick: false,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.axis) {
      if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;
      drag.axis = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      if (drag.axis === "y") return;
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
      setIsDragging(true);
    }
    if (drag.axis !== "x") return;

    drag.deltaX = dx;
    setDragOffset(dx);
    event.preventDefault();
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (drag.axis === "x" && Math.abs(drag.deltaX) >= DRAG_THRESHOLD_PX) {
      drag.suppressClick = true;
      if (drag.deltaX < 0) goNext();
      else goPrev();
    }

    dragRef.current = {
      pointerId: null,
      startX: 0,
      startY: 0,
      deltaX: 0,
      axis: null,
      suppressClick: drag.suppressClick,
    };
    setDragOffset(0);
    setIsDragging(false);
  };

  const onClickCapture = (event: React.MouseEvent) => {
    if (!dragRef.current.suppressClick) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("a, button")) {
      dragRef.current.suppressClick = false;
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    dragRef.current.suppressClick = false;
  };

  if (count === 0) return null;

  const baseX = !isDesktop && step > 0 ? -index * step : 0;

  return (
    <div
      className={`elp__slider-wrap${isDesktop ? " elp__slider-wrap--grid" : ""}`}
    >
      {!isDesktop ? (
        <div className="elp__slider-toolbar no-print">
          <span className="elp__slider-count">
            {index + 1}/{count}
          </span>
          <div className="elp__track-nav">
            <button
              type="button"
              className="elp__track-btn"
              aria-label={`Slide trước — ${label}`}
              disabled={index <= 0}
              onClick={goPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className="elp__track-btn"
              aria-label={`Slide sau — ${label}`}
              disabled={index >= count - 1}
              onClick={goNext}
            >
              ›
            </button>
          </div>
        </div>
      ) : null}

      <div
        ref={sliderRef}
        className={`elp__slider${isDragging ? " is-dragging" : ""}${isDesktop ? " elp__slider--grid" : ""}`}
        role="region"
        aria-roledescription={isDesktop ? undefined : "carousel"}
        aria-label={label}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        <div
          ref={trackRef}
          className={`elp__slider-track${isDragging ? " is-dragging" : ""}`}
          data-count={count}
          style={
            isDesktop
              ? undefined
              : { transform: `translate3d(${baseX + dragOffset}px, 0, 0)` }
          }
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="elp__slide"
              aria-hidden={isDesktop ? undefined : i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {!isDesktop && count > 1 ? (
        <div className="elp__dots" role="tablist" aria-label={`${label} — trang`}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Gói ${i + 1}`}
              className={`elp__dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CardFeatures({
  featureGroups,
  features,
}: {
  featureGroups?: { label: string; items: readonly string[] }[];
  features?: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const onChange = () => {
      setIsNarrow(mq.matches);
      if (!mq.matches) setExpanded(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const flat = featureGroups?.length
    ? featureGroups.flatMap((g) => [...g.items])
    : (features ?? []);

  if (!flat.length) return null;

  /* Desktop / expanded: show labeled groups when available */
  if ((!isNarrow || expanded) && featureGroups?.length) {
    return (
      <div className="elp__groups">
        {featureGroups.map((g) => (
          <div key={g.label} className="elp__group">
            <p className="elp__group-label">{g.label}</p>
            <ul className="elp__features">
              {g.items.map((f) => (
                <li key={f}>
                  <FeatureIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {isNarrow && expanded ? (
          <button
            type="button"
            className="elp__more"
            onClick={() => setExpanded(false)}
          >
            Thu gọn
          </button>
        ) : null}
      </div>
    );
  }

  const visible = isNarrow && !expanded ? flat.slice(0, FEATURE_PREVIEW) : flat;
  const hidden = isNarrow && !expanded ? Math.max(0, flat.length - FEATURE_PREVIEW) : 0;

  return (
    <div className="elp__groups">
      <ul className="elp__features elp__features--tight">
        {visible.map((f) => (
          <li key={f}>
            <FeatureIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {hidden > 0 ? (
        <button
          type="button"
          className="elp__more"
          onClick={() => setExpanded(true)}
        >
          +{hidden} mục nữa
        </button>
      ) : null}
    </div>
  );
}

function ElPlanCard({
  name,
  price,
  priceNote,
  strike,
  cta,
  intro,
  industryTag,
  features,
  featureGroups,
  metric,
  popular,
  badge,
  tone = "grey",
}: {
  name: string;
  price: string;
  priceNote: string;
  strike?: string;
  cta: string;
  intro?: string;
  industryTag?: string;
  features?: string[];
  featureGroups?: { label: string; items: readonly string[] }[];
  metric: string;
  popular?: boolean;
  badge?: string;
  tone?: "grey" | "warm" | "ink" | "gradient";
}) {
  return (
    <article
      className={`elp__card${popular ? " elp__card--popular" : ""}`}
      aria-label={name}
    >
      <div className={`elp__panel elp__panel--${tone}`}>
        {badge ? <span className="elp__badge">{badge}</span> : null}
        {industryTag ? (
          <span className="elp__industry-tag">{industryTag}</span>
        ) : null}
        <h3 className="elp__plan-name">{name}</h3>
        <div className="elp__price-block">
          {strike ? <p className="elp__strike">{strike}</p> : null}
          <p className="elp__price">
            <span className="elp__price-num">{price}</span>
            <span className="elp__price-note">{priceNote}</span>
          </p>
        </div>
      </div>
      <a
        href={CONTACTS.zalo}
        target="_blank"
        rel="noopener noreferrer"
        className="elp__cta"
        draggable={false}
      >
        {cta}
      </a>
      {intro ? <p className="elp__intro">{intro}</p> : null}
      <CardFeatures featureGroups={featureGroups} features={features} />
      <p className="elp__metric">{metric}</p>
    </article>
  );
}

function comboTone(pkg: ComboPackage): "grey" | "warm" | "ink" | "gradient" {
  if (pkg.no === 3) return "gradient";
  if (pkg.no === 6) return "ink";
  if (pkg.no === 5) return "warm";
  return "grey";
}

function shortComponents(value: string): string {
  return value.replace(/\s*\([^)]*chatbot AI[^)]*\)/gi, "").trim();
}

function ComboCard({
  pkg,
  industryId,
  industryLabel,
}: {
  pkg: ComboPackage;
  industryId: IndustryId;
  industryLabel: string;
}) {
  const components = shortComponents(pkg.components);
  const groups = featuresForCombo(industryId, pkg.no).map((g) => ({
    label:
      g.tier === "crm"
        ? `CRM · ${industryLabel}`
        : g.tier === "care"
          ? "Thêm Dolphin Care"
          : "Thêm Dolphin Ops",
    items: g.items,
  }));

  return (
    <ElPlanCard
      name={pkg.name}
      price={formatVnd(pkg.prepaid)}
      priceNote="thanh toán trước"
      cta="Nhận báo giá"
      industryTag={industryLabel}
      intro={`Gồm ${components} · ${pkg.term} · ${pkg.webSupport}`}
      featureGroups={groups}
      metric={`${industryLabel} · ${pkg.term}`}
      popular={pkg.highlight}
      badge={pkg.badge}
      tone={comboTone(pkg)}
    />
  );
}

function industryFromHash(hash: string): IndustryId | null {
  const match = /^#industry-([a-z]+)$/.exec(hash);
  if (!match) return null;
  const id = match[1];
  return PRICING_INDUSTRIES.some((item) => item.id === id)
    ? (id as IndustryId)
    : null;
}

export function PricingPolicy2026Content() {
  const [industryId, setIndustryId] = useState<IndustryId>("spa");
  const [view, setView] = useState<ViewId>("packages");
  const tabsId = useId();

  useEffect(() => {
    const applyHash = () => {
      const fromHash = industryFromHash(window.location.hash);
      if (fromHash) {
        setIndustryId(fromHash);
        setView("packages");
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const industry =
    PRICING_INDUSTRIES.find((i) => i.id === industryId) ?? PRICING_INDUSTRIES[0];

  const starterCombos = COMBO_PACKAGES.filter((p) => p.no <= 4);
  const growthCombos = COMBO_PACKAGES.filter((p) => p.no >= 5);

  return (
    <div className="elp">
      <section className="elp__hero" aria-labelledby="pricing-policy-heading">
        <div className="mb-6 flex justify-center">
          <PageBreadcrumb
            items={[
              { name: "Trang chủ", href: "/" },
              { name: "Chính sách giá 2026" },
            ]}
          />
        </div>
        <h1 id="pricing-policy-heading" className="elp__h1">
          Giá linh hoạt theo nhu cầu
        </h1>
        <p className="elp__hero-sub">
          Chọn ngành — xem gói và chức năng CRM · Care · Ops tương ứng.
        </p>

        <div className="elp__controls elp__controls--bar">
          <DragStrip
            label="Ngành"
            className="elp__dragstrip--tabs"
            trackClassName="elp__tabs elp__tabs--industry"
            resetKey={`industries-${PRICING_INDUSTRIES.length}`}
            activeSelector={`[data-industry-tab="${industryId}"]`}
          >
            <div role="tablist" aria-label="Ngành" id={tabsId} className="elp__tabs-inner">
              {PRICING_INDUSTRIES.map((item) => {
                const active = industryId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`industry-${item.id}`}
                    data-industry-tab={item.id}
                    aria-selected={active}
                    className={`elp__tab${active ? " is-active" : ""}`}
                    onClick={() => {
                      setIndustryId(item.id);
                      setView("packages");
                      if (typeof window !== "undefined") {
                        window.history.replaceState(
                          null,
                          "",
                          `#industry-${item.id}`,
                        );
                      }
                    }}
                  >
                    <TabDot active={active} />
                    <span className="elp__tab-label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </DragStrip>
          <div className="elp__billing" aria-label="Hình thức thanh toán">
            <span className="elp__billing-label">Thanh toán trước</span>
            <svg className="elp__billing-chevron" viewBox="0 0 12 12" aria-hidden>
              <path
                d="M3 4.5 6 7.5 9 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <p className="elp__industry-lead" key={industry.id}>
          {industry.lead}
        </p>

        <DragStrip
          label="Loại bảng giá"
          className="elp__dragstrip--views"
          trackClassName="elp__views"
          resetKey="views"
          activeSelector={`.elp__view.is-active`}
        >
          <div role="tablist" aria-label="Loại bảng giá" className="elp__views-inner">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={view === v.id}
                className={`elp__view${view === v.id ? " is-active" : ""}`}
                onClick={() => setView(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </DragStrip>
      </section>

      <div className="elp__main">
        {view === "packages" ? (
          <div className="elp__panel-block" key={industryId}>
            <h2 className="elp__group-label">
              Gói combo cho {industry.label}
            </h2>
            <PlanSlider
              label={`Gói combo ${industry.label}`}
              resetKey={`${industryId}-starter`}
              slides={starterCombos.map((pkg) => (
                <ComboCard
                  key={`${industryId}-${pkg.no}`}
                  pkg={pkg}
                  industryId={industry.id}
                  industryLabel={industry.label}
                />
              ))}
            />

            <h2 className="elp__group-label">
              Cho tăng trưởng đầy đủ · {industry.label}
            </h2>
            <PlanSlider
              label={`Tăng trưởng ${industry.label}`}
              resetKey={`${industryId}-growth`}
              slides={[
                ...growthCombos.map((pkg) => (
                  <ComboCard
                    key={`${industryId}-${pkg.no}`}
                    pkg={pkg}
                    industryId={industry.id}
                    industryLabel={industry.label}
                  />
                )),
                <ElPlanCard
                  key={`${industryId}-custom`}
                  name="Tùy chỉnh"
                  price="Liên hệ"
                  priceNote="theo phạm vi"
                  cta="Chat Zalo"
                  industryTag={industry.label}
                  intro={`Ngoài bảng · ${industry.label} · Intelligence · tích hợp`}
                  features={[
                    `Phạm vi CRM · Care · Ops cho ${industry.label}`,
                    "Dolphin Intelligence khi đã có CRM",
                    "Tích hợp / outsource báo giá riêng",
                    "Không dùng thử — thanh toán trước",
                  ]}
                  metric={`${industry.label} · Enterprise`}
                  tone="warm"
                />,
              ]}
            />
            <p className="elp__fineprint">
              Dolphin Care = {DOLPHIN_CARE_GLOSS}. Chức năng theo ngành mang tính mô
              tả vận hành (Ops tools / Edu modules) — báo giá chốt phạm vi qua Zalo.
              Phí bên thứ ba (Zalo OA, ZNS, SMTP…) khách trả trực tiếp NCC. Vuốt ngang
              để xem gói tiếp theo.
            </p>
          </div>
        ) : null}

        {view === "care" ? (
          <div className="elp__panel-block" key={`care-${industryId}`}>
            <p className="elp__tab-lead">
              {CARE_STANDALONE_AUDIENCE} Phù hợp khi đã có CRM {industry.label}.
            </p>
            <PlanSlider
              label={`Care lẻ · ${industry.label}`}
              resetKey={`${industryId}-care`}
              slides={CARE_STANDALONE.map((row) => (
                <ElPlanCard
                  key={`${industryId}-${row.term}`}
                  name={`Care ${row.term}`}
                  price={formatVnd(row.price)}
                  priceNote="thanh toán trước"
                  strike={`Giá gốc ${formatVnd(row.list)}`}
                  cta="Nhận báo giá"
                  industryTag={industry.label}
                  intro={`Giảm ${row.discount} · TB ${formatVnd(row.avgMonthly)}/tháng · ${industry.label}`}
                  featureGroups={[
                    {
                      label: `Care cho ${industry.label}`,
                      items:
                        featuresForCombo(industry.id, 3).find((g) => g.tier === "care")
                          ?.items ?? [],
                    },
                    {
                      label: "Điều kiện",
                      items: [
                        `Kỳ hạn ${row.term}`,
                        `Giảm ${row.discount} so với giá gốc`,
                        "Không tặng Website",
                        `Chỉ khi đã có CRM ${industry.label}`,
                      ],
                    },
                  ]}
                  metric={
                    row.recommended
                      ? `${industry.label} · khuyên dùng`
                      : `${industry.label} · ${row.term}`
                  }
                  popular={row.recommended}
                  badge={row.recommended ? "Khuyên dùng" : undefined}
                  tone={row.recommended ? "gradient" : "grey"}
                />
              ))}
            />
          </div>
        ) : null}

        {view === "list" ? (
          <div className="elp__panel-block">
            <p className="elp__tab-lead">
              Giá niêm yết gốc — combo = kỳ hạn × giá tháng (hoặc one-time web).
            </p>
            <h2 className="elp__group-label">SaaS / tháng</h2>
            <PlanSlider
              label="Niêm yết SaaS"
              resetKey="list-saas"
              slides={SAAS_MONTHLY.map((row, i) => (
                <ElPlanCard
                  key={row.product}
                  name={row.product.replace(/ \(.*\)$/, "")}
                  price={formatVnd(row.price)}
                  priceNote="mỗi tháng"
                  cta="Nhận báo giá"
                  intro={row.product.includes("Care") ? DOLPHIN_CARE_GLOSS : undefined}
                  features={[
                    "Nhân với kỳ hạn gói khi đóng combo",
                    "Thanh toán trước theo kỳ",
                    "Không dùng thử miễn phí",
                  ]}
                  metric="List price"
                  tone={i === 1 ? "warm" : "grey"}
                />
              ))}
            />
            <h2 className="elp__group-label">Website one-time</h2>
            <PlanSlider
              label="Website one-time"
              resetKey="list-web"
              slides={ONETIME_WEB.map((row) => (
                <ElPlanCard
                  key={row.item}
                  name={row.item}
                  price={formatVnd(row.price)}
                  priceNote="one-time"
                  cta="Nhận báo giá"
                  features={[
                    "Áp dụng khi triển khai hạng mục",
                    "Có thể tặng / giảm theo combo",
                  ]}
                  metric="One-time"
                  tone="grey"
                />
              ))}
            />
          </div>
        ) : null}

        {view === "outsource" ? (
          <div className="elp__panel-block">
            <p className="elp__tab-lead">
              One-time · khoảng giá hoặc giá chốt sau khảo sát phạm vi.
            </p>
            <PlanSlider
              label="Tích hợp & Outsource"
              resetKey="outsource"
              slides={INTEGRATION_OUTSOURCE.map((row, i) => (
                <ElPlanCard
                  key={row.item}
                  name={row.item}
                  price={row.price}
                  priceNote="ước tính"
                  cta="Nhận báo giá"
                  features={[
                    "Báo giá chi tiết sau khảo sát",
                    "Phạm vi chốt trước khi làm",
                  ]}
                  metric="Tích hợp / Outsource"
                  tone={i >= 3 ? "warm" : "grey"}
                />
              ))}
            />
          </div>
        ) : null}
      </div>

      <section className="elp__compare" aria-labelledby="elp-compare-heading">
        <h2 id="elp-compare-heading" className="elp__h2">
          So sánh gói combo
        </h2>
        <div className="elp__compare-wrap">
          <table className="elp__compare-table">
            <thead>
              <tr>
                <th scope="col"> </th>
                {COMBO_PACKAGES.map((pkg) => (
                  <th key={pkg.no} scope="col">
                    <span className="elp__compare-plan">{pkg.name}</span>
                    {pkg.badge ? (
                      <span className="elp__compare-pill">{pkg.badge}</span>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Thành phần</th>
                {COMBO_PACKAGES.map((pkg) => (
                  <td key={pkg.no}>{shortComponents(pkg.components)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Kỳ hạn</th>
                {COMBO_PACKAGES.map((pkg) => (
                  <td key={pkg.no}>{pkg.term}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Thanh toán trước</th>
                {COMBO_PACKAGES.map((pkg) => (
                  <td key={pkg.no} className="elp__num">
                    {formatVnd(pkg.prepaid)}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Hỗ trợ web</th>
                {COMBO_PACKAGES.map((pkg) => (
                  <td key={pkg.no}>{pkg.webSupport}</td>
                ))}
              </tr>
              <tr>
                <th scope="row"> </th>
                {COMBO_PACKAGES.map((pkg) => (
                  <td key={pkg.no}>
                    <a
                      href={CONTACTS.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="elp__compare-cta"
                    >
                      Chọn
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="elp__faq" aria-labelledby="elp-faq-heading">
        <h2 id="elp-faq-heading" className="elp__h2">
          FAQs
        </h2>
        <div className="elp__faq-list">
          {PRICING_FAQ_ITEMS.map((item, index) => (
            <details key={item.q} className="elp__faq-item" open={index === 0}>
              <summary>
                <h3 className="elp__faq-q">{item.q}</h3>
                <span className="elp__faq-icon" aria-hidden />
              </summary>
              <p className="elp__faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="elp__bottom" aria-labelledby="elp-bottom-heading">
        <h2 id="elp-bottom-heading" className="elp__h2 elp__h2--center">
          {PRICING_CTA.title}
        </h2>
        <p className="elp__bottom-lead">{PRICING_CTA.body}</p>
        <div className="elp__bottom-actions">
          <a
            href={CONTACTS.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="elp__cta elp__cta--inline"
          >
            {PRICING_CTA.zaloLabel}
          </a>
          <Link href={assetPath("/contact/")} className="elp__ghost">
            {PRICING_CTA.contactLabel}
          </Link>
          <Link href={assetPath("/industries/")} className="elp__ghost">
            Giải pháp theo ngành
          </Link>
          <Link href={assetPath("/case-studies/")} className="elp__ghost">
            Case studies
          </Link>
          <Link href={assetPath("/faq/")} className="elp__ghost">
            FAQ
          </Link>
          <Link href={assetPath(WARRANTY_POLICY_PATH)} className="elp__ghost">
            Chính sách bảo hành
          </Link>
        </div>
      </section>
    </div>
  );
}
