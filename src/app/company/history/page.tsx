'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { useIsMobile } from '@/hooks/useIsMobile';
import { useTranslation } from '@/hooks/useTranslation';

export default function HistoryPage() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.history.title')}
        subtitle={t('pages.history.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('nav.company'), href: '/company' },
          { label: t('nav.history') },
        ]}
      />

      {/* History Section */}
      <section style={{ backgroundColor: 'white' }}>
        <SectionHeader title={t('history.sectionTitle')} withBorder />

        {/* Timeline Content */}
        <div style={{ position: 'relative' }}>
          {/* 2024 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            minHeight: isMobile ? 'auto' : '500px'
          }}>
            {/* Left side - Images */}
            <div style={{
              width: isMobile ? '100%' : '55%',
              position: 'relative',
              padding: isMobile ? '40px 5%' : '80px 5%',
              overflow: 'hidden',
            }}>
              {/* Decorative diagonal stripes */}
              {!isMobile && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    right: '0',
                    width: '400px',
                    height: '200px',
                    background: 'repeating-linear-gradient(-65deg, var(--bestiee-blue-light) 0px, var(--bestiee-blue-light) 3px, transparent 3px, transparent 10px)',
                    opacity: 0.4,
                    zIndex: 0,
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '100px',
                    right: '50px',
                    width: '300px',
                    height: '150px',
                    background: 'repeating-linear-gradient(-65deg, var(--bestiee-cyan) 0px, var(--bestiee-cyan) 2px, transparent 2px, transparent 8px)',
                    opacity: 0.3,
                    zIndex: 0,
                  }} />
                </>
              )}

              {/* Image container */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '16px' : '0',
                }}>
                  {/* Logo card */}
                  <div style={{
                    width: isMobile ? '120px' : '180px',
                    height: isMobile ? '120px' : '180px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}>
                    <span style={{ fontSize: isMobile ? '20px' : '28px', fontWeight: 'bold', color: '#333' }}>bestiee</span>
                  </div>
                  {/* Photo */}
                  <div style={{
                    width: isMobile ? '100%' : '350px',
                    height: isMobile ? '200px' : '250px',
                    marginLeft: isMobile ? '0' : '-20px',
                    marginTop: isMobile ? '0' : '30px',
                    overflow: 'hidden',
                  }}>
                    <img
                      src="/images/history-tib.jpg"
                      alt="TIBオフィス"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                {/* Additional photo */}
                <div style={{
                  width: isMobile ? '100%' : '400px',
                  height: isMobile ? '200px' : '280px',
                  marginTop: '24px',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/images/history-2024.jpg"
                    alt="2024年チーム"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Timeline */}
            <div style={{
              width: isMobile ? '100%' : '45%',
              borderLeft: isMobile ? 'none' : '1px solid #e5e7eb',
              borderTop: isMobile ? '1px solid #e5e7eb' : 'none',
              padding: isMobile ? '40px 5%' : '80px 60px',
              position: 'relative',
            }}>
              {/* Year */}
              <h2 style={{
                fontSize: isMobile ? '48px' : '72px',
                fontWeight: '300',
                color: 'black',
                marginBottom: isMobile ? '24px' : '40px',
                letterSpacing: '-0.02em',
              }}>
                2024
              </h2>

              {/* Events */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Dot on the vertical line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      left: '-66px',
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                    }} />
                  )}
                  {/* Horizontal line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      left: '-54px',
                      width: '54px',
                      height: '1px',
                      backgroundColor: '#333',
                    }} />
                  )}
                  {/* Mobile dot */}
                  {isMobile && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0,
                    }} />
                  )}
                  <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#333' }}>{t('history.event2024')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2025 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            minHeight: isMobile ? 'auto' : '700px'
          }}>
            {/* Left side - Timeline (テキスト左側) */}
            <div style={{
              width: isMobile ? '100%' : '45%',
              borderRight: isMobile ? 'none' : '1px solid #e5e7eb',
              borderTop: isMobile ? '1px solid #e5e7eb' : 'none',
              padding: isMobile ? '40px 5%' : '80px 60px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'flex-start' : 'flex-end',
            }}>
              {/* Year */}
              <h2 style={{
                fontSize: isMobile ? '48px' : '72px',
                fontWeight: '300',
                color: 'black',
                marginBottom: isMobile ? '24px' : '40px',
                letterSpacing: '-0.02em',
              }}>
                2025
              </h2>

              {/* Events */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Mobile dot */}
                  {isMobile && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0,
                    }} />
                  )}
                  <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#333', textAlign: isMobile ? 'left' : 'right' }}>{t('history.event2025_1')}</span>
                  {/* Horizontal line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      right: '-60px',
                      width: '54px',
                      height: '1px',
                      backgroundColor: '#333',
                    }} />
                  )}
                  {/* Dot on the vertical line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      right: '-66px',
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                    }} />
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Mobile dot */}
                  {isMobile && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0,
                    }} />
                  )}
                  <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#333', textAlign: isMobile ? 'left' : 'right' }}>{t('history.event2025_2')}</span>
                  {/* Horizontal line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      right: '-60px',
                      width: '54px',
                      height: '1px',
                      backgroundColor: '#333',
                    }} />
                  )}
                  {/* Dot on the vertical line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      right: '-66px',
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                    }} />
                  )}
                </div>
              </div>
            </div>

            {/* Right side - Images (画像右側・左右配置) */}
            <div style={{
              width: isMobile ? '100%' : '55%',
              position: 'relative',
              padding: isMobile ? '40px 5%' : '80px 5%',
              overflow: 'hidden',
            }}>
              {/* Decorative diagonal stripes */}
              {!isMobile && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '0',
                    width: '400px',
                    height: '200px',
                    background: 'repeating-linear-gradient(65deg, var(--bestiee-blue-light) 0px, var(--bestiee-blue-light) 3px, transparent 3px, transparent 10px)',
                    opacity: 0.4,
                    zIndex: 0,
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '50px',
                    width: '300px',
                    height: '150px',
                    background: 'repeating-linear-gradient(65deg, var(--bestiee-cyan) 0px, var(--bestiee-cyan) 2px, transparent 2px, transparent 8px)',
                    opacity: 0.3,
                    zIndex: 0,
                  }} />
                </>
              )}

              {/* Image container - 2024年風の左右配置 */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* 上段: 東大王の家庭教師「ベストティーチ」 + YouTube動画 */}
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '16px' : '0',
                  marginBottom: '24px',
                }}>
                  {/* 東大王の家庭教師「ベストティーチ」 */}
                  <div style={{
                    width: isMobile ? '140px' : '200px',
                    height: isMobile ? '140px' : '200px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    zIndex: 2,
                  }}>
                    <img
                      src="/images/history-bestteach.webp"
                      alt="東大王の家庭教師「ベストティーチ」"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: isMobile ? '12px' : '16px' }}
                    />
                  </div>
                  {/* YouTube動画 */}
                  <div style={{
                    width: isMobile ? '100%' : '320px',
                    height: isMobile ? '200px' : '180px',
                    marginLeft: isMobile ? '0' : '-20px',
                    marginTop: isMobile ? '0' : '40px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/O4GQPqapLI4"
                      title="AIチャレンジャーズフェス"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* 下段: 2025年チーム写真 */}
                <div style={{
                  width: isMobile ? '100%' : '420px',
                  height: isMobile ? '200px' : '280px',
                  marginLeft: isMobile ? '0' : '60px',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/images/history-2025.jpg"
                    alt="2025年チーム"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2026 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            minHeight: isMobile ? 'auto' : '400px'
          }}>
            {/* Left side - Images */}
            <div style={{
              width: isMobile ? '100%' : '55%',
              position: 'relative',
              padding: isMobile ? '40px 5%' : '80px 5%',
              overflow: 'hidden',
            }}>
              {/* Decorative diagonal stripes */}
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  right: '0',
                  width: '350px',
                  height: '180px',
                  background: 'repeating-linear-gradient(-65deg, var(--bestiee-blue-light) 0px, var(--bestiee-blue-light) 3px, transparent 3px, transparent 10px)',
                  opacity: 0.3,
                  zIndex: 0,
                }} />
              )}

              {/* Image container */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '500px',
                  height: isMobile ? '200px' : '280px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}>
                  <img
                    src="/images/fastpass.webp"
                    alt="FastPass"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Timeline */}
            <div style={{
              width: isMobile ? '100%' : '45%',
              borderLeft: isMobile ? 'none' : '1px solid #e5e7eb',
              borderTop: isMobile ? '1px solid #e5e7eb' : 'none',
              padding: isMobile ? '40px 5%' : '80px 60px',
              position: 'relative',
            }}>
              {/* Year */}
              <h2 style={{
                fontSize: isMobile ? '48px' : '72px',
                fontWeight: '300',
                color: 'black',
                marginBottom: isMobile ? '24px' : '40px',
                letterSpacing: '-0.02em',
              }}>
                2026
              </h2>

              {/* Events */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Dot on the vertical line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      left: '-66px',
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                    }} />
                  )}
                  {/* Horizontal line */}
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      left: '-54px',
                      width: '54px',
                      height: '1px',
                      backgroundColor: '#333',
                    }} />
                  )}
                  {/* Mobile dot */}
                  {isMobile && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0,
                    }} />
                  )}
                  <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#333' }}>{t('history.event2026')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: isMobile ? '40px 5%' : '80px 5%' }}>
        {/* Section header */}
        <div className="flex items-center gap-4" style={{ marginBottom: isMobile ? '24px' : '40px' }}>
          <div style={{ width: '4px', height: '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
          <span style={{ color: 'black', fontSize: isMobile ? '18px' : '22px', letterSpacing: '0.1em', fontWeight: '500' }}>{t('footer.relatedPages')}</span>
        </div>

        {/* Related pages grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '24px',
        }}>
          {/* 会社情報 */}
          <Link href="/company" style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '16/10',
              overflow: 'hidden',
              borderRadius: '8px',
            }}>
              <img
                src="/images/related-company.jpg"
                alt={t('nav.company')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? '16px' : '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <span style={{ color: 'white', fontSize: isMobile ? '16px' : '18px', fontWeight: '600' }}>{t('nav.company')}</span>
              </div>
            </div>
          </Link>

          {/* 役員紹介 */}
          <Link href="/company/executives" style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '16/10',
              overflow: 'hidden',
              borderRadius: '8px',
            }}>
              <img
                src="/images/related-executives.jpg"
                alt={t('nav.executives')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? '16px' : '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <span style={{ color: 'white', fontSize: isMobile ? '16px' : '18px', fontWeight: '600' }}>{t('nav.executives')}</span>
              </div>
            </div>
          </Link>

          {/* 沿革 */}
          <Link href="/company/history" style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '16/10',
              overflow: 'hidden',
              borderRadius: '8px',
            }}>
              <img
                src="/images/history-tib.jpg"
                alt={t('nav.history')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? '16px' : '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <span style={{ color: 'white', fontSize: isMobile ? '16px' : '18px', fontWeight: '600' }}>{t('nav.history')}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
