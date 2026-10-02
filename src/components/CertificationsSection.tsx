import React, { useState } from 'react';
import { ExternalLink, Search, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_LIST, PERSONAL_INFO } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = CERTIFICATIONS_LIST.filter((cert) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.credentialId.toLowerCase().includes(query)
    );
  });

  return (
    <section id="certifications" className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            Continuous Professional Learning
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Licenses & Certifications
          </h2>
          {/* Exact Required Certification Introduction */}
          <p className="text-base sm:text-lg text-[#232B2B]/85 font-normal leading-relaxed">
            {PERSONAL_INFO.certificationIntro}
          </p>
        </div>

        {/* Filter and Count Bar (Single Unified List Search) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl border border-[#CDD7D8] shadow-2xs">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#376F70]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, issuer, or credential ID..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#F4F0ED] border border-[#CDD7D8] rounded-lg text-[#232B2B] placeholder:text-[#232B2B]/50 focus:outline-none focus:border-[#376F70]"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#376F70] font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#C4635C]" />
            <span>
              Showing {filteredCerts.length} of {CERTIFICATIONS_LIST.length} Unified Credentials
            </span>
          </div>
        </div>

        {/* One Continuous Unified List (No Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((cert) => {
            const isCisco = cert.issuer.toLowerCase().includes('cisco');

            return (
              <div
                key={cert.id}
                className="bg-white rounded-xl p-5 border border-[#CDD7D8] hover:border-[#376F70]/50 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#376F70] mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-[#232B2B]/80 mb-3">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#CDD7D8]/60 flex items-center justify-between gap-2 mt-2">
                  <div className="text-[11px] text-[#232B2B]/70 font-mono tabular-nums truncate">
                    <span className="text-[#376F70] font-sans font-medium">Credential ID: </span>
                    <span className="font-semibold text-[#232B2B]">{cert.credentialId}</span>
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C4635C] hover:text-[#B0534C] transition-colors shrink-0"
                    aria-label={`View Credential for ${cert.title}`}
                  >
                    <span>VIEW CREDENTIAL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#CDD7D8] p-6">
            <p className="text-sm text-[#232B2B]/70 mb-3">
              No certifications matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-1.5 text-xs font-bold text-white bg-[#376F70] rounded-lg hover:bg-[#2B5758]"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
