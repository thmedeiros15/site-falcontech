import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Send, Layers, UserCheck, Headphones,
  Trash2, MessageCircle, Eye, Settings, Plus, CheckCircle, Database, X,
  Instagram, Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Lead } from '../types';
import contactBg from '../assets/imagemareafaleconosco.jpg';

export default function ContactCRM() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: 'car' as 'car' | 'moto' | 'truck' | 'fleet',
    quantity: 1,
    message: '',
  });

  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Load leads from LocalStorage on mount
  useEffect(() => {
    const savedLeads = localStorage.getItem('falcontech_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        setLeads([]);
      }
    } else {
      const defaults: Lead[] = [
        {
          id: 'lead-1',
          name: 'Daniel Albuquerque Cavalcanti',
          phone: '(61) 98112-9011',
          email: 'daniel.cavalcanti@gmail.com',
          vehicleType: 'car',
          quantity: 2,
          message: 'Gostaria de cotar rastreador para dois veículos particulares de Brasília. Vocês instalam em condomínio fechado no Lago Sul?',
          timestamp: '03/06/2026, 15:10:00',
          status: 'contacted',
        },
        {
          id: 'lead-2',
          name: 'Juliana Lima Mendes de Sá',
          phone: '(61) 99450-3211',
          email: 'juliana.mendes@frotasgama.com.br',
          vehicleType: 'fleet',
          quantity: 8,
          message: 'Precisamos monitorar nossa frota de 8 fiorinos que realizam entregas no Distrito Federal e entorno.',
          timestamp: '03/06/2026, 10:25:12',
          status: 'new',
        }
      ];
      setLeads(defaults);
      localStorage.setItem('falcontech_leads', JSON.stringify(defaults));
    }
  }, []);

  const saveLeadsToStorage = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem('falcontech_leads', JSON.stringify(updatedLeads));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email || 'Não informado',
      vehicleType: formData.vehicleType,
      quantity: Number(formData.quantity) || 1,
      message: formData.message || 'Solicitação de cotação padrão.',
      timestamp: new Date().toLocaleString('pt-BR'),
      status: 'new',
    };

    const updated = [newLead, ...leads];
    saveLeadsToStorage(updated);
    setFormSubmitted(true);

    const directWpText = `Olá, preenchi os detalhes de cotação no site da Falcontech!%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Veículo:* ${formData.vehicleType === 'car' ? 'Carro' : formData.vehicleType === 'moto' ? 'Moto' : formData.vehicleType === 'truck' ? 'Caminhão' : 'Gestão de Frotas'} (${formData.quantity} un)%0A` +
      `*Mensagem:* ${formData.message || 'Interesse em fechar plano de rastreamento.'}`;
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleType: 'car',
      quantity: 1,
      message: '',
    });

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5561994413422&text=${directWpText}`, '_blank');
      setFormSubmitted(false);
      setIsFormModalOpen(false);
    }, 1800);
  };

  const deleteLead = (id: string) => {
    const filtered = leads.filter(l => l.id !== id);
    saveLeadsToStorage(filtered);
  };

  const toggleLeadStatus = (id: string, currentStatus: 'new' | 'contacted' | 'closed') => {
    const statusMap: Record<'new' | 'contacted' | 'closed', 'new' | 'contacted' | 'closed'> = {
      new: 'contacted',
      contacted: 'closed',
      closed: 'new'
    };
    
    const updated = leads.map(l => {
      if (l.id === id) {
        return { ...l, status: statusMap[currentStatus] };
      }
      return l;
    });
    saveLeadsToStorage(updated);
  };

  const getStatusLabelAndStyles = (status: 'new' | 'contacted' | 'closed') => {
    switch (status) {
      case 'new': return { label: 'NOVO INTERESSE', style: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
      case 'contacted': return { label: 'EM CONTATO', style: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'closed': return { label: 'VENDA CONCLUÍDA', style: 'bg-[#00cc00]/10 text-[#00cc00] border-[#00cc00]/20' };
    }
  };

  const directWpLink = "https://api.whatsapp.com/send?phone=5561994413422&text=Olá!%20Gostaria%20de%20falar%20com%20a%20equipe%20de%20atendimento%20da%20Falcontech%20para%20tirar%20dúvidas%20e%20solicitar%20a%20minha%20instalação.";

  return (
    <div id="contact" className="bg-black relative select-none">
      
      {/* Dynamic faint gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Core Double Panel Section */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950/40 overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[420px] relative">
          
          {/* Imagem de fundo cobrindo todo o quadrado */}
          <img 
            src={contactBg} 
            alt="Falcontech Customer Solution Center"
            className="absolute inset-0 w-full h-full object-cover object-center select-none z-0"
          />

          {/* Left panel: Espaço transparente para mostrar o lado esquerdo da imagem */}
          <div className="relative w-full md:w-[58%] min-h-[300px] md:min-h-[420px] overflow-hidden flex items-center justify-center p-6 md:p-10 z-10" />

          {/* Right panel: Painel transparente com o texto por cima do fundo */}
          <div className="relative w-full md:w-[42%] p-8 sm:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left min-h-[300px] z-10">
            <div className="space-y-1 mb-8 max-w-sm">
              <span className="text-[20px] sm:text-[22px] font-display text-zinc-300 uppercase tracking-widest leading-none block">
                FALE COM
              </span>
              <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide uppercase leading-none block">
                NOSSA EQUIPE.
              </span>
            </div>

            {/* Huge custom formatted WhatsApp Capsule button matching picture */}
            <a
              href={directWpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm py-4.5 px-7 rounded-full bg-gradient-to-b from-[#00b050] via-[#009b44] to-[#008035] hover:brightness-110 text-white font-black text-base sm:text-lg tracking-widest flex items-center justify-center gap-3.5 border-2 border-green-600/50 shadow-[0_12px_35px_rgba(0,168,89,0.35)] active:scale-[0.98] transition-all cursor-pointer uppercase text-shadow-sm select-none"
            >
              <div className="bg-white text-[#009b44] p-1.5 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#009b44] fill-[#009b44]" />
              </div>
              <span>FALAR NO WHATSAPP</span>
            </a>

            {/* Premium, subtle Social Follow Strip as requested */}
            <div className="mt-8 flex flex-col items-center md:items-start gap-3 w-full max-w-sm border-t border-zinc-900/60 pt-6">
              <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Siga-nos em nossas redes sociais
              </span>
              <div className="flex gap-2.5 w-full">
                <a
                  href="https://www.instagram.com/falcontechrastreadores?igsh=OW51NnhnMHNvM3Ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-[#00cc00]/40 hover:bg-zinc-900/40 transition-all text-xs font-bold text-zinc-400 hover:text-white group"
                >
                  <Instagram className="w-4 h-4 text-zinc-500 group-hover:text-[#00cc00] transition-colors" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/people/Falcontech-Rastreadores-Acessorios/100075500095229/?paipv=0&eav=AfafA652hm6YVSqt2kvvK7GQ_NMq7P7-5njmd09H_StT57T4Rj3kWrS6FgaqeWPPubE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-[#00cc00]/40 hover:bg-zinc-900/40 transition-all text-xs font-bold text-zinc-400 hover:text-white group"
                >
                  <Facebook className="w-4 h-4 text-zinc-500 group-hover:text-[#00cc00] transition-colors" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>



          </div>

        </div>

        {/* Divider and Sub-Footer Details Strip precisely matching original design */}
        <div className="mt-12 pt-8 border-t border-zinc-900 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-center md:text-left">
            
            {/* Column 1: TELEFONE */}
            <div className="flex flex-col items-center md:items-start gap-1.5 justify-center pl-0 md:pl-4">
              <div className="flex items-center gap-2.5 text-zinc-400 select-none">
                <Headphones className="w-4 h-4 stroke-[2]" />
                <h4 className="text-xs font-sans font-extrabold uppercase tracking-widest">NOSSO TELEFONE</h4>
              </div>
              <a href="tel:61994413422" className="text-[15px] sm:text-[17px] text-[#00cc00] font-black hover:underline tracking-wide mt-0.5">
                (61) 99441-3422
              </a>
            </div>

            {/* Column 2: EMAIL */}
            <div className="flex flex-col items-center md:items-start gap-1.5 justify-center md:border-l md:border-zinc-900 md:pl-8">
              <div className="flex items-center gap-2.5 text-zinc-400 select-none">
                <Mail className="w-4 h-4 stroke-[2]" />
                <h4 className="text-xs font-sans font-extrabold uppercase tracking-widest">NOSSO EMAIL</h4>
              </div>
              <a href="mailto:redesfalcontech@gmail.com" className="text-[15px] sm:text-[17px] text-[#00cc00] font-black hover:underline tracking-wide mt-0.5">
                redesfalcontech@gmail.com
              </a>
            </div>

            {/* Column 3: ENDEREÇO */}
            <div className="flex flex-col items-center md:items-start gap-1.5 justify-center md:border-l md:border-zinc-900 md:pl-8">
              <div className="flex items-center gap-2.5 text-zinc-400 select-none">
                <MapPin className="w-4 h-4 stroke-[2]" />
                <h4 className="text-xs font-sans font-extrabold uppercase tracking-widest">ENDEREÇO</h4>
              </div>
              <p className="text-[14px] sm:text-[15px] font-sans font-black leading-relaxed text-[#00cc00] tracking-wide mt-0.5">
                QR 315 Conjunto 13 Lote 04 - Samambaia Sul
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* MODAL 1: OPTIONAL COMPLIMENTARY CRM PANEL */}
      <AnimatePresence>
        {isAdminOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative text-left"
            >
              <button 
                onClick={() => setIsAdminOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-4 pr-10">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <h3 className="font-display font-extrabold text-xl text-white">
                    Painel CRM & Gestão de Leads
                  </h3>
                </div>
                <span className="text-[10px] font-mono bg-[#00cc00]/10 text-[#00cc00] px-2.5 py-0.5 rounded font-bold uppercase border border-[#00cc00]/20">
                  Falcon CRM v1.5
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-6">
                Gerencie contatos e leads originados no site. Clique sobre as badges de status para atualizá-los.
              </p>

              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                {leads.length > 0 ? (
                  leads.map((l) => {
                    const info = getStatusLabelAndStyles(l.status);
                    return (
                      <div key={l.id} className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800/80 flex flex-col gap-3">
                        <div className="flex justify-between items-start gap-2 flex-wrap">
                          <div>
                            <h4 className="font-sans font-bold text-sm sm:text-base text-white">{l.name}</h4>
                            <p className="text-xs text-zinc-500 font-mono mt-0.5">{l.timestamp} | {l.email}</p>
                          </div>
                          <button
                            onClick={() => toggleLeadStatus(l.id, l.status)}
                            className={`cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold tracking-wider border transition-all ${info.style}`}
                          >
                            <span>{info.label}</span>
                            <span className="text-[8px] opacity-70">(Mudar)</span>
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-300 bg-black/40 border border-zinc-900 p-3 rounded-xl select-all font-sans leading-relaxed">
                          {l.message}
                        </p>

                        <div className="flex justify-between items-center text-xs font-mono border-t border-zinc-900 pt-3 flex-wrap gap-2">
                          <span className="text-zinc-400">
                            Veículo: <strong className="text-white uppercase">{l.vehicleType === 'car' ? 'Carro' : l.vehicleType === 'moto' ? 'Moto' : l.vehicleType === 'truck' ? 'Caminhão' : 'Frota'} × {l.quantity}un</strong>
                          </span>

                          <div className="flex gap-2 items-center">
                            <a
                              href={`https://api.whatsapp.com/send?phone=55${l.phone.replace(/\D/g, '')}&text=Olá%20${encodeURIComponent(l.name)},%20sou%20da%20Falcontech%20Rastreadores!`}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:font-bold rounded-lg border border-emerald-500/20 transition-all flex items-center gap-1.5 text-xs font-bold"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>{l.phone}</span>
                            </a>

                            <button
                              onClick={() => deleteLead(l.id)}
                              className="cursor-pointer text-zinc-500 hover:text-rose-500 p-2 rounded-lg hover:bg-zinc-900 transition-colors"
                              title="Excluir Lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-10 text-zinc-500">
                    <Database className="w-8 h-8 text-zinc-600 mx-auto mb-2 animate-bounce" />
                    <p className="text-xs">Nenhum lead registrado no sistema.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: COMPLIMENTARY OFFLINE FORM SUBMISSION */}
      <AnimatePresence>
        {isFormModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 w-full max-w-lg relative text-left"
            >
              <button 
                onClick={() => setIsFormModalOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="font-display font-extrabold text-xl text-white mb-2 pr-10">
                Orçamento Personalizado
              </h3>
              <p className="text-xs text-zinc-400 mb-6 border-b border-zinc-900 pb-4">
                Envie seus dados para salvar em nossa central e abrir atendimento direto.
              </p>

              {formSubmitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="h-14 w-14 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-white">Dados Enviados!</h4>
                  <p className="text-xs text-zinc-400">Redirecionando para o WhatsApp...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Pedro Henrique"
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:bg-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                      Celular / WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: (61) 99441-3422"
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:bg-zinc-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                        Veículo
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value as any })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 px-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="car">Carro</option>
                        <option value="moto">Moto</option>
                        <option value="truck">Caminhão</option>
                        <option value="fleet">Frotas</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                        Quantidade
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl py-2.5 px-3.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                      Mensagem Adicional
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      placeholder="Descreva seu bairro ou veículo..."
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:bg-zinc-900 resize-none animate-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase"
                  >
                    <span>Enviar Orçamento</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
