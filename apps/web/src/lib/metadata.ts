import type { Metadata } from "next";
import { COMPANY, BRAND } from "@amiom/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiom.com";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.name,
      locale: "en_IN",
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo.original}`,
    description: COMPANY.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      addressCountry: COMPANY.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: COMPANY.email,
      contactType: "customer service",
    },
    sameAs: Object.values(COMPANY.social),
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: SITE_URL,
    description: COMPANY.description,
  };
}
