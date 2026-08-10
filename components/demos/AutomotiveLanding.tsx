"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import {
  automotiveDemoBrand,
  automotiveDemoCopy as c,
} from "@/lib/demos/automotive-copy";

function formatVnd(n: number) {
  return `${Math.round(n).toLocaleString("vi-VN")} ₫`;
}

function estimateMonthly(
  price: number,
  down: number,
  termMonths: number,
  annualRatePct: number,
) {
  const principal = Math.max(price - down, 0);
  if (termMonths <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r <= 0) return principal / termMonths;
  const factor = Math.pow(1 + r, termMonths);
  return (principal * r * factor) / (factor - 1);
}

function SectionHead({
  eyebrow,
  titleId,
  title,
  support,
}: {
  eyebrow: string;
  titleId: string;
  title: string;
  support?: string;
}) {
  return (
    <Reveal>
      <p className="drv-eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="drv-h2">
        {title}
      </h2>
      {support ? <p className="drv-lead">{support}</p> : null}
    </Reveal>
  );
}

export function AutomotiveLanding() {
  const heroRef = useRef<HTMLElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [galleryId, setGalleryId] = useState<string>(c.gallery.categories[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [booked, setBooked] = useState(false);
  const [fin, setFin] = useState({ ...c.financing.defaults });

  const monthly = useMemo(
    () => estimateMonthly(fin.price, fin.down, fin.term, fin.rate),
    [fin],
  );

  const activeGallery =
    c.gallery.categories.find((g) => g.id === galleryId) ??
    c.gallery.categories[0];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    const clamp = (n: number, min: number, max: number) =>
      Math.min(max, Math.max(min, n));

    const update = () => {
      const vh = window.innerHeight || 1;
      const layers = root.querySelectorAll<HTMLElement>("[data-drv-parallax]");
      layers.forEach((el) => {
        const speed = Number(el.dataset.drvParallax) || 0.25;
        const axis = el.dataset.drvAxis || "y";
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const progress = (vh * 0.5 - mid) / vh;
        const travel = clamp(progress * speed * vh, -220, 220);
        const scaleBoost = el.dataset.drvScale === "1"
          ? 1 + Math.abs(progress) * 0.06
          : 1;

        if (axis === "x") {
          el.style.transform = `translate3d(${travel}px, 0, 0)`;
        } else if (axis === "xy") {
          el.style.transform = `translate3d(${travel * 0.35}px, ${travel}px, 0) scale(${scaleBoost})`;
        } else {
          el.style.transform = `translate3d(0, ${travel}px, 0) scale(${scaleBoost})`;
        }
      });

      const hero = heroRef.current;
      if (hero) {
        const hr = hero.getBoundingClientRect();
        const fade = clamp(1 - (-hr.top) / (hr.height * 0.85), 0, 1);
        hero.style.setProperty("--drv-hero-fade", String(fade));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const onBook = (e: FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="drv-demo" ref={rootRef}>
      <p className="drv-demo__bar">
        {c.demoBadge} ·{" "}
        <Link href={assetPath("/")}>Về Dolphin Software</Link>
        {" · "}
        {c.demoNote}
      </p>

      <header className="drv-header">
        <div className="drv-header__inner">
          <a href="#top" className="drv-logo">
            {automotiveDemoBrand}
          </a>
          <nav className="drv-nav" aria-label="Primary">
            <a href="#vehicle">{c.nav.vehicle}</a>
            <a href="#features">{c.nav.features}</a>
            <a href="#gallery">{c.nav.gallery}</a>
            <a href="#pricing">{c.nav.pricing}</a>
            <a href="#financing">{c.nav.financing}</a>
            <a href="#about">{c.nav.about}</a>
            <a href="#reviews">{c.nav.reviews}</a>
            <a href="#contact">{c.nav.contact}</a>
          </nav>
          <a href="#test-drive" className="drv-btn drv-btn--accent">
            {c.nav.book}
          </a>
        </div>
      </header>

      <main id="top">
        <section
          ref={heroRef}
          id="vehicle"
          className="drv-hero"
          aria-labelledby="drv-hero-title"
        >
          <div
            className="drv-hero__visual"
            data-drv-parallax="0.55"
            data-drv-axis="xy"
            data-drv-scale="1"
            aria-hidden
          >
            <img
              src={c.gallery.categories[0].image}
              alt=""
              className="drv-hero__img"
            />
            <div className="drv-hero__veil" />
          </div>
          <div
            className="drv-wrap drv-hero__content"
            data-drv-parallax="-0.18"
          >
            <Reveal variant="title" immediate>
              <p className="drv-eyebrow drv-eyebrow--light">{c.vehicle.variant}</p>
              <h1 id="drv-hero-title" className="drv-h1">
                {c.vehicle.name}
              </h1>
              <p className="drv-hero__tag">{c.vehicle.tagline}</p>
              <p className="drv-hero__price">{c.vehicle.startingPrice}</p>
              <p className="drv-hero__price-note">{c.vehicle.priceNote}</p>
              <div className="drv-hero__ctas">
                <a href="#test-drive" className="drv-btn drv-btn--accent">
                  {c.vehicle.ctaPrimary}
                </a>
                <a href="#pricing" className="drv-btn drv-btn--ghost">
                  {c.vehicle.ctaSecondary}
                </a>
              </div>
            </Reveal>
            <ul className="drv-hero__specs">
              {c.vehicle.heroSpecs.map((s) => (
                <li key={s.label}>
                  <span>{s.label}</span>
                  <strong>{s.value}</strong>
                </li>
              ))}
            </ul>
            <p className="drv-scroll-hint">{c.vehicle.scrollHint}</p>
          </div>
        </section>

        <div className="drv-flow" aria-hidden>
          <div className="drv-flow__track" data-drv-parallax="0.45" data-drv-axis="x">
            {[...c.driveFlow, ...c.driveFlow].map((step, i) => (
              <span key={`${step}-${i}`}>{step}</span>
            ))}
          </div>
        </div>

        <section className="drv-facts" aria-labelledby="drv-facts-title">
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.facts.eyebrow}
              titleId="drv-facts-title"
              title={c.facts.title}
            />
            <div className="drv-facts__strip">
              {c.facts.items.map((item) => (
                <div key={item.label} className="drv-facts__item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <p className="drv-note">{c.facts.footnote}</p>
          </div>
        </section>

        <section
          id="gallery"
          className="drv-section drv-gallery"
          aria-labelledby="drv-gallery-title"
        >
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.gallery.eyebrow}
              titleId="drv-gallery-title"
              title={c.gallery.title}
            />
            <div
              className="drv-gallery__tabs"
              role="tablist"
              aria-label={c.gallery.title}
            >
              {c.gallery.categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={galleryId === cat.id}
                  className={
                    galleryId === cat.id
                      ? "drv-gallery__tab is-active"
                      : "drv-gallery__tab"
                  }
                  onClick={() => setGalleryId(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <figure className="drv-gallery__stage">
              <div
                className="drv-gallery__parallax"
                data-drv-parallax="0.4"
                data-drv-scale="1"
              >
                <img
                  src={activeGallery.image}
                  alt={activeGallery.alt}
                  loading="lazy"
                />
              </div>
              <figcaption>
                <strong>{activeGallery.label}</strong>
                <span>{activeGallery.caption}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="features"
          className="drv-section"
          aria-labelledby="drv-why-title"
        >
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.why.eyebrow}
              titleId="drv-why-title"
              title={c.why.title}
            />
          </div>
          <div className="drv-scenes">
            {c.why.scenes.map((scene, index) => (
              <article
                key={scene.id}
                className={`drv-scene ${index % 2 ? "drv-scene--flip" : ""}`}
              >
                <div className="drv-scene__media">
                  <div
                    className="drv-scene__parallax"
                    data-drv-parallax={index % 2 === 0 ? "0.38" : "-0.28"}
                    data-drv-scale="1"
                  >
                    <img src={scene.image} alt={scene.alt} loading="lazy" />
                  </div>
                </div>
                <Reveal className="drv-scene__copy" delay={index * 40}>
                  <h3>{scene.title}</h3>
                  <p>{scene.body}</p>
                  <p className="drv-scene__spec">{scene.spec}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        <section className="drv-section" aria-labelledby="drv-variants-title">
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.variants.eyebrow}
              titleId="drv-variants-title"
              title={c.variants.title}
              support={c.variants.support}
            />
            <div className="drv-table-wrap">
              <table className="drv-table">
                <thead>
                  <tr>
                    {c.variants.columns.map((col) => (
                      <th key={col} scope="col">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.variants.rows.map((row) => (
                    <tr
                      key={row.name}
                      className={
                        "featured" in row && row.featured ? "is-featured" : undefined
                      }
                    >
                      <th scope="row">{row.name}</th>
                      <td>{row.price}</td>
                      <td>{row.engine}</td>
                      <td>{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="drv-note">{c.variants.footnote}</p>
          </div>
        </section>

        <section
          id="pricing"
          className="drv-section drv-pricing"
          aria-labelledby="drv-pricing-title"
        >
          <div className="drv-wrap drv-pricing__grid">
            <div>
              <SectionHead
                eyebrow={c.pricing.eyebrow}
                titleId="drv-pricing-title"
                title={c.pricing.title}
              />
              <p className="drv-pricing__amount">{c.pricing.vehiclePrice}</p>
              <p className="drv-pricing__label">{c.pricing.vehicleLabel}</p>
              <a href="#contact" className="drv-btn drv-btn--accent">
                {c.pricing.cta}
              </a>
              <p className="drv-note">{c.pricing.footnote}</p>
            </div>
            <ul className="drv-pricing__list">
              {c.pricing.promotions.map((p) => (
                <li key={p.label}>
                  <span>{p.label}</span>
                  <strong>{p.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="financing"
          className="drv-section"
          aria-labelledby="drv-fin-title"
        >
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.financing.eyebrow}
              titleId="drv-fin-title"
              title={c.financing.title}
              support={c.financing.support}
            />
            <div className="drv-fin">
              <div className="drv-fin__fields">
                {(
                  [
                    ["price", c.financing.priceLabel],
                    ["down", c.financing.downLabel],
                    ["term", c.financing.termLabel],
                    ["rate", c.financing.rateLabel],
                  ] as const
                ).map(([key, label]) => (
                  <label key={key} className="drv-field">
                    <span>{label}</span>
                    <input
                      type="number"
                      value={fin[key]}
                      onChange={(e) =>
                        setFin((prev) => ({
                          ...prev,
                          [key]: Number(e.target.value) || 0,
                        }))
                      }
                    />
                  </label>
                ))}
              </div>
              <div className="drv-fin__result">
                <p className="drv-eyebrow">{c.financing.resultLabel}</p>
                <p className="drv-fin__monthly">{formatVnd(monthly)}</p>
                <p className="drv-note">{c.financing.estimateNote}</p>
                <a href="#contact" className="drv-btn drv-btn--ghost">
                  {c.financing.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="drv-section drv-about"
          aria-labelledby="drv-about-title"
        >
          <div className="drv-wrap drv-about__grid">
            <div
              className="drv-about__portrait"
              role="img"
              aria-label={c.salesperson.portraitAlt}
              style={
                {
                  "--drv-portrait": `url(${c.gallery.categories[5].image})`,
                } as CSSProperties
              }
            />
            <div>
              <SectionHead
                eyebrow={c.salesperson.eyebrow}
                titleId="drv-about-title"
                title={c.salesperson.title}
              />
              <h3 className="drv-about__name">{c.salesperson.name}</h3>
              <p className="drv-about__role">{c.salesperson.role}</p>
              <p className="drv-about__exp">{c.salesperson.experience}</p>
              <p className="drv-lead">{c.salesperson.intro}</p>
              <ul className="drv-about__tags">
                {c.salesperson.expertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="drv-about__contact">
                <a href={`tel:${c.salesperson.phone.replace(/\s/g, "")}`}>
                  {c.salesperson.phone}
                </a>
                <a href={`mailto:${c.salesperson.email}`}>{c.salesperson.email}</a>
              </div>
              <a href="#contact" className="drv-btn drv-btn--accent">
                {c.salesperson.cta}
              </a>
              <p className="drv-note">{c.salesperson.footnote}</p>
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className="drv-section"
          aria-labelledby="drv-trust-title"
        >
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.trust.eyebrow}
              titleId="drv-trust-title"
              title={c.trust.title}
              support={c.trust.support}
            />
            <div className="drv-quotes">
              {c.trust.items.map((item) => (
                <figure key={item.name} className="drv-quote">
                  <blockquote>{item.quote}</blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    <span>
                      {item.vehicle} · {item.rating}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="drv-note">{c.trust.footnote}</p>
          </div>
        </section>

        <section
          id="test-drive"
          className="drv-section drv-book"
          aria-labelledby="drv-book-title"
        >
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.testDrive.eyebrow}
              titleId="drv-book-title"
              title={c.testDrive.title}
              support={c.testDrive.support}
            />
            {booked ? (
              <p className="drv-book__success" role="status">
                {c.testDrive.success}
              </p>
            ) : (
              <form className="drv-form" onSubmit={onBook}>
                <label className="drv-field">
                  <span>{c.testDrive.fields.vehicle}</span>
                  <select name="vehicle" required defaultValue={c.testDrive.vehicleOptions[1]}>
                    {c.testDrive.vehicleOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="drv-field">
                  <span>{c.testDrive.fields.date}</span>
                  <input type="date" name="date" required />
                </label>
                <label className="drv-field">
                  <span>{c.testDrive.fields.time}</span>
                  <select name="time" required defaultValue={c.testDrive.times[2]}>
                    {c.testDrive.times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="drv-field">
                  <span>{c.testDrive.fields.location}</span>
                  <select name="location" required defaultValue={c.testDrive.locations[0]}>
                    {c.testDrive.locations.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="drv-field">
                  <span>{c.testDrive.fields.name}</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label className="drv-field">
                  <span>{c.testDrive.fields.phone}</span>
                  <input name="phone" type="tel" required autoComplete="tel" />
                </label>
                <label className="drv-field drv-field--wide">
                  <span>{c.testDrive.fields.email}</span>
                  <input name="email" type="email" autoComplete="email" />
                </label>
                <label className="drv-field drv-field--wide">
                  <span>{c.testDrive.fields.message}</span>
                  <textarea name="message" rows={3} />
                </label>
                <button type="submit" className="drv-btn drv-btn--accent drv-field--wide">
                  {c.testDrive.cta}
                </button>
              </form>
            )}
          </div>
        </section>

        <section
          id="contact"
          className="drv-section"
          aria-labelledby="drv-contact-title"
        >
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.contact.eyebrow}
              titleId="drv-contact-title"
              title={c.contact.title}
            />
            <ul className="drv-contact">
              <li>
                <span>Phone</span>
                <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`}>
                  {c.contact.phone}
                </a>
              </li>
              <li>
                <span>{c.contact.message}</span>
                <a href="#test-drive">Zalo / Message (demo)</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
              </li>
              <li>
                <span>Place</span>
                <strong>{c.contact.place}</strong>
              </li>
              <li>
                <span>Hours</span>
                <strong>{c.contact.hours}</strong>
              </li>
            </ul>
            <p className="drv-note">{c.contact.mapNote}</p>
          </div>
        </section>

        <section className="drv-section" aria-labelledby="drv-faq-title">
          <div className="drv-wrap">
            <SectionHead
              eyebrow={c.faq.eyebrow}
              titleId="drv-faq-title"
              title={c.faq.title}
            />
            <div className="drv-faq">
              {c.faq.items.map((item, index) => {
                const open = openFaq === index;
                return (
                  <div key={item.q} className="drv-faq__item">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? null : index)}
                      >
                        {item.q}
                        <span aria-hidden>{open ? "−" : "+"}</span>
                      </button>
                    </h3>
                    {open ? <p>{item.a}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="drv-final" aria-labelledby="drv-final-title">
          <div
            className="drv-final__parallax"
            data-drv-parallax="0.5"
            data-drv-scale="1"
            aria-hidden
          >
            <img
              src={c.gallery.categories[4].image}
              alt=""
              className="drv-final__bg"
            />
          </div>
          <div className="drv-wrap drv-final__content" data-drv-parallax="-0.12">
            <h2 id="drv-final-title" className="drv-h2 drv-h2--light">
              {c.final.title}
            </h2>
            <p className="drv-lead drv-lead--light">{c.final.support}</p>
            <div className="drv-hero__ctas">
              <a href="#test-drive" className="drv-btn drv-btn--accent">
                {c.final.ctaPrimary}
              </a>
              <a href="#pricing" className="drv-btn drv-btn--ghost-light">
                {c.final.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <p className="drv-disclaimer">{c.disclaimer}</p>
      </main>

      <footer className="drv-footer">
        <span>{c.footer.rights}</span>
        <Link href={assetPath("/")}>{c.footer.by}</Link>
      </footer>

      <nav className="drv-mobile-bar" aria-label="Quick actions">
        <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`}>
          {c.mobileBar.call}
        </a>
        <a href="#contact">{c.mobileBar.message}</a>
        <a href="#test-drive" className="is-accent">
          {c.mobileBar.testDrive}
        </a>
      </nav>
    </div>
  );
}
