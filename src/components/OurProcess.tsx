import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const OurProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: '01',
      title: 'Requirement Identification',
      status: 'Intake Specification',
      description:
        'Agencies and organizations define lane parameters, equipment classification (dry van, refrigerated, flatbed), delivery windows, and specialized handling instructions.',
    },
    {
      num: '02',
      title: 'Freight Review & Verification',
      status: 'Compliance Protocol',
      description:
        'Nevex verifies security protocols, freight weights, dimensional clearances, and compliance criteria before releasing the load package to our automated matching engine.',
    },
    {
      num: '03',
      title: 'Automated Carrier Connection',
      status: 'Algorithmic Matching',
      description:
        'Our software pairs the load with verified motor carriers active in the corridor, validating active FMCSA authority, safety ratings, and current certificate of insurance.',
    },
    {
      num: '04',
      title: 'Transportation Coordination',
      status: 'Tender Synchronization',
      description:
        'Rate confirmations, digital bills of lading, and pickup appointment schedules are synchronized electronically between the dispatch desk, shipper facility, and driver.',
    },
    {
      num: '05',
      title: 'In-Transit Milestone Visibility',
      status: 'Corridor Telemetry',
      description:
        'Continuous milestone tracking and geofenced status updates provide transparent corridor progress to shippers without endless manual status calls.',
    },
    {
      num: '06',
      title: 'Delivery Confirmation & Fast Settlement',
      status: 'Custody & Settlement',
      description:
        'Electronic proof-of-delivery (e-POD) capture and bill-of-lading reconciliation clear the shipment cycle, enabling expedited payment release for carrier partners.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-white border-b border-slate-200 text-[#0B2833] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FFB703]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              Operational Flow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12] text-balance">
            Six Steps from Freight Tender to Delivery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            A repeatable operational sequence engineered for precision dispatch, active risk mitigation, and continuous corridor visibility.
          </p>
        </div>

        {/* Asymmetrical Layout: One Large Photograph on Left, Vertical Explanations on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Large High-Resolution Photography (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group">
              <img
                src={IMAGES.logisticsDispatchCenter}
                onError={(e) => {
                  e.currentTarget.src = IMAGES.freightIntermodalHub;
                }}
                alt="Nevex Network modern logistics coordination desk monitoring real-time dispatch routes"
                className="w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2833] via-[#0B2833]/40 to-transparent opacity-90" />
              
              {/* Photo Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#FFB703] font-semibold mb-2">
                  Dispatch Operations Center
                </span>
                <p className="text-lg font-display font-semibold text-white leading-snug mb-3">
                  {steps[activeStep - 1].num}. {steps[activeStep - 1].title}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-3 border-t border-white/15">
                  <span>Current Phase: {steps[activeStep - 1].status}</span>
                  <span className="text-[#FFB703]">Step {activeStep} of 6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vertically Arranged Numbered Process Explanations (No Cards) */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {steps.map((step, idx) => {
              const stepIndex = idx + 1;
              const isActive = activeStep === stepIndex;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(stepIndex)}
                  onClick={() => setActiveStep(stepIndex)}
                  className={`py-8 sm:py-9 transition-colors cursor-pointer px-4 -mx-4 rounded-lg ${
                    isActive ? 'bg-slate-50' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-medium tabular-nums transition-colors shrink-0 ${
                        isActive ? 'text-[#0B2833] font-bold' : 'text-slate-400'
                      }`}
                    >
                      {step.num}
                    </span>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#0B2833]">
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                          {step.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
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
