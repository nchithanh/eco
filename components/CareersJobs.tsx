"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
import { absoluteUrl } from "@/lib/seo";
import { acquirePageScroll, releasePageScroll } from "@/lib/scroll-lock";

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

function JobDetailModal({
 job,
 onClose,
 onApply,
 applyCta,
 closeLabel,
 shareLabel,
 shareCopiedLabel,
 engagement,
 defaultComp,
 hiring,
 closed,
}: {
 job: Job;
 onClose: () => void;
 onApply: (role: JobId) => void;
 applyCta: string;
 closeLabel: string;
 shareLabel: string;
 shareCopiedLabel: string;
 engagement: string;
 defaultComp: string;
 hiring: ReturnType<typeof useLocale>["t"]["careers"]["hiring"];
 closed: boolean;
}) {
 const [sharedFeedback, setSharedFeedback] = useState(false);
 const shareUrl = absoluteUrl(`/careers/?job=${job.id}`);

 useEffect(() => {
 const onKey = (event: KeyboardEvent) => {
 if (event.key === "Escape") onClose();
 };
 document.addEventListener("keydown", onKey);
 acquirePageScroll();
 return () => {
 document.removeEventListener("keydown", onKey);
 releasePageScroll();
 };
 }, [onClose]);

 useEffect(() => {
 if (!sharedFeedback) return;
 const id = window.setTimeout(() => setSharedFeedback(false), 2000);
 return () => window.clearTimeout(id);
 }, [sharedFeedback]);

 const copyShareLink = useCallback(async () => {
 try {
 await navigator.clipboard.writeText(shareUrl);
 setSharedFeedback(true);
 } catch {
 try {
 const input = document.createElement("input");
 input.value = shareUrl;
 document.body.appendChild(input);
 input.select();
 document.execCommand("copy");
 document.body.removeChild(input);
 setSharedFeedback(true);
 } catch {
 /* ignore */
 }
 }
 }, [shareUrl]);

 const onShare = useCallback(async () => {
 if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
 try {
 await navigator.share({
 title: job.title,
 text: job.summary,
 url: shareUrl,
 });
 return;
 } catch (err) {
 if (err instanceof DOMException && err.name === "AbortError") return;
 }
 }
 await copyShareLink();
 }, [copyShareLink, job.summary, job.title, shareUrl]);

 const sections = job.detail?.sections;
 const hasSections = Boolean(sections && sections.length > 0);
 const hasBullets = job.bullets.length > 0;

 return (
 <div className="fixed inset-0 z-[150] flex items-end justify-center p-3 sm:items-center sm:p-6">
 <button
 type="button"
 className="absolute inset-0 bg-[#1a1625]/55 backdrop-blur-sm"
 aria-label={closeLabel}
 onClick={onClose}
 />
 <div
 role="dialog"
 aria-modal="true"
 aria-labelledby={`job-detail-${job.id}`}
 className="relative z-10 flex max-h-[min(92svh,56rem)] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_1.5rem_4rem_rgb(0_0_0/0.45)]"
 data-lenis-prevent
 data-lenis-prevent-wheel
 >
 <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[var(--kuct-border)] px-5 py-4 sm:px-6">
 <div className="min-w-0">
 <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
 {job.priority && !closed ? (
 <span className="rounded-[10px] bg-rose-600 px-3 py-1 text-white">
 {job.priority}
 </span>
 ) : null}
 <span className="rounded-[10px] bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
 {engagement}
 </span>
 <span className="text-[var(--kuct-muted)]">
 {job.comp ?? defaultComp}
 </span>
 </div>
 <h2
 id={`job-detail-${job.id}`}
 className="kuct-type-h2 mt-3 font-display text-2xl text-[var(--kuct-text)] sm:text-3xl"
 >
 {job.title}
 </h2>
 </div>
 <button
 type="button"
 className="kuct-btn-ghost shrink-0"
 onClick={onClose}
 >
 {closeLabel}
 </button>
 </div>

 <div
 className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6"
 data-lenis-prevent
 data-lenis-prevent-wheel
 >
 <p className="text-sm leading-[1.7] text-[var(--kuct-muted)] sm:text-base">
 <BrandText size="sm">{job.summary}</BrandText>
 </p>

 {hasSections
 ? sections!.map((section) => (
 <section key={section.title} className="mt-8">
 <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {section.title}
 </h3>
 {section.paragraphs?.map((p) => (
 <p
 key={p}
 className="mt-3 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:text-base"
 >
 {p}
 </p>
 ))}
 {section.bullets && section.bullets.length > 0 ? (
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-text)] sm:text-base">
 {section.bullets.map((b) => (
 <li key={b}>{b}</li>
 ))}
 </ul>
 ) : null}
 </section>
 ))
 : null}

 {!hasSections && hasBullets ? (
 <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-text)] sm:text-base">
 {job.bullets.map((b) => (
 <li key={b}>{b}</li>
 ))}
 </ul>
 ) : null}

 <div className="mt-6 flex flex-wrap gap-2">
 {job.tags.map((tag) => (
 <span
 key={tag}
 className="kuct-chip rounded-[10px] bg-[var(--kuct-panel-2)] px-2.5 py-0.5 text-xs text-[var(--kuct-muted)]"
 >
 {tag}
 </span>
 ))}
 </div>
 </div>

 <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[var(--kuct-border)] px-5 py-4 sm:px-6">
 <button
 type="button"
 className="kuct-btn-ghost"
 onClick={() => void onShare()}
 aria-live="polite"
 >
 {sharedFeedback ? shareCopiedLabel : shareLabel}
 </button>
 <div className="flex flex-wrap items-center justify-end gap-3">
 <button type="button" className="kuct-btn-ghost" onClick={onClose}>
 {closeLabel}
 </button>
 <button
 type="button"
 disabled={closed}
 className="kuct-btn-primary rounded-lg px-5 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45"
 onClick={() => {
 if (closed) return;
 onClose();
 onApply(job.id);
 }}
 >
 {closed ? hiring.closed : applyCta}
 </button>
 </div>
 </div>
 </div>
 </div>
 );
}

