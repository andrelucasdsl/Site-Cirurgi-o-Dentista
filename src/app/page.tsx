import { HeroSection } from "@/components/HeroSection";
import { ProfessionalsSection } from "@/components/ProfessionalsSection";
import { TreatmentsGrid } from "@/components/TreatmentsGrid";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { AppointmentSteps } from "@/components/AppointmentSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactSection } from "@/components/ContactSection";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export default function Home() {
  // Dados estruturados para mecanismos de busca (SEO local).
  // openingHours fica de fora de propósito: os horários ainda são pendentes.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. do Haiti, 127",
      addressLocality: "Teixeira de Freitas",
      addressRegion: "BA",
      postalCode: "45990-301",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Teixeira de Freitas",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <ProfessionalsSection />
      <TreatmentsGrid />
      <DifferentialsSection />
      <AppointmentSteps />
      <FAQAccordion />
      <ContactSection />
    </>
  );
}
