"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { assetPath } from "@/lib/asset";
import { isServiceSlug, type ServiceSlug } from "@/lib/i18n/service-details";
import { isMoreSlug, type MoreSlug } from "@/lib/more-details";
import { isNewsSlug, type NewsSlug } from "@/lib/news-details";
import { isTechSlug, type TechSlug } from "@/lib/tech-stack";
import { isWorkSlug, type WorkSlug } from "@/lib/works-details";
import { PagePreviewModal } from "@/components/PagePreviewModal";

export type PreviewTarget =
  | { kind: "service"; slug: ServiceSlug; href: string }
  | { kind: "tech"; slug: TechSlug; href: string }
  | { kind: "work"; slug: WorkSlug; href: string }
  | { kind: "more"; slug: MoreSlug; href: string }
  | { kind: "custom-agent"; href: string }
  | { kind: "ai-transform"; href: string }
  | { kind: "news"; href: string }
  | { kind: "news-detail"; slug: NewsSlug; href: string };

type PagePreviewContextValue = {
  openHref: (href: string, event?: MouseEvent<HTMLElement>) => void;
  openService: (slug: ServiceSlug) => void;
  openTech: (slug: TechSlug) => void;
  openWork: (slug: WorkSlug) => void;
  openMore: (slug: MoreSlug) => void;
  openNews: () => void;
  openNewsDetail: (slug: NewsSlug) => void;
  close: () => void;
};

const PagePreviewContext = createContext<PagePreviewContextValue | null>(null);

function normalizePath(href: string): string {
  try {
    if (href.startsWith("http")) {
      return new URL(href).pathname.replace(/\/$/, "") || "/";
    }
  } catch {
    // ignore
  }
  const path = href.split("#")[0]?.split("?")[0] ?? href;
  return path.replace(/\/$/, "") || "/";
}

function resolveTarget(href: string): PreviewTarget | null {
  const path = normalizePath(href);
  const base = assetPath("").replace(/\/$/, "");
  const stripped = base && path.startsWith(base) ? path.slice(base.length) || "/" : path;

  if (
    stripped === "/custom-agent" ||
    stripped.endsWith("/custom-agent") ||
    stripped.endsWith("/services/custom-agent")
  ) {
    return { kind: "custom-agent", href: assetPath("/custom-agent/") };
  }

  if (stripped === "/ai-transform" || stripped.endsWith("/ai-transform")) {
    return { kind: "ai-transform", href: assetPath("/ai-transform/") };
  }

  if (stripped === "/news" || stripped.endsWith("/news")) {
    return { kind: "news", href: assetPath("/news/") };
  }

  const newsMatch = stripped.match(/\/news\/([^/]+)$/);
  if (newsMatch && isNewsSlug(newsMatch[1])) {
    return {
      kind: "news-detail",
      slug: newsMatch[1],
      href: assetPath(`/news/${newsMatch[1]}/`),
    };
  }

  const techMatch = stripped.match(/\/tech\/([^/]+)$/);
  if (techMatch && isTechSlug(techMatch[1])) {
    return {
      kind: "tech",
      slug: techMatch[1],
      href: assetPath(`/tech/${techMatch[1]}/`),
    };
  }

  const workMatch = stripped.match(/\/works\/([^/]+)$/);
  if (workMatch && isWorkSlug(workMatch[1])) {
    return {
      kind: "work",
      slug: workMatch[1],
      href: assetPath(`/works/${workMatch[1]}/`),
    };
  }

  const moreMatch = stripped.match(/\/more\/([^/]+)$/);
  if (moreMatch && isMoreSlug(moreMatch[1])) {
    return {
      kind: "more",
      slug: moreMatch[1],
      href: assetPath(`/more/${moreMatch[1]}/`),
    };
  }

  const serviceMatch = stripped.match(/\/services\/([^/]+)$/);
  if (serviceMatch && isServiceSlug(serviceMatch[1])) {
    if (serviceMatch[1] === "custom-agent") {
      return { kind: "custom-agent", href: assetPath("/custom-agent/") };
    }
    return {
      kind: "service",
      slug: serviceMatch[1],
      href: assetPath(`/services/${serviceMatch[1]}/`),
    };
  }

  return null;
}

export function PagePreviewProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<PreviewTarget | null>(null);

  const close = useCallback(() => setTarget(null), []);

  const openService = useCallback((slug: ServiceSlug) => {
    if (slug === "custom-agent") {
      setTarget({ kind: "custom-agent", href: assetPath("/custom-agent/") });
      return;
    }
    setTarget({
      kind: "service",
      slug,
      href: assetPath(`/services/${slug}/`),
    });
  }, []);

  const openTech = useCallback((slug: TechSlug) => {
    setTarget({
      kind: "tech",
      slug,
      href: assetPath(`/tech/${slug}/`),
    });
  }, []);

  const openWork = useCallback((slug: WorkSlug) => {
    setTarget({
      kind: "work",
      slug,
      href: assetPath(`/works/${slug}/`),
    });
  }, []);

  const openMore = useCallback((slug: MoreSlug) => {
    setTarget({
      kind: "more",
      slug,
      href: assetPath(`/more/${slug}/`),
    });
  }, []);

  const openNews = useCallback(() => {
    setTarget({ kind: "news", href: assetPath("/news/") });
  }, []);

  const openNewsDetail = useCallback((slug: NewsSlug) => {
    setTarget({
      kind: "news-detail",
      slug,
      href: assetPath(`/news/${slug}/`),
    });
  }, []);

  const openHref = useCallback(
    (href: string, event?: MouseEvent<HTMLElement>) => {
      const next = resolveTarget(href);
      if (!next) return;
      event?.preventDefault();
      setTarget(next);
    },
    [],
  );

  useEffect(() => {
    if (!target) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [target, close]);

  const value = useMemo(
    () => ({
      openHref,
      openService,
      openTech,
      openWork,
      openMore,
      openNews,
      openNewsDetail,
      close,
    }),
    [
      openHref,
      openService,
      openTech,
      openWork,
      openMore,
      openNews,
      openNewsDetail,
      close,
    ],
  );

  return (
    <PagePreviewContext.Provider value={value}>
      {children}
      <PagePreviewModal target={target} onClose={close} />
    </PagePreviewContext.Provider>
  );
}

export function usePagePreview() {
  const ctx = useContext(PagePreviewContext);
  if (!ctx) {
    throw new Error("usePagePreview must be used within PagePreviewProvider");
  }
  return ctx;
}
