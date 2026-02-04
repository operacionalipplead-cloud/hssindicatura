import React, { useState, useEffect } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { COLORS } from '../constants';

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

const DynamicIllustration = ({ activeId }: { activeId: number }) => {
  const [visibleId, setVisibleId] = useState(activeId);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (activeId !== visibleId) {
      setOpacity(0);
      const timer = setTimeout(() => {
        setVisibleId(activeId);
        setOpacity(1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeId, visibleId]);

  const renderPath = (id: number) => {
    switch(id) {
      case 1: // Organização (Layers)
        return (
          <>
            <path d="M50 140 L150 140 L180 110 L80 110 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M50 100 L150 100 L180 70 L80 70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M50 60 L150 60 L180 30 L80 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="140" x2="50" y2="60" stroke="currentColor" strokeDasharray="4 4" opacity="0.4" />
            <line x1="150" y1="140" x2="150" y2="60" stroke="currentColor" strokeDasharray="4 4" opacity="0.4" />
            <line x1="180" y1="110" x2="180" y2="30" stroke="currentColor" strokeDasharray="4 4" opacity="0.4" />
          </>
        );
      case 2: // Saúde Financeira (Chart)
        return (
          <>
             <rect x="40" y="130" width="30" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <rect x="85" y="90" width="30" height="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <rect x="130" y="50" width="30" height="130" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <path d="M30 180 L170 180" stroke="currentColor" opacity="0.6" />
             <path d="M30 130 L170 50" stroke="currentColor" strokeDasharray="5 5" opacity="0.4" />
          </>
        );
      case 3: // Conflitos (Balance/Intersect)
        return (
          <>
            <circle cx="80" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
            <circle cx="120" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
            <path d="M100 40 V160" stroke="currentColor" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="100" cy="100" r="4" fill="currentColor" />
          </>
        );
      case 4: // Estratégia (Path/Target)
        return (
          <>
            <path d="M40 160 L80 120 L120 140 L160 40" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="160" r="4" fill="currentColor" />
            <circle cx="80" cy="120" r="4" fill="currentColor" />
            <circle cx="120" cy="140" r="4" fill="currentColor" />
            <circle cx="160" cy="40" r="6" stroke="currentColor" fill="none" />
            <circle cx="160" cy="40" r="2" fill="currentColor" />
          </>
        );
      case 5: // Valorização (Diamond/Structure)
        return (
          <>
            <path d="M100 20 L170 90 L100 180 L30 90 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M30 90 L170 90" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <path d="M100 20 L100 180" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <path d="M65 55 L135 55" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <path d="M65 135 L135 135" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </>
        );
      case 6: // Segurança Jurídica (Shield)
        return (
          <>
             <path d="M100 30 L160 60 V100 C160 145 100 180 100 180 C100 180 40 145 40 100 V60 L100 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <path d="M100 30 V180" stroke="currentColor" opacity="0.3" />
             <path d="M40 100 H160" stroke="currentColor" opacity="0.3" />
             <rect x="85" y="85" width="30" height="40" stroke="currentColor" fill="none" />
          </>
        );
      case 7: // Gestão de Contratos (Document)
        return (
          <>
            <rect x="50" y="30" width="100" height="140" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="70" y1="60" x2="130" y2="60" stroke="currentColor" strokeWidth="1" />
            <line x1="70" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="1" />
            <line x1="70" y1="120" x2="110" y2="120" stroke="currentColor" strokeWidth="1" />
            <path d="M120 130 L140 150 L160 110" stroke="currentColor" strokeWidth="1.5" fill="none" transform="translate(-20, 10)" />
          </>
        );
      case 8: // Comunicação (Network/Connect)
        return (
          <>
             <circle cx="100" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <circle cx="40" cy="150" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <circle cx="160" cy="150" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <line x1="100" y1="62" x2="40" y2="138" stroke="currentColor" strokeWidth="1" />
             <line x1="100" y1="62" x2="160" y2="138" stroke="currentColor" strokeWidth="1" />
             <line x1="40" y1="150" x2="160" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg 
      viewBox="0 0 200 200" 
      className="w-48 h-48 md:w-64 md:h-64 text-[#C9943C] transition-all duration-300 ease-in-out"
      style={{ opacity: opacity, transform: `scale(${opacity === 0 ? 0.95 : 1})` }}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g filter="url(#glow)">
        {renderPath(visibleId)}
      </g>
    </svg>
  );
};

const ClarityDifferentiationSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="bg-[#031926] py-24 px-6 md:px-12 border-t border-[#A9A9A9]/10 relative overflow-hidden">
      {/* Background Gradients for depth */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#000000]/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        
        {/* Left Column: Content */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-2 font-primary">
              Clareza e <br />
              <span className="italic font-light text-[#C9943C]">Diferenciação</span>
            </h2>
            <p className="text-[#A9A9A9] text-sm md:text-base mt-4 max-w-md border-l-2 border-[#C9943C] pl-4">
              Soluções completas para condomínios que não aceitam o "mais do mesmo".
            </p>
          </div>

          <div className="space-y-0">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              return (
                <div 
                  key={feature.id} 
                  className={`border-b border-[#333333] transition-all duration-500 ${isActive ? 'pb-6 pt-6 bg-[#333333]/10 -mx-4 px-4 rounded-sm' : 'py-4'}`}
                >
                  <button 
                    onClick={() => setActiveId(feature.id)}
                    className="w-full flex items-center justify-between group text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-xs font-bold font-mono transition-colors duration-300 ${isActive ? 'text-[#C9943C]' : 'text-[#333333]'}`}>
                        {String(feature.id).padStart(2, '0')}
                      </span>
                      <span className={`text-xl md:text-2xl font-medium font-primary transition-colors duration-300 ${isActive ? 'text-[#F0F4F8]' : 'text-[#A9A9A9] group-hover:text-[#F0F4F8]'}`}>
                        {feature.title}
                      </span>
                    </div>
                    <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                      {isActive ? (
                        <Minus className="text-[#C9943C] w-4 h-4" />
                      ) : (
                        <Plus className="text-[#333333] group-hover:text-[#C9943C] w-4 h-4 transition-colors" />
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
                      <div className="flex items-center gap-2 text-[#C9943C] text-xs font-bold tracking-widest uppercase">
                        <div className="w-6 h-[1px] bg-[#C9943C]"></div>
                        HS Padrão
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9943C] text-[#031926] font-bold text-lg rounded hover:bg-[#F0F4F8] hover:text-[#031926] transition-all duration-300 shadow-lg shadow-[#C9943C]/20 w-full md:w-auto group"
            >
              Falar com um Especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative hidden lg:flex items-start justify-center pt-12">
           <div className="sticky top-32 w-full max-w-md aspect-square bg-[#031926] rounded-xl border border-[#A9A9A9]/20 flex flex-col shadow-2xl shadow-black/50 backdrop-blur-sm">
              {/* Card Header/Controls */}
              <div className="p-4 flex gap-2 border-b border-[#A9A9A9]/10 bg-[#020F18]/50 rounded-t-xl">
                <div className="w-3 h-3 rounded-full border border-[#C9943C] bg-transparent"></div>
                <div className="w-3 h-3 rounded-full bg-[#333333]"></div>
                <div className="ml-auto text-[10px] text-[#333333] font-mono tracking-widest uppercase">
                    Módulo {String(activeId).padStart(2, '0')}
                </div>
              </div>
              
              {/* Card Body */}
              <div className="flex-1 flex items-center justify-center relative overflow-hidden group">
                 {/* Glow effect */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C9943C] opacity-[0.03] blur-[60px] rounded-full animate-pulse"></div>
                 
                 {/* Dynamic Wireframe */}
                 <div className="relative z-10">
                   <DynamicIllustration activeId={activeId} />
                 </div>

                 {/* Decorative grid lines */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ClarityDifferentiationSection;