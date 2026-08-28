"use client";

import { useEffect, useState } from "react";
import { BASE_PATH } from "@/lib/asset";

type QuoteFrameProps = {
  html: string;
};

export function QuoteFrame({ html }: QuoteFrameProps) {
  const [srcDoc, setSrcDoc] = useState<string | null>(null);

  useEffect(() => {
    const origin = window.location.origin;
    const root = `${origin}${BASE_PATH}`.replace(/\/$/, "");
    const base = `${root}/`;
    const logo = `${root}/brand/logo-dolphin.webp`;
    const withBase = html.replace("<head>", `<head>\n    <base href="${base}">`);
    setSrcDoc(withBase.replaceAll("/brand/logo-dolphin.webp", logo));
  }, [html]);

  if (!srcDoc) {
    return <div className="quote-crm-frame" aria-busy="true" />;
  }

  return (
    <iframe
      title="Báo giá CRM Booking — lớp dạy nhảy"
      className="quote-crm-frame"
      srcDoc={srcDoc}
    />
  );
}
