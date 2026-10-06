import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import TreatmentsExplorer from "@/components/TreatmentsExplorer";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/schema";
import { treatments } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Clinical Treatments Catalog — Hair, Skin, Aesthetics & PMU",
  description:
    "Explore 36+ clinical treatments across hair restoration, FUE hair transplant, acne scar revision, US FDA laser hair removal, medi-facials and PMU in Jayanagar, Bangalore.",
  keywords: [
    "aesthetic treatments Bangalore",
    "hair restoration Bangalore",
    "skin clinic Jayanagar",
    "PMU treatments Bangalore",
    "GFC therapy Bangalore",
    "PRP clinic Bangalore",
    "laser hair removal Jayanagar 9th block",
    "Crown Celebrity Aesthetic treatments",
  ],
  alternates: { canonical: "/treatments" },
  openGraph: {
    title: `Treatments Catalog — ${SITE_NAME}`,
    description:
      "Full spectrum clinical hair restoration, dermatology, laser aesthetics, and PMU services in Jayanagar 9th Block, Bengaluru.",
    url: `${SITE_URL}/treatments`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/clinic/clinic-about-treatment-room.jpg",
        alt: "Crown Celebrity Aesthetic Treatment Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Clinical Treatments Directory — ${SITE_NAME}`,
    description: "Browse 36+ specialized treatments with zero-cost EMI in Jayanagar, Bengaluru.",
    images: ["/clinic/clinic-about-treatment-room.jpg"],
  },
};

export default function TreatmentsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Treatments", url: "/treatments" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Clinical Treatments Catalog",
    description: "Directory of 36+ specialized hair, skin, aesthetics and PMU treatments at Crown Celebrity Aesthetic Bangalore.",
    url: `${SITE_URL}/treatments`,
    hasPart: treatments.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.name,
      url: `${SITE_URL}/treatments/${t.slug}`,
      description: t.description,
    })),
  };

  return (
    <div className="pb-16 sm:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url(/backgrounds/hair-treatments-bg.png)" }}
        />
        <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading
            kicker="Treatments Directory"
            title="Explore every treatment we offer"
            description="Personalized, consultation-led aesthetic care in Jayanagar 9th Block, Bangalore. Filter by specialty to explore protocols, recovery details, and direct booking options."
            descriptionClassName="text-white"
          />
        </div>
      </div>
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="mt-12">
          <Suspense fallback={null}>
            <TreatmentsExplorer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
