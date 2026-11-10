import React from 'react';
import { ArrowUpRight, ShieldCheck, Building2, Truck } from 'lucide-react';
import { UserRole } from '../types';
import { IMAGES } from '../assets/images';

interface WhoWeServeProps {
  onSelectRole: (role: UserRole) => void;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({ onSelectRole }) => {
  return (
    <section id="who-we-serve" className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 text-[#0B2833] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FFB703]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              Who We Serve
            </span>
            <span className="w-8 h-[2px] bg-[#FFB703]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12] text-balance">
            Connecting Public, Commercial, and Carrier Networks.
          </h2>
        </div>

        {/* Photographic Collage with Distinct Image Sizes and Proportions (No 3-card grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Feature 1: Federal & Defense Agencies (Wide Landscape Visual Anchor, col-span-8) */}
          <div 
            onClick={() => onSelectRole('federal')}
            className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg group cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-10"
          >
            <img
              src={IMAGES.federalLogistics}
              onError={(e) => {
                e.currentTarget.src = IMAGES.heroFreightTruck;
              }}
              alt="Federal logistics operations and secure government freight transportation staging"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.75] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2833] via-[#0B2833]/60 to-transparent" />

            <div className="relative z-10 text-white max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#FFB703]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFB703] font-semibold">
                  01 · Federal & Defense Agencies
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white mb-3 tracking-tight">
                Mission-Ready Transport with Strict Compliance.
              </h3>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-6 font-sans">
                Disciplined freight dispatch, verified driver clearances, continuous chain-of-custody tracking, and full audit transparency for defense and civilian government coordinators.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-[#FFB703] hover:text-[#0B2833] px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all">
                <span>Connect for Federal Freight</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Feature 2: Civilian & Commercial Shippers (Tall Vertical Visual Feature, col-span-4) */}
          <div 
            onClick={() => onSelectRole('civilian')}
            className="lg:col-span-4 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg group cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={IMAGES.commercialWarehouse}
              onError={(e) => {
                e.currentTarget.src = IMAGES.warehouseOperations;
              }}
              alt="Commercial enterprise warehouse logistics and dry van shipping pallets"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.72] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2833] via-[#0B2833]/70 to-transparent" />

            <div className="relative z-10 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#FFB703]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFB703] font-semibold">
                  02 · Commercial Shippers
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-3 tracking-tight">
                Enterprise Scale & Dynamic Capacity.
              </h3>
              <p className="text-sm text-slate-200/90 leading-relaxed mb-6 font-sans">
                Dedicated dry van, temperature-controlled reefer, and flatbed capacity with live telemetry and zero broker markup opacity.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-[#FFB703] hover:text-[#0B2833] px-4 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all">
                <span>Commercial Solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Feature 3: Certified Motor Carriers (Asymmetrical Horizontal Split Ribbon, col-span-12) */}
          <div 
            onClick={() => onSelectRole('carrier')}
            className="lg:col-span-12 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-slate-900">
              <img
                src={IMAGES.truckFleet}
                onError={(e) => {
                  e.currentTarget.src = IMAGES.heroFreightTruck;
                }}
                alt="Fleet of modern commercial freight trucks lined up at dawn in logistics depot"
                className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B2833]/40" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                <Truck className="w-4 h-4 text-[#0B2833]" />
                <span>03 · Certified Truck Carriers</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#0B2833] mb-3 tracking-tight">
                Consistent Lanes, Respectful Partnerships, Fast Settlement.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans mb-6">
                Independent owner-operators and fleet owners access high-volume lanes with fair rates and rapid settlement. We eliminate predatory factoring fees by reconciling electronic proof-of-delivery (e-POD) within 24 to 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-[#FFB703] group-hover:bg-[#F5A623] px-6 py-3 rounded-full transition-colors shadow-xs">
                  <span>Join the Certified Carrier Network</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Pre-Cleared FMCSA Authority · Prompt Digital Payment
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
