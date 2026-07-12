import { COMPANY } from "./company";

export const LEGAL = {
  copyright: `\u00A9 ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.`,
  disclaimer:
    "Amiom is a Direct Selling Agent (DSA) and does not lend directly. All loans are subject to approval by the respective bank or NBFC. Interest rates, terms, and eligibility are determined by the lending institution. The information on this website is for general informational purposes only.",
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "2026-07-12",
    intro:
      `This Privacy Policy describes how ${COMPANY.name} ("Amiom", "we", "us", or "our") collects, uses, and protects your personal information when you visit our website or use our services. We are committed to safeguarding your privacy in compliance with the Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.`,
    sections: [
      {
        heading: "Information We Collect",
        points: [
          "Personal identification information: name, date of birth, PAN, Aadhaar number",
          "Contact details: phone number, email address, residential address",
          "Financial information: monthly income, employment type, existing loan details",
          "Documents: salary slips, bank statements, and other KYC documents you upload",
          "Usage data: IP address, browser type, pages visited, and time spent on our website (collected via cookies and analytics tools)",
        ],
      },
      {
        heading: "How We Use Your Information",
        points: [
          "To process your loan enquiry and match you with suitable bank or NBFC partners",
          "To share your application details with our lending partners for loan processing",
          "To communicate with you about your application status, offers, and updates",
          "To send service-related notifications via SMS, email, or WhatsApp",
          "To improve our website, services, and customer experience",
          "To comply with legal and regulatory obligations",
        ],
      },
      {
        heading: "Cookies & Analytics",
        points: [
          "We use cookies to enhance your browsing experience and remember your preferences",
          "Google Analytics is used to understand website traffic and user behaviour",
          "Analytics cookies are only activated after you provide explicit consent via our cookie banner",
          "You may decline cookies at any time — this will not affect your ability to use our core services",
          "Essential cookies (required for the website to function) are always active",
        ],
      },
      {
        heading: "Information Sharing",
        points: [
          "Your information is shared with our partner banks and NBFCs solely to process your loan application",
          "We do not sell, rent, or trade your personal data to third parties for marketing purposes",
          "We may share data with service providers who assist in operating our website under strict confidentiality agreements",
          "We may disclose information when required by law, court order, or regulatory authorities such as RBI",
        ],
      },
      {
        heading: "Data Security",
        points: [
          "We implement industry-standard technical and organisational security measures",
          "All data transmissions are encrypted using SSL/TLS protocols",
          "Access to your personal data is restricted to authorised personnel only",
          "We conduct periodic reviews of our data collection, storage, and processing practices",
          "In the event of a data breach, we will notify affected users as required by law",
        ],
      },
      {
        heading: "Data Retention",
        points: [
          "We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy",
          "Application data is retained for a minimum of 5 years as required by financial regulations",
          "You may request deletion of your data by contacting us, subject to applicable legal retention requirements",
        ],
      },
      {
        heading: "Your Rights",
        points: [
          "Access: You have the right to request a copy of the personal data we hold about you",
          "Correction: You may request correction of inaccurate or incomplete data",
          "Withdrawal of Consent: You may withdraw consent for data processing at any time",
          "Grievance Redressal: You may raise a complaint with our Grievance Officer",
          "To exercise any of these rights, contact us at " + COMPANY.email,
        ],
      },
      {
        heading: "Third-Party Links",
        points: [
          "Our website may contain links to partner bank websites and external resources",
          "We are not responsible for the privacy practices of third-party websites",
          "We encourage you to read the privacy policies of any external sites you visit",
        ],
      },
      {
        heading: "Changes to This Policy",
        points: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements",
          "The updated policy will be posted on this page with a revised 'Last Updated' date",
          "Continued use of our website after changes constitutes acceptance of the updated policy",
        ],
      },
      {
        heading: "Contact & Grievance Officer",
        points: [
          `Company: ${COMPANY.name}`,
          `Email: ${COMPANY.email}`,
          `Phone: ${COMPANY.phone}`,
          `Address: ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} - ${COMPANY.address.pincode}`,
          `CIN: ${COMPANY.cin}`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "2026-06-18",
    sections: [
      {
        heading: "Acceptance of Terms",
        content:
          "By accessing and using this website, you accept and agree to be bound by these Terms of Service.",
      },
      {
        heading: "Nature of Services",
        content:
          "Amiom Corporate Finance Private Limited acts as a Direct Selling Agent (DSA) for banks and Non-Banking Financial Companies (NBFCs). We facilitate loan applications but do not directly lend money. All loan approvals, interest rates, and terms are at the sole discretion of the respective lending institution.",
      },
      {
        heading: "Intellectual Property",
        content: `All content on this website, including text, graphics, logos, and images, is the property of ${COMPANY.name} and is protected by applicable intellectual property laws.`,
      },
      {
        heading: "Limitation of Liability",
        content: `${COMPANY.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. We do not guarantee loan approval or specific interest rates.`,
      },
    ],
  },
} as const;
