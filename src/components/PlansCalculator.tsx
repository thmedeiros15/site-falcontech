import React from 'react';
import { 
  Car, Bike, Truck, Bus, Shield
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import planosFalconImg from '../assets/planos falcon.jpeg';

export default function PlansCalculator() {
  
  // WhatsApp Link Generator matching original helper
  const getWhatsAppLink = (planName: string, price: number) => {
    const text = `Olá, vi no site da Falcontech! Tenho interesse no plano *${planName}* no valor de R$ ${price.toFixed(2).replace('.', ',')}/mês. Gostaria de tirar dúvidas e agendar a minha instalação!`;
    return `https://api.whatsapp.com/send?phone=5561994413422&text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="plans" className="pt-12 sm:pt-16 pb-0 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,204,0,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-display font-black text-3.5xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Planos de <span className="text-[#00cc00]">Rastreamento</span>
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

          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-medium max-w-2xl mx-auto">
            Escolha o plano <span className="text-[#00cc00] font-bold">ideal</span> para a sua necessidade.
          </p>
        </div>

        {/* Premium Grid Cards matching the custom mockup reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: VEÍCULOS LEVES */}
          <div className="relative group rounded-[28px] border border-zinc-800/80 bg-zinc-950 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:border-[#00cc00]/40 hover:shadow-[0_0_40px_rgba(0,204,0,0.06)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-xl rounded-full pointer-events-none" />
            
            {/* Left Section: Icons, Title & Price */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
              {/* Integrated sleek green bounding box with icons */}
              <div className="border border-[#00cc00]/30 rounded-2xl px-5 py-2.5 flex items-center justify-center gap-4 bg-zinc-900/60 text-[#00cc00] mb-4.5 shadow-inner">
                <Car className="w-8 h-8 text-[#00cc00]" strokeWidth={1.5} />
                <Bike className="w-8 h-8 text-[#00cc00]" strokeWidth={1.5} />
              </div>
              
              <div className="space-y-0.5">
                <h3 className="text-base tracking-wider text-slate-300 font-bold uppercase select-none">
                  VEÍCULOS
                </h3>
                <h4 className="text-3xl sm:text-4xl font-black text-[#00cc00] tracking-wide uppercase leading-none">
                  LEVES
                </h4>
              </div>

              {/* Price Tag block */}
              <div className="flex items-start justify-center md:justify-start mt-6 text-white font-display">
                <span className="text-sm font-black text-zinc-400 mt-1 mr-0.5">R$</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none">39,90</span>
                <span className="text-xs font-mono font-bold text-zinc-500 self-end mb-1 ml-1">/mês</span>
              </div>
            </div>

            {/* Laser-style separator divider (Vertical for large, horizontal for simple responsive stacking) */}
            <div className="hidden md:flex self-stretch items-center relative py-1 mx-2">
              <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent relative flex items-center justify-center">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00cc00] shadow-[0_0_12px_#00cc00]" />
              </div>
            </div>
            
            <div className="flex md:hidden w-full items-center relative py-1 my-2">
              <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative flex items-center justify-center">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00cc00] shadow-[0_0_12px_#00cc00]" />
              </div>
            </div>

            {/* Right Section: Benefits Check and Big CTA button */}
            <div className="flex-1 flex flex-col justify-between items-center md:items-start text-center md:text-left w-full h-full min-h-[160px]">
              {/* Core short benefit */}
              <div className="flex items-start gap-3.5 mb-5 select-none pt-2">
                <div className="p-1.5 rounded-lg border border-[#00cc00]/30 text-[#00cc00] bg-[#00cc00]/5 mt-0.5 shrink-0">
                  <Shield className="w-5 h-5" strokeWidth={2} />
                </div>
                <p className="text-xs sm:text-sm text-zinc-350 leading-relaxed font-semibold">
                  Segurança, controle e monitoramento <span className="text-[#00cc00] font-black">inteligente</span> para o seu dia a dia.
                </p>
              </div>

              {/* Big Whatsapp rounded Button */}
              <a
                href={getWhatsAppLink('Veículos Leves', 39.90)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-3d w-full py-4 px-6 hover:text-white"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>WHATSAPP</span>
              </a>
            </div>

          </div>

          {/* Card 2: VEÍCULOS PESADOS */}
          <div className="relative group rounded-[28px] border border-zinc-800/80 bg-zinc-950 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:border-[#00cc00]/40 hover:shadow-[0_0_40px_rgba(0,204,0,0.06)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-xl rounded-full pointer-events-none" />
            
            {/* Left Section: Icons, Title & Price */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
              {/* Integrated sleek green bounding box with icons */}
              <div className="border border-[#00cc00]/30 rounded-2xl px-5 py-2.5 flex items-center justify-center gap-4 bg-zinc-900/60 text-[#00cc00] mb-4.5 shadow-inner">
                <Truck className="w-8 h-8 text-[#00cc00]" strokeWidth={1.5} />
                <Bus className="w-8 h-8 text-[#00cc00]" strokeWidth={1.5} />
              </div>
              
              <div className="space-y-0.5">
                <h3 className="text-base tracking-wider text-slate-300 font-bold uppercase select-none">
                  VEÍCULOS
                </h3>
                <h4 className="text-3xl sm:text-4xl font-black text-[#00cc00] tracking-wide uppercase leading-none">
                  PESADOS
                </h4>
              </div>

              {/* Price Tag block */}
              <div className="flex items-start justify-center md:justify-start mt-6 text-white font-display">
                <span className="text-sm font-black text-zinc-400 mt-1 mr-0.5">R$</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none">49,90</span>
                <span className="text-xs font-mono font-bold text-zinc-500 self-end mb-1 ml-1">/mês</span>
              </div>
            </div>

            {/* Laser-style separator divider (Vertical for large, horizontal for simple responsive stacking) */}
            <div className="hidden md:flex self-stretch items-center relative py-1 mx-2">
              <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent relative flex items-center justify-center">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00cc00] shadow-[0_0_12px_#00cc00]" />
              </div>
            </div>
            
            <div className="flex md:hidden w-full items-center relative py-1 my-2">
              <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative flex items-center justify-center">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00cc00] shadow-[0_0_12px_#00cc00]" />
              </div>
            </div>

            {/* Right Section: Benefits Check and Big CTA button */}
            <div className="flex-1 flex flex-col justify-between items-center md:items-start text-center md:text-left w-full h-full min-h-[160px]">
              {/* Core short benefit */}
              <div className="flex items-start gap-3.5 mb-5 select-none pt-2">
                <div className="p-1.5 rounded-lg border border-[#00cc00]/30 text-[#00cc00] bg-[#00cc00]/5 mt-0.5 shrink-0">
                  <Shield className="w-5 h-5" strokeWidth={2} />
                </div>
                <p className="text-xs sm:text-sm text-zinc-350 leading-relaxed font-semibold">
                  Segurança, controle e monitoramento <span className="text-[#00cc00] font-black">inteligente</span> para o seu negócio.
                </p>
              </div>

              {/* Big Whatsapp rounded Button */}
              <a
                href={getWhatsAppLink('Veículos Pesados', 49.90)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-3d w-full py-4 px-6 hover:text-white"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>WHATSAPP</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Imagem demonstrando o app e categorias de veículos - de ponta a ponta */}
      <div className="mt-12 sm:mt-16 w-full border-t border-b border-zinc-900/60 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
        <img 
          src={planosFalconImg} 
          alt="Aplicativo e Categorias FalconTech" 
          className="w-full h-auto object-cover select-none"
        />
      </div>
    </div>
  );
}
