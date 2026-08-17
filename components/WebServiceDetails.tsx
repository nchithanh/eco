"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Reveal } from "@/components/Reveal";
import type { DetailExtrasUi, ServiceExtras } from "@/lib/detail-extras";
import type {
  ServiceDetail,
  ServiceDetailUi,
} from "@/lib/i18n/service-details";

function splitDash(text: string): { heading?: string; body: string } {
  const match = text.match(/^(.+?)\s+[—–]\s+(.+)$/);
  if (match) {
    return { heading: match[1].trim(), body: match[2].trim() };
  }
  return { body: text };
}

function StepIndex({
  value,
  lead = false,
}: {
  value: number;
  lead?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={
        lead
          ? "grid size-9 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-panel-2)] font-display text-xs font-semibold tabular-nums text-[var(--kuct-accent)] sm:size-10"
          : "grid size-9 shrink-0 place-items-center rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)] font-display text-xs font-semibold tabular-nums text-[var(--kuct-accent)] sm:size-10"
      }
    >
      {String(value).padStart(2, "0")}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="mt-0.5 size-4 shrink-0 text-[var(--kuct-accent)]"
      fill="none"
    >
      <path
        d="M16.5 5.5 8.25 14 3.5 9.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHead({
  id,
  eyebrow,
  title,
  support,
}: {
  id: string;
  eyebrow: string;
  title: string;
  support?: string;
}) {
  return (
    <Reveal variant="title" className="mx-auto max-w-2xl text-center">
      <p className="kuct-type-eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="kuct-type-h2 mt-4 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]"
      >
        <AccentText>{title}</AccentText>
      </h2>
      {support ? (
        <p className="kuct-type-body mx-auto mt-5 max-w-[52ch]">{support}</p>
      ) : null}
    </Reveal>
  );
}

export function WebServiceDetails({
  detail,
  ui,
  extras,
  xui,
  embedded = false,
  onQuote,
}: {
  detail: ServiceDetail;
  ui: ServiceDetailUi;
  extras: ServiceExtras;
  xui: DetailExtrasUi;
  embedded?: boolean;
  onQuote: () => void;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqId = useId();
  const sectionPad = embedded
    ? "scroll-mt-20 py-12 sm:py-14"
    : "scroll-mt-20 py-24";

  return (
    <>
      <section
        id="service-details"
        className={sectionPad}
        aria-labelledby="web-highlights-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            id="web-highlights-heading"
            eyebrow="What you get"
            title={detail.highlightsTitle ?? ui.highlightsTitle}
            support={detail.highlightsLead}
          />
          <ol className="mx-auto mt-12 max-w-3xl list-none space-y-0 divide-y divide-[var(--kuct-border)] border-y border-[var(--kuct-border)] p-0 sm:mt-14">
            {detail.highlights.map((item, index) => {
              const { heading, body } = splitDash(item);
              return (
                <Reveal
                  key={item}
                  as="li"
                  delay={40 + index * 40}
                  className="flex gap-4 py-6"
                >
                  <StepIndex value={index + 1} />
                  <div className="min-w-0 pt-1">
                    <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                      {heading ?? body}
                    </h3>
                    {heading ? (
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {body}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        id="web-process"
        className={`kuct-section-wash ${sectionPad}`}
        aria-labelledby="web-process-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            id="web-process-heading"
            eyebrow="Process"
            title={detail.processTitle ?? ui.processTitle}
            support={detail.processLead}
          />
          <ol className="relative mx-auto mt-12 max-w-3xl list-none space-y-5 p-0 sm:mt-14">
            <span
              aria-hidden
              className="pointer-events-none absolute top-3 bottom-3 left-[1.05rem] w-px bg-[rgba(var(--kuct-accent-rgb),0.28)] sm:left-[1.15rem]"
            />
            {detail.process.map((step, index) => {
              const { heading, body } = splitDash(step);
              const last = index === detail.process.length - 1;
              return (
                <Reveal
                  key={step}
                  as="li"
                  delay={40 + index * 40}
                  className="relative pl-12 sm:pl-14"
                >
                  <span className="absolute top-5 left-0 z-10">
                    <StepIndex value={index + 1} lead={last} />
                  </span>
                  <article className="kuct-surface-card p-5 sm:p-6">
                    <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                      {heading ?? body}
                    </h3>
                    {heading ? (
                      <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {body}
                      </p>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        id="web-deliverables"
        className={sectionPad}
        aria-labelledby="web-deliverables-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            id="web-deliverables-heading"
            eyebrow="Deliverables"
            title={detail.deliverablesTitle ?? ui.deliverablesTitle}
            support={detail.deliverablesLead}
          />
          <Reveal delay={40} className="mx-auto mt-12 max-w-3xl sm:mt-14">
            <ul className="kuct-surface-card list-none space-y-2.5 p-6 sm:p-8">
              {detail.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--kuct-text)]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="web-audience"
        className={`kuct-section-wash ${sectionPad}`}
        aria-labelledby="web-audience-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            id="web-audience-heading"
            eyebrow="Fit"
            title={xui.audienceTitle}
          />
          <Reveal delay={40} className="mx-auto mt-12 max-w-3xl kuct-surface-card p-6 sm:mt-14 sm:p-8">
            <p className="kuct-type-body text-base">{extras.audience}</p>
            <h3 className="mt-8 font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
              {xui.useCasesTitle}
            </h3>
            <ul className="mt-4 list-none space-y-2.5 p-0">
              {extras.useCases.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--kuct-muted)]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="web-faq"
        className={sectionPad}
        aria-labelledby="web-faq-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            id="web-faq-heading"
            eyebrow="FAQ"
            title={xui.faqTitle}
          />
          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:mt-14">
            {extras.faq.map((item, index) => {
              const open = openFaq === index;
              const panelId = `${faqId}-panel-${index}`;
              const buttonId = `${faqId}-btn-${index}`;
              return (
                <Reveal
                  key={item.q}
                  delay={Math.min(index, 6) * 40}
                  className="overflow-hidden rounded-xl bg-[var(--kuct-panel)]"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)] sm:px-6 sm:text-base"
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-menu-hover)] text-sm text-[var(--kuct-accent)]"
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-5 pb-4 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:px-6 sm:pb-5"
                  >
                    <FaqAnswerText text={item.a} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="kuct-surface-card px-6 py-8 text-center sm:px-10 sm:py-10">
            <button
              type="button"
              className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold shadow-[var(--kuct-shadow)]"
              onClick={onQuote}
            >
              {ui.cta}
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
