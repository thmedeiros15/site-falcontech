import React from 'react';

// === 1. GLOWING MAP PIN ===
function GlowingMapPin() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 select-none">
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="pinGradient_pin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9fff9f" />
            <stop offset="40%" stopColor="#00cc00" />
            <stop offset="100%" stopColor="#008000" />
          </linearGradient>
          <radialGradient id="pedestalGlow_pin" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGlow_pin" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter_pin" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Pedestal Shadow/Glow (Base) */}
        <ellipse cx="60" cy="85" rx="36" ry="12" fill="url(#pedestalGlow_pin)" className="opacity-90" />
        
        {/* 3D concentric ring 1 (outer dark ring) */}
        <ellipse cx="60" cy="84" rx="36" ry="13" stroke="#27272a" strokeWidth="1.5" fill="#09090b" opacity="0.85" />
        
        {/* Concentric ring 2 (inner metallic step) */}
        <ellipse cx="60" cy="82" rx="28" ry="10" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        
        {/* Concentric ring 3 (glowing green ring) */}
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#00cc00" strokeWidth="2.5" filter="url(#glowFilter_pin)" fill="none" opacity="0.95" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />
        
        {/* Central green core glow */}
        <ellipse cx="60" cy="82" rx="14" ry="5" fill="url(#ringGlow_pin)" />

        {/* Vertical tracking beam line */}
        <line x1="60" y1="52" x2="60" y2="80" stroke="#00cc00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />

        {/* Floating Bell/Element with bouce animation */}
        <g className="animate-[bounce_3s_ease-in-out_infinite]" style={{ transformOrigin: '60px 48px' }}>
          {/* Soft back shadow of the pin */}
          <circle cx="60" cy="38" r="14" fill="#00cc00" opacity="0.2" filter="url(#glowFilter_pin)" />
          
          {/* Pin body */}
          <path 
            d="M60,56 C49,45 42,38 42,29 C42,19 50,11 60,11 L60,11 C70,11 78,19 78,29 C78,38 71,45 60,56 Z" 
            fill="url(#pinGradient_pin)" 
            filter="url(#glowFilter_pin)"
          />
          
          {/* Inner Light contrast stroke */}
          <path 
            d="M60,11.5 C50.5,11.5 42.5,19.3 42.5,29 C42.5,37.5 49.5,44.5 60,55 C70.5,44.5 77.5,37.5 77.5,29 C77.5,19.3 69.5,11.5 60,11.5 Z" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            fill="none" 
            opacity="0.3"
          />

          {/* Pin Inner Dark Shield */}
          <circle cx="60" cy="29" r="6.5" fill="#09090b" />
          
          {/* Pin Inner Center Dot */}
          <circle cx="60" cy="29" r="2.5" fill="#00cc00" />
        </g>
      </svg>
    </div>
  );
}

// === 2. GLOWING BELL ===
function GlowingBell() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 select-none">
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="pinGradient_bell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9fff9f" />
            <stop offset="40%" stopColor="#00cc00" />
            <stop offset="100%" stopColor="#008000" />
          </linearGradient>
          <radialGradient id="pedestalGlow_bell" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGlow_bell" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter_bell" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="60" cy="85" rx="36" ry="12" fill="url(#pedestalGlow_bell)" className="opacity-90" />
        <ellipse cx="60" cy="84" rx="36" ry="13" stroke="#27272a" strokeWidth="1.5" fill="#09090b" opacity="0.85" />
        <ellipse cx="60" cy="82" rx="28" ry="10" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#00cc00" strokeWidth="2.5" filter="url(#glowFilter_bell)" fill="none" opacity="0.95" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />
        <ellipse cx="60" cy="82" rx="14" ry="5" fill="url(#ringGlow_bell)" />
        <line x1="60" y1="52" x2="60" y2="80" stroke="#00cc00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />

        <g className="animate-[bounce_3.2s_ease-in-out_infinite]" style={{ transformOrigin: '60px 48px' }}>
          {/* Bell Base shadow */}
          <circle cx="60" cy="34" r="14" fill="#00cc00" opacity="0.15" filter="url(#glowFilter_bell)" />
          
          {/* Dome shape */}
          <path 
            d="M60,15 C52,15 48,20 48,29 L48,39 C48,41 45,44 43,46 L77,46 C75,44 72,41 72,39 L72,29 C72,20 68,15 60,15 Z" 
            fill="url(#pinGradient_bell)" 
            filter="url(#glowFilter_bell)"
          />
          {/* Clapper */}
          <path 
            d="M57,49 C57,51 58,52 60,52 C62,52 63,51 63,49 Z" 
            fill="url(#pinGradient_bell)" 
            filter="url(#glowFilter_bell)"
          />
          {/* Dynamic ring-style acoustic sound waves */}
          <path 
            d="M37,25 C33,29 33,37 37,41" 
            stroke="#00cc00" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            filter="url(#glowFilter_bell)"
            opacity="0.8"
          />
          <path 
            d="M83,25 C87,29 87,37 83,41" 
            stroke="#00cc00" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
            filter="url(#glowFilter_bell)"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  );
}

