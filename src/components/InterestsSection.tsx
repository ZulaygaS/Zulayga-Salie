import React from 'react';
import { BookOpen, Activity } from 'lucide-react';
import { INTERESTS_DATA } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="py-16 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            Personal Pursuits
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#376F70] tracking-tight mb-2"
            style={{ fontWeight: 700 }}
          >
            Interests & Balance
          </h2>
          <p className="text-sm sm:text-base text-[#232B2B]/80 font-normal">
            Personal activities that maintain mental sharpness, curiosity, and disciplined physical well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-white p-6 rounded-2xl border border-[#CDD7D8] shadow-2xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#376F70] mb-1">
                {INTERESTS_DATA[0].name}
              </h3>
              <p className="text-xs text-[#232B2B]/80 leading-relaxed font-normal">
                {INTERESTS_DATA[0].description}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#CDD7D8] shadow-2xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70] shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#376F70] mb-1">
                {INTERESTS_DATA[1].name}
              </h3>
              <p className="text-xs text-[#232B2B]/80 leading-relaxed font-normal">
                {INTERESTS_DATA[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
