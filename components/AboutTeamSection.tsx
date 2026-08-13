"use client";

import { useEffect, useState } from "react";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import type { AboutTeamMember } from "@/lib/i18n/about-copy";
import { useDesktopMotion } from "@/lib/motion";
import { useInView } from "@/lib/useInView";

function lineupOrder(team: AboutTeamMember[]): AboutTeamMember[] {
  const founder = team.find((member) => member.id === "thanh");
  const rest = team.filter((member) => member.id !== "thanh");
  if (!founder || rest.length !== 2) return team;
  return [rest[0], founder, rest[1]];
}

function TeamPortrait({
  member,
  parallax,
}: {
  member: AboutTeamMember;
  parallax: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.18 });
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
      setOffset(Math.max(-10, Math.min(10, delta * -12)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax, inView, ref]);

  return (
    <div
      ref={ref}
      className={`kuct-team-portrait relative w-full ${inView ? "is-inview" : ""}`}
    >
      <div className="kuct-team-frame relative aspect-[3/4] overflow-hidden bg-[var(--kuct-panel-2)]">
        <div
          className="absolute inset-[-2.5%] will-change-transform"
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
            sizes="(max-width: 768px) 90vw, 32vw"
            watermark={false}
          />
        </div>
      </div>
    </div>
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
  const lineup = lineupOrder(team);

  return (
    <section
      id="about-team"
      className="kuct-team-section relative scroll-mt-20 overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="about-team-heading"
    >
      <div className="kuct-team-wash pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="kuct-team-arch-grid pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal variant="title" className="mx-auto max-w-2xl text-center">
          <p className="kuct-type-eyebrow text-[0.6875rem] sm:text-xs">{eyebrow}</p>
          <h2
            id="about-team-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
          >
            {title}
          </h2>
          <span className="kuct-team-title-rule mx-auto mt-6 block" aria-hidden />
        </Reveal>

        <ul className="kuct-team-lineup relative mt-16 grid list-none grid-cols-1 gap-14 p-0 sm:mt-20 md:grid-cols-3 md:items-start md:gap-6 lg:gap-8">
          {lineup.map((member, index) => (
            <li
              key={member.id}
              className={
                index === 1
                  ? "md:-translate-y-8"
                  : index === 0 || index === 2
                    ? "md:translate-y-6"
                    : undefined
              }
            >
              <article className="text-center">
                <TeamPortrait member={member} parallax={motion} />
                <div className="kuct-team-copy mx-auto mt-6 max-w-[34ch]">
                  <Reveal delay={index * 50} variant="up">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-2xl">
                      {member.name}
                    </h3>
                    <p className="font-serif-accent mt-2 text-[1.05rem] font-normal text-[var(--kuct-accent)]">
                      {member.role}
                    </p>
                  </Reveal>
                  <Reveal delay={index * 50 + 70} variant="up">
                    <p className="mt-4 text-[0.9375rem] leading-[1.7] text-[var(--kuct-muted)]">
                      {member.body}
                    </p>
                  </Reveal>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
