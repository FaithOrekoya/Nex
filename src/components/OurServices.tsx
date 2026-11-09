import React from 'react';
import { Building2, Cpu, Truck, ArrowUpRight } from 'lucide-react';

interface OurServicesProps {
  onServiceSelect: (service: string) => void;
}

export const OurServices: React.FC<OurServicesProps> = ({ onServiceSelect }) => {
  const services = [
    {
      num: '01',
      id: 'agency-freight',
      icon: Building2,
      title: 'Agency Freight Coordination',
      category: 'Public & Private Shippers',
      description:
        'Connecting federal and civilian freight demand with verified commercial carriers under disciplined security protocols, transparent tracking, and mission timelines.',
      tags: ['Federal Agencies', 'Commercial Shippers', 'Defense Logistics'],
    },
    {
      num: '02',
      id: 'carrier-matching',
      icon: Cpu,
      title: 'Automated Carrier Matching',
      category: 'Algorithmic Corridor Analysis',
      description:
        'Our proprietary software pairs specialized shipment parameters with active, pre-qualified motor carriers in the corridor, reducing deadhead miles and friction.',
      tags: ['Algorithmic Pairing', 'FMCSA Safety Check', 'Automated Tender'],
    },
    {
      num: '03',
      id: 'carrier-network',
      icon: Truck,
      title: 'Carrier Network Opportunities',
      category: 'Motor Carrier Partners',
      description:
        'Certified motor carriers gain predictable volume across key corridors, transparent dispatch documentation, expedited settlement, and dedicated coordination.',
      tags: ['Accelerated Settlement', 'Verified Clearinghouse', '24/7 Dispatch Desk'],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 text-[#0B2833] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#FFB703]" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12] text-balance">
              Logistics Connections Built Around Your Needs.
            </h2>
          </div>

          <p className="text-base text-slate-600 max-w-md font-sans">
            Three dedicated service pillars designed to eliminate coordination bottlenecks, verify compliance, and accelerate delivery execution.
          </p>
        </div>

        {/* Horizontal Numbered Service List with Subtle Dividers (No Cards) */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className="group py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-colors hover:bg-white/80 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl cursor-pointer"
              >
                {/* Number & Title */}
                <div className="flex items-start sm:items-center gap-6 lg:w-5/12">
                  <span className="text-4xl sm:text-5xl font-mono font-medium text-slate-300 group-hover:text-[#FFB703] transition-colors tabular-nums shrink-0">
                    {service.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                      <Icon className="w-3.5 h-3.5 text-[#0B2833] shrink-0" />
                      <span>{service.category}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#0B2833] group-hover:text-[#0B2833] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Tags */}
                <div className="lg:w-5/12 flex flex-col gap-3">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    {service.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {tIdx < service.tags.length - 1 && <span className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Arrow / Action Affordance */}
                <div className="lg:w-2/12 flex items-center lg:justify-end">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B2833] group-hover:text-[#0B2833] transition-colors">
                    <span className="hidden sm:inline">Connect</span>
                    <div className="w-10 h-10 rounded-full border border-slate-300 group-hover:border-[#0B2833] group-hover:bg-[#FFB703] flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
