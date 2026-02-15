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

    </div>
  );
}
