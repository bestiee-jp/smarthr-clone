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
function HamburgerIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  { label: '私たちについて', sublabel: 'About Us', href: '/mission' },
  { label: 'サービス', sublabel: 'Service', href: '/service' },
  { label: 'ニュース', sublabel: 'News', href: '/news' },
  { label: '会社情報', sublabel: 'Company', href: '/company' },
];

// Dropdown menu data
const dropdownMenus: Record<string, { title: string; items: { label: string; isSubItem?: boolean; href?: string }[] }> = {
  '会社情報': {
    title: '会社情報',
    items: [
      { label: '会社情報', href: '/company' },
      { label: '役員紹介', href: '/company/executives' },
      { label: '沿革', href: '/company/history' },
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show fixed hamburger when scrolled past 600px (300px on mobile)
      setShowFixedHamburger(window.scrollY > (isMobile ? 300 : 600));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

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
          <div
            className="flex items-center justify-between"
            style={{ padding: isMobile ? '16px 5%' : '24px 5%' }}
          >
            {/* Logo */}
            <SmartHRLogo />

            {/* Main Navigation - hidden on mobile */}
            {!isMobile && (
              <nav className="flex items-center gap-10">
                <NavItem
                  label="私たちについて"
                  href="/mission"
                  onMouseEnter={() => setOpenDropdown(null)}
                />
                <NavItem
                  label="サービス"
                  href="/service"
                  onMouseEnter={() => setOpenDropdown(null)}
                />
                <NavItem
                  label="ニュース"
                  href="/news"
                  onMouseEnter={() => setOpenDropdown(null)}
                />
                <NavItem
                  label="会社情報"
                  hasDropdown
                  isOpen={openDropdown === '会社情報'}
                  onMouseEnter={() => setOpenDropdown('会社情報')}
                />
              </nav>
            )}
          </div>
        </div>

        {/* Right Section - Separator + Hamburger (spans both rows) */}
        <div className="flex items-center self-stretch">
          {/* Vertical Separator Line - extends to bottom (hidden on mobile) */}
          {!isMobile && <div className="w-px bg-black self-stretch mr-6"></div>}

          {/* Hamburger Menu Button */}
          <button
            className="bg-black flex items-center justify-center"
            style={{
              width: isMobile ? '56px' : '100px',
              height: isMobile ? '56px' : '100px',
              borderRadius: isMobile ? '12px' : '50px',
              transition: 'border-radius 0.5s ease',
              marginRight: '5%',
            }}
            onMouseEnter={(e) => !isMobile && (e.currentTarget.style.borderRadius = '8px')}
            onMouseLeave={(e) => !isMobile && (e.currentTarget.style.borderRadius = '50px')}
            onClick={() => setIsMenuOpen(true)}
          >
            <HamburgerIcon size={isMobile ? 28 : 40} />
          </button>
        </div>
      </div>

      {/* Bottom horizontal line - full width */}
      <div className="h-px bg-black w-full"></div>

      {/* Full-width Mega Menu Dropdown - only on desktop */}
      {!isMobile && openDropdown && dropdownMenus[openDropdown] && (
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
                      className="text-[#00A3E0] flex-shrink-0"
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
            top: isMobile ? '12px' : '20px',
            right: isMobile ? '4%' : '2%',
            width: isMobile ? '48px' : '100px',
            height: isMobile ? '48px' : '100px',
            borderRadius: isMobile ? '12px' : '50px',
            transition: 'border-radius 0.5s ease',
            zIndex: 1000,
            animation: 'fadeIn 0.5s ease',
          }}
          onMouseEnter={(e) => !isMobile && (e.currentTarget.style.borderRadius = '8px')}
          onMouseLeave={(e) => !isMobile && (e.currentTarget.style.borderRadius = '50px')}
          onClick={() => setIsMenuOpen(true)}
        >
          <HamburgerIcon size={isMobile ? 24 : 40} />
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
          width: isMobile ? '100%' : '40%',
          minWidth: isMobile ? '100%' : '400px',
          maxWidth: isMobile ? '100%' : '600px',
          height: '100vh',
          backgroundColor: 'white',
          zIndex: 2000,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s ease',
          overflowY: 'auto',
        }}
      >
        {/* Menu Header */}
        <div style={{
          padding: isMobile ? '20px' : '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <SmartHRLogo />
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '20px' }}>
            {/* Language Switcher */}
            <div className="flex items-center gap-2" style={{ fontSize: isMobile ? '14px' : '16px' }}>
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
              className="bg-black rounded-full flex items-center justify-center text-white"
              style={{
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ padding: isMobile ? '20px' : '40px' }}>
          {menuItems.map((item, index) => {
            const content = (
              <>
                <div style={{
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: '500',
                  color: 'black',
                  marginBottom: '4px'
                }}>
                  <span className="relative inline-block">
                    {item.label}
                    <span className="absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-[400ms] w-0 group-hover:w-full"></span>
                  </span>
                </div>
                <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#888' }}>
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
                  padding: isMobile ? '16px 0' : '24px 0',
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
                  padding: isMobile ? '16px 0' : '24px 0',
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
