'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Executive data
const executives = [
  {
    title: '代表取締役CEO',
    name: '芹澤 雅人',
    bio: '2016年、SmartHR入社。2017年にVPoEに就任、開発業務のほか、エンジニアチームのビルディングとマネジメントを担当する。2019年以降、CTOとしてプロダクト開発・運用に関わるチーム全体の最適化やビジネスサイドとの要望調整も担う。2020年取締役に就任。2022年1月より現職。',
  },
  {
    title: '取締役COO',
    name: '倉橋 隆文',
    bio: '2008年、外資系コンサルティングファームであるマッキンゼー＆カンパニーに入社し、大手クライアントの経営課題解決に従事。その後、ハーバード・ビジネススクールにてMBAを取得。2012年より楽天株式会社（現楽天グループ株式会社）にて社長室や海外子会社社長を務め、事業成長を推進。2017年にSmartHR入社、2018年1月より現職。',
  },
];

// Navigation sections
const navSections = [
  { label: '取締役・CxO', active: true },
  { label: '社外取締役', active: false },
  { label: '監査等委員', active: false },
];

export default function ExecutivesPage() {
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
              役員紹介
            </h1>
            <span style={{
              fontSize: '16px',
              color: '#666',
              marginLeft: '24px',
              verticalAlign: 'middle',
            }}>
              2025年4月1日現在
            </span>
          </div>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '60px',
          }}>
            トップ &nbsp;-&nbsp; 会社情報 &nbsp;-&nbsp; 役員紹介
          </div>
        </div>

        {/* Section header with full-width border */}
        <div style={{ borderBottom: '1px solid #e5e7eb' }}>
          <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: '20px' }}>
            <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
            <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.1em', fontWeight: '500' }}>取締役・CxO</span>
          </div>
        </div>
      </section>

      {/* Executives Content Section */}
      <section style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {/* Main content area */}
          <div style={{ flex: 1, padding: '80px 5%', paddingRight: '300px' }}>
            {/* Decorative elements behind executives */}
            <div style={{ position: 'relative' }}>
              {/* Background decorative stripes - left side */}
              <div style={{
                position: 'absolute',
                top: '100px',
                left: '-15%',
                width: '400px',
                height: '300px',
                zIndex: 0,
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '500px',
                  height: '60px',
                  background: 'repeating-linear-gradient(90deg, #4dd9d9 0px, #4dd9d9 3px, transparent 3px, transparent 8px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.4,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '50px',
                  width: '400px',
                  height: '40px',
                  background: 'repeating-linear-gradient(90deg, #4dd9d9 0px, #4dd9d9 2px, transparent 2px, transparent 6px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.3,
                }} />
              </div>

              {/* Background decorative stripes - right side */}
              <div style={{
                position: 'absolute',
                top: '50px',
                right: '-10%',
                width: '400px',
                height: '350px',
                zIndex: 0,
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '500px',
                  height: '80px',
                  background: 'repeating-linear-gradient(90deg, #4dd9d9 0px, #4dd9d9 3px, transparent 3px, transparent 8px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.5,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '80px',
                  width: '450px',
                  height: '50px',
                  background: 'repeating-linear-gradient(90deg, #4dd9d9 0px, #4dd9d9 2px, transparent 2px, transparent 5px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.3,
                }} />
              </div>

              {/* Executives grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '60px',
                position: 'relative',
                zIndex: 1,
              }}>
                {executives.map((exec, index) => (
                  <div key={index}>
                    {/* Photo placeholder */}
                    <div style={{
                      width: '100%',
                      aspectRatio: '1',
                      maxWidth: '400px',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '0',
                      marginBottom: '24px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #d1d5db 0%, #e5e7eb 50%, #f3f4f6 100%)',
                    }}>
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        Photo
                      </div>
                    </div>

                    {/* Title */}
                    <div style={{
                      fontSize: '14px',
                      color: '#666',
                      marginBottom: '8px',
                    }}>
                      {exec.title}
                    </div>

                    {/* Name */}
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: 'black',
                      marginBottom: '16px',
                    }}>
                      {exec.name}
                    </h3>

                    {/* Bio */}
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '2',
                      color: '#333',
                    }}>
                      {exec.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar navigation */}
          <div style={{
            position: 'fixed',
            right: '5%',
            top: '200px',
            width: '200px',
            zIndex: 100,
          }}>
            {navSections.map((section, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  backgroundColor: section.active ? '#4dd9d9' : 'white',
                  color: section.active ? 'white' : 'black',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                <span>{section.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2L6 10M6 10L10 6M6 10L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
