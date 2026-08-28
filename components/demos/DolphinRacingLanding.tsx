"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Be_Vietnam_Pro, JetBrains_Mono, Oswald } from "next/font/google";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { dolphinRacingCopy as c } from "@/lib/demos/dolphin-racing-copy";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--bnr-sans",
  display: "swap",
});

const display = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--bnr-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--bnr-mono",
  display: "swap",
});

type RackFilter = (typeof c.rack.filters)[number]["id"];

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
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}

function Tach({
  rpm,
  className,
  label,
}: {
  rpm: number;
  className?: string;
  label?: string;
}) {
  const angle = -120 + Math.min(1, Math.max(0, rpm)) * 240;
  return (
    <svg
      className={className}
      viewBox="0 0 120 78"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <path
        className="bnr-tach__arc"
        d="M14 66 A46 46 0 1 1 106 66"
        fill="none"
      />
      <path
        className="bnr-tach__red"
        d="M88 22 A46 46 0 0 1 106 66"
        fill="none"
      />
      <line
        className="bnr-tach__needle"
        x1="60"
        y1="66"
        x2="60"
        y2="24"
        style={{ transform: `rotate(${angle}deg)` }}
      />
      <circle className="bnr-tach__hub" cx="60" cy="66" r="4.5" />
    </svg>
  );
}

