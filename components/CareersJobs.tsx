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
 <span className="rounded-[10px] bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
 {labels.countdown}…
 </span>
 );
 }

 if (parts.expired) {
 return (
 <span className="rounded-[10px] bg-[var(--kuct-text)]/10 px-3 py-1 text-[var(--kuct-muted)]">
 {labels.expired}
 </span>
 );
 }

 return (
 <span
 className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-[10px] bg-[var(--kuct-accent)]/10 px-3 py-1 tabular-nums text-[var(--kuct-accent)]"
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
    closed
      ? "relative flex flex-col rounded-xl bg-[var(--kuct-panel)] p-6 opacity-75"
      : "kuct-card-hover flex flex-col rounded-xl bg-[var(--kuct-panel)] p-6 shadow-[0_10px_30px_rgb(26_21_32/0.06)]"
  }
>
 <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
 {job.priority && !closed ? (
 <span className="rounded-[10px] bg-rose-600 px-3 py-1 text-white">
 {job.priority}
 </span>
 ) : null}
 {closed ? (
 <span className="rounded-[10px] bg-[var(--kuct-menu-hover)] px-3 py-1 text-[var(--kuct-muted)]">
 {hiring.closed}
 </span>
 ) : deadline ? (
 <JobCountdown deadline={deadline} labels={hiring} />
 ) : null}
 <span className="rounded-[10px] bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
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
 className="kuct-chip rounded-[10px] bg-[var(--kuct-panel-2)] px-2.5 py-0.5 text-xs text-[var(--kuct-muted)]"
 >
 {tag}
 </span>
 ))}
 </div>
 <button
 type="button"
 disabled={closed}
 className="kuct-btn-primary mt-6 self-start rounded-lg px-4 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45"
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
 className="scroll-mt-20 py-24"
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
 className="scroll-mt-20 py-20 sm:py-24"
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
