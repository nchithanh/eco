"use client";

import { useEffect, useRef, useState } from "react";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import type { AboutTeamMember } from "@/lib/i18n/about-copy";
import { useDesktopMotion } from "@/lib/motion";
import { useInView } from "@/lib/useInView";

function formatTagLines(tags: string[], perLine = 4): string[] {
  const lines: string[] = [];
  for (let i = 0; i < tags.length; i += perLine) {
    lines.push(tags.slice(i, i + perLine).join(" · "));
  }
  return lines;
}

function TeamPortrait({
  member,
  parallax,
}: {
  member: AboutTeamMember;
  parallax: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.18 });
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!parallax || !inView) {
      setOffset(0);
      return;
    }

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      const viewMid = window.innerHeight / 2;
      const delta = (mid - viewMid) / window.innerHeight;
      setOffset(Math.max(-16, Math.min(16, delta * -18)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax, inView, ref]);

  return (
    <div
      ref={ref}
      className={`kuct-team-portrait relative w-full max-w-md lg:max-w-none ${inView ? "is-inview" : ""}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--kuct-panel-2)]">
        <div
          ref={imgWrapRef}
          className="absolute inset-[-3%] will-change-transform"
          style={
            parallax
              ? { transform: `translate3d(0, ${offset}px, 0)` }
              : undefined
          }
        >
          <LazyImage
            src={assetPath(member.image)}
            alt={`${member.name} — ${member.role}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 42vw"
            watermark={false}
          />
        </div>
      </div>
    </div>
  );
}

function TeamCopy({
  member,
  delay = 0,
}: {
  member: AboutTeamMember;
  delay?: number;
}) {
  const lines = formatTagLines(member.tags);

  return (
    <div className="kuct-team-copy min-w-0">
      <Reveal delay={delay} variant="up">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-medium tracking-wide text-[var(--kuct-muted)] sm:text-[0.9375rem]">
          {member.role}
        </p>
      </Reveal>
      <Reveal delay={delay + 70} variant="up">
        <p className="mt-6 max-w-[42ch] text-base leading-[1.75] text-[var(--kuct-muted)] sm:text-[1.0625rem]">
          {member.body}
        </p>
      </Reveal>
      <Reveal delay={delay + 140} variant="up">
        <ul className="kuct-team-tags mt-8 list-none space-y-1.5 p-0" aria-label="Skills">
          {lines.map((line) => (
            <li key={line}>
              <span className="kuct-team-tag-line text-sm tracking-[0.02em] text-[var(--kuct-muted)]">
                {line.split(" · ").map((tag, i, arr) => (
                  <span key={tag}>
                    <span className="kuct-team-tag">{tag}</span>
                    {i < arr.length - 1 ? (
                      <span className="text-[var(--kuct-border)]" aria-hidden>
                        {" "}
                        ·{" "}
                      </span>
                    ) : null}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function TeamRule({ flip }: { flip?: boolean }) {
  return (
    <div
      className={`hidden items-center lg:flex ${flip ? "flex-row-reverse" : ""}`}
      aria-hidden
    >
      <span className="h-px w-10 shrink-0 bg-[var(--kuct-border)] sm:w-14" />
      <span className="size-1 shrink-0 rounded-full bg-[var(--kuct-border)]" />
    </div>
  );
}

function TeamProfile({
  member,
  index,
  parallax,
}: {
  member: AboutTeamMember;
  index: number;
  parallax: boolean;
}) {
  const photoLeft = index % 2 === 0;

  return (
    <li className="list-none">
      <article
        className={
          photoLeft
            ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_auto_minmax(0,0.58fr)] lg:gap-8 xl:gap-10"
            : "grid items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_auto_minmax(0,0.42fr)] lg:gap-8 xl:gap-10"
        }
      >
        {photoLeft ? (
          <>
            <TeamPortrait member={member} parallax={parallax} />
            <TeamRule />
            <TeamCopy member={member} delay={40} />
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">
              <TeamCopy member={member} delay={40} />
            </div>
            <div className="order-3 hidden lg:order-2 lg:block">
              <TeamRule flip />
            </div>
            <div className="order-1 lg:order-3">
              <TeamPortrait member={member} parallax={parallax} />
            </div>
          </>
        )}
      </article>
    </li>
  );
}

export function AboutTeamSection({
  eyebrow,
  title,
  team,
}: {
  eyebrow: string;
  title: string;
  team: AboutTeamMember[];
}) {
  const motion = useDesktopMotion();

  return (
    <section
      className="kuct-team-section relative scroll-mt-20 overflow-hidden py-28 sm:py-32"
      aria-labelledby="about-team-heading"
    >
      <div className="kuct-team-arch-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal variant="title" className="max-w-3xl">
          <p className="kuct-type-eyebrow text-[11px] sm:text-xs">{eyebrow}</p>
          <h2
            id="about-team-heading"
            className="mt-5 max-w-[18ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
          >
            {title}
          </h2>
        </Reveal>

        <ul className="mt-16 flex list-none flex-col gap-24 p-0 sm:mt-20 sm:gap-28 lg:gap-36">
          {team.map((member, index) => (
            <TeamProfile
              key={member.id}
              member={member}
              index={index}
              parallax={motion}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