function JobCard({
 job,
 index,
 closed,
 onOpen,
 engagement,
 defaultComp,
 viewDetailCta,
 hiring,
}: {
 job: Job;
 index: number;
 closed: boolean;
 onOpen: (job: Job) => void;
 engagement: string;
 defaultComp: string;
 viewDetailCta: string;
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
 : "kuct-card-hover kuct-surface-card flex flex-col p-6"
 }
 >
 <button
 type="button"
 className="flex h-full flex-col text-left"
 onClick={() => onOpen(job)}
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
 <h3 className="mt-4 font-display text-xl font-semibold text-[var(--kuct-text)]">
 {job.title}
 </h3>
 <p className="mt-2 line-clamp-4 flex-1 text-sm text-[var(--kuct-muted)]">
 <BrandText size="xs">{job.summary}</BrandText>
 </p>
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
 <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--kuct-accent)]">
 {viewDetailCta}
 <span aria-hidden>→</span>
 </span>
 </button>
 </Reveal>
 );
}

export function CareersJobs({ onApply }: Props) {
 const { t } = useLocale();
 const c = t.careers;
 const [now, setNow] = useState<Date | null>(null);
 const [detailJob, setDetailJob] = useState<{
 job: Job;
 closed: boolean;
 } | null>(null);
 const jobs = useMemo(() => sortJobsByDisplayOrder(c.jobs), [c.jobs]);

 useEffect(() => {
 setNow(new Date());
 const id = window.setInterval(() => setNow(new Date()), 1000);
 return () => window.clearInterval(id);
 }, []);

 useEffect(() => {
 if (typeof window === "undefined") return;
 const params = new URLSearchParams(window.location.search);
 const jobId = params.get("job");
 if (!jobId) return;
 const job = jobs.find((j) => j.id === jobId);
 if (!job) return;
 const closedByPolicy = JOB_HIRING[job.id].kind === "closed";
 const accepting = closedByPolicy
 ? false
 : isJobAcceptingApplications(job.id, new Date());
 setDetailJob({ job, closed: !accepting });
 window.requestAnimationFrame(() => {
 document.getElementById("roles")?.scrollIntoView({ block: "start" });
 });
 }, [jobs]);

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
 <section id="roles" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-7xl px-6">
 <Reveal>
 <p className="kuct-type-eyebrow">{c.roles.eyebrow}</p>
 <h2 className="kuct-type-h2 mt-3 font-display text-3xl sm:text-4xl">
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
 onOpen={(j) => setDetailJob({ job: j, closed: false })}
 engagement={c.engagement}
 defaultComp={c.comp}
 viewDetailCta={c.viewDetailCta}
 hiring={c.hiring}
 />
 ))}
 </ul>
 </div>
 </section>

 {closedJobs.length > 0 ? (
 <section id="closed-roles" className="scroll-mt-20 py-20 sm:py-24">
 <div className="mx-auto max-w-7xl px-6">
 <Reveal>
 <h2 className="kuct-type-h2 font-display text-3xl sm:text-4xl">
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
 onOpen={(j) => setDetailJob({ job: j, closed: true })}
 engagement={c.engagement}
 defaultComp={c.comp}
 viewDetailCta={c.viewDetailCta}
 hiring={c.hiring}
 />
 ))}
 </ul>
 </div>
 </section>
 ) : null}

 {detailJob ? (
 <JobDetailModal
 job={detailJob.job}
 closed={detailJob.closed}
 onClose={() => setDetailJob(null)}
 onApply={onApply}
 applyCta={c.applyCta}
 closeLabel={c.detailClose}
 shareLabel={c.share}
 shareCopiedLabel={c.shareCopied}
 engagement={c.engagement}
 defaultComp={c.comp}
 hiring={c.hiring}
 />
 ) : null}
 </>
 );
}
