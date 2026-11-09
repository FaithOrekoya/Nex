import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  ArrowRight, 
  Activity, 
  Filter, 
  Search, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Maximize2,
  Calendar,
  Box,
  Layers
} from 'lucide-react';
import { ShipmentRecord } from '../types';

export const PlatformVisualization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'queue' | 'carriers' | 'timeline'>('map');
  const [selectedShipmentId, setSelectedShipmentId] = useState<string>('NX-4821');
  const [filterEquipment, setFilterEquipment] = useState<string>('all');

  const shipments: ShipmentRecord[] = [
    {
      id: 'NX-4821',
      origin: 'Dallas Intermodal Rail Yard, TX',
      originCode: 'DAL',
      destination: 'Atlanta Strategic Depot, GA',
      destCode: 'ATL',
      equipment: '53ft Dry Van',
      weight: '42,600 lbs',
      status: 'In Transit',
      carrierType: 'Certified Carrier Tier-1',
      progress: 68,
      estDelivery: 'Today · 16:30 EST',
      commodity: 'Federal Humanitarian Care Supplies',
      distance: '782 miles',
    },
    {
      id: 'NX-4822',
      origin: 'Chicago O\'Hare Cargo Hub, IL',
      originCode: 'ORD',
      destination: 'Columbus Regional Distribution, OH',
      destCode: 'CMH',
      equipment: 'Refrigerated Reefer',
      weight: '38,200 lbs',
      status: 'Matched',
      carrierType: 'Dedicated Intermodal',
      progress: 35,
      estDelivery: 'Tomorrow · 09:15 EST',
      commodity: 'Temperature-Controlled Pharmaceuticals',
      distance: '356 miles',
    },
    {
      id: 'NX-4823',
      origin: 'Savannah Deepwater Port, GA',
      originCode: 'SAV',
      destination: 'Charlotte Logistics Gateway, NC',
      destCode: 'CLT',
      equipment: 'Intermodal Box',
      weight: '44,100 lbs',
      status: 'Staging',
      carrierType: 'Fleet Partner',
      progress: 12,
      estDelivery: 'Nov 11 · 11:00 EST',
      commodity: 'Civilian Industrial Components',
      distance: '252 miles',
    },
    {
      id: 'NX-4824',
      origin: 'Denver Industrial Park, CO',
      originCode: 'DEN',
      destination: 'Salt Lake Regional Depot, UT',
      destCode: 'SLC',
      equipment: 'Flatbed Specialized',
      weight: '46,500 lbs',
      status: 'Tender Accepted',
      carrierType: 'Certified Carrier Tier-1',
      progress: 88,
      estDelivery: 'Today · 20:00 MST',
      commodity: 'Heavy Infrastructure Hardware',
      distance: '520 miles',
    },
  ];

  const filteredShipments = filterEquipment === 'all' 
    ? shipments 
    : shipments.filter(s => s.equipment.toLowerCase().includes(filterEquipment.toLowerCase()));

  const currentShipment = shipments.find(s => s.id === selectedShipmentId) || shipments[0];

  const timelineEvents = [
    { time: '14:22 EST', title: 'Automated Carrier Clearance', desc: 'Nevex compliance prober confirmed carrier DOT #384912 active insurance.', status: 'verified' },
    { time: '12:05 EST', title: 'Tender Acceptance & Route Lock', desc: 'Electronic rate confirmation signed digitally by certified driver dispatch.', status: 'matched' },
    { time: '09:30 EST', title: 'Dock Staging & Weight Verification', desc: 'BOL #88204 uploaded; 42,600 lbs certified by origin freight scales.', status: 'completed' },
    { time: '07:15 EST', title: 'Freight Requirement Received', desc: 'Civilian logistics request published via automated EDI integration.', status: 'received' },
  ];

  return (
    <section id="platform" className="py-24 md:py-32 bg-[#F8F7F3] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span className="text-xs font-semibold tracking-widest text-[#FF5A1F] uppercase font-display">
                PROPRIETARY LOGISTICS SOFTWARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#171717] tracking-tight leading-[1.12]">
              Intelligent Software for Precise Freight Coordination.
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              Experience the conceptual architecture designed by Nevex Network to orchestrate automated carrier matching, live corridor tracking, and instant proof-of-delivery.
            </p>
          </div>

          {/* Interactive view toggle buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-300 rounded-lg shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'map' ? 'bg-[#171717] text-white shadow-sm' : 'text-neutral-600 hover:text-[#171717]'
              }`}
            >
              Corridor Map
            </button>
            <button
              onClick={() => setActiveTab('queue')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'queue' ? 'bg-[#171717] text-white shadow-sm' : 'text-neutral-600 hover:text-[#171717]'
              }`}
            >
              Freight Queue
            </button>
            <button
              onClick={() => setActiveTab('carriers')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'carriers' ? 'bg-[#171717] text-white shadow-sm' : 'text-neutral-600 hover:text-[#171717]'
              }`}
            >
              Carrier Matrix
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'timeline' ? 'bg-[#171717] text-white shadow-sm' : 'text-neutral-600 hover:text-[#171717]'
              }`}
            >
              Activity Stream
            </button>
          </div>
        </div>

        {/* Large Desktop Monitor-Style Chassis */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#171717] border-4 sm:border-8 border-[#222222] shadow-2xl shadow-black/30 overflow-hidden">
          
          {/* Top Window / Monitor Chrome Bar */}
          <div className="bg-[#1C1C1C] px-4 sm:px-6 py-3 border-b border-[#2B2B2B] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5A1F]" />
              <div className="w-3 h-3 rounded-full bg-[#333333]" />
              <div className="w-3 h-3 rounded-full bg-[#333333]" />
              <span className="ml-3 text-[11px] font-mono text-neutral-400 hidden sm:inline">
                nevex-network // console.dispatch.v1
              </span>
            </div>

            {/* URL bar mockup */}
            <div className="hidden md:flex items-center gap-2 px-4 py-1 rounded bg-[#121212] border border-[#2B2B2B] text-[11px] font-mono text-neutral-300 w-96 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8F36A]" />
              <span className="text-neutral-400">https://</span>
              <span>app.nevexnetwork.com/dispatch-matrix</span>
            </div>

            {/* Right utility icons */}
            <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono">
              <span className="hidden sm:inline text-[#D8F36A]">● Live Coordination</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Software Dashboard Inner Body */}
          <div className="bg-[#171717] p-4 sm:p-6 lg:p-8 text-white min-h-[520px]">
            
            {/* Top metrics row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2B2B2B]">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Active Dispatch Lanes
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  34 <span className="text-xs font-normal text-[#D8F36A]">Active</span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-1">
                  Federal & Commercial Corridors
                </div>
              </div>

              <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2B2B2B]">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Matched Certified Carriers
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#FF5A1F]">
                  100% <span className="text-xs font-normal text-neutral-300">Verified</span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-1">
                  DOT & Cargo Insurance Cleared
                </div>
              </div>

              <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2B2B2B]">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Tender Response Window
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  14 <span className="text-xs font-normal text-neutral-300">Minutes</span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-1">
                  Automated Algorithmic Dispatch
                </div>
              </div>

              <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2B2B2B]">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  On-Schedule Fulfillment
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#D8F36A]">
                  Active <span className="text-xs font-normal text-neutral-300">Routing</span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-1">
                  Continuous Telemetry Monitoring
                </div>
              </div>
            </div>

            {/* TAB 1: CORRIDOR MAP & SHIPMENT DETAIL */}
            {activeTab === 'map' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Visual Map Area */}
                <div className="lg:col-span-8 bg-[#141414] rounded-xl border border-[#2A2A2A] p-5 relative overflow-hidden flex flex-col justify-between">
                  
                  {/* Top Map Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF5A1F]" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Active National Freight Corridor: {currentShipment.originCode} ➔ {currentShipment.destCode}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono bg-[#262626] text-neutral-300 px-2 py-0.5 rounded border border-[#333333]">
                      Distance: {currentShipment.distance}
                    </span>
                  </div>

                  {/* Simulated Nationwide Grid Map */}
                  <div className="my-6 relative h-64 sm:h-72 w-full flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 600 240" fill="none">
                      {/* Grid background */}
                      <path d="M0 60 H600 M0 120 H600 M0 180 H600" stroke="#222222" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M120 0 V240 M240 0 V240 M360 0 V240 M480 0 V240" stroke="#222222" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Secondary non-active lanes */}
                      <path d="M100 180 Q 250 80 480 90" stroke="#333333" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M80 70 Q 280 190 420 180" stroke="#333333" strokeWidth="1.5" strokeDasharray="3 3" />
                      
                      {/* Primary active selected lane */}
                      <path
                        d="M120 170 Q 300 60 480 110"
                        stroke="#FF5A1F"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Moving Truck Coordinate on Path */}
                      <circle cx="340" cy="98" r="8" fill="#FF5A1F" />
                      <circle cx="340" cy="98" r="3" fill="#FFFFFF" />

                      {/* Origin City */}
                      <circle cx="120" cy="170" r="6" fill="#171717" stroke="#FF5A1F" strokeWidth="2.5" />
                      <text x="120" y="196" fill="#FFFFFF" fontSize="10" fontFamily="Sora" fontWeight="bold" textAnchor="middle">
                        {currentShipment.originCode}
                      </text>

                      {/* Destination City */}
                      <circle cx="480" cy="110" r="6" fill="#171717" stroke="#D8F36A" strokeWidth="2.5" />
                      <text x="480" y="136" fill="#D8F36A" fontSize="10" fontFamily="Sora" fontWeight="bold" textAnchor="middle">
                        {currentShipment.destCode}
                      </text>
                    </svg>

                    {/* Floating pinpoint details */}
                    <div className="absolute top-4 left-6 bg-[#1F1F1F]/90 border border-[#333333] px-3 py-1.5 rounded text-[11px] font-mono">
                      <span className="text-neutral-400">Driver Telemetry: </span>
                      <span className="text-[#D8F36A]">65 mph · On Schedule</span>
                    </div>

                    <div className="absolute bottom-3 right-6 bg-[#1F1F1F]/90 border border-[#333333] px-3 py-1.5 rounded text-[11px] font-mono">
                      <span className="text-neutral-400">ETA: </span>
                      <span className="text-white font-bold">{currentShipment.estDelivery}</span>
                    </div>
                  </div>

                  {/* Shipment Selector Quick Bar */}
                  <div className="pt-3 border-t border-[#262626] flex items-center justify-between gap-2 overflow-x-auto">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider shrink-0">
                      Select Shipment:
                    </span>
                    <div className="flex items-center gap-2">
                      {shipments.map(s => (
                        <button
                          key={s.id}
                          onClick={() => setSelectedShipmentId(s.id)}
                          className={`px-2.5 py-1 text-xs font-mono rounded cursor-pointer transition-all ${
                            selectedShipmentId === s.id
                              ? 'bg-[#FF5A1F] text-white font-bold'
                              : 'bg-[#222222] text-neutral-400 hover:text-white'
                          }`}
                        >
                          {s.id} ({s.originCode}➔{s.destCode})
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Shipment Detail Panel */}
                <div className="lg:col-span-4 bg-[#1E1E1E] rounded-xl border border-[#2B2B2B] p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#2C2C2C] mb-4">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          Active Dispatch Tender
                        </div>
                        <div className="text-lg font-display font-bold text-white">
                          {currentShipment.id}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[#FF5A1F]/15 text-[#FF5A1F] border border-[#FF5A1F]/30">
                        {currentShipment.status}
                      </span>
                    </div>

                    <div className="space-y-3.5 text-xs">
                      <div>
                        <span className="text-neutral-400 block font-mono text-[10px] uppercase">
                          Origin Facility
                        </span>
                        <span className="font-semibold text-white">{currentShipment.origin}</span>
                      </div>

                      <div>
                        <span className="text-neutral-400 block font-mono text-[10px] uppercase">
                          Destination Gateway
                        </span>
                        <span className="font-semibold text-[#D8F36A]">{currentShipment.destination}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2A2A2A]">
                        <div>
                          <span className="text-neutral-400 block font-mono text-[10px] uppercase">
                            Equipment
                          </span>
                          <span className="font-semibold text-white">{currentShipment.equipment}</span>
                        </div>
                        <div>
                          <span className="text-neutral-400 block font-mono text-[10px] uppercase">
                            Payload Weight
                          </span>
                          <span className="font-semibold text-white">{currentShipment.weight}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#2A2A2A]">
                        <span className="text-neutral-400 block font-mono text-[10px] uppercase">
                          Commodity Class
                        </span>
                        <span className="text-white">{currentShipment.commodity}</span>
                      </div>

                      <div className="pt-2 border-t border-[#2A2A2A]">
                        <div className="flex justify-between text-[11px] mb-1 font-mono">
                          <span className="text-neutral-400">Route Completion</span>
                          <span className="text-[#FF5A1F] font-bold">{currentShipment.progress}%</span>
                        </div>
                        <div className="w-full bg-[#141414] h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-[#FF5A1F] h-full rounded-full transition-all duration-500" 
                            style={{ width: `${currentShipment.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5 font-mono">
                      <ShieldCheck className="w-4 h-4 text-[#D8F36A]" />
                      Carrier Insured $250k
                    </span>
                    <span className="text-[#FF5A1F] font-mono">Verified MC#</span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: FREIGHT QUEUE & DISPATCH TABLE */}
            {activeTab === 'queue' && (
              <div className="bg-[#141414] rounded-xl border border-[#2A2A2A] p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      Automated Freight Request Ledger
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Real-time lane tenders awaiting or assigned to certified carrier capacity
                    </p>
                  </div>

                  {/* Filter selector */}
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-neutral-400" />
                    <select
                      value={filterEquipment}
                      onChange={(e) => setFilterEquipment(e.target.value)}
                      className="bg-[#1F1F1F] text-xs text-white border border-[#333333] rounded px-3 py-1.5 focus:outline-none focus:border-[#FF5A1F]"
                    >
                      <option value="all">All Equipment Types</option>
                      <option value="Dry Van">53ft Dry Van</option>
                      <option value="Reefer">Refrigerated (Reefer)</option>
                      <option value="Flatbed">Flatbed Specialized</option>
                      <option value="Intermodal">Intermodal Box</option>
                    </select>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#1C1C1C] text-neutral-400 uppercase tracking-wider text-[10px] border-b border-[#2A2A2A]">
                      <tr>
                        <th className="py-3 px-4">Tender ID</th>
                        <th className="py-3 px-4">Origin ➔ Destination</th>
                        <th className="py-3 px-4">Equipment</th>
                        <th className="py-3 px-4">Payload</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Carrier Match</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#242424]">
                      {filteredShipments.map((s) => (
                        <tr 
                          key={s.id} 
                          className="hover:bg-[#1E1E1E] transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedShipmentId(s.id);
                            setActiveTab('map');
                          }}
                        >
                          <td className="py-3.5 px-4 font-bold text-[#FF5A1F]">{s.id}</td>
                          <td className="py-3.5 px-4 text-white font-sans font-medium">
                            {s.originCode} <span className="text-neutral-500">➔</span> {s.destCode}
                            <span className="block text-[10px] text-neutral-400 font-mono">{s.distance}</span>
                          </td>
                          <td className="py-3.5 px-4 text-neutral-300">{s.equipment}</td>
                          <td className="py-3.5 px-4 text-neutral-300">{s.weight}</td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              s.status === 'In Transit' ? 'bg-[#FF5A1F]/20 text-[#FF5A1F]' :
                              s.status === 'Matched' ? 'bg-[#D8F36A]/20 text-[#D8F36A]' :
                              'bg-neutral-800 text-neutral-300'
                            }`}>
                              {s.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[#D8F36A] flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>{s.carrierType}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: CARRIER CLEARANCE MATRIX */}
            {activeTab === 'carriers' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#141414] p-5 rounded-xl border border-[#2A2A2A]">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#FF5A1F]" />
                    <h3 className="font-display font-bold text-white text-base">Safety & Compliance Protocol</h3>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    Automated FMCSA safety registry verification checking hours-of-service compliance, vehicle maintenance, and driver safety audits.
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between p-2 rounded bg-[#1C1C1C]">
                      <span className="text-neutral-400">DOT Operating Authority</span>
                      <span className="text-[#D8F36A]">Active · Validated</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-[#1C1C1C]">
                      <span className="text-neutral-400">Carrier Inspection Rating</span>
                      <span className="text-white">Satisfactory / Gold</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] p-5 rounded-xl border border-[#2A2A2A]">
                  <div className="flex items-center gap-2 mb-3">
                    <Box className="w-5 h-5 text-[#D8F36A]" />
                    <h3 className="font-display font-bold text-white text-base">Cargo Insurance Verification</h3>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    Continuous certificate of insurance (COI) verification with minimum $250,000 to $1,000,000 auto liability and cargo coverage.
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between p-2 rounded bg-[#1C1C1C]">
                      <span className="text-neutral-400">Cargo Coverage Minimum</span>
                      <span className="text-white">$250,000 Verified</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-[#1C1C1C]">
                      <span className="text-neutral-400">Auto Liability Minimum</span>
                      <span className="text-white">$1,000,000 Verified</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] p-5 rounded-xl border border-[#2A2A2A]">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-[#FF5A1F]" />
                    <h3 className="font-display font-bold text-white text-base">Equipment Specification Check</h3>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    Live verification of trailer telematics, e-track systems, swing doors, reefer temperature calibration, and liftgate capabilities.
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between p-2 rounded bg-[#1C1C1C]">
                      <span className="text-neutral-400">Trailer Temperature Telemetry</span>
                      <span className="text-[#D8F36A]">Calibrated -10°F to 70°F</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-[#1C1C1C]">
                      <span className="text-neutral-400">Trailer Age Standard</span>
                      <span className="text-white">&lt; 7 Years Fleet Age</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: ACTIVITY STREAM */}
            {activeTab === 'timeline' && (
              <div className="bg-[#141414] rounded-xl border border-[#2A2A2A] p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF5A1F]" />
                    <h3 className="font-display font-bold text-white text-base">
                      Real-Time Logistics Event Ledger
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#D8F36A]">
                    Automated Event Stream
                  </span>
                </div>

                <div className="space-y-6">
                  {timelineEvents.map((evt, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-[#FF5A1F] mt-1 shrink-0" />
                        {idx !== timelineEvents.length - 1 && (
                          <div className="w-0.5 h-12 bg-[#2B2B2B] mt-1" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-[#FF5A1F]">{evt.time}</span>
                          <span className="text-xs font-semibold text-white font-display">{evt.title}</span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          {evt.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conceptual Notice Banner */}
            <div className="mt-8 pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-neutral-400 text-[11px] font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                CONCEPTUAL INTERFACE VISUALIZATION · FOR ARCHITECTURAL & PRODUCT PRESENTATION
              </span>
              <span className="text-neutral-400">
                Nevex Network Intelligent Logistics Platform
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
