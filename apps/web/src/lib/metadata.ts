import type { Metadata } from "next";
import { COMPANY, BRAND } from "@amiom/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiom.in";

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
    alternateName: COMPANY.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo.original}`,
    description: COMPANY.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function createFinancialServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY.name,
    description: COMPANY.description,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo.original}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Personal Loan",
      "Home Loan",
      "Business Loan",
      "Loan Against Property",
      "Education Loan",
      "Vehicle Loan",
      "Credit Card",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      offerCount: 7,
    },
  };
}

export function createServiceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
