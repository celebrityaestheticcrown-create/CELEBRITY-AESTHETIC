import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PhotoPanel from "@/components/ui/PhotoPanel";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { academyImage } from "@/lib/images";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getEducationalAcademySchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IATAM Academy — PMU & Clinical Aesthetic Training Bangalore",
  description:
    "IATAM Academy at Crown Celebrity Aesthetic in Jayanagar, Bengaluru offers certified hands-on clinical training in Permanent Makeup (PMU), Eyebrow Microblading, Lip Blush, and SMP.",
  keywords: [
    "IATAM Academy Bangalore",
    "PMU training Bangalore",
    "microblading course Bangalore",
    "permanent makeup certification Jayanagar",
    "SMP course Bangalore",
    "lip blushing training Bangalore",
    "aesthetic training academy Karnataka",
  ],
  alternates: { canonical: "/academy" },
  openGraph: {
    title: `IATAM Academy — PMU & Aesthetics Training Bangalore`,
    description:
      "Hands-on clinical training in permanent makeup, eyebrow microblading, and clinical scalp micropigmentation in Jayanagar 9th Block, Bengaluru.",
    url: `${SITE_URL}/academy`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/clinic/clinic-consultation-room.jpg", alt: "IATAM Academy Training Suite Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `IATAM Academy Bangalore — Aesthetic & PMU Certification`,
    description: "Hands-on professional PMU, Microblading, and SMP certifications on live clinical models.",
    images: ["/clinic/clinic-consultation-room.jpg"],
  },
};

const focusAreas = [
  {
    title: "Hands-On Clinical Practice",
    text: "Structured learning designed around live patient models and real micro-pigmentation equipment rather than theory alone.",
  },
  {
    title: "Precision Micro-Pigment Technique",
    text: "Rigorous training in machine speed calibration, needle depths, skin undertone matching, and sterile clinical operatory standards.",
  },
  {
    title: "Professional Accreditation",
    text: "IATAM recognized certification equipping practitioners with business setup guidance, client consultation protocols, and portfolio building.",
  },
];

const courseHighlights = [
  { label: "Campus Location", value: "Jayanagar 9th Block, Bengaluru" },
  { label: "Curriculum Focus", value: "PMU, Microblading, Lip Blush & SMP" },
  { label: "Certification", value: "IATAM Certified Credential" },
  { label: "Batch Format", value: "Small Intimate Batches (Hands-On)" },
];

export default function AcademyPage() {
  const academySchema = getEducationalAcademySchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Academy", url: "/academy" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(academySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-gold/20 py-16 sm:py-24">
        <div className="mx-auto grid max-w-8xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-grotesk text-[13px] font-semibold uppercase tracking-widest2 text-gold-dark">
              IATAM Academy · Crown Celebrity Aesthetic
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-tight text-charcoal sm:text-5xl">
              <WordReveal text="Training in precision PMU & aesthetic artistry" />
            </h1>
            <p className="mt-6 max-w-lg font-grotesk text-[17px] leading-relaxed text-charcoal/75">
              The International Academy of Trichology & Aesthetic Medicine (IATAM) Academy in Bengaluru delivers masterclasses designed to empower future leaders in semi-permanent makeup, eyebrow microblading, and clinical aesthetics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact?treatment=IATAM%20Academy%20Course%20Enquiry" variant="primary">
                Enquire About The Academy →
              </ButtonLink>
              <WhatsAppButton message="Hello Crown Celebrity Aesthetic, I would like to enquire about IATAM Academy certification courses." />
            </div>
          </Reveal>
          <Reveal>
            <PhotoPanel
              src={academyImage.src}
              alt={academyImage.alt}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-gold/20 py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-8">
          <SectionHeading kicker="Curriculum Pillars" title="Clinical training built around three pillars" />
          <RevealStagger className="mt-12 grid grid-cols-1 divide-y divide-gold/15 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            {focusAreas.map((area) => (
              <RevealItem key={area.title} className="py-6 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0">
                <span className="block h-px w-8 bg-gold" />
                <h3 className="mt-4 font-display text-xl font-bold uppercase text-charcoal">
                  {area.title}
                </h3>
                <p className="mt-3 font-grotesk text-base leading-relaxed text-charcoal/70">
                  {area.text}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-8">
          <SectionHeading
            kicker="Course Specifications"
            title="Academy program overview"
            description="Our courses in Jayanagar, Bengaluru blend theoretical dermatological hygiene with intensive live model clinical sessions."
          />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-6 border-t border-gold/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {courseHighlights.map((field) => (
              <RevealItem key={field.label} className="border-l-2 border-gold/40 pl-4">
                <dt className="font-grotesk text-[13px] font-semibold uppercase tracking-widest2 text-charcoal/60">
                  {field.label}
                </dt>
                <dd className="mt-2 font-grotesk text-base font-medium text-charcoal">
                  {field.value}
                </dd>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-sage-dark py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-ivory sm:text-3xl">
            Ready to master PMU & Aesthetic Medicine?
          </h2>
          <p className="mt-3 font-grotesk text-base text-ivory/80">
            Contact our admissions team today to request current syllabus modules, fee structures, and upcoming batch dates in Bangalore.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact?treatment=IATAM%20Academy%20Course%20Enquiry" variant="ivoryOnDark">
              Request Course Brochure →
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
