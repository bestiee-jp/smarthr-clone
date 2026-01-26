'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Trigger animation after video is ready or fallback after 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onCanPlay={() => setIsVideoReady(true)}
      >
        <source src="/hero-bg.mp4?v=3" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="w-full">
          {/* TURN FEAR */}
          <div
            className="flex items-start gap-4 mb-[-14px] md:mb-[-28px]"
            style={{
              opacity: isVideoReady ? 1 : 0,
              transform: isVideoReady ? 'translateY(0)' : 'translateY(150px)',
              transition: 'opacity 1.5s ease-out 0s, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0s',
            }}
          >
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 10px rgba(77, 217, 217, 0.6), 0 0 20px rgba(77, 217, 217, 0.4), 0 0 30px rgba(77, 217, 217, 0.2)' }}
            >
              TURN FEAR
            </h1>
          </div>

          {/* INTO with cursive */}
          <div
            className="flex items-center gap-5 mb-[-14px] md:mb-[-28px]"
            style={{
              opacity: isVideoReady ? 1 : 0,
              transform: isVideoReady ? 'translateY(0)' : 'translateY(150px)',
              transition: 'opacity 1.5s ease-out 0.5s, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 10px rgba(77, 217, 217, 0.6), 0 0 20px rgba(77, 217, 217, 0.4), 0 0 30px rgba(77, 217, 217, 0.2)' }}
            >
              INTO
            </h1>
            <div className="flex flex-col">
              <span
                className="text-[clamp(34px,7vw,67px)] italic"
                style={{
                  fontFamily: 'var(--font-satisfy), cursive',
                  color: '#4DD9D9',
                  opacity: isVideoReady ? 1 : 0,
                  transform: isVideoReady ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'opacity 1.5s ease-out 2s, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 2s',
                }}
              >
                turn fear into passion
              </span>
              <span
                className="text-[clamp(22px,4.2vw,39px)] text-white font-medium tracking-wide"
                style={{
                  opacity: isVideoReady ? 1 : 0,
                  transform: isVideoReady ? 'translateX(0)' : 'translateX(-150px)',
                  transition: 'opacity 4s ease-out 3s, transform 4s cubic-bezier(0.16, 1, 0.3, 1) 3s',
                }}
              >
                学びと出会いに、ワクワクを
              </span>
            </div>
          </div>

          {/* PASSION. */}
          <div
            className="flex items-start gap-4"
            style={{
              opacity: isVideoReady ? 1 : 0,
              transform: isVideoReady ? 'translateY(0)' : 'translateY(150px)',
              transition: 'opacity 1.5s ease-out 1s, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s',
            }}
          >
            <h1
              className="text-[clamp(67px,17vw,168px)] font-bold leading-none text-black tracking-tight"
              style={{ textShadow: '0 0 10px rgba(77, 217, 217, 0.6), 0 0 20px rgba(77, 217, 217, 0.4), 0 0 30px rgba(77, 217, 217, 0.2)' }}
            >
              PASSION.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
