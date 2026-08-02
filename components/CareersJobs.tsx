"use client";

import { useEffect, useMemo, useState } from "react";
import { BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { JobId } from "@/lib/careers-schema";
import {
  JOB_HIRING,
  getCountdownParts,
  getJobDeadline,
  isJobAcceptingApplications,
  sortJobsByDisplayOrder,
  type CountdownParts,
} from "@/lib/careers-jobs";

type Props = {
  onApply: (role: JobId) => void;
};

type Job = ReturnType<typeof useLocale>["t"]["careers"]["jobs"][number];

function JobCountdown({
  deadline,
  labels,
}: {
  deadline: Date;
  labels: {
    countdown: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    expired: string;
  };
}) {
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const tick = () => setParts(getCountdownParts(deadline, new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [deadline]);

  if (!parts) {
    return (
      <span className="rounded-full bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
        {labels.countdown}…
      </span>
    );
  }

  if (parts.expired) {
    return (
      <span className="rounded-full bg-[var(--kuct-text)]/10 px-3 py-1 text-[var(--kuct-muted)]">
        {labels.expired}
      </span>
    );
  }

  return (
    <span
      className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-[var(--kuct-accent)]/10 px-3 py-1 tabular-nums text-[var(--kuct-accent)]"
      aria-live="polite"
    >
      <span className="font-semibold">{labels.countdown}</span>
      <span>
        {parts.days}
        {labels.days} {parts.hours}
        {labels.hours} {parts.minutes}
        {labels.minutes} {parts.seconds}
        {labels.seconds}
      </span>
    </span>
  );
}

function JobCard({
  job,
  index,
  closed,
  onApply,
  engagement,
  defaultComp,
  applyCta,
  hiring,
}: {
  job: Job;
  index: number;
  closed: boolean;
  onApply: (role: JobId) => void;
  engagement: string;
  defaultComp: string;
  applyCta: string;
  hiring: ReturnType<typeof useLocale>["t"]["careers"]["hiring"];
}) {
  const deadline = getJobDeadline(job.id);

  return (
    <Reveal
      as="li"
      delay={40 + (index % 2) * 40}
      className={
        job.priority && !closed
          ? "kuct-card-hover relative flex flex-col rounded-2xl border-2 border-rose-400/70 bg-gradient-to-br from-[rgba(80,12,32,0.82)] via-[rgba(34,16,40,0.78)] to-[rgba(26,18,42,0.72)] p-6 shadow-[0_14px_36px_rgba(244,63,94,0.18)] backdrop-blur-md hover:border-rose-400/85 hover:shadow-[0_20px_44px_rgba(244,63,94,0.24)]"
          : closed
            ? "relative flex flex-col rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] p-6 opacity-75 backdrop-blur-md"
            : "kuct-card-hover flex flex-col rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] p-6 shadow-[0_10px_30px_rgba(139,92,246,0.12)] backdrop-blur-md"
      }
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        {job.priority && !closed ? (
          <span className="rounded-full bg-rose-500 px-3 py-1 text-white shadow-sm">
            {job.priority}
          </span>
        ) : null}
        {closed ? (
          <span className="rounded-full bg-[var(--kuct-text)]/15 px-3 py-1 text-[var(--kuct-muted)]">
            {hiring.closed}
          </span>
        ) : deadline ? (
          <JobCountdown deadline={deadline} labels={hiring} />
        ) : null}
        <span className="rounded-full bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
          {engagement}
        </span>
        <span className="text-[var(--kuct-muted)]">
          {job.comp ?? defaultComp}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold">{job.title}</h3>
      <p className="mt-2 text-sm text-[var(--kuct-muted)]">
        <BrandText size="xs">{job.summary}</BrandText>
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--kuct-text)]">
        {job.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="kuct-chip rounded-full border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.58)] px-2.5 py-0.5 text-xs text-[var(--kuct-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        disabled={closed}
        className="kuct-btn-primary mt-6 self-start rounded-full px-5 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45"
        onClick={() => {
          if (!closed) onApply(job.id);
        }}
      >
        {closed ? hiring.closed : applyCta}
      </button>
    </Reveal>
  );
}

export function CareersJobs({ onApply }: Props) {
  const { t } = useLocale();
  const c = t.careers;
  const [now, setNow] = useState<Date | null>(null);
  const jobs = useMemo(() => sortJobsByDisplayOrder(c.jobs), [c.jobs]);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const { openJobs, closedJobs } = useMemo(() => {
    const open: Job[] = [];
    const closed: Job[] = [];
    for (const job of jobs) {
      const closedByPolicy = JOB_HIRING[job.id].kind === "closed";
      const accepting = closedByPolicy
        ? false
        : now
          ? isJobAcceptingApplications(job.id, now)
          : true;
      if (accepting) open.push(job);
      else closed.push(job);
    }
    return { openJobs: open, closedJobs: closed };
  }, [jobs, now]);

  return (
    <>
      <section
        id="roles"
        className="scroll-mt-20 border-b border-[var(--kuct-border)] py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.roles.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {c.roles.title}
            </h2>
            <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
              {c.roles.support}
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {openJobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
                closed={false}
                onApply={onApply}
                engagement={c.engagement}
                defaultComp={c.comp}
                applyCta={c.applyCta}
                hiring={c.hiring}
              />
            ))}
          </ul>
        </div>
      </section>

      {closedJobs.length > 0 ? (
        <section
          id="closed-roles"
          className="scroll-mt-20 border-b border-[var(--kuct-border)] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {c.closedRoles.title}
              </h2>
              <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">
                {c.closedRoles.support}
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {closedJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  closed
                  onApply={onApply}
                  engagement={c.engagement}
                  defaultComp={c.comp}
                  applyCta={c.applyCta}
                  hiring={c.hiring}
                />
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
