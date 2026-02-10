import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Roberto Almeida",
    role: "Conselheiro Fiscal | Cond. Grand Ray",
    text: "A auditoria inicial da HS identificou gargalos que ignorávamos há anos. Em 6 meses, reduzimos a taxa condominial em 15% mantendo a qualidade.",
    rating: 5
  },
  {
    id: 2,
    name: "Ricardo V.",
    role: "Morador | Cond. Jardins",
    text: "Sinto uma segurança que não tinha antes. A equipe da portaria está muito mais atenta e cordial após o treinamento implementado pela HS.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Paula G.",
    role: "Subsíndica | Ed. Metropolitan",
    text: "A mediação de conflitos é excelente. Resolveram uma questão de barulho que se arrastava há anos com muito tato e firmeza.",
    rating: 5
  },
  {
    id: 4,
    name: "Mariana Costa",
    role: "Moradora | Residencial Vivert",
    text: "A transparência financeira é total. O app é atualizado em tempo real e qualquer dúvida é respondida prontamente. Recomendo de olhos fechados.",
    rating: 5
  },
  {
    id: 5,
    name: "Eng. Marcos T.",
    role: "Morador e Eng. Civil",
    text: "Como engenheiro, aprovo o rigor técnico nas manutenções. O plano de manutenção preventiva realmente funciona e evita gastos emergenciais.",
    rating: 5
  },
  {
    id: 6,
    name: "Sofia Pertrini",
    role: "Conselheira | Cond. Sky View",
    text: "Profissionalismo raro no mercado. A HS não traz apenas problemas, traz três opções de solução viáveis tecnicamente e financeiramente.",
    rating: 5
  },
  {
    id: 7,
    name: "Lúcia F.",
    role: "Conselheira Consultiva",
    text: "A comunicação é clara e objetiva. Os comunicados semanais nos mantêm informados de tudo sem sobrecarregar o grupo de mensagens.",
    rating: 5
  },
  {
    id: 8,
    name: "Dr. Fernando S.",
    role: "Advogado e Morador",
    text: "O compliance e o rigor jurídico da HS Sindicatura elevaram o nível do nosso patrimônio. Valorização real do imóvel em menos de um ano.",
    rating: 5
  },
  {
    id: 9,
    name: "Pedro H.",
    role: "Morador | Cond. Altos da Vila",
    text: "Mudei recentemente e o processo foi super organizado. A cartilha de boas-vindas e o apoio da gestão fizeram toda a diferença na minha chegada.",
    rating: 5
  },
  {
    id: 10,
    name: "Sônia R.",
    role: "Ex-Síndica | Cond. Vivendas",
    text: "Passei o bastão para a HS com tranquilidade. O Danilo demonstra um conhecimento profundo da legislação e gestão de pessoas.",
    rating: 5
  },
  {
    id: 11,
    name: "Carlos Eduardo",
    role: "Gerente Predial | Complexo Empresarial",
    text: "A gestão de contratos é impecável. Os SLAs são cobrados rigorosamente e a manutenção preventiva deixou de ser uma dor de cabeça.",
    rating: 5
  },
  {
    id: 12,
    name: "Juliana Mello",
    role: "Síndica Moradora | Ed. Horizonte",
    text: "Pela primeira vez temos assembleias produtivas e sem gritaria. A postura técnica traz uma segurança jurídica que nunca tivemos.",
    rating: 5
  },
];

const TestimonialCard: React.FC<{ data: typeof TESTIMONIALS[0] }> = ({ data }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(3,25,38,0.08)] border border-[#E2E8F0] hover:border-[#C9943C]/50 transition-colors duration-300 flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className="p-2 bg-[#F0F4F8] rounded-full">
        <Quote className="w-5 h-5 text-[#C9943C]" />
      </div>
      <div className="flex gap-1">
        {[...Array(data.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#C9943C] fill-[#C9943C]" />
        ))}
      </div>
    </div>
    <p className="text-[#333333] leading-relaxed italic text-sm md:text-base">
      "{data.text}"
    </p>
    <div className="pt-4 border-t border-[#F0F4F8]">
      <p className="font-bold text-[#031926] font-primary">{data.name}</p>
      <p className="text-xs text-[#A9A9A9] uppercase tracking-wide font-semibold mt-1">{data.role}</p>
    </div>
  </div>
);

const TestimonialsWaterfall: React.FC = () => {
  // Split data into 3 columns for desktop, 1 for mobile (handled by CSS grid)
  const col1 = TESTIMONIALS.slice(0, 4);
  const col2 = TESTIMONIALS.slice(4, 8);
  const col3 = TESTIMONIALS.slice(8, 12);

  // Helper to double content for infinite scroll illusion
  const double = (arr: typeof TESTIMONIALS) => [...arr, ...arr];

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 overflow-hidden relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#031926] mb-4 font-primary">
          O Que Dizem Nossos Clientes
        </h2>
        <div className="w-24 h-1 bg-[#C9943C] mx-auto rounded-full mb-6"></div>
        <p className="text-[#333333]/70 text-lg max-w-2xl mx-auto">
          A validação do nosso trabalho através da satisfação de quem vive a transformação no dia a dia.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto h-[700px] overflow-hidden">
        {/* Gradients to hide start/end of scroll */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          
          {/* Column 1 - Up */}
          <div className="flex flex-col gap-6 animate-scroll-up">
            {double(col1).map((item, idx) => <TestimonialCard key={`c1-${idx}`} data={item} />)}
          </div>

          {/* Column 2 - Down (Slower) */}
          <div className="hidden md:flex flex-col gap-6 animate-scroll-down">
            {double(col2).map((item, idx) => <TestimonialCard key={`c2-${idx}`} data={item} />)}
          </div>

          {/* Column 3 - Up */}
          <div className="hidden md:flex flex-col gap-6 animate-scroll-up-delayed">
            {double(col3).map((item, idx) => <TestimonialCard key={`c3-${idx}`} data={item} />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .animate-scroll-up {
          animation: scrollUp 60s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 70s linear infinite;
        }
        .animate-scroll-up-delayed {
          animation: scrollUp 65s linear infinite;
        }

        /* Pause on hover for readability */
        .grid:hover .flex {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsWaterfall;