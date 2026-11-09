import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onGetStartedClick: () => void;
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetStartedClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B2833]/92 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
          
          {/* Left: Nevex Network Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB703] rounded-lg text-left cursor-pointer shrink-0"
            aria-label="Nevex Network Home"
          >
            <Logo variant="light" size="md" />
          </button>

          {/* Center: Floating Pill Navigation (Velmoraine Reference) */}
          <nav
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.14] shadow-xs"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium text-white/75 hover:text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB703]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Get in Touch CTA Pill Button + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onGetStartedClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] active:scale-[0.98] transition-all shadow-md shadow-[#FFB703]/20 cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFB703]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Toggle (Pill style matching Velmoraine) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-white hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB703] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0B2833]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFB703] font-semibold">
                Menu & Navigation
              </span>
              <span className="text-[11px] text-white/50 font-mono">NEVEX NETWORK</span>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.id)}
                  className="px-4 py-3 rounded-xl text-lg font-display font-medium text-white/85 hover:text-white hover:bg-white/[0.06] text-left transition-all cursor-pointer flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#FFB703] opacity-0 group-hover:opacity-100 font-mono">→</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStartedClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] transition-all cursor-pointer shadow-lg shadow-[#FFB703]/25"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <p className="text-xs text-white/40 text-center font-mono">
              Nevex Network · Modern Logistics & Freight Brokerage
            </p>
          </div>
        </div>
      )}
    </>
  );
};
