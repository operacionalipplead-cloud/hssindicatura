import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { COLORS } from '../constants';

const HeroCinematicHS: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas Animation Logic (Hexagons)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 30 + 10;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.1 + 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.x < 0) this.x = (canvas?.width || 0);
        if (this.y > (canvas?.height || 0)) this.y = 0;
        if (this.y < 0) this.y = (canvas?.height || 0);
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = COLORS.gold_premium;
        ctx.lineWidth = 1;
        
        // Draw Hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (2 * Math.PI / 6) * i;
          const x_i = this.x + this.size * Math.cos(angle);
          const y_i = this.y + this.size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x_i, y_i);
          else ctx.lineTo(x_i, y_i);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 20; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#031926]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_hsj3h0hsj3h0hsj3-1-_1_.webp" 
          alt="HS Sindicatura Background" 
          className="w-full h-full object-cover"
        />
        {/* Light Overlay for basic readability without blurring the image details */}
        <div className="absolute inset-0 bg-[#031926]/30"></div>
      </div>

      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-40" />
      
      {/* Gradient Overlay for Text Readability - Reduced opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#031926]/20 via-[#031926]/40 to-[#031926] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-20">
        <div className="max-w-4xl opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
          <h2 className="text-[#C9943C] font-semibold tracking-widest text-sm md:text-base mb-4 uppercase">
            Gestão Condominial Premium
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F0F4F8] leading-tight mb-6 font-primary shadow-black drop-shadow-md">
            HS Sindicatura:<br />
            Gestão que Protege <br />
            <span className="text-[#C9943C]">Seu Patrimônio.</span>
          </h1>
          <p className="text-[#F0F4F8] text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed drop-shadow-md">
            Soluções de alta performance para Condomínios e Administradoras. 
            Rigor jurídico, compliance e a solidez que seu empreendimento exige.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#C9943C] to-[#E8B050] text-[#031926] font-bold text-lg rounded overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(201,148,60,0.4)] hover:shadow-[0_0_40px_rgba(201,148,60,0.6)] hover:scale-105"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
              <span className="relative flex items-center">
                Solicitar Proposta
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#authority"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F0F4F8]/20 text-[#F0F4F8] font-medium text-lg rounded hover:bg-[#F0F4F8]/10 transition-all duration-300 backdrop-blur-sm shadow-black drop-shadow-sm"
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