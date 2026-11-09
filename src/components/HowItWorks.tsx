import React from 'react';
import { FileText, Cpu, Truck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'Freight Requirements',
      lead: 'Agencies and organizations define freight parameters and delivery criteria.',
      description:
        'Shippers submit lane origin and destination corridors, pickup windows, cargo specifications, and specialized equipment types (Dry Van, Reefer, Flatbed, or Intermodal).',
      icon: FileText,
      deliverables: ['Lane Corridor Specification', 'Trailer & Equipment Selection', 'Security & Handling Protocol'],
    },
    {
      num: '02',
      title: 'Automated Carrier Matching',
      lead: 'Proprietary software pairs demand with pre-cleared motor carriers.',
      description:
        'Our algorithms evaluate active motor carriers in the specific transit corridor, instantly validating active FMCSA operating authority, satisfactory safety scores, and insurance coverage.',
      icon: Cpu,
      deliverables: ['Algorithmic Lane Matching', 'FMCSA Authority & COI Check', 'Digital Tender & Rate Lock'],
    },
    {
      num: '03',
      title: 'Logistics Coordination',
      lead: 'Continuous tracking from dispatch tender through delivery and settlement.',
      description:
        'Nevex provides milestone status transparency, coordinates driver communications, reconciles electronic proof-of-delivery (e-POD), and releases expedited payment.',
      icon: Truck,
      deliverables: ['Real-Time Status Telemetry', 'Digital BOL Chain of Custody', 'Accelerated Carrier Settlement'],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0B2833] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Subtle ambient warm amber glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB703]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FFB703]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.12] text-balance">
            How Nevex Connects Freight and Carriers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
            A three-stage connected coordination lifecycle engineered to replace fragmented communication with automated precision.
          </p>
        </div>

        {/* Horizontal Connected Timeline (No Cards) */}
        <div className="relative">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div 
            className="hidden md:block absolute top-7 left-10 right-10 h-[2px] bg-gradient-to-r from-[#FFB703]/30 via-white/20 to-[#FFB703]/30 z-0" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={stage.num} className="flex flex-col">
                  
                  {/* Top Indicator Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#0E2530] border-2 border-[#FFB703] text-[#FFB703] flex items-center justify-center font-mono font-bold text-lg shadow-lg shadow-black/40 shrink-0">
                      {stage.num}
                    </div>
                    <div className="md:hidden flex-1 h-[1px] bg-white/20" />
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <Icon className="w-5 h-5 text-[#FFB703]" />
                    </div>
                  </div>

                  {/* Stage Content */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Stage 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-sm font-medium text-white/90 mb-3 leading-snug">
                      {stage.lead}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage Deliverables List */}
                  <div className="mt-auto pt-4 border-t border-white/10 space-y-2">
                    {stage.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB703] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
