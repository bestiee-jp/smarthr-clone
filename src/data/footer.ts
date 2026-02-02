// Footer data types and centralized data

/**
 * Social media link
 */
export interface SocialLink {
  platform: string;
  label: string;
  href: string;
}

/**
 * Footer navigation link
 */
export interface FooterNavLink {
  label: string;
  href: string;
  isBold?: boolean;
}

/**
 * Footer navigation section
 */
export interface FooterNavSection {
  title?: string;
  titleHref?: string;
  links: FooterNavLink[];
}

/**
 * Policy link in footer bottom
 */
export interface PolicyLink {
  label: string;
  href: string;
}

// Social media links - Column 1
export const socialLinksColumn1: SocialLink[] = [
  { platform: 'x', label: 'X (代表:後藤 弘)', href: 'https://x.com/kou_goto_' },
  { platform: 'x', label: 'X (FastPass公式)', href: 'https://x.com/fastpass_ai' },
  { platform: 'note', label: 'note (代表:後藤 弘)', href: 'https://note.com/kou_goto_' },
  { platform: 'note', label: 'note (FastPass公式)', href: 'https://note.com/fastpass_ai' },
  { platform: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E5%BC%98-%E5%BE%8C%E8%97%A4-ab61a3379/' },
];

// Social media links - Column 2
export const socialLinksColumn2: SocialLink[] = [
  { platform: 'youtube', label: 'YouTube (代表:後藤 弘)', href: 'https://www.youtube.com/@toudaiou_room' },
  { platform: 'youtube', label: 'YouTube (AIチャレンジャーズフェス)', href: 'https://youtu.be/O4GQPqapLI4?si=S5GMDRgfnClG8EvC' },
  { platform: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@toudaiou_room' },
  { platform: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/people/%E5%BE%8C%E8%97%A4%E5%BC%98/100014465291670/' },
];

// All social links combined
export const allSocialLinks: SocialLink[] = [...socialLinksColumn1, ...socialLinksColumn2];

// Footer navigation sections
export const footerNavSections: FooterNavSection[] = [
  {
    titleHref: '/mission',
    links: [{ label: '私たちについて', href: '/mission', isBold: true }],
  },
  {
    titleHref: '/service',
    links: [{ label: 'サービス', href: '/service', isBold: true }],
  },
  {
    titleHref: '/news',
    links: [{ label: 'ニュース', href: '/news', isBold: true }],
  },
  {
    titleHref: '/company',
    links: [
      { label: '会社情報', href: '/company', isBold: true },
      { label: '会社情報', href: '/company' },
      { label: '役員紹介', href: '/company/executives' },
      { label: '沿革', href: '/company/history' },
    ],
  },
  {
    titleHref: '/contact',
    links: [{ label: 'お問い合わせ', href: '/contact', isBold: true }],
  },
];

// Policy links at footer bottom
export const policyLinks: PolicyLink[] = [
  { label: '情報セキュリティ基本方針', href: '/security' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: 'AI活用ポリシー', href: '/ai-policy' },
];

// Copyright text
export const copyrightText = '© 2025 bestiee Inc.';

// Footer logo path
export const footerLogoPath = '/logo-footer.webp';
