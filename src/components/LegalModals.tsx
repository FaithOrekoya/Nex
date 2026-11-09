import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0B2833] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0E2530]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-[#FFB703]">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                NEVEX NETWORK · Non-Asset Freight Brokerage
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">1. Information We Collect</h4>
                <p>
                  Nevex Network collects operational information necessary to coordinate freight brokerage services, including shipper contact details, pickup/delivery facility addresses, freight specifications, carrier motor carrier identification numbers (MC#), US DOT numbers, insurance certificates, and driver dispatch coordinates.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">2. Use of Telemetry and Freight Data</h4>
                <p>
                  Information supplied through our software platform is utilized strictly to facilitate freight tender matching, monitor transit milestones, verify compliance certifications, and execute settlement documentation. We do not sell or monetize personal or proprietary trade information.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">3. Security and Federal Compliance</h4>
                <p>
                  All data transmitted across our networks is encrypted at rest and in transit. For federal and defense logistics inquiries, access is compartmentalized according to strict security guidelines and authorized operational personnel.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">4. Contacting the Data Protection Desk</h4>
                <p>
                  Questions regarding data processing or record custody may be addressed to <span className="text-[#FFB703] font-mono">privacy@nevexnetwork.com</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">1. Non-Asset Brokerage Operations</h4>
                <p>
                  Nevex Network operates as a non-asset property broker facilitating transportation coordination between authorized shippers (federal and civilian) and independent, certified commercial motor carriers. Nevex Network is not a motor carrier and does not own or operate transportation vehicles.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">2. Carrier Certification and Compliance</h4>
                <p>
                  Motor carriers connecting to the Nevex Network must maintain active operating authority with the FMCSA, valid insurance policies with standard minimum cargo and auto liability thresholds, and a satisfactory safety rating. Falsification of carrier credentials constitutes immediate termination from the network.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">3. Conceptual Platform Architecture</h4>
                <p>
                  Visualizations, interface diagrams, and simulated dispatch panels displayed on this website represent conceptual software capabilities and proprietary architectural designs. Operational tender agreements and binding rate confirmations are executed under formal commercial freight contracts.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2 font-display">4. Governing Law</h4>
                <p>
                  These terms are governed by the federal laws of the United States and the State of Texas, without regard to conflict of law principles.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 flex justify-end bg-[#071C24]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] rounded-full transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
