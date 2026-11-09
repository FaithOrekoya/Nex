import React from 'react';

interface TrustPositioningProps {
  onLearnMoreClick?: () => void;
}

export const TrustPositioning: React.FC<TrustPositioningProps> = ({ onLearnMoreClick }) => {
  return (
    <section className="py-28 md:py-36 bg-[#0B2833] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Warm Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFB703]/[0.06] rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        {/* Eyebrow / Label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-6 h-[2px] bg-[#FFB703]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold">
            Company Positioning & Philosophy
          </span>
          <span className="w-6 h-[2px] bg-[#FFB703]" />
        </div>

        {/* Large Typography Statement (No Testimonial Cards) */}
        <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.15] max-w-5xl mx-auto mb-12 text-balance">
          “Modern supply chains don’t need more idle trucks sitting on lots. They need an intelligent, transparent coordination layer that eliminates operational fragmentation and connects freight demand with verified capacity in minutes.”
        </blockquote>

        {/* Minimal Content & Founder Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-sans mb-12">
          <span className="font-display font-semibold text-white text-base">
            Antonio Hyatt
          </span>
          <span className="hidden sm:inline text-slate-500">·</span>
          <span className="text-slate-400 font-mono text-xs">
            Founder & Managing Director, Nevex Network
          </span>
        </div>

        {/* Distinctive Subtle Metric Baseline */}
        <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-slate-400">
          <div>
            <span className="text-white font-semibold">Non-Asset Based</span> · Zero Fleet Depreciation
          </div>
          <div className="hidden sm:block text-slate-600">|</div>
          <div>
            <span className="text-[#FFB703] font-semibold">FMCSA Verified</span> · Active Safety Standards
          </div>
          <div className="hidden sm:block text-slate-600">|</div>
          <div>
            <span className="text-white font-semibold">24–48h Settlement</span> · e-POD Reconciled
          </div>
        </div>

      </div>
    </section>
  );
};
