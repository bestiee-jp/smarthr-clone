'use client';

import Link from 'next/link';

// Arrow Icon
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Careers() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Top links section */}
      <div className="flex gap-8" style={{ marginBottom: '80px', padding: '0 5%' }}>
        {/* 会社情報 */}
        <div className="flex-1">
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
              Office Image
            </div>
          </div>
          <Link
            href="/company"
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: '16px 24px',
              minWidth: '180px',
              fontSize: '16px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>会社情報</span>
            <ArrowIcon />
          </Link>
        </div>

        {/* サステナビリティ */}
        <div className="flex-1">
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Sustainability Image
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-between bg-black text-white"
            style={{
              padding: '16px 24px',
              minWidth: '220px',
              fontSize: '16px',
              borderRadius: '50px',
              transition: 'border-radius 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            <span>サステナビリティ</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
