import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Network } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onExploreClick: () => void;
  onPartnerClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPartnerClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-start overflow-hidden bg-[#0B2833]"
    >
      {/* 1. Full-Width Logistics Photograph Background with Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBgCustom}
          onError={(e) => {
            // Local fallback to high-res freight truck asset
            e.currentTarget.src = IMAGES.heroFreightTruck;
          }}
          alt="Nevex Network commercial freight transport truck operating on an interstate logistics corridor"
          className="w-full h-full object-cover object-center lg:object-[70%_center] filter brightness-[0.92] contrast-[1.05]"
          loading="eager"
        />

        {/* Velmoraine Left-to-Right Scrim for High Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2833] via-[#0B2833]/92 via-50% to-[#0B2833]/35 lg:to-transparent" />
        
        {/* Velmoraine Top & Bottom Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2833]/80 via-transparent to-[#0B2833]" />

        {/* Ambient Subtle Amber Glow Highlight */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#FFB703]/[0.07] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Content Container (Velmoraine Layout & Visual Composition) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Small Introductory Label Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.14] text-white shadow-xs mb-6 sm:mb-7">
            <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-[#FFB703] uppercase">
              CONNECTED LOGISTICS. SMARTER FREIGHT.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-display font-medium sm:font-semibold text-white tracking-tight leading-[1.08] text-balance mb-6">
            A More Connected Way to Move Freight.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Nevex Network connects federal and civilian agencies with certified truck carriers through a technology-driven freight brokerage platform.
          </p>

          {/* CTA Pill Buttons (Velmoraine arrangement) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12 sm:mb-14">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] active:scale-[0.98] transition-all shadow-lg shadow-[#FFB703]/25 cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#FFB703]"
            >
              <span>Explore Our Network</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onPartnerClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 active:scale-[0.98] transition-all backdrop-blur-md cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <span>Become a Partner</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </button>
          </div>

          {/* Bottom Reassurance / Core Pillars Strip */}
          <div className="w-full max-w-2xl pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <Network className="w-3.5 h-3.5 text-[#FFB703]" />
              <span>Non-Asset Brokerage</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFB703]" />
              <span>FMCSA Certified Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#FFB703]" />
              <span>Automated Software Platform</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
