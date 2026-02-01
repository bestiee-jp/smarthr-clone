import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ServicesMercari from "@/components/ServicesMercari";
import News from "@/components/News";
import CompanyLinks from "@/components/CompanyLinks";
import ContactSection from "@/components/ContactSection";
import CyanBackground from "@/components/CyanBackground";
import Footer from "@/components/Footer";
import { getAllNewsMetadata } from "@/lib/news";

export default function Home() {
  const newsItems = getAllNewsMetadata().slice(0, 4);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {/* Mission Section Wrapper with continuous cyan background */}
      <div style={{ position: 'relative', flex: '1 0 auto' }}>
        <CyanBackground />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Hero />
          <Mission />
        </div>
      </div>
      <ServicesMercari />
      <News newsItems={newsItems} />
      <CompanyLinks />
      <ContactSection />
      <Footer />
    </main>
  );
}
