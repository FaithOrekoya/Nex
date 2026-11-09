import React from 'react';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-[#0B2833] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Two-Column Layout: Image on the Left, Content Container on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Logistics Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group">
              <img
                src={IMAGES.freightIntermodalHub}
                onError={(e) => {
                  e.currentTarget.src = IMAGES.heroFreightTruck;
                }}
                alt="Nevex Network interstate logistics operations and freight transport infrastructure"
                className="w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2833] via-[#0B2833]/30 to-transparent pointer-events-none" />
              
              {/* Photo Overlay Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold mb-1">
                  Interstate Logistics Infrastructure
                </p>
                <p className="text-sm font-display font-medium text-white/95">
                  Automated corridor alignment for government and commercial freight.
                </p>
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Antonio Hyatt · Founder</span>
                  <span className="text-[#FFB703]">Non-Asset Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content Container */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#FFB703]" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                About Nevex Network
              </span>
            </div>

            {/* Oversized Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12] mb-6 text-balance">
              Connecting Freight Demand With the Right Transportation Network.
            </h2>

            {/* Lead Narrative */}
            <p className="text-lg sm:text-xl text-[#0B2833] font-normal leading-relaxed mb-5 font-sans">
              Founded by Antonio Hyatt, Nevex operates on a modern non-asset-based model. By directing engineering resources into automated coordination software rather than physical fleet depreciation, we eliminate operational fragmentation across modern freight corridors.
            </p>

            {/* Supporting Prose */}
            <p className="text-base text-slate-600 leading-relaxed font-sans mb-8">
              We bridge the gap between rigorous federal agency compliance and fast-paced commercial shipping requirements, pairing verified freight demand with pre-qualified independent motor carriers in minutes. From origin tender to digital bill-of-lading reconciliation, every milestone is synchronized with complete transparency.
            </p>

            {/* Core Operational Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  <Cpu className="w-3.5 h-3.5 text-[#0B2833]" />
                  <span>Platform Model</span>
                </div>
                <div className="text-lg font-display font-semibold text-[#0B2833]">
                  Non-Asset
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Zero hardware depreciation bias
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0B2833]" />
                  <span>Carrier Network</span>
                </div>
                <div className="text-lg font-display font-semibold text-[#0B2833]">
                  100% Pre-Cleared
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Verified FMCSA safety & insurance
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#0B2833]" />
                  <span>Working Capital</span>
                </div>
                <div className="text-lg font-display font-semibold text-[#0B2833]">
                  24–48h Settlement
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Automated e-POD reconciliation
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
