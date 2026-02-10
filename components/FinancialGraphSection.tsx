import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GRAPH_DATA, COLORS } from '../constants';
import { TrendingUp, ArrowRight } from 'lucide-react';

const FinancialGraphSection: React.FC = () => {
  return (
    <section id="results" className="bg-[#031926] py-24 md:py-32 px-6 relative overflow-hidden scroll-mt-28">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9943C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row-reverse items-start md:items-end justify-between mb-16 gap-8">
            
            {/* Text Content - Now Right Aligned (Flex Row Reverse handles the swap visually on desktop) */}
            <div className="max-w-2xl text-left md:text-right w-full">
              <div className="flex items-center gap-2 mb-4 justify-start md:justify-end">
                <span className="text-[#A9A9A9] uppercase tracking-widest text-xs font-bold">Case de Sucesso: Sunset View</span>
                <TrendingUp className="text-[#C9943C] w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#F0F4F8] mb-4 font-primary">
                Resultados Comprovados
              </h2>
              <p className="text-[#A9A9A9] text-lg ml-auto">
                Visualização da evolução real de caixa através da nossa metodologia de gestão financeira austera e estratégica.
              </p>
            </div>

            {/* Stat Box */}
            <div className="bg-[#333333]/50 p-4 rounded border border-[#A9A9A9]/20 backdrop-blur-sm min-w-[200px]">
                <span className="block text-[#A9A9A9] text-sm">Crescimento Total</span>
                <span className="block text-[#C9943C] text-3xl font-bold">+200%</span>
            </div>
          </div>

          {/* Graph Container */}
          <div className="w-full h-[400px] md:h-[500px] bg-[#333333]/30 backdrop-blur-md border border-[#A9A9A9]/10 rounded-xl p-4 md:p-8 shadow-2xl">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={GRAPH_DATA}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#A9A9A9" strokeOpacity={0.1} vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#A9A9A9" 
                  tick={{ fill: '#A9A9A9', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#A9A9A9" 
                  tick={{ fill: '#A9A9A9', fontSize: 12 }} 
                  tickFormatter={(value) => `R$ ${value / 1000}k`}
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ 
                    backgroundColor: '#031926', 
                    border: '1px solid rgba(201, 148, 60, 0.3)', 
                    borderRadius: '4px',
                    color: '#F0F4F8'
                  }}
                  itemStyle={{ color: '#C9943C' }}
                  formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Saldo']}
                />
                <Bar 
                  dataKey="value" 
                  fill={COLORS.gold_premium} 
                  radius={[4, 4, 0, 0]}
                  animationDuration={2000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-12 text-center md:text-right">
            <a 
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 py-3 bg-[#C9943C] text-[#031926] font-bold text-lg rounded overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(201,148,60,0.4)] hover:shadow-[0_0_40px_rgba(201,148,60,0.6)] hover:scale-105 group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
              <span className="relative flex items-center">
                Quero atingir esses resultados
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <p className="text-center md:text-right text-[#A9A9A9] text-xs mt-8 opacity-60">
            * Dados reais extraídos do relatório financeiro anual do Condomínio Sunset View (2023-2024).
          </p>
        </div>
    </section>
  );
};

export default FinancialGraphSection;