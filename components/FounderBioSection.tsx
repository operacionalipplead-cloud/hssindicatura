import React from 'react';
import { FOUNDER_STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const FounderBioSection: React.FC = () => {
  return (
    <section id="authority" className="bg-[#F0F4F8] py-24 md:py-32 px-6 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#C9943C] font-semibold tracking-wider uppercase text-sm">
                A Experiência por trás da HS
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#031926] font-primary leading-tight">
                Governança Corporativa aplicada ao seu Condomínio.
              </h2>
            </div>
            
            <div className="text-[#333333] text-base md:text-lg leading-relaxed text-justify space-y-4">
              <p>
                <strong className="text-[#031926]">Danilo Ricardo Dias</strong> é fundador e CEO da HS Sindicatura, empresa especializada em gestão condominial estratégica, auditoria, reorganização administrativa e otimização de processos. Administrador com MBA em Administração e Gestão, construiu sua trajetória profissional atuando em grandes empresas e ambientes corporativos de alta complexidade, com sólida experiência em auditoria, consultoria, finanças, controles, processos e operações.
              </p>
              <p>
                Ao longo da carreira, atuou na análise de dados financeiros, reestruturação de processos, gestão de riscos, melhoria da eficiência operacional e apoio à tomada de decisões estratégicas, sempre com foco em resultados, governança e sustentabilidade financeira. Essa experiência corporativa é aplicada de forma prática na gestão condominial.
              </p>
              <p>
                A HS Sindicatura atua além da administração operacional tradicional, com foco na profissionalização da gestão de condomínios residenciais, comerciais e mistos, pautando sua atuação em transparência, responsabilidade técnica, controle financeiro rigoroso e visão estratégica. Como síndico profissional, Danilo adota uma gestão técnica, firme e orientada por dados, com comunicação clara e compromisso com a boa governança e a valorização do patrimônio coletivo.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {[
                "Redução de custos com renegociação estratégica",
                "Gestão de conflitos com foco em harmonia",
                "Transparência financeira em tempo real"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C9943C] flex-shrink-0" />
                  <span className="text-[#333333] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#A9A9A9]/30">
              {FOUNDER_STATS.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-[#031926] font-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#A9A9A9] uppercase tracking-wide font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Area */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-[#031926]/20 bg-white aspect-[4/5] max-w-md mx-auto lg:mr-0">
               <img 
                 src="https://painel.lipplead.com/wp-content/uploads/2026/02/DSC06995_converted-scaled.webp" 
                 alt="Danilo Dias - Fundador" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#031926] to-transparent p-8">
                  <p className="text-white font-bold text-xl font-primary">Danilo Dias</p>
                  <p className="text-[#C9943C] text-sm">Fundador & CEO</p>
               </div>
            </div>
            
            {/* Decorative Elements behind */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-[#C9943C]/20 rounded-full z-0 hidden lg:block" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C9943C]/10 rounded-full z-0 hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderBioSection;