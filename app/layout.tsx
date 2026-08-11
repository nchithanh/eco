import type { Metadata } from "next";
import { Quicksand, Noto_Sans_JP, Instrument_Serif } from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
import { BootScripts } from "@/components/BootScripts";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const quicksand = Quicksand({
 subsets: ["latin", "latin-ext", "vietnamese"],
 variable: "--font-quicksand",
 weight: ["400", "500", "600", "700"],
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
 { url: "/favicon.ico", sizes: "48x48" },
 { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
 { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
 { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
 { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
 { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
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
 <html lang="en" suppressHydrationWarning>
 <body
 className={`${quicksand.variable} ${notoSansJp.variable} ${instrumentSerif.variable} antialiased`}
 >
 <BootScripts />
 <JsonLd id="site-jsonld" data={[organizationJsonLd(), websiteJsonLd()]} />
 <AppProviders>{children}</AppProviders>
 </body>
 </html>
 );
}
