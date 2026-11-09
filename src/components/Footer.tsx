import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2833] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <Logo variant="light" size="md" showTagline />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6 font-sans">
                Nevex Network is a non-asset-based freight brokerage connecting federal and civilian freight demand with certified truck carriers through a proprietary automated software platform.
              </p>
              <div className="text-xs font-mono text-slate-400">
                Founded by <span className="text-white font-semibold">Antonio Hyatt</span> · Dallas, TX
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
              <span>Non-Asset Freight Brokerage Architecture</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FFB703] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FFB703] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FFB703] transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#FFB703] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FFB703] transition-colors cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#FFB703] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FFB703] transition-colors text-left cursor-pointer"
                >
                  Agency Coordination
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FFB703] transition-colors text-left cursor-pointer"
                >
                  Carrier Matching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FFB703] transition-colors text-left cursor-pointer"
                >
                  Carrier Opportunities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FFB703] transition-colors text-left cursor-pointer"
                >
                  Intelligent Dispatch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FFB703] transition-colors text-left cursor-pointer"
                >
                  Digital POD Settlement
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFB703] font-semibold mb-4">
              Contact & Dispatch
            </h4>
            <div className="space-y-3.5 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FFB703] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Direct Freight Inquiries</span>
                  <a href="mailto:inquiries@nevexnetwork.com" className="hover:text-[#FFB703] transition-colors">
                    inquiries@nevexnetwork.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFB703] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Operations & Dispatch Desk</span>
                  <span>1-800-555-NEVEX (6383)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFE082] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Headquarters</span>
                  <span>Dallas Freight Gateway, TX</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-full bg-white/[0.06] hover:bg-white/10 text-slate-300 hover:text-white border border-white/15 transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} NEVEX NETWORK INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#FFB703] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#FFB703] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <span className="text-slate-400">Non-Asset Freight Brokerage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
