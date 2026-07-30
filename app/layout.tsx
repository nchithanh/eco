import type { Metadata } from "next";
import { Quicksand, Noto_Sans_JP, Instrument_Serif } from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-quicksand",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const isGithubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = isGithubPages
  ? "https://nchithanh.github.io/eco"
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dolphin Kick",
    template: "%s | Dolphin Kick",
  },
  description:
    "Dolphin Kick — studio làm website & mobile app, tự động hóa quy trình và tích hợp AI. Từ landing đến hệ thống vận hành.",
  keywords: [
    "Dolphin Kick",
    "web studio",
    "mobile app",
    "Next.js",
    "AI agents",
    "freelance",
  ],
  authors: [{ name: "Dolphin Kick" }],
  creator: "Dolphin Kick",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["vi_VN", "en_US", "de_DE"],
    url: "/",
    siteName: "Dolphin Kick",
    title: "Dolphin Kick",
    description:
      "Studio xây website, mobile app, tự động hóa và AI — Dolphin Kick.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin Kick",
    description:
      "Studio xây website, mobile app, tự động hóa và AI — Dolphin Kick.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("kuct-theme");var ok=["violet","slate"];if(t&&ok.indexOf(t)>=0)document.documentElement.setAttribute("data-theme",t);else document.documentElement.setAttribute("data-theme","violet");}catch(e){document.documentElement.setAttribute("data-theme","violet");}})();`,
          }}
        />
        {/*
          Resolve locale before first paint (stored → navigator → ja) and hide
          SSR chrome until LocaleProvider applies the same locale — prevents ja flash.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;try{d.setAttribute("data-locale-pending","");var s=document.createElement("style");s.id="kuct-locale-boot";s.textContent="html[data-locale-pending],html[data-locale-pending] body{visibility:hidden!important}";document.head.appendChild(s);var ok=["vi","en","ja","de","zh"];var locale=null;try{var stored=localStorage.getItem("kuct-locale");if(stored&&ok.indexOf(stored)>=0)locale=stored;}catch(e){}if(!locale){var langs=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language];for(var i=0;i<langs.length;i++){var p=String(langs[i]||"").toLowerCase().split("-")[0];if(ok.indexOf(p)>=0){locale=p;break;}}}if(!locale)locale="ja";d.lang=locale;d.setAttribute("data-locale",locale);}catch(e){d.lang="ja";d.setAttribute("data-locale","ja");d.removeAttribute("data-locale-pending");var b=document.getElementById("kuct-locale-boot");if(b)b.remove();}})();`,
          }}
        />
      </head>
      <body
        className={`${quicksand.variable} ${notoSansJp.variable} ${instrumentSerif.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
