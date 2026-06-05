import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const list: FaqItem[] = [
    {
      question: 'Precisa pagar mensalidade?',
      answer: `Sim, todos os rastreadores precisam de um chip ativo e um sistema dedicado para funcionarem adequadamente.

A ideia de que existem "rastreadores sem mensalidade" é enganosa. Como explicado acima, qualquer rastreador necessita de crédito de dados em um chip para transmitir as informações. Quem vende aparelhos "sem mensalidade" geralmente transfere para o cliente a obrigação de adquirir e realizar recargas mensais em um chip pré-pago individual, utilizando comandos básicos por SMS (sem contar com uma plataforma/aplicativo moderno).

Além disso, as operadoras de telefonia frequentemente bloqueiam chips pré-pagos comuns usados para telemetria, o que pode deixar você sem sinal no momento em que mais precisar.`,
    },
    {
      question: 'Funciona em todo o Brasil?',
      answer: 'Sim. Nossos rastreadores utilizam de forma inteligente as principais redes de telefonia móvel do país. Nos locais com cobertura de sinal celular correspondente, a localização é atualizada em tempo real. Caso o veículo circule por áreas sem cobertura móvel temporária (como subsolos, túneis ou locais isolados), o equipamento continua armazenando o trajeto na memória interna e retransmite todo o histórico de dados assim que restabelecida a comunicação.',
    },
    {
      question: 'Posso colocar o Aplicativo em mais de um celular?',
      answer: 'Sim, o acesso ao aplicativo é ilimitado! Você pode instalar e autenticar em quantos celulares desejar utilizando suas credenciais de login e senha definidas no cadastro.',
    },
    {
      question: 'Quais as formas que tenho para acessar a plataforma?',
      answer: 'Você pode acessar nossa plataforma de duas formas. Utilizando o computador através de um navegador ou pelo nosso aplicativo para Android e iOS.',
    },
    {
      question: 'Preciso colocar crédito no chip?',
      answer: 'De forma alguma! Toda a logística de recarga do chip de telemetria é gerenciada pela Falcontech. Seu único custo é a mensalidade fixa do plano contratado.',
    },
    {
      question: 'O que eu faço caso meu veículo seja Roubado ou Furtado?',
      answer: `Em caso de roubo ou furto, o primeiro passo é zelar pela sua segurança e ir para um local seguro. Em seguida, você pode enviar o comando de bloqueio direto pelo próprio aplicativo para efetuar o corte de combustível do veículo.

Depois disso, ligue imediatamente para a polícia (190) para registrar a ocorrência e entre em contato conosco pelo nosso WhatsApp ou telefone. Estaremos de prontidão para te dar todo o apoio e suporte necessário, acompanhando a localização em tempo real para ajudar na busca e recuperação do seu veículo.`,
    },
  ];

  return (
    <div id="faq" className="py-12 sm:py-16 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-display font-black text-3xl text-white mt-4 tracking-tight uppercase">
            Perguntas <span className="text-[#00cc00]">respondidas</span>
          </h2>
          
          {/* Laser-style glow divider line with company colors */}
          <div className="my-5 flex items-center justify-center">
            <div className="relative w-48 sm:w-64 h-[2px]">
              {/* Glowing background */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00cc00] to-transparent blur-[2px]" />
              {/* Bright laser core */}
              <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white via-[#00cc00] to-transparent" />
              {/* Core bright center flare */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-3 bg-[#00cc00]/45 rounded-full blur-sm" />
            </div>
          </div>

          <p className="text-sm text-zinc-300 mt-3 font-medium">
            Confira as principais informações sobre o <span className="text-[#00cc00] font-bold">funcionamento</span> do nosso rastreador.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {list.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-zinc-900/30 border border-zinc-900 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="cursor-pointer w-full p-4.5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-sans font-semibold text-sm sm:text-base text-white hover:text-[#00cc00] transition-colors">
                    {item.question}
                  </span>
                  <div className="h-7 w-7 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-450 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-450" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-350 leading-relaxed border-t border-zinc-900 w-full text-left bg-zinc-950 whitespace-pre-line">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
