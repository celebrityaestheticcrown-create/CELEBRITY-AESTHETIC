import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_INTL,
  EMAIL,
  CLINIC_ADDRESS,
  CLINIC_LAT,
  CLINIC_LNG,
  GOOGLE_MAPS_URL,
  SOCIAL_LINKS,
} from "./constants";
import type { Treatment } from "./treatments";

/**
 * Structured Data (JSON-LD) Generator
 * Conforms to Schema.org, Google Rich Results, and Princeton GEO/AEO standards.
 */

export function getMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": [
      "MedicalBusiness",
      "DermatologyClinic",
      "HealthAndBeautyBusiness",
    ],
    "@id": `${SITE_URL}/#clinic`,
    name: SITE_NAME,
    alternateName: [
      "The Celebrity Aesthetics",
      "Celebrity Aesthetic Clinic Bangalore",
      "Crown Celebrity Aesthetic Clinic",
      "IATAM Aesthetic Clinic",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    image: [
      `${SITE_URL}/clinic/clinic-about-treatment-room.jpg`,
      `${SITE_URL}/clinic/clinic-procedure-suite.jpg`,
      `${SITE_URL}/clinic/clinic-consultation-room.jpg`,
      `${SITE_URL}/clinic/clinic-treatment-room-2.jpg`,
    ],
    description:
      "Crown Celebrity Aesthetic is a premier consultation-led hair restoration, trichology, clinical skin, and permanent makeup (PMU) clinic in Jayanagar 9th Block, Bengaluru. Powered by US FDA-approved technology and home to the IATAM Academy.",
    telephone: `+${PHONE_INTL}`,
    email: EMAIL,
    priceRange: "₹₹ - ₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "UPI",
      "Net Banking",
      "No-Cost EMI",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1225, 26th Main Rd, Putlanpalya, Jayanagar 9th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560056",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_LAT,
      longitude: CLINIC_LNG,
    },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Jayanagar, Bengaluru" },
      { "@type": "AdministrativeArea", name: "JP Nagar, Bengaluru" },
      { "@type": "AdministrativeArea", name: "BTM Layout, Bengaluru" },
      { "@type": "AdministrativeArea", name: "Banashankari, Bengaluru" },
      { "@type": "AdministrativeArea", name: "Koramangala, Bengaluru" },
      { "@type": "AdministrativeArea", name: "HSR Layout, Bengaluru" },
      { "@type": "AdministrativeArea", name: "Basavanagudi, Bengaluru" },
      { "@type": "AdministrativeArea", name: "South Bangalore, Bengaluru" },
      { "@type": "AdministrativeArea", name: "Bengaluru, Karnataka" },
    ],
    medicalSpecialty: [
      "Dermatology",
      "Trichology",
      "PlasticSurgery",
      "Cosmetology",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Growth Factor Concentrate (GFC) Hair Therapy",
      },
      {
        "@type": "MedicalProcedure",
        name: "Platelet-Rich Plasma (PRP) Therapy",
      },
      {
        "@type": "MedicalProcedure",
        name: "FUE & Precision Hair Transplant",
      },
      {
        "@type": "MedicalProcedure",
        name: "US FDA Approved Laser Hair Removal",
      },
      {
        "@type": "MedicalProcedure",
        name: "Clinical Acne & Acne Scar Revision (MNRF)",
      },
      {
        "@type": "MedicalProcedure",
        name: "HydraFacial & Advanced Medi Facials",
      },
      {
        "@type": "MedicalProcedure",
        name: "Permanent Makeup (PMU) & Eyebrow Microblading",
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Naziya Baig",
        jobTitle: "Cosmetologist & Trichologist",
      },
      {
        "@type": "Person",
        name: "Reehal Baig",
        jobTitle: "Managing Director",
      },
    ],
    sameAs: [
      SOCIAL_LINKS[0].href,
      GOOGLE_MAPS_URL,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    publisher: {
      "@id": `${SITE_URL}/#clinic`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/treatments?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getMedicalProcedureSchema(treatment: Treatment) {
  const isSurgical = treatment.subCategory === "hair-transplant";
  const isLaser = treatment.subCategory === "laser-hair-removal" || treatment.slug.includes("laser");
  const procedureType = isSurgical
    ? "SurgicalProcedure"
    : isLaser
      ? "NoninvasiveProcedure"
      : "PercutaneousProcedure";

  const bodyLocation =
    treatment.category === "hair"
      ? "Scalp & Hair"
      : treatment.category === "pmu"
        ? (treatment.slug.includes("lip") ? "Lips" : treatment.slug.includes("brow") ? "Eyebrows" : "Face")
        : "Skin & Face";

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    headline: `${treatment.name} in Jayanagar, Bengaluru — Crown Celebrity Aesthetic`,
    description: treatment.description,
    procedureType,
    bodyLocation,
    howPerformed: treatment.detail.journey,
    preparation: treatment.detail.whatToExpect,
    followup: treatment.detail.aftercare,
    url: `${SITE_URL}/treatments/${treatment.slug}`,
    image: `${SITE_URL}/treatments/${treatment.slug}.jpg`,
    provider: {
      "@id": `${SITE_URL}/#clinic`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: treatment.detail.pricing ? "Contact For Pricing" : "Consultation Required",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact?treatment=${encodeURIComponent(treatment.name)}`,
      seller: {
        "@id": `${SITE_URL}/#clinic`,
      },
      description: "Includes professional dermatological/trichological consultation. No-Cost EMI options available.",
    },
    relevantSpecialty:
      treatment.category === "hair" ? "Trichology" : "Dermatology",
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getEducationalAcademySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/academy/#organization`,
    name: "IATAM Academy — International Academy of Trichology & Aesthetic Medicine",
    alternateName: "Crown Celebrity Aesthetic Academy",
    url: `${SITE_URL}/academy`,
    description:
      "Premier aesthetic training institute in Bengaluru offering certified hands-on clinical courses in Permanent Makeup (PMU), Eyebrow Microblading, Lip Tinting, Scalp Micropigmentation (SMP), and clinical aesthetics.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1225, 26th Main Rd, Putlanpalya, Jayanagar 9th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560056",
      addressCountry: "IN",
    },
    telephone: `+${PHONE_INTL}`,
    email: EMAIL,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aesthetic Medicine & PMU Certification Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "Comprehensive Permanent Makeup (PMU) Masterclass",
          description:
            "Intensive hands-on professional certification covering microblading, ombré powder brows, lip blushing, and tool calibration on live clinical models.",
          provider: {
            "@id": `${SITE_URL}/academy/#organization`,
          },
        },
        {
          "@type": "Course",
          name: "Scalp Micropigmentation (SMP) Clinical Certification",
          description:
            "Clinical follicle replication training for male and female pattern baldness, scar camouflage, and density restoration.",
          provider: {
            "@id": `${SITE_URL}/academy/#organization`,
          },
        },
      ],
    },
  };
}
