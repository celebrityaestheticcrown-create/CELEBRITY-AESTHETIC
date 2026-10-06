import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { defaultFaqs } from "@/lib/faqs";
import CTASection from "@/components/CTASection";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Hair, Skin & PMU Clinic Bangalore",
  description:
    "Find answers to common questions about hair restoration, GFC vs PRP, US FDA laser hair removal, zero-cost EMI financing, and appointment booking at Crown Celebrity Aesthetic in Jayanagar, Bengaluru.",
  keywords: [
    "FAQ Crown Celebrity Aesthetic",
    "GFC vs PRP Bangalore",
    "hair transplant cost FAQ Bangalore",
    "laser hair removal safety Bangalore",
    "No cost EMI aesthetic clinic Bangalore",
    "clinic hours Crown Celebrity Aesthetic",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ — ${SITE_NAME}`,
    description:
      "Direct answers on treatments, downtime, technology, and zero-cost EMI options at Crown Celebrity Aesthetic Bangalore.",
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/clinic/clinic-consultation-room.jpg", alt: "Crown Celebrity Aesthetic FAQ & Consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions — ${SITE_NAME}`,
    description: "Common questions about skin, hair, PMU treatments & booking in Jayanagar, Bengaluru.",
    images: ["/clinic/clinic-consultation-room.jpg"],
  },
};

export default function FAQPage() {
  const faqSchema = getFAQSchema(defaultFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQAccordion />
      <CTASection />
    </div>
  );
}
