import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');

// Read treatments.ts
const treatmentsContent = fs.readFileSync(path.join(webRoot, 'lib', 'treatments.ts'), 'utf8');

// Parse treatment slugs and names
const slugMatches = [...treatmentsContent.matchAll(/"?name"?:\s*"([^"]+)",\s*"?slug"?:\s*"([^"]+)"/g)];
const treatments = slugMatches.map(m => ({ name: m[1], slug: m[2] }));

// Read images.ts
const imagesContent = fs.readFileSync(path.join(webRoot, 'lib', 'images.ts'), 'utf8');

// Build pageImages map
const pageImages = {
  "/": [
    { src: "/logo.jpg", alt: "Crown Celebrity Aesthetic logo - Hair, Skin & PMU Clinic Bangalore" },
    { src: "/clinic/clinic-about-treatment-room.jpg", alt: "State-of-the-art clinical treatment suite at Crown Celebrity Aesthetic Jayanagar Bangalore" },
    { src: "/clinic/clinic-wall-posters.jpg", alt: "Clinical treatment specialties wall posters: Acne, Pigmentation, Medi Facials and Laser Hair Removal" },
    { src: "/treatments/hair-pillar.jpg", alt: "Scalp and hair restoration clinic equipment at Crown Celebrity Aesthetic" },
    { src: "/treatments/skin-pillar.jpg", alt: "Skin care and clinical aesthetics treatment suite" },
    { src: "/treatments/pmu-pillar.jpg", alt: "Permanent makeup and cosmetic micropigmentation procedure room" }
  ],
  "/about": [
    { src: "/clinic/clinic-about-treatment-room.jpg", alt: "Modern clinical procedure room at Crown Celebrity Aesthetic" },
    { src: "/about/team-member-1.png", alt: "Naziya Baig - Cosmetologist & Trichologist at Crown Celebrity Aesthetic" },
    { src: "/about/team-member-2.jpeg", alt: "Reehal Baig - Managing Director at Crown Celebrity Aesthetic" },
    { src: "/clinic/clinic-consultation-room.jpg", alt: "Patient consultation and diagnostic suite at Crown Celebrity Aesthetic Jayanagar" },
    { src: "/clinic/clinic-corridor.jpg", alt: "Certified clinic corridor at Crown Celebrity Aesthetic" }
  ],
  "/treatments": [
    { src: "/treatments/hair-pillar.jpg", alt: "Hair restoration treatments at Crown Celebrity Aesthetic" },
    { src: "/treatments/skin-pillar.jpg", alt: "Clinical dermatology and skin care treatments" },
    { src: "/treatments/aesthetics-pillar.jpg", alt: "Facial aesthetics and injectable treatments" },
    { src: "/treatments/pmu-pillar.jpg", alt: "Permanent makeup and aesthetic micropigmentation" }
  ],
  "/pmu-services": [
    { src: "/treatments/pmu-pillar.jpg", alt: "Permanent makeup precision clinic at Crown Celebrity Aesthetic" },
    { src: "/treatments/lip-tinting.jpg", alt: "Semi-permanent lip blush and tinting treatment" },
    { src: "/treatments/smp-hair.jpg", alt: "Scalp micropigmentation follicle replication procedure" }
  ],
  "/academy": [
    { src: "/clinic/clinic-consultation-room.jpg", alt: "IATAM Academy PMU training and certification suite in Bangalore" }
  ],
  "/contact": [
    { src: "/clinic/clinic-consultation-room.jpg", alt: "Crown Celebrity Aesthetic clinic reception and consultation desk" },
    { src: "/clinic/clinic-corridor.jpg", alt: "Crown Celebrity Aesthetic clinic entrance at 26th Main Rd Jayanagar" }
  ],
  "/results": [
    { src: "/clinic/clinic-procedure-suite.jpg", alt: "Clinical procedure results room at Crown Celebrity Aesthetic" }
  ],
  "/faq": [
    { src: "/clinic/clinic-consultation-room.jpg", alt: "Consultation desk for patient questions at Crown Celebrity Aesthetic" }
  ]
};

// Map each treatment's image
for (const t of treatments) {
  const route = `/treatments/${t.slug}`;
  // Look for treatment specific image
  const imgSlugMatch = imagesContent.match(new RegExp(`"${t.slug}":\\s*{\\s*src:\\s*"([^"]+)",\\s*alt:\\s*"([^"]+)"`, 'm'));
  if (imgSlugMatch) {
    pageImages[route] = [{ src: imgSlugMatch[1], alt: imgSlugMatch[2] }];
  } else {
    pageImages[route] = [{ src: `/treatments/${t.slug}.jpg`, alt: `${t.name} procedure at Crown Celebrity Aesthetic Bangalore` }];
  }
}

const dynamicRoutes = treatments.map(t => `/treatments/${t.slug}`);

const config = {
  domain: "https://www.crowncelebrity.com",
  outputDir: "public",
  excludePages: ["header", "footer", "nav", "partial", "404", "notfound", "admin", "handler", "api", "ajax", "webhook", "privacy", "terms"],
  dynamicRoutes,
  pageImages,
  authorityTerms: [
    "US FDA Approved",
    "FDA Approved",
    "IATAM",
    "International Academy of Trichology & Aesthetic Medicine",
    "Certified Trichologist",
    "Licensed Cosmetologist",
    "Autologous",
    "Trichology",
    "Sterile",
    "No Cost EMI",
    "Jayanagar",
    "Bengaluru",
    "Bangalore",
    "Karnataka",
    "ISO",
    "Norwood Scale",
    "Fitzpatrick",
    "registered",
    "certified",
    "licensed"
  ]
};

fs.writeFileSync(path.join(webRoot, 'seo-engine.config.json'), JSON.stringify(config, null, 2), 'utf8');
console.log(`Generated seo-engine.config.json with ${dynamicRoutes.length} dynamic routes and ${Object.keys(pageImages).length} page image mappings.`);
