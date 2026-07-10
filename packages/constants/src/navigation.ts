export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Corporate Finance", href: "/services/corporate-finance" },
      { label: "Investment Advisory", href: "/services/investment-advisory" },
      { label: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
      { label: "Capital Markets", href: "/services/capital-markets" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;
