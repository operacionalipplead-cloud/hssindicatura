import React from 'react';
import Header from './components/Header';
import HeroCinematicHS from './components/HeroCinematicHS';
import AudienceCardsPremium from './components/AudienceCardsPremium';
import FounderBioSection from './components/FounderBioSection';
import FinancialGraphSection from './components/FinancialGraphSection';
import TestimonialsWaterfall from './components/TestimonialsWaterfall';
import ClarityDifferentiationSection from './components/ClarityDifferentiationSection';
import FooterCorporate from './components/FooterCorporate';

function App() {
  return (
    <div className="min-h-screen bg-[#031926] text-[#F0F4F8] overflow-x-hidden selection:bg-[#C9943C] selection:text-[#031926]">
      <Header />
      <main>
        <HeroCinematicHS />
        <AudienceCardsPremium />
        <FounderBioSection />
        <FinancialGraphSection />
        <TestimonialsWaterfall />
        <ClarityDifferentiationSection />
      </main>
      <FooterCorporate />
    </div>
  );
}

export default App;