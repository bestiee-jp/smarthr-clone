'use client';

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
        <source src="/hero-bg.mp4?v=3" type="video/mp4" />
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
          学びと出会いに、ワクワクを
        </h1>

      </div>
    </section>
  );
}
