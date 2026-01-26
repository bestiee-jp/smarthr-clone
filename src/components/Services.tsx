'use client';

import { useState, useEffect } from 'react';

// Arrow Icon
function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// スライドデータ
const slides = [
  {
    description: '人事・労務の業務効率化と、着実な成果につながるタレントマネジメントの推進を支援するクラウド人事労務ソフト「SmartHR」を開発しています。',
    buttonText: 'サービス',
    title: '勤怠レポート',
    subtitle: '月間平均労働時間（正社員）',
    value: '174.6',
    unit: '時間',
    chartData: [60, 45, 70, 55, 80, 65, 75, 50, 85, 60],
    phoneUser: '田中 ゆき',
    phoneLocation: 'カナダ',
    phoneItems: ['住所と連絡先', '電話番号', '業務情報', '所属部署', '所属支店'],
  },
  {
    description: '給与計算から明細配布まで、煩雑な給与業務をシンプルに。従業員はスマホでいつでも給与明細を確認できます。',
    buttonText: '給与明細',
    title: '給与明細',
    subtitle: '今月の総支給額',
    value: '425,000',
    unit: '円',
    chartData: [50, 65, 55, 70, 60, 80, 70, 85, 75, 90],
    phoneUser: '佐藤 健太',
    phoneLocation: '東京',
    phoneItems: ['基本給', '残業手当', '通勤手当', '社会保険', '所得税'],
  },
  {
    description: '有給休暇の取得状況を可視化し、働き方改革を推進。申請から承認までペーパーレスで完結します。',
    buttonText: '勤怠管理',
    title: '有給管理',
    subtitle: '残り有給日数',
    value: '12.5',
    unit: '日',
    chartData: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35],
    phoneUser: '鈴木 美咲',
    phoneLocation: '大阪',
    phoneItems: ['年次有給', '特別休暇', '振替休日', '申請履歴', '承認状況'],
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2; // 5000ms / 50ms = 100 steps, so 2% per step
      });
    }, 100);

    // Slide change
    const slideInterval = setInterval(() => {
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : '80px' }}>
      {/* サービス label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '32px' : '60px' }}>
        <div
          className="flex items-center"
          style={{
            padding: isMobile ? '0 5% 16px' : '0 5% 20px',
            gap: isMobile ? '12px' : '16px'
          }}
        >
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'linear-gradient(180deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>サービス</span>
        </div>
      </div>

      {/* Content area with wipe animation */}
      <div style={{ position: 'relative', minHeight: isMobile ? '600px' : '500px', overflow: 'hidden' }}>
        <div
          style={{
            clipPath: isAnimating ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)',
            transition: 'clip-path 0.7s ease-in-out',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '32px' : '60px',
              padding: '0 5%'
            }}
          >
            {/* Left side - Text and Button */}
            <div style={{ flex: isMobile ? 'none' : '0 0 35%', paddingTop: isMobile ? '0' : '40px' }}>
              <p
                className="text-black"
                style={{
                  fontSize: isMobile ? '14px' : 'clamp(16px, 1.8vw, 20px)',
                  lineHeight: isMobile ? '1.8' : '2',
                  marginBottom: isMobile ? '24px' : '40px',
                }}
              >
                {slide.description}
              </p>

              {/* Button */}
              <a
                href="#"
                className="inline-flex items-center justify-between bg-black text-white"
                style={{
                  padding: isMobile ? '14px 20px' : '20px 30px',
                  minWidth: isMobile ? '180px' : '280px',
                  fontSize: isMobile ? '14px' : '18px',
                  borderRadius: '50px',
                  transition: 'border-radius 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
              >
                <span>{slide.buttonText}</span>
                <ArrowIcon size={isMobile ? 16 : 20} />
              </a>
            </div>

            {/* Right side - Service Image */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: isMobile ? '300px' : '400px' }}>
              <img
                src="/images/service-mockup.png"
                alt="サービスイメージ"
                style={{
                  maxWidth: '100%',
                  maxHeight: isMobile ? '300px' : '400px',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>

        {/* Slide indicators - outside wipe animation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? '12px' : '16px', marginTop: isMobile ? '24px' : '30px' }}>
          {slides.map((_, index) => {
            const isActive = currentSlide === index;
            const size = isActive ? (isMobile ? 20 : 24) : 8;
            const strokeWidth = 2;
            const radius = (size - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;
            const displayProgress = isAnimating ? 0 : progress;
            const strokeDashoffset = circumference - (displayProgress / 100) * circumference;

            return (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setProgress(0);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  padding: 0,
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isActive ? (
                  <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                    {/* Background circle */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth={strokeWidth}
                    />
                    {/* Progress circle */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="#00A3E0"
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />
                    {/* Center dot */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={3}
                      fill="#00A3E0"
                      style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
                    />
                  </svg>
                ) : (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#d1d5db',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
