'use client';

import { useState, useEffect } from 'react';
import SmartHRLogo from './SmartHRLogo';

// Chevron Down Icon
function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// External Link Icon
function ExternalLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7.5V11.5C11 12.0523 10.5523 12.5 10 12.5H2.5C1.94772 12.5 1.5 12.0523 1.5 11.5V4C1.5 3.44772 1.94772 3 2.5 3H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 1.5H12.5V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L12.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Pause Icon for Motion
function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M6 5V11M10 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Hamburger Menu Icon
function HamburgerIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M4 15H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

// Navigation Item Component
function NavItem({ label, hasDropdown = false, isExternal = false }: {
  label: string;
  hasDropdown?: boolean;
  isExternal?: boolean;
}) {
  return (
    <button className="group flex items-center gap-2 text-[22px] text-black font-medium">
      <span className="relative inline-block">
        {label}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
      {hasDropdown && <ChevronDown />}
      {isExternal && <ExternalLink />}
    </button>
  );
}

export default function Header() {
  const [lang, setLang] = useState<'ja' | 'en'>('ja');
  const [showFixedHamburger, setShowFixedHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show fixed hamburger when scrolled past 600px
      setShowFixedHamburger(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full bg-white">
      <div className="flex">
        {/* Left + Center Content */}
        <div className="flex-1">
          {/* Top Row - Motion and Language */}
          <div className="flex justify-end items-center pt-4 pb-2" style={{ padding: '16px 5% 8px 5%' }}>
            <div className="flex items-center gap-5 text-[18px] text-black">
              {/* Motion Toggle */}
              <button className="group flex items-center gap-1.5">
                <span className="relative inline-block">
                  モーション
                  <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-100 w-0 group-hover:w-full"></span>
                </span>
                <PauseIcon />
              </button>

              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang('ja')}
                  className={`group ${lang === 'ja' ? 'font-medium' : 'opacity-50'}`}
                >
                  <span className="relative inline-block">
                    日本語
                    <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-100 w-0 group-hover:w-full"></span>
                  </span>
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`group ${lang === 'en' ? 'font-medium' : 'opacity-50'}`}
                >
                  <span className="relative inline-block">
                    English
                    <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-100 w-0 group-hover:w-full"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row - Logo and Navigation */}
          <div className="flex items-center justify-between" style={{ padding: '0 5% 24px 5%' }}>
            {/* Logo */}
            <SmartHRLogo />

            {/* Main Navigation */}
            <nav className="flex items-center gap-10">
              <NavItem label="私たちについて" hasDropdown />
              <NavItem label="サービス" hasDropdown />
              <NavItem label="ニュース" />
              <NavItem label="会社情報" hasDropdown />
              <NavItem label="サステナビリティ" hasDropdown />
              <NavItem label="採用サイト" isExternal />
            </nav>
          </div>
        </div>

        {/* Right Section - Separator + Hamburger (spans both rows) */}
        <div className="flex items-center self-stretch">
          {/* Vertical Separator Line - extends to bottom */}
          <div className="w-px bg-black self-stretch mr-6"></div>

          {/* Hamburger Menu Button */}
          <button
            className="w-[100px] h-[100px] bg-black flex items-center justify-center mr-[5%]"
            style={{
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Bottom horizontal line - full width */}
      <div className="h-px bg-black w-full"></div>

      {/* Fixed Hamburger Button - appears when scrolled */}
      {showFixedHamburger && (
        <button
          className="fixed bg-black flex items-center justify-center animate-fadeIn"
          style={{
            top: '20px',
            right: '2%',
            width: '100px',
            height: '100px',
            borderRadius: '50px',
            transition: 'border-radius 0.5s ease',
            zIndex: 1000,
            animation: 'fadeIn 0.5s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
          onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
        >
          <HamburgerIcon />
        </button>
      )}
    </header>
  );
}
