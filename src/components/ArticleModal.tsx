import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { InsightArticle } from '../types';
import { IMAGES } from '../assets/images';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0B2833] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0E2530]">
          <div className="flex items-center gap-3 text-xs font-mono text-[#FFB703] font-semibold">
            <span className="uppercase tracking-wider">{article.category}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70 font-normal">{article.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">
            {article.title}
          </h2>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10">
            <img
              src={article.image}
              onError={(e) => {
                e.currentTarget.src = IMAGES.heroFreightTruck;
              }}
              alt={article.title}
              className="w-full h-full object-cover object-center filter contrast-[1.05]"
            />
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Published by Nevex Network Editorial</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#071C24] flex justify-between items-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </button>

          <span className="text-[11px] font-mono text-[#FFB703] font-semibold">
            Nevex Thought Leadership Series
          </span>
        </div>

      </div>
    </div>
  );
};
