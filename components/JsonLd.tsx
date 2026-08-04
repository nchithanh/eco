import Script from "next/script";

type JsonLdProps = {
 id: string;
 data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * JSON-LD via next/script — avoids React 19 “Encountered a script tag while
 * rendering React component” when a raw <script> is in the component tree.
 */
export function JsonLd({ id, data }: JsonLdProps) {
 return (
 <Script
 id={id}
 type="application/ld+json"
 strategy="afterInteractive"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(data).replace(/</g, "\\u003c"),
 }}
 />
 );
}
