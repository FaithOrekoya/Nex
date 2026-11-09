import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { OurServices } from './components/OurServices';
import { HowItWorks } from './components/HowItWorks';
import { OurProcess } from './components/OurProcess';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModals';
import { UserRole } from './types';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalRole, setContactModalRole] = useState<UserRole>('civilian');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const openContactWithRole = (role: UserRole) => {
    setContactModalRole(role);
    setIsContactModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B2833] font-sans selection:bg-[#FFB703] selection:text-[#0B2833]">
      
      {/* 1. HEADER (Transivia Reference) */}
      <Header
        onGetStartedClick={() => openContactWithRole('civilian')}
        onNavigate={scrollToSection}
      />

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <Hero
          onExploreClick={() => scrollToSection('services')}
          onPartnerClick={() => openContactWithRole('carrier')}
        />

        {/* 3. ABOUT US */}
        <AboutUs />

        {/* 4. OUR SERVICES */}
        <OurServices
          onServiceSelect={() => openContactWithRole('civilian')}
        />

        {/* 5. HOW IT WORKS */}
        <HowItWorks />

        {/* 6. OUR PROCESS (with conceptual software dashboard & network visual) */}
        <OurProcess />

        {/* 7. OUR PROJECTS / SOLUTIONS SHOWCASE */}
        <SolutionsShowcase
          onCategoryClick={(category) => {
            const role: UserRole = category === 'carrier' ? 'carrier' : category === 'government' ? 'federal' : 'civilian';
            openContactWithRole(role);
          }}
        />

        {/* 8. WHY CHOOSE NEVEX */}
        <WhyChooseUs />

        {/* 9. FAQ */}
        <FAQ
          onContactClick={() => openContactWithRole('civilian')}
        />

        {/* Interactive In-Page Contact & Freight Intake */}
        <ContactSection
          initialRole={contactModalRole}
        />

        {/* 12. FINAL CTA */}
        <FinalCTA
          onGetStartedClick={() => openContactWithRole('civilian')}
        />
      </main>

      {/* 13. FOOTER */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onNavigate={scrollToSection}
      />

      {/* Pop-up Modals for Direct Dispatch & Legal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialRole={contactModalRole}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
