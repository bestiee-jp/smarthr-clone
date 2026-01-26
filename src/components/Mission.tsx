'use client';

import { useEffect, useState } from 'react';

export default function Mission() {
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
    <section className="relative">
      {/* ミッション label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div
          className="flex items-center"
          style={{
            padding: isMobile ? '16px 5%' : '20px 5%',
            gap: isMobile ? '12px' : '16px'
          }}
        >
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'linear-gradient(180deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ミッション</span>
        </div>
      </div>

      {/* Main content area with image and text */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '24px 5%' : '30px 5%',
          marginTop: isMobile ? '24px' : '40px',
          gap: isMobile ? '40px' : '60px',
        }}
      >
        {/* Left side - Image and Caption */}
        <div style={{
          flex: isMobile ? '1' : '0 0 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src="/kou2.jpg"
            alt="Mission"
            style={{
              width: '100%',
              maxWidth: isMobile ? '350px' : '600px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              transform: 'scale(1.02)',
            }}
          />
          <div style={{
            marginTop: isMobile ? '32px' : '80px',
            textAlign: 'center',
            fontSize: isMobile ? '14px' : '20px',
            lineHeight: '2',
            color: '#333'
          }}>
            <p style={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : '30px' }}>株式会社bestiee代表 後藤 弘</p>
            <p>東京大学工学系研究科 修士課程在籍中</p>
            <p>TBS『東大王』レギュラー出演（2021〜2024）</p>
          </div>
        </div>

        {/* Right side - Text */}
        <div style={{ flex: '1' }}>
          {/* Main tagline */}
          <h3
            className="text-black font-bold"
            style={{
              fontSize: isMobile ? '22px' : 'clamp(24px, 3vw, 40px)',
              lineHeight: '1.6',
              marginBottom: isMobile ? '24px' : '64px'
            }}
          >
            学びと出会いに、ワクワクを
          </h3>

          {/* Body paragraphs */}
          <div
            className="text-black"
            style={{
              fontSize: isMobile ? '15px' : 'clamp(16px, 1.5vw, 20px)',
              lineHeight: isMobile ? '1.9' : '2.2',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '16px' : '24px',
            }}
          >
            <p>人生の分岐点。</p>
            <p>
              そこには常に、見えない「不安」や、やり場のない「退屈」がつきまといます。
              {!isMobile && <br />}
              勉強への苦手意識、就活に対する恐れ、キャリアへの迷い。
              {!isMobile && <br />}
              多くの人が、その重圧の前で立ち尽くしてしまう現実があります。
            </p>
            <p>だからこそ、私たちはそのプロセス自体を、心躍る体験へと変えていきたい。</p>
            <p>
              私たちは、AIとテクノロジーの力を使い、
              {!isMobile && <br />}
              人々の前に立ちはだかる「不安」を「熱狂」へ、
              {!isMobile && <br />}
              繰り返される「退屈」を、明日への「期待」へと変えていきます。
            </p>
          </div>

          {/* About us button */}
          <div style={{ marginTop: isMobile ? '32px' : '60px' }}>
            <a
              href="#"
              className="inline-flex items-center justify-between bg-black text-white"
              style={{
                padding: isMobile ? '16px 24px' : '24px 40px',
                minWidth: isMobile ? '200px' : '280px',
                fontSize: isMobile ? '16px' : '22px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
              onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
            >
              <span>私たちについて</span>
              <svg
                width={isMobile ? "20" : "28"}
                height={isMobile ? "20" : "28"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Auto-scroll Photo Gallery */}
      <div
        style={{
          overflow: 'hidden',
          padding: isMobile ? '32px 0' : '60px 0',
          marginTop: isMobile ? '24px' : '40px',
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: isMobile ? '16px' : '24px',
            animation: 'scroll 40s linear infinite',
            width: 'fit-content',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          {/* Photos - duplicated for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            [
              { src: '/mission-photos/s-_C8A2490.jpg', id: 1 },
              { src: '/mission-photos/s-_C8A2500.jpg', id: 2 },
              { src: '/mission-photos/s-DSC07998.jpg', id: 3 },
              { src: '/mission-photos/s-DSC08159.jpg', id: 4 },
              { src: '/mission-photos/s-IMG_5545.jpg', id: 5 },
              { src: '/mission-photos/s-IMG_5548.jpg', id: 6 },
              { src: '/mission-photos/s-Vol.2_座談会写真学生2.jpg', id: 7 },
            ].map((photo) => (
              <div
                key={`${setIndex}-${photo.id}`}
                style={{
                  width: isMobile ? '280px' : '400px',
                  height: isMobile ? '210px' : '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={photo.src}
                  alt={`Office photo ${photo.id}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    willChange: 'transform',
                  }}
                />
              </div>
            ))
          )).flat()}
        </div>
      </div>
    </section>
  );
}
