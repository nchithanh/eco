"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function OfferIcon({ id }: { id: string }) {
  const cls = "size-5 shrink-0";
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

function CrmMock() {
  return (
    <div className="kuct-sol-mock kuct-sol-mock--crm" aria-hidden>
      <div className="kuct-sol-mock__panel">
        <div className="kuct-sol-mock__row is-head">
          <span />
          <span />
          <span />
        </div>
        <div className="kuct-sol-mock__row">
          <span className="kuct-sol-mock__dot" />
          <span className="kuct-sol-mock__line w-[62%]" />
          <span className="kuct-sol-mock__chip" />
        </div>
        <div className="kuct-sol-mock__row">
          <span className="kuct-sol-mock__dot" />
          <span className="kuct-sol-mock__line w-[74%]" />
          <span className="kuct-sol-mock__chip is-muted" />
        </div>
        <div className="kuct-sol-mock__row">
          <span className="kuct-sol-mock__dot" />
          <span className="kuct-sol-mock__line w-[54%]" />
          <span className="kuct-sol-mock__chip" />
        </div>
        <div className="kuct-sol-mock__input">
          <span className="kuct-sol-mock__line w-[40%]" />
          <span className="kuct-sol-mock__btn" />
        </div>
      </div>
    </div>
  );
}

function CareMock() {
  return (
    <div className="kuct-sol-mock kuct-sol-mock--care" aria-hidden>
      <div className="kuct-sol-mock__bubble">
        <p>
          <span className="kuct-sol-mock__line w-[88%]" />
          <span className="kuct-sol-mock__line w-[72%] mt-2" />
          <span className="kuct-sol-mock__tag">[confirm]</span>
          <span className="kuct-sol-mock__tag">[lead → CRM]</span>
        </p>
      </div>
      <div className="kuct-sol-mock__controls">
        <span className="kuct-sol-mock__select">Zalo</span>
        <span className="kuct-sol-mock__select">Care</span>
        <span className="kuct-sol-mock__play">Play</span>
      </div>
    </div>
  );
}

function FeaturedOfferCard({
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
          className="kuct-sol-feature group flex h-full flex-col no-underline"
        >
          <div className="kuct-sol-feature__stage">
            {offer.id === "crm" ? <CrmMock /> : <CareMock />}
          </div>
          <div className="kuct-sol-feature__copy">
            <p className="text-[11px] font-semibold tracking-[0.04em] text-[var(--kuct-muted)]">
              {offer.meta}
            </p>
            <h3 className="mt-1 font-display text-base font-semibold leading-snug text-[var(--kuct-text)] sm:text-lg">
              {offer.title}
            </h3>
            <p className="mt-1.5 text-sm leading-snug text-[var(--kuct-text)]">
              {offer.body}
            </p>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

function CompactOfferCard({
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
          className="kuct-sol-compact group flex h-full flex-col no-underline"
        >
          <span className="kuct-sol-compact__icon" aria-hidden>
            <OfferIcon id={offer.id} />
          </span>
          <p className="mt-4 text-[11px] font-semibold tracking-[0.04em] text-[var(--kuct-muted)]">
            {offer.meta}
          </p>
          <h3 className="mt-1.5 font-display text-sm font-semibold leading-snug text-[var(--kuct-text)] sm:text-[0.95rem]">
            {offer.title}
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-[var(--kuct-text)]">
            {offer.body}
          </p>
        </Link>
      </article>
    </Reveal>
  );
}

/** Solutions (#solutions) — ElevenCreative-style header + 2 featured + 4 compact + strip. */
export function Capabilities() {
  const { t } = useLocale();
  const c = t.capabilities;
  const offers = c.offers;
  const more = c.moreServices ?? [];

  const byId = Object.fromEntries(offers.map((o) => [o.id, o])) as Record<
    string,
    OfferCardData
  >;
  const featured = [byId.crm, byId.agents].filter(Boolean);
  const compact = [
    byId.automation,
    byId.website,
    byId.ai,
    byId.integrations,
  ].filter(Boolean);
  const custom = byId.custom;

  const learnHref = featured[0]
    ? offerHref(featured[0].href)
    : "#popular-services";
  const ctaHref = (c.ctaSecondaryHref ?? "#contact").startsWith("#")
    ? (c.ctaSecondaryHref ?? "#contact")
    : offerHref(c.ctaSecondaryHref!);

  const stripLinks = [
    ...(custom
      ? [{ label: custom.title, href: custom.href }]
      : []),
    ...more,
  ];

  return (
    <section
      id="solutions"
      aria-labelledby="home-capabilities-heading"
      className="kuct-capabilities relative scroll-mt-20 py-16 sm:py-20 lg:py-24"
    >
      <span id="capabilities" className="sr-only" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal variant="title">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-12">
            <div>
              <p className="kuct-section-eyebrow">{c.eyebrow}</p>
              <h2
                id="home-capabilities-heading"
                className="mt-3 max-w-[18ch] font-display text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:mt-4 sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
              >
                <AccentText>{c.title}</AccentText>
              </h2>
              <a
                href={learnHref}
                className="kuct-btn-primary mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline sm:mt-6"
              >
                {c.learnMore}
              </a>
            </div>
            <p className="max-w-[48ch] text-sm leading-[1.7] text-[var(--kuct-muted)] sm:text-base lg:justify-self-end lg:pb-1">
              {c.support}
            </p>
          </div>
        </Reveal>

        {featured.length > 0 ? (
          <ul className="mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:mt-12 sm:gap-4 lg:grid-cols-2">
            {featured.map((offer, i) => (
              <FeaturedOfferCard
                key={offer.id}
                offer={offer}
                delay={i * 40}
              />
            ))}
          </ul>
        ) : null}

        {compact.length > 0 ? (
          <ul className="mt-3 grid list-none grid-cols-1 gap-3 p-0 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {compact.map((offer, i) => (
              <CompactOfferCard
                key={offer.id}
                offer={offer}
                delay={(i + 2) * 35}
              />
            ))}
          </ul>
        ) : null}

        <Reveal
          delay={160}
          className="kuct-sol-strip mt-4 flex flex-col gap-4 border border-[var(--kuct-border)] bg-[var(--kuct-surface)] px-4 py-4 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5"
        >
          {stripLinks.length > 0 ? (
            <ul className="m-0 flex list-none flex-wrap items-center gap-x-3 gap-y-2 p-0 text-sm text-[var(--kuct-muted)]">
              {stripLinks.map((item, index) => (
                <li key={item.href} className="inline-flex items-center">
                  {index > 0 ? (
                    <span className="mr-3 text-[var(--kuct-border)]" aria-hidden>
                      /
                    </span>
                  ) : null}
                  <Link
                    href={offerHref(item.href)}
                    className="font-medium text-[var(--kuct-text)] no-underline transition hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
          <a
            href={ctaHref}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--kuct-border)] bg-[var(--kuct-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
          >
            {c.ctaPrimary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
