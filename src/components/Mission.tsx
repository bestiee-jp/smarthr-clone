'use client';

export default function Mission() {
  return (
    <section className="relative">
      {/* ミッション label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div className="flex items-center gap-4" style={{ padding: '20px 5%' }}>
          <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ミッション</span>
        </div>
      </div>

      {/* well-working text */}
      <div
        style={{
          paddingLeft: '5%',
          paddingTop: '40px',
          paddingBottom: '40px'
        }}
      >
        <h2
          className="text-black"
          style={{
            fontSize: 'clamp(60px, 12vw, 180px)',
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: '1'
          }}
        >
          well-working
        </h2>
      </div>

      {/* Main content area with image and text */}
      <div
        style={{
          display: 'flex',
          padding: '30px 5%',
          marginTop: '-50px',
          gap: '60px',
        }}
      >
        {/* Left side - Image and Caption */}
        <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/mission-image.png"
            alt="Mission"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              transform: 'scale(1.2)',
            }}
          />
          <div style={{ marginTop: '80px', textAlign: 'center', fontSize: '20px', lineHeight: '2', color: '#333' }}>
            <p style={{ fontWeight: 'bold', fontSize: '30px' }}>株式会社bestiee代表 後藤 弘</p>
            <p>東京大学工学系研究科 修士課程在籍中</p>
            <p>TBS『東大王』レギュラー出演（2021〜2024）</p>
          </div>
        </div>

        {/* Right side - Text */}
        <div style={{ flex: '1' }}>
          {/* Main tagline */}
          <h3
            className="text-black font-bold mb-16"
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              lineHeight: '1.6'
            }}
          >
            学びと出会いに、ワクワクを
          </h3>

          {/* Body paragraphs */}
          <div
            className="text-black"
            style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '2.2',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <p>人生の分岐点。</p>
            <p>
              そこには常に、見えない「不安」や、やり場のない「退屈」がつきまといます。<br />
              勉強への苦手意識、就活に対する恐れ、キャリアへの迷い。<br />
              多くの人が、その重圧の前で立ち尽くしてしまう現実があります。
            </p>
            <p>だからこそ、私たちはそのプロセス自体を、心躍る体験へと変えていきたい。</p>
            <p>
              私たちは、AIとテクノロジーの力を使い、<br />
              人々の前に立ちはだかる「不安」を「熱狂」へ、<br />
              繰り返される「退屈」を、明日への「期待」へと変えていきます。
            </p>
          </div>

          {/* About us button */}
          <div style={{ marginTop: '60px' }}>
            <a
              href="#"
              className="inline-flex items-center justify-between bg-black text-white"
              style={{
                padding: '24px 40px',
                minWidth: '280px',
                fontSize: '22px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
              onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
            >
              <span>私たちについて</span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          padding: '60px 0',
          marginTop: '40px',
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: '24px',
            animation: 'scroll 40s linear infinite',
            width: 'fit-content',
          }}
        >
          {/* Photos - duplicated for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            [
              { src: '/office-photos/photo1.jpg', id: 1 },
              { src: '/office-photos/photo2.jpg', id: 2 },
              { src: '/office-photos/photo3.jpg', id: 3 },
              { src: '/office-photos/photo4.jpg', id: 4 },
              { src: '/office-photos/photo5.jpg', id: 5 },
              { src: '/office-photos/photo6.png', id: 6 },
              { src: '/office-photos/photo7.jpg', id: 7 },
            ].map((photo) => (
              <div
                key={`${setIndex}-${photo.id}`}
                style={{
                  width: '400px',
                  height: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={photo.src}
                  alt={`Office photo ${photo.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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
