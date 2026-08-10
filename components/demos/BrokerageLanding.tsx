"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { Reveal } from "@/components/Reveal";
import { BrokerageMonthlyChart } from "@/components/demos/BrokerageMonthlyChart";
import { assetPath } from "@/lib/asset";
import {
  brokerageDemoBrand,
  brokerageDemoCopy as c,
} from "@/lib/demos/brokerage-copy";

function MarketFlow() {
  return (
    <div className="nva-flow" aria-hidden>
      <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
        <path d="M0 420 C180 380 260 300 420 320 S680 420 820 360 S1080 220 1200 260" />
        <path d="M0 460 C220 440 300 360 480 380 S740 480 900 400 S1100 300 1200 320" />
        <path d="M0 500 C160 490 340 430 520 450 S780 520 960 460 S1120 380 1200 400" />
      </svg>
    </div>
  );
}

function useSectionParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const flowRef = useRef<HTMLDivElement | null>(null);
  const mockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight * 0.45 - (rect.top + rect.height * 0.35)) * 0.12;
      if (flowRef.current) {
        flowRef.current.style.transform = `translate3d(0, ${progress * 1.4}px, 0)`;
      }
      if (mockRef.current) {
        mockRef.current.style.transform = `translate3d(0, ${progress * -0.55}px, 0)`;
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

  return { sectionRef, flowRef, mockRef };
}

function SectionHead({
  eyebrow,
  titleId,
  title,
  support,
  delay = 0,
}: {
  eyebrow: string;
  titleId: string;
  title: string;
  support?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <p className="nva-eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="nva-h2">
        {title}
      </h2>
      {support ? <p className="nva-lead">{support}</p> : null}
    </Reveal>
  );
}

function Stagger({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <Reveal delay={60 + index * 55} className={className}>
      {children}
    </Reveal>
  );
}

