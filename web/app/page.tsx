import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicePillars from "@/components/ServicePillars";
import SignatureExperience from "@/components/SignatureExperience";
import PhilosophySection from "@/components/PhilosophySection";
import GoogleReviews from "@/components/GoogleReviews";
import CTASection from "@/components/CTASection";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Hair & Skin Clinic, PMU Studio & IATAM Academy Bangalore`,
  description:
    "Crown Celebrity Aesthetic in Jayanagar 9th Block, Bengaluru offers specialized autologous GFC & PRP hair restoration, US FDA approved laser treatments, medi-facials, and PMU training. Zero-cost EMI available.",
  keywords: [
    "Crown Celebrity Aesthetic",
    "hair clinic Bangalore",
    "skin clinic Jayanagar",
    "GFC hair treatment Bangalore",
    "PRP treatment Jayanagar 9th block",
    "laser hair removal Bangalore",
    "PMU microblading Bangalore",
    "IATAM Academy Bangalore",
    "hair transplant clinic Bangalore",
    "No cost EMI aesthetic clinic Bangalore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — Premier Aesthetic Clinic in Bengaluru`,
    description:
      "Consultation-led hair restoration, US FDA approved skin therapies, PMU, and IATAM Academy in Jayanagar 9th Block, Bengaluru.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/clinic/clinic-about-treatment-room.jpg",
        width: 1200,
        height: 630,
        alt: "Crown Celebrity Aesthetic Clinic in Jayanagar Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Hair & Skin Clinic Bangalore`,
    description: "Autologous GFC, hair transplants, US FDA laser treatments & PMU in Jayanagar, Bengaluru.",
    images: ["/clinic/clinic-about-treatment-room.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Crown Celebrity Aesthetic — Hair &amp; Skin Clinic, PMU Studio &amp; IATAM Academy in Jayanagar, Bengaluru
      </h1>
      <div className="sr-only">
        Crown Celebrity Aesthetic is a premier clinic located in Jayanagar 9th Block, Bengaluru (Karnataka 560056) providing autologous GFC &amp; PRP hair therapies, US FDA approved laser treatments, medi-facials, and PMU with 0% interest EMI options. With over 1,500+ successful transformations, our certified trichologists deliver 45-minute customized sessions with 95%+ follicle preservation. Book a consultation or contact our clinic on WhatsApp at +91 95910 47171.
      </div>
      <Hero />
      <TrustBar />
      <ServicePillars />
      <AboutSection />
      <SignatureExperience />
      <PhilosophySection />
      <GoogleReviews />
      <CTASection />
    </>
  );
}
