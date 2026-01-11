'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// Company info data
const companyInfo = [
  { label: '名称', value: '株式会社bestiee' },
  { label: '住所', value: '〒150-0043\n東京都渋谷区道玄坂1丁目10番8号\n渋谷道玄坂東急ビル2F-C' },
  { label: '設立', value: '2024年3月6日' },
  { label: '代表', value: '後藤弘（ゴトウコウ）' },
  { label: '資本金', value: '1,000,000円' },
];

// Links
const companyLinks = [
  { label: '役員紹介', href: '/company/executives' },
  { label: '沿革', href: '#' },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: 'white', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative cyan geometric shapes */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '50%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
        }}>
          {/* Main diagonal band */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-100px',
            width: '600px',
            height: '120px',
            backgroundColor: '#4dd9d9',
            transform: 'rotate(-25deg)',
            transformOrigin: 'center',
          }} />
          {/* Second diagonal band */}
          <div style={{
            position: 'absolute',
            top: '30px',
            right: '-50px',
            width: '500px',
            height: '80px',
            backgroundColor: '#4dd9d9',
            opacity: 0.7,
            transform: 'rotate(-25deg)',
            transformOrigin: 'center',
          }} />
          {/* Third diagonal band with stripes */}
          <div style={{
            position: 'absolute',
            top: '100px',
            right: '-80px',
            width: '550px',
            height: '60px',
            background: 'repeating-linear-gradient(90deg, #4dd9d9 0px, #4dd9d9 4px, white 4px, white 8px)',
            transform: 'rotate(-25deg)',
            transformOrigin: 'center',
          }} />
          {/* Fourth striped band */}
          <div style={{
            position: 'absolute',
            top: '140px',
            right: '-60px',
            width: '500px',
            height: '40px',
            background: 'repeating-linear-gradient(90deg, #4dd9d9 0px, #4dd9d9 2px, white 2px, white 6px)',
            opacity: 0.8,
            transform: 'rotate(-25deg)',
            transformOrigin: 'center',
          }} />
        </div>

        {/* Content */}
        <div style={{ padding: '0 5%', position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 'bold',
              color: 'black',
              display: 'inline-block',
            }}>
              会社情報
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginTop: '16px',
            }}>
              Company
            </p>
          </div>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '60px',
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
            &nbsp;-&nbsp; 会社情報
          </div>
        </div>
      </section>

      {/* Company Info Table Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 5%' }}>
        <div style={{ maxWidth: '900px' }}>
          {/* Section header */}
          <div style={{ marginBottom: '40px' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
              <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.1em', fontWeight: '500' }}>会社概要</span>
            </div>
          </div>

          {/* Info Table */}
          <div style={{ borderTop: '1px solid #e5e7eb' }}>
            {companyInfo.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '24px 0',
                }}
              >
                <div style={{
                  flex: '0 0 200px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#333',
                }}>
                  {item.label}
                </div>
                <div style={{
                  flex: '1',
                  fontSize: '16px',
                  color: '#333',
                  lineHeight: '1.8',
                  whiteSpace: 'pre-line',
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 5%' }}>
        <div style={{ maxWidth: '900px' }}>
          {/* Section header */}
          <div style={{ marginBottom: '40px' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
              <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.1em', fontWeight: '500' }}>関連ページ</span>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {companyLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-flex items-center justify-between bg-black text-white"
                style={{
                  padding: '20px 32px',
                  minWidth: '220px',
                  fontSize: '18px',
                  borderRadius: '50px',
                  transition: 'border-radius 0.5s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
                onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
              >
                <span>{link.label}</span>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
