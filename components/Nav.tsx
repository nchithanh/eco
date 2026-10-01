"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { BASE_PATH, assetPath } from "@/lib/asset";
import { CONTACTS } from "@/lib/contacts";
import { INDUSTRY_CATALOG } from "@/lib/industries/catalog";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { getIndustryPageCopy } from "@/lib/i18n/industries-copy";

type NavLink = {
  href: string;
  label: string;
};

type MegaId = "products" | "solutions" | "resources" | null;

function normalizePath(path: string) {
  const stripped = path.replace(BASE_PATH, "") || "/";
  const clean = stripped.replace(/\/$/, "") || "/";
  return clean;
}

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Nav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [mega, setMega] = useState<MegaId>(null);
  const [mobileSection, setMobileSection] = useState<MegaId>(null);
  const closeMenuRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverMegaOk = useRef(false);
  const [hash, setHash] = useState("");
  const lastScrollY = useRef(0);
  const productsPanelId = useId();
  const solutionsPanelId = useId();
  const resourcesPanelId = useId();
  const homeHref = pathname === "/" ? "#top" : assetPath("/");
  const current = normalizePath(pathname);
  const contactHref = assetPath("/contact/");
  const pricingHref = assetPath("/chinh-sach-gia-dolphin-2026/");

  const productOverview: NavLink[] = [
    { href: assetPath("/dolphin-care/"), label: t.nav.agentDolphin },
    { href: assetPath("/dolphin-ops/"), label: t.nav.dolphinOps },
    { href: assetPath("/dolphin-intelligence/"), label: t.nav.dolphinIntelligence },
    { href: assetPath("/ai-transform/"), label: t.nav.aiTransform },
  ];

  const productSecondary: NavLink[] = [
    { href: assetPath("/services/web/"), label: t.nav.serviceWeb },
    { href: assetPath("/services/landing/"), label: t.nav.serviceLanding },
    { href: assetPath("/services/mobile/"), label: t.nav.serviceMobile },
    { href: assetPath("/services/software/"), label: t.nav.serviceBackend },
    { href: assetPath("/services/integrations/"), label: t.footer.integrations },
  ];

  const careColumn: NavLink[] = [
    { href: assetPath("/dolphin-care/"), label: t.nav.agentDolphin },
    { href: assetPath("/faq/"), label: "FAQ" },
    { href: contactHref, label: t.nav.contact },
  ];

  const opsColumn: NavLink[] = [
    { href: assetPath("/dolphin-ops/"), label: t.nav.dolphinOps },
    { href: assetPath("/dolphin-intelligence/"), label: t.nav.dolphinIntelligence },
    { href: assetPath("/ai-transform/"), label: t.nav.aiTransform },
  ];

  const webColumn: NavLink[] = [
    { href: assetPath("/services/web/"), label: t.nav.serviceWeb },
    { href: assetPath("/services/landing/"), label: t.nav.serviceLanding },
    { href: assetPath("/services/mobile/"), label: t.nav.serviceMobile },
    { href: assetPath("/services/software/"), label: t.nav.serviceBackend },
    { href: assetPath("/services/design/"), label: t.nav.serviceDesign },
    { href: assetPath("/services/integrations/"), label: t.footer.integrations },
  ];

  const solutionLinks: NavLink[] = [
    { href: assetPath("/industries/"), label: t.nav.allIndustries },
    ...INDUSTRY_CATALOG.filter((item) => item.priority === "p0").map((item) => ({
      href: assetPath(`/industries/${item.slug}/`),
      label: getIndustryPageCopy(item.slug).label,
    })),
    { href: pricingHref, label: t.nav.pricing },
  ];

  const resourceLinks: NavLink[] = [
    { href: assetPath("/news/"), label: t.nav.news },
    { href: assetPath("/faq/"), label: "FAQ" },
    { href: assetPath("/case-studies/"), label: "Case studies" },
    { href: assetPath("/about/"), label: t.nav.about },
    { href: assetPath("/company-profile/"), label: t.nav.companyProfile },
    { href: assetPath("/careers/"), label: t.nav.careers },
  ];

  const allNavLinks = [
    ...productOverview,
    ...productSecondary,
    ...careColumn,
    ...opsColumn,
    ...webColumn,
    ...solutionLinks,
    ...resourceLinks,
    { href: pricingHref, label: t.nav.pricing },
    { href: contactHref, label: t.nav.contact },
  ];

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash.replace(/^#/, ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      if (isMenuOpen || mega || y < 24) {
        setHeaderHidden(false);
      } else if (delta > 8) {
        setHeaderHidden(true);
      } else if (delta < -8) {
        setHeaderHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen, mega]);

  useEffect(() => {
    if (isMenuOpen || mega) setHeaderHidden(false);
  }, [isMenuOpen, mega]);

  useEffect(() => {
    const root = document.documentElement;
    if (isMenuOpen) {
      root.setAttribute("data-mobile-nav-open", "");
    } else {
      root.removeAttribute("data-mobile-nav-open");
    }
    return () => root.removeAttribute("data-mobile-nav-open");
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => {
      if (mq.matches) setIsMenuOpen(false);
      else setMega(null);
    };
    const syncHover = () => {
      hoverMegaOk.current = hoverMq.matches;
    };
    onChange();
    syncHover();
    mq.addEventListener("change", onChange);
    hoverMq.addEventListener("change", syncHover);
    return () => {
      mq.removeEventListener("change", onChange);
      hoverMq.removeEventListener("change", syncHover);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMega(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) setMobileSection("products");
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeMenuRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!mega) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMega(null);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setMega(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [mega]);

  const isPageActive = (href: string) => {
    const [pathPart, hashPart] = href.split("#");
    const path = normalizePath(pathPart || href);
    if (path !== current) return false;
    if (hashPart) return hash === hashPart;
    const hashOwnedBySibling = allNavLinks.some((item) => {
      const [p, h] = item.href.split("#");
      return Boolean(h) && normalizePath(p || item.href) === path && hash === h;
    });
    return !hashOwnedBySibling;
  };

  const isHomeActive = current === "/" && (hash === "" || hash === "top");
  const closeMenu = () => setIsMenuOpen(false);

  const cancelMegaClose = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  };

  const openMega = (id: Exclude<MegaId, null>) => {
    cancelMegaClose();
    setMega(id);
  };

  const scheduleMegaClose = () => {
    cancelMegaClose();
    megaCloseTimer.current = setTimeout(() => setMega(null), 140);
  };

  const toggleMega = (id: Exclude<MegaId, null>) => {
    cancelMegaClose();
    setMega((currentMega) => (currentMega === id ? null : id));
  };

  const onMegaTriggerEnter = (id: Exclude<MegaId, null>) => {
    if (hoverMegaOk.current) openMega(id);
  };

  const topTriggerClass = (id: Exclude<MegaId, null>) =>
    `kuct-nav-trigger inline-flex h-9 shrink-0 items-center rounded-full px-3 text-sm font-medium tracking-[-0.02em] transition ${
      mega === id
        ? "bg-[var(--kuct-surface-muted)] text-[var(--kuct-text)]"
        : "text-[var(--kuct-text)] hover:bg-[var(--kuct-surface-muted)]"
    }`;

  const logoLinkClass =
    "inline-flex h-10 shrink-0 items-center text-[var(--kuct-text)] transition hover:opacity-85";
  const logoActiveWordmark =
    "font-display text-base font-bold leading-none tracking-tight text-[var(--kuct-accent)] sm:text-lg";
  const logoActiveTagline =
    "text-[9px] font-medium tracking-[0.34em] text-[var(--kuct-accent)] uppercase opacity-80 sm:text-[10px]";

  return (
    <>
      <div
        className={`kuct-site-header sticky top-0 z-50 ${
          headerHidden ? "is-hidden" : ""
        }`}
      >
        <header className="border-b border-[var(--kuct-border)] bg-white">
          <nav
            ref={desktopNavRef}
            className="relative mx-auto max-w-7xl px-4 sm:px-6"
            aria-label={t.nav.ariaMain}
            onMouseLeave={() => {
              if (hoverMegaOk.current) scheduleMegaClose();
            }}
            onMouseEnter={cancelMegaClose}
          >
            {/* Desktop — ElevenLabs-style bar + megas */}
            <div className="hidden h-[4.25rem] items-center gap-3 lg:flex xl:gap-5">
              <a
                href={homeHref}
                className={logoLinkClass}
                aria-label="Dolphin Software"
                aria-current={isHomeActive ? "page" : undefined}
              >
                <Logo
                  showWordmark
                  wordmarkClassName={
                    isHomeActive ? logoActiveWordmark : undefined
                  }
                  wordmarkTaglineClassName={
                    isHomeActive ? logoActiveTagline : undefined
                  }
                />
              </a>

              <ul className="m-0 flex min-w-0 flex-1 list-none items-center gap-0.5 p-0 xl:gap-1">
                <li>
                  <button
                    type="button"
                    className={topTriggerClass("products")}
                    aria-expanded={mega === "products"}
                    aria-controls={productsPanelId}
                    onMouseEnter={() => onMegaTriggerEnter("products")}
                    onFocus={() => onMegaTriggerEnter("products")}
                    onClick={() => toggleMega("products")}
                  >
                    {t.nav.products}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={topTriggerClass("solutions")}
                    aria-expanded={mega === "solutions"}
                    aria-controls={solutionsPanelId}
                    onMouseEnter={() => onMegaTriggerEnter("solutions")}
                    onFocus={() => onMegaTriggerEnter("solutions")}
                    onClick={() => toggleMega("solutions")}
                  >
                    {t.nav.solutions}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={topTriggerClass("resources")}
                    aria-expanded={mega === "resources"}
                    aria-controls={resourcesPanelId}
                    onMouseEnter={() => onMegaTriggerEnter("resources")}
                    onFocus={() => onMegaTriggerEnter("resources")}
                    onClick={() => toggleMega("resources")}
                  >
                    {t.nav.resources}
                  </button>
                </li>
                <li>
                  <a
                    href={pricingHref}
                    className="inline-flex h-9 shrink-0 items-center rounded-full px-3 text-sm font-medium tracking-[-0.02em] text-[var(--kuct-text)] transition hover:bg-[var(--kuct-surface-muted)]"
                    aria-current={
                      isPageActive(pricingHref) ? "page" : undefined
                    }
                    onMouseEnter={() => {
                      if (hoverMegaOk.current) scheduleMegaClose();
                    }}
                  >
                    {t.nav.pricing}
                  </a>
                </li>
              </ul>

              <div
                className="flex shrink-0 items-center gap-2 xl:gap-3"
                onMouseEnter={() => {
                  if (hoverMegaOk.current) scheduleMegaClose();
                }}
              >
                <LanguageSwitcher />
                <a
                  href={contactHref}
                  className="kuct-btn-outline inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold"
                >
                  {t.nav.contact}
                </a>
                <a
                  href={CONTACTS.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuct-btn-primary inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold"
                >
                  {t.nav.talk}
                </a>
              </div>
            </div>

            {mega === "products" ? (
              <div
                id={productsPanelId}
                className="kuct-mega absolute left-4 right-4 top-full z-50 pt-2 xl:left-6 xl:right-6"
                onMouseEnter={cancelMegaClose}
              >
                <div className="overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-white shadow-[0_1.25rem_3rem_rgb(26_22_37/0.12)]">
                <div className="grid min-h-[22rem] lg:grid-cols-[15.5rem_minmax(0,1fr)]">
                  <aside className="flex flex-col border-r border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)] p-5">
                    <p className="m-0 text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
                      {t.nav.overview}
                    </p>
                    <ul className="mt-3 m-0 flex list-none flex-col gap-0.5 p-0">
                      {productOverview.map((item) => (
                        <li key={item.href + item.label}>
                          <a
                            href={item.href}
                            className="block rounded-[10px] px-2.5 py-2 text-sm font-semibold text-[var(--kuct-text)] no-underline transition hover:bg-white"
                            onClick={() => setMega(null)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="my-3 border-t border-[var(--kuct-border)]" />
                    <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                      {productSecondary.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="block rounded-[10px] px-2.5 py-1.5 text-sm font-medium text-[var(--kuct-text)] no-underline transition hover:bg-white"
                            onClick={() => setMega(null)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={assetPath("/case-studies/")}
                      className="mt-auto block rounded-[10px] bg-white px-3 py-3 no-underline transition hover:ring-1 hover:ring-[var(--kuct-border)]"
                      onClick={() => setMega(null)}
                    >
                      <p className="m-0 text-sm font-semibold text-[var(--kuct-text)]">
                        {t.nav.featuredTitle}
                      </p>
                      <p className="mt-1 m-0 text-xs leading-relaxed text-[var(--kuct-muted)]">
                        {t.nav.featuredBody}
                      </p>
                    </a>
                  </aside>
                  <div className="grid gap-8 p-6 sm:grid-cols-3">
                    <MegaColumn
                      title={t.nav.groupCare}
                      links={careColumn}
                      onNavigate={() => setMega(null)}
                      isActive={isPageActive}
                    />
                    <MegaColumn
                      title={t.nav.groupOpsAi}
                      links={opsColumn}
                      onNavigate={() => setMega(null)}
                      isActive={isPageActive}
                    />
                    <MegaColumn
                      title={t.nav.groupWeb}
                      links={webColumn}
                      onNavigate={() => setMega(null)}
                      isActive={isPageActive}
                    />
                  </div>
                </div>
                </div>
              </div>
            ) : null}

            {mega === "solutions" ? (
              <div
                id={solutionsPanelId}
                className="kuct-mega absolute left-4 right-4 top-full z-50 max-w-3xl pt-2 xl:left-6"
                onMouseEnter={cancelMegaClose}
              >
                <div className="overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-white p-6 shadow-[0_1.25rem_3rem_rgb(26_22_37/0.12)]">
                <p className="m-0 text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
                  {t.nav.solutions}
                </p>
                <ul className="mt-4 m-0 grid list-none grid-cols-2 gap-1 p-0 sm:grid-cols-3">
                  {solutionLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-[10px] px-3 py-2.5 text-sm font-medium text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
                        aria-current={
                          isPageActive(item.href) ? "page" : undefined
                        }
                        onClick={() => setMega(null)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ) : null}

            {mega === "resources" ? (
              <div
                id={resourcesPanelId}
                className="kuct-mega absolute left-4 right-4 top-full z-50 max-w-sm pt-2 xl:left-6"
                onMouseEnter={cancelMegaClose}
              >
                <div className="overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-white p-4 shadow-[0_1.25rem_3rem_rgb(26_22_37/0.12)]">
                <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                  {resourceLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-[10px] px-3 py-2.5 text-sm font-medium text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
                        aria-current={
                          isPageActive(item.href) ? "page" : undefined
                        }
                        onClick={() => setMega(null)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ) : null}

            {/* Mobile / tablet */}
            <div className="flex h-14 items-center justify-between gap-4 sm:h-[3.75rem] lg:hidden">
              <a
                href={homeHref}
                className={logoLinkClass}
                aria-label="Dolphin Software"
                aria-current={isHomeActive ? "page" : undefined}
              >
                <Logo
                  showWordmark
                  wordmarkClassName={
                    isHomeActive ? logoActiveWordmark : undefined
                  }
                  wordmarkTaglineClassName={
                    isHomeActive ? logoActiveTagline : undefined
                  }
                />
              </a>
              <div className="flex shrink-0 items-center gap-2">
                <LanguageSwitcher />
                <button
                  type="button"
                  className="kuct-mobile-nav__icon grid size-10 place-items-center text-[var(--kuct-text)]"
                  aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                  aria-controls="mobile-nav"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((open) => !open)}
                >
                  <span aria-hidden className="text-lg leading-none">
                    {isMenuOpen ? "×" : "≡"}
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          aria-label={t.nav.ariaMobile}
          className="kuct-mobile-nav fixed inset-0 z-[70] flex h-dvh flex-col lg:hidden"
        >
          <div className="kuct-mobile-nav__bar flex h-14 shrink-0 items-center justify-between gap-4 px-6 sm:h-[3.75rem]">
            <a
              href={homeHref}
              className={logoLinkClass}
              aria-label="Dolphin Software"
              onClick={closeMenu}
            >
              <Logo showWordmark />
            </a>
            <button
              ref={closeMenuRef}
              type="button"
              className="kuct-mobile-nav__icon grid size-10 place-items-center"
              aria-label={t.nav.closeMenu}
              onClick={closeMenu}
            >
              <span aria-hidden className="text-lg leading-none">
                ×
              </span>
            </button>
          </div>

          <div className="mx-auto flex min-h-0 w-full max-w-lg flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-3">
            <MobileAccordion
              title={t.nav.products}
              open={mobileSection === "products"}
              onToggle={() =>
                setMobileSection((s) => (s === "products" ? null : "products"))
              }
            >
              {[...productOverview, ...productSecondary].map((item, index) => (
                <a
                  key={`p-${item.href}-${item.label}`}
                  href={item.href}
                  className="kuct-mobile-nav__link"
                  onClick={closeMenu}
                >
                  <span
                    className="mr-3 text-xs text-[var(--kuct-muted)]"
                    aria-hidden
                  >
                    {padIndex(index)}
                  </span>
                  {item.label}
                </a>
              ))}
            </MobileAccordion>

            <MobileAccordion
              title={t.nav.solutions}
              open={mobileSection === "solutions"}
              onToggle={() =>
                setMobileSection((s) =>
                  s === "solutions" ? null : "solutions",
                )
              }
            >
              {solutionLinks.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="kuct-mobile-nav__link"
                  onClick={closeMenu}
                >
                  <span
                    className="mr-3 text-xs text-[var(--kuct-muted)]"
                    aria-hidden
                  >
                    {padIndex(index)}
                  </span>
                  {item.label}
                </a>
              ))}
            </MobileAccordion>

            <MobileAccordion
              title={t.nav.resources}
              open={mobileSection === "resources"}
              onToggle={() =>
                setMobileSection((s) =>
                  s === "resources" ? null : "resources",
                )
              }
            >
              {resourceLinks.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="kuct-mobile-nav__link"
                  onClick={closeMenu}
                >
                  <span
                    className="mr-3 text-xs text-[var(--kuct-muted)]"
                    aria-hidden
                  >
                    {padIndex(index)}
                  </span>
                  {item.label}
                </a>
              ))}
            </MobileAccordion>

            <a
              href={pricingHref}
              className="kuct-mobile-nav__link mt-2"
              onClick={closeMenu}
            >
              {t.nav.pricing}
            </a>
            <a
              href={contactHref}
              className="kuct-mobile-nav__link"
              onClick={closeMenu}
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="kuct-mobile-nav__foot flex flex-col gap-2">
            <a
              href={CONTACTS.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              onClick={closeMenu}
            >
              {t.nav.talk}
            </a>
            <a
              href={contactHref}
              className="kuct-btn-outline inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              onClick={closeMenu}
            >
              {t.nav.contact}
            </a>
          </div>
        </nav>
      ) : null}
    </>
  );
}

function MegaColumn({
  title,
  links,
  onNavigate,
  isActive,
}: {
  title: string;
  links: NavLink[];
  onNavigate: () => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <div>
      <p className="m-0 text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
        {title}
      </p>
      <ul className="mt-3 m-0 flex list-none flex-col gap-0.5 p-0">
        {links.map((item) => (
          <li key={`${title}-${item.href}-${item.label}`}>
            <a
              href={item.href}
              className="block rounded-[10px] px-2 py-2 text-sm font-medium text-[var(--kuct-text)] no-underline transition hover:bg-[var(--kuct-surface-muted)]"
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-[var(--kuct-border)] py-1">
      <button
        type="button"
        className="flex w-full items-center justify-between px-2 py-3 text-left text-base font-semibold text-[var(--kuct-text)]"
        aria-expanded={open}
        onClick={onToggle}
      >
        {title}
        <span aria-hidden className="text-[var(--kuct-muted)]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? <div className="pb-2">{children}</div> : null}
    </div>
  );
}