// === 3. GLOWING LOCK ===
function GlowingLock() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 select-none">
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="pinGradient_lock" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9fff9f" />
            <stop offset="40%" stopColor="#00cc00" />
            <stop offset="100%" stopColor="#008000" />
          </linearGradient>
          <radialGradient id="pedestalGlow_lock" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGlow_lock" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter_lock" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="60" cy="85" rx="36" ry="12" fill="url(#pedestalGlow_lock)" className="opacity-90" />
        <ellipse cx="60" cy="84" rx="36" ry="13" stroke="#27272a" strokeWidth="1.5" fill="#09090b" opacity="0.85" />
        <ellipse cx="60" cy="82" rx="28" ry="10" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#00cc00" strokeWidth="2.5" filter="url(#glowFilter_lock)" fill="none" opacity="0.95" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />
        <ellipse cx="60" cy="82" rx="14" ry="5" fill="url(#ringGlow_lock)" />
        <line x1="60" y1="52" x2="60" y2="80" stroke="#00cc00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />

        <g className="animate-[bounce_2.8s_ease-in-out_infinite]" style={{ transformOrigin: '60px 48px' }}>
          {/* Lock Shackle */}
          <path 
            d="M51,32 v-10 C51,15.5 55,11.5 60,11.5 C65,11.5 69,15.5 69,22 v3 v7" 
            stroke="url(#pinGradient_lock)" 
            strokeWidth="3.2" 
            fill="none" 
            strokeLinecap="round"
            filter="url(#glowFilter_lock)"
          />
          <path 
            d="M51,32 v-10 C51,15.5 55,11.5 60,11.5 C65,11.5 69,15.5 69,22 v10" 
            stroke="#ffffff" 
            strokeWidth="0.75" 
            fill="none" 
            opacity="0.3"
          />
          {/* Main rectangle lock body */}
          <rect 
            x="43" y="30" width="34" height="23" rx="4.5" 
            fill="url(#pinGradient_lock)" 
            filter="url(#glowFilter_lock)"
          />
          {/* Inner details to represent physical shield lock */}
          <circle cx="60" cy="38" r="2.2" fill="#09090b" />
          <path d="M59.2,39.5 L60.8,39.5 L61.8,45.5 L58.2,45.5 Z" fill="#09090b" />
        </g>
      </svg>
    </div>
  );
}

// === 4. GLOWING SHIELD ===
function GlowingShield() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 select-none">
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="pinGradient_shield" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9fff9f" />
            <stop offset="40%" stopColor="#00cc00" />
            <stop offset="100%" stopColor="#008000" />
          </linearGradient>
          <radialGradient id="pedestalGlow_shield" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGlow_shield" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter_shield" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="60" cy="85" rx="36" ry="12" fill="url(#pedestalGlow_shield)" className="opacity-90" />
        <ellipse cx="60" cy="84" rx="36" ry="13" stroke="#27272a" strokeWidth="1.5" fill="#09090b" opacity="0.85" />
        <ellipse cx="60" cy="82" rx="28" ry="10" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#00cc00" strokeWidth="2.5" filter="url(#glowFilter_shield)" fill="none" opacity="0.95" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />
        <ellipse cx="60" cy="82" rx="14" ry="5" fill="url(#ringGlow_shield)" />
        <line x1="60" y1="52" x2="60" y2="80" stroke="#00cc00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />

        <g className="animate-[bounce_3.1s_ease-in-out_infinite]" style={{ transformOrigin: '60px 48px' }}>
          {/* Shield Outer Body */}
          <path 
            d="M60,11 C70,11 77,15 77,22 C77,36 67,46 60,52 C53,46 43,36 43,22 C43,15 50,11 60,11 Z" 
            fill="none"
            stroke="url(#pinGradient_shield)"
            strokeWidth="3.2"
            strokeLinejoin="round"
            filter="url(#glowFilter_shield)"
          />
          <path 
            d="M60,15 C67,15 72,18 72,23 C72,33 65,42 60,47 C55,42 48,33 48,23 C48,18 53,15 60,15 Z" 
            fill="url(#pinGradient_shield)"
            opacity="0.15"
          />
          {/* Central glowing checkmark */}
          <path 
            d="M51.5,29.5 L56.5,34.5 L68.5,22.5" 
            stroke="#00cc00" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none" 
            filter="url(#glowFilter_shield)"
            opacity="1"
          />
          <path 
            d="M51.5,29.5 L56.5,34.5 L68.5,22.5" 
            stroke="#ffffff" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none" 
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
}

