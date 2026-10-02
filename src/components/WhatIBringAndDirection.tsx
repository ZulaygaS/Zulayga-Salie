import React from 'react';
import { RefreshCw, BookOpen, Cpu, HeartHandshake, MessageSquare, ShieldCheck, Compass } from 'lucide-react';
import { WHAT_I_BRING, PERSONAL_INFO } from '../data/portfolioData';

export const WhatIBringAndDirection: React.FC = () => {
  const icons = [
    RefreshCw,
    BookOpen,
    Cpu,
    HeartHandshake,
    MessageSquare,
    ShieldCheck
  ];

  return (
    <div className="bg-[#F4F0ED]">
      {/* Section 20: What I Bring */}
      <section className="py-20 border-t border-[#CDD7D8]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
              Value Proposition
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
              style={{ fontWeight: 700 }}
            >
              What I Bring
            </h2>
            <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal">
              A synthesis of technical curiosity, professional reliability, client-first empathy, and disciplined ethical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_I_BRING.map((item, index) => {
              const Icon = icons[index] || Cpu;
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

      {/* Section 21: Career Direction (Visually Strong Editorial Section) */}
      <section className="py-16 bg-[#376F70] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D7ACA3] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Forward Vision</span>
          </div>

          <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-white/70">
            Career Direction
          </h3>

          <p
            className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-white/95 max-w-4xl mx-auto"
            style={{ fontWeight: 700 }}
          >
            &ldquo;{PERSONAL_INFO.careerDirection}&rdquo;
          </p>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-[#CDD7D8] font-medium">
            <span>IT Support</span>
            <span aria-hidden="true" className="text-[#C4635C] font-bold">·</span>
            <span>Front-End Web Development</span>
            <span aria-hidden="true" className="text-[#C4635C] font-bold">·</span>
            <span>Responsible AI</span>
          </div>
        </div>
      </section>
    </div>
  );
};
