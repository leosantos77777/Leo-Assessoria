import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { LeadFormData } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPlan?: string;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  preSelectedPlan,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    businessName: '',
    monthlyRevenue: 'R$ 50 mil a R$ 100 mil',
    primaryChallenge: 'Estruturar marketing e vendas como um todo',
    timeline: 'Agora',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const planContext = preSelectedPlan ? `\n• *Interesse:* ${preSelectedPlan}` : '';
    const message = `*DIAGNÓSTICO DE OPERAÇÃO - LEONARDO ASSESSORIA*
----------------------------------------
• *Nome:* ${formData.name}
• *Empresa:* ${formData.businessName}
• *WhatsApp:* ${formData.phone}
• *Faturamento Mensal:* ${formData.monthlyRevenue}
• *Principal Desafio:* ${formData.primaryChallenge}
• *Quando pretende resolver:* ${formData.timeline}${planContext}
----------------------------------------
Olá Leonardo, acabei de preencher o diagnóstico no site e quero entender onde minha operação está perdendo vendas.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/553175239649?text=${encoded}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div
      id="diagnostic-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07090e]/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="diagnostic-modal-content"
        className="relative w-full max-w-xl bg-[#0c1018] border border-blue-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-diagnostic-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white">
              Informações Recebidas!
            </h3>
            <p className="text-sm text-white/60 max-w-sm mx-auto">
              Abrindo o WhatsApp do Leonardo Santos para dar sequência ao seu diagnóstico...
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-white/5 pb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                Diagnóstico de Operação
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk',sans-serif] tracking-tight text-white mb-2 leading-tight">
                Quero entender onde minha operação está perdendo vendas.
              </h3>
              <p className="text-xs sm:text-sm text-white/60">
                Preencha os dados e fale diretamente com Leonardo.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome da sua empresa"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/80 mb-1">
                  WhatsApp (com DDD) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/80 mb-1">
                  Faturamento mensal aproximado
                </label>
                <select
                  value={formData.monthlyRevenue}
                  onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                >
                  <option>Até R$ 50 mil</option>
                  <option>R$ 50 mil a R$ 100 mil</option>
                  <option>R$ 100 mil a R$ 300 mil</option>
                  <option>R$ 300 mil a R$ 1 milhão</option>
                  <option>Acima de R$ 1 milhão</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/80 mb-1">
                  Principal desafio hoje
                </label>
                <select
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                >
                  <option>Gerar mais oportunidades</option>
                  <option>Melhorar a qualidade dos leads</option>
                  <option>Organizar CRM e follow-up</option>
                  <option>Melhorar conversão do comercial</option>
                  <option>Estruturar marketing e vendas como um todo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/80 mb-1">
                  Quando pretende resolver
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                >
                  <option>Agora</option>
                  <option>Nos próximos 30 dias</option>
                  <option>Nos próximos 3 meses</option>
                  <option>Ainda estou pesquisando</option>
                </select>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  type="submit"
                  id="submit-diagnostic-btn"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero falar com o Leonardo</span>
                </button>
                <p className="text-[10px] text-center text-white/40 mt-3">
                  Atendimento direto e sigiloso com Leonardo Santos.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
