"use client";

import { BrandText } from "@/components/BrandName";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { JobId } from "@/lib/careers-schema";

type Props = {
  onApply: (role: JobId) => void;
};

export function CareersJobs({ onApply }: Props) {
  const { t } = useLocale();
  const c = t.careers;

  return (
    <section id="roles" className="scroll-mt-20 border-b border-white/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {c.roles.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {c.roles.title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">{c.roles.support}</p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {c.jobs.map((job) => (
            <li
              key={job.id}
              className={
                job.priority
                  ? "kuct-card-hover relative flex flex-col rounded-2xl border-2 border-rose-400/70 bg-gradient-to-br from-rose-50/90 via-white/70 to-[#faf5ff]/80 p-6 shadow-[0_14px_36px_rgba(244,63,94,0.12)] backdrop-blur-md hover:border-rose-500 hover:shadow-[0_20px_44px_rgba(244,63,94,0.2)]"
                  : "kuct-card-hover flex flex-col rounded-2xl border border-white/60 bg-white/50 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.06)] backdrop-blur-md"
              }
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                {job.priority && (
                  <span className="rounded-full bg-rose-500 px-3 py-1 text-white shadow-sm">
                    {job.priority}
                  </span>
                )}
                <span className="rounded-full bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
                  {c.engagement}
                </span>
                <span className="text-[var(--kuct-muted)]">
                  {job.comp ?? c.comp}
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
                    className="kuct-chip rounded-full border border-white/70 bg-white/40 px-2.5 py-0.5 text-xs text-[var(--kuct-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="kuct-btn-primary mt-6 self-start rounded-full px-5 py-2.5 text-sm font-semibold"
                onClick={() => onApply(job.id)}
              >
                {c.applyCta}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
