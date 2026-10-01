import type { Metadata } from "next";
import { brandLogoSrc } from "@/lib/brand-logo";
import { CONTACTS } from "@/lib/contacts";
import { DEFAULT_LOCALE } from "@/lib/i18n/types";

export const SITE_URL = "https://dolphin-software.io.vn";
export const OG_IMAGE_PATH = "/og-default.png";
export const SEO_LOCALE = DEFAULT_LOCALE;

/**
 * GEO / Organization — VI public identity (entity A + commercial CRM motion).
 * SoT: docs/DOLPHIN-ENTITY.md
 */
export const ORG_DESCRIPTION_VI =
  "Dolphin Software là công ty giải pháp công nghệ giúp doanh nghiệp tối ưu vận hành và chăm sóc khách hàng — CRM, AI (Care · Ops), website, automation và tích hợp — để tăng trưởng bền vững. Tại Việt Nam (TP.HCM); doanh nghiệp dịch vụ thuê CRM kèm AI, combo từ 6 tháng có thể được tặng website khi triển khai.";

export const ORG_DESCRIPTION_EN =
  "Dolphin Software is a technology solutions company helping businesses optimize operations and customer care — CRM, AI (Care · Ops), websites, automation, and integrations — for sustainable growth. Based in Ho Chi Minh City, Vietnam; service businesses can rent CRM with AI, and combos from 6 months may include a website when deploying.";

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
      /** SEO/GEO SoT — Vietnam only; EN is UI viewing language, not a crawl locale. */
      locale: "vi_VN",
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
      CONTACTS.social.threads,
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
        availableLanguage: ["Vietnamese", "English"],
        areaServed: "VN",
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
    /** Crawl/SEO language — Vietnamese only. EN is client UI overlay. */
    inLanguage: "vi",
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
    areaServed: {
      "@type": "Country",
      name: "VN",
    },
  };
}

/**
 * SaaS product entity — no AggregateRating / invented prices.
 * Offer URL points at public pricing policy only.
 */
export function softwareApplicationJsonLd(input: {
  name: string;
  description: string;
  path: string;
  /** schema.org applicationCategory */
  applicationCategory?: string;
}) {
  const path = input.path.endsWith("/") ? input.path : `${input.path}/`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(path),
    applicationCategory: input.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "vi",
    provider: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/chinh-sach-gia-dolphin-2026/"),
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
    },
  };
}

/** BreadcrumbList — paths should match visible trail when UI has one. */
export function breadcrumbListJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const path = item.path.endsWith("/") || item.path === "/"
        ? item.path
        : `${item.path}/`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(path),
      };
    }),
  };
}

export function contactPageJsonLd(input?: {
  name?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: input?.name ?? "Liên hệ Dolphin Software",
    description:
      input?.description ??
      "Liên hệ Dolphin Software tại TP.HCM — Zalo, email, hoặc để lại thông tin tư vấn CRM · Care · Ops.",
    url: absoluteUrl("/contact/"),
    isPartOf: {
      "@type": "WebSite",
      name: "Dolphin Software",
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: "Dolphin Software",
      url: SITE_URL,
      email: CONTACTS.email,
      telephone: CONTACTS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACTS.address.streetAddress,
        addressLocality: CONTACTS.address.addressLocality,
        addressRegion: CONTACTS.address.addressRegion,
        addressCountry: CONTACTS.address.addressCountry,
      },
    },
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
