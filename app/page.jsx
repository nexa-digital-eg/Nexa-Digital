import {
  ContactSection,
  CustomSystemsSection,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  HowItWorksSection,
  PackagesSection,
  PortfolioSection,
  ServicesSection,
  TestimonialsSection,
  WhatsAppButton,
  WhyChooseUsSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CustomSystemsSection />
        <HowItWorksSection />
        <PortfolioSection />
        <PackagesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
