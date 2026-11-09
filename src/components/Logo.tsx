import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', showTagline = false }) => {
  const isLight = variant === 'light'; // Light text on dark bg

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Custom Geometric Network-Inspired Symbol in Navy & Yellow */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer hexagonal network node container */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="10"
            className={isLight ? 'fill-[#0E2530] stroke-white/20' : 'fill-[#0B2833] stroke-slate-300'}
            strokeWidth="1.5"
          />
          {/* Dynamic route connection lines in warm amber */}
          <path
            d="M12 32L22 12L32 32"
            stroke="#FFB703"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 32H32"
            stroke={isLight ? 'rgba(255,255,255,0.25)' : '#94A3B8'}
            strokeWidth="1.75"
            strokeDasharray="2 3"
          />
          <path
            d="M22 12V32"
            stroke="#FFB703"
            strokeWidth="1.75"
            strokeDasharray="2 2"
          />
          {/* Network Nodes */}
          {/* Top central Nevex coordinating node */}
          <circle cx="22" cy="12" r="4.5" fill="#FFB703" />
          <circle cx="22" cy="12" r="1.75" fill="#0B2833" />
          
          {/* Left origin node (Shipper / Agency) */}
          <circle cx="12" cy="32" r="3.5" fill={isLight ? '#FFFFFF' : '#0B2833'} />
          <circle cx="12" cy="32" r="1.5" fill="#FFB703" />

          {/* Right carrier node (Certified Truck Carrier) */}
          <circle cx="32" cy="32" r="3.5" fill={isLight ? '#FFFFFF' : '#0B2833'} />
          <circle cx="32" cy="32" r="1.5" fill="#FFB703" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className={`font-display font-semibold tracking-tight flex items-center leading-none ${textSizes[size]}`}>
          <span className={isLight ? 'text-white' : 'text-[#0B2833]'}>NEVEX</span>
          <span className="text-[#FFB703] ml-1.5 font-bold tracking-widest text-[0.82em]">NETWORK</span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400 mt-0.5">
            Connected Logistics
          </span>
        )}
      </div>
    </div>
  );
};
