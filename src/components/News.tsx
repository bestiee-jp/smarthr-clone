'use client';

import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import { homeNewsItems } from '@/data/news';

// News Card Image Component
function NewsCardImage({ image }: { image: string }) {
  return (
    <img
      src={image}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  );
}

export default function News() {
  const isMobile = useIsMobile();

  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : '80px', position: 'relative' }}>
      {/* ニュース label with full-width border */}
      <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: isMobile ? '40px' : '80px' }}>
        <div
          className="flex items-center"
          style={{
            padding: isMobile ? '0 5% 16px' : '0 5% 20px',
            gap: isMobile ? '12px' : '16px'
          }}
        >
          <div style={{ width: '4px', height: isMobile ? '24px' : '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ニュース</span>
        </div>
      </div>

      {/* News cards grid */}
      <div
        style={{
          padding: '0 5%',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '20px' : '24px',
        }}
      >
        {homeNewsItems.map((item, index) => (
          <Link
            key={index}
            href={`/news/${item.slug}`}
            className="group"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '16px',
                backgroundColor: '#f3f4f6',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                }}
                className="group-hover:scale-105"
              >
                <NewsCardImage image={item.image} />
              </div>
            </div>

            {/* Date, Category and Theme */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '4px' : '6px',
                marginBottom: '8px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  color: '#6b7280',
                  fontSize: isMobile ? '11px' : '12px',
                }}
              >
                {item.date}
              </span>
              <span
                style={{
                  color: 'white',
                  backgroundColor: 'var(--bestiee-cyan)',
                  padding: isMobile ? '2px 8px' : '3px 10px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '10px' : '11px',
                  fontWeight: '500',
                }}
              >
                {item.category}
              </span>
              {item.themes.slice(0, 1).map((theme, idx) => (
                <span
                  key={idx}
                  style={{
                    color: 'white',
                    backgroundColor: '#2563eb',
                    padding: isMobile ? '2px 8px' : '3px 10px',
                    borderRadius: '50px',
                    fontSize: isMobile ? '10px' : '11px',
                    fontWeight: '500',
                  }}
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* Title */}
            <p
              className="group-hover:text-[var(--bestiee-cyan)] transition-colors"
              style={{
                color: '#1f2937',
                fontSize: isMobile ? '13px' : '15px',
                lineHeight: '1.6',
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>

      {/* ニュース一覧 Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? '32px' : '60px', padding: '0 5%' }}>
        <Link
          href="/news"
          className="inline-flex items-center justify-between bg-black text-white"
          style={{
            padding: isMobile ? '16px 24px' : '24px 40px',
            minWidth: isMobile ? '200px' : '280px',
            fontSize: isMobile ? '16px' : '22px',
            borderRadius: '50px',
            transition: 'border-radius 0.5s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
          onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
        >
          <span>ニュース一覧</span>
          <svg
            width={isMobile ? "20" : "28"}
            height={isMobile ? "20" : "28"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
