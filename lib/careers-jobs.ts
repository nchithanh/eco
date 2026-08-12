import type { JobId } from "@/lib/careers-schema";

/** Hiring window start (Vietnam time). */
export const HIRING_ANCHOR = new Date("2026-06-24T00:00:00+07:00");

type JobHiringMeta =
  | { kind: "closed" }
  | { kind: "open"; durationDays: number }
  | { kind: "open"; durationDays?: undefined };

/**
 * Only priority open roles: Partner Automation Test + Sales (BD).
 * All other listed roles are closed.
 */
export const JOB_HIRING: Record<JobId, JobHiringMeta> = {
  "partner-automation-test": { kind: "open" },
  sales: { kind: "open" },
  marketing: { kind: "closed" },
  "ai-engineer": { kind: "closed" },
  "intern-fullstack": { kind: "closed" },
  "fresher-tester": { kind: "closed" },
  backend: { kind: "closed" },
  frontend: { kind: "closed" },
  design: { kind: "closed" },
  mobile: { kind: "closed" },
};

/** Display / form order: open & priority first, closed last. */
export const JOB_DISPLAY_ORDER: JobId[] = [
  "partner-automation-test",
  "sales",
  "ai-engineer",
  "intern-fullstack",
  "fresher-tester",
  "backend",
  "frontend",
  "mobile",
  "design",
  "marketing",
];

export function sortJobsByDisplayOrder<T extends { id: JobId }>(jobs: T[]): T[] {
  const rank = new Map(JOB_DISPLAY_ORDER.map((id, index) => [id, index]));
  return [...jobs].sort(
    (a, b) => (rank.get(a.id) ?? 99) - (rank.get(b.id) ?? 99),
  );
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function getJobDeadline(jobId: JobId): Date | null {
  const meta = JOB_HIRING[jobId];
  if (meta.kind !== "open" || meta.durationDays == null) return null;
  return new Date(HIRING_ANCHOR.getTime() + meta.durationDays * MS_PER_DAY);
}

export function isJobAcceptingApplications(
  jobId: JobId,
  now: Date = new Date(),
): boolean {
  const meta = JOB_HIRING[jobId];
  if (meta.kind === "closed") return false;
  const deadline = getJobDeadline(jobId);
  if (!deadline) return true;
  return now.getTime() < deadline.getTime();
}

export type CountdownParts = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

export function getCountdownParts(
  deadline: Date,
  now: Date = new Date(),
): CountdownParts {
  const totalMs = Math.max(0, deadline.getTime() - now.getTime());
  const expired = totalMs <= 0;
  const totalSec = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { totalMs, days, hours, minutes, seconds, expired };
}

export function getOpenJobIds(now: Date = new Date()): JobId[] {
  return (Object.keys(JOB_HIRING) as JobId[]).filter((id) =>
    isJobAcceptingApplications(id, now),
  );
}
