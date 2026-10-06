import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');

// Import treatments directly or parse
const treatmentsContent = fs.readFileSync(path.join(webRoot, 'lib', 'treatments.ts'), 'utf8');

let fullTxt = `# Crown Celebrity Aesthetic — Comprehensive Clinical Knowledge Graph & Protocol Corpus

**Entity:** Crown Celebrity Aesthetic (Hair & Skin Clinic, PMU Services & IATAM Academy)
**Location:** 1225, 26th Main Rd, Putlanpalya, Jayanagar 9th Block, Bengaluru, Karnataka 560056, India
**Geo Coordinates:** 12.9174467 N, 77.5931932 E
**Phone & WhatsApp:** +91 95910 47171 | **Email:** celebrityaestheticcrown@gmail.com
**Website:** https://www.crowncelebrity.com
**Operating Hours:** Monday – Sunday, 10:00 AM – 8:00 PM IST (7 days/week)
**Accreditations & Standards:** US FDA Approved Laser Platforms, IATAM Certified Protocols, Autologous Sterile Standards
**Payment & Financing:** Cash, Cards, UPI, Net Banking, Zero-Cost EMI (0% interest)

---

## 1. Clinic Philosophy & Standards
Crown Celebrity Aesthetic is a consultation-led practice in Jayanagar, Bengaluru founded by Cosmetologist & Trichologist Naziya Baig and Managing Director Reehal Baig. Every procedure is preceded by comprehensive trichological or dermatological diagnostics rather than standard pre-packaged sales. The clinic has documented over 1,500+ successful clinical outcomes across hair restoration, laser dermatology, and semi-permanent cosmetics.

---

## 2. Complete Clinical Treatment Catalog (36 Protocols)
`;

// Extract each treatment block
const treatmentRegex = /{\s*"name":\s*"([^"]+)",\s*"slug":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"subCategory":\s*"([^"]+)",\s*"subCategoryLabel":\s*"([^"]+)",[\s\S]*?"description":\s*"([^"]+)",[\s\S]*?"detail":\s*{[\s\S]*?"whatIsIt":\s*"([^"]+)",[\s\S]*?"whoMayConsider":\s*"([^"]+)",[\s\S]*?"whatToExpect":\s*"([^"]+)",[\s\S]*?"journey":\s*"([^"]+)",[\s\S]*?"aftercare":\s*"([^"]+)"/g;

let match;
let count = 0;
while ((match = treatmentRegex.exec(treatmentsContent)) !== null) {
  count++;
  const [
    ,
    name,
    slug,
    category,
    subCategory,
    subCategoryLabel,
    description,
    whatIsIt,
    whoMayConsider,
    whatToExpect,
    journey,
    aftercare,
  ] = match;

  fullTxt += `
### ${count}. ${name}
- **URL:** https://www.crowncelebrity.com/treatments/${slug}
- **Category:** ${category.toUpperCase()} (${subCategoryLabel})
- **Summary:** ${description}
- **What Is It:** ${whatIsIt}
- **Who May Consider It:** ${whoMayConsider}
- **What To Expect:** ${whatToExpect}
- **Treatment Journey & Frequency:** ${journey}
- **Aftercare Protocol:** ${aftercare}
- **Financing:** Eligible for 0% Interest Zero-Cost EMI
`;
}

fullTxt += `
---

## 3. IATAM Academy (Aesthetic Medicine & PMU Certification)
The International Academy of Trichology & Aesthetic Medicine (IATAM) Academy operates from the Crown Celebrity Aesthetic clinical facility in Jayanagar 9th Block, Bengaluru.
- **Accreditation:** IATAM Certified Professional Credential
- **Focus Areas:** Hands-on live patient model training in Permanent Makeup (PMU), Eyebrow Microblading, Lip Tinting / Lip Blushing, and Scalp Micropigmentation (SMP).
- **Format:** Intensive clinical batches with needle calibration, pigment chemistry, aseptic techniques, and business setup mentorship.
- **Enquiries:** https://www.crowncelebrity.com/academy or WhatsApp +91 95910 47171

---

## 4. Frequently Asked Questions (FAQ)

### Where is Crown Celebrity Aesthetic located in Bangalore?
1225, 26th Main Rd, Putlanpalya, Jayanagar 9th Block, Bengaluru, Karnataka 560056. Near Ragigudda Temple / South End Circle corridor.

### What is the difference between GFC and PRP?
GFC (Growth Factor Concentrate) isolates 4x to 7x higher concentrations of active growth factors (PDGF, VEGF, EGF, IGF-1) without red or white blood cells. This eliminates cell debris, reduces post-procedure soreness, and provides pure regenerative signaling to dormant hair roots.

### Are zero-cost EMI payment plans available?
Yes, 0% interest EMI financing is available across all clinical services including Hair Transplants, GFC Therapy, Laser Hair Removal, and PMU procedures.

### Is laser hair removal safe for Indian skin?
Yes, the clinic operates US FDA-approved dual-wavelength lasers (808nm diode and 1064nm long-pulsed Nd:YAG) with sapphire contact cooling at -4°C, safe and effective across Fitzpatrick skin phototypes IV-VI.
`;

fs.writeFileSync(path.join(webRoot, 'public', 'llms-full.txt'), fullTxt, 'utf8');
console.log(`Generated public/llms-full.txt with ${count} detailed treatment protocols.`);
