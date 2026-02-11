import React from 'react';
import { FOUNDER_STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const FounderBioSection: React.FC = () => {
  return (
    <section id="authority" className="bg-[#F0F4F8] py-24 md:py-32 px-6 overflow-hidden scroll-mt-28 relative">
      {/* Background Watermark - Neutral */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#031926]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Text Content - Now on the LEFT (Order 1 on Desktop) */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#94a3b8] font-semibold tracking-widest uppercase text-xs md:text-sm flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#94a3b8]"></span>
                A Experiência por trás da HS
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#031926] font-primary leading-tight">
                Governança Corporativa aplicada ao seu Condomínio.
              </h2>
            </div>
            
            <div className="text-[#333333] text-base md:text-lg leading-relaxed text-justify space-y-4 font-light">
              <p>
                <strong className="text-[#031926] font-semibold">Danilo Ricardo Dias</strong> é fundador e CEO da HS Sindicatura, empresa especializada em gestão condominial estratégica, auditoria e otimização de processos. Administrador com MBA em Administração e Gestão, traz a rigidez dos ambientes corporativos de alta complexidade para a realidade do seu condomínio.
              </p>
              <p>
                A HS Sindicatura atua além da administração operacional. Como síndico profissional, Danilo adota uma gestão baseada em dados, transformando termos técnicos em **valorização patrimonial** tangível.
              </p>
            </div>

            <ul className="space-y-3 pt-4">
              {[
                "Redução de custos com renegociação estratégica",
                "Gestão de conflitos com foco em harmonia",
                "Transparência financeira em tempo real"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 group">
                  <div className="p-1 rounded-full bg-[#031926]/5 group-hover:bg-[#031926] transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#031926] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[#031926] font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Premium Stats Grid */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FOUNDER_STATS.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-r-lg border-l-4 border-[#031926] shadow-sm hover:shadow-xl hover:shadow-[#031926]/5 transition-all duration-300 group"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-[#031926] font-primary group-hover:scale-105 transition-transform origin-left">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-[#A9A9A9] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#333333]/70 leading-relaxed border-t border-[#E2E8F0] pt-2 mt-1">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Area - Now on the RIGHT (Order 2 on Desktop) */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Wrapper to control size and center everything including decorations */}
            <div className="relative w-full max-w-[550px]">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-[#031926]/30 bg-[#031926] aspect-[4/5] w-full group">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#031926] via-transparent to-transparent opacity-80 z-20"></div>
                   <img 
                     src="https://painel.lipplead.com/wp-content/uploads/2026/02/Design-sem-nome-_19_-1-_2_.webp" 
                     alt="Danilo Dias - Fundador" 
                     className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                   />
                   <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                      <div className="w-12 h-1 bg-white mb-4"></div>
                      <p className="text-[#F0F4F8] font-bold text-2xl font-primary tracking-wide">Danilo Ricardo Dias</p>
                      <p className="text-white/70 text-sm uppercase tracking-widest font-medium">Fundador & CEO</p>
                   </div>
                </div>
                
                {/* Decorative Geometric Elements - Now relative to the specific image wrapper */}
                <div className="absolute -top-6 -right-6 w-full h-full border border-[#031926]/30 rounded-lg z-0 hidden lg:block" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#031926] opacity-10 blur-2xl rounded-full z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderBioSection;