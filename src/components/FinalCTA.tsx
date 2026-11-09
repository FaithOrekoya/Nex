import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';

interface FinalCTAProps {
  onGetStartedClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStartedClick }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#0B2833] text-white border-b border-white/10 overflow-hidden">
      
      {/* Full-Width Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/freight_intermodal_hub_1794218266955.jpg"
          alt="Nevex Network intermodal freight terminal and transportation hub"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.12]"
          loading="lazy"
        />
        {/* Measured dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2833] via-[#0B2833]/85 to-[#0B2833]/80" />
      </div>

      {/* Subtle Ambient Amber Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FFB703]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#FFB703]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold">
              Connect With Nevex
            </span>
            <span className="w-8 h-[2px] bg-[#FFB703]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.08] mb-6 text-balance text-center">
            Let’s Move Freight Forward Together.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-sans mb-10 max-w-2xl text-center mx-auto">
            Experience a more synchronized approach to freight transportation. Connect with our logistics desk to coordinate federal shipments, enterprise loads, or certified carrier runs.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onGetStartedClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] active:scale-[0.98] transition-all rounded-full shadow-xl shadow-[#FFB703]/20 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="tel:18005556383"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-full transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#FFB703]" />
              <span>1-800-555-NEVEX</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
