import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const features = [
  { id: 1, title: 'Organização', description: 'Gestão técnica e profissional com processos definidos e auditáveis para garantir a ordem administrativa.' },
  { id: 2, title: 'Saúde Financeira', description: 'Auditoria constante, previsão orçamentária assertiva e redução sistemática da inadimplência.' },
  { id: 3, title: 'Redução de Conflitos', description: 'Mediação especializada e imparcial, focada em regras claras e boa convivência.' },
  { id: 4, title: 'Estratégia', description: 'Planejamento de longo prazo, valorizando o patrimônio e antecipando necessidades.' },
  { id: 5, title: 'Valorização', description: 'Manutenção preventiva rigorosa que garante a estética e a funcionalidade do imóvel.' },
  { id: 6, title: 'Segurança Jurídica', description: 'Compliance total e análise minuciosa de contratos para mitigar riscos.' },
  { id: 7, title: 'Gestão de Contratos', description: 'Fiscalização de SLAs de terceiros e renegociação para otimização de custos.' },
  { id: 8, title: 'Comunicação', description: 'Transparência absoluta através de canais digitais e relatórios gerenciais claros.' },
];

interface FeatureItemProps {
  feature: typeof features[0];
  isActive: boolean;
  onToggle: () => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, isActive, onToggle }) => {
  return (
    <div 
      className={`border-b border-[#333333] transition-all duration-500 ${isActive ? 'pb-6 pt-6 bg-[#333333]/10 -mx-4 px-4 rounded-sm' : 'py-4'}`}
    >
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between group text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <span className={`text-xs font-bold font-mono transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#333333]'}`}>
            {String(feature.id).padStart(2, '0')}
          </span>
          <span className={`text-lg md:text-xl font-medium font-primary transition-colors duration-300 ${isActive ? 'text-[#F0F4F8]' : 'text-[#A9A9A9] group-hover:text-[#F0F4F8]'}`}>
            {feature.title}
          </span>
        </div>
        <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
          {isActive ? (
            <Minus className="text-white w-4 h-4" />
          ) : (
            <Plus className="text-[#333333] group-hover:text-white w-4 h-4 transition-colors" />
          )}
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
          isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden pl-10 md:pl-12">
          <p className="text-[#A9A9A9] leading-relaxed mb-4 text-sm md:text-base">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ClarityDifferentiationSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const leftFeatures = features.slice(0, 4);
  const rightFeatures = features.slice(4, 8);

  return (
    <section className="bg-[#031926] py-24 px-6 md:px-12 border-t border-[#A9A9A9]/10 relative overflow-hidden">
      {/* Background Gradients for depth */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#000000]/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Centered */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4 font-primary">
            Clareza e <span className="italic font-light text-[#F0F4F8]/70">Diferenciação</span>
          </h2>
          <div className="w-24 h-1 bg-[#F0F4F8]/20 mx-auto rounded-full mb-6"></div>
          <p className="text-[#A9A9A9] text-lg max-w-2xl mx-auto">
            Soluções completas para condomínios que não aceitam o "mais do mesmo".
            Entenda nossos pilares de atuação.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
          {/* Left Column (1-4) */}
          <div className="space-y-0">
             {leftFeatures.map((feature) => (
               <FeatureItem 
                 key={feature.id} 
                 feature={feature} 
                 isActive={activeId === feature.id}
                 onToggle={() => toggleItem(feature.id)}
               />
             ))}
          </div>

          {/* Right Column (5-8) */}
          <div className="space-y-0">
             {rightFeatures.map((feature) => (
               <FeatureItem 
                 key={feature.id} 
                 feature={feature} 
                 isActive={activeId === feature.id}
                 onToggle={() => toggleItem(feature.id)}
               />
             ))}
          </div>
        </div>

        {/* CTA - Centered */}
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#031926] font-bold text-lg rounded overflow-hidden transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-105 w-full md:w-auto"
          >
            <span className="relative flex items-center">
              Falar com um Especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ClarityDifferentiationSection;