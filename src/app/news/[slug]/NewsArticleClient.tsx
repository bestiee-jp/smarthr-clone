'use client';

import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { NewsArticle } from "@/lib/news";

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

// Related Article Card Component
function RelatedArticleCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block">
      {/* Image */}
      <div style={{
        aspectRatio: '16/10',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
      }}>
        <NewsCardImage image={article.image} />
      </div>

      {/* Meta row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}>
          <span style={{ color: '#666', fontSize: '12px' }}>{article.date}</span>
          <span style={{
            color: 'white',
            backgroundColor: 'var(--bestiee-cyan)',
            padding: '3px 10px',
            borderRadius: '50px',
            fontSize: '11px',
            fontWeight: '500',
          }}>
            {article.category}
          </span>
          <span
            style={{
              color: 'white',
              backgroundColor: '#2563eb',
              padding: '3px 10px',
              borderRadius: '50px',
              fontSize: '11px',
              fontWeight: '500',
            }}
          >
            {article.theme}
          </span>
        </div>

        {/* Arrow Button */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bestiee-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
          }}
          className="group-hover:scale-110"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '15px',
        fontWeight: '500',
        color: '#333',
        lineHeight: 1.7,
      }}>
        {article.title}
      </h3>
    </Link>
  );
}

interface NewsArticleClientProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export default function NewsArticleClient({ article, relatedArticles }: NewsArticleClientProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Article Content Section */}
      <section style={{ backgroundColor: 'white', padding: isMobile ? '40px 5%' : '60px 5%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Article Header */}
          <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
            {/* Date, Category and Theme */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap',
            }}>
              <span style={{
                color: '#666',
                fontSize: isMobile ? '14px' : '16px',
              }}>
                {article.date}
              </span>
              <span style={{
                color: 'white',
                backgroundColor: 'var(--bestiee-cyan)',
                padding: '4px 16px',
                borderRadius: '50px',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '500',
              }}>
                {article.category}
              </span>
              <span
                style={{
                  color: 'white',
                  backgroundColor: '#2563eb',
                  padding: '4px 16px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '500',
                }}
              >
                {article.theme}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 'bold',
              color: '#333',
              lineHeight: 1.5,
            }}>
              {article.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: isMobile ? '32px' : '48px',
          }}>
            <NewsCardImage image={article.image} />
          </div>

          {/* Article Content */}
          <div style={{
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: 2,
            color: '#333',
          }}>
            {article.content.split('\n').map((line, index) => {
              // Check if line is a heading (wrapped in ＜＞)
              if (line.startsWith('＜') && line.endsWith('＞')) {
                return (
                  <h5
                    key={index}
                    style={{
                      fontSize: isMobile ? '18px' : '20px',
                      fontWeight: 'bold',
                      color: '#333',
                      marginTop: '32px',
                      marginBottom: '16px',
                    }}
                  >
                    {line}
                  </h5>
                );
              }
              // Empty line
              if (line.trim() === '') {
                return <br key={index} />;
              }
              // Regular paragraph
              return (
                <p key={index} style={{ marginBottom: '0.5em' }}>
                  {line}
                </p>
              );
            })}
          </div>

          {/* Back to News List Button */}
          <div style={{
            marginTop: isMobile ? '48px' : '64px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Link
              href="/news"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: isMobile ? '16px 32px' : '20px 48px',
                backgroundColor: '#333',
                color: 'white',
                fontSize: isMobile ? '16px' : '18px',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'border-radius 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
              onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              ニュース一覧へ戻る
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section style={{ backgroundColor: '#f9fafb', padding: isMobile ? '48px 5%' : '80px 5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: isMobile ? '32px' : '48px',
            }}>
              関連記事
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '32px' : '40px',
            }}>
              {relatedArticles.map((relatedArticle) => (
                <RelatedArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
