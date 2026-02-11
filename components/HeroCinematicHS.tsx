import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroCinematicHS: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#031926]">
      {/* Background Image Layer - No Overlays/Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://painel.lipplead.com/wp-content/uploads/2026/02/Frame-427318897-5.jpg" 
          alt="HS Sindicatura Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-20 flex justify-end">
        <div className="max-w-4xl opacity-0 animate-[fadeUp_1s_ease-out_forwards] bg-[#031926]/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F0F4F8] leading-tight mb-6 font-primary drop-shadow-lg shadow-black">
            HS Sindicatura:<br />
            Gestão que Protege <br />
            <span className="text-[#F0F4F8]">Seu Patrimônio.</span>
          </h1>
          <p className="text-[#F0F4F8] text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed drop-shadow-lg shadow-black">
            Soluções de alta performance para Condomínios e Administradoras. 
            Rigor jurídico, compliance e a solidez que seu empreendimento exige.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
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