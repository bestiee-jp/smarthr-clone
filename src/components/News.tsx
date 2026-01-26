'use client';

import { useEffect, useState } from 'react';

// Arrow Icon in circle
function ArrowCircleIcon({ hover = false, size = 40 }: { hover?: boolean; size?: number }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: hover ? '#00c8c8' : 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s',
      }}
    >
      <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// Arrow Icon
function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// News item data
const newsItems = [
  {
    date: '2025.12.26',
    category: 'お知らせ',
    title: 'VP就任に関するお知らせ',
  },
  {
    date: '2025.12.08',
    category: 'お知らせ',
    title: '不適切なブログ記事公開に関するお詫びと今後の対応について',
  },
  {
    date: '2025.12.03',
    category: 'プレスリリース',
    title: 'SmartHR、蓄積された従業員データをAIが分析し、最適な人材選定を提案する「AI類似従業員検索」機能を提供',
  },
  {
    date: '2025.11.25',
    category: 'お知らせ',
    title: 'SmartHR、「人事評価」に「給与シミュレーション」機能を追加',
  },
  {
    date: '2025.11.18',
    category: 'お知らせ',
    title: 'General AtlanticがSmartHRの株主に参画 Coral Capitalから146億円の株式を取得',
  },
];

export default function News() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : '80px', position: 'relative' }}>
      {/* ニュース label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '40px' : '80px' }}>
        <div
          className="flex items-center"
          style={{
            padding: isMobile ? '0 5% 16px' : '0 5% 20px',
            gap: isMobile ? '12px' : '16px'
          }}
        >
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'linear-gradient(180deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ニュース</span>
        </div>
      </div>

      {/* News list */}
      <div style={{ padding: '0 5%' }}>
        {newsItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="group"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '20px 0' : '30px 0',
              borderBottom: '1px solid #e5e7eb',
              textDecoration: 'none',
              gap: isMobile ? '12px' : '0',
            }}
          >
            {/* Left side: Date, Category, Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? '8px' : '30px',
                flex: 1
              }}
            >
              {/* Date and Category row on mobile */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '30px',
                }}
              >
                {/* Date */}
                <span
                  style={{
                    color: '#6b7280',
                    fontSize: isMobile ? '13px' : '15px',
                    minWidth: isMobile ? 'auto' : '110px',
                  }}
                >
                  {item.date}
                </span>

                {/* Category tag */}
                <span
                  style={{
                    border: '1px solid #00c8c8',
                    color: '#00c8c8',
                    padding: isMobile ? '4px 12px' : '6px 20px',
                    borderRadius: '20px',
                    fontSize: isMobile ? '11px' : '13px',
                    minWidth: isMobile ? 'auto' : '100px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <span
                className="group-hover:text-[#00c8c8] transition-colors"
                style={{
                  color: 'black',
                  fontSize: isMobile ? '14px' : '16px',
                  flex: 1,
                  lineHeight: '1.6',
                }}
              >
                {item.title}
              </span>
            </div>

            {/* Right side: Arrow */}
            <div
              className="group-hover:scale-110 transition-transform"
              style={{
                alignSelf: isMobile ? 'flex-end' : 'center',
                marginTop: isMobile ? '8px' : '0',
              }}
            >
              <ArrowCircleIcon size={isMobile ? 32 : 40} />
            </div>
          </a>
        ))}
      </div>

      {/* ニュース一覧 Button */}
      <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', marginTop: isMobile ? '32px' : '60px', padding: '0 5%' }}>
        <a
          href="#"
          className="inline-flex items-center justify-between bg-black text-white"
          style={{
            padding: isMobile ? '16px 24px' : '24px 32px',
            minWidth: isMobile ? '200px' : '280px',
            fontSize: isMobile ? '14px' : '18px',
            borderRadius: '50px',
            transition: 'border-radius 0.5s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
          onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
        >
          <span>ニュース一覧</span>
          <ArrowIcon size={isMobile ? 16 : 20} />
        </a>
      </div>

      {/* Office Photos Section */}
      <div style={{ position: 'relative', marginTop: isMobile ? '60px' : '100px' }}>
        {/* Cyan decorative shapes - hidden on mobile */}
        {!isMobile && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '-80px',
                left: '-10%',
                width: '400px',
                height: '350px',
                backgroundColor: '#00c8c8',
                transform: 'skewY(-8deg) skewX(-5deg)',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50px',
                left: '-15%',
                width: '350px',
                height: '200px',
                backgroundColor: '#00c8c8',
                transform: 'skewY(5deg) skewX(-10deg)',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '180px',
                left: '-5%',
                width: '300px',
                height: '250px',
                backgroundColor: '#00c8c8',
                transform: 'skewY(-3deg)',
                zIndex: 0,
              }}
            />
          </>
        )}

        {/* Mobile: Simple cyan background */}
        {isMobile && (
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-5%',
              width: '60%',
              height: '200px',
              backgroundColor: '#00c8c8',
              transform: 'skewY(-5deg)',
              zIndex: 0,
            }}
          />
        )}

        {/* Photos container */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '16px' : '32px',
            position: 'relative',
            zIndex: 1,
            paddingTop: isMobile ? '40px' : '80px',
            paddingLeft: isMobile ? '5%' : '10%',
            paddingRight: isMobile ? '5%' : '0',
          }}
        >
          {/* Left photo - Dark office */}
          <div
            style={{
              flex: '1',
              height: isMobile ? '250px' : '450px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, #1a1a2e 0%, #2d2d44 40%, #4a4a5c 100%)',
                position: 'relative',
              }}
            >
              {/* Ceiling grid pattern */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 32px), repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 32px)',
                }}
              />
              {/* Hanging lamps */}
              <div style={{ position: 'absolute', top: '35%', left: '30%', width: isMobile ? '14px' : '20px', height: isMobile ? '20px' : '30px', backgroundColor: '#f59e0b', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: '38%', left: '60%', width: isMobile ? '14px' : '20px', height: isMobile ? '20px' : '30px', backgroundColor: '#ea580c', borderRadius: '50%' }} />
              {/* Window silhouettes */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '10%',
                  right: '10%',
                  height: '35%',
                  background: 'linear-gradient(180deg, rgba(135,206,235,0.3) 0%, rgba(255,200,150,0.2) 100%)',
                  borderRadius: '4px',
                }}
              />
              {/* People silhouettes */}
              <div className="flex justify-center gap-4" style={{ position: 'absolute', bottom: '15%', left: '20%', right: '20%' }}>
                {[...Array(isMobile ? 4 : 6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: isMobile ? '18px' : '25px',
                      height: isMobile ? '28px' : '40px',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      borderRadius: '50% 50% 0 0',
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: isMobile ? '10px' : '12px',
                }}
              >
                Office Photo 1
              </span>
            </div>
          </div>

          {/* Right photo - Bright meeting */}
          <div
            style={{
              flex: '1',
              height: isMobile ? '250px' : '450px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
                position: 'relative',
              }}
            >
              {/* Window light effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 100%)',
                }}
              />
              {/* People placeholders */}
              <div
                className="flex items-end justify-center"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '15%',
                  right: '15%',
                  gap: isMobile ? '16px' : '24px',
                }}
              >
                {/* Person 1 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: isMobile ? '35px' : '50px', height: isMobile ? '35px' : '50px', borderRadius: '50%', backgroundColor: '#374151', marginBottom: '8px' }} />
                  <div style={{ width: isMobile ? '28px' : '40px', height: isMobile ? '42px' : '60px', backgroundColor: '#1f2937', borderRadius: '8px 8px 0 0' }} />
                </div>
                {/* Person 2 - center */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: isMobile ? '35px' : '50px', height: isMobile ? '35px' : '50px', borderRadius: '50%', backgroundColor: '#374151', marginBottom: '8px' }} />
                  <div style={{ width: isMobile ? '28px' : '40px', height: isMobile ? '42px' : '60px', backgroundColor: '#dc2626', borderRadius: '8px 8px 0 0' }} />
                </div>
                {/* Person 3 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: isMobile ? '35px' : '50px', height: isMobile ? '35px' : '50px', borderRadius: '50%', backgroundColor: '#374151', marginBottom: '8px' }} />
                  <div style={{ width: isMobile ? '28px' : '40px', height: isMobile ? '42px' : '60px', backgroundColor: '#6b7280', borderRadius: '8px 8px 0 0' }} />
                </div>
              </div>
              {/* Laptop */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '25%',
                  width: isMobile ? '40px' : '60px',
                  height: isMobile ? '28px' : '40px',
                  backgroundColor: '#d1d5db',
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(0,0,0,0.3)',
                  fontSize: isMobile ? '10px' : '12px',
                }}
              >
                Office Photo 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
