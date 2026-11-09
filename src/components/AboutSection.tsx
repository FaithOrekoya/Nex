import React from 'react';
import { Target, Lightbulb, Workflow, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#171717] text-white border-b border-[#262626] relative overflow-hidden">
      
      {/* Background ambient gradient */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span className="text-xs font-semibold tracking-widest text-[#FF5A1F] uppercase font-display">
                COMPANY BACKGROUND & PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Building a More Connected Future for Freight.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Founded by Antonio Hyatt, Nevex Network was established on a single foundational premise: modern supply chains do not suffer from a lack of trucks—they suffer from fractured communication and disconnected operational rails.
            </p>
          </div>
        </div>

        {/* Large Image & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left: Large Modern Freight Infrastructure Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#1E1E1E] border border-[#2E2E2E] shadow-2xl">
              <img
                src={IMAGES.heroFreightTruck}
                onError={(e) => {
                  e.currentTarget.src = IMAGES.freightIntermodalHub;
                }}
                alt="Nevex Network freight transportation infrastructure and corridor logistics"
                className="w-full aspect-[16/10] object-cover object-center filter contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-300">
                <span className="text-[#D8F36A] font-semibold">
                  Antonio Hyatt · Founder & Managing Director
                </span>
                <span className="text-neutral-400">
                  Non-Asset Freight Brokerage Architecture
                </span>
              </div>
            </div>
          </div>

          {/* Right: Core Strategic Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-6 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B]">
              <div className="flex items-center gap-3 mb-2 text-[#FF5A1F]">
                <Workflow className="w-5 h-5" />
                <h3 className="font-display font-bold text-white text-lg">
                  Non-Asset Based Agility
                </h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                By operating as a pure non-asset brokerage, Nevex avoids the fleet depreciation and regional hardware bias of legacy carriers. Our capital and engineering focus entirely on automated matchmaking, compliance verification, and frictionless execution.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B]">
              <div className="flex items-center gap-3 mb-2 text-[#FF5A1F]">
                <Target className="w-5 h-5" />
                <h3 className="font-display font-bold text-white text-lg">
                  Eliminating Supply Chain Fragmentation
                </h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Fragmented communications waste billions annually in stalled freight, idle drivers, and administrative friction. Our proprietary coordination tools unify tender requests, dispatch status, and billing into one synchronized stream.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B]">
              <div className="flex items-center gap-3 mb-2 text-[#D8F36A]">
                <Lightbulb className="w-5 h-5" />
                <h3 className="font-display font-bold text-white text-lg">
                  Unlocking Working Capital
                </h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                By digitizing documents, automating proof-of-delivery reconciliation, and expediting settlement cycles, Nevex alleviates cash flow bottlenecks for carriers and gives shippers total financial transparency.
              </p>
            </div>

          </div>

        </div>

        {/* Mission Statement Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#1D1D1D] border border-[#2E2E2E] relative overflow-hidden">
          <div className="max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] block mb-3">
              THE MISSION OF NEVEX NETWORK
            </span>
            <blockquote className="text-xl sm:text-2xl font-display font-medium text-white leading-relaxed">
              "We are building the coordination layer that modern freight has long deserved—where public agencies, commercial enterprises, and certified truck carriers connect with zero friction, complete trust, and automated precision."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#FF5A1F]" />
              <span className="text-sm font-semibold text-white">Antonio Hyatt</span>
              <span className="text-xs text-neutral-400 font-mono">· Founder, Nevex Network</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
