import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GRAPH_DATA, EXPENSE_DATA } from '../constants';
import { TrendingUp, TrendingDown, ArrowRight, DollarSign, Activity } from 'lucide-react';

type ChartType = 'cash' | 'expense';

const FinancialGraphSection: React.FC = () => {
  const [activeChart, setActiveChart] = useState<ChartType>('cash');

  // Configuration based on active chart
  const content = {
    cash: {
      tag: "Case de Sucesso: Sunset View",
      title: <>Resultados <br /> Comprovados</>,
      description: "Visualização da evolução real de caixa através da nossa metodologia de gestão financeira austera e estratégica.",
      statLabel: "Crescimento Total",
      statValue: "+200%",
      statDetail: "▲ anual",
      statColor: "text-[#22c55e]",
      data: GRAPH_DATA,
      barColor: "#94a3b8", // Slate
      icon: TrendingUp,
      graphTitle: "Evolução de Caixa"
    },
    expense: {
      tag: "Eficiência Operacional",
      title: <>Redução de <br /> Despesas</>,
      description: "Análise detalhada do corte de custos supérfluos e renegociação de contratos sem perda de qualidade nos serviços.",
      statLabel: "Redução de Custos",
      statValue: "-26%",
      statDetail: "▼ jan a dez",
      statColor: "text-[#C9943C]", // Gold/Warning color for significant change
      data: EXPENSE_DATA,
      barColor: "#C9943C", // Gold
      icon: TrendingDown,
      graphTitle: "Despesas Mensais"
    }
  };

  const current = content[activeChart];
  const Icon = current.icon;

  return (
    <section id="results" className="bg-[#031926] py-24 md:py-32 px-6 relative overflow-hidden scroll-mt-28">
        {/* Neutral background glow */}
        <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0F4F8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Changed grid from cols-2 to cols-12 to allow asymmetrical split (4 cols text / 8 cols graph) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Text Content & Stats - Takes 4/12 (approx 33%) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#A9A9A9] uppercase tracking-widest text-xs font-bold">{current.tag}</span>
                <Icon className="text-[#F0F4F8] w-5 h-5" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-[#F0F4F8] mb-6 font-primary leading-tight min-h-[120px] md:min-h-fit transition-all duration-300">
                {current.title}
              </h2>
              
              <p className="text-[#A9A9A9] text-lg leading-relaxed mb-8 min-h-[84px]">
                {current.description}
              </p>

              {/* Toggle Buttons */}
              <div className="flex bg-[#333333]/50 p-1 rounded-lg border border-[#A9A9A9]/20 backdrop-blur-sm mb-10 w-full sm:w-auto">
                <button
                  onClick={() => setActiveChart('cash')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold transition-all duration-300 flex-1 sm:flex-none justify-center ${
                    activeChart === 'cash' 
                    ? 'bg-[#F0F4F8] text-[#031926] shadow-md' 
                    : 'text-[#A9A9A9] hover:text-[#F0F4F8] hover:bg-white/5'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  Caixa
                </button>
                <button
                  onClick={() => setActiveChart('expense')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold transition-all duration-300 flex-1 sm:flex-none justify-center ${
                    activeChart === 'expense' 
                    ? 'bg-[#C9943C] text-[#031926] shadow-md' 
                    : 'text-[#A9A9A9] hover:text-[#C9943C] hover:bg-white/5'
                  }`}
                >
                  <TrendingDown className="w-4 h-4" />
                  Despesas
                </button>
              </div>

              {/* Stat Box */}
              <div className="bg-[#333333]/50 p-6 rounded-lg border border-[#A9A9A9]/20 backdrop-blur-sm inline-block mb-10 w-full sm:w-auto">
                  <span className="block text-[#A9A9A9] text-sm font-medium uppercase tracking-wide mb-1">
                    {current.statLabel}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="block text-[#F0F4F8] text-4xl font-bold">{current.statValue}</span>
                    <span className={`${current.statColor} text-sm font-bold`}>{current.statDetail}</span>
                  </div>
              </div>

              {/* CTA Button */}
              <a 
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#031926] font-bold text-lg rounded overflow-hidden transition-all duration-300 shadow-lg hover:bg-[#E2E8F0] hover:translate-x-1 group w-full sm:w-auto"
              >
                <span className="relative flex items-center">
                  Quero atingir esses resultados
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <p className="text-[#A9A9A9] text-xs mt-6 opacity-60 max-w-sm">
                * Dados reais extraídos do relatório financeiro anual do Condomínio Sunset View (2023-2024).
              </p>
            </div>

            {/* RIGHT COLUMN: Graph Container - Takes 8/12 (approx 67%) */}
            <div className="lg:col-span-8 w-full h-[400px] md:h-[500px] bg-[#333333]/30 backdrop-blur-md border border-[#A9A9A9]/10 rounded-xl p-4 md:p-6 shadow-2xl relative group transition-all duration-500">
              {/* Header inside graph card */}
              <div className="absolute top-6 left-6 z-10 pointer-events-none">
                 <p className="text-[#F0F4F8] font-bold text-sm flex items-center gap-2">
                   {current.graphTitle}
                   <span className={`w-2 h-2 rounded-full ${activeChart === 'cash' ? 'bg-[#94a3b8]' : 'bg-[#C9943C]'} animate-pulse`} />
                 </p>
                 <p className="text-[#A9A9A9] text-xs">Jan - Dez (Análise Anual)</p>
              </div>

              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={current.data}
                  margin={{ top: 60, right: 10, left: 0, bottom: 5 }}
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
                      border: '1px solid rgba(255, 255, 255, 0.2)', 
                      borderRadius: '4px',
                      color: '#F0F4F8',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    itemStyle={{ color: '#F0F4F8' }}
                    formatter={(value: number) => [
                      `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
                      activeChart === 'cash' ? 'Saldo' : 'Despesa'
                    ]}
                  />
                  <Bar 
                    dataKey="value" 
                    fill={current.barColor}
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
    </section>
  );
};

export default FinancialGraphSection;