// === 5. GLOWING ROUTE ===
function GlowingRoute() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 select-none">
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="pinGradient_route" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9fff9f" />
            <stop offset="40%" stopColor="#00cc00" />
            <stop offset="100%" stopColor="#008000" />
          </linearGradient>
          <radialGradient id="pedestalGlow_route" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGlow_route" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter_route" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="60" cy="85" rx="36" ry="12" fill="url(#pedestalGlow_route)" className="opacity-90" />
        <ellipse cx="60" cy="84" rx="36" ry="13" stroke="#27272a" strokeWidth="1.5" fill="#09090b" opacity="0.85" />
        <ellipse cx="60" cy="82" rx="28" ry="10" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#00cc00" strokeWidth="2.5" filter="url(#glowFilter_route)" fill="none" opacity="0.95" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />
        <ellipse cx="60" cy="82" rx="14" ry="5" fill="url(#ringGlow_route)" />
        <line x1="60" y1="52" x2="60" y2="80" stroke="#00cc00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />

        <g className="animate-[bounce_2.9s_ease-in-out_infinite]" style={{ transformOrigin: '60px 48px' }}>
          {/* Spline Route Connection Line */}
          <path 
            d="M44,36 C44,18 76,46 76,28" 
            stroke="url(#pinGradient_route)" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeDasharray="4 4" 
            fill="none" 
            filter="url(#glowFilter_route)"
          />
          <path 
            d="M44,36 C44,18 76,46 76,28" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            strokeLinecap="round" 
            strokeDasharray="4 4" 
            fill="none" 
            opacity="0.3"
          />
          
          {/* Start Point Pin (Left-bottom side) */}
          <g transform="translate(37, 24)">
            <path 
              d="M7,16 C3.5,12.5 1.5,10.5 1.5,7.7 C1.5,4.7 3.9,2.3 7,2.3 C10.1,2.3 12.5,4.7 12.5,7.7 C12.5,10.5 10.5,12.5 7,16 Z" 
              fill="url(#pinGradient_route)" 
              filter="url(#glowFilter_route)"
            />
            <circle cx="7" cy="7.7" r="1.5" fill="#09090b" />
          </g>

          {/* End Point Pin (Right-top side) */}
          <g transform="translate(69, 16)">
            <path 
              d="M7,16 C3.5,12.5 1.5,10.5 1.5,7.7 C1.5,4.7 3.9,2.3 7,2.3 C10.1,2.3 12.5,4.7 12.5,7.7 C12.5,10.5 10.5,12.5 7,16 Z" 
              fill="url(#pinGradient_route)" 
              filter="url(#glowFilter_route)"
            />
            <circle cx="7" cy="7.7" r="1.5" fill="#09090b" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// === 6. GLOWING BRAZIL ===
