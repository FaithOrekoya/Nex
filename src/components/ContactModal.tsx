import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { UserRole, ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: UserRole;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialRole = 'civilian' }) => {
  const [role, setRole] = useState<UserRole>(initialRole);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    role: initialRole,
    phone: '',
    equipmentType: '53ft Dry Van',
    laneOrigin: '',
    laneDestination: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Valid work email is required';
    if (!formData.organization.trim()) errs.organization = 'Organization or Fleet name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please provide details on your inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTicketId(`NVX-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      role: 'civilian',
      phone: '',
      equipmentType: '53ft Dry Van',
      laneOrigin: '',
      laneDestination: '',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B2833] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0E2530]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFB703] font-semibold">
              FREIGHT COORDINATION DESK
            </span>
            <h3 className="text-xl font-display font-semibold text-white mt-0.5">
              Get Started With Nevex Network
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FFB703]/20 border border-[#FFB703] flex items-center justify-center mx-auto mb-4 text-[#FFB703]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-semibold text-white mb-2">
                Inquiry Successfully Logged
              </h4>
              <div className="inline-block bg-[#071C24] px-4 py-1.5 rounded-full font-mono text-sm text-[#FFB703] border border-white/15 mb-4">
                Ticket #{ticketId}
              </div>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 font-sans">
                Thank you, {formData.fullName}. Our logistics dispatch team has received your inquiry for {formData.organization} and will respond promptly to {formData.email}.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] rounded-full transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Role Toggle */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Select Your Profile:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => { setRole('federal'); setFormData({ ...formData, role: 'federal' }); }}
                    className={`p-2.5 rounded-2xl border text-center cursor-pointer transition-colors text-xs font-semibold ${
                      role === 'federal' ? 'bg-[#FFB703] text-[#0B2833] border-[#FFB703]' : 'bg-[#0E2530] text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    Federal Agency
                  </button>
                  <button
                    type="button"
                    onClick={() => { setRole('civilian'); setFormData({ ...formData, role: 'civilian' }); }}
                    className={`p-2.5 rounded-2xl border text-center cursor-pointer transition-colors text-xs font-semibold ${
                      role === 'civilian' ? 'bg-[#FFB703] text-[#0B2833] border-[#FFB703]' : 'bg-[#0E2530] text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    Civilian Shipper
                  </button>
                  <button
                    type="button"
                    onClick={() => { setRole('carrier'); setFormData({ ...formData, role: 'carrier' }); }}
                    className={`p-2.5 rounded-2xl border text-center cursor-pointer transition-colors text-xs font-semibold ${
                      role === 'carrier' ? 'bg-[#FFB703] text-[#0B2833] border-[#FFB703]' : 'bg-[#0E2530] text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    Certified Carrier
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Antonio Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071C24] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB703]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071C24] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB703]"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Organization & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    {role === 'carrier' ? 'Fleet / MC#' : 'Organization Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={role === 'carrier' ? 'Apex Motor Transport (MC 948123)' : 'Logistics Operations Division'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071C24] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB703]"
                  />
                  {errors.organization && <p className="text-[11px] text-red-400 mt-1">{errors.organization}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071C24] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB703]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Freight or Capacity Details *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify recurring lane corridors, trailer equipment, or capacity inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#071C24] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFB703]"
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#FFB703]/20"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
