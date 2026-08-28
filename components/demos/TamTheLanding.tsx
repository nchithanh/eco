"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import { assetPath } from "@/lib/asset";
import {
  tamTheDemoCopy as c,
} from "@/lib/demos/tam-the-copy";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--tt-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--tt-serif",
  display: "swap",
});

type Mood = "day" | "night";

function Media({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={assetPath(src)}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}

export function TamTheLanding() {
  const [mood, setMood] = useState<Mood>("day");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [booked, setBooked] = useState(false);

  const hero = mood === "day" ? c.hero.day : c.hero.night;

  const onReserve = (e: FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const marquee = Array.from({ length: 6 }, () => c.marquee);

  return (
    <div
      className={`tt ${sans.variable} ${display.variable} ${sans.className} tt--${mood}`}
    >
      <p className="tt-bar">
        {c.demoBadge}
        {" · "}
        <Link href={assetPath("/")}>{c.siteLabel}</Link>
        {" · "}
        {c.demoNote}
      </p>

      <header className="tt-head">
        <a href="#top" className="tt-logo">
          {c.brand} <i>{c.brandSub}</i>
        </a>
        <nav aria-label="Primary">
          <a href="#story">{c.nav.story}</a>
          <a href="#day">{c.nav.day}</a>
          <a href="#night">{c.nav.night}</a>
          <a href="#space">{c.nav.space}</a>
          <a href="#visit">{c.nav.visit}</a>
        </nav>
        <a className="tt-head-cta" href="#reserve">
          {c.nav.book} ↗
        </a>
      </header>

      <main id="top">
        <section className="tt-hero" aria-labelledby="tt-hero-title">
          <button
            type="button"
            className={`tt-pane tt-pane--day${mood === "day" ? " is-on" : ""}`}
            onClick={() => setMood("day")}
            aria-pressed={mood === "day"}
            aria-label={c.mood.day}
          >
            <Media
              src={c.hero.dayImage}
              alt={c.hero.dayAlt}
              className="tt-pane__img"
              priority
            />
          </button>
          <button
            type="button"
            className={`tt-pane tt-pane--night${mood === "night" ? " is-on" : ""}`}
            onClick={() => setMood("night")}
            aria-pressed={mood === "night"}
            aria-label={c.mood.night}
          >
            <Media
              src={c.hero.nightImage}
              alt={c.hero.nightAlt}
              className="tt-pane__img"
              priority
            />
          </button>
          <div className="tt-hero__copy">
            <p className="tt-kicker">{hero.eyebrow}</p>
            <h1 id="tt-hero-title">
              <span>Tam</span>
              <em>Thể</em>
            </h1>
            <p className="tt-hero__tag">{hero.tagline}</p>
            <div className="tt-hero__ctas">
              <a className="tt-btn tt-btn--light" href="#reserve">
                {c.hero.ctaPrimary} ↗
              </a>
              <a className="tt-btn tt-btn--ghost" href="#story">
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <p className="tt-hero__foot">
            <span>{c.hero.footLeft}</span>
            <span>{c.hero.footRight}</span>
          </p>
        </section>

        <div className="tt-marquee" aria-hidden>
          <div className="tt-marquee__track">
            {marquee.map((chunk, i) => (
              <span key={i}>{chunk}</span>
            ))}
          </div>
        </div>

        <section
          id="story"
          className="tt-sec tt-sec--ink"
          aria-labelledby="tt-story-title"
        >
          <p className="tt-kicker">{c.story.eyebrow}</p>
          <h2 id="tt-story-title">
            {c.story.title}
            <br />
            <em>{c.story.titleEm}</em>
          </h2>
          <p className="tt-lead">{c.story.lead}</p>
          <ol className="tt-bodies">
            {c.story.bodies.map((item, index) => (
              <li key={item.n}>
                <article className={index % 2 ? "is-flip" : undefined}>
                  <div className="tt-bodies__media">
                    <Media src={item.image} alt={item.alt} />
                  </div>
                  <div className="tt-bodies__copy">
                    <p className="tt-bodies__n">{item.n}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="day"
          className="tt-sec"
          aria-labelledby="tt-day-title"
        >
          <p className="tt-kicker">{c.dayMenu.eyebrow}</p>
          <h2 id="tt-day-title">{c.dayMenu.title}</h2>
          <p className="tt-lead">{c.dayMenu.support}</p>
          <div className="tt-daygrid">
            {c.dayMenu.items.map((item) => (
              <article
                key={item.title}
                className={item.featured ? "is-feature" : undefined}
              >
                <Media src={item.image} alt={item.alt} />
                <p className="tt-note">{item.note}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="night"
          className="tt-sec tt-sec--ink"
          aria-labelledby="tt-night-title"
        >
          <p className="tt-kicker">{c.nightMenu.eyebrow}</p>
          <h2 id="tt-night-title">{c.nightMenu.title}</h2>
          <p className="tt-lead">{c.nightMenu.support}</p>
          <ul className="tt-nightlist">
            {c.nightMenu.items.map((item) => (
              <li key={item.title}>
                <article>
                  <div className="tt-nightlist__media">
                    <Media src={item.image} alt={item.alt} />
                  </div>
                  <p className="tt-nightlist__n">{item.note}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="space"
          className="tt-sec tt-collage-sec"
          aria-labelledby="tt-space-title"
        >
          <p className="tt-kicker">{c.space.eyebrow}</p>
          <h2 id="tt-space-title">
            {c.space.title}
            <br />
            <em>{c.space.titleEm}</em>
          </h2>
          <p className="tt-lead">{c.space.support}</p>
          <div
            className="tt-collage"
            role="region"
            aria-label={c.space.title}
          >
            {c.space.categories.map((cat) => (
              <figure key={cat.id} className="tt-collage__item">
                <Media src={cat.image} alt={cat.alt} />
                <figcaption>
                  <strong>{cat.label}</strong>
                  <span>{cat.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="events"
          className="tt-sec tt-sec--ink tt-events"
          aria-labelledby="tt-events-title"
        >
          <div>
            <p className="tt-kicker">{c.events.eyebrow}</p>
            <h2 id="tt-events-title">
              {c.events.title}
              <br />
              <em>{c.events.titleEm}</em>
            </h2>
            <p className="tt-lead">{c.events.body}</p>
          </div>
          <a className="tt-btn tt-btn--light" href="#reserve">
            {c.events.cta} ↗
          </a>
        </section>

        <section
          id="reserve"
          className="tt-sec"
          aria-labelledby="tt-reserve-title"
        >
          <p className="tt-kicker">{c.reserve.eyebrow}</p>
          <h2 id="tt-reserve-title">
            {c.reserve.title} <em>{c.reserve.titleEm}</em>
          </h2>
          <p className="tt-lead">{c.reserve.support}</p>
          {booked ? (
            <div className="tt-done" role="status">
              <h3>{c.reserve.doneTitle}</h3>
              <p>{c.reserve.doneBody}</p>
              <button
                type="button"
                className="tt-btn tt-btn--ink"
                onClick={() => setBooked(false)}
              >
                {c.reserve.doneAgain}
              </button>
            </div>
          ) : (
            <form className="tt-form" onSubmit={onReserve}>
              <label>
                <span>{c.reserve.fields.date}</span>
                <input type="date" name="date" required />
              </label>
              <label>
                <span>{c.reserve.fields.time}</span>
                <select name="time" required defaultValue={c.reserve.times[2]}>
                  {c.reserve.times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>{c.reserve.fields.guests}</span>
                <select
                  name="guests"
                  required
                  defaultValue={c.reserve.guestOptions[0]}
                >
                  {c.reserve.guestOptions.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>{c.reserve.fields.mood}</span>
                <select
                  name="mood"
                  required
                  defaultValue={c.reserve.moodOptions[0]}
                >
                  {c.reserve.moodOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>{c.reserve.fields.name}</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                <span>{c.reserve.fields.phone}</span>
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label className="tt-form__wide">
                <span>{c.reserve.fields.note}</span>
                <textarea name="note" rows={3} />
              </label>
              <button type="submit" className="tt-btn tt-btn--ink tt-form__wide">
                {c.reserve.cta} ↗
              </button>
            </form>
          )}
        </section>

        <section
          id="visit"
          className="tt-sec tt-visit"
          aria-labelledby="tt-visit-title"
        >
          <p className="tt-kicker">{c.visit.eyebrow}</p>
          <h2 id="tt-visit-title">
            {c.visit.title}
            <br />
            <em>{c.visit.titleEm}</em>
          </h2>
          <p className="tt-lead">{c.visit.address}</p>
          <p>
            <a
              className="tt-map"
              href={c.visit.mapHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.visit.mapLabel} ↗
            </a>
          </p>
          <ul>
            <li>
              <span>{c.visit.hoursTitle}</span>
              <strong>
                {c.visit.hours.map((h) => `${h.label}: ${h.value}`).join(" · ")}
              </strong>
            </li>
            <li>
              <span>{c.visit.phoneLabel}</span>
              <strong>{c.visit.phoneValue}</strong>
            </li>
            <li>
              <span>{c.visit.zaloLabel}</span>
              <a href="#reserve">{c.visit.zaloValue}</a>
            </li>
            <li>
              <span>{c.visit.igLabel}</span>
              <strong>{c.visit.igValue}</strong>
            </li>
          </ul>
          <p className="tt-fine">{c.visit.hoursNote}</p>
        </section>

        <section className="tt-sec tt-sec--ink" aria-labelledby="tt-faq-title">
          <p className="tt-kicker">{c.faq.eyebrow}</p>
          <h2 id="tt-faq-title">{c.faq.title}</h2>
          <div className="tt-faq">
            {c.faq.items.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      {item.q}
                      <b aria-hidden>{open ? "−" : "+"}</b>
                    </button>
                  </h3>
                  {open ? <p>{item.a}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="tt-final" aria-labelledby="tt-final-title">
          <div className="tt-final__bgwrap" aria-hidden>
            <Media
              src={c.hero.nightImage}
              alt=""
              className="tt-final__bg"
            />
          </div>
          <div className="tt-final__shade" aria-hidden />
          <div className="tt-final__copy">
            <h2 id="tt-final-title">
              {c.final.title}
              <br />
              <em>{c.final.titleEm}</em>
            </h2>
            <p>{c.final.support}</p>
            <div className="tt-hero__ctas">
              <a className="tt-btn tt-btn--light" href="#reserve">
                {c.final.ctaPrimary} ↗
              </a>
              <a className="tt-btn tt-btn--ghost" href="#space">
                {c.final.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <p className="tt-disc">{c.disclaimer}</p>
      </main>

      <footer className="tt-foot">
        <span>{c.footer.rights}</span>
        <Link href={assetPath("/")}>{c.footer.by}</Link>
      </footer>

      <nav className="tt-dock" aria-label="Quick actions">
        <a href={c.visit.mapHref} target="_blank" rel="noopener noreferrer">
          {c.mobileBar.map}
        </a>
        <a href="#story">{c.mobileBar.story}</a>
        <a href="#reserve" className="is-on">
          {c.mobileBar.book}
        </a>
      </nav>
    </div>
  );
}
