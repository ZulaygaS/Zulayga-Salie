import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Linkedin, Sparkles, ShieldCheck, Camera, Upload, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import defaultHeadshot from '../assets/images/headshot.jpg';

export const Hero: React.FC = () => {
  const [headshotSrc, setHeadshotSrc] = useState<string>(defaultHeadshot);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if the user previously loaded the exact original image into localStorage
    const savedPhoto = localStorage.getItem('zulayga_original_headshot');
    if (savedPhoto) {
      setHeadshotSrc(savedPhoto);
      setIsCustomPhoto(true);
      return;
    }

    // Attempt to load /image.png if placed in the public directory
    const testImg = new Image();
    testImg.src = '/image.png';
    testImg.onload = () => {
      setHeadshotSrc('/image.png');
      setIsCustomPhoto(true);
    };
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setHeadshotSrc(result);
        setIsCustomPhoto(true);
        try {
          localStorage.setItem('zulayga_original_headshot', result);
        } catch {
          // localStorage quota safety
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#F4F0ED] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow / Small Label */}
            <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.1em] uppercase text-[#376F70]/90">
              <span>Cape Town</span>
              <span aria-hidden="true">·</span>
              <span>Continuous Learner</span>
              <span aria-hidden="true">·</span>
              <span>Digital Technologies</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#376F70] leading-[1.08] tracking-[-0.025em] mb-4 text-balance"
              style={{ fontWeight: 800 }}
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Main Title & Supporting Descriptor */}
            <div className="mb-6 space-y-1">
              <p className="text-xl sm:text-2xl font-bold text-[#232B2B]">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-base sm:text-lg font-medium text-[#C4635C]">
                {PERSONAL_INFO.descriptor}
              </p>
            </div>

            {/* Concise Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#232B2B]/85 leading-relaxed mb-8 max-w-2xl font-normal">
              A dedicated professional bringing together background experience in customer service and office administration with hands-on capabilities in front-end web development, practical IT support, artificial intelligence, and AI prompting. Driven by continuous learning, adaptability, and an ambition to build a rewarding long-term career in digital technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#C4635C] hover:bg-[#B0534C] rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                View My Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#376F70] bg-[#CDD7D8]/50 hover:bg-[#CDD7D8] border border-[#376F70]/20 rounded-lg transition-colors whitespace-nowrap"
              >
                Let&apos;s Connect
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#376F70] hover:text-[#232B2B] bg-white border border-[#CDD7D8] hover:border-[#376F70]/40 rounded-lg transition-colors shadow-2xs whitespace-nowrap"
                aria-label="View Zulayga Salie on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#376F70]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Trust and Core Indicators without pill boxes */}
            <div className="pt-6 border-t border-[#CDD7D8]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#376F70]/80 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#376F70]" />
                CAPACITI IT Support Learnership
              </span>
              <span aria-hidden="true" className="text-[#D7ACA3]">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C4635C]" />
                Google AI Essentials Certified
              </span>
              <span aria-hidden="true" className="text-[#D7ACA3]">·</span>
              <span>30 Verified Credentials</span>
            </div>
          </div>

          {/* Right Column: Headshot Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle Warm Accent Backdrop */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 -bottom-3 -left-3 rounded-2xl bg-gradient-to-br from-[#D7ACA3]/40 via-[#CDD7D8]/50 to-[#376F70]/10 -z-10"
              />

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative rounded-2xl overflow-hidden shadow-lg bg-white border transition-all ${
                  isDragging
                    ? 'border-[#C4635C] ring-4 ring-[#C4635C]/20 scale-[1.02]'
                    : 'border-[#CDD7D8]'
                }`}
              >
                <div className="relative group">
                  <img
                    src={headshotSrc}
                    alt="Professional headshot of Zulayga Salie."
                    className="w-full h-auto object-cover object-center aspect-[4/5] block"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay button allowing the user to select the exact original photo file directly */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-white text-center">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#376F70] hover:bg-[#2B5758] text-white rounded-lg shadow-md transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{isCustomPhoto ? 'Replace Photo' : 'Load Original Photo'}</span>
                    </button>
                    <p className="text-[11px] text-white/90 mt-2 font-medium">
                      Select or drag & drop your original image.png
                    </p>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label="Upload original headshot"
                  />
                </div>

                {/* Subtle caption bar below the image */}
                <div className="p-4 bg-white/95 border-t border-[#CDD7D8]/60 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#376F70]">Zulayga Salie</p>
                    <p className="text-xs text-[#232B2B]/75">Cape Town, South Africa</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {isCustomPhoto ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#376F70] bg-[#CDD7D8]/40 px-2 py-1 rounded">
                        <Check className="w-3 h-3 text-[#376F70]" />
                        <span>Original Photo</span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C4635C] hover:text-[#B0534C] bg-[#F4F0ED] hover:bg-[#CDD7D8]/50 px-2.5 py-1 rounded transition-colors cursor-pointer"
                        title="Click to select the original image.png from your device"
                      >
                        <Camera className="w-3 h-3" />
                        <span>Use Original Photo</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet scroll indicator */}
        <div className="mt-12 text-center">
          <a
            href="#summary"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#376F70]/70 hover:text-[#376F70] transition-colors"
            aria-label="Scroll to summary"
          >
            <span>Learn more about my professional journey</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
