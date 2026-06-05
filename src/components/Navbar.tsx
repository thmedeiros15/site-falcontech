import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logocomfundoremovido.png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Tecnologia', id: 'tech' },
    { label: 'Planos', id: 'plans' },
    { label: 'Avaliações', id: 'avaliacoes' },
    { label: 'Dúvidas', id: 'faq' },
    { label: 'Monitorar', id: 'monitor' }
  ];

  const handleItemClick = (item: { label: string, id: string, external?: boolean, url?: string }) => {
    if (item.external && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }
    if (isOpen) {
      setIsOpen(false);
      // Wait for the collapse animation is fully completed to prevent scrolling cancellation or layout conflicts on mobile browsers.
      setTimeout(() => {
        onNavigate(item.id);
      }, 250);
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-emerald-900/30 shadow-lg shadow-black/80 py-0' 
          : 'bg-transparent py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">

          {/* ── MOBILE: espaçador esquerdo (equilibra o botão hambúrguer) ── */}
          <div className="md:hidden w-10 h-10 flex-shrink-0" />

          {/* ── MOBILE: Logo centralizada absolutamente ── */}
          <div
            onClick={() => handleItemClick({ label: 'Início', id: 'home' })}
            className="md:hidden absolute left-1/2 -translate-x-1/2 cursor-pointer group z-10"
          >
            <img
              src={logo}
              alt="FalconTech Rastreadores"
              className={`h-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                scrolled ? 'w-36 sm:w-44' : 'w-44 sm:w-52'
              }`}
            />
          </div>

          {/* ── DESKTOP: Logo alongada à esquerda ── */}
          <div
            onClick={() => handleItemClick({ label: 'Início', id: 'home' })}
            className="hidden md:flex items-center cursor-pointer group"
          >
            <img
              src={logo}
              alt="FalconTech Rastreadores"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                scrolled ? 'h-14 lg:h-16' : 'h-28 lg:h-32'
              }`}
            />
          </div>

          {/* ── DESKTOP: Nav central ── */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item)}
                className="relative px-4 py-2 rounded-lg text-[15px] font-semibold transition-all duration-300 cursor-pointer select-none group focus:outline-none"
              >
                {/* Glow border laser frame - subtler opacity with lower glow radius */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none ${
                    activeSection === item.id
                      ? 'border border-[#00cc00]/30 bg-[#00cc00]/5 shadow-[0_0_8px_rgba(0,204,0,0.15)]'
                      : 'border border-transparent bg-transparent group-hover:border-[#00cc00]/15 group-hover:bg-[#00cc00]/2'
                  }`}
                >
                  {/* Top Edge Flare */}
                  <span
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.5px] bg-[#00cc00]/80 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'w-6 shadow-[0_0_6px_#00cc00]'
                        : 'w-0 group-hover:w-4'
                    }`}
                  />
                  <span
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2.5px] bg-[#00cc00]/40 rounded-full blur-[0.5px] transition-all duration-300 ${
                      activeSection === item.id ? 'w-4 opacity-80' : 'w-0 opacity-0 group-hover:w-2 group-hover:opacity-100'
                    }`}
                  />
                  {/* Bottom Edge Flare */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-[1.5px] bg-[#00cc00]/80 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'w-6 shadow-[0_0_6px_#00cc00]'
                        : 'w-0 group-hover:w-4'
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-[2.5px] bg-[#00cc00]/40 rounded-full blur-[0.5px] transition-all duration-300 ${
                      activeSection === item.id ? 'w-4 opacity-80' : 'w-0 opacity-0 group-hover:w-2 group-hover:opacity-100'
                    }`}
                  />
                </div>

                {/* Button Label Text */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-[#00cc00] font-bold'
                    : 'text-zinc-300 font-semibold group-hover:text-[#00cc00]'
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* ── DESKTOP: CTA WhatsApp ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5561994413422&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20rastreamento%20da%20Falcontech!"
              target="_blank"
              rel="noreferrer noopener"
              className="relative overflow-hidden group px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 font-bold text-sm text-zinc-950 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-zinc-950 fill-zinc-950/10 animate-pulse" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* ── MOBILE: Botão hambúrguer (direita) ── */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950 border-b border-emerald-950 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`relative block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none ${
                    activeSection === item.id
                      ? 'text-[#00cc00] bg-zinc-900/40 border border-[#00cc00]/25 shadow-[0_0_8px_rgba(0,204,0,0.08)]'
                      : 'text-zinc-300 hover:text-[#00cc00] hover:bg-zinc-900/20 border border-transparent'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <>
                      {/* Highlight flares on mobile borders */}
                      <span className="absolute top-0 left-10 h-[1.5px] w-5 bg-[#00cc00]/80 rounded-full shadow-[0_0_6px_#00cc00]" />
                      <span className="absolute top-0 left-10 h-[2px] w-3 bg-[#00cc00]/40 rounded-full blur-[0.5px]" />
                    </>
                  )}
                </button>
              ))}
              <div className="pt-4 pb-2 px-4 border-t border-zinc-900 space-y-3">
                <a
                  href="https://api.whatsapp.com/send?phone=5561994413422&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20rastreamento%20da%20Falcontech!"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 font-bold text-zinc-950 text-base hover:bg-emerald-400 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-zinc-950 fill-zinc-950/20" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
