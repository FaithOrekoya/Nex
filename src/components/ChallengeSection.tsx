import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

export const ChallengeSection: React.FC = () => {
  const challenges = [
    {
      num: '01',
      title: 'Fragmented Operations',
      subtitle: 'Siloed communication and manual dispatch delays',
      description:
        'Freight requests bounce between disjointed phone calls, non-standardized email threads, and fragmented freight boards. Shippers lose visibility, while critical transit windows slip away without automated coordination.',
    },
    {
      num: '02',
      title: 'Working Capital Bottlenecks',
      subtitle: 'Extended payment terms and liquidity constraints',
      description:
        'Traditional logistics brokers lock carriers into lengthy 30-to-60 day settlement terms and cumbersome proof-of-delivery processing. This cash flow delay restricts carrier fleet mobility and increases operational risk across the supply chain.',
    },
    {
      num: '03',
      title: 'Disconnected Carrier Coordination',
      subtitle: 'Uncertain capacity and unverified equipment standards',
      description:
        'Federal and civilian shippers struggle to verify real-time equipment availability, safety ratings, and insurance compliance. The result is volatile spot rates, sudden cancellations, and unfulfilled shipments.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8F7F3] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs font-semibold tracking-widest text-[#FF5A1F] uppercase font-display">
              INDUSTRY FRICTION & CHALLENGES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#171717] tracking-tight leading-[1.15] text-balance">
            Supply Chains Deserve Better Connections.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Global freight movement has grown vastly more complex, yet the operational rails behind it remain plagued by manual handoffs, opaque pricing, and fragmented capacity.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Warehouse/Freight Operations Image */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden bg-[#171717] border border-neutral-300 shadow-xl">
                <img
                  src="/src/assets/images/warehouse_operations_1794217518003.jpg"
                  alt="Modern high-density freight distribution operations and staging warehouse"
                  className="w-full aspect-[4/5] object-cover object-center filter contrast-[1.03]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image overlay caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D8F36A] uppercase tracking-wider mb-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Operational Reality
                  </div>
                  <p className="text-sm font-medium text-neutral-200 leading-snug">
                    Over 80% of freight coordination friction originates from manual communication and disconnected carrier discovery.
                  </p>
                </div>
              </div>

              {/* Decorative accent bracket */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#FF5A1F]/40 pointer-events-none rounded-br-2xl" />
            </div>
          </div>

          {/* Right Column: Editorial Breakdown of the 3 Problems */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200">
            {challenges.map((item) => (
              <div key={item.num} className="py-8 first:pt-0 last:pb-0 group">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-[#FF5A1F]">
                    {item.num}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Systemic Bottleneck
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#171717] group-hover:text-[#FF5A1F] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-neutral-800 mb-3 font-display">
                  {item.subtitle}
                </p>

                <p className="text-neutral-600 text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle indicator bar */}
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#171717] group-hover:text-[#FF5A1F] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                  <span>Nevex solves this through automated intelligence</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
