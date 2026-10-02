import React from 'react';
import { Target, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProfessionalSummaryAndObjective: React.FC = () => {
  return (
    <div id="summary" className="py-16 md:py-20 bg-[#F4F0ED] border-y border-[#CDD7D8]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section 7: Professional Summary */}
        <section
          aria-labelledby="summary-heading"
          className="bg-white rounded-2xl p-8 sm:p-10 border border-[#CDD7D8] shadow-xs relative overflow-hidden"
        >
          {/* Subtle Decorative Accent Band */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#376F70] via-[#CDD7D8] to-[#D7ACA3]"
          />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block">
                Executive Profile
              </span>
              <h2
                id="summary-heading"
                className="text-2xl sm:text-3xl font-bold text-[#376F70] tracking-tight"
                style={{ fontWeight: 700 }}
              >
                Professional Summary
              </h2>
            </div>
          </div>

          <div className="text-base sm:text-lg text-[#232B2B] leading-relaxed font-normal">
            <p className="leading-[1.8]">
              {PERSONAL_INFO.professionalSummary}
            </p>
          </div>
        </section>

        {/* Section 8: Career Objective (IMMEDIATELY after Professional Summary, no other section between) */}
        <section
          id="career-objective"
          aria-labelledby="objective-heading"
          className="bg-[#CDD7D8]/25 rounded-2xl p-8 sm:p-10 border border-[#376F70]/20 shadow-xs relative overflow-hidden"
        >
          {/* Subtle Decorative Accent Band */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-1.5 bg-[#C4635C]"
          />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#C4635C]/15 flex items-center justify-center text-[#C4635C]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#376F70] block">
                Target Pathway
              </span>
              <h2
                id="objective-heading"
                className="text-2xl sm:text-3xl font-bold text-[#376F70] tracking-tight"
                style={{ fontWeight: 700 }}
              >
                Career Objective
              </h2>
            </div>
          </div>

          <div className="text-base sm:text-lg text-[#232B2B] leading-relaxed font-normal bg-white/70 p-6 rounded-xl border border-[#CDD7D8]">
            <p className="leading-[1.8]" style={{ fontWeight: 400 }}>
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
