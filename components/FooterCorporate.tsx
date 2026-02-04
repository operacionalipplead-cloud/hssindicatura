import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { COLORS } from '../constants';

const FooterCorporate: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-[#A9A9A9] pt-20 pb-10 border-t border-[#333333] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
               <img 
                 src="https://painel.lipplead.com/wp-content/uploads/2026/02/462322ab-d987-4ccd-9eda-b3e53ce71e45-_2_-removebg-preview.webp" 
                 alt="HS Sindicatura" 
                 className="h-16 w-auto object-contain"
               />
            </a>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Elevando o padrão da gestão condominial. Segurança jurídica, transparência financeira e valorização patrimonial para quem exige excelência.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <a href="#" className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center hover:bg-[#C9943C] hover:text-[#031926] transition-all">
                  <Instagram size={20} />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F0F4F8] font-semibold mb-6 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#hero" className="hover:text-[#C9943C] transition-colors">Início</a></li>
              <li><a href="#solutions" className="hover:text-[#C9943C] transition-colors">Soluções</a></li>
              <li><a href="#authority" className="hover:text-[#C9943C] transition-colors">O Gestor</a></li>
              <li><a href="#results" className="hover:text-[#C9943C] transition-colors">Resultados</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F0F4F8] font-semibold mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9943C] flex-shrink-0" />
                <span>11 93382-5442</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C9943C] flex-shrink-0" />
                <span>hssindicatura@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9943C] flex-shrink-0" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} HS Sindicatura. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-[#F0F4F8]">Privacidade</a>
             <a href="#" className="hover:text-[#F0F4F8]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCorporate;