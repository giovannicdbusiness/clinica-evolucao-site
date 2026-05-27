import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Lock, Shield, MessageCircle } from 'lucide-react';

interface TriagemFormProps {
  title: string;
  subtitle: string;
  clinicName: string;
  whatsappUrl: string;
  whatsappPhone: string;
  primaryColor?: string;
  primaryDark?: string;
  surface?: string;
  ctaColor?: string;
}

const motivoLabels: Record<string, string> = {
  dependencia_quimica: 'Dependência química',
  alcoolismo: 'Alcoolismo',
  transtornos_psiquiatricos: 'Transtornos psiquiátricos',
  depressao_ansiedade: 'Depressão / Ansiedade',
  moradia_assistida: 'Moradia assistida',
  outro: 'Outro',
};
const generoLabels: Record<string, string> = {
  masculino: 'Masculino',
  feminino: 'Feminino',
  outro: 'Outro',
};

export default function TriagemForm({
  title,
  subtitle,
  clinicName,
  whatsappUrl,
  whatsappPhone,
  primaryColor = '#5A9EA8',
  primaryDark = '#4A8C96',
  surface = '#F4F4F0',
  ctaColor = '#F59E0B',
}: TriagemFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    motivo: '',
    idade: '',
    genero: '',
    historico: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMessage = (): string => {
    const lines = [
      `Olá! Acabei de preencher a triagem no site da ${clinicName}.`,
      '',
      `*Nome:* ${formData.nome}`,
      `*Telefone:* ${formData.telefone}`,
    ];
    if (formData.email) lines.push(`*E-mail:* ${formData.email}`);
    lines.push(`*Idade:* ${formData.idade}`);
    lines.push(`*Gênero:* ${generoLabels[formData.genero] ?? formData.genero}`);
    lines.push(`*Motivo:* ${motivoLabels[formData.motivo] ?? formData.motivo}`);
    if (formData.historico) {
      lines.push('');
      lines.push(`*Histórico:* ${formData.historico}`);
    }
    lines.push('');
    lines.push('Gostaria de uma avaliação inicial.');
    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

    // Pequeno delay pra o usuário ver feedback de envio
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        motivo: '',
        idade: '',
        genero: '',
        historico: '',
      });
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 500);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:border-transparent transition-all outline-none';
  const focusStyle = {
    '--tw-ring-color': primaryColor,
  } as React.CSSProperties;

  return (
    <section id="triagem" className="py-14 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            <Lock size={12} /> Atendimento confidencial
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-7 md:p-12 shadow-elevation-2 relative overflow-hidden border border-gray-100"
          style={{ backgroundColor: surface }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 opacity-[0.08] rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
            style={{ backgroundColor: primaryColor }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.08] rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"
            style={{ backgroundColor: ctaColor }}
          />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center relative z-10"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 ring-4 ring-green-50">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Triagem enviada com sucesso!
              </h3>
              <p className="text-gray-600 max-w-md mb-2">
                Abrimos o WhatsApp da {clinicName} com seus dados pré-preenchidos. Caso a janela
                não tenha aberto, clique no botão abaixo para conversar com a nossa equipe.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                style={{ backgroundColor: '#22C55E' }}
              >
                <MessageCircle size={18} /> Abrir WhatsApp da {clinicName}
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 font-semibold hover:underline cursor-pointer text-sm"
                style={{ color: primaryColor }}
              >
                Enviar nova triagem
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10" style={focusStyle}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome completo do paciente <span style={{ color: ctaColor }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Ex: João da Silva"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone / WhatsApp <span style={{ color: ctaColor }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail para contato
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="idade" className="block text-sm font-semibold text-gray-700 mb-2">
                    Idade <span style={{ color: ctaColor }}>*</span>
                  </label>
                  <input
                    type="number"
                    id="idade"
                    name="idade"
                    required
                    min="1"
                    max="120"
                    value={formData.idade}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Ex: 35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="genero"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Gênero do paciente <span style={{ color: ctaColor }}>*</span>
                  </label>
                  <select
                    id="genero"
                    name="genero"
                    required
                    value={formData.genero}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="motivo"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Motivo principal <span style={{ color: ctaColor }}>*</span>
                  </label>
                  <select
                    id="motivo"
                    name="motivo"
                    required
                    value={formData.motivo}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="dependencia_quimica">Dependência química</option>
                    <option value="alcoolismo">Alcoolismo</option>
                    <option value="transtornos_psiquiatricos">Transtornos psiquiátricos</option>
                    <option value="depressao_ansiedade">Depressão / Ansiedade</option>
                    <option value="moradia_assistida">Moradia assistida</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="historico"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Breve histórico ou observações adicionais
                </label>
                <textarea
                  id="historico"
                  name="historico"
                  rows={4}
                  value={formData.historico}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Descreva brevemente a situação atual, internações anteriores, uso de medicamentos, etc."
                />
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold py-4 px-8 rounded-xl shadow-elevation-1 hover:shadow-elevation-2 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                  style={{ backgroundColor: '#22C55E' }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = '#16A34A';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = '#22C55E';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Abrindo WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={18} />
                      ENVIAR TRIAGEM PELO WHATSAPP
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-2">
                  <Shield size={12} />
                  Suas informações são confidenciais e usadas apenas pela equipe clínica da{' '}
                  {clinicName}.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
