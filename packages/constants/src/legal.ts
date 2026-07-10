import { COMPANY } from "./company";

export const LEGAL = {
  copyright: `© ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.`,
  disclaimer:
    "The information provided on this website is for general informational purposes only. It does not constitute financial, legal, or professional advice. Please consult with qualified professionals before making any financial decisions.",
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "2024-01-01",
    sections: [
      {
        heading: "Information We Collect",
        content:
          "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.",
      },
      {
        heading: "How We Use Your Information",
        content:
          "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.",
      },
      {
        heading: "Information Security",
        content:
          "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.",
      },
      {
        heading: "Contact Us",
        content: `For any privacy-related questions or concerns, please contact us at ${COMPANY.email}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "2024-01-01",
    sections: [
      {
        heading: "Acceptance of Terms",
        content:
          "By accessing and using this website, you accept and agree to be bound by these Terms of Service.",
      },
      {
        heading: "Use of Services",
        content:
          "Our services are intended for businesses and professionals seeking corporate finance solutions. You agree to use our services only for lawful purposes.",
      },
      {
        heading: "Intellectual Property",
        content: `All content on this website, including text, graphics, logos, and images, is the property of ${COMPANY.name} and is protected by applicable intellectual property laws.`,
      },
      {
        heading: "Limitation of Liability",
        content: `${COMPANY.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.`,
      },
    ],
  },
} as const;