function TiltArticle({
  className,
  children,
  reduced,
}: {
  className?: string;
  children: ReactNode;
  reduced: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tilt-x", `${(-py * 10).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 12).toFixed(2)}deg`);
    el.style.setProperty("--shine-x", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--shine-y", `${(py + 0.5) * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </article>
  );
}

export function DolphinRacingLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [rpm, setRpm] = useState(0.08);
  const [launch, setLaunch] = useState(false);
  const [rack, setRack] = useState<RackFilter>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [booked, setBooked] = useState(false);
  const [reduced, setReduced] = useState(false);

  const parts = useMemo(
    () =>
      rack === "all"
        ? c.rack.items
        : c.rack.items.filter((item) => item.cat === rack),
    [rack],
  );

  const displayRpm = launch ? Math.max(rpm, 0.92) : rpm;
  const rpmLabel = `${Math.round(displayRpm * 11000)}`;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const onScroll = useCallback(() => {
    const max = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const p = Math.min(1, Math.max(0, window.scrollY / max));
    setRpm(0.08 + p * 0.82);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = root.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        root.style.setProperty("--spot-x", `${x}%`);
        root.style.setProperty("--spot-y", `${y}%`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, [onScroll, reduced]);

  const onBook = (e: FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const marquee = Array.from({ length: 4 }, () => c.marquee);
  const rpmPct = `${Math.round(displayRpm * 100)}%`;

  return (
    <div
      ref={rootRef}
      className={`bnr ${sans.variable} ${display.variable} ${mono.variable} ${sans.className}${reduced ? " is-reduced" : ""}`}
      style={{ "--rpm": String(displayRpm), "--rpm-pct": rpmPct } as CSSProperties}
    >
      <p className="bnr-bar">
        {c.demoBadge}
        {" · "}
        <Link href={assetPath("/demos/")}>{c.vaultLabel}</Link>
        {" · "}
        {c.demoNote}
      </p>

      <header className="bnr-head">
        <a href="#top" className="bnr-logo">
          {c.brand} <i>{c.brandSub}</i>
        </a>
        <nav aria-label="Primary">
          <a href="#builds">{c.nav.builds}</a>
          <a href="#rack">{c.nav.rack}</a>
          <a href="#pit">{c.nav.pit}</a>
          <a href="#proof">{c.nav.proof}</a>
          <a href="#shop">{c.nav.shop}</a>
        </nav>
        <div className="bnr-head__end">
          <div className="bnr-head__tach" aria-hidden>
            <Tach rpm={displayRpm} className="bnr-tach bnr-tach--mini" />
            <span>{rpmLabel}</span>
          </div>
          <a className="bnr-btn bnr-btn--fire" href="#book">
            {c.nav.book}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="bnr-hero" aria-labelledby="bnr-hero-title">
          <div className="bnr-hero__visual" aria-hidden>
            <Media
              src={c.hero.image}
              alt=""
              className="bnr-hero__img"
              priority
            />
            <div className="bnr-hero__speed" />
            <div className="bnr-hero__scan" />
            <div className="bnr-hero__veil" />
          </div>
          <div className="bnr-hero__copy">
            <p className="bnr-kicker">{c.hero.eyebrow}</p>
            <h1 id="bnr-hero-title">
              <span>{c.hero.title}</span>
              <em>{c.hero.titleEm}</em>
            </h1>
            <p className="bnr-hero__tag">{c.hero.tagline}</p>
            <p className="bnr-hero__support">{c.hero.support}</p>
            <div className="bnr-hero__ctas">
              <a
                className="bnr-btn bnr-btn--fire bnr-btn--launch"
                href="#book"
                onMouseEnter={() => setLaunch(true)}
                onMouseLeave={() => setLaunch(false)}
                onFocus={() => setLaunch(true)}
                onBlur={() => setLaunch(false)}
              >
                <Tach rpm={displayRpm} className="bnr-tach bnr-tach--btn" />
                {c.hero.ctaPrimary}
              </a>
              <a className="bnr-btn bnr-btn--ghost" href="#builds">
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="bnr-hero__gauge" aria-hidden>
            <Tach rpm={displayRpm} className="bnr-tach bnr-tach--hero" />
            <p>
              <span>{launch ? c.hero.rpmRed : c.hero.rpmIdle}</span>
              <strong>{rpmLabel}</strong>
            </p>
          </div>
          <p className="bnr-hero__foot">
            <span>{c.hero.footLeft}</span>
            <span>{c.hero.footRight}</span>
          </p>
        </section>

        <div className="bnr-marquee" aria-hidden>
          <div className="bnr-marquee__track">
            {marquee.map((chunk, i) => (
              <span key={i}>{chunk}</span>
            ))}
          </div>
        </div>

        <section
          id="story"
          className="bnr-sec"
          aria-labelledby="bnr-story-title"
        >
          <Reveal>
            <p className="bnr-kicker">{c.story.eyebrow}</p>
            <h2 id="bnr-story-title">
              {c.story.title}
              <em>{c.story.titleEm}</em>
            </h2>
            <p className="bnr-lead">{c.story.lead}</p>
          </Reveal>
          <ul className="bnr-stats">
            {c.story.stats.map((item) => (
              <li key={item.k}>
                <span>{item.k}</span>
                <strong>{item.v}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="builds"
          className="bnr-sec bnr-builds"
          aria-labelledby="bnr-builds-title"
        >
          <Reveal>
            <p className="bnr-kicker">{c.builds.eyebrow}</p>
            <h2 id="bnr-builds-title">{c.builds.title}</h2>
            <p className="bnr-lead">{c.builds.support}</p>
          </Reveal>
          <div
            className="bnr-grid"
            role="region"
            aria-roledescription="carousel"
            aria-label={c.builds.title}
          >
            {c.builds.items.map((item, index) => (
              <TiltArticle
                key={item.id}
                reduced={reduced}
                className={`bnr-card bnr-card--${item.tone}`}
              >
                <a href="#book">
                  <div className="bnr-card__media">
                    <Media src={item.image} alt={item.alt} />
                    <span className="bnr-card__n">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="bnr-card__bike">{item.bike}</p>
                  <h3>{item.name}</h3>
                </a>
              </TiltArticle>
            ))}
          </div>
          <p className="bnr-hint">{c.builds.hint}</p>
        </section>

        <section
          id="rack"
          className="bnr-sec bnr-rack"
          aria-labelledby="bnr-rack-title"
        >
          <Reveal>
            <p className="bnr-kicker">{c.rack.eyebrow}</p>
            <h2 id="bnr-rack-title">{c.rack.title}</h2>
            <p className="bnr-lead">{c.rack.support}</p>
          </Reveal>
          <div
            className="bnr-filters"
            role="tablist"
            aria-label={c.rack.title}
          >
            {c.rack.filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={rack === f.id}
                className={rack === f.id ? "is-on" : undefined}
                onClick={() => setRack(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <ul className="bnr-parts">
            {parts.map((item) => (
              <li key={item.name}>
                <article>
                  <div className="bnr-parts__media">
                    <Media src={item.image} alt={item.alt} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    {"note" in item && item.note ? (
                      <p className="bnr-parts__note">{item.note}</p>
                    ) : null}
                    <p className="bnr-parts__price">{item.price}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section id="pit" className="bnr-sec" aria-labelledby="bnr-pit-title">
          <Reveal>
            <p className="bnr-kicker">{c.pit.eyebrow}</p>
            <h2 id="bnr-pit-title">{c.pit.title}</h2>
          </Reveal>
          <ol className="bnr-steps">
            {c.pit.steps.map((step) => (
              <li key={step.n}>
                <article>
                  <p className="bnr-steps__n">{step.n}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="proof"
          className="bnr-sec bnr-proof"
          aria-labelledby="bnr-proof-title"
        >
          <Reveal>
            <p className="bnr-kicker">{c.proof.eyebrow}</p>
            <h2 id="bnr-proof-title">{c.proof.title}</h2>
          </Reveal>
          <ul className="bnr-quotes">
            {c.proof.items.map((item) => (
              <li key={item.name}>
                <article>
                  <p className="bnr-quotes__q">“{item.quote}”</p>
                  <p>
                    <strong>{item.name}</strong>
                    <span>{item.job}</span>
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="book"
          className="bnr-sec bnr-book"
          aria-labelledby="bnr-book-title"
        >
          <Reveal>
            <p className="bnr-kicker">{c.book.eyebrow}</p>
            <h2 id="bnr-book-title">
              {c.book.title} <em>{c.book.titleEm}</em>
            </h2>
            <p className="bnr-lead">{c.book.support}</p>
          </Reveal>
          <div className="bnr-book__actions">
            <a className="bnr-btn bnr-btn--fire" href={c.shop.zaloHref}>
              {c.book.zaloCta}
            </a>
            <a className="bnr-btn bnr-btn--ghost" href="#book">
              {c.book.callCta}
            </a>
          </div>
          {booked ? (
            <div className="bnr-done" role="status">
              <h3>{c.book.doneTitle}</h3>
              <p>{c.book.doneBody}</p>
              <button
                type="button"
                className="bnr-btn bnr-btn--ghost"
                onClick={() => setBooked(false)}
              >
                {c.book.doneAgain}
              </button>
            </div>
          ) : (
            <form className="bnr-form" onSubmit={onBook}>
              <label>
                <span>{c.book.fields.name}</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                <span>{c.book.fields.phone}</span>
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                <span>{c.book.fields.bike}</span>
                <select name="bike" required defaultValue={c.book.bikes[0]}>
                  {c.book.bikes.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>{c.book.fields.need}</span>
                <select name="need" required defaultValue={c.book.needs[0]}>
                  {c.book.needs.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <label className="bnr-form__wide">
                <span>{c.book.fields.note}</span>
                <textarea name="note" rows={3} />
              </label>
              <button
                type="submit"
                className="bnr-btn bnr-btn--fire bnr-form__wide"
              >
                {c.book.cta}
              </button>
            </form>
          )}
        </section>

        <section id="shop" className="bnr-sec bnr-shop" aria-labelledby="bnr-shop-title">
          <div className="bnr-shop__copy">
            <p className="bnr-kicker">{c.shop.eyebrow}</p>
            <h2 id="bnr-shop-title">
              {c.shop.title}
              <em>{c.shop.titleEm}</em>
            </h2>
            <p className="bnr-lead">{c.shop.address}</p>
            <ul>
              <li>
                <span>{c.shop.hoursTitle}</span>
                <strong>{c.shop.hours}</strong>
              </li>
              <li>
                <span>{c.shop.phoneLabel}</span>
                <strong>{c.shop.phone}</strong>
              </li>
              <li>
                <span>{c.shop.emailLabel}</span>
                <strong>{c.shop.email}</strong>
              </li>
              <li>
                <span>{c.shop.fbLabel}</span>
                <strong>{c.shop.fb}</strong>
              </li>
            </ul>
            <a
              className="bnr-btn bnr-btn--ghost"
              href={c.shop.mapHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.shop.mapLabel}
            </a>
          </div>
          <figure className="bnr-shop__media">
            <Media src={c.shop.image} alt={c.shop.alt} />
          </figure>
        </section>

        <section className="bnr-sec" aria-labelledby="bnr-faq-title">
          <p className="bnr-kicker">{c.faq.eyebrow}</p>
          <h2 id="bnr-faq-title">{c.faq.title}</h2>
          <div className="bnr-faq">
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

        <section className="bnr-final" aria-labelledby="bnr-final-title">
          <div className="bnr-final__bg" aria-hidden>
            <Media src={c.final.image} alt="" />
          </div>
          <div className="bnr-final__copy">
            <h2 id="bnr-final-title">
              {c.final.title}
              <em>{c.final.titleEm}</em>
            </h2>
            <p>{c.final.support}</p>
            <div className="bnr-hero__ctas">
              <a className="bnr-btn bnr-btn--fire" href="#book">
                {c.final.ctaPrimary}
              </a>
              <a className="bnr-btn bnr-btn--ghost" href="#builds">
                {c.final.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <p className="bnr-disc">{c.disclaimer}</p>
      </main>

      <footer className="bnr-foot">
        <span>{c.footer.rights}</span>
        <Link href={assetPath("/")}>{c.footer.by}</Link>
      </footer>

      <nav className="bnr-dock" aria-label="Quick actions">
        <a href={c.shop.mapHref} target="_blank" rel="noopener noreferrer">
          {c.mobileBar.map}
        </a>
        <a href="#book">{c.mobileBar.zalo}</a>
        <a className="is-on" href="#book">
          {c.mobileBar.call}
        </a>
      </nav>
    </div>
  );
}
