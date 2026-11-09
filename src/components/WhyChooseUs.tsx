import React from 'react';
import { Cpu, ShieldCheck, Coins } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const propositions = [
    {
      num: '01',
      icon: Cpu,
      title: 'Technology-Driven Coordination',
      lead: 'A platform-centered approach to freight operations.',
      description:
        'Instead of manual phone calls and opaque rate negotiations, Nevex pairs freight algorithmically, streams milestone telemetry, and unifies communication across a single coordination rail.',
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: 'Verified Carrier Clearinghouse',
      lead: 'Strict safety, operating authority, and insurance protocols.',
      description:
        'Every motor carrier is pre-qualified against active FMCSA records, safety ratings, and active cargo insurance, giving shippers predictable reliability on every dispatched run.',
    },
    {
      num: '03',
      icon: Coins,
      title: 'Working Capital & Settlement Speed',
      lead: 'Eliminating the 30-to-60 day cash flow bottleneck.',
      description:
        'Automated digital proof-of-delivery (e-POD) verification reconciles load paperwork instantly, expediting payment release for carriers while providing shippers with clear, transparent accounting.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-[#071C24] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Subtle ambient warm amber glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FFB703]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Bold Editorial Composition: Left Oversized Headline, Right Vertically Arranged Propositions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Oversized Headline & Concise Supporting Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#FFB703]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold">
                The Value Proposition
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.08] mb-6 text-balance">
              Why Organizations Choose a Connected Approach.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8">
              By shifting from fragmented legacy brokerages to automated network coordination, Nevex delivers verified capacity, complete operational visibility, and financial predictability.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                <span>Non-Asset Freight Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                <span>100% Pre-Cleared Operating Authority</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                <span>Active FMCSA & COI Automated Checks</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Vertically Arranged Value Propositions (No Cards) */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {propositions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.num} className="py-10 sm:py-12 flex items-start gap-6 group">
                  <span className="text-3xl sm:text-4xl font-mono font-medium text-[#FFB703] tabular-nums shrink-0">
                    {item.num}
                  </span>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                      <Icon className="w-3.5 h-3.5 text-[#FFB703]" />
                      <span>{item.lead}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-3 tracking-tight group-hover:text-[#FFB703] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-base text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
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