export function BrokerageLanding() {
  const { sectionRef, flowRef, mockRef } = useSectionParallax();

  return (
    <div className="nva-demo">
      <p className="nva-demo__bar">
        {c.demoBadge} ·{" "}
        <Link href={assetPath("/")}>Về Dolphin Software</Link>
        {" · "}
        {c.demoNote}
      </p>

      <header className="nva-header">
        <div className="nva-header__inner">
          <a href="#top" className="nva-logo">
            Nguyễn Văn A <span>Invest</span>
          </a>
          <nav className="nva-nav" aria-label="Primary">
            <a href="#products">{c.nav.products}</a>
            <a href="#platform">{c.nav.platform}</a>
            <a href="#performance">Hiệu suất</a>
            <a href="#research">{c.nav.research}</a>
            <a href="#social">Kênh</a>
            <a href="#fees">{c.nav.fees}</a>
            <a href="#security">{c.nav.security}</a>
          </nav>
          <a href="#open" className="nva-btn nva-btn--primary">
            {c.nav.open}
          </a>
        </div>
      </header>

      <main id="top">
        <section
          ref={sectionRef}
          className="nva-section nva-hero"
          aria-labelledby="nva-hero-title"
        >
          <div ref={flowRef} className="nva-parallax-layer">
            <MarketFlow />
          </div>
          <div className="nva-wrap nva-hero__grid">
            <Reveal variant="title" immediate>
              <p className="nva-eyebrow">{c.hero.eyebrow}</p>
              <h1 id="nva-hero-title" className="nva-h1">
                {c.hero.title}
              </h1>
              <p className="nva-lead">{c.hero.support}</p>
              <div className="nva-hero__ctas">
                <a href="#open" className="nva-btn nva-btn--gold">
                  {c.hero.ctaPrimary}
                </a>
                <a href="#platform" className="nva-btn nva-btn--ghost">
                  {c.hero.ctaSecondary}
                </a>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div ref={mockRef} className="nva-parallax-layer">
                <div className="nva-mock" aria-hidden>
                <div className="nva-mock__chrome">
                  <i />
                  <i />
                  <i />
                  <span className="nva-pill">{c.demoData.label}</span>
                </div>
                <div className="nva-mock__grid nva-mock__grid--data">
                  <div className="nva-mock__card nva-mock__card--portfolio">
                    <p className="nva-data__label">{c.demoData.portfolio.name}</p>
                    <p className="nva-data__value">{c.demoData.portfolio.value}</p>
                    <p className="nva-data__pnl nva-tone--up">
                      {c.demoData.portfolio.dayPnl}{" "}
                      <span>{c.demoData.portfolio.dayPct}</span>
                    </p>
                    <div className="nva-data__metrics">
                      <div>
                        <span>Tháng</span>
                        <strong className="nva-tone--up">
                          {c.demoData.portfolio.monthPct}
                        </strong>
                      </div>
                      <div>
                        <span>YTD</span>
                        <strong className="nva-tone--up">
                          {c.demoData.portfolio.ytdPct}
                        </strong>
                      </div>
                      <div>
                        <span>{c.demoData.portfolio.winLabel}</span>
                        <strong className="nva-tone--up">
                          {c.demoData.portfolio.winRate}
                        </strong>
                      </div>
                    </div>
                    <div className="nva-spark nva-spark--live">
                      <span style={{ height: "40%" }} />
                      <span style={{ height: "62%" }} />
                      <span style={{ height: "48%" }} />
                      <span style={{ height: "78%" }} />
                      <span style={{ height: "55%" }} />
                      <span style={{ height: "88%" }} />
                      <span style={{ height: "70%" }} />
                    </div>
                  </div>
                  <div className="nva-mock__card">
                    <p className="nva-data__label">Lịch hôm nay</p>
                    <ul className="nva-schedule">
                      {c.demoData.schedule.map((item) => (
                        <li key={item.time}>
                          <time>{item.time}</time>
                          <div>
                            <strong>{item.title}</strong>
                            <span>{item.meta}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="nva-section nva-trust" aria-labelledby="nva-trust-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.trust.eyebrow}
              titleId="nva-trust-title"
              title={c.trust.title}
              support={c.trust.support}
            />
            <div className="nva-trust__grid">
              {c.trust.items.map((item, index) => (
                <Stagger key={item.label} index={index} className="nva-trust__item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </Stagger>
              ))}
            </div>
            <Reveal delay={280}>
              <p className="nva-note">{c.trust.footnote}</p>
            </Reveal>
          </div>
        </section>

        <BrokerageMonthlyChart />

        <section
          id="products"
          className="nva-section"
          aria-labelledby="nva-products-title"
        >
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.products.eyebrow}
              titleId="nva-products-title"
              title={c.products.title}
              support={c.products.support}
            />
            <div className="nva-cards nva-cards--3">
              {c.products.items.map((item, index) => (
                <Stagger key={item.title} index={index}>
                  <article className="nva-card">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <a href="#open">{c.products.learnMore} →</a>
                  </article>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section className="nva-section" aria-labelledby="nva-exp-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.experience.eyebrow}
              titleId="nva-exp-title"
              title={c.experience.title}
            />
            <div className="nva-steps">
              {c.experience.steps.map((step, index) => (
                <Stagger key={step.title} index={index} className="nva-step">
                  <div className="nva-step__num">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="nva-section nva-platform"
          aria-labelledby="nva-platform-title"
        >
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.platform.eyebrow}
              titleId="nva-platform-title"
              title={c.platform.title}
              support={c.platform.support}
            />
            <div className="nva-platform__mosaic">
              {c.platform.panels.map((panel, index) => (
                <Stagger key={panel.id} index={index} className="nva-device">
                  <div className="nva-device__screen">
                    <div className="nva-device__head">
                      <h3>{panel.title}</h3>
                      <span className="nva-pill">{c.demoData.label}</span>
                    </div>
                    <p>{panel.body}</p>
                    {panel.id === "desktop" ? (
                      <div className="nva-desk">
                        <div className="nva-desk__main">
                          <p className="nva-data__label">
                            {c.demoData.portfolio.name}
                          </p>
                          <p className="nva-data__value nva-data__value--sm">
                            {c.demoData.portfolio.value}
                          </p>
                          <p className="nva-data__pnl nva-tone--up">
                            {c.demoData.portfolio.dayPnl} ·{" "}
                            {c.demoData.portfolio.dayPct}
                          </p>
                          <div className="nva-data__metrics nva-data__metrics--3">
                            <div>
                              <span>Tháng</span>
                              <strong className="nva-tone--up">
                                {c.demoData.portfolio.monthPct}
                              </strong>
                            </div>
                            <div>
                              <span>YTD</span>
                              <strong className="nva-tone--up">
                                {c.demoData.portfolio.ytdPct}
                              </strong>
                            </div>
                            <div>
                              <span>Win rate</span>
                              <strong className="nva-tone--up">
                                {c.demoData.portfolio.winRate}
                              </strong>
                            </div>
                          </div>
                          <div className="nva-spark nva-spark--live nva-spark--desk">
                            <span style={{ height: "36%" }} />
                            <span style={{ height: "58%" }} />
                            <span style={{ height: "44%" }} />
                            <span style={{ height: "72%" }} />
                            <span style={{ height: "51%" }} />
                            <span style={{ height: "84%" }} />
                            <span style={{ height: "63%" }} />
                            <span style={{ height: "76%" }} />
                            <span style={{ height: "90%" }} />
                            <span style={{ height: "68%" }} />
                          </div>
                          <div className="nva-desk__rates">
                            <div>
                              <span>{c.demoData.portfolio.winLabel}</span>
                              <strong className="nva-tone--up">
                                {c.demoData.portfolio.winRate}
                              </strong>
                            </div>
                            <div>
                              <span>{c.demoData.portfolio.lossLabel}</span>
                              <strong className="nva-tone--down">
                                {c.demoData.portfolio.lossRate}
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="nva-desk__side">
                          <p className="nva-data__label">Holdings</p>
                          <ul className="nva-holdings nva-holdings--desk">
                            {c.demoData.holdings.map((row) => (
                              <li key={row.symbol}>
                                <div>
                                  <strong>{row.symbol}</strong>
                                  <span>{row.name}</span>
                                </div>
                                <em className={`nva-tone--${row.tone}`}>
                                  {row.pnl}
                                </em>
                              </li>
                            ))}
                          </ul>
                          <p className="nva-data__label">Lịch sắp tới</p>
                          <ul className="nva-schedule nva-schedule--compact">
                            {c.demoData.schedule.slice(0, 2).map((item) => (
                              <li key={item.time}>
                                <time>{item.time}</time>
                                <div>
                                  <strong>{item.title}</strong>
                                  <span>{item.meta}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null}
                    {panel.id === "mobile" ? (
                      <ul className="nva-schedule nva-schedule--compact">
                        {c.demoData.schedule.map((item) => (
                          <li key={item.time}>
                            <time>{item.time}</time>
                            <div>
                              <strong>{item.title}</strong>
                              <span>{item.meta}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {panel.id === "analytics" ? (
                      <ul className="nva-holdings">
                        {c.demoData.holdings.map((row) => (
                          <li key={row.symbol}>
                            <div>
                              <strong>{row.symbol}</strong>
                              <span>{row.name}</span>
                            </div>
                            <em className={`nva-tone--${row.tone}`}>{row.pnl}</em>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {panel.id === "alerts" ? (
                      <>
                        <ul className="nva-watchlist">
                          {c.demoData.watchlist.map((row) => (
                            <li key={row.symbol}>
                              <strong>{row.symbol}</strong>
                              <span>{row.last}</span>
                              <em className={`nva-tone--${row.tone}`}>{row.chg}</em>
                            </li>
                          ))}
                        </ul>
                        <ul className="nva-alerts">
                          {c.demoData.alerts.map((alert) => (
                            <li
                              key={alert.text}
                              className={`nva-tone--${alert.tone}`}
                            >
                              {alert.text}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section
          id="research"
          className="nva-section"
          aria-labelledby="nva-research-title"
        >
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.research.eyebrow}
              titleId="nva-research-title"
              title={c.research.title}
            />
            <div className="nva-editorial">
              {c.research.items.map((item, index) => (
                <Stagger key={item.title} index={index}>
                  <article>
                    <p className="tag">{item.tag}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section className="nva-section nva-why" aria-labelledby="nva-why-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.why.eyebrow}
              titleId="nva-why-title"
              title={c.why.title}
              support={c.why.support}
            />
            <div className="nva-why__list">
              {c.why.items.map((item, index) => (
                <Stagger key={item.title} index={index} className="nva-why__item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Stagger>
              ))}
            </div>
            <Reveal delay={280}>
              <p className="nva-note">{c.why.footnote}</p>
            </Reveal>
          </div>
        </section>

        <section
          id="social"
          className="nva-section nva-social"
          aria-labelledby="nva-social-title"
        >
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.social.eyebrow}
              titleId="nva-social-title"
              title={c.social.title}
              support={c.social.support}
            />
            <div className="nva-social__grid">
              {c.social.channels.map((channel, index) => (
                <Stagger key={channel.id} index={index}>
                  <a
                    href={channel.href}
                    className="nva-social__card"
                    aria-label={`${channel.label}: ${channel.meta}`}
                  >
                    <span className="nva-social__badge" aria-hidden>
                      {channel.label.slice(0, 2)}
                    </span>
                    <strong>{channel.label}</strong>
                    <span>{channel.meta}</span>
                  </a>
                </Stagger>
              ))}
            </div>
            <Reveal delay={220}>
              <p className="nva-note">{c.social.footnote}</p>
            </Reveal>
          </div>
        </section>

        <section
          id="security"
          className="nva-section nva-security"
          aria-labelledby="nva-security-title"
        >
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.security.eyebrow}
              titleId="nva-security-title"
              title={c.security.title}
              support={c.security.support}
            />
            <div className="nva-security__diagram">
              {c.security.pillars.map((pillar, index) => (
                <Stagger
                  key={pillar.title}
                  index={index}
                  className="nva-security__node"
                >
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section id="fees" className="nva-section" aria-labelledby="nva-fees-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.fees.eyebrow}
              titleId="nva-fees-title"
              title={c.fees.title}
              support={c.fees.support}
            />
            <Reveal delay={100} className="nva-table-wrap">
              <table className="nva-table">
                <thead>
                  <tr>
                    <th scope="col">Hạng mục</th>
                    <th scope="col">Mức phí</th>
                  </tr>
                </thead>
                <tbody>
                  {c.fees.rows.map((row) => (
                    <tr key={row.item}>
                      <td>{row.item}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={180}>
              <p className="nva-note">{c.fees.footnote}</p>
            </Reveal>
          </div>
        </section>

        <section className="nva-section" aria-labelledby="nva-stories-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.stories.eyebrow}
              titleId="nva-stories-title"
              title={c.stories.title}
            />
            <div className="nva-quotes">
              {c.stories.items.map((item, index) => (
                <Stagger key={item.name} index={index}>
                  <figure className="nva-quote">
                    <blockquote>{item.quote}</blockquote>
                    <figcaption>
                      {item.name} — {item.role}
                    </figcaption>
                  </figure>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section className="nva-section" aria-labelledby="nva-edu-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.education.eyebrow}
              titleId="nva-edu-title"
              title={c.education.title}
            />
            <div className="nva-cards nva-cards--3">
              {c.education.items.map((item, index) => (
                <Stagger key={item.title} index={index}>
                  <article className="nva-card">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section className="nva-section" aria-labelledby="nva-ai-title">
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.ai.eyebrow}
              titleId="nva-ai-title"
              title={c.ai.title}
              support={c.ai.support}
            />
            <div className="nva-cards nva-cards--3" style={{ marginTop: "2rem" }}>
              {c.ai.points.map((point, index) => (
                <Stagger key={point} index={index}>
                  <article className="nva-card">
                    <h3>{point}</h3>
                    <p>
                      Tích hợp trong trải nghiệm {brokerageDemoBrand} — hỗ trợ
                      thông tin, không thay thế quyết định đầu tư của bạn.
                    </p>
                  </article>
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        <section
          id="open"
          className="nva-section nva-account"
          aria-labelledby="nva-open-title"
        >
          <div className="nva-wrap">
            <SectionHead
              eyebrow={c.account.eyebrow}
              titleId="nva-open-title"
              title={c.account.title}
            />
            <div className="nva-account__steps">
              {c.account.steps.map((step, index) => (
                <Stagger
                  key={step.title}
                  index={index}
                  className="nva-account__step"
                >
                  <strong>0{index + 1}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Stagger>
              ))}
            </div>
            <Reveal delay={200} className="nva-account__ctas">
              <a href="#open" className="nva-btn nva-btn--gold">
                {c.account.ctaPrimary}
              </a>
              <Link
                href={assetPath("/#contact")}
                className="nva-btn nva-btn--ghost"
              >
                {c.account.ctaSecondary}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="nva-section nva-final" aria-labelledby="nva-final-title">
          <div className="nva-parallax-layer nva-parallax-layer--slow">
            <MarketFlow />
          </div>
          <Reveal className="nva-wrap" style={{ position: "relative" }}>
            <h2 id="nva-final-title" className="nva-h2">
              {c.final.title}
            </h2>
            <p className="nva-lead">{c.final.support}</p>
            <div className="nva-final__cta">
              <a href="#open" className="nva-btn nva-btn--gold">
                {c.final.cta}
              </a>
            </div>
          </Reveal>
        </section>

        <p className="nva-disclaimer">{c.disclaimer}</p>
      </main>

      <footer className="nva-footer">
        <span>{c.footer.rights}</span>
        <Link href={assetPath("/")}>{c.footer.by}</Link>
      </footer>
    </div>
  );
}
