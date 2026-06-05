import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  label: string;
  initials: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Jucelino Brasil',
      rating: 5,
      text: '"A melhor da região!"',
      label: 'Cliente Google',
      initials: 'JB'
    },
    {
      id: 2,
      name: 'Wilton Lima',
      rating: 5,
      text: '"Parabéns pelo trabalho de vocês. Abraço."',
      label: 'Cliente Google',
      initials: 'WL'
    },
    {
      id: 3,
      name: 'Carlos Alberto',
      rating: 5,
      text: '"Pessoal com transparência e responsabilidade, estão de parabéns"',
      label: 'Cliente Google',
      initials: 'CA'
    },
    {
      id: 4,
      name: 'Fernando DaSilva',
      rating: 5,
      text: '"Topzeira, o melhor. 100% satisfeito."',
      label: 'Cliente Google',
      initials: 'FD'
    },
    {
      id: 5,
      name: 'Dark Victor',
      rating: 5,
      text: '"Funcionários atenciosos, ambiente muito agradável."',
      label: 'Cliente Google',
      initials: 'DV'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  // Determine dynamic visible cards based on responsive breakpoints
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3); // Desktop: shows 3 cards at once
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // Tablet: shows 2 cards at once
      } else {
        setVisibleCards(1); // Mobile: shows 1 card at once
      }
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  // Keep index within bounds if resized
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex, maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Needed to avoid stale closure in setInterval callback
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 4500);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const numDots = Math.max(1, reviews.length - visibleCards + 1);

  return (
    <section 
      id="avaliacoes" 
      className="py-16 sm:py-20 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00cc00]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 select-none">
          <h2 className="font-display font-black text-3.5xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            O que nossos <span className="text-[#00cc00]">clientes dizem</span>
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

          <p className="text-sm sm:text-base text-zinc-300 mt-3 font-medium max-w-2xl mx-auto leading-relaxed">
            A confiança dos nossos clientes é o nosso maior resultado. Confira algumas avaliações reais recebidas no Google.
          </p>
        </div>

        {/* Dynamic Trust Badge */}
        <div className="flex flex-col items-center justify-center mb-12 select-none">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-zinc-900/40 border border-zinc-800/80 px-6 py-3.5 rounded-2xl shadow-xl backdrop-blur-md">
            {/* Star Icons Row */}
            <div className="flex items-center gap-1 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-[#00cc00]/10">
              <span className="text-white font-bold text-sm mr-1">5.0</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 text-[#00cc00] fill-[#00cc00]" />
              ))}
            </div>
            
            <div className="text-center sm:text-left">
              <p className="text-sm text-zinc-100 font-bold tracking-wide">
                ⭐ 5,0 de avaliação no Google
              </p>
              <p className="text-xs text-[#00cc00] font-semibold mt-0.5 opacity-90">
                Baseado em avaliações reais de clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          
          {/* Navigation Arrows for screens > md */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] lg:left-[-50px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-zinc-900/90 border border-zinc-800 hover:border-[#00cc00]/30 hover:bg-zinc-850 text-zinc-400 hover:text-[#00cc00] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hidden md:flex active:scale-95"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] lg:right-[-50px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-zinc-900/90 border border-zinc-800 hover:border-[#00cc00]/30 hover:bg-zinc-850 text-zinc-400 hover:text-[#00cc00] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hidden md:flex active:scale-95"
            aria-label="Próxima avaliação"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Track wrapper */}
          <div 
            className="overflow-hidden mx-[-12px] px-[12px] py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="px-3 flex-shrink-0 flex flex-col justify-between"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  {/* The Card */}
                  <div className="relative bg-zinc-900/40 border border-zinc-800/80 hover:border-[#00cc00]/30 p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00cc00]/5 flex flex-col justify-between h-full backdrop-blur-sm group select-none overflow-hidden min-h-[250px]">
                    {/* Subtle quote icon decoration */}
                    <Quote className="absolute right-4 top-4 text-zinc-800/20 w-12 h-12 pointer-events-none group-hover:text-[#00cc00]/5 transition-colors duration-300" />

                    <div>
                      {/* Stars bar */}
                      <div className="flex gap-1 mb-5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#00cc00] fill-[#00cc00]" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-zinc-200 text-base italic leading-relaxed font-semibold mb-6 min-h-[56px] line-clamp-4">
                        {review.text}
                      </p>
                    </div>

                    {/* Profile info footer */}
                    <div className="flex items-center gap-3.5 border-t border-zinc-800/60 pt-5 mt-auto">
                      {/* Initials Avatar */}
                      <div className="w-10 h-10 rounded-full bg-[#00cc00]/10 border border-[#00cc00]/20 flex items-center justify-center text-[#00cc00] font-black text-xs select-none">
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-wide">
                          {review.name}
                        </h4>
                        <p className="text-xs text-zinc-400 font-semibold flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {review.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination indicators / dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: numDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index 
                    ? 'w-7 bg-[#00cc00]' 
                    : 'w-2.5 bg-zinc-800 hover:bg-zinc-750'
                }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

        {/* CTA Button under testimonials */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="https://www.google.com/search?q=FalconTech+Rastreadores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-transparent hover:bg-[#00cc00]/5 text-[#00cc00] hover:text-[#00cc00] font-black text-xs tracking-widest uppercase border border-[#00cc00]/30 hover:border-[#00cc00] transition-all duration-300 transform active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
          >
            {/* Google G icon rendered with standard styled shapes instead of simple text */}
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            <span>Ver Avaliações no Google</span>
          </a>
        </div>

      </div>
    </section>
  );
}
