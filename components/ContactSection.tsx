import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Como funciona o processo de transição de gestão?",
    answer: "Nossa equipe assume a transição com um protocolo de 'Risco Zero'. Realizamos um diagnóstico documental e financeiro nas primeiras 48h, mapeamos contratos críticos e estabelecemos comunicação imediata com moradores e administradora atual, garantindo que o condomínio não fique acéfalo nem por um minuto."
  },
  {
    question: "A HS Sindicatura substitui a Administradora?",
    answer: "Não necessariamente. Atuamos como Síndico Profissional (Gestão Executiva). Podemos trabalhar com a sua administradora atual, cobrando SLAs rigorosos, ou sugerir parceiros homologados caso haja necessidade de mudança para otimização de custos e processos."
  },
  {
    question: "Qual a economia média gerada nos primeiros meses?",
    answer: "Historicamente, nossa gestão gera uma economia média de 15% a 20% nos custos operacionais nos primeiros 6 meses, através da revisão de contratos, correção de desperdícios e implementação de manutenção preventiva eficiente."
  },
  {
    question: "Como é o atendimento aos moradores?",
    answer: "Priorizamos a humanização com eficiência. Disponibilizamos canais diretos (WhatsApp Corporativo e E-mail com ticket), plantões presenciais programados e um gerente de conta dedicado. O morador nunca fica sem resposta."
  }
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-20 border-t border-[#E2E8F0] pt-16">
      <div className="text-center mb-10">
        <h3 className="flex items-center justify-center gap-2 text-[#94a3b8] font-semibold tracking-widest uppercase text-xs md:text-sm mb-3">
          <HelpCircle className="w-4 h-4" />
          Dúvidas Frequentes
        </h3>
        <h4 className="text-2xl md:text-3xl font-bold text-[#031926] font-primary">
          Ainda tem alguma questão?
        </h4>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden hover:border-[#031926]/20 transition-all duration-300 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F8FAFC] transition-colors text-left"
            >
              <span className={`font-medium text-sm md:text-base pr-4 ${openIndex === index ? 'text-[#031926]' : 'text-[#333333]'}`}>
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#031926] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#A9A9A9] flex-shrink-0" />
              )}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-0 text-[#333333] text-sm leading-relaxed border-t border-[#F0F4F8] mt-2">
                <div className="pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      value: "11 93382-5442",
      href: "tel:+5511933825442"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "hssindicatura@gmail.com",
      href: "mailto:hssindicatura@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      href: "#"
    }
  ];

  return (
    <section id="contact-form" className="bg-[#F8FAFC] py-24 px-6 relative overflow-hidden">
      {/* Sophisticated Background Elements - Neutral */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#031926]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#031926]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Context & Direct Contact */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-[#031926] font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#031926]"></span>
                Contato Exclusivo
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-[#031926] font-primary leading-tight mb-6">
                Pronto para elevar o nível do seu condomínio?
              </h1>
              <p className="text-[#333333] text-lg leading-relaxed mb-8 font-light">
                Agende um diagnóstico gratuito. Entenderemos suas necessidades específicas e apresentaremos um plano de gestão personalizado, focado em <span className="font-semibold text-[#031926]">transparência</span> e <span className="font-semibold text-[#031926]">valorização</span>.
              </p>
            </div>

            {/* WhatsApp CTA - Keeping green */}
            <div className="mb-12">
              <a 
                href="https://wa.me/5511933825442?text=Ol%C3%A1%2C%20estava%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1ebc51] text-white font-bold text-lg rounded shadow-lg shadow-green-500/20 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Conversar no WhatsApp
              </a>
              <p className="mt-3 text-sm text-[#333333]/60 italic font-light">
                Resposta rápida em horário comercial.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  className="flex items-start p-5 bg-white rounded border border-[#E2E8F0] hover:border-[#031926]/30 hover:shadow-lg hover:shadow-[#031926]/5 transition-all duration-300 group"
                >
                  <div className="bg-[#F0F4F8] p-3 rounded-full mr-4 group-hover:bg-[#031926] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#031926] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-[#A9A9A9] uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-[#031926] font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form - Sophisticated Look */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl shadow-[#031926]/5 border-t-4 border-[#031926]">
            <h3 className="text-2xl font-bold text-[#031926] mb-2 font-primary">
              Solicite uma Proposta
            </h3>
            <p className="text-sm text-[#333333]/60 mb-8 font-light">
              Preencha os dados abaixo para receber um contato oficial de nossa diretoria.
            </p>
            
            {isSuccess ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#031926]" />
                </div>
                <h4 className="text-2xl font-bold text-[#031926] mb-2">Solicitação Recebida</h4>
                <p className="text-[#333333]">Nossa equipe analisará seu perfil e entrará em contato em breve.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-[#031926] font-bold hover:text-[#031926]/80 transition-colors text-sm uppercase tracking-wide border-b border-[#031926] pb-1"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-[#031926]">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm focus:bg-white focus:ring-1 focus:ring-[#031926] focus:border-[#031926] outline-none transition-all placeholder:text-[#A9A9A9] text-[#031926]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-[#031926]">E-mail Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm focus:bg-white focus:ring-1 focus:ring-[#031926] focus:border-[#031926] outline-none transition-all placeholder:text-[#A9A9A9] text-[#031926]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide text-[#031926]">Telefone / Celular</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm focus:bg-white focus:ring-1 focus:ring-[#031926] focus:border-[#031926] outline-none transition-all placeholder:text-[#A9A9A9] text-[#031926]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-[#031926]">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente a situação do condomínio..."
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm focus:bg-white focus:ring-1 focus:ring-[#031926] focus:border-[#031926] outline-none transition-all placeholder:text-[#A9A9A9] text-[#031926] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full flex items-center justify-center px-8 py-4 bg-[#031926] text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-[#031926]/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg mt-4 overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando...
                    </span>
                  ) : (
                    <span className="relative flex items-center">
                      Solicitar Diagnóstico
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
                
                <p className="text-[10px] text-[#A9A9A9] text-center mt-4 uppercase tracking-wider">
                  Seus dados estão protegidos sob nossa política de privacidade.
                </p>
              </form>
            )}
          </div>
        </div>
        
        {/* Added FAQ Section below the main grid */}
        <FAQAccordion />

      </div>
    </section>
  );
};

export default ContactSection;