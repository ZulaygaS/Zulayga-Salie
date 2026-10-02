import React from 'react';
import { MapPin, Globe2, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4F0ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            My Background & Trajectory
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            About Zulayga Salie
          </h2>
          <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal leading-relaxed">
            {PERSONAL_INFO.corePositioning}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Flow */}
          <div className="lg:col-span-8 space-y-6 text-[#232B2B] leading-relaxed">
            <div className="bg-white p-8 rounded-2xl border border-[#CDD7D8] shadow-xs space-y-5">
              <h3 className="text-xl font-bold text-[#376F70]">
                Bridging Client Empathy with Technical Problem-Solving
              </h3>
              <p>
                My professional career began in customer service and office administration, working with organisations like Sigma Connected and MANATI ASF. In these fast-paced, structured client-facing environments, I honed crucial human skills: active listening, empathetic conflict de-escalation, rigorous time management, and methodical issue scoping.
              </p>
              <p>
                As I collaborated across operational teams, I developed an abiding curiosity about the digital systems and workflows underpinning daily work. Rather than treating software merely as a tool, I began actively exploring how web technologies and structured processes are engineered.
              </p>
              <p>
                That curiosity inspired me to pursue structured web development training with <em>I Deserve It</em> (mastering HTML5, CSS3, JavaScript, and SCSS) and dive deeply into modern artificial intelligence—earning the Google AI Essentials credential and exploring generative AI, prompt engineering, and trustworthy AI frameworks.
              </p>
              <p>
                Today, I am cementing this foundation through the rigorous <strong>CAPACITI IT Support Learnership</strong>, building hands-on capabilities across hardware, operating systems, networking, and IT helpdesk service delivery.
              </p>
            </div>

            {/* Story Progression Milestones */}
            <div className="bg-[#CDD7D8]/30 p-8 rounded-2xl border border-[#CDD7D8] space-y-4">
              <h3 className="text-base font-bold text-[#376F70] uppercase tracking-wide">
                Career Progression Arc
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-[#CDD7D8]/80">
                  <span className="font-bold text-[#C4635C] block mb-1">01. Service & Ops</span>
                  <p className="text-[#232B2B]/80">Customer support, active listening, and administrative accuracy.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#CDD7D8]/80">
                  <span className="font-bold text-[#376F70] block mb-1">02. Front-End Foundations</span>
                  <p className="text-[#232B2B]/80">HTML5, CSS3, JavaScript, SCSS, responsive interface thinking.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#CDD7D8]/80">
                  <span className="font-bold text-[#C4635C] block mb-1">03. AI & IT Support</span>
                  <p className="text-[#232B2B]/80">Learnership training, diagnostic triage, and responsible AI tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Cards: Personal Details & Languages */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Personal Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#CDD7D8] shadow-xs space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#376F70] border-b border-[#CDD7D8]/60 pb-3">
                Key Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C4635C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#232B2B]/60 block font-medium">Location</span>
                    <span className="font-medium text-[#232B2B]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-[#376F70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#232B2B]/60 block font-medium">Languages</span>
                    <ul className="space-y-1 mt-0.5">
                      {PERSONAL_INFO.languages.map((lang) => (
                        <li key={lang.name} className="font-medium text-[#232B2B]">
                          {lang.name} <span className="text-xs text-[#376F70]/80">({lang.level})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#376F70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#232B2B]/60 block font-medium">Verified Credentials</span>
                    <span className="font-medium text-[#232B2B]">30 Professional Certifications</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values / Philosophy Quote Card */}
            <div className="bg-gradient-to-br from-[#376F70] to-[#2B5758] text-white p-6 rounded-2xl shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#D7ACA3]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Commitment</span>
              </div>
              <p className="text-sm leading-relaxed text-white/95 font-medium">
                &ldquo;Every challenge in IT support or development is an opportunity to learn deeply, communicate clearly, and deliver dependable solutions.&rdquo;
              </p>
              <p className="text-xs text-white/70 pt-2 border-t border-white/20">
                — Zulayga Salie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
