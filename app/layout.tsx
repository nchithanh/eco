import type { Metadata } from "next";
import Script from "next/script";
import { Quicksand, Noto_Sans_JP, Instrument_Serif } from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-quicksand",
  display: "swap",
});

/** JP face — not preloaded; only needed when locale is ja (see CSS below). */
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  weight: ["400", "700"],
  preload: false,
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  preload: false,
  display: "swap",
});

const isGithubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = isGithubPages
  ? "https://dolphin-software.io.vn"
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dolphin Software",
    template: "%s | Dolphin Software",
  },
  description:
    "Dolphin Software — studio làm website & mobile app, tự động hóa quy trình và tích hợp AI. Từ landing đến hệ thống vận hành.",
  keywords: [
    "Dolphin Software",
    "làm website",
    "thiết kế web",
    "mobile app",
    "Next.js",
    "AI agents",
    "Dolphin Care",
    "chuyển đổi AI doanh nghiệp",
    "web studio",
  ],
  authors: [{ name: "Dolphin Software" }],
  creator: "Dolphin Software",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["vi_VN", "en_US"],
    url: "/",
    siteName: "Dolphin Software",
    title: "Dolphin Software",
    description:
      "Studio xây website, mobile app, tự động hóa và AI — Dolphin Software.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Dolphin Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin Software",
    description:
      "Studio xây website, mobile app, tự động hóa và AI — Dolphin Software.",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script
          id="kuct-theme-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("kuct-theme");var ok=["violet","slate"];if(t&&ok.indexOf(t)>=0)document.documentElement.setAttribute("data-theme",t);else document.documentElement.setAttribute("data-theme","violet");}catch(e){document.documentElement.setAttribute("data-theme","violet");}})();`,
          }}
        />
        {/*
          Resolve locale before first paint (stored → navigator → ja) and hide
          SSR chrome until LocaleProvider applies the same locale — prevents ja flash.
        */}
        <Script
          id="kuct-locale-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;try{d.setAttribute("data-locale-pending","");var s=document.createElement("style");s.id="kuct-locale-boot";s.textContent="html[data-locale-pending],html[data-locale-pending] body{visibility:hidden!important}";document.head.appendChild(s);var ok=["vi","en","ja"];var locale=null;try{var stored=localStorage.getItem("kuct-locale");if(stored&&ok.indexOf(stored)>=0)locale=stored;}catch(e){}if(!locale){var langs=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language];for(var i=0;i<langs.length;i++){var p=String(langs[i]||"").toLowerCase().split("-")[0];if(ok.indexOf(p)>=0){locale=p;break;}}}if(!locale)locale="ja";d.lang=locale;d.setAttribute("data-locale",locale);}catch(e){d.lang="ja";d.setAttribute("data-locale","ja");d.removeAttribute("data-locale-pending");var b=document.getElementById("kuct-locale-boot");if(b)b.remove();}})();`,
          }}
        />
      </head>
      <body
        className={`${quicksand.variable} ${notoSansJp.variable} ${instrumentSerif.variable} antialiased`}
      >
        <JsonLd id="site-jsonld" data={[organizationJsonLd(), websiteJsonLd()]} />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
