'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // Wait for mount before showing anything (prevents SSR flash)
  useEffect(() => {
    // Small delay to ensure styles are applied before showing
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Trigger animation after video is ready or fallback (longer delay on mobile)
  useEffect(() => {
    if (!isMounted) return;
    const delay = isMobile ? 1000 : 500;
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [isMounted, isMobile]);

  // Animation durations (slower on mobile)
  const duration = isMobile ? '2s' : '1.5s';
  const longDuration = isMobile ? '5s' : '4s';

  return (
    <section className="relative overflow-hidden min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onCanPlay={() => setIsVideoReady(true)}
      >
        <source src="/hero-bg.mp4?v=4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]" style={{ paddingLeft: '5%', paddingRight: '5%', visibility: isMounted ? 'visible' : 'hidden' }}>
        <div className="w-full">
          {/* TURN FEAR */}
          <div
            className="flex items-start gap-4 mb-[-14px] md:mb-[-28px]"
            style={{
              visibility: isMounted ? 'visible' : 'hidden',
              opacity: isVideoReady ? 1 : 0,
              transform: isVideoReady ? 'translateY(0)' : 'translateY(150px)',
              transition: `opacity ${duration} ease-out 0s, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) 0s`,
            }}
          >
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 5px rgba(30, 90, 168, 0.8), 0 0 10px rgba(0, 163, 224, 0.7), 0 0 15px rgba(0, 163, 224, 0.5), 0 0 25px rgba(77, 217, 217, 0.4)' }}
            >
              TURN FEAR
            </h1>
          </div>

          {/* INTO with cursive */}
          <div
            className="flex items-center gap-5 mb-[-14px] md:mb-[-28px]"
            style={{
              visibility: isMounted ? 'visible' : 'hidden',
              opacity: isVideoReady ? 1 : 0,
              transform: isVideoReady ? 'translateY(0)' : 'translateY(150px)',
              transition: `opacity ${duration} ease-out 0.5s, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) 0.5s`,
            }}
          >
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 5px rgba(30, 90, 168, 0.8), 0 0 10px rgba(0, 163, 224, 0.7), 0 0 15px rgba(0, 163, 224, 0.5), 0 0 25px rgba(77, 217, 217, 0.4)' }}
            >
              INTO
            </h1>
            <div className="flex flex-col">
              <span
                className="text-[clamp(34px,7vw,67px)] italic"
                style={{
                  fontFamily: 'var(--font-satisfy), cursive',
                  backgroundImage: 'linear-gradient(90deg, var(--bestiee-blue-light) 0%, var(--bestiee-cyan) 50%, #6EE7E7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  visibility: isMounted ? 'visible' : 'hidden',
                  opacity: isVideoReady ? 1 : 0,
                  transform: isVideoReady ? 'translateY(0)' : 'translateY(50px)',
                  transition: `opacity ${duration} ease-out 2s, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) 2s`,
                }}
              >
                turn fear into passion
              </span>
              <span
                className="text-[clamp(22px,4.2vw,39px)] text-white font-medium tracking-wide"
                style={{
                  visibility: isMounted ? 'visible' : 'hidden',
                  opacity: isVideoReady ? 1 : 0,
                  transform: isVideoReady ? 'translateX(0)' : 'translateX(-150px)',
                  transition: `opacity ${longDuration} ease-out 3s, transform ${longDuration} cubic-bezier(0.16, 1, 0.3, 1) 3s`,
                }}
              >
                {t('hero.tagline')}
              </span>
            </div>
          </div>

          {/* PASSION. */}
          <div
            className="flex items-start gap-4"
            style={{
              visibility: isMounted ? 'visible' : 'hidden',
              opacity: isVideoReady ? 1 : 0,
              transform: isVideoReady ? 'translateY(0)' : 'translateY(150px)',
              transition: `opacity ${duration} ease-out 1s, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) 1s`,
            }}
          >
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 5px rgba(30, 90, 168, 0.8), 0 0 10px rgba(0, 163, 224, 0.7), 0 0 15px rgba(0, 163, 224, 0.5), 0 0 25px rgba(77, 217, 217, 0.4)' }}
            >
              PASSION.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
