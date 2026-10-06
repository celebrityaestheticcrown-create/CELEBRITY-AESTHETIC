import type { Metadata } from "next";
import "./globals.css";
import { grotesk, displayFont, accentFont } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SmoothScroll from "@/components/SmoothScroll";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  CLINIC_ADDRESS,
  PHONE_DISPLAY,
  EMAIL,
} from "@/lib/constants";
import { getMedicalClinicSchema, getWebSiteSchema } from "@/lib/schema";
import { treatments } from "@/lib/treatments";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Hair & Skin Clinic, PMU & IATAM Academy Bangalore`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Crown Celebrity Aesthetic is a premier clinic in Jayanagar 9th Block, Bengaluru specializing in autologous GFC & PRP hair therapy, US FDA approved laser treatments, clinical facials, PMU, and IATAM Academy certifications.",
  keywords: [
    "Crown Celebrity Aesthetic",
    "hair clinic Bangalore",
    "skin clinic Jayanagar",
    "GFC hair treatment Bangalore",
    "PRP treatment Jayanagar",
    "hair transplant Bangalore",
    "US FDA laser hair removal Bangalore",
    "acne scar treatment Jayanagar",
    "hydrafacial Bangalore",
    "permanent makeup Bangalore",
    "lip tinting Bangalore",
    "microblading Jayanagar",
    "IATAM Academy",
    "dermatologist Jayanagar 9th Block",
    "trichologist Bangalore",
    "No Cost EMI aesthetic treatments",
  ],
  authors: [
    { name: "Naziya Baig", url: SITE_URL },
    { name: "Reehal Baig" },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} — Premier Hair & Skin Clinic in Bengaluru`,
    description:
      "Consultation-led hair restoration, US FDA approved clinical skin treatments, PMU, and IATAM Academy training in Jayanagar 9th Block, Bangalore.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/clinic/clinic-about-treatment-room.jpg",
        width: 1200,
        height: 630,
        alt: "Crown Celebrity Aesthetic State-of-the-Art Treatment Room in Jayanagar Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Hair, Skin & PMU Clinic Bangalore`,
    description:
      "Advanced autologous GFC, hair transplants, US FDA laser treatments & PMU studio in Jayanagar 9th Block, Bengaluru.",
    images: ["/clinic/clinic-about-treatment-room.jpg"],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru, Karnataka, India",
    "geo.position": "12.917447;77.593193",
    ICBM: "12.917447, 77.593193",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clinicSchema = getMedicalClinicSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${displayFont.variable} ${accentFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory font-grotesk text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Navbar />
        <div className="flex min-h-full flex-1 flex-col overflow-x-hidden">
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingContact />

        {/* Noscript Pre-rendered Crawler & Accessibility Fallback for AI Search Bots */}
        <noscript>
          <div style={{ padding: "30px", background: "#f8f6f0", color: "#1a1a1a", borderTop: "2px solid #c9a86a" }}>
            <h2>Crown Celebrity Aesthetic — Hair & Skin Clinic, PMU Services & IATAM Academy</h2>
            <p>
              Crown Celebrity Aesthetic is a premier consultation-led aesthetic clinic located in Jayanagar 9th Block, Bengaluru, Karnataka 560056.
              Led by Cosmetologist & Trichologist Naziya Baig and Managing Director Reehal Baig, the clinic specializes in autologous GFC therapy,
              PRP hair treatments, precision hair transplantation, US FDA approved triple-wavelength laser hair removal, MNRF scar revision,
              HydraFacial medi-facials, and semi-permanent makeup (PMU) alongside professional certifications at the IATAM Academy.
            </p>
            <p>
              <strong>Clinic Address:</strong> {CLINIC_ADDRESS}<br />
              <strong>Phone:</strong> {PHONE_DISPLAY} | <strong>Email:</strong> {EMAIL}<br />
              <strong>Hours:</strong> Monday – Sunday, 10:00 AM – 8:00 PM (IST)<br />
              <strong>Financing:</strong> Zero-cost EMI options available across all clinical services.
            </p>
            <h3>Complete Clinical Treatment Catalog ({treatments.length} Procedures):</h3>
            <ul>
              {treatments.map((t) => (
                <li key={t.slug} style={{ marginBottom: "8px" }}>
                  <a href={`/treatments/${t.slug}`}><strong>{t.name}</strong></a>: {t.description}
                </li>
              ))}
            </ul>
          </div>
        </noscript>
      </body>
    </html>
  );
}
