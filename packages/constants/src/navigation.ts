export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Personal Loans", href: "/services/personal-loans" },
      { label: "Home Loans", href: "/services/home-loans" },
      { label: "Business Loans", href: "/services/business-loans" },
      { label: "Loan Against Property", href: "/services/loan-against-property" },
      { label: "Education Loans", href: "/services/education-loans" },
      { label: "Vehicle Loans", href: "/services/vehicle-loans" },
      { label: "Credit Cards", href: "/services/credit-cards" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_NAV = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partner Banks", href: "/#partner-banks" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Personal Loans", href: "/services/personal-loans" },
    { label: "Home Loans", href: "/services/home-loans" },
    { label: "Business Loans", href: "/services/business-loans" },
    { label: "Loan Against Property", href: "/services/loan-against-property" },
    { label: "Credit Cards", href: "/services/credit-cards" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;
