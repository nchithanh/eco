import type { Metadata } from "next";
import { brandLogoSrc } from "@/lib/brand-logo";
import { CONTACTS } from "@/lib/contacts";
import { DEFAULT_LOCALE } from "@/lib/i18n/types";

export const SITE_URL = "https://dolphin-software.io.vn";
export const OG_IMAGE_PATH = "/og-default.png";
export const SEO_LOCALE = DEFAULT_LOCALE;

/** GEO / Organization — VI public identity. */
export const ORG_DESCRIPTION_VI =
  "Dolphin Software là công ty cung cấp giải pháp AI và công nghệ cho doanh nghiệp, tập trung giải quyết các vấn đề vận hành thực tế thông qua website, AI Agent, CRM, automation, tích hợp hệ thống và phần mềm theo yêu cầu.";

export const ORG_DESCRIPTION_EN =
  "Dolphin Software is an AI and technology solutions company helping growing businesses solve operational problems through practical technology. Its solutions include websites, AI agents, CRM, automation, integrations and custom software.";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

/** Shared Next.js Metadata for static export pages. */
export function buildPageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE_PATH,
  imageAlt = "Dolphin Software",
  type = "website",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = path.endsWith("/") || path === "/" ? path : `${path}/`;
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: path === "/" || path === "" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: "Dolphin Software",
      locale: "ja_JP",
      alternateLocale: ["vi_VN", "en_US"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dolphin Software",
    url: SITE_URL,
    logo: absoluteUrl(brandLogoSrc()),
    description: ORG_DESCRIPTION_VI,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACTS.address.streetAddress,
      addressLocality: CONTACTS.address.addressLocality,
      addressRegion: CONTACTS.address.addressRegion,
      addressCountry: CONTACTS.address.addressCountry,
    },
    hasMap: CONTACTS.maps.url,
    sameAs: [
      CONTACTS.social.facebook,
      CONTACTS.social.instagram,
      CONTACTS.social.tiktok,
      CONTACTS.social.linkedin,
      CONTACTS.social.youtube,
      CONTACTS.messenger,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACTS.email,
        availableLanguage: ["Vietnamese", "Japanese", "English"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dolphin Software",
    url: SITE_URL,
    description: ORG_DESCRIPTION_VI,
    publisher: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
    },
    inLanguage: ["ja", "vi", "en"],
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  const path = input.path.endsWith("/") ? input.path : `${input.path}/`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    url: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(brandLogoSrc()),
      },
    },
    ...(input.image
      ? { image: absoluteUrl(input.image) }
      : {}),
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function personJsonLd(input: {
  name: string;
  jobTitle: string;
  description: string;
  imagePath?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    worksFor: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
    },
    ...(input.imagePath
      ? { image: absoluteUrl(input.imagePath) }
      : {}),
  };
}

export function jobPostingJsonLd(input: {
  title: string;
  description: string;
  path?: string;
  employmentType?: string;
  datePosted?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: input.title,
    description: input.description,
    datePosted: input.datePosted ?? "2026-08-03",
    employmentType: input.employmentType ?? "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "Dolphin Software",
      sameAs: SITE_URL,
      logo: absoluteUrl(brandLogoSrc()),
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "VN",
    },
    url: absoluteUrl(input.path ?? "/careers/"),
  };
}
