'use client';

export default function CyanBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Wave 1 - Top left flowing wave */}
      <svg
        style={{
          position: 'absolute',
          top: '-150px',
          left: '-5%',
          width: '85%',
          height: '500px',
        }}
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bestiee-blue)" />
            <stop offset="50%" stopColor="var(--bestiee-blue-light)" />
            <stop offset="100%" stopColor="var(--bestiee-cyan)" />
          </linearGradient>
        </defs>
        <path
          d="M0,250 Q100,150 200,180 C350,220 450,280 550,220 C650,160 720,200 800,180 Q850,170 800,280 C700,380 550,350 400,370 C250,390 100,340 50,290 Q0,250 0,250 Z"
          fill="url(#wave1Gradient)"
          opacity="0.6"
        />
      </svg>

      {/* Wave 2 - Accent wave overlay */}
      <svg
        style={{
          position: 'absolute',
          top: '180px',
          left: '0',
          width: '65%',
          height: '350px',
        }}
        viewBox="0 0 600 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--bestiee-blue)" />
            <stop offset="100%" stopColor="var(--bestiee-blue-light)" />
          </linearGradient>
        </defs>
        <path
          d="M0,150 Q80,80 180,100 C300,130 400,80 520,120 Q600,150 580,220 C500,300 350,260 200,280 Q50,300 0,220 Q-20,180 0,150 Z"
          fill="url(#wave2Gradient)"
          opacity="0.4"
        />
      </svg>

      {/* Wave 3 - Right side flowing down */}
      <svg
        style={{
          position: 'absolute',
          top: '400px',
          right: '0',
          width: '75%',
          height: '600px',
        }}
        viewBox="0 0 700 500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave3Gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--bestiee-blue-light)" />
            <stop offset="100%" stopColor="var(--bestiee-cyan)" />
          </linearGradient>
        </defs>
        <path
          d="M700,100 Q650,50 550,80 C400,130 300,220 180,300 Q80,370 100,450 C150,520 300,500 450,470 C600,440 680,380 700,280 Q720,180 700,100 Z"
          fill="url(#wave3Gradient)"
          opacity="0.65"
        />
      </svg>

      {/* Wave 4 - Mid-left continuous flow */}
      <svg
        style={{
          position: 'absolute',
          top: '800px',
          left: '0',
          width: '55%',
          height: '700px',
        }}
        viewBox="0 0 500 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave4Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bestiee-blue)" />
            <stop offset="100%" stopColor="var(--bestiee-blue-light)" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 Q80,30 160,60 C260,100 300,200 280,320 C260,440 320,520 260,580 Q180,650 80,600 C20,560 0,450 0,320 Q0,180 0,80 Z"
          fill="url(#wave4Gradient)"
          opacity="0.6"
        />
      </svg>

      {/* Soft glow circle */}
      <div
        style={{
          position: 'absolute',
          top: '600px',
          left: '20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 163, 224, 0.28) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />

      {/* Wave 5 - Bottom right */}
      <svg
        style={{
          position: 'absolute',
          top: '1400px',
          right: '0',
          width: '85%',
          height: '500px',
        }}
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave5Gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--bestiee-blue)" />
            <stop offset="50%" stopColor="var(--bestiee-blue-light)" />
            <stop offset="100%" stopColor="var(--bestiee-cyan)" />
          </linearGradient>
        </defs>
        <path
          d="M800,100 Q720,40 600,70 C450,110 300,80 150,140 Q50,190 80,300 C120,400 300,380 500,360 C700,340 780,280 800,200 Q820,140 800,100 Z"
          fill="url(#wave5Gradient)"
          opacity="0.55"
        />
      </svg>

      {/* Wave 6 - Final bottom left */}
      <svg
        style={{
          position: 'absolute',
          top: '1800px',
          left: '0',
          width: '55%',
          height: '400px',
        }}
        viewBox="0 0 500 350"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave6Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bestiee-blue-light)" />
            <stop offset="100%" stopColor="var(--bestiee-cyan)" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q60,40 150,60 C280,90 400,160 480,260 Q520,340 420,350 C280,360 140,340 60,300 Q0,260 0,180 Q0,140 0,100 Z"
          fill="url(#wave6Gradient)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
