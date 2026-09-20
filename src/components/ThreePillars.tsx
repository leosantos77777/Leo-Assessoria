import React from 'react';
import { motion } from 'motion/react';
import { Target, Database, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface ThreePillarsProps {
  onOpenDiagnostic: (planId?: string) => void;
}

export const ThreePillars: React.FC<ThreePillarsProps> = ({ onOpenDiagnostic }) => {
  const painPoints = [
    'Leads chegam e o atendimento demora.',
    'Follow-up depende da memória do vendedor.',
    'CRM existe, mas não orienta a operação.',
    'Marketing e comercial trabalham separados.',
    'Ninguém sabe exatamente onde a venda se perde.'
  ];

  const pillars = [
    {
      id: 'aquisicao',
      number: '01',
      title: 'Aquisição previsível',
      description: 'Atrair oportunidades qualificadas pelos canais que fazem sentido para o negócio.',
      icon: Target,
      tag: 'Topo do Funil'
    },
    {
      id: 'crm',
      number: '02',
      title: 'CRM e conversão',
      description: 'Organizar atendimento, follow-up, histórico e automações para nenhum lead depender da memória.',
      icon: Database,
      tag: 'Meio do Funil'
    },
    {
      id: 'comercial',
      number: '03',
      title: 'Processo comercial',
      description: 'Estruturar abordagem, rotina, indicadores e acompanhamento para aumentar a conversão.',
      icon: TrendingUp,
      tag: 'Fundo do Funil'
    }
  ];

  const methodSteps = [
    {
      step: '01',
      title: 'Diagnóstico',
      desc: 'Identificamos onde oportunidades e vendas estão sendo perdidas.'
    },
    {
      step: '02',
      title: 'Aquisição',
      desc: 'Organizamos os canais responsáveis por gerar demanda.'
    },
    {
      step: '03',
      title: 'CRM',
      desc: 'Estruturamos acompanhamento, follow-up e automações.'
    },
    {
      step: '04',
      title: 'Comercial',
      desc: 'Conectamos os leads ao processo de venda.'
    },
    {
      step: '05',
      title: 'Dados',
      desc: 'Medimos geração, conversão e receita para melhorar continuamente.'
    }
  ];

  return (
    <section id="solucao" className="py-24 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Bloco 1: Seção de Dor */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Diagnóstico de Gargalos</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-6 leading-tight">
            Seu problema pode não ser <span className="text-blue-500">falta de tráfego.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Se os leads chegam, mas atendimento, follow-up e comercial falham, colocar mais dinheiro em mídia apenas aumenta o desperdício.
          </p>

          {/* 5 Pontos de Dor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mb-8">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-[#0c1018] border border-white/5 flex items-start gap-3 hover:border-amber-500/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span className="text-sm font-medium text-white/80 leading-snug">
                  {pain}
                </span>
              </div>
            ))}
            <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-center sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Oportunidades perdidas no caminho
              </span>
            </div>
          </div>

          <p className="text-sm text-white/50 max-w-xl mx-auto font-medium">
            Se você reconheceu sua empresa em alguns desses pontos, provavelmente o gargalo não está apenas na geração de leads.
          </p>
        </div>

        {/* Bloco 2: 3 Pilares */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Os 3 Pilares
            </div>
            <h3 className="text-3xl sm:text-4xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight">
              Uma estrutura conectada para vender com previsibilidade.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-3xl bg-[#0c1018] border border-white/5 p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white/10">
                        {pillar.number}
                      </span>
                    </div>

                    <span className="inline-block px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-3">
                      {pillar.tag}
                    </span>

                    <h4 className="text-xl font-black font-['Space_Grotesk',sans-serif] text-white mb-3">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-white/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco 3: Método - Da oportunidade à venda */}
        <div className="rounded-3xl bg-[#0c1018] border border-white/5 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              Metodologia
            </div>
            <h3 className="text-3xl sm:text-4xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-3">
              Da oportunidade à venda.
            </h3>
            <p className="text-sm sm:text-base text-white/60">
              Uma operação conectada do topo ao fundo do funil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {methodSteps.map((step) => (
              <div 
                key={step.step}
                className="p-5 rounded-2xl bg-[#0f172a]/60 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black font-['Space_Grotesk',sans-serif] text-blue-500 block mb-2">
                    {step.step}
                  </span>
                  <h5 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h5>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-white/70 text-center sm:text-left">
              Quer entender onde está o principal gargalo da sua operação hoje?
            </span>
            <button
              onClick={() => onOpenDiagnostic()}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 shrink-0"
            >
              Quero diagnosticar minha operação
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