function GlowingBrazil() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0 select-none">
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="pinGradient_brazil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9fff9f" />
            <stop offset="40%" stopColor="#00cc00" />
            <stop offset="100%" stopColor="#008000" />
          </linearGradient>
          <radialGradient id="pedestalGlow_brazil" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGlow_brazil" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cc00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00cc00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter_brazil" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="60" cy="85" rx="36" ry="12" fill="url(#pedestalGlow_brazil)" className="opacity-90" />
        <ellipse cx="60" cy="84" rx="36" ry="13" stroke="#27272a" strokeWidth="1.5" fill="#09090b" opacity="0.85" />
        <ellipse cx="60" cy="82" rx="28" ry="10" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#00cc00" strokeWidth="2.5" filter="url(#glowFilter_brazil)" fill="none" opacity="0.95" />
        <ellipse cx="60" cy="82" rx="22" ry="8" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />
        <ellipse cx="60" cy="82" rx="14" ry="5" fill="url(#ringGlow_brazil)" />
        <line x1="60" y1="52" x2="60" y2="80" stroke="#00cc00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />

        <g className="animate-[bounce_3.3s_ease-in-out_infinite]" style={{ transformOrigin: '60px 48px' }}>
          {/* Stylized high-tech outline of Brazil */}
          <path 
            d="M42,15 C46,12 54,9 60,11 C65,11 72,13 77,15 C81,16 88,18 90,23 C91,25 91,28 89,32 C87,35 83,39 77,41 C73,43 70,49 68,54 C67,57 65,63 62,65 C60,65 59,62 58,58 C57,55 53,53 52,50 C51,47 47,49 43,45 C39,41 33,39 33,34 C33,29 37,21 42,15 Z" 
            stroke="url(#pinGradient_brazil)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="url(#pinGradient_brazil)" 
            fillOpacity="0.08"
            filter="url(#glowFilter_brazil)"
          />
          <path 
            d="M42,15 C46,12 54,9 60,11 C65,11 72,13 77,15 C81,16 88,18 90,23 C91,25 91,28 89,32 C87,35 83,39 77,41 C73,43 70,49 68,54 C67,57 65,63 62,65 C60,65 59,62 58,58 C57,55 53,53 52,50 C51,47 47,49 43,45 C39,41 33,39 33,34 C33,29 37,21 42,15 Z" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
            opacity="0.3"
          />
          {/* Signal Indicator beacon */}
          <circle cx="61" cy="34" r="2.5" fill="#00cc00" filter="url(#glowFilter_brazil)" />
          <circle cx="61" cy="34" r="1" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// === MAIN FEATURES COMPONENT ===
export default function Features() {
  const list = [
    {
      title: 'LOCALIZAÇÃO EM TEMPO REAL',
      desc: 'Acompanhe seu veículo em tempo real, de qualquer lugar.',
      glowingIcon: <GlowingMapPin />,
    },
    {
      title: 'ALERTA DE IGNIÇÃO',
      desc: 'Receba notificações instantâneas em caso de atividades suspeitas.',
      glowingIcon: <GlowingBell />,
    },
    {
      title: 'BLOQUEIO REMOTO',
      desc: 'Bloqueie seu veículo remotamente em situações de risco.',
      glowingIcon: <GlowingLock />,
    },
    {
      title: 'ALTO ÍNDICE DE RECUPERAÇÃO',
      desc: 'Veículos rastreados têm mais chances de serem recuperados.',
      glowingIcon: <GlowingShield />,
    },
    {
      title: 'HISTÓRICO DE ROTAS',
      desc: 'Consulte trajetos completos e acompanhe toda movimentação do veículo.',
      glowingIcon: <GlowingRoute />,
    },
    {
      title: 'COBERTURA NACIONAL',
      desc: 'Cobertura completa em todo o Brasil, com suporte e rastreamento 24h.',
      glowingIcon: <GlowingBrazil />,
    },
  ];

  return (
    <div id="tech" className="py-16 sm:py-20 bg-black relative border-t border-zinc-900 border-b">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Tecnologia de <span className="text-[#00cc00]">Rastreamento</span>
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

          <p className="text-base text-zinc-300 mt-3 font-medium">
            Tecnologia de ponta para <span className="text-[#00cc00] font-black">proteger</span> o que é seu
          </p>
        </div>

        {/* Feature Cards Grid (Standardized horizontally aligned bento rows matching exactly the prompt image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => {
            return (
              <div
                key={idx}
                id={`feature-card-${idx}`}
                className="group p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-900/90 hover:border-[#00cc00]/30 hover:bg-zinc-900/25 transition-all duration-300 flex flex-row items-center gap-4 sm:gap-5 text-left h-full"
              >
                {/* Left Column: Rotating and levitating glowing 3D pedestal icon */}
                <div className="shrink-0">
                  {item.glowingIcon}
                </div>
                
                {/* Right Column: Title and customized green divider and aligned description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-extrabold text-[15px] sm:text-[17px] text-white tracking-tight leading-snug uppercase">
                    {item.title}
                  </h3>
                  
                  {/* Glowing green line spacer */}
                  <div className="w-10 h-[2.5px] bg-[#00cc00] my-2.5 rounded-full shadow-sm shadow-[#00cc00]/50" />
                  
                  <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-400 font-medium font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
