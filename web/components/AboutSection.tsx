import SectionHeading from "./SectionHeading";
import PhotoPanel from "./ui/PhotoPanel";
import ParallaxImage from "./ui/ParallaxImage";
import DirectionalCard from "./ui/DirectionalCard";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { interiorImage } from "@/lib/images";

export default function AboutSection() {
  return (
    <section aria-label="About Crown Celebrity Aesthetic" className="py-12 sm:py-16">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <DirectionalCard direction="left">
          <ParallaxImage
            src={interiorImage.src}
            alt={interiorImage.alt}
            aspect="aspect-[4/3] lg:aspect-[16/11]"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </DirectionalCard>

        <div className="flex flex-col justify-center">
          <SectionHeading
            kicker="About Us"
            title="A considered approach to skin, hair &amp; PMU"
            script="est. attention"
          />
          <Reveal>
            {/* AEO Inverted Pyramid Quotable Answer Block */}
            <p className="mt-6 max-w-lg font-grotesk text-[17px] leading-relaxed text-charcoal/85">
              Crown Celebrity Aesthetic is a premier consultation-led aesthetic clinic located in Jayanagar 9th Block, Bengaluru (Karnataka 560056) that provides autologous GFC &amp; PRP hair therapies, US FDA approved laser hair removal, and clinical medi-facials with 0% interest EMI options.
            </p>
            <p className="mt-4 max-w-lg font-grotesk text-[17px] leading-relaxed text-charcoal/75">
              With over 1,500+ documented clinical transformations, our certified trichologists and licensed cosmetologists deliver 45-minute customized sessions with 95%+ follicle preservation, strict sterile surgical-grade operatory hygiene, and ongoing diagnostic tracking.
            </p>
            <p className="mt-4 max-w-lg font-grotesk text-[17px] leading-relaxed text-charcoal/75">
              Alongside patient therapies, our IATAM Academy shares micro-pigmentation artistry and sterile techniques with the next generation of PMU professionals across India.
            </p>

            <div className="mt-8 divider-gold max-w-xs" />
            <div className="mt-8">
              <ButtonLink href="/about" variant="primary">
                Discover Our Approach →
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
