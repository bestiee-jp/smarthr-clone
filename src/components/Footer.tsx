'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ExternalLinkIcon } from '@/components/icons';

// X (Twitter) Icon
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// Note Icon
function NoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">n</text>
    </svg>
  );
}

// LinkedIn Icon
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// TikTok Icon
function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

// YouTube Icon
function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

// Facebook Icon
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// Footer Link Component
function FooterLink({ href, children, external = false, isMobile = false }: { href: string; children: React.ReactNode; external?: boolean; isMobile?: boolean }) {
  const pathname = usePathname();

  const content = (
    <>
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
      {external && <ExternalLinkIcon />}
    </>
  );

  const fontSize = isMobile ? '14px' : '18px';

  // Handle click - scroll to top if same page (preserve form data)
  const handleClick = (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Use Link for internal links (starting with /)
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} onClick={handleClick} className="group text-white flex items-center gap-2 w-fit" style={{ fontSize }}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="group text-white flex items-center gap-2 w-fit"
      style={{ fontSize }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

// Footer Section Title
function FooterTitle({ children, isMobile = false }: { children: React.ReactNode; isMobile?: boolean }) {
  return <h3 style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold', color: 'white', marginBottom: isMobile ? '12px' : '20px' }}>{children}</h3>;
}

// Social Link Component
function SocialLink({ icon, label, href, isMobile = false }: { icon: React.ReactNode; label: string; href: string; isMobile?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white w-fit" style={{ fontSize: isMobile ? '14px' : '18px' }}>
      {icon}
      <span className="relative inline-block">
        {label}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
    </a>
  );
}

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-[#1a1a1a] text-white flex flex-col" style={{ minHeight: isMobile ? 'auto' : '100vh' }}>
      {/* Top Spacer */}
      <div style={{ height: isMobile ? '40px' : '20vh' }}></div>

      {/* Main Footer Content */}
      <div style={{ padding: '0 5%' }} className="flex-1">
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '48px' : '0' }}>
          {/* Left Half - Logo, SNS, YouTube/Facebook */}
          <div style={{ width: isMobile ? '100%' : '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Logo at top */}
              <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
                <Link href="/">
                  <Image
                    src="/logo-footer.png"
                    alt="bestiee"
                    width={isMobile ? 140 : 180}
                    height={50}
                    style={{ height: 'auto' }}
                  />
                </Link>
              </div>

              {/* SNS Links */}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '24px' : '64px' }}>
                {/* Column 1 - X, note, LinkedIn */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '20px' }}>
                  <SocialLink icon={<XIcon />} label="X (代表:後藤 弘)" href="https://x.com/kou_goto_" isMobile={isMobile} />
                  <SocialLink icon={<XIcon />} label="X (FastPass公式)" href="https://x.com/fastpass_ai" isMobile={isMobile} />
                  <SocialLink icon={<NoteIcon />} label="note (代表:後藤 弘)" href="https://note.com/kou_goto_" isMobile={isMobile} />
                  <SocialLink icon={<NoteIcon />} label="note (FastPass公式)" href="https://note.com/fastpass_ai" isMobile={isMobile} />
                  <SocialLink icon={<LinkedInIcon />} label="LinkedIn" href="https://www.linkedin.com/in/%E5%BC%98-%E5%BE%8C%E8%97%A4-ab61a3379/" isMobile={isMobile} />
                </div>

                {/* Column 2 - YouTube, TikTok, Facebook */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '20px' }}>
                  <SocialLink icon={<YouTubeIcon />} label="YouTube (代表:後藤 弘)" href="https://www.youtube.com/@toudaiou_room" isMobile={isMobile} />
                  <SocialLink icon={<YouTubeIcon />} label="YouTube (AIチャレンジャーズフェス)" href="https://youtu.be/O4GQPqapLI4?si=S5GMDRgfnClG8EvC" isMobile={isMobile} />
                  <SocialLink icon={<TikTokIcon />} label="TikTok" href="https://www.tiktok.com/@toudaiou_room" isMobile={isMobile} />
                  <SocialLink icon={<FacebookIcon />} label="Facebook" href="https://www.facebook.com/people/%E5%BE%8C%E8%97%A4%E5%BC%98/100014465291670/" isMobile={isMobile} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Navigation */}
          <div style={{
            width: isMobile ? '100%' : '50%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '32px' : '64px'
          }}>
            {/* 私たちについて */}
            <div>
              <FooterLink href="/mission" isMobile={isMobile}>
                <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold' }}>私たちについて</span>
              </FooterLink>
            </div>

            {/* サービス */}
            <div>
              <FooterLink href="/service" isMobile={isMobile}>
                <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold' }}>サービス</span>
              </FooterLink>
            </div>

            {/* ニュース */}
            <div>
              <FooterLink href="/news" isMobile={isMobile}>
                <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold' }}>ニュース</span>
              </FooterLink>
            </div>

            {/* 会社情報 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '16px' }}>
              <FooterLink href="/company" isMobile={isMobile}>
                <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold' }}>会社情報</span>
              </FooterLink>
              <FooterLink href="/company" isMobile={isMobile}>会社情報</FooterLink>
              <FooterLink href="/company/executives" isMobile={isMobile}>役員紹介</FooterLink>
              <FooterLink href="/company/history" isMobile={isMobile}>沿革</FooterLink>
            </div>

            {/* お問い合わせ */}
            <div>
              <FooterLink href="/contact" isMobile={isMobile}>
                <span style={{ fontSize: isMobile ? '16px' : '22px', fontWeight: 'bold' }}>お問い合わせ</span>
              </FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: isMobile ? '32px 5%' : '0 5% 100px 5%' }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '24px' : '0'
        }}>
          <span className="text-white" style={{ fontSize: isMobile ? '12px' : '16px' }}>© 2025 bestiee Inc.</span>
          <div style={{
            marginRight: isMobile ? '0' : '15%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            gap: isMobile ? '12px' : '32px'
          }}>
            <a href="/security" className="group text-white" style={{ fontSize: isMobile ? '12px' : '16px' }}>
              <span className="relative inline-block">情報セキュリティ基本方針<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
            <a href="/privacy" className="group text-white" style={{ fontSize: isMobile ? '12px' : '16px' }}>
              <span className="relative inline-block">プライバシーポリシー<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
            <a href="/ai-policy" className="group text-white" style={{ fontSize: isMobile ? '12px' : '16px' }}>
              <span className="relative inline-block">AI活用ポリシー<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
