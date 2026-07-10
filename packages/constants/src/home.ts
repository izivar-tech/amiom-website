export const HOME_PAGE = {
  hero: {
    headline: "Financial Innovation Through Technology",
    subheadline:
      "Empowering businesses with strategic corporate finance solutions that accelerate growth, unlock value, and build lasting prosperity.",
    cta: {
      primary: { label: "Explore Our Services", href: "/services" },
      secondary: { label: "Get in Touch", href: "/contact" },
    },
  },
  services: {
    sectionTitle: "Our Services",
    sectionSubtitle: "Comprehensive financial solutions tailored to your business needs.",
    items: [
      {
        title: "Corporate Finance",
        description:
          "End-to-end corporate finance advisory services including capital structuring, financial planning, and strategic consulting.",
        icon: "building",
        href: "/services/corporate-finance",
      },
      {
        title: "Investment Advisory",
        description:
          "Expert investment advisory services to help you make informed decisions and maximize returns on your portfolio.",
        icon: "chart",
        href: "/services/investment-advisory",
      },
      {
        title: "Mergers & Acquisitions",
        description:
          "Strategic M&A advisory from deal sourcing and valuation to negotiation and post-merger integration.",
        icon: "handshake",
        href: "/services/mergers-acquisitions",
      },
      {
        title: "Capital Markets",
        description:
          "Access to capital markets through IPOs, debt placements, and structured finance solutions for growing businesses.",
        icon: "trending",
        href: "/services/capital-markets",
      },
    ],
  },
  whyUs: {
    sectionTitle: "Why Choose Amiom",
    sectionSubtitle: "We combine deep expertise with innovative approaches to deliver results.",
    items: [
      {
        title: "Expert Team",
        description:
          "Our team brings decades of combined experience in corporate finance and investment banking.",
      },
      {
        title: "Client-First Approach",
        description:
          "Every solution is tailored to your unique business needs and growth objectives.",
      },
      {
        title: "Proven Track Record",
        description:
          "Trusted by businesses across industries for delivering measurable financial outcomes.",
      },
      {
        title: "Technology-Driven",
        description:
          "Leveraging cutting-edge technology to provide data-driven insights and efficient execution.",
      },
    ],
  },
  cta: {
    headline: "Ready to Transform Your Financial Future?",
    description:
      "Partner with Amiom for strategic financial solutions that drive sustainable growth.",
    button: { label: "Schedule a Consultation", href: "/contact" },
  },
} as const;
