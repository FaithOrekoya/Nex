import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InsightArticle } from '../types';
import { ArticleModal } from './ArticleModal';
import { IMAGES } from '../assets/images';

export const InsightsBlog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const sampleArticles: InsightArticle[] = [
    {
      id: 'article-1',
      title: 'Bridging the Operational Divide in Modern Freight Dispatch',
      excerpt:
        'Why manual phone trees and disjointed email chains remain the primary cause of supply chain delays—and how automated pairing frameworks restore predictive control.',
      date: 'November 2026',
      readTime: '5 min read',
      category: 'Logistics Technology',
      image: IMAGES.logisticsDispatchCenter,
      content: [
        'Across interstate corridors, millions of freight tons move daily under the coordination of legacy communication systems. Dispatchers juggle dozens of phone calls, unstructured emails, and static PDF rate confirmations, creating blind spots that compound with every handoff.',
        'When unexpected road delays or dock staging bottlenecks occur, the latency of manual communication ripples through the entire supply chain. Shippers scramble for updates while carriers idle in detention, burning valuable hours of service.',
        'Nevex Network approaches this challenge by creating an automated coordination layer. By digitizing requirement specifications, verifying carrier credentials algorithmically, and streaming real-time status telemetry, freight coordination transitions from a reactive scramble to a synchronized, proactive workflow.',
      ],
    },
    {
      id: 'article-2',
      title: 'Why Non-Asset Freight Models Accelerate Supply Chain Resilience',
      excerpt:
        'Examining how asset-light brokerages provide public agencies and commercial shippers with agile capacity unencumbered by equipment depreciation.',
      date: 'October 2026',
      readTime: '4 min read',
      category: 'Supply Chain Strategy',
      image: IMAGES.freightIntermodalHub,
      content: [
        'Traditional asset-heavy carriers are bound by physical fleet geography. If their trucks are stationed in the Midwest, servicing urgent Southeastern capacity demands creates expensive empty deadhead miles and operational resistance.',
        'A non-asset-based freight brokerage eliminates these capital rigidities. By pairing freight demand directly with verified, independent motor carriers already positioned within the target corridor, shippers achieve superior regional coverage and rate flexibility.',
        'Furthermore, non-asset models enable hyper-specialization. Rather than maintaining a compromised blend of trailer types, Nevex taps into certified fleets across dry van, refrigerated, flatbed, and specialized intermodal haulers as the mission dictates.',
      ],
    },
    {
      id: 'article-3',
      title: 'Solving the Working Capital Bottleneck for Independent Motor Carriers',
      excerpt:
        'How digitized documentation and automated proof-of-delivery reconciliation eliminate the 30-to-60 day cash flow delays that strain commercial fleets.',
      date: 'September 2026',
      readTime: '6 min read',
      category: 'Carrier Economics',
      image: IMAGES.truckFleet,
      content: [
        'The independent truck carrier is the lifeblood of national freight, yet conventional payment cycles remain notoriously adversarial. Traditional freight brokers routinely hold settlement funds for 30, 45, or even 60 days following delivery.',
        'This liquidity drag forces smaller fleets and owner-operators to rely on punitive factoring services with steep discount fees, restricting fleet reinvestment and driver retention.',
        'Nevex Network addresses working capital friction through digital proof-of-delivery (e-POD) verification. Once cargo receipt is confirmed electronically, automated reconciliation clears payment rails rapidly, keeping carriers solvent, mobile, and committed to long-term partnerships.',
      ],
    },
  ];

  const featured = sampleArticles[0];
  const sideArticles = sampleArticles.slice(1);

  return (
    <>
      <section id="insights" className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 text-[#0B2833] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#FFB703]" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  Editorial & Analysis
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#0B2833] tracking-tight leading-[1.12] text-balance">
                Insights on the Future of Connected Logistics.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-sm font-sans">
              Perspectives on automated dispatch, non-asset freight coordination, and working capital optimization.
            </p>
          </div>

          {/* Magazine-Style Editorial Layout: 1 Large Featured + 2 Smaller Previews (No 3 identical cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: 1 Large Featured Article (lg:col-span-7) */}
            <article
              onClick={() => setSelectedArticle(featured)}
              className="lg:col-span-7 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md mb-6">
                <img
                  src={featured.image}
                  onError={(e) => {
                    e.currentTarget.src = IMAGES.heroFreightTruck;
                  }}
                  alt={featured.title}
                  className="w-full aspect-[16/10] object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0B2833]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#FFB703] border border-white/10">
                  Featured Analysis
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                <span>{featured.category}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#0B2833] mb-3 group-hover:text-[#0B2833]/80 transition-colors leading-snug">
                {featured.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-sans mb-4">
                {featured.excerpt}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B2833] group-hover:underline underline-offset-4">
                <span>Read Full Analysis</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </div>
            </article>

            {/* Right Column: 2 Smaller Article Previews Stacked (lg:col-span-5) */}
            <div className="lg:col-span-5 divide-y divide-slate-200 border-y lg:border-t-0 border-slate-200 flex flex-col">
              {sideArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="py-8 group cursor-pointer first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6"
                >
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                    <img
                      src={article.image}
                      onError={(e) => {
                        e.currentTarget.src = IMAGES.freightIntermodalHub;
                      }}
                      alt={article.title}
                      className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mb-1.5">
                      <span>{article.category}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-display font-semibold text-[#0B2833] leading-snug mb-2 group-hover:text-[#0B2833]/80 transition-colors">
                      {article.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-sans mb-2">
                      {article.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B2833]">
                      <span>Read Brief</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Article Detail Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
};
