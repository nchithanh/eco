"use client";

import { useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/asset";

type QuoteFrameProps = {
  html: string;
};

export function QuoteFrame({ html }: QuoteFrameProps) {
  const [srcDoc, setSrcDoc] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const origin = window.location.origin;
    const root = `${origin}${BASE_PATH}`.replace(/\/$/, "");
    const base = `${root}/`;
    const logo = `${root}/brand/logo-dolphin.webp`;
    const withBase = html.replace("<head>", `<head>\n    <base href="${base}">`);
    setSrcDoc(withBase.replaceAll("/brand/logo-dolphin.webp", logo));
  }, [html]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !srcDoc) return;

    let observer: ResizeObserver | null = null;

    const fit = () => {
      const doc = iframe.contentDocument;
      if (!doc?.documentElement) return;
      const height = Math.max(
        doc.documentElement.scrollHeight,
        doc.body?.scrollHeight ?? 0,
      );
      iframe.style.height = `${height}px`;
    };

    const onLoad = () => {
      fit();
      const doc = iframe.contentDocument;
      if (!doc?.body || typeof ResizeObserver === "undefined") return;
      observer?.disconnect();
      observer = new ResizeObserver(fit);
      observer.observe(doc.documentElement);
      observer.observe(doc.body);
    };

    iframe.addEventListener("load", onLoad);
    if (iframe.contentDocument?.readyState === "complete") {
      onLoad();
    }

    return () => {
      iframe.removeEventListener("load", onLoad);
      observer?.disconnect();
    };
  }, [srcDoc]);

  if (!srcDoc) {
    return <div className="quote-crm-frame" aria-busy="true" />;
  }

  return (
    <iframe
      ref={iframeRef}
      title="Báo giá CRM"
      className="quote-crm-frame"
      srcDoc={srcDoc}
    />
  );
}
