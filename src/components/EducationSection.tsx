import React from 'react';
import { GraduationCap, Award, AlertCircle } from 'lucide-react';
import { EDUCATION_DATA, PROFESSIONAL_DEVELOPMENT_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Education History */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
              Academic Background
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-3"
              style={{ fontWeight: 700 }}
            >
              Education
            </h2>
            <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal">
              Foundational academic milestones providing grounding in communication, pedagogy, and critical thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu) => {
              const isIncomplete = edu.status.toLowerCase().includes('incomplete');

              return (
                <div
                  key={edu.qualification}
                  className={`bg-white rounded-2xl p-7 border ${
                    isIncomplete ? 'border-[#D7ACA3]' : 'border-[#CDD7D8]'
                  } shadow-2xs flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#376F70]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#376F70]">
                          {edu.institution}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#232B2B]/70">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#376F70] mb-2">
                      {edu.qualification}
                    </h3>

                    {/* Prominent Status Indication */}
                    <div className="mb-4">
                      {isIncomplete ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-[#C4635C] bg-[#C4635C]/10 border border-[#C4635C]/30 rounded-md">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Status: Incomplete</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-[#376F70] bg-[#CDD7D8]/40 border border-[#CDD7D8] rounded-md">
                          <span>Status: Completed</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[#232B2B]/80 leading-relaxed font-normal">
                      {edu.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Development Programs */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#376F70] block mb-2">
              Continuous Upskilling
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#376F70] tracking-tight mb-3"
              style={{ fontWeight: 700 }}
            >
              Professional Development
            </h3>
            <p className="text-sm sm:text-base text-[#232B2B]/80 font-normal">
              Structured developmental programs accelerating skills in front-end development, artificial intelligence, and enterprise IT support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONAL_DEVELOPMENT_DATA.map((prog) => (
              <div
                key={prog.program}
                className="bg-white rounded-xl p-6 border border-[#CDD7D8] hover:border-[#376F70]/40 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#C4635C]">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {prog.provider}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#376F70] mb-2.5">
                    {prog.program}
                  </h4>
                  <p className="text-xs text-[#232B2B]/80 leading-relaxed font-normal">
                    {prog.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
