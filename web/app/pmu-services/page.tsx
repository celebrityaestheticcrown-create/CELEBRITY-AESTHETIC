import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TreatmentCard from "@/components/TreatmentCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import DirectionalCard from "@/components/ui/DirectionalCard";
import WordReveal from "@/components/ui/WordReveal";
import { getTreatmentsByCategory } from "@/lib/treatments";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Permanent Makeup (PMU) & Microblading Services Bangalore",
  description:
    "Explore clinical PMU services at Crown Celebrity Aesthetic in Jayanagar, Bengaluru: eyebrow microblading, ombré powder brows, lip tinting, and scalp micropigmentation (SMP).",
  keywords: [
    "PMU Bangalore",
    "permanent makeup Bangalore",
    "eyebrow microblading Jayanagar",
    "lip tinting Bangalore",
    "SMP scalp micropigmentation Bangalore",
    "semi permanent makeup cost Bangalore",
    "Crown Celebrity Aesthetic PMU",
  ],
  alternates: { canonical: "/pmu-services" },
  openGraph: {
    title: `PMU & Microblading Services — ${SITE_NAME}`,
    description:
      "Precision semi-permanent makeup, lip blushing, and scalp micropigmentation in Jayanagar 9th Block, Bengaluru.",
    url: `${SITE_URL}/pmu-services`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/treatments/pmu-pillar.jpg", alt: "Crown Celebrity Aesthetic PMU Suite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `PMU Services Bangalore — ${SITE_NAME}`,
    description: "Natural, long-lasting microblading, lip blush & SMP in Jayanagar, Bengaluru.",
    images: ["/treatments/pmu-pillar.jpg"],
  },
};

export default function PMUServicesPage() {
  const pmuTreatments = getTreatmentsByCategory("pmu");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "PMU Services", url: "/pmu-services" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-gold/20 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-8xl px-5 sm:px-8">
          <p className="font-grotesk text-[13px] font-semibold uppercase tracking-widest2 text-gold-dark">
            PMU Studio · Jayanagar 9th Block, Bengaluru
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold uppercase leading-tight text-charcoal sm:text-5xl">
            <WordReveal text="Permanent makeup, applied with precision" />
          </h1>
          <p className="mt-6 max-w-xl font-grotesk text-[17px] leading-relaxed text-charcoal/75">
            Our PMU services cover eyebrow microblading, lip tinting,
            micropigmentation and scalp micropigmentation (SMP) — each
            approached with a consultation first, so the final result reflects
            your natural aesthetics. Zero-cost EMI options available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact?treatment=PMU%20Consultation" variant="primary">
              Book A PMU Consultation →
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-8">
          <SectionHeading
            kicker="Our PMU Treatments"
            title="Specialized micro-pigment techniques"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pmuTreatments.map((treatment, i) => (
              <DirectionalCard key={treatment.slug} index={i} delay={i * 0.1}>
                <TreatmentCard treatment={treatment} />
              </DirectionalCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-sage py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Want to discuss what technique fits you?
          </h2>
          <p className="mt-3 font-grotesk text-base text-charcoal/70">
            Book an appointment with our specialist in Jayanagar, Bengaluru to preview pigment shades and mapping.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact?treatment=PMU%20Consultation" variant="primary">
              Schedule Your Consultation →
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
