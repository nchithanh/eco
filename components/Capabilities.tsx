"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function OfferIcon({ id }: { id: string }) {
  const cls = "size-12 shrink-0";
  if (id === "website") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.55" />
        <path
          d="M4.5 12h15M12 4c2.2 2.4 3.3 5 3.3 8s-1.1 5.6-3.3 8c-2.2-2.4-3.3-5-3.3-8s1.1-5.6 3.3-8z"
          stroke="currentColor"
          strokeWidth="1.55"
        />
      </svg>
    );
  }
  if (id === "ai") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <path
          d="M12 4.5c2.8 0 5 2.6 5 5.8 0 2.2-1 4-2.5 5.1V17H9.5v-1.6C8 14.3 7 12.5 7 10.3c0-3.2 2.2-5.8 5-5.8z"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 17h5M10.2 19.5h3.6"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M10 10h.01M14 10h.01M10.8 12.5c.7.6 1.7.6 2.4 0"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === "agents") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <rect
          x="6.5"
          y="7"
          width="11"
          height="10"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.55"
        />
        <path
          d="M12 4.5V7M9.5 11.2h.01M14.5 11.2h.01M10 14h4"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M6.5 12H5.2M18.8 12H17.5"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === "crm") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="16" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="12" cy="13.5" r="2.2" stroke="currentColor" strokeWidth="1.55" />
        <path
          d="M4.5 18c.6-1.6 2-2.6 3.8-2.6M19.5 18c-.6-1.6-2-2.6-3.8-2.6M9.2 17c.7-.5 1.7-.8 2.8-.8s2.1.3 2.8.8"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === "automation") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <path
          d="M7.5 8.5A5.5 5.5 0 0117 10.2M16.5 15.5A5.5 5.5 0 017 13.8"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M15.2 7.2l1.8 3-3.2.2M8.8 16.8l-1.8-3 3.2-.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (id === "integrations") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <path
          d="M9.5 8.5H8A2.5 2.5 0 005.5 11v2A2.5 2.5 0 008 15.5h1.5M14.5 8.5H16a2.5 2.5 0 012.5 2.5v2a2.5 2.5 0 01-2.5 2.5h-1.5"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M9.5 12h5"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.55"
      />
      <path
        d="M9.2 10.2l-1.8 1.8 1.8 1.8M14.8 10.2l1.8 1.8-1.8 1.8M11.2 14.5l1.6-5"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 shrink-0" fill="none">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function offerHref(href: string) {
  if (href.startsWith("#")) return href;
  return routePath(href.endsWith("/") ? href : `${href}/`);
}

type OfferCardData = {
  id: string;
  title: string;
  body: string;
  meta: string;
  href: string;
};

function SolutionOfferCard({
  offer,
  delay,
}: {
  offer: OfferCardData;
  delay: number;
}) {
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <article className="h-full">
        <Link
          href={offerHref(offer.href)}
          className="kuct-pastel-card kuct-solution-card group flex h-full flex-col no-underline"
          data-tone="lavender"
        >
          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="kuct-solution-card__icon shrink-0 text-[var(--pastel-ink)]">
                <OfferIcon id={offer.id} />
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[var(--pastel-ink)] uppercase opacity-90">
                  {offer.meta}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold leading-snug text-[var(--kuct-text)] sm:text-lg">
                  {offer.title}
                </h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-snug text-[var(--kuct-muted)]">
              {offer.body}
            </p>
            <span className="mt-3 self-end text-[var(--kuct-accent)]">
              <ArrowIcon />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

/** Solutions (#solutions) — Jasper pastel grid of 7 offers + CTA. */
export function Capabilities() {
  const { t } = useLocale();
  const c = t.capabilities;
  const offers = c.offers;
  const more = c.moreServices ?? [];

  const ctaHref = (c.ctaSecondaryHref ?? "#contact").startsWith("#")
    ? (c.ctaSecondaryHref ?? "#contact")
    : offerHref(c.ctaSecondaryHref!);

  const topRow = offers.slice(0, 4);
  const bottomRow = offers.slice(4);

  return (
    <section
      id="solutions"
      aria-labelledby="home-capabilities-heading"
      className="kuct-capabilities relative scroll-mt-20 py-20 sm:py-24"
    >
      <span id="capabilities" className="sr-only" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal variant="title" className="mx-auto max-w-3xl text-center">
          <p className="kuct-section-eyebrow">{c.eyebrow}</p>
          <h2
            id="home-capabilities-heading"
            className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{c.title}</AccentText>
          </h2>
          <p className="mx-auto mt-4 max-w-[64ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {c.support}
          </p>
        </Reveal>

        {offers.length > 0 ? (
          <div className="mt-12 space-y-4">
            <ul className="kuct-solutions-grid grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {topRow.map((offer, i) => (
                <SolutionOfferCard
                  key={offer.id}
                  offer={offer}
                  delay={i * 30}
                />
              ))}
            </ul>

            {bottomRow.length > 0 ? (
              <ul className="kuct-solutions-grid mx-auto grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[75%]">
                {bottomRow.map((offer, i) => (
                  <SolutionOfferCard
                    key={offer.id}
                    offer={offer}
                    delay={(i + 4) * 30}
                  />
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        <Reveal delay={120} className="mt-10 flex flex-col items-center gap-5 text-center sm:mt-12">
          <a
            href={ctaHref}
            className="kuct-btn-primary inline-flex min-w-[12rem] items-center justify-center rounded-[10px] px-6 py-3.5 text-sm font-semibold no-underline"
          >
            {c.ctaPrimary}
          </a>
          {more.length > 0 ? (
            <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-1 gap-y-2 p-0 text-sm font-semibold text-[var(--kuct-accent)]">
              {more.map((item, index) => (
                <li key={item.href} className="inline-flex items-center">
                  {index > 0 ? (
                    <span className="mx-2 text-[var(--kuct-border)]" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={offerHref(item.href)}
                    className="no-underline transition hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
