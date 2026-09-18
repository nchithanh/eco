"use client";

import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import type { AboutTeamMember } from "@/lib/i18n/about-copy";

function TeamAvatar({ member }: { member: AboutTeamMember }) {
  return (
    <div className="kuct-team-avatar-wrap relative shrink-0">
      <div className="kuct-team-avatar relative size-[8.75rem] overflow-hidden rounded-full sm:size-[10.5rem] lg:size-[11.5rem]">
        <LazyImage
          src={assetPath(member.image)}
          alt={`${member.name} — ${member.role}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 168px, 184px"
          watermark={false}
        />
      </div>
    </div>
  );
}

function TeamQuoteCard({
  member,
  index,
  ctaLabel,
}: {
  member: AboutTeamMember;
  index: number;
  ctaLabel: string;
}) {
  const { openQuote } = useQuote();
  const imageFirst = index % 2 === 0;

  return (
    <Reveal delay={Math.min(index * 60, 180)} variant="up">
      <article
        className={`kuct-team-quote-card flex flex-col items-center gap-7 p-6 sm:gap-9 sm:p-8 md:items-center md:gap-10 md:p-9 lg:gap-12 lg:px-11 lg:py-10 ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex shrink-0 items-center justify-center md:w-[32%] lg:w-[30%]">
          <TeamAvatar member={member} />
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col text-center md:text-left">
          <span className="kuct-team-quote-mark select-none" aria-hidden>
            “
          </span>
          <p className="mt-1 text-[0.9375rem] leading-[1.75] text-[var(--kuct-text)] sm:text-base lg:text-[1.0625rem] lg:leading-[1.72]">
            {member.body}
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:mt-7 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="min-w-0 text-center md:text-left">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--kuct-text)] sm:text-xl">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--kuct-muted)] sm:text-[0.9375rem]">
                {member.role}
              </p>
            </div>
            <button
              type="button"
              onClick={openQuote}
              className="kuct-team-quote-cta inline-flex shrink-0 items-center gap-2 rounded-[0.625rem] px-5 py-2.5 text-sm font-semibold text-white transition"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function AboutTeamSection({
  eyebrow,
  title,
  team,
  ctaLabel,
  bannerCaption,
  bannerAlt,
  closing,
}: {
  eyebrow: string;
  title: string;
  team: AboutTeamMember[];
  ctaLabel: string;
  bannerCaption: string;
  bannerAlt: string;
  closing: string;
}) {
  return (
    <section
      id="about-team"
      className="kuct-team-section relative scroll-mt-20 overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-labelledby="about-team-heading"
    >
      <div className="kuct-team-wash pointer-events-none absolute inset-0" aria-hidden />
      <div className="kuct-team-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6">
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

        <Reveal delay={40} variant="up" className="mt-12 sm:mt-14">
          <figure className="kuct-team-banner">
            <div className="kuct-team-banner-frame relative aspect-[16/9] overflow-hidden">
              <LazyImage
                src={assetPath("/about/team-banner.jpg")}
                alt={bannerAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 64rem"
                watermark={false}
              />
            </div>
            <figcaption className="mt-4 text-center font-display text-sm font-medium tracking-tight text-[var(--kuct-muted)] sm:mt-5 sm:text-base">
              {bannerCaption}
            </figcaption>
          </figure>
        </Reveal>

        <ul className="relative mt-10 flex list-none flex-col gap-5 p-0 sm:mt-12 sm:gap-6">
          {team.map((member, index) => (
            <li key={member.id}>
              <TeamQuoteCard
                member={member}
                index={index}
                ctaLabel={ctaLabel}
              />
            </li>
          ))}
        </ul>

        <Reveal delay={80} variant="up" className="mt-10 sm:mt-12">
          <aside className="kuct-team-closing" aria-label={closing}>
            <span className="kuct-team-closing-mark" aria-hidden>
              “
            </span>
            <p className="kuct-team-closing-text">{closing}</p>
            <span className="kuct-team-closing-rule" aria-hidden />
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
