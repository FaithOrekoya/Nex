import React, { useState, forwardRef } from 'react';
import { CheckCircle2, Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import { UserRole, ContactFormData } from '../types';

interface ContactSectionProps {
  initialRole?: UserRole;
}

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ initialRole = 'civilian' }, ref) => {
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
    const [ticketNumber, setTicketNumber] = useState('');

    const handleRoleChange = (newRole: UserRole) => {
      setRole(newRole);
      setFormData((prev) => ({ ...prev, role: newRole }));
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    };

    const validateForm = (): boolean => {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

      if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
        newErrors.fullName = 'Please enter your full name';
      }

      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid work email';
      }

      if (!formData.organization.trim()) {
        newErrors.organization = role === 'carrier' ? 'Fleet name required' : 'Organization name required';
      }

      if (!formData.phone.trim() || formData.phone.trim().length < 7) {
        newErrors.phone = 'Valid phone required';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        setTicketNumber(`NVX-${randomNum}`);
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
    };

    return (
      <section ref={ref} id="contact" className="py-24 md:py-32 bg-white border-b border-slate-200 text-[#0B2833] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Two-Column Layout: Short Introduction on Left, Small Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Short Introduction & Direct Coordination Channels */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#FFB703]" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  Direct Freight Intake
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12] mb-6 text-balance">
                Start Your Freight Connection.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-sans mb-8">
                Connect directly with Nevex Network's automated coordination desk to tender lane capacity, request specialized brokerage, or join our verified carrier network.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 pt-6 border-t border-slate-200 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-[#0B2833] shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Dispatch Operations Desk</span>
                    <span className="font-semibold text-[#0B2833]">1-800-555-NEVEX (6383)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-[#0B2833] shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Digital Inquiries</span>
                    <span className="font-semibold text-[#0B2833]">inquiries@nevexnetwork.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-[#0B2833] shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Coordination Schedule</span>
                    <span className="font-semibold text-[#0B2833]">24/7/365 Active Monitoring</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#0B2833] shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Corporate Office</span>
                    <span className="font-semibold text-[#0B2833]">Washington, D.C. Logistics Corridor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Small Compact Form */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              {isSubmitted ? (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#FFB703]/20 border border-[#FFB703] text-[#0B2833] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-[#0B2833]" />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-1">
                    Transmission Confirmed
                  </span>

                  <h3 className="text-2xl font-display font-semibold text-[#0B2833] mb-2">
                    Inquiry Logged Successfully
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    A coordination specialist will review your specifications and follow up within two business hours.
                  </p>

                  <div className="inline-block p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700 mb-6">
                    Dispatch Reference ID: <span className="font-bold text-[#0B2833]">{ticketNumber}</span>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Compact Segmented Role Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      I Am Inquiring As
                    </label>
                    <div className="grid grid-cols-3 gap-1 p-1 bg-white border border-slate-200 rounded-lg text-xs font-medium">
                      <button
                        type="button"
                        onClick={() => handleRoleChange('civilian')}
                        className={`py-2 px-2 rounded-md transition-colors cursor-pointer text-center truncate ${
                          role === 'civilian' ? 'bg-[#0B2833] text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Commercial Shipper
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRoleChange('federal')}
                        className={`py-2 px-2 rounded-md transition-colors cursor-pointer text-center truncate ${
                          role === 'federal' ? 'bg-[#0B2833] text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Federal Agency
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRoleChange('carrier')}
                        className={`py-2 px-2 rounded-md transition-colors cursor-pointer text-center truncate ${
                          role === 'carrier' ? 'bg-[#0B2833] text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Truck Carrier
                      </button>
                    </div>
                  </div>

                  {/* Name & Email in Compact 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Antonio Hyatt"
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833] ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833] ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Organization & Phone in Compact 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        {role === 'carrier' ? 'Motor Carrier / Fleet Name *' : 'Agency / Company Name *'}
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder={role === 'carrier' ? 'Apex Transport LLC' : 'Defense Logistics / Enterprise Co.'}
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833] ${
                          errors.organization ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.organization && <p className="text-[11px] text-red-600 mt-1">{errors.organization}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 234-5678"
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833] ${
                          errors.phone ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Equipment Type (for shippers/carriers) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Primary Equipment Focus
                      </label>
                      <select
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833]"
                      >
                        <option value="53ft Dry Van">53ft Dry Van</option>
                        <option value="Refrigerated (Reefer)">Refrigerated (Reefer)</option>
                        <option value="Flatbed / Stepdeck">Flatbed / Stepdeck</option>
                        <option value="Intermodal Container">Intermodal Container</option>
                        <option value="Specialized / Heavy Haul">Specialized / Heavy Haul</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Target Corridor / Lanes
                      </label>
                      <input
                        type="text"
                        name="laneOrigin"
                        value={formData.laneOrigin}
                        onChange={handleChange}
                        placeholder="e.g. Midwest to Southeast"
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833]"
                      />
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Freight Specifications / Message
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify timing, volume, recurring tender frequency, or carrier authority status..."
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B2833]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#0B2833] bg-[#FFB703] hover:bg-[#F5A623] active:scale-[0.99] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting Inquiries...' : 'Submit Direct Inquiry'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono">
                    Encrypted transmission · FMCSA clearance checks · Non-disclosure protected
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>
    );
  }
);
ContactSection.displayName = 'ContactSection';
