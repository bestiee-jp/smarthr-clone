'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

// Hamburger Menu Icon
function HamburgerIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M4 15H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

// Close Icon
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Slide menu items data
const menuItems = [
  { label: '私たちについて', sublabel: 'About Us' },
  { label: 'サービス', sublabel: 'Service', href: '/service' },
  { label: 'ニュース', sublabel: 'News' },
  { label: '会社情報', sublabel: 'Company' },
  { label: '採用サイト', sublabel: 'Careers', isExternal: true },
];

// Dropdown menu data
const dropdownMenus: Record<string, { title: string; items: { label: string; isSubItem?: boolean; href?: string }[] }> = {
  '私たちについて': {
    title: '私たちについて',
    items: [
      { label: 'ミッション・バリュー' },
      { label: '事業から見るSmartHR' },
      { label: '組織から見るSmartHR' },
      { label: 'DEIBに関する取り組み', isSubItem: true },
      { label: 'ブランドとしての取り組み' },
    ],
  },
  '会社情報': {
    title: '会社情報',
    items: [
      { label: '役員紹介', href: '/company/executives' },
      { label: '沿革' },
    ],
  },
};

// Navigation Item Component
function NavItem({ label, hasDropdown = false, isExternal = false, isOpen = false, onMouseEnter, onMouseLeave, href }: {
  label: string;
  hasDropdown?: boolean;
  isExternal?: boolean;
  isOpen?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  href?: string;
}) {
  const content = (
    <>
      <span className="relative inline-block">
        {label}
        <span className={`absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-[400ms] ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
      </span>
      {hasDropdown && (
        <span style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          <ChevronDown />
        </span>
      )}
      {isExternal && <ExternalLink />}
    </>
  );

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {href ? (
        <Link
          href={href}
          className="group flex items-center gap-2 text-[22px] text-black font-medium"
        >
          {content}
        </Link>
      ) : (
        <button
          className="group flex items-center gap-2 text-[22px] text-black font-medium"
        >
          {content}
        </button>
      )}
    </div>
  );
}

export default function Header() {
  const [showFixedHamburger, setShowFixedHamburger] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ja' | 'en'>('ja');

  useEffect(() => {
    const handleScroll = () => {
      // Show fixed hamburger when scrolled past 600px
      setShowFixedHamburger(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="relative w-full bg-white">
      <div className="flex">
        {/* Left + Center Content */}
        <div className="flex-1">
          {/* Logo and Navigation */}
          <div className="flex items-center justify-between" style={{ padding: '24px 5%' }}>
            {/* Logo */}
            <SmartHRLogo />

            {/* Main Navigation */}
            <nav className="flex items-center gap-10">
              <NavItem
                label="私たちについて"
                hasDropdown
                isOpen={openDropdown === '私たちについて'}
                onMouseEnter={() => setOpenDropdown('私たちについて')}
              />
              <NavItem
                label="サービス"
                href="/service"
                onMouseEnter={() => setOpenDropdown(null)}
              />
              <NavItem
                label="ニュース"
                onMouseEnter={() => setOpenDropdown(null)}
              />
              <NavItem
                label="会社情報"
                hasDropdown
                isOpen={openDropdown === '会社情報'}
                onMouseEnter={() => setOpenDropdown('会社情報')}
              />
              <NavItem
                label="採用サイト"
                isExternal
                onMouseEnter={() => setOpenDropdown(null)}
              />
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
            onClick={() => setIsMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Bottom horizontal line - full width */}
      <div className="h-px bg-black w-full"></div>

      {/* Full-width Mega Menu Dropdown */}
      {openDropdown && dropdownMenus[openDropdown] && (
        <div
          onMouseLeave={() => setOpenDropdown(null)}
          style={{
            position: 'absolute',
            top: 'calc(100% - 20px)',
            left: 0,
            right: 0,
            paddingTop: '20px',
            zIndex: 100,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              animation: 'slideDown 0.3s ease',
            }}
          >
          <div style={{ padding: '40px 5%' }}>
            {/* Section Title */}
            <div style={{ fontSize: '14px', color: '#888', marginBottom: '24px' }}>
              {dropdownMenus[openDropdown].title}
            </div>

            {/* Menu Items Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 60px' }}>
              {dropdownMenus[openDropdown].items.map((item, index) => {
                const content = (
                  <>
                    {/* Arrow Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#4dd9d9] flex-shrink-0"
                      style={{ transition: 'transform 0.3s ease' }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="relative inline-block">
                      {item.label}
                      <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-[400ms] w-0 group-hover:w-full"></span>
                    </span>
                  </>
                );

                return item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-3 text-black"
                    style={{
                      fontSize: '16px',
                      padding: '16px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center gap-3 text-black"
                    style={{
                      fontSize: '16px',
                      padding: '16px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
          </div>
        </div>
      )}

      {/* Fixed Hamburger Button - appears when scrolled */}
      {showFixedHamburger && !isMenuOpen && (
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
          onClick={() => setIsMenuOpen(true)}
        >
          <HamburgerIcon />
        </button>
      )}

      {/* Slide-out Menu Panel */}
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1999,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '40%',
          minWidth: '400px',
          maxWidth: '600px',
          height: '100vh',
          backgroundColor: 'white',
          zIndex: 2000,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s ease',
          overflowY: 'auto',
        }}
      >
        {/* Menu Header */}
        <div style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SmartHRLogo />
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-[16px]">
              <button
                onClick={() => setLang('ja')}
                className={lang === 'ja' ? 'font-medium' : 'opacity-50'}
              >
                日本語
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'font-medium' : 'opacity-50'}
              >
                EN
              </button>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ padding: '40px' }}>
          {menuItems.map((item, index) => {
            const content = (
              <>
                <div style={{ fontSize: '20px', fontWeight: '500', color: 'black', marginBottom: '4px' }}>
                  <span className="relative inline-block">
                    {item.label}
                    <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-[400ms] w-0 group-hover:w-full"></span>
                  </span>
                  {item.isExternal && <span style={{ marginLeft: '8px', display: 'inline-block' }}><ExternalLink /></span>}
                </div>
                <div style={{ fontSize: '14px', color: '#888' }}>
                  {item.sublabel}
                </div>
              </>
            );

            return item.href ? (
              <Link
                key={index}
                href={item.href}
                className="group block"
                style={{
                  padding: '24px 0',
                  borderBottom: '1px solid #e5e7eb',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {content}
              </Link>
            ) : (
              <a
                key={index}
                href="#"
                className="group block"
                style={{
                  padding: '24px 0',
                  borderBottom: '1px solid #e5e7eb',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
