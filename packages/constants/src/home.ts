export const HOME_PAGE = {
  hero: {
    headline: "Get the Right Loan, Hassle-Free",
    subheadline:
      "Amiom connects you with India's top banks and NBFCs to find the best loan products with competitive rates, quick approvals, and zero hidden charges.",
    cta: {
      primary: { label: "Apply Now", href: "/contact" },
      secondary: { label: "Explore Services", href: "/services" },
    },
  },
  services: {
    sectionTitle: "Our Loan Products",
    sectionSubtitle:
      "From personal needs to business growth — we offer a wide range of loan products through our partner banks and NBFCs.",
    items: [
      {
        title: "Personal Loans",
        description:
          "Quick personal loans with minimal documentation, flexible tenures, and competitive interest rates for all your needs.",
        icon: "user",
        href: "/services/personal-loans",
      },
      {
        title: "Home Loans",
        description:
          "Make your dream home a reality with affordable home loan options, attractive rates, and long repayment tenures.",
        icon: "home",
        href: "/services/home-loans",
      },
      {
        title: "Business Loans",
        description:
          "Fuel your business growth with working capital loans, term loans, and MSME financing solutions.",
        icon: "briefcase",
        href: "/services/business-loans",
      },
      {
        title: "Loan Against Property",
        description:
          "Unlock the value of your property with high-value loans at lower interest rates for any purpose.",
        icon: "landmark",
        href: "/services/loan-against-property",
      },
      {
        title: "Education Loans",
        description:
          "Invest in your future with education loans covering tuition, living expenses, and study abroad programs.",
        icon: "graduation",
        href: "/services/education-loans",
      },
      {
        title: "Vehicle Loans",
        description:
          "Drive your dream car or two-wheeler home with easy vehicle financing and quick disbursals.",
        icon: "car",
        href: "/services/vehicle-loans",
      },
      {
        title: "Credit Cards",
        description:
          "Choose from a wide range of credit cards with rewards, cashback, and exclusive privileges from top banks.",
        icon: "creditcard",
        href: "/services/credit-cards",
      },
    ],
  },
  whyUs: {
    sectionTitle: "Why Choose Amiom",
    sectionSubtitle:
      "We simplify your loan journey from application to disbursement — saving you time, effort, and money.",
    items: [
      {
        title: "Multiple Bank Partners",
        description:
          "Access loan products from India's leading banks and NBFCs — all through a single platform.",
      },
      {
        title: "Best Interest Rates",
        description:
          "We compare rates across our partner lenders to ensure you get the most competitive deal.",
      },
      {
        title: "Quick Approvals",
        description:
          "Streamlined documentation and digital processes mean faster approvals and quicker disbursals.",
      },
      {
        title: "Expert Guidance",
        description:
          "Our loan advisors guide you through every step — from eligibility to final disbursement.",
      },
    ],
  },
  partnerBanks: {
    sectionTitle: "Our Partner Banks & NBFCs",
    sectionSubtitle:
      "We work with India's most trusted financial institutions to bring you the best loan products.",
    partners: [
      "State Bank of India",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank",
      "Bajaj Finserv",
      "Tata Capital",
      "IDFC First Bank",
    ],
  },
  customerJourney: {
    sectionTitle: "How It Works",
    sectionSubtitle: "Getting a loan through Amiom is simple and straightforward.",
    steps: [
      {
        title: "Share Your Requirement",
        description: "Tell us what you need — loan type, amount, and preferred tenure.",
      },
      {
        title: "Get Matched",
        description:
          "We compare offers from our partner banks and find the best match for your profile.",
      },
      {
        title: "Submit Documents",
        description: "Upload minimal documents online — we handle the paperwork for you.",
      },
      {
        title: "Receive Funds",
        description:
          "Once approved, the loan amount is disbursed directly to your bank account.",
      },
    ],
  },
  cta: {
    headline: "Ready to Get Started?",
    description:
      "Apply for a loan today and let our experts find the best deal for you. Quick approvals, competitive rates, zero hassle.",
    button: { label: "Apply Now", href: "/contact" },
  },
} as const;
