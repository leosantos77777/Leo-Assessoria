import React from 'react';
import { motion } from 'motion/react';
import { PLANS } from '../data/portfolioData';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenDiagnostic: (planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="planos" className="py-24 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Formatos de Atuação
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight leading-tight mb-4">
            Como podemos trabalhar juntos.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto font-medium">
            Primeiro entendemos o gargalo. Depois definimos a estrutura necessária.
          </p>
        </div>

        {/* Pricing/Offer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-14">
          {PLANS.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#0f172a] border-2 border-blue-500 shadow-2xl shadow-blue-500/10 lg:-translate-y-2'
                    : 'bg-[#0c1018] border border-white/5 hover:border-white/20'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    {plan.tag}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block mb-1">
                      {plan.period}
                    </span>
                    <h3 className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">
                      {plan.description}
                    </p>
                  </div>

                  {/* Consultative Investment Note (Replaces hard prices) */}
                  <div className="py-4 px-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mb-1">
                      Investimento
                    </span>
                    <span className="text-xs text-white/80 font-medium leading-relaxed block">
                      Definido conforme o cenário e os objetivos do diagnóstico.
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80 font-medium">
                        <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  id={`plan-cta-${plan.id}`}
                  onClick={() => onOpenDiagnostic(plan.id)}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Advisory Transparency Disclaimer */}
        <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#0c1018] border border-white/5">
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-medium">
            O investimento depende do cenário, da estrutura necessária e dos objetivos identificados no diagnóstico inicial com Leonardo.
          </p>
        </div>

      </div>
    </section>
  );
};
