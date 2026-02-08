'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ArrowIcon } from '@/components/icons';
import { useTranslation } from '@/hooks/useTranslation';

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

// Slide configuration (without text - those come from translations)
const slideConfigs = [
  {
    key: 'fastpass',
    category: 'Services',
    bgColor: '#1E5AA8', // bestiee-blue
    image: '/images/fastpass.webp',
    scale: 1.3,
  },
  {
    key: 'aiFest',
    category: 'Events',
    bgColor: '#00A3E0', // bestiee-blue-light
    image: '/images/service-aicf.jpg',
    scale: 1.3,
  },
  {
    key: 'meetup',
    category: 'Events',
    bgColor: '#4DD9D9', // bestiee-cyan
    image: '/images/service-meetup.jpg',
    scale: 1.1,
  },
  {
    key: 'bestTeach',
    category: 'Services',
    bgColor: '#EAEAEA',
    image: '/images/service-bestteach.webp',
    scale: 1.5,
  },
];

export default function ServicesMercari() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [targetSlide, setTargetSlide] = useState(0);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  // Create slides with translated content
  const slides = slideConfigs.map(config => ({
    ...config,
    name: t(`service.${config.key}.name`),
    description: t(`service.${config.key}.description`),
  }));

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
            <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
            <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>{t('service.sectionTitle')}</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        style={{
          background: `linear-gradient(160deg, ${slide.bgColor}00 0%, ${slide.bgColor} 15%, ${slide.bgColor} 85%, ${slide.bgColor}dd 100%), linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 100%), ${slide.bgColor}`,
          minHeight: isMobile ? 'auto' : '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '40px 5%' : '80px 5%',
        }}
      >
      {/* Glossy shine overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
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
            background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 30%), ${wipeBgColor}`,
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
          height: isMobile ? 'auto' : '500px',
          display: isMobile ? 'flex' : 'block',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? '24px' : '0',
        }}
      >
        {/* Left - White Card */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: isMobile ? '24px' : '48px',
            width: isMobile ? '100%' : '45%',
            maxWidth: isMobile ? '400px' : '500px',
            height: isMobile ? 'auto' : '380px',
            minHeight: isMobile ? '300px' : 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            position: isMobile ? 'relative' : 'absolute',
            left: isMobile ? 'auto' : '0',
            top: isMobile ? 'auto' : '50%',
            transform: isMobile ? 'none' : 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Category label */}
          <div
            style={{
              color: 'var(--bestiee-blue)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              marginBottom: '16px',
              opacity: isAnimating ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            {slide.category}
          </div>

          {/* Service Name */}
          <div
            style={{
              marginBottom: isMobile ? '12px' : '16px',
            }}
          >
            <span
              style={{
                fontSize: isMobile ? '22px' : '32px',
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
              minHeight: isMobile ? '80px' : '100px',
              maxHeight: isMobile ? '120px' : '140px',
              overflow: 'hidden',
            }}
          >
            <p
              style={{
                fontSize: isMobile ? '13px' : '15px',
                lineHeight: '1.9',
                color: '#555',
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.3s ease',
                display: '-webkit-box',
                WebkitLineClamp: isMobile ? 4 : 5,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {slide.description}
            </p>
          </div>

          {/* Bottom row: Dot indicators (left) + Service Details Button (right) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '16px' : '0',
              marginTop: 'auto',
              paddingTop: '16px',
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
                          stroke="var(--bestiee-blue-light)"
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
                          fill="var(--bestiee-blue-light)"
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

            {/* Service Details Button */}
            <Link
              href="/service"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'border-radius 0.3s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
              onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
            >
              {t('service.viewDetails')}
              <ArrowIcon direction="right" size={14} color="white" />
            </Link>
          </div>
        </div>

        {/* Right - Service Image */}
        <div
          style={{
            position: isMobile ? 'relative' : 'absolute',
            right: isMobile ? 'auto' : '0',
            top: isMobile ? 'auto' : '50%',
            transform: isMobile ? 'none' : 'translateY(-50%)',
            width: isMobile ? '100%' : '50%',
            maxWidth: isMobile ? '350px' : '550px',
            height: isMobile ? '300px' : '500px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            order: isMobile ? -1 : 0,
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
              borderRadius: '16px',
            }}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              width={550}
              height={500}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '16px',
                transform: `scale(${slide.scale})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
