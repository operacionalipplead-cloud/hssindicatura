import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroCinematicHS: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#031926]">
      {/* Background Image Layer - No Overlays/Effects */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img 
          src="https://painel.lipplead.com/wp-content/uploads/2026/02/Frame-427318903-2.jpg" 
          alt="HS Sindicatura Background Desktop" 
          className="w-full h-full object-cover hidden md:block"
        />
        {/* Mobile Image */}
        <img 
          src="https://painel.lipplead.com/wp-content/uploads/2026/02/Frame-427318905.png" 
          alt="HS Sindicatura Background Mobile" 
          className="w-full h-full object-cover block md:hidden"
        />
      </div>

      {/* Main Container - Flex layout for Logo and Text Card */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full py-28 md:py-32 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        
        {/* Logo Section - Standalone (No Background Blur) */}
        <div className="flex-shrink-0 opacity-0 animate-[fadeUp_1s_ease-out_forwards] flex justify-center">
          <img 
            src="https://painel.lipplead.com/wp-content/uploads/2026/02/462322ab-d987-4ccd-9eda-b3e53ce71e45-_2_-removebg-preview.webp" 
            alt="HS Sindicatura Logo" 
            className="w-40 md:w-[350px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content Section - Inside Blurred Card */}
        <div className="max-w-3xl w-full opacity-0 animate-[fadeUp_1s_ease-out_0.3s_forwards] bg-[#031926]/70 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#F0F4F8] leading-tight mb-6 font-primary drop-shadow-lg shadow-black">
            Gestão que Protege <br />
            <span className="text-[#F0F4F8]">Seu Patrimônio.</span>
          </h1>
          <p className="text-[#F0F4F8] text-base md:text-xl mb-8 font-light leading-relaxed drop-shadow-lg shadow-black mx-auto md:mx-0 max-w-2xl">
            Entregamos governança e alta performance. Gestão técnica com auditoria contínua e segurança jurídica para eliminar o improviso e potencializar seu patrimônio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Neutral White Button */}
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#F0F4F8] text-[#031926] font-bold text-lg rounded overflow-hidden transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-105 hover:bg-white"
            >
              <span className="relative flex items-center">
                Solicitar Proposta
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#authority"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F0F4F8]/30 text-[#F0F4F8] font-medium text-lg rounded hover:bg-[#F0F4F8]/10 transition-all duration-300 backdrop-blur-sm shadow-sm"
            >
              Conhecer o Gestor
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroCinematicHS;