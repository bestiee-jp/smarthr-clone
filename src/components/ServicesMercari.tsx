'use client';

import { useState, useEffect } from 'react';

// Add keyframe animation styles - 25 degrees from vertical
const diagonalWipeKeyframes = `
@keyframes diagonalWipe {
  0% {
    clip-path: polygon(-30% 0, 0% 0, -30% 100%, -60% 100%);
  }
  100% {
    clip-path: polygon(100% 0, 130% 0, 100% 100%, 70% 100%);
  }
}
`;

// External Link Icon
function ExternalLinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// Slide data
const slides = [
  {
    name: 'FastPass',
    category: 'Services',
    description: '「FastPass」は、AI面接練習データを活用した、ハイクラス学生特化の採用マッチングサービスです。AIが解析した面接データをもとに、エージェントが貴社に最適な学生を紹介します。',
    bgColor: '#00A3E0',
    image: '/images/service-fastpass.png',
  },
  {
    name: 'AIチャレンジャーズフェス',
    category: 'Events',
    description: '「AIチャレンジャーズフェス」は、日本で最も「AIに熱中」しているハイクラス学生150名が集まる大規模採用イベントです。コードを書きながら事業も語れる、AI時代の企業競争力を担う人材と出会えます。',
    bgColor: '#1a1a2e',
    image: '/images/service-aicf.png',
  },
  {
    name: 'FastPass meetup',
    category: 'Events',
    description: '「FastPass meetup」は、AIが厳選した成長意欲の高いハイクラス学生と、少人数でじっくり向き合える採用イベントです。大規模イベントでは難しい、深い対話と相互理解を実現します。',
    bgColor: '#e8eef4',
    image: '/images/service-meetup.png',
  },
  {
    name: 'ベストティーチ',
    category: 'Services',
    description: '「ベストティーチ」は、AIがお子さまにぴったりの先生を提案してくれる家庭教師サービスです。出身塾や出身高、趣味など350以上の項目から指導経験豊富な先生を選べて、単発1回からお試しできます。',
    bgColor: '#fff5e6',
    image: '/images/service-bestteach.png',
  },
];

export default function ServicesMercari() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [targetSlide, setTargetSlide] = useState(0);
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
    if (isAnimating) return; // Stop timer during animation

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 120);

    // Slide change
    const slideInterval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      setTargetSlide(nextIndex);
      setIsAnimating(true);
      setProgress(0);
      // Change content at 200ms (middle of wipe)
      setTimeout(() => {
        setCurrentSlide(nextIndex);
      }, 200);
      // End animation at 450ms (after wipe completes)
      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 6000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [resetTrigger, isAnimating, currentSlide]);

  const handleSlideChange = (index: number) => {
    setTargetSlide(index);
    setIsAnimating(true);
    setProgress(0);
    // Change content at 200ms (middle of wipe)
    setTimeout(() => {
      setCurrentSlide(index);
    }, 200);
    // End animation at 450ms (after wipe completes)
    setTimeout(() => {
      setIsAnimating(false);
      setResetTrigger((prev) => prev + 1);
    }, 450);
  };

  const slide = slides[currentSlide];

  // Get target slide background color for wipe effect
  const wipeBgColor = slides[targetSlide].bgColor;

  return (
    <>
      {/* サービス header */}
      <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px' }}>
        <div style={{ borderBottom: '1px solid #e5e7eb' }}>
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
      </section>

      {/* Main content */}
      <section
        style={{
          backgroundColor: slide.bgColor,
          minHeight: '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 5%',
        }}
      >
      {/* Inject keyframe styles */}
      <style dangerouslySetInnerHTML={{ __html: diagonalWipeKeyframes }} />

      {/* Diagonal wipe overlay - 60 degree angle */}
      {isAnimating && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: wipeBgColor,
            animation: 'diagonalWipe 0.4s linear forwards',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Main container */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          position: 'relative',
          height: '500px',
        }}
      >
        {/* Left - White Card */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '48px',
            width: '500px',
            height: '380px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Category label */}
          <div
            style={{
              color: '#1E5AA8',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              marginBottom: '24px',
              opacity: isAnimating ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            {slide.category}
          </div>

          {/* Service Name */}
          <div
            style={{
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#333',
                letterSpacing: '-0.02em',
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {slide.name}
            </span>
          </div>

          {/* Description */}
          <div
            style={{
              flex: 1,
              minHeight: '120px',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '2',
                color: '#555',
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {slide.description}
            </p>
          </div>

          {/* Dot indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            {/* Dot indicators with progress */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
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
                    onClick={() => handleSlideChange(index)}
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
                      transition: 'width 0.3s ease, height 0.3s ease',
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
        </div>

        {/* Right - Service Image */}
        <div
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '550px',
            height: '500px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateX(30px)' : 'translateX(0)',
              transition: 'opacity 0.3s ease, transform 0.4s ease',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '16px',
            }}
          >
            {/* Placeholder for image */}
            <div style={{
              color: '#999',
              fontSize: '18px',
              textAlign: 'center',
            }}>
              {slide.name}<br />画像
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
