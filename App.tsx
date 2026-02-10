import React from 'react';
import Header from './components/Header';
import HeroCinematicHS from './components/HeroCinematicHS';
import AudienceCardsPremium from './components/AudienceCardsPremium';
import FounderBioSection from './components/FounderBioSection';
import FinancialGraphSection from './components/FinancialGraphSection';
import TestimonialsWaterfall from './components/TestimonialsWaterfall';
import ClarityDifferentiationSection from './components/ClarityDifferentiationSection';
import ContactSection from './components/ContactSection';
import FooterCorporate from './components/FooterCorporate';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#031926] text-[#F0F4F8] overflow-x-hidden selection:bg-[#C9943C] selection:text-[#031926]">
      <Header />
      <main>
        <HeroCinematicHS />
        
        {/* Step 1: Segmentation - Who is this for? */}
        <AudienceCardsPremium />
        
        {/* Step 2: The Hook - Hard Results */}
        <FinancialGraphSection />

        {/* Step 3: The Authority - Who guarantees this? */}
        <FounderBioSection />

        {/* Step 4: The 'How' - Methodology (Moved below Authority) */}
        <ClarityDifferentiationSection />
        
        {/* Step 5: Social Proof */}
        <TestimonialsWaterfall />
        
        {/* Step 6: Conversion */}
        <ContactSection />
      </main>
      
      <FloatingWhatsAppButton />
      <FooterCorporate />
    </div>
  );
}

export default App;