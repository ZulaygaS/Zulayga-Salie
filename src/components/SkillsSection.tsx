import React from 'react';
import { Terminal, BrainCircuit, Users } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            Capabilities & Learning
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Skills & Knowledge Areas
          </h2>
          <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal">
            Reflecting practical technical proficiencies, certified coursework in modern artificial intelligence, and foundational professional skills developed in client-facing environments.
          </p>
        </div>

        {/* 3 Domain Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Technical Skills */}
          <div className="bg-white rounded-2xl p-7 border border-[#CDD7D8] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#CDD7D8]/70">
                <div className="w-10 h-10 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#376F70]">
                    Technical Skills
                  </h3>
                  <span className="text-xs text-[#232B2B]/60 font-medium">
                    Web & Interface Development
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#232B2B]/75 mb-6 leading-relaxed">
                Core front-end technologies applied across website development, interface styling, and interactive scripting.
              </p>

              <div className="space-y-2.5">
                {SKILLS_DATA.technical.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-[#F4F0ED] rounded-xl border border-[#CDD7D8] flex items-center justify-between text-xs font-medium text-[#232B2B]"
                  >
                    <span className="font-semibold text-[#376F70]">{skill}</span>
                    <span className="text-[11px] text-[#232B2B]/60">Applied</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CDD7D8]/60 text-[11px] text-[#232B2B]/65">
              Trained through I Deserve It & practical projects
            </div>
          </div>

          {/* 2. AI & Technology (Developing Knowledge) */}
          <div className="bg-white rounded-2xl p-7 border border-[#CDD7D8] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#CDD7D8]/70">
                <div className="w-10 h-10 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70]">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#376F70]">
                    AI & Technology
                  </h3>
                  <span className="text-xs text-[#C4635C] font-semibold">
                    Developing & Certified Knowledge
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#232B2B]/75 mb-6 leading-relaxed">
                Certified coursework spanning generative AI, machine learning foundations, prompting methodologies, and trustworthy AI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SKILLS_DATA.aiAndTechnology.map((skill) => (
                  <div
                    key={skill}
                    className="p-2.5 bg-[#F4F0ED] rounded-lg border border-[#CDD7D8] text-xs font-medium text-[#232B2B] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4635C] shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CDD7D8]/60 text-[11px] text-[#232B2B]/65">
              Verified through Google, DeepLearning.AI, IBM & ASU
            </div>
          </div>

          {/* 3. Professional Skills */}
          <div className="bg-white rounded-2xl p-7 border border-[#CDD7D8] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#CDD7D8]/70">
                <div className="w-10 h-10 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#376F70]">
                    Professional Skills
                  </h3>
                  <span className="text-xs text-[#232B2B]/60 font-medium">
                    Communication & Execution
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#232B2B]/75 mb-6 leading-relaxed">
                Interpersonal, communication, and organizational competencies developed in client-facing advisory and team environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SKILLS_DATA.professional.map((skill) => (
                  <div
                    key={skill}
                    className="p-2.5 bg-[#F4F0ED] rounded-lg border border-[#CDD7D8] text-xs font-medium text-[#232B2B] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#376F70] shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CDD7D8]/60 text-[11px] text-[#232B2B]/65">
              Grounded in client support and team collaboration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
