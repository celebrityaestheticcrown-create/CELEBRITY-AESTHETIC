import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PhotoPanel from "@/components/ui/PhotoPanel";
import { ButtonLink } from "@/components/ui/Button";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import DirectionalCard from "@/components/ui/DirectionalCard";
import WordReveal from "@/components/ui/WordReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQAccordion from "@/components/FAQAccordion";
import {
  categoryLabels,
  getTreatmentBySlug,
  treatments,
} from "@/lib/treatments";
import { getTreatmentImage } from "@/lib/images";
import {
  getMedicalProcedureSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Treatment Not Found" };

  const image = getTreatmentImage(treatment);
  const title = `${treatment.name} in Bangalore — ${SITE_NAME}`;
  const description = `${treatment.description} Consult certified trichologists & cosmetologists at Crown Celebrity Aesthetic in Jayanagar 9th Block, Bengaluru. No-cost EMI available.`;

  return {
    title,
    description,
    keywords: [
      treatment.name,
      `${treatment.name} Bangalore`,
      `${treatment.name} Jayanagar`,
      `${treatment.name} cost in Bangalore`,
      treatment.subCategoryLabel,
      categoryLabels[treatment.category],
      "Crown Celebrity Aesthetic",
      "No Cost EMI aesthetic treatments Bangalore",
    ],
    alternates: { canonical: `/treatments/${treatment.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/treatments/${treatment.slug}`,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: image.src,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const image = getTreatmentImage(treatment);
  const procedureSchema = getMedicalProcedureSchema(treatment);
  const faqSchema = getFAQSchema(treatment.detail.faq);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Treatments", url: "/treatments" },
    { name: categoryLabels[treatment.category], url: `/treatments?category=${treatment.category}` },
    { name: treatment.name, url: `/treatments/${treatment.slug}` },
  ]);

  const whatsappMessage = `Hello Crown Celebrity Aesthetic, I would like to consult about ${treatment.name} at your Jayanagar clinic.`;

  return (
    <article className="py-16 sm:py-24">
      {/* Schema.org Micro-Data Graphs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center space-x-2 text-[13px] uppercase tracking-widest2 text-charcoal/60">
          <Link href="/" className="hover:text-gold-dark">Home</Link>
          <span>/</span>
          <Link href="/treatments" className="hover:text-gold-dark">Treatments</Link>
          <span>/</span>
          <Link href={`/treatments?category=${treatment.category}`} className="hover:text-gold-dark">
            {categoryLabels[treatment.category]}
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">{treatment.name.split("—")[0].trim()}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <DirectionalCard direction="left">
            <PhotoPanel
              src={image.src}
              alt={image.alt}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
            />
          </DirectionalCard>

          <DirectionalCard direction="right">
            <p className="font-grotesk text-[13px] font-semibold uppercase tracking-widest2 text-gold-dark">
              {categoryLabels[treatment.category]} · {treatment.subCategoryLabel}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl">
              <WordReveal text={treatment.name} />
            </h1>

            {/* AEO Inverted Pyramid Answer & Overview Block */}
            <div className="mt-5 rounded-lg border border-gold/30 bg-gold/5 p-5">
              <p className="font-grotesk text-[13px] font-bold uppercase tracking-wider text-gold-dark">
                Clinical Overview & Indication
              </p>
              <p className="mt-2 font-grotesk text-[16px] leading-relaxed text-charcoal/85">
                {treatment.description}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gold/20 pt-3 text-[13px] text-charcoal/80 sm:grid-cols-3">
                <div>
                  <span className="block font-semibold text-charcoal">Location</span>
                  <span>Jayanagar 9th Block, Bangalore</span>
                </div>
                <div>
                  <span className="block font-semibold text-charcoal">Standard Protocol</span>
                  <span>Personalized Consultation</span>
                </div>
                <div>
                  <span className="block font-semibold text-charcoal">Financing</span>
                  <span>0% Interest EMI Available</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href={`/contact?treatment=${encodeURIComponent(treatment.name)}`}
                variant="primary"
              >
                Book A Consultation →
              </ButtonLink>
              <WhatsAppButton message={whatsappMessage} />
            </div>
            <p className="mt-4 font-grotesk text-[13px] font-semibold uppercase tracking-wide text-gold-dark">
              Zero-Cost EMI Financing Available · Consultation-Led Practice
            </p>
          </DirectionalCard>
        </div>

        <RevealStagger className="mt-16 grid gap-10 border-t border-gold/20 pt-14 sm:grid-cols-2">
          <RevealItem>
            <DetailBlock title="What Is It?" text={treatment.detail.whatIsIt} />
          </RevealItem>
          <RevealItem>
            <DetailBlock
              title="Who May Consider It?"
              text={treatment.detail.whoMayConsider}
            />
          </RevealItem>
          <RevealItem>
            <DetailBlock
              title="What To Expect"
              text={treatment.detail.whatToExpect}
            />
          </RevealItem>
          <RevealItem>
            <DetailBlock
              title="The Treatment Journey"
              text={treatment.detail.journey}
            />
          </RevealItem>
          <RevealItem>
            <DetailBlock title="Aftercare" text={treatment.detail.aftercare} />
          </RevealItem>
          {treatment.detail.additionalServices && (
            <RevealItem>
              <DetailBlock
                title="Additional Services"
                text={treatment.detail.additionalServices}
              />
            </RevealItem>
          )}
          {treatment.detail.pricing && (
            <RevealItem>
              <DetailBlock title="Pricing & Financing" text={treatment.detail.pricing} />
            </RevealItem>
          )}
        </RevealStagger>
      </div>

      <FAQAccordion items={treatment.detail.faq} showDisclaimer />
    </article>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold uppercase text-charcoal">
        {title}
      </h2>
      <p className="mt-3 font-grotesk text-base leading-relaxed text-charcoal/70">
        {text}
      </p>
    </div>
  );
}
