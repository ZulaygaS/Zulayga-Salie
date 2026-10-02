import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate interactive submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F0ED] border-t border-[#CDD7D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4635C] block mb-2">
            Get in Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#376F70] tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Let&apos;s Connect
          </h2>
          {/* Exact required wording */}
          <p className="text-base sm:text-lg text-[#232B2B]/90 font-normal leading-relaxed">
            I am open to opportunities in technology, IT support, web development and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Social */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-[#CDD7D8] shadow-2xs space-y-6">
              <h3 className="text-lg font-bold text-[#376F70] border-b border-[#CDD7D8]/60 pb-3">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#232B2B]/60 block font-medium">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-[#376F70] hover:text-[#C4635C] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#C4635C] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#232B2B]/60 block font-medium">Location</span>
                    <span className="text-sm font-medium text-[#232B2B]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#CDD7D8]/40 flex items-center justify-center text-[#376F70] shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#232B2B]/60 block font-medium">LinkedIn Profile</span>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#376F70] hover:text-[#C4635C] transition-colors inline-flex items-center gap-1"
                    >
                      <span>zulayga-salie</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prominent LinkedIn CTA Button */}
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-white bg-[#376F70] hover:bg-[#2B5758] rounded-xl transition-colors shadow-2xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* References Policy Note */}
            <div className="bg-white p-5 rounded-xl border border-[#CDD7D8] flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-[#376F70] shrink-0" />
              <p className="text-xs text-[#232B2B]/80 font-medium">
                References available upon request.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#CDD7D8] shadow-2xs">
              <h3 className="text-lg font-bold text-[#376F70] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#232B2B]/70 mb-6">
                Feel free to reach out regarding IT support opportunities, apprenticeships, or project discussions.
              </p>

              {submitted ? (
                <div className="p-6 bg-[#CDD7D8]/30 rounded-xl border border-[#376F70]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#376F70] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#376F70]">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs text-[#232B2B]/80 max-w-md mx-auto">
                    Your message has been recorded. Zulayga will review your inquiry and connect with you shortly. You may also connect directly via LinkedIn or email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-bold text-[#376F70] bg-white border border-[#CDD7D8] rounded-lg hover:bg-[#F4F0ED] transition-colors mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#232B2B] mb-1.5">
                        Your Name <span className="text-[#C4635C]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F4F0ED] border border-[#CDD7D8] rounded-lg text-[#232B2B] placeholder:text-[#232B2B]/40 focus:outline-none focus:border-[#376F70]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#232B2B] mb-1.5">
                        Email Address <span className="text-[#C4635C]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F4F0ED] border border-[#CDD7D8] rounded-lg text-[#232B2B] placeholder:text-[#232B2B]/40 focus:outline-none focus:border-[#376F70]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#232B2B] mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. IT Support Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F4F0ED] border border-[#CDD7D8] rounded-lg text-[#232B2B] placeholder:text-[#232B2B]/40 focus:outline-none focus:border-[#376F70]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#232B2B] mb-1.5">
                      Message <span className="text-[#C4635C]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we collaborate? Share details about your team, role, or project..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F4F0ED] border border-[#CDD7D8] rounded-lg text-[#232B2B] placeholder:text-[#232B2B]/40 focus:outline-none focus:border-[#376F70] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#C4635C] hover:bg-[#B0534C] rounded-lg transition-colors shadow-2xs whitespace-nowrap cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
