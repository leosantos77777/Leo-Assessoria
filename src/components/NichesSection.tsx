import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NICHES } from '../data/portfolioData';
import { ShoppingBag, Sparkles, Smile, Car, Scale, GraduationCap, HeartHandshake, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface NichesSectionProps {
  onOpenDiagnostic: (nicheName?: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingBag,
  Sparkles,
  Smile,
  Car,
  Scale,
  GraduationCap,
  HeartHandshake,
  Building2,
};

export const NichesSection: React.FC<NichesSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0]);

  const targetAudiencePoints = [
    'Já possuem operação em andamento.',
    'Querem gerar mais oportunidades.',
    'Precisam organizar CRM e follow-up.',
    'Querem melhorar a conversão comercial.',
    'Buscam crescer com processo, não improviso.'
  ];

  return (
    <section id="nichos" className="py-24 bg-[#0a0d14] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Bloco: Para quem é */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Perfil de Atendimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-8">
            Para empresas que já vendem, <br />
            <span className="text-blue-500">mas querem mais previsibilidade.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left max-w-4xl mx-auto">
            {targetAudiencePoints.map((point, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl bg-[#0c1018] border border-white/5 flex items-center gap-3 text-sm font-medium text-white/80"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-blue-400 sm:col-span-2 lg:col-span-1">
              Foco em Operações Reais
            </div>
          </div>
        </div>

        {/* Bloco: Segmentos com Experiência */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-4xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-3">
              Experiência comprovada em múltiplos mercados.
            </h3>
            <p className="text-sm text-white/60">
              Cada segmento possui dinâmicas próprias de aquisição e conversão. Veja como adaptamos o processo:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Niches List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NICHES.map((niche) => {
                const Icon = ICON_MAP[niche.icon] || Sparkles;
                const isSelected = selectedNiche.id === niche.id;

                return (
                  <button
                    key={niche.id}
                    id={`niche-btn-${niche.id}`}
                    onClick={() => setSelectedNiche(niche)}
                    className={`text-left p-4 rounded-2xl transition-all duration-200 flex items-start gap-3 border ${
                      isSelected
                        ? 'bg-blue-600/10 border-blue-500/50 text-white'
                        : 'bg-[#0c1018] border-white/5 hover:border-white/20 text-white/70'
                    }`}
                  >
                    <div className={`shrink-0 mt-0.5 ${isSelected ? 'text-blue-400' : 'text-white/40'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-['Space_Grotesk',sans-serif] text-white">
                        {niche.name}
                      </h4>
                      <p className="text-xs text-white/50 mt-0.5 line-clamp-1">
                        {niche.typicalResult}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Niche Strategy Display */}
            <div className="lg:col-span-5 sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedNiche.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl bg-[#0c1018] border border-blue-500/20 p-7 shadow-xl space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 p-2.5 rounded-xl text-blue-400">
                      {React.createElement(ICON_MAP[selectedNiche.icon] || Sparkles, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block">
                        Estrutura do Segmento
                      </span>
                      <h4 className="text-xl font-bold font-['Space_Grotesk',sans-serif] text-white">
                        {selectedNiche.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    {selectedNiche.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block">
                      Direcionamento:
                    </span>
                    <p className="text-xs text-white/80 font-medium">
                      {selectedNiche.strategyHighlight}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300 block mb-1">
                      Métrica de Referência:
                    </span>
                    <div className="text-base font-bold text-white">
                      {selectedNiche.typicalResult}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenDiagnostic(selectedNiche.name)}
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Diagnosticar Meu Segmento
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
