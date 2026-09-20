import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Building, Video, ArrowRight } from 'lucide-react';
import { profileImageBase64 } from '../assets/profileImageBase64';

interface LeonardoStoryProps {
  onOpenDiagnostic: () => void;
}

export const LeonardoStory: React.FC<LeonardoStoryProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="sobre" className="py-24 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Quem é Leonardo Santos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-4 leading-tight">
            Visão completa do funil: <br className="hidden sm:block" />
            <span className="text-blue-500">da oportunidade à receita.</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1018] border border-white/5 space-y-6">
              <p className="text-xl sm:text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white leading-snug">
                Eu não atuo apenas na geração de leads.
              </p>

              <p className="text-base text-white/70 leading-relaxed font-medium">
                Minha experiência passa por tráfego pago, CRM, qualificação, SDR e fechamento. Isso me permite olhar o funil inteiro: da primeira oportunidade até a venda.
              </p>

              <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-blue-400">+5 Anos</div>
                  <div className="text-xs text-white/50 font-bold uppercase tracking-wider mt-1">No mercado</div>
                </div>
                <div>
                  <div className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white">+5 Milhões</div>
                  <div className="text-xs text-white/50 font-bold uppercase tracking-wider mt-1">Gerados em receita</div>
                </div>
                <div>
                  <div className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white">+2 Milhões</div>
                  <div className="text-xs text-white/50 font-bold uppercase tracking-wider mt-1">Em verba gerida</div>
                </div>
              </div>
            </div>

            {/* Cases Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20 flex items-start gap-4">
                <div className="text-blue-400 shrink-0 mt-1">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Plena Pausa (Shark Tank)</h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Estratégia de tração e conversão validada com aprovação dos investidores.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20 flex items-start gap-4">
                <div className="text-blue-400 shrink-0 mt-1">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">LogSchool</h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Aquisição contínua para uma das referências educacionais de logística no país.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Card Profile */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0c1018] border border-white/5 p-8 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-xl shadow-blue-500/20 shrink-0">
                  <img 
                    src={profileImageBase64} 
                    alt="Leonardo Santos" 
                    className="w-full h-full object-cover bg-blue-600"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold font-['Space_Grotesk',sans-serif] text-white">Leonardo Santos</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mt-0.5">Assessoria de Vendas</div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-white/70 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                  <span>Alinhamento direto entre verba de mídia e fechamento.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                  <span>Operação desenhada para o porte da sua empresa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                  <span>Foco em receita e previsibilidade de caixa.</span>
                </li>
              </ul>

              <button
                onClick={onOpenDiagnostic}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <span>Falar diretamente comigo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
