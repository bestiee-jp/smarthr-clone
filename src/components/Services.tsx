'use client';

import { useState, useEffect } from 'react';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      {/* サービス label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: '60px' }}>
        <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: '20px' }}>
          <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>サービス</span>
        </div>
      </div>

      {/* Content area with wipe animation */}
      <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden' }}>
        <div
          style={{
            clipPath: isAnimating ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)',
            transition: 'clip-path 0.7s ease-in-out',
          }}
        >
          <div className="flex" style={{ gap: '60px', padding: '0 5%' }}>
            {/* Left side - Text and Button */}
            <div style={{ flex: '0 0 35%', paddingTop: '40px' }}>
              <p
                className="text-black"
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  lineHeight: '2',
                  marginBottom: '40px',
                }}
              >
                {slide.description}
              </p>

              {/* Button */}
              <a
                href="#"
                className="inline-flex items-center justify-between bg-black text-white"
                style={{
                  padding: '20px 30px',
                  minWidth: '280px',
                  fontSize: '18px',
                  borderRadius: '50px',
                  transition: 'border-radius 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
              >
                <span>{slide.buttonText}</span>
                <ArrowIcon />
              </a>
            </div>

            {/* Right side - Device Mockups */}
            <div style={{ flex: '1', position: 'relative', minHeight: '500px' }}>
            {/* Laptop mockup */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '85%',
                height: '400px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                border: '8px solid #1f2937',
                borderBottom: '24px solid #1f2937',
                overflow: 'hidden',
              }}
            >
              {/* Laptop screen content */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
                  padding: '20px',
                }}
              >
                {/* Header bar */}
                <div
                  style={{
                    backgroundColor: '#0d9488',
                    padding: '8px 16px',
                    borderRadius: '4px 4px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>SmartHR</span>
                  <span style={{ color: 'white', fontSize: '10px', opacity: 0.8 }}>株式会社＊＊＊＊＊</span>
                </div>
                {/* Content area */}
                <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '0 0 4px 4px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px' }}>{slide.title}</div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Stats */}
                    <div>
                      <div style={{ fontSize: '10px', color: '#6b7280' }}>{slide.subtitle}</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{slide.value}<span style={{ fontSize: '12px' }}>{slide.unit}</span></div>
                    </div>
                    {/* Chart placeholder */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px' }}>
                      {slide.chartData.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            backgroundColor: i % 2 === 0 ? '#0891b2' : '#22d3ee',
                            borderRadius: '2px 2px 0 0',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '5%',
                width: '160px',
                height: '320px',
                backgroundColor: '#1f2937',
                borderRadius: '24px',
                padding: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Phone screen */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                {/* Phone header */}
                <div
                  style={{
                    backgroundColor: '#0d9488',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>SmartHR</span>
                </div>
                {/* Phone content */}
                <div style={{ padding: '12px' }}>
                  {/* Profile section */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 'bold' }}>{slide.phoneUser}</div>
                      <div style={{ fontSize: '8px', color: '#6b7280' }}>{slide.phoneLocation}</div>
                    </div>
                  </div>
                  {/* Info rows */}
                  {slide.phoneItems.map((label, i) => (
                    <div
                      key={i}
                      style={{
                        borderBottom: '1px solid #e5e7eb',
                        padding: '6px 0',
                        fontSize: '8px',
                        color: '#374151',
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Slide indicators - outside wipe animation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '30px' }}>
          {slides.map((_, index) => {
            const isActive = currentSlide === index;
            const size = isActive ? 24 : 8;
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
                      stroke="#4dd9d9"
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
                      fill="#4dd9d9"
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
