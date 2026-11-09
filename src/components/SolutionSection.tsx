import React, { useState } from 'react';
import { Zap, ShieldCheck, Layers, Check, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'demand' | 'nevex' | 'carriers'>('nevex');

  const benefits = [
    {
      id: 'automated-matching',
      icon: Zap,
      title: 'Automated Freight Matching',
      description:
        'Our proprietary algorithmic engine analyzes freight specifications, lane geography, equipment requirements, and carrier availability to establish high-confidence pairings in seconds.',
    },
    {
      id: 'connected-network',
      icon: ShieldCheck,
      title: 'Connected Carrier Network',
      description:
        'Every truck carrier connected to Nevex is rigorously pre-screened for operating authority, safety ratings, cargo insurance compliance, and on-time performance history.',
    },
    {
      id: 'simplified-coordination',
      icon: Layers,
      title: 'Simplified Coordination',
      description:
        'Replace dozens of disconnected dispatch emails with a unified coordination framework. From electronic load tender to automated status milestones and digital documentation.',
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#171717] text-white border-b border-[#262626] relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF5A1F]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs font-semibold tracking-widest text-[#FF5A1F] uppercase font-display">
              THE NEVEX APPROACH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            One Connected Network. A Smarter Way to Coordinate Freight.
          </h2>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            As a non-asset-based freight brokerage, Nevex Network does not own trucks; instead, we deploy a proprietary automated software platform to connect federal and civilian freight demand with pre-qualified, certified truck carriers with surgical accuracy.
          </p>
        </div>

        {/* Large Custom Logistics Network Illustration (Major Visual Feature) */}
        <div className="mb-20 bg-[#1D1D1D] rounded-2xl border border-[#2E2E2E] p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#2A2A2A] mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F]">
                Proprietary Architecture Diagram
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                Freight Demand ➔ Central Nevex Routing Node ➔ Certified Truck Carriers
              </h3>
            </div>
            
            {/* Interactive Inspector Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#141414] rounded-lg border border-[#2B2B2B]">
              <button
                onClick={() => setActiveNode('demand')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  activeNode === 'demand'
                    ? 'bg-[#FF5A1F] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                1. Freight Demand
              </button>
              <button
                onClick={() => setActiveNode('nevex')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  activeNode === 'nevex'
                    ? 'bg-[#FF5A1F] text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                2. Nevex Node
              </button>
              <button
                onClick={() => setActiveNode('carriers')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  activeNode === 'carriers'
                    ? 'bg-[#FF5A1F] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                3. Truck Carriers
              </button>
            </div>
          </div>

          {/* Large Network SVG Canvas */}
          <div className="relative w-full h-[320px] sm:h-[400px] bg-[#121212] rounded-xl border border-[#262626] overflow-hidden flex items-center justify-center p-4">
            
            {/* Network Vector Diagram */}
            <svg
              className="w-full h-full max-w-4xl"
              viewBox="0 0 900 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Background Lines */}
              <defs>
                <linearGradient id="orangePulse" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF5A1F" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D8F36A" stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Connecting Route Lines: Demand to Nevex Node */}
              <path
                d="M170 120 C 300 120, 320 200, 450 200"
                stroke={activeNode === 'demand' || activeNode === 'nevex' ? '#FF5A1F' : '#333333'}
                strokeWidth={activeNode === 'demand' || activeNode === 'nevex' ? '3' : '1.5'}
                strokeDasharray={activeNode === 'demand' ? '6 4' : 'none'}
              />
              <path
                d="M170 200 C 300 200, 320 200, 450 200"
                stroke={activeNode === 'demand' || activeNode === 'nevex' ? '#FF5A1F' : '#333333'}
                strokeWidth={activeNode === 'demand' || activeNode === 'nevex' ? '3' : '1.5'}
              />
              <path
                d="M170 280 C 300 280, 320 200, 450 200"
                stroke={activeNode === 'demand' || activeNode === 'nevex' ? '#FF5A1F' : '#333333'}
                strokeWidth={activeNode === 'demand' || activeNode === 'nevex' ? '3' : '1.5'}
                strokeDasharray={activeNode === 'demand' ? '6 4' : 'none'}
              />

              {/* Connecting Route Lines: Nevex Node to Carrier Destinations */}
              <path
                d="M450 200 C 580 200, 600 100, 730 100"
                stroke={activeNode === 'carriers' || activeNode === 'nevex' ? '#D8F36A' : '#333333'}
                strokeWidth={activeNode === 'carriers' || activeNode === 'nevex' ? '2.5' : '1.5'}
                strokeDasharray="4 4"
              />
              <path
                d="M450 200 C 580 200, 600 170, 730 170"
                stroke={activeNode === 'carriers' || activeNode === 'nevex' ? '#FF5A1F' : '#333333'}
                strokeWidth={activeNode === 'carriers' || activeNode === 'nevex' ? '3' : '1.5'}
              />
              <path
                d="M450 200 C 580 200, 600 240, 730 240"
                stroke={activeNode === 'carriers' || activeNode === 'nevex' ? '#FF5A1F' : '#333333'}
                strokeWidth={activeNode === 'carriers' || activeNode === 'nevex' ? '3' : '1.5'}
              />
              <path
                d="M450 200 C 580 200, 600 310, 730 310"
                stroke={activeNode === 'carriers' || activeNode === 'nevex' ? '#D8F36A' : '#333333'}
                strokeWidth={activeNode === 'carriers' || activeNode === 'nevex' ? '2.5' : '1.5'}
                strokeDasharray="4 4"
              />

              {/* LEFT NODES: Freight Demand */}
              <g onClick={() => setActiveNode('demand')} className="cursor-pointer">
                {/* Federal Demand */}
                <rect x="50" y="95" width="120" height="50" rx="8" fill="#1C1C1C" stroke={activeNode === 'demand' ? '#FF5A1F' : '#333333'} strokeWidth="1.5" />
                <circle cx="70" cy="120" r="5" fill="#FF5A1F" />
                <text x="86" y="117" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Sora">Federal Agency</text>
                <text x="86" y="132" fill="#888888" fontSize="9" fontFamily="JetBrains Mono">Mission Freight</text>

                {/* Civilian Commercial Demand */}
                <rect x="50" y="175" width="120" height="50" rx="8" fill="#1C1C1C" stroke={activeNode === 'demand' ? '#FF5A1F' : '#333333'} strokeWidth="1.5" />
                <circle cx="70" cy="200" r="5" fill="#FF5A1F" />
                <text x="86" y="197" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Sora">Civilian Shipper</text>
                <text x="86" y="212" fill="#888888" fontSize="9" fontFamily="JetBrains Mono">Commercial Supply</text>

                {/* Institutional Distribution */}
                <rect x="50" y="255" width="120" height="50" rx="8" fill="#1C1C1C" stroke={activeNode === 'demand' ? '#FF5A1F' : '#333333'} strokeWidth="1.5" />
                <circle cx="70" cy="280" r="5" fill="#FF5A1F" />
                <text x="86" y="277" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Sora">Enterprise Retail</text>
                <text x="86" y="292" fill="#888888" fontSize="9" fontFamily="JetBrains Mono">Scheduled Volume</text>
              </g>

              {/* CENTER NODE: NEVEX NETWORK Intelligent Routing Node */}
              <g onClick={() => setActiveNode('nevex')} className="cursor-pointer">
                <circle cx="450" cy="200" r="75" fill="url(#nodeGlow)" />
                <circle cx="450" cy="200" r="48" fill="#171717" stroke="#FF5A1F" strokeWidth="3" />
                <circle cx="450" cy="200" r="38" fill="#222222" stroke="#FF5A1F" strokeWidth="1" strokeDasharray="3 3" />
                <text x="450" y="194" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="Sora" textAnchor="middle" letterSpacing="1">NEVEX</text>
                <text x="450" y="210" fill="#FF5A1F" fontSize="10" fontWeight="bold" fontFamily="Sora" textAnchor="middle" letterSpacing="2">NETWORK</text>
                <text x="450" y="226" fill="#D8F36A" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">AUTOMATED MATCH</text>
              </g>

              {/* RIGHT NODES: Certified Truck Carriers */}
              <g onClick={() => setActiveNode('carriers')} className="cursor-pointer">
                {/* 53ft Dry Van */}
                <rect x="730" y="75" width="135" height="46" rx="8" fill="#1C1C1C" stroke={activeNode === 'carriers' ? '#D8F36A' : '#333333'} strokeWidth="1.5" />
                <circle cx="750" cy="98" r="4.5" fill="#D8F36A" />
                <text x="764" y="94" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Sora">53ft Dry Van Fleet</text>
                <text x="764" y="108" fill="#888888" fontSize="8" fontFamily="JetBrains Mono">Certified Carrier</text>

                {/* Refrigerated / Temperature Controlled */}
                <rect x="730" y="145" width="135" height="46" rx="8" fill="#1C1C1C" stroke={activeNode === 'carriers' ? '#FF5A1F' : '#333333'} strokeWidth="1.5" />
                <circle cx="750" cy="168" r="4.5" fill="#FF5A1F" />
                <text x="764" y="164" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Sora">Refrigerated (Reefer)</text>
                <text x="764" y="178" fill="#888888" fontSize="8" fontFamily="JetBrains Mono">Cold Chain Verified</text>

                {/* Flatbed & Specialized */}
                <rect x="730" y="215" width="135" height="46" rx="8" fill="#1C1C1C" stroke={activeNode === 'carriers' ? '#FF5A1F' : '#333333'} strokeWidth="1.5" />
                <circle cx="750" cy="238" r="4.5" fill="#FF5A1F" />
                <text x="764" y="234" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Sora">Flatbed / Specialized</text>
                <text x="764" y="248" fill="#888888" fontSize="8" fontFamily="JetBrains Mono">Heavy Haul Certified</text>

                {/* Dedicated Regional */}
                <rect x="730" y="285" width="135" height="46" rx="8" fill="#1C1C1C" stroke={activeNode === 'carriers' ? '#D8F36A' : '#333333'} strokeWidth="1.5" />
                <circle cx="750" cy="308" r="4.5" fill="#D8F36A" />
                <text x="764" y="304" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Sora">Intermodal Rail/Road</text>
                <text x="764" y="318" fill="#888888" fontSize="8" fontFamily="JetBrains Mono">Container Clearing</text>
              </g>
            </svg>

            {/* Context callout in bottom left */}
            <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 bg-[#1C1C1C]/90 border border-[#333333] px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span>
                {activeNode === 'demand' && 'Selected: Freight requirements submitted by agencies'}
                {activeNode === 'nevex' && 'Selected: Central Nevex algorithm validates capacity & routes'}
                {activeNode === 'carriers' && 'Selected: Vetted motor carriers receiving targeted dispatches'}
              </span>
            </div>

          </div>

        </div>

        {/* 3 Supporting Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-[#1C1C1C] rounded-xl border border-[#2E2E2E] p-8 flex flex-col justify-between hover:border-[#FF5A1F]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#262626] border border-[#3A3A3A] flex items-center justify-center text-[#FF5A1F] group-hover:scale-105 group-hover:bg-[#FF5A1F] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#292929] flex items-center gap-2 text-xs font-mono text-[#D8F36A]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Eliminates Operational Fragmentation</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
