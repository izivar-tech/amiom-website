import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { COMPANY } from "@amiom/constants";
import { GoogleAnalytics } from "@/lib/analytics";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { createOrganizationJsonLd, createWebsiteJsonLd, createFinancialServiceJsonLd } from "@/lib/metadata";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "optional",
});



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiom.in";
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: [
    "personal loan",
    "home loan",
    "business loan",
    "loan against property",
    "education loan",
    "vehicle loan",
    "credit card",
    "DSA",
    "direct selling agent",
    "loan agent",
    "bank loan",
    "NBFC loan",
    "best interest rate",
    "quick loan approval",
    "loan in Tiruvannamalai",
    "loan in Tamil Nadu",
    "loan in Chennai",
    COMPANY.name,
    COMPANY.shortName,
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/logo/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export const viewport: Viewport = {
  themeColor: "#25ab5a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = createOrganizationJsonLd();
  const websiteJsonLd = createWebsiteJsonLd();
  const financialServiceJsonLd = createFinancialServiceJsonLd();

  return (
    <html lang="en" className={sourceSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <CookieConsentBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
