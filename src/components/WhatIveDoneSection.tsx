import React from 'react';
import { Headphones, Briefcase, Code, Sparkles, Wrench, GraduationCap } from 'lucide-react';
import { WHAT_IVE_DONE } from '../data/portfolioData';

export const WhatIveDoneSection: React.FC = () => {
  const icons = [
    Headphones,
    Briefcase,
    Code,
    Sparkles,
    Wrench,
    GraduationCap
  ];

  return (
    <section className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            Applied Competencies
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            What I&apos;ve Done
          </h2>
          <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal">
            A diverse toolkit built through direct professional customer support, hands-on administrative responsibility, self-driven front-end learning, and structured IT training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_IVE_DONE.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl border border-[#CDD7D8] hover:border-[#376F70]/40 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#CDD7D8]/35 flex items-center justify-center text-[#376F70] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#376F70] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#232B2B]/85 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
