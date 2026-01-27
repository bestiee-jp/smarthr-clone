'use client';

import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface PageLink {
  label: string;
  href: string;
  image: string;
}

interface RelatedPagesGridProps {
  pages: PageLink[];
  title?: string;
  backgroundColor?: string;
  padding?: string;
}

export default function RelatedPagesGrid({
  pages,
  title = '関連ページ',
  backgroundColor = 'white',
  padding = '80px 5%',
}: RelatedPagesGridProps) {
  return (
    <section style={{ backgroundColor, padding }}>
      <div style={{ maxWidth: '1200px' }}>
        <SectionHeader title={title} padding="0 0 40px 0" />

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="group"
              style={{
                flex: '1 1 300px',
                maxWidth: '380px',
                textDecoration: 'none',
              }}
            >
              <div style={{
                position: 'relative',
                aspectRatio: '16/10',
                overflow: 'hidden',
                borderRadius: '8px',
                marginBottom: '12px',
              }}>
                <Image
                  src={page.image}
                  alt={page.label}
                  width={380}
                  height={238}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  className="group-hover:scale-105"
                />
              </div>
              <span style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#333',
              }}>
                {page.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
