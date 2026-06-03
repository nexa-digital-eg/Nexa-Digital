import {
  ContactSection,
  CustomSystemsSection,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  HowItWorksSection,
  PackagesSection,
  PillarsSection,
  PortfolioSection,
  ServicesSection,
  TestimonialsSection,
  WhatsAppButton,
  WhyChooseUsSection,
} from "@/components/Sections";
import { getPackages, getServices } from "@/lib/content";

// Re-fetch content from the database at most every 30s so admin edits show up
// shortly after they're saved, without hitting Neon on every page view.
export const revalidate = 30;

export default async function Home() {
  const [services, packages] = await Promise.all([getServices(), getPackages()]);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <ServicesSection services={services} />
        <WhyChooseUsSection />
        <CustomSystemsSection />
        <HowItWorksSection />
        <PortfolioSection />
        <PackagesSection packages={packages} />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
