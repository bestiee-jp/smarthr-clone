'use client';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero-bg.mp4?v=2" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center" style={{ minHeight: '90vh', padding: '0 5%' }}>
        {/* Tagline */}
        <h1
          className="text-black font-bold leading-tight"
          style={{
            fontSize: 'clamp(24px, 4vw, 48px)',
            maxWidth: '100%',
            position: 'absolute',
            top: '42%',
            transform: 'translateY(-50%)',
          }}
        >
          労働にまつわる社会課題をなくし、誰もがその人らしく働ける社会をつくる。
        </h1>

        {/* News/Press Release Section */}
        <div
          className="absolute bottom-16 left-0 flex items-start gap-6"
          style={{ padding: '0 5%' }}
        >
          {/* Thumbnail */}
          <div
            className="flex-shrink-0 bg-gradient-to-br from-[#0891b2] to-[#0e7490] rounded overflow-hidden"
            style={{ width: '120px', height: '80px' }}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-xs p-2">
              <span className="text-center leading-tight" style={{ fontSize: '8px' }}>
                人が社会に<br/>本当に<br/>欲しいもの
              </span>
            </div>
          </div>

          {/* News content */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-[14px]">2025.06.23</span>
              <span className="text-[#00c8c8] text-[14px] font-medium">プレスリリース</span>
              <ArrowIcon />
            </div>
            <p className="text-black text-[16px]">
              「SmartHR」が10周年を記念し特設サイトを公開。あわせてサービスビジョンを刷新
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
