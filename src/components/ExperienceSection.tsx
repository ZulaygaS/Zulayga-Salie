import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const learnership = EXPERIENCES[0]; // CAPACITI
  const workHistory = EXPERIENCES.slice(1); // MANATI ASF and Sigma Connected

  return (
    <section id="experience" className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 11: Dedicated Prominent IT Support Development Section */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
              Current Technical Immersion
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-3"
              style={{ fontWeight: 700 }}
            >
              IT Support Development
            </h2>
            <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal">
              Active transition into the IT field through structured, workplace-aligned technical training at CAPACITI. Developing practical problem-solving capabilities, customer-oriented support methodologies, and diagnostic skills.
            </p>
          </div>

          {/* Featured Learnership Card */}
          <div className="bg-white rounded-2xl border-2 border-[#376F70]/30 p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#CDD7D8]/40 to-transparent rounded-bl-full -z-0 pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#CDD7D8]/60 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C]">
                      Technical Learnership
                    </span>
                    <span aria-hidden="true" className="text-[#376F70]/40">·</span>
                    <span className="text-xs text-[#232B2B]/70 font-medium">Cape Town</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#376F70]">
                    {learnership.role}
                  </h3>
                  <p className="text-base font-semibold text-[#232B2B]">
                    {learnership.company}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-[#376F70] bg-[#CDD7D8]/50 px-3 py-1.5 rounded-md inline-block">
                    In Progress · 2026
                  </span>
                </div>
              </div>

              <p className="text-base text-[#232B2B]/85 mb-6 leading-relaxed">
                {learnership.summary}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#376F70] mb-4">
                Core Competencies & Learning Focus Areas
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {learnership.highlights.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 bg-[#F4F0ED] rounded-xl border border-[#CDD7D8] text-xs font-medium text-[#232B2B] flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4635C] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 10: Verified Professional Work Experience */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#376F70] block mb-2">
              Transferable Foundations
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#376F70] tracking-tight mb-2"
              style={{ fontWeight: 700 }}
            >
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-[#232B2B]/80 font-normal">
              Verified background in customer advisory, client support, and administration—providing essential transferable communication, SLA adherence, and methodical problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workHistory.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="bg-white rounded-2xl border border-[#CDD7D8] p-7 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C4635C]">
                      {job.company}
                    </span>
                    <span className="text-xs font-medium text-[#376F70]/80">
                      {job.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#376F70] mb-3">
                    {job.role}
                  </h3>
                  <p className="text-sm text-[#232B2B]/85 mb-5 leading-relaxed">
                    {job.summary}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#376F70]/70 mb-3">
                    Key Areas of Responsibility
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {job.highlights.map((point) => (
                      <li key={point} className="text-xs text-[#232B2B]/80 flex items-start gap-2">
                        <span className="text-[#376F70] font-bold mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
