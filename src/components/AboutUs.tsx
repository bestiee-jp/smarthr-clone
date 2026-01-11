'use client';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden">
      {/* ミッション達成のために section */}
      <div
        style={{
          padding: '100px 5%',
        }}
      >
        <div className="flex gap-16">
          {/* Left side - Text */}
          <div style={{ flex: '1' }}>
            <h3
              className="text-black font-bold"
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                marginBottom: '40px',
                letterSpacing: '0.1em',
              }}
            >
              ミッション達成のために
            </h3>
            <p
              className="text-black"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                lineHeight: '2.2',
                maxWidth: '500px',
              }}
            >
              現在、私たちは最速で日本社会の「well-working」を達成するために、スタートアップのスピード感を失わずに規模を拡大していくという難題にチャレンジしています。人事労務領域にとどまらない事業拡大を推進するとともに、従業員一人ひとりが働きやすさとやりがいを感じられる「働きがい」のある組織づくりに取り組んでいます。
            </p>
          </div>

          {/* Right side - Buttons */}
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white"
              style={{
                padding: '24px 32px',
                fontSize: '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>事業から見るSmartHR</span>
              <ArrowIcon />
            </a>
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white"
              style={{
                padding: '24px 32px',
                fontSize: '18px',
                borderRadius: '50px',
                transition: 'border-radius 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              <span>組織から見るSmartHR</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
