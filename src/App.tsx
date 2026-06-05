import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import PlansCalculator from './components/PlansCalculator';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactCRM from './components/ContactCRM';
import TrackingSimulator from './components/TrackingSimulator';
import logo from './assets/logocomfundoremovido.png';
import heroBg from './assets/imagemdefundopaginainicio.jpeg';

import { 
  Shield, Radio, Smartphone, ChevronRight, CheckCircle2, 
  MapPin, Star, Sparkles, MessageCircle, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { motion } from 'motion/react';

// Ref to generated image
const heroMockup = "/src/assets/images/falcontech_app_mockup_1780511828446.png";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 96; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Observe active sections for nav highlights
  useEffect(() => {
    const sections = ['home', 'tech', 'features', 'plans', 'avaliacoes', 'faq', 'monitor', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset adjustments
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* Dynamic Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20 flex items-center overflow-hidden"
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroBg} 
            alt="FalconTech Rastreamento" 
            className="w-full h-full object-cover object-right select-none"
            referrerPolicy="no-referrer"
          />
          {/* Degradê escuro da esquerda para a direita para proteger a leitura contra o farol da moto */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/85 to-transparent" />
          {/* Degradê inferior suave para mesclar com a próxima seção */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-start">
          <div className="max-w-3xl space-y-6 sm:space-y-8 py-4 md:py-6">
            
            <div className="space-y-5">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] text-white tracking-normal leading-[1.1] uppercase">
                Quem tem <br />
                informação, <br />
                tem <span className="text-[#00cc00]">vantagem.</span>
              </h1>
              
              <p className="text-sm sm:text-base font-display font-black tracking-widest text-slate-200 uppercase pt-1">
                ESTEJA CONECTADO AO QUE IMPORTA.
              </p>

              {/* Bullet list items as shown in the logo/alignment reference */}
              <div className="space-y-4 pb-2 pt-1.5">
                {[
                  "BLOQUEIE SEU VEÍCULO PELO CELULAR.",
                  "PLANO INTELIGENTE QUE CABE NO SEU BOLSO.",
                  "APROVAÇÃO IMEDIATA SEM BUROCRACIA.",
                  "INSTALAMOS ONDE VOCÊ ESTIVER."
                ].map((text, idx) => (
                  <div key={`hero-bullet-${idx}`} className="flex items-center gap-3.5 text-xs sm:text-sm uppercase font-display font-black text-white tracking-wider">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00cc00] text-zinc-950 shrink-0 shadow-sm shadow-[#00cc00]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cta Buttons - Only WhatsApp Button left */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5561994413422&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20rastreamento%20da%20Falcontech!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-black text-sm tracking-widest uppercase hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-green-500/20 hover:shadow-green-500/40 border-2 border-emerald-400/20 transition-all items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white fill-white/10" />
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Technology & Value Props Grid Section */}
      <Features />

      {/* Flexible Plan Pricing & Bulders */}
      <PlansCalculator />

      {/* Real Google Customer Testimonials / Reviews */}
      <Reviews />

      {/* Accordion FAQ block */}
      <FAQ />

      {/* Area de Monitoramento e Download de Aplicativo */}
      <section id="monitor" className="py-12 bg-zinc-950 border-t border-zinc-900/60 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 select-none">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
              Aplicativos e <span className="text-[#00cc00]">Monitoramento</span>
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

            <p className="text-xs sm:text-sm text-zinc-400 mt-3 max-w-xl mx-auto">
              Acesse a plataforma de rastreamento web pelo computador ou baixe o aplicativo oficial para o seu celular Android ou iOS e tenha o controle total em suas mãos.
            </p>
          </div>
          <TrackingSimulator />
        </div>
      </section>

      {/* Contact submission Form & leads database visualizer */}
      <ContactCRM />

      {/* Brand Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 sm:py-16 text-center select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Logo container columns spacing formatting */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <img src={logo} alt="FalconTech Rastreadores" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
          </div>

          <div className="border-t border-zinc-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>
              FalconTech © Copyright 2026. Todos os direitos reservados.
            </p>
            <p>
              QR 315 Conjunto 13 Lote 04 - Samambaia Sul, Brasília - DF
            </p>
            <p className="text-[10px] text-zinc-600 block text-center">
              Tecnologia de Segurança Rastreamento • GPRS Multi-Canal
            </p>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5561994413422&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20rastreamento%20da%20Falcontech!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#00cc00] text-zinc-950 shadow-[0_4px_20px_rgba(0,204,0,0.3)] hover:shadow-[0_4px_30px_rgba(0,204,0,0.5)] hover:scale-105 active:scale-95 hover:bg-[#10e010] transition-all duration-300 group"
      >
        {/* Dual pulsing outer wave rings matching brand color */}
        <span className="absolute inset-0 rounded-full bg-[#00cc00]/40 animate-ping pointer-events-none" />
        
        {/* Solid brand color matching WhatsApp icon layout */}
        <MessageCircle className="w-7 h-7 fill-zinc-950 text-zinc-950 group-hover:rotate-12 transition-transform duration-300 relative z-10" />

        {/* Dynamic slide-in tooltip tag for engagement */}
        <span className="absolute right-16 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-zinc-950 text-[#00cc00] border border-[#00cc00]/25 text-xs font-bold px-3.5 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-xl">
          Fale Conosco no WhatsApp
        </span>
      </a>
    </div>
  );
}
