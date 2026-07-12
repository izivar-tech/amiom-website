export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  eligibility: string[];
  documents: string[];
  interestRate: string;
  tenure: string;
  loanAmount: string;
}

export const SERVICES_PAGE = {
  hero: {
    headline: "Our Loan Products & Services",
    subheadline:
      "We offer a wide range of loan products through our partner banks and NBFCs. Compare, choose, and apply — all in one place.",
  },
} as const;

export const SERVICES: ServiceDetail[] = [
  {
    slug: "personal-loans",
    title: "Personal Loans",
    shortDescription:
      "Quick personal loans with minimal documentation, flexible tenures, and competitive interest rates for all your needs.",
    description:
      "Whether it is a medical emergency, wedding, travel, or debt consolidation — our partner banks offer personal loans with minimal paperwork and fast approvals. Get funds directly in your bank account within 24-48 hours.",
    icon: "user",
    features: [
      "Loan amounts from ₹50,000 to ₹40,00,000",
      "No collateral or security required",
      "Flexible repayment tenures up to 5 years",
      "Minimal documentation required",
      "Quick disbursal within 24-48 hours",
      "Balance transfer facility available",
    ],
    eligibility: [
      "Salaried individuals or self-employed professionals",
      "Age: 21 to 60 years",
      "Minimum monthly income: ₹15,000",
      "Good credit score (650+)",
      "Minimum 1 year of work experience",
    ],
    documents: [
      "PAN Card & Aadhaar Card",
      "Latest 3 months salary slips",
      "Last 6 months bank statements",
      "Address proof",
      "Passport-size photographs",
    ],
    interestRate: "10.49% onwards",
    tenure: "12 to 60 months",
    loanAmount: "₹50,000 to ₹40 Lakhs",
  },
  {
    slug: "home-loans",
    title: "Home Loans",
    shortDescription:
      "Make your dream home a reality with affordable home loan options, attractive rates, and long repayment tenures.",
    description:
      "Turn your dream of owning a home into reality. Our partner banks offer competitive home loan rates with tenures up to 30 years. Whether you are buying a new home, constructing, or renovating — we have the right home loan for you.",
    icon: "home",
    features: [
      "Loan amounts up to ₹10 Crore",
      "Competitive interest rates from leading banks",
      "Tenure up to 30 years",
      "Up to 90% financing of property value",
      "Balance transfer with top-up facility",
      "Tax benefits under Section 80C & 24(b)",
    ],
    eligibility: [
      "Salaried or self-employed individuals",
      "Age: 21 to 65 years (at loan maturity)",
      "Minimum 2 years of employment/business",
      "Good credit score (700+)",
      "Stable income source",
    ],
    documents: [
      "Identity & address proof (PAN, Aadhaar)",
      "Income proof (salary slips / ITR)",
      "Last 6-12 months bank statements",
      "Property documents",
      "Builder/seller agreement",
      "Passport-size photographs",
    ],
    interestRate: "8.35% onwards",
    tenure: "Up to 30 years",
    loanAmount: "Up to ₹10 Crore",
  },
  {
    slug: "business-loans",
    title: "Business Loans",
    shortDescription:
      "Fuel your business growth with working capital loans, term loans, and MSME financing solutions.",
    description:
      "Scale your business with the right financing. From working capital needs to equipment purchase and business expansion — our partner banks and NBFCs offer tailored business loan solutions for MSMEs, startups, and established businesses.",
    icon: "briefcase",
    features: [
      "Loan amounts from ₹1 Lakh to ₹5 Crore",
      "Collateral-free options available",
      "Flexible repayment options",
      "Overdraft and working capital facilities",
      "MSME and Mudra loan options",
      "Quick processing for existing businesses",
    ],
    eligibility: [
      "Business operational for at least 1 year",
      "Minimum annual turnover: ₹10 Lakhs",
      "Proprietors, partnerships, LLPs, or companies",
      "Good credit history",
      "Valid GST registration (for higher amounts)",
    ],
    documents: [
      "Business registration documents",
      "PAN Card of business and proprietor",
      "Last 2 years ITR with financials",
      "Last 12 months bank statements",
      "GST returns (if applicable)",
      "KYC documents of all partners/directors",
    ],
    interestRate: "14% onwards",
    tenure: "12 to 60 months",
    loanAmount: "₹1 Lakh to ₹5 Crore",
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    shortDescription:
      "Unlock the value of your property with high-value loans at lower interest rates for any purpose.",
    description:
      "Leverage your residential or commercial property to avail high-value loans at attractive interest rates. Loan Against Property (LAP) is ideal for business expansion, education funding, medical expenses, or any large financial need.",
    icon: "landmark",
    features: [
      "Loan up to 70% of property market value",
      "Lower interest rates compared to unsecured loans",
      "Long repayment tenure up to 20 years",
      "Use funds for any purpose",
      "Both residential and commercial property accepted",
      "Overdraft facility available",
    ],
    eligibility: [
      "Property owners (residential or commercial)",
      "Salaried or self-employed individuals",
      "Age: 25 to 65 years",
      "Clear property title with no legal disputes",
      "Good credit score (650+)",
    ],
    documents: [
      "Property ownership documents",
      "Property valuation report",
      "Identity & address proof",
      "Income proof (salary slips / ITR / business financials)",
      "Last 12 months bank statements",
      "Existing loan statements (if any)",
    ],
    interestRate: "9.5% onwards",
    tenure: "Up to 20 years",
    loanAmount: "Up to 70% of property value",
  },
  {
    slug: "education-loans",
    title: "Education Loans",
    shortDescription:
      "Invest in your future with education loans covering tuition, living expenses, and study abroad programs.",
    description:
      "Do not let finances come in the way of your education. Our partner banks offer education loans for courses in India and abroad, covering tuition fees, living expenses, travel, and more. Build your career without financial stress.",
    icon: "graduation",
    features: [
      "Covers tuition, hostel, travel & living expenses",
      "Loans for India and international education",
      "Moratorium period until course completion + 6 months",
      "Collateral-free loans up to ₹7.5 Lakhs",
      "Tax benefits under Section 80E",
      "Competitive interest rates for top institutions",
    ],
    eligibility: [
      "Indian nationals with confirmed admission",
      "Courses: UG, PG, professional, or vocational",
      "Co-applicant (parent/guardian) required",
      "Good academic record",
      "Institution recognized by UGC/AICTE or equivalent",
    ],
    documents: [
      "Admission letter from institution",
      "Fee structure from institution",
      "Student's and co-applicant's KYC documents",
      "Co-applicant's income proof",
      "Last 2 years academic marksheets",
      "Collateral documents (for higher amounts)",
    ],
    interestRate: "8.5% onwards",
    tenure: "Up to 15 years (after moratorium)",
    loanAmount: "Up to ₹1.5 Crore",
  },
  {
    slug: "vehicle-loans",
    title: "Vehicle Loans",
    shortDescription:
      "Drive your dream car or two-wheeler home with easy vehicle financing and quick disbursals.",
    description:
      "Get behind the wheel of your dream vehicle with affordable financing options. Whether it is a new car, used car, or two-wheeler — our partner banks offer quick vehicle loans with competitive rates and flexible EMIs.",
    icon: "car",
    features: [
      "Financing up to 100% of on-road price (new vehicles)",
      "New and used vehicle loans available",
      "Car, SUV, and two-wheeler financing",
      "Quick approval and disbursal",
      "Flexible EMI options",
      "Insurance tie-ups for added convenience",
    ],
    eligibility: [
      "Salaried or self-employed individuals",
      "Age: 21 to 65 years",
      "Minimum monthly income: ₹15,000",
      "Good credit score (650+)",
      "For used vehicles: vehicle age < 7 years",
    ],
    documents: [
      "Identity & address proof",
      "Income proof (salary slips / ITR)",
      "Last 3 months bank statements",
      "Proforma invoice from dealer",
      "Passport-size photographs",
      "RC book (for used vehicles)",
    ],
    interestRate: "8.5% onwards",
    tenure: "12 to 84 months",
    loanAmount: "Up to ₹1 Crore",
  },
  {
    slug: "credit-cards",
    title: "Credit Cards",
    shortDescription:
      "Choose from a wide range of credit cards with rewards, cashback, and exclusive privileges from top banks.",
    description:
      "Find the perfect credit card that matches your lifestyle and spending habits. We help you compare and apply for credit cards from India's leading banks — with rewards, cashback, travel benefits, fuel surcharge waivers, and more.",
    icon: "creditcard",
    features: [
      "Cards from all major banks",
      "Rewards, cashback, and travel cards",
      "Fuel surcharge waiver cards",
      "Lifetime free options available",
      "Welcome bonus and joining benefits",
      "Easy EMI conversion on purchases",
    ],
    eligibility: [
      "Salaried or self-employed individuals",
      "Age: 21 to 60 years",
      "Minimum monthly income: ₹15,000",
      "Good credit score (700+)",
      "Existing bank relationship preferred",
    ],
    documents: [
      "PAN Card & Aadhaar Card",
      "Latest salary slip or ITR",
      "Last 3 months bank statements",
      "Address proof",
      "Passport-size photograph",
    ],
    interestRate: "N/A (revolving credit)",
    tenure: "N/A",
    loanAmount: "Credit limit based on income",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
