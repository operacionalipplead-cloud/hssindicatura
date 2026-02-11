import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Resultados', href: '#results' },
    { name: 'O Gestor', href: '#authority' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#031926]/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Text Version */}
        <a href="#hero" className="block group">
           <span className="text-2xl md:text-3xl font-bold text-[#F0F4F8] tracking-wide group-hover:text-white transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
             HS Sindicatura
           </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#F0F4F8] hover:text-white text-sm font-medium transition-colors uppercase tracking-wide opacity-80 hover:opacity-100"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="relative px-6 py-2 border border-[#F0F4F8]/30 text-[#F0F4F8] font-medium text-sm rounded transition-all duration-300 hover:bg-[#F0F4F8] hover:text-[#031926] hover:border-transparent uppercase tracking-wide"
          >
            Diagnóstico Gratuito
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#F0F4F8]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#031926] border-t border-[#333333] p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#F0F4F8] hover:text-white text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 border border-[#F0F4F8]/30 text-[#F0F4F8] text-center font-bold rounded-sm hover:bg-[#F0F4F8] hover:text-[#031926]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;