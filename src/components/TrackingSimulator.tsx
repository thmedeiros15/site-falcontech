import React from 'react';
import { 
  Smartphone, Monitor, Globe, Download, ArrowUpRight, 
  ShieldCheck, CheckCircle2, ChevronRight, Laptop
} from 'lucide-react';
import { motion } from 'motion/react';

export default function TrackingSimulator() {
  const androidUrl = "https://play.google.com/store/apps/details?id=br.com.rs.falcontech";
  const iosUrl = "https://apps.apple.com/br/app/rastro-system-3-0/id6474566461";
  
  // Custom QR Code API generator link (secure and reliable)
  const androidQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=8&color=0c0a09&bgcolor=ffffff&data=${encodeURIComponent(androidUrl)}`;
  const iosQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=8&color=0c0a09&bgcolor=ffffff&data=${encodeURIComponent(iosUrl)}`;

  return (
    <div className="w-full">
      {/* Cards Layout - Clean Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Desktop/Web Access Card (Sleek Browser Frame style) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-zinc-700/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-[#00cc00]">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-400">DESKTOP & NOTEBOOK</span>
                <h3 className="font-sans font-black text-white text-lg tracking-tight leading-tight">Acesso Web de Monitoramento</h3>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Acesse nosso painel de controle direto pelo seu navegador. Ideal para gerenciamento de frotas, emissão de relatórios, envio de comandos e visualização em tempo real de forma expandida.
            </p>

            {/* Feature List */}
            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#00cc00] shrink-0 mt-0.5" />
                <span>Bloqueio e desbloqueio remoto instantâneo</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#00cc00] shrink-0 mt-0.5" />
                <span>Histórico completo de trajetos por até 90 dias</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#00cc00] shrink-0 mt-0.5" />
                <span>Cercas virtuais inteligentes com alertas</span>
              </li>
            </ul>
          </div>

          <a 
            href="https://teste.rastrosystem.com.br/acl/login/?next=/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 text-white font-sans font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-700 border border-zinc-700/30 hover:border-zinc-600 transition-all cursor-pointer"
          >
            <span>Acessar Portal Web</span>
            <ArrowUpRight className="w-4 h-4 text-[#00cc00]" />
          </a>
        </div>

        {/* Right Side: QR Code Downloads (2-Column Grid on md) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card Android */}
          <div className="flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#00cc00]/20 transition-all duration-300">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-[#00cc00]/10 border border-[#00cc00]/20 flex items-center justify-center text-[#00cc00]">
                  <Smartphone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00cc00]">DISPONÍVEL</span>
                  <h4 className="font-sans font-black text-white text-base tracking-tight leading-none">Para Android</h4>
                </div>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Monitore em tempo real de qualquer lugar pelo App oficial. Compatível com todos os celulares Android.
              </p>

              {/* QR Code Container designed cleanly */}
              <div className="bg-white p-3 rounded-2xl shadow-xl shadow-black/80 inline-block mb-6 border border-zinc-800">
                <img 
                  src={androidQrUrl} 
                  alt="QR Code Google Play FalconTech" 
                  className="w-36 h-36 object-contain block"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-wider text-center mt-2.5 font-bold">
                  Escaneie com a câmera
                </span>
              </div>
            </div>

            <a 
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#00cc00] text-zinc-950 font-sans font-black text-xs uppercase tracking-wider hover:bg-[#10e010] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow-md shadow-[#00cc00]/10"
            >
              <span>Download na Google Play</span>
              <Download className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Card iOS */}
          <div className="flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#00cc00]/20 transition-all duration-300">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-[#00cc00]/10 border border-[#00cc00]/20 flex items-center justify-center text-[#00cc00]">
                  <Smartphone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00cc00]">DISPONÍVEL</span>
                  <h4 className="font-sans font-black text-white text-base tracking-tight leading-none">Para iOS (iPhone)</h4>
                </div>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Instale nosso aplicativo nativo no seu iPhone com máxima performance na App Store.
              </p>

              {/* QR Code Container designed cleanly */}
              <div className="bg-white p-3 rounded-2xl shadow-xl shadow-black/80 inline-block mb-6 border border-zinc-800">
                <img 
                  src={iosQrUrl} 
                  alt="QR Code Apple App Store FalconTech" 
                  className="w-36 h-36 object-contain block"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-wider text-center mt-2.5 font-bold">
                  Escaneie com a câmera
                </span>
              </div>
            </div>

            <a 
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#00cc00] text-zinc-950 font-sans font-black text-xs uppercase tracking-wider hover:bg-[#10e010] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow-md shadow-[#00cc00]/10"
            >
              <span>Download na App Store</span>
              <Download className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
