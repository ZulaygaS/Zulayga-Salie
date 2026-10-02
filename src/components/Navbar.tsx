import React, { useState, useEffect } from 'react';
import { Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F4F0ED]/95 backdrop-blur-md border-b border-[#CDD7D8]/80 py-3 shadow-xs'
          : 'bg-[#F4F0ED] border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single Wordmark */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-[#376F70] hover:text-[#2B5758] transition-colors whitespace-nowrap"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#376F70]/80"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative whitespace-nowrap hover:text-[#376F70] ${
                  isActive ? 'text-[#376F70] font-semibold' : 'text-[#376F70]/75'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4635C] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#376F70] hover:bg-[#2B5758] rounded-md transition-colors shadow-xs whitespace-nowrap"
            aria-label="Visit Zulayga Salie LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#376F70] hover:bg-[#CDD7D8]/40 rounded-md focus-visible:outline-2 focus-visible:outline-[#376F70]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#CDD7D8] bg-[#F4F0ED] px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-2">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#376F70] hover:bg-[#CDD7D8]/30 rounded-md"
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#376F70]/85 hover:text-[#376F70] hover:bg-[#CDD7D8]/30 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#CDD7D8]/60">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-white bg-[#376F70] hover:bg-[#2B5758] rounded-md transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
