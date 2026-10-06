/**
 * Authoritative Princeton GEO & trust strip under the hero marquee
 * Anchors certified clinical claims, verified numbers, and regulatory technology.
 */
const trustItems = [
  "1,500+ Documented Clinical Outcomes",
  "US FDA Approved Laser Platforms",
  "100% Autologous GFC & PRP Therapy",
  "95%+ Follicle Preservation Rate",
  "0% Interest Zero-Cost EMI Available",
  "Jayanagar 9th Block, Bengaluru",
  "Certified Trichologists & IATAM Academy",
  "Open 7 Days a Week · 10 AM – 8 PM",
];

export default function TrustBar() {
  return (
    <div
      aria-label="Why clients choose us"
      className="mt-4 overflow-hidden border-y-4 border-gold bg-charcoal py-2.5 sm:mt-6 sm:py-3"
    >
      <div className="marquee-track flex w-max shrink-0 items-center gap-10">
        {[...trustItems, ...trustItems].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= trustItems.length}
            className="flex items-center gap-10 whitespace-nowrap font-grotesk text-sm font-semibold uppercase tracking-widest2 text-gold-light"
          >
            <span>{item}</span>
            <span aria-hidden="true" className="text-base text-gold-light/50">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
