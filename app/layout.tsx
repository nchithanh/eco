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

export const metadata: Metadata = {
  title: "KU THANH — Studio web & app",
  description:
    "KU THANH là studio làm website & mobile app — từ landing đơn giản đến hệ thống phức tạp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${quicksand.variable} ${notoSansJp.variable} ${instrumentSerif.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
