import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  onContactClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Exactly five carefully curated questions
  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'General',
      question: 'What is Nevex Network?',
      answer:
        'Nevex Network is a modern logistics technology and non-asset-based freight brokerage founded by Antonio Hyatt. We connect federal and civilian agencies with certified truck carriers through proprietary coordination software, eliminating operational fragmentation and working capital bottlenecks in national supply chains.',
    },
    {
      id: 'faq-2',
      category: 'Agencies',
      question: 'How does Nevex match freight requirements with motor carriers?',
      answer:
        'Organizations submit lane corridors, pickup/delivery windows, and equipment specifications. Our software algorithmically pairs the load with verified motor carriers actively moving along that corridor, confirming FMCSA safety ratings, operating authority, and insurance in real time.',
    },
    {
      id: 'faq-3',
      category: 'General',
      question: 'Who can work with Nevex Network?',
      answer:
        'We work with federal government agencies, civilian public institutions, commercial enterprise shippers, and certified independent motor carriers or fleet operators who satisfy our pre-qualification, safety, and insurance standards.',
    },
    {
      id: 'faq-4',
      category: 'General',
      question: 'What is the advantage of a non-asset-based freight brokerage?',
      answer:
        'A non-asset model means Nevex does not own depreciating trucks or trailers. Instead, our capital and engineering focus entirely on automated matchmaking, compliance verification, and frictionless execution. This grants shippers flexible capacity across dry van, refrigerated, flatbed, and intermodal lanes without regional hardware biases.',
    },
    {
      id: 'faq-5',
      category: 'Carriers',
      question: 'How do certified motor carriers get onboarded and paid?',
      answer:
        'Carriers complete our fast automated clearinghouse verification (validating active DOT/MC authority and certificate of insurance). Once freight is delivered and proof-of-delivery (e-POD) is digitally reconciled, payments clear rapidly within 24 to 48 hours without predatory factoring fees.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-b border-slate-200 text-[#0B2833] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FFB703]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12]">
            Answers to Common Inquiries.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed font-sans">
            Key operational information about Nevex Network's brokerage model, technology platform, and carrier connection process.
          </p>
        </div>

        {/* Compact Accordion with Exactly 5 Questions (No Card Grid) */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-display font-semibold text-[#0B2833] group-hover:text-[#0B2833]/80 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#FFB703] border-[#FFB703] text-[#0B2833]' : 'bg-slate-50 text-slate-600 group-hover:border-slate-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-slate-600 leading-relaxed font-sans animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <p className="text-slate-600 font-sans">
            Have a custom lane requirement, defense RFP, or high-volume carrier fleet to discuss?
          </p>
          <button
            onClick={onContactClick}
            className="text-xs font-semibold uppercase tracking-wider text-[#0B2833] hover:text-[#0B2833] underline underline-offset-4 shrink-0 cursor-pointer"
          >
            Speak with our dispatch desk →
          </button>
        </div>

      </div>
    </section>
  );
};
