import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck, Cpu, Users, Eye, HelpCircle, CheckSquare, Clock, ListOrdered, Calendar } from 'lucide-react';
import { FEATURED_PROJECT, IT_SUPPORT_PLANNER_PROJECT } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'governance'>('overview');
  const [plannerTab, setPlannerTab] = useState<'workflow' | 'features' | 'impact'>('workflow');

  return (
    <section id="projects" className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            Practical Application & Portfolio Showcase
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-[#232B2B]/80 font-normal">
            Showcasing completed, live applications demonstrating practical problem-solving across enterprise AI request routing and dedicated IT Support productivity tools.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Project 1: SmartTicket AI Enterprise                     */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border-2 border-[#376F70]/30 shadow-md overflow-hidden">
          {/* Top Banner with Category & Status */}
          <div className="bg-[#376F70] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#D7ACA3]">
                {FEATURED_PROJECT.category}
              </span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-xs font-medium text-white/90">
                {FEATURED_PROJECT.status}
              </span>
            </div>

            <a
              href={FEATURED_PROJECT.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-[#C4635C] hover:bg-[#B0534C] text-white rounded-md transition-colors shadow-xs"
            >
              <span>VIEW LIVE PROJECT →</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Title & Supporting Statement */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#376F70]">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-base font-semibold text-[#C4635C] max-w-3xl">
                {FEATURED_PROJECT.supportingStatement}
              </p>
              <p className="text-base text-[#232B2B]/85 leading-relaxed max-w-4xl font-normal">
                {FEATURED_PROJECT.description}
              </p>
            </div>

            {/* Interactive Tabbed Deep Dive for Reviewers */}
            <div className="border border-[#CDD7D8] rounded-xl overflow-hidden bg-[#F4F0ED]/40">
              <div className="flex border-b border-[#CDD7D8] bg-[#CDD7D8]/20 px-4 pt-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-white text-[#376F70] border-t border-x border-[#CDD7D8] shadow-xs'
                      : 'text-[#376F70]/70 hover:text-[#376F70]'
                  }`}
                >
                  System Workflow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('features')}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'features'
                      ? 'bg-white text-[#376F70] border-t border-x border-[#CDD7D8] shadow-xs'
                      : 'text-[#376F70]/70 hover:text-[#376F70]'
                  }`}
                >
                  Key Capabilities
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('governance')}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'governance'
                      ? 'bg-white text-[#376F70] border-t border-x border-[#CDD7D8] shadow-xs'
                      : 'text-[#376F70]/70 hover:text-[#376F70]'
                  }`}
                >
                  Governance & Oversight
                </button>
              </div>

              <div className="p-6 bg-white">
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <div className="flex items-center gap-2 text-[#376F70] font-bold text-sm mb-2">
                        <Users className="w-4 h-4 text-[#C4635C]" />
                        <span>1. Request Intake</span>
                      </div>
                      <p className="text-xs text-[#232B2B]/80 leading-relaxed">
                        Captures corporate employee name, email, urgency, and issue details through the structured AI Intelligence Hub.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <div className="flex items-center gap-2 text-[#376F70] font-bold text-sm mb-2">
                        <Cpu className="w-4 h-4 text-[#376F70]" />
                        <span>2. AI Classification</span>
                      </div>
                      <p className="text-xs text-[#232B2B]/80 leading-relaxed">
                        Evaluates ticket intent, identifies department affinity, suggests urgency scores, and prepares routing drafts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <div className="flex items-center gap-2 text-[#376F70] font-bold text-sm mb-2">
                        <ShieldCheck className="w-4 h-4 text-[#C4635C]" />
                        <span>3. Human Review</span>
                      </div>
                      <p className="text-xs text-[#232B2B]/80 leading-relaxed">
                        Support staff verify AI recommendations before routing execution, maintaining strict accountability and accuracy.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {FEATURED_PROJECT.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F4F0ED] border border-[#CDD7D8] text-xs font-medium text-[#232B2B]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#376F70] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'governance' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#CDD7D8]/25 border border-[#CDD7D8]">
                      <Eye className="w-5 h-5 text-[#376F70] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#376F70] mb-1">
                          Transparency-Focused AI Design
                        </h4>
                        <p className="text-xs text-[#232B2B]/85 leading-relaxed">
                          Rather than acting as an opaque black box, every automated suggestion produces audit-ready rationales and allows human operators to inspect the reasoning behind department suggestions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <ShieldCheck className="w-5 h-5 text-[#C4635C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#376F70] mb-1">
                          Human-in-the-Loop Safeguards
                        </h4>
                        <p className="text-xs text-[#232B2B]/85 leading-relaxed">
                          Final routing dispatch is governed by human personnel to prevent misrouting, handle sensitive escalation tickets, and uphold enterprise compliance standards.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technology & Focus Areas */}
            <div className="pt-4 border-t border-[#CDD7D8]">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#376F70] block mb-2">
                Core Focus Areas
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#232B2B]/85 font-medium">
                {FEATURED_PROJECT.focusAreas.map((area, index) => (
                  <React.Fragment key={area}>
                    <span className="hover:text-[#376F70] transition-colors">{area}</span>
                    {index < FEATURED_PROJECT.focusAreas.length - 1 && (
                      <span aria-hidden="true" className="text-[#C4635C] font-bold">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Project Positioning Callout */}
            <div className="bg-[#F4F0ED] p-5 rounded-xl border border-[#CDD7D8] flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-[#376F70] shrink-0 mt-0.5" />
              <div className="text-xs text-[#232B2B]/85 leading-relaxed">
                <strong className="text-[#376F70] font-bold">Portfolio Context:</strong> This completed initiative demonstrates practical AI application, responsible AI awareness, and workflow design. It highlights the progression from front-end interfaces toward trustworthy, applied digital systems.
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Project 2: IT Support Task & Time Planner                */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border-2 border-[#376F70]/30 shadow-md overflow-hidden">
          {/* Top Banner with Category & Status */}
          <div className="bg-[#2B5758] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#CDD7D8]">
                {IT_SUPPORT_PLANNER_PROJECT.category}
              </span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-xs font-medium text-white/90">
                {IT_SUPPORT_PLANNER_PROJECT.status}
              </span>
            </div>

            <a
              href={IT_SUPPORT_PLANNER_PROJECT.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-[#C4635C] hover:bg-[#B0534C] text-white rounded-md transition-colors shadow-xs"
            >
              <span>VIEW LIVE APPLICATION →</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Title & Supporting Statement */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-6 h-6 text-[#C4635C]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#376F70]">
                  {IT_SUPPORT_PLANNER_PROJECT.title}
                </h3>
              </div>
              <p className="text-base font-semibold text-[#C4635C] max-w-3xl">
                {IT_SUPPORT_PLANNER_PROJECT.supportingStatement}
              </p>
              <p className="text-base text-[#232B2B]/85 leading-relaxed max-w-4xl font-normal">
                {IT_SUPPORT_PLANNER_PROJECT.description}
              </p>
            </div>

            {/* Interactive Tabbed Deep Dive for Planner */}
            <div className="border border-[#CDD7D8] rounded-xl overflow-hidden bg-[#F4F0ED]/40">
              <div className="flex border-b border-[#CDD7D8] bg-[#CDD7D8]/20 px-4 pt-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlannerTab('workflow')}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    plannerTab === 'workflow'
                      ? 'bg-white text-[#376F70] border-t border-x border-[#CDD7D8] shadow-xs'
                      : 'text-[#376F70]/70 hover:text-[#376F70]'
                  }`}
                >
                  Support Workflow
                </button>
                <button
                  type="button"
                  onClick={() => setPlannerTab('features')}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    plannerTab === 'features'
                      ? 'bg-white text-[#376F70] border-t border-x border-[#CDD7D8] shadow-xs'
                      : 'text-[#376F70]/70 hover:text-[#376F70]'
                  }`}
                >
                  Key Capabilities
                </button>
                <button
                  type="button"
                  onClick={() => setPlannerTab('impact')}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
                    plannerTab === 'impact'
                      ? 'bg-white text-[#376F70] border-t border-x border-[#CDD7D8] shadow-xs'
                      : 'text-[#376F70]/70 hover:text-[#376F70]'
                  }`}
                >
                  Time Management Value
                </button>
              </div>

              <div className="p-6 bg-white">
                {plannerTab === 'workflow' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <div className="flex items-center gap-2 text-[#376F70] font-bold text-sm mb-2">
                        <ListOrdered className="w-4 h-4 text-[#C4635C]" />
                        <span>1. Capture & Log</span>
                      </div>
                      <p className="text-xs text-[#232B2B]/80 leading-relaxed">
                        Log incoming helpdesk tickets, user follow-ups, and urgent diagnostic requests directly into actionable checklist items.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <div className="flex items-center gap-2 text-[#376F70] font-bold text-sm mb-2">
                        <Clock className="w-4 h-4 text-[#376F70]" />
                        <span>2. Prioritize & Time-Box</span>
                      </div>
                      <p className="text-xs text-[#232B2B]/80 leading-relaxed">
                        Categorize tasks by urgency levels (Critical, High, Routine) to ensure SLA compliance and balanced workday time distribution.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <div className="flex items-center gap-2 text-[#376F70] font-bold text-sm mb-2">
                        <CheckSquare className="w-4 h-4 text-[#C4635C]" />
                        <span>3. Resolve & Track</span>
                      </div>
                      <p className="text-xs text-[#232B2B]/80 leading-relaxed">
                        Track execution milestones, verify hardware/software troubleshooting steps, and close out operational tickets seamlessly.
                      </p>
                    </div>
                  </div>
                )}

                {plannerTab === 'features' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {IT_SUPPORT_PLANNER_PROJECT.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F4F0ED] border border-[#CDD7D8] text-xs font-medium text-[#232B2B]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#376F70] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {plannerTab === 'impact' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#CDD7D8]/25 border border-[#CDD7D8]">
                      <Calendar className="w-5 h-5 text-[#376F70] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#376F70] mb-1">
                          Tailored for Fast-Paced Helpdesk Environments
                        </h4>
                        <p className="text-xs text-[#232B2B]/85 leading-relaxed">
                          IT Support roles require balancing spontaneous break-fix user calls with planned system maintenance. This application provides a lightweight, distraction-free environment to keep pending jobs organized and ensure zero dropped tickets.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F0ED] border border-[#CDD7D8]">
                      <Clock className="w-5 h-5 text-[#C4635C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#376F70] mb-1">
                          Smarter Time Allocation & Less Cognitive Load
                        </h4>
                        <p className="text-xs text-[#232B2B]/85 leading-relaxed">
                          Technicians can visualize their daily queue at a glance, group related technical investigations together, and deliver consistent, punctual user support.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technology & Focus Areas */}
            <div className="pt-4 border-t border-[#CDD7D8]">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#376F70] block mb-2">
                Core Focus Areas
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#232B2B]/85 font-medium">
                {IT_SUPPORT_PLANNER_PROJECT.focusAreas.map((area, index) => (
                  <React.Fragment key={area}>
                    <span className="hover:text-[#376F70] transition-colors">{area}</span>
                    {index < IT_SUPPORT_PLANNER_PROJECT.focusAreas.length - 1 && (
                      <span aria-hidden="true" className="text-[#C4635C] font-bold">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Direct Live Link Banner */}
            <div className="bg-[#F4F0ED] p-5 rounded-xl border border-[#CDD7D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#232B2B]/85 leading-relaxed">
                <strong className="text-[#376F70] font-bold">Live Application:</strong> Explore the live IT Support task and time manager to experience the workflow firsthand.
              </div>
              <a
                href={IT_SUPPORT_PLANNER_PROJECT.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-[#376F70] hover:bg-[#2B5758] text-white rounded-lg transition-colors whitespace-nowrap shadow-2xs self-start sm:self-auto"
              >
                <span>OPEN SUBTLE PLAN →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
