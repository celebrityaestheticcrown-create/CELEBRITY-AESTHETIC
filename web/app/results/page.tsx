import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import ResultsSection from "@/components/ResultsSection";
import { Reveal } from "@/components/ui/Reveal";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Clinical Results & Patient Transformations — Hair, Skin & PMU Bangalore",
  description:
    "View documented clinical transformation results across autologous GFC hair restoration, acne scar revision, laser treatments, and PMU at Crown Celebrity Aesthetic in Jayanagar, Bengaluru.",
  keywords: [
    "hair restoration results Bangalore",
    "GFC before and after Bangalore",
    "acne scar results Jayanagar",
    "PMU microblading results Bangalore",
    "Crown Celebrity Aesthetic patient results",
  ],
  alternates: { canonical: "/results" },
  openGraph: {
    title: `Clinical Results & Transformations — ${SITE_NAME}`,
    description: "Real patient outcomes across hair, skin, and PMU treatments in Jayanagar, Bengaluru.",
    url: `${SITE_URL}/results`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/clinic/clinic-procedure-suite.jpg", alt: "Crown Celebrity Aesthetic Clinical Results" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Clinical Results — ${SITE_NAME}`,
    description: "Documented before-and-after transformations in Jayanagar 9th Block, Bengaluru.",
    images: ["/clinic/clinic-procedure-suite.jpg"],
  },
};

export default function ResultsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Results", url: "/results" },
  ]);

  const resultsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Clinical Results & Patient Outcomes",
    description: "Clinical transformation gallery documenting hair restoration, skin therapies, and PMU at Crown Celebrity Aesthetic.",
    url: `${SITE_URL}/results`,
    about: { "@id": `${SITE_URL}/#clinic` },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsSchema) }}
      />

      <section className="border-b border-gold/20 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="font-grotesk text-[13px] font-semibold uppercase tracking-widest2 text-gold-dark">
            Clinical Portfolio · Jayanagar 9th Block, Bengaluru
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-tight text-charcoal sm:text-5xl">
            See the difference
          </h1>
          <p className="mt-6 font-grotesk text-[17px] leading-relaxed text-charcoal/75">
            Over 1,500+ documented patient journeys across autologous hair restoration, advanced medi-facials, and semi-permanent makeup. Consultation-led diagnosis ensures transparent expectations.
          </p>
        </Reveal>
      </section>

      <ResultsSection showCta={false} />

      <Reveal className="py-16 text-center sm:py-24">
        <h2 className="font-display text-2xl font-bold uppercase text-charcoal sm:text-3xl">
          Curious what&apos;s possible for you?
        </h2>
        <p className="mt-3 font-grotesk text-base text-charcoal/70">
          Book a consultation with our trichology and cosmetology team in Jayanagar, Bengaluru. Zero-cost EMI available.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact" variant="primary">
            Book A Consultation →
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
