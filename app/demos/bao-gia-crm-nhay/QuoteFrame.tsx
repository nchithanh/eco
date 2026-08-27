"use client";

type QuoteFrameProps = {
  html: string;
};

export function QuoteFrame({ html }: QuoteFrameProps) {
  return (
    <iframe
      title="Báo giá CRM Booking — lớp dạy nhảy"
      className="quote-crm-frame"
      srcDoc={html}
    />
  );
}
