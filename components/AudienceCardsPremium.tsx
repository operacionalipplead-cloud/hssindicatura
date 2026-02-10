import React from 'react';
import { Building2, Briefcase, Users, ChevronRight } from 'lucide-react';
import { SegmentationCardProps } from '../types';

const Card: React.FC<SegmentationCardProps & { delay: string }> = ({ icon: Icon, title, description, delay }) => (
  <div 
    className={`group relative bg-[#F8FAFC] p-8 md:p-10 border border-[#E2E8F0] hover:border-[#C9943C] transition-all duration-500 rounded-xl hover:shadow-xl hover:shadow-[#031926]/5 flex flex-col items-start h-full opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] hover:-translate-y-2`}
    style={{ animationDelay: delay }}
  >
    <div className="mb-6 p-4 bg-white rounded-full shadow-sm border border-[#E2E8F0] group-hover:bg-[#031926] transition-colors duration-300">
      <Icon className="w-8 h-8 text-[#031926] group-hover:text-[#C9943C] transition-colors duration-300" />
    </div>
    <h3 className="text-2xl font-bold text-[#031926] mb-4 font-primary">
      {title}
    </h3>
    <p className="text-[#333333]/80 leading-relaxed">
      {description}
    </p>
    
    {/* Decorative hover line */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C9943C] transition-all duration-500 group-hover:w-full rounded-b-xl" />
  </div>
);

const AudienceCardsPremium: React.FC = () => {
  const cards = [
    {
      icon: Building2,
      title: "Para Condomínios",
      description: "Gestão completa com foco em redução de custos operacionais, manutenção preventiva e valorização patrimonial constante.",
    },
    {
      icon: Briefcase,
      title: "Para Administradoras",
      description: "Parceria estratégica com execução técnica impecável de assembleias, suporte jurídico e compliance rigoroso.",
    },
    {
      icon: Users,
      title: "Para Moradores",
      description: "Comunicação clara, transparência financeira total e um ambiente seguro e harmonioso para sua família.",
    },
  ];

  return (
    <section id="solutions" className="bg-white py-24 md:py-32 px-6 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031926] mb-6 font-primary">
            Soluções Personalizadas
          </h2>
          <div className="w-24 h-1 bg-[#C9943C] mx-auto rounded-full"></div>
          <p className="mt-6 text-[#333333] text-lg max-w-2xl mx-auto leading-relaxed">
            Estratégias desenhadas para atender as necessidades específicas de cada pilar da vida condominial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              {...card} 
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#C9943C] text-[#031926] font-bold text-lg rounded overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgba(201,148,60,0.3)] hover:shadow-[0_6px_25px_rgba(201,148,60,0.5)] hover:-translate-y-1"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
              <span className="relative flex items-center">
                Agende um Diagnóstico Gratuito
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AudienceCardsPremium;