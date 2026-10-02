import React from 'react';
import { Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#263335] text-[#CDD7D8] pt-14 pb-10 border-t border-[#376F70]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold text-white mb-1.5 tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#CDD7D8]/90 font-medium">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.descriptor}
            </p>
            <p className="text-xs text-[#CDD7D8]/60 mt-1">
              Cape Town, Western Cape, South Africa
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-white transition-colors">
              Certifications
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D7ACA3] hover:text-white transition-colors font-bold"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CDD7D8]/60">
          <p>
            © {new Date().getFullYear()} Zulayga Salie. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#CDD7D8]/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
