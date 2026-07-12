import { COMPANY } from "./company";

export const LEGAL = {
  copyright: `\u00A9 ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.`,
  disclaimer: {
    short:
      "Amiom is a Direct Selling Agent (DSA) and does not lend directly. All loans are subject to approval by the respective bank or NBFC. Interest rates, terms, and eligibility are determined by the lending institution. The information on this website is for general informational purposes only.",
    title: "Disclaimer",
    lastUpdated: "2026-07-12",
    intro: `The information provided on this website by ${COMPANY.name} ("Amiom") is for general informational purposes only. By accessing or using this website, you acknowledge and agree to the disclaimers set out below. Please read them carefully before relying on any information presented here.`,
    sections: [
      {
        heading: "DSA Status — We Do Not Lend",
        points: [
          `${COMPANY.name} (CIN: ${COMPANY.cin}) is registered as a Direct Selling Agent (DSA) for various banks and Non-Banking Financial Companies (NBFCs) regulated by the Reserve Bank of India (RBI).`,
          "Amiom does not directly lend money, issue credit, or act as a financial institution in any capacity.",
          "Our role is limited to facilitating the introduction of prospective borrowers to our partner lending institutions.",
          "Any loan product, credit card, or financial instrument offered is provided exclusively by the respective bank or NBFC, and not by Amiom.",
        ],
      },
      {
        heading: "No Guarantee of Loan Approval",
        points: [
          "Submitting an enquiry or application through this website does not constitute a loan application with any bank or NBFC, nor does it guarantee loan approval.",
          "Loan approval, sanction amount, interest rate, tenure, and all other terms are determined solely at the discretion of the lending institution.",
          "Amiom makes no representations or warranties regarding the likelihood of loan approval for any individual applicant.",
          "Eligibility criteria vary across lenders and loan products and are subject to change without notice.",
        ],
      },
      {
        heading: "Interest Rates & Financial Information",
        points: [
          "All interest rates, loan amounts, tenure ranges, and other financial figures displayed on this website are indicative only.",
          "Rates are subject to change at any time as per RBI guidelines, monetary policy decisions, and individual lender policies.",
          "The actual rate offered to you will be determined by the lending institution based on your credit profile, income, and other factors.",
          "Amiom is not responsible for any discrepancy between the indicative rates shown on this website and the actual rates offered by lenders.",
          "Past performance or previously offered rates are not indicative of future rates.",
        ],
      },
      {
        heading: "No Professional Financial Advice",
        points: [
          "The content on this website is for general informational purposes only and does not constitute financial, investment, legal, or tax advice.",
          "Amiom is not a financial advisor, investment advisor, or legal counsel.",
          "You should consult a qualified financial professional before making any borrowing decisions.",
          "Amiom shall not be held liable for any financial decisions made by you based on the information provided on this website.",
        ],
      },
      {
        heading: "Third-Party Lender Policies",
        points: [
          "Our partner banks and NBFCs operate under their own terms, conditions, and policies which are independent of Amiom.",
          "Amiom does not control and is not responsible for the lending policies, credit decisions, or customer service of partner institutions.",
          "Any disputes regarding a loan, disbursement, or interest charged must be resolved directly with the respective lending institution.",
          "Links to third-party websites are provided for convenience only. Amiom does not endorse or take responsibility for external content.",
        ],
      },
      {
        heading: "No Fees from Customers",
        points: [
          "Amiom does not charge any fee, commission, or processing charge directly from loan applicants.",
          "If anyone representing Amiom demands payment from you, please report this immediately to " + COMPANY.email,
          "Processing fees, prepayment charges, or other charges levied by lenders are the responsibility of the respective lending institution and will be disclosed by them directly.",
        ],
      },
      {
        heading: "Accuracy of Information",
        points: [
          "While we endeavour to keep the information on this website accurate and up to date, Amiom makes no warranties or representations regarding the completeness, accuracy, or reliability of any content.",
          "Information may be updated, corrected, or removed at any time without prior notice.",
          "Users are advised to verify all information with the relevant lending institution before making any financial commitments.",
        ],
      },
      {
        heading: "Limitation of Liability",
        points: [
          `${COMPANY.name} shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your reliance on the information provided on this website.`,
          "This includes but is not limited to loss of income, profits, data, or business opportunities.",
          "Amiom's maximum aggregate liability for any claim arising from the use of this website shall not exceed ₹1,000.",
        ],
      },
      {
        heading: "Regulatory Compliance",
        points: [
          "Amiom operates in compliance with applicable laws and regulations of India, including guidelines issued by the Reserve Bank of India (RBI) from time to time.",
          "This disclaimer is subject to change to reflect updates in regulatory requirements.",
          "In case of any conflict between this disclaimer and applicable law, the law shall prevail.",
        ],
      },
      {
        heading: "Contact Us",
        points: [
          `For any questions, concerns, or complaints regarding this disclaimer, please contact us:`,
          `Company: ${COMPANY.name}`,
          `CIN: ${COMPANY.cin}`,
          `Email: ${COMPANY.email}`,
          `Phone: ${COMPANY.phone}`,
          `Address: ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} - ${COMPANY.address.pincode}`,
        ],
      },
    ],
  },
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
    lastUpdated: "2026-07-12",
    intro: `These Terms of Service ("Terms") govern your use of the website and services provided by ${COMPANY.name} ("Amiom", "we", "us", or "our"). By accessing or using our website, you agree to be legally bound by these Terms. If you do not agree, please do not use our website or services.`,
    sections: [
      {
        heading: "Acceptance of Terms",
        points: [
          "By accessing this website, you confirm that you are at least 18 years of age and legally capable of entering into binding agreements under Indian law.",
          "These Terms constitute a legally binding agreement between you and Amiom Corporate Finance Private Limited.",
          "We reserve the right to update these Terms at any time. Continued use of the website after changes constitutes your acceptance of the revised Terms.",
          "The most current version of these Terms will always be available on this page with the 'Last Updated' date.",
        ],
      },
      {
        heading: "Nature of Our Services",
        points: [
          `${COMPANY.name} is a registered Direct Selling Agent (DSA) for banks and Non-Banking Financial Companies (NBFCs). We do not lend money directly.`,
          "Our role is to facilitate loan applications by connecting you with our partner lending institutions.",
          "All loan approvals, disbursals, interest rates, tenure, and terms & conditions are determined solely by the respective bank or NBFC.",
          "Submitting an enquiry through our website does not guarantee loan approval, a specific interest rate, or any specific loan offer.",
          "Indicative interest rates displayed on this website are subject to change as per RBI guidelines and lender policies at any time without prior notice.",
        ],
      },
      {
        heading: "User Obligations",
        points: [
          "You agree to provide accurate, complete, and truthful information when submitting any enquiry or application through this website.",
          "Submission of false, misleading, or fraudulent information is strictly prohibited and may result in rejection of your application and legal action.",
          "You must not use this website for any unlawful purpose or in a way that violates any applicable laws or regulations.",
          "You must not attempt to gain unauthorised access to any part of this website or its related systems.",
          "You agree not to use automated tools, bots, or scripts to access or interact with this website.",
        ],
      },
      {
        heading: "Loan Application & Processing",
        points: [
          "By submitting a loan enquiry, you authorise Amiom and its lending partners to contact you via phone, SMS, email, or WhatsApp.",
          "You consent to Amiom sharing your application details, documents, and personal information with partner banks and NBFCs for the purpose of loan processing.",
          "Amiom does not charge any fees from applicants for loan facilitation services. If any fee is demanded, please report it to us immediately.",
          "The processing time, credit assessment, and final decision on any loan application rest entirely with the lending institution.",
          "Amiom is not responsible for any delays, rejections, or changes in loan terms made by the lending institution.",
        ],
      },
      {
        heading: "Fees & Charges",
        points: [
          "Amiom's loan facilitation services are free of charge for customers.",
          "Lending institutions may levy processing fees, prepayment charges, or other charges as per their own policies.",
          "Any fees payable to a lender will be clearly communicated to you by the respective lending institution before loan disbursement.",
          "Amiom earns a commission from partner banks and NBFCs upon successful loan disbursement.",
        ],
      },
      {
        heading: "Intellectual Property",
        points: [
          `All content on this website — including text, graphics, logos, icons, images, and data compilations — is the property of ${COMPANY.name} and is protected under applicable Indian intellectual property laws.`,
          "You may not copy, reproduce, distribute, or create derivative works from any content on this website without prior written permission from us.",
          "The Amiom name, logo, and brand marks are proprietary. Any unauthorised use is strictly prohibited.",
          "You are granted a limited, non-exclusive, non-transferable licence to access and use this website solely for personal, non-commercial purposes.",
        ],
      },
      {
        heading: "Disclaimer of Warranties",
        points: [
          "This website and its content are provided on an 'as is' and 'as available' basis without warranties of any kind, express or implied.",
          "Amiom does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
          "Interest rates, loan amounts, and other financial information displayed are indicative and may not reflect current offers from lending institutions.",
          "We do not guarantee that any loan enquiry submitted through this website will result in a loan offer.",
        ],
      },
      {
        heading: "Limitation of Liability",
        points: [
          `To the maximum extent permitted by law, ${COMPANY.name} shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or our services.`,
          "Amiom is not liable for any decisions made by lending institutions regarding your loan application, including rejections, interest rates offered, or loan amounts sanctioned.",
          "We are not responsible for any loss or damage caused by reliance on the information provided on this website.",
          "Our total aggregate liability to you for any claim arising under these Terms shall not exceed ₹1,000.",
        ],
      },
      {
        heading: "Third-Party Links & Partners",
        points: [
          "This website may contain links to the websites of our partner banks, NBFCs, and other third-party resources.",
          "Amiom does not control or endorse the content of third-party websites and is not responsible for their privacy practices or terms.",
          "Visiting any linked website is at your own risk. We encourage you to review the terms and privacy policies of any third-party site you visit.",
        ],
      },
      {
        heading: "Privacy",
        points: [
          "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
          "By using this website, you consent to our collection and use of your personal data as described in the Privacy Policy.",
        ],
      },
      {
        heading: "Governing Law & Dispute Resolution",
        points: [
          `These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.`,
          `Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in ${COMPANY.address.city}, Tamil Nadu.`,
          "We encourage you to contact us first to resolve any disputes amicably before initiating legal proceedings.",
          `You may reach us at ${COMPANY.email} or ${COMPANY.phone} for any grievances.`,
        ],
      },
      {
        heading: "Contact Us",
        points: [
          `Company: ${COMPANY.name}`,
          `CIN: ${COMPANY.cin}`,
          `Email: ${COMPANY.email}`,
          `Phone: ${COMPANY.phone}`,
          `Address: ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} - ${COMPANY.address.pincode}`,
        ],
      },
    ],
  },
} as const;
