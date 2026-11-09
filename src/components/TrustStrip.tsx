import React from 'react';
import { Network, ShieldCheck, Building2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const values = [
    {
      icon: Network,
      title: 'Technology-Driven Coordination',
      description: 'Proprietary automated matching connects lane demand with verified carrier capacity in real time.',
      tag: 'Automated Platform'
    },
    {
      icon: ShieldCheck,
      title: 'Certified Carrier Connections',
      description: 'Pre-screened commercial truck carriers verified for insurance, safety ratings, and equipment integrity.',
      tag: 'Rigorous Verification'
    },
    {
      icon: Building2,
      title: 'Federal & Civilian Freight',
      description: 'Unified brokerage capability engineered to coordinate public agency requirements alongside private commercial supply chains.',
      tag: 'Dual-Sector Capability'
    },
  ];

  return (
    <section className="relative z-20 bg-[#171717] border-y border-[#262626] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col justify-between py-6 md:py-2 ${
                  idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#242424] border border-[#333333] flex items-center justify-center text-[#FF5A1F]">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle orange hairline accent */}
                <div className="w-12 h-0.5 bg-[#FF5A1F]/60 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
