'use client';

import Link from 'next/link';

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

// SmartHR S Icon
function SmartHRIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">S</text>
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

// External Link Icon
function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  );
}

// Footer Link Component
function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const content = (
    <>
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
      {external && <ExternalLinkIcon />}
    </>
  );

  // Use Link for internal links (starting with /)
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} className="group text-[18px] text-white flex items-center gap-2 w-fit">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="group text-[18px] text-white flex items-center gap-2 w-fit"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

// Footer Section Title
function FooterTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[22px] font-bold text-white mb-5">{children}</h3>;
}

// Social Link Component
function SocialLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" className="group flex items-center gap-3 text-[18px] text-white w-fit">
      {icon}
      <span className="relative inline-block">
        {label}
        <span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white min-h-screen flex flex-col">
      {/* Top Spacer - 20% of viewport */}
      <div className="h-[20vh]"></div>

      {/* Main Footer Content */}
      <div style={{ padding: '0 5%' }} className="flex-1">
        <div className="flex">
          {/* Left Half - Logo, SNS, YouTube/Facebook */}
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              {/* Logo at top */}
              <div className="flex items-center gap-3 mb-12">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
                  <path
                    d="M20.5 10C16.5 10 14 12 14 14.8C14 17.8 16.5 19 20 19.8C23 20.5 24 21.2 24 22.5C24 24 22.5 25 20 25C17 25 15.5 23.5 15.2 21.5H11.5C11.8 25.5 15 28.5 20 28.5C24.5 28.5 27.5 26 27.5 22.3C27.5 19 25 17.5 21 16.7C18.2 16.1 17 15.5 17 14.3C17 13 18.3 12 20.3 12C22.5 12 24 13.2 24.3 15H28C27.5 11.5 24.5 10 20.5 10Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white font-bold text-[28px]">SmartHR</span>
              </div>

              {/* SNS Links - X column and YouTube column side by side */}
              <div className="flex gap-16">
                {/* Column 1 - X, note, TechBlog, Real SmartHR */}
                <div className="space-y-5">
                  <SocialLink icon={<XIcon />} label="X" />
                  <SocialLink icon={<NoteIcon />} label="note" />
                  <SocialLink icon={<SmartHRIcon />} label="TechBlog" />
                  <SocialLink icon={<SmartHRIcon />} label="Real SmartHR (Official Blog)" />
                </div>

                {/* Column 2 - YouTube & Facebook */}
                <div className="space-y-5">
                  <SocialLink icon={<YouTubeIcon />} label="YouTube (Corporate)" />
                  <SocialLink icon={<YouTubeIcon />} label="YouTube (Service)" />
                  <div className="pt-5">
                    <SocialLink icon={<FacebookIcon />} label="Facebook (Corporate)" />
                  </div>
                  <SocialLink icon={<FacebookIcon />} label="Facebook (Service)" />
                </div>
              </div>
            </div>

            {/* Certification Badges at bottom */}
            <div className="flex items-center gap-4 pb-8">
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] text-center leading-tight">AICPA<br/>SOC</span>
              </div>
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <span className="text-[#1e3a5f] text-[10px] font-bold">MSA</span>
              </div>
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <span className="text-[#1e3a5f] text-[10px] font-bold">ISMS</span>
              </div>
              <span className="text-gray-500 text-[14px] ml-2">認証組織：本社</span>
            </div>
          </div>

          {/* Right Half - Navigation */}
          <div className="w-1/2 flex gap-16">
            {/* 私たちについて & サービス */}
            <div>
              <FooterTitle>私たちについて</FooterTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <FooterLink href="#">ミッション・バリュー</FooterLink>
                <FooterLink href="#">事業から見るSmartHR</FooterLink>
                <FooterLink href="#">組織から見るSmartHR</FooterLink>
                <FooterLink href="#">- DEIBに関する取り組み</FooterLink>
                <FooterLink href="#">ブランドとしての取り組み</FooterLink>
              </div>

              <div style={{ marginTop: '120px' }}>
                <FooterTitle>サービス</FooterTitle>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <FooterLink href="#" external>サービスサイト</FooterLink>
                </div>
              </div>
            </div>

            {/* ニュース & 会社情報 */}
            <div>
              <FooterTitle>ニュース</FooterTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <FooterLink href="#">プレスキット</FooterLink>
              </div>

              <div style={{ marginTop: '120px' }}>
                <FooterTitle>会社情報</FooterTitle>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <FooterLink href="/company/executives">役員紹介</FooterLink>
                  <FooterLink href="#">沿革</FooterLink>
                </div>
              </div>
            </div>

            {/* サステナビリティ & お問い合わせ & 採用 */}
            <div>
              <FooterTitle>サステナビリティ</FooterTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <FooterLink href="#">マテリアリティ</FooterLink>
                <FooterLink href="#">人的資本に関する取り組み</FooterLink>
                <FooterLink href="#">環境</FooterLink>
                <FooterLink href="#">社会</FooterLink>
                <FooterLink href="#">ガバナンス</FooterLink>
              </div>

              <div style={{ marginTop: '120px' }}>
                <FooterTitle>お問い合わせ</FooterTitle>

                <div style={{ marginTop: '10px' }}>
                  <FooterLink href="#" external>
                    <span className="text-[22px] font-bold text-white">採用サイト</span>
                  </FooterLink>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <FooterLink href="#" external>
                    <span className="text-[22px] font-bold text-white">エンジニア採用サイト</span>
                  </FooterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: '0 5% 100px 5%' }}>
        <div className="flex items-center justify-between">
          <span className="text-white text-[16px]">© SmartHR, Inc.</span>
          <div style={{ marginRight: '15%' }} className="flex items-center gap-8">
            <a href="#" className="group text-white text-[16px]">
              <span className="relative inline-block">アクセシビリティ方針<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
            <a href="#" className="group text-white text-[16px]">
              <span className="relative inline-block">情報セキュリティ基本方針<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
            <a href="#" className="group text-white text-[16px]">
              <span className="relative inline-block">プライバシーポリシー<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
            <a href="#" className="group text-white text-[16px]">
              <span className="relative inline-block">AI活用ポリシー<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
            <a href="#" className="group text-white text-[16px]">
              <span className="relative inline-block">カスタマーハラスメントに対する行動指針<span className="absolute left-0 bottom-[-2px] h-[1px] bg-white transition-all duration-100 w-0 group-hover:w-full"></span></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
