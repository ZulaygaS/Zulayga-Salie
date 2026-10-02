/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalSummaryAndObjective } from './components/ProfessionalSummaryAndObjective';
import { AboutSection } from './components/AboutSection';
import { WhatIveDoneSection } from './components/WhatIveDoneSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhatIBringAndDirection } from './components/WhatIBringAndDirection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'summary',
        'about',
        'experience',
        'skills',
        'certifications',
        'education',
        'projects',
        'interests',
        'contact'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F0ED] text-[#232B2B] flex flex-col font-sans selection:bg-[#CDD7D8] selection:text-[#376F70]">
      {/* Sticky Clean Top Bar Navigation */}
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        {/* Hero Section with Verified Headshot */}
        <Hero />

        {/* Dedicated Professional Summary immediately followed by Career Objective */}
        <ProfessionalSummaryAndObjective />

        {/* About Section with Career Story & Personal Details */}
        <AboutSection />

        {/* What I've Done (6 Cards) */}
        <WhatIveDoneSection />

        {/* Experience Section (CAPACITI IT Support Learnership & Work History) */}
        <ExperienceSection />

        {/* Skills (Technical, AI & Technology, Professional) */}
        <SkillsSection />

        {/* 30 Licenses & Certifications (Single Continuous Unified List) */}
        <CertificationsSection />

        {/* Education & Professional Development */}
        <EducationSection />

        {/* Featured Practical Project: SmartTicket AI Enterprise */}
        <ProjectsSection />

        {/* What I Bring (6 Cards) & Long-Term Career Direction */}
        <WhatIBringAndDirection />

        {/* Personal Interests (Reading & Tennis) */}
        <InterestsSection />

        {/* Final CTA & Contact Section */}
        <ContactSection />
      </main>

      {/* Minimal Sophisticated Footer */}
      <Footer />
    </div>
  );
}
