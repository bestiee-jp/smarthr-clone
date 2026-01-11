'use client';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Careers() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Top links section */}
      <div className="flex gap-8" style={{ marginBottom: '80px', padding: '0 5%' }}>
        {/* 会社情報 */}
        <div className="flex-1">
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
              Office Image
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: '16px 24px',
              minWidth: '180px',
              fontSize: '16px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>会社情報</span>
            <ArrowIcon />
          </a>
        </div>

        {/* サステナビリティ */}
        <div className="flex-1">
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Sustainability Image
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: '16px 24px',
              minWidth: '220px',
              fontSize: '16px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>サステナビリティ</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* 採用情報 label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: '40px' }}>
        <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: '20px' }}>
          <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>採用情報</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center" style={{ gap: '60px', marginBottom: '80px', padding: '0 5%' }}>
        {/* Left side - Text */}
        <div style={{ flex: '1', maxWidth: '500px', marginLeft: '10%' }}>
          <h2
            className="text-black"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              lineHeight: '1.5',
              marginBottom: '30px',
              fontWeight: '300',
            }}
          >
            私たちは一緒に働く<br />
            メンバーを探しています。
          </h2>
          <p
            className="text-black"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: '2',
            }}
          >
            SmartHRが目指すのは誰もがその人らしく働ける社会。
            ミッション・バリューへの共感を何よりも大切に考え、一緒に働く
            メンバーを探しています。
          </p>
        </div>

        {/* Center-right - Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginLeft: 'auto',
            marginRight: '15%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: '24px 32px',
              minWidth: '280px',
              fontSize: '18px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>採用サイト</span>
            <ArrowIcon />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: '24px 32px',
              minWidth: '280px',
              fontSize: '18px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>エンジニア採用サイト</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Decorative elements - Abstract Lines + Overlapping Circles */}

      {/* Abstract curved lines */}
      <svg
        style={{
          position: 'absolute',
          top: '35%',
          right: '0',
          width: '45%',
          height: '500px',
          zIndex: 0,
        }}
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M400,50 Q300,100 350,200 T300,350"
          stroke="rgba(77, 217, 217, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M420,80 Q280,150 320,250 T250,380"
          stroke="rgba(77, 217, 217, 0.25)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M380,20 Q320,80 370,180 T340,320"
          stroke="rgba(77, 217, 217, 0.15)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Overlapping circles */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(77, 217, 217, 0.2) 0%, rgba(77, 217, 217, 0.05) 100%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '2%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(77, 217, 217, 0.15) 0%, rgba(77, 217, 217, 0.03) 100%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          right: '15%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(77, 217, 217, 0.3) 0%, rgba(77, 217, 217, 0.1) 100%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '65%',
          right: '5%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255, 154, 139, 0.25) 0%, rgba(255, 154, 139, 0.08) 100%)',
          zIndex: 0,
        }}
      />

      {/* Employee Photos Section - Auto Scroll */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          padding: '40px 0',
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: '40px',
            animation: 'scroll 30s linear infinite',
            width: 'fit-content',
          }}
        >
          {/* 10 employees - mix of circles and rectangles */}
          {[
            { type: 'circle', id: 1 },
            { type: 'rect', id: 2 },
            { type: 'rect', id: 3 },
            { type: 'circle', id: 4 },
            { type: 'rect', id: 5 },
            { type: 'circle', id: 6 },
            { type: 'rect', id: 7 },
            { type: 'rect', id: 8 },
            { type: 'circle', id: 9 },
            { type: 'rect', id: 10 },
            // Duplicate for seamless loop
            { type: 'circle', id: 11 },
            { type: 'rect', id: 12 },
            { type: 'rect', id: 13 },
            { type: 'circle', id: 14 },
            { type: 'rect', id: 15 },
            { type: 'circle', id: 16 },
            { type: 'rect', id: 17 },
            { type: 'rect', id: 18 },
            { type: 'circle', id: 19 },
            { type: 'rect', id: 20 },
          ].map((item) => (
            <div
              key={item.id}
              style={{
                width: item.type === 'circle' ? '350px' : '390px',
                height: item.type === 'circle' ? '350px' : '488px',
                borderRadius: item.type === 'circle' ? '50%' : '12px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 100%)',
                flexShrink: 0,
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Employee {((item.id - 1) % 10) + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
