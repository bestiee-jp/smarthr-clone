'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="沿革"
        subtitle="History"
        breadcrumb={[
          { label: 'トップ', href: '/' },
          { label: '会社情報', href: '/company' },
          { label: '沿革' },
        ]}
      />

      {/* History Section */}
      <section style={{ backgroundColor: 'white' }}>
        <SectionHeader title="bestieeの歴史" withBorder />

        {/* Timeline Content */}
        <div style={{ position: 'relative' }}>
          {/* 2024 */}
          <div style={{ display: 'flex', minHeight: '500px' }}>
            {/* Left side - Images */}
            <div style={{
              width: '55%',
              position: 'relative',
              padding: '80px 5%',
              overflow: 'hidden',
            }}>
              {/* Decorative diagonal stripes */}
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

              {/* Image container */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  gap: '0',
                }}>
                  {/* Logo card */}
                  <div style={{
                    width: '180px',
                    height: '180px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}>
                    <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>bestiee</span>
                  </div>
                  {/* Photo */}
                  <div style={{
                    width: '350px',
                    height: '250px',
                    marginLeft: '-20px',
                    marginTop: '30px',
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
                  width: '400px',
                  height: '280px',
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
              width: '45%',
              borderLeft: '1px solid #e5e7eb',
              padding: '80px 60px',
              position: 'relative',
            }}>
              {/* Year */}
              <h2 style={{
                fontSize: '72px',
                fontWeight: '300',
                color: 'black',
                marginBottom: '40px',
                letterSpacing: '-0.02em',
              }}>
                2024
              </h2>

              {/* Events */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Dot on the vertical line */}
                  <div style={{
                    position: 'absolute',
                    left: '-66px',
                    width: '12px',
                    height: '12px',
                    background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                    borderRadius: '50%',
                  }} />
                  {/* Horizontal line */}
                  <div style={{
                    position: 'absolute',
                    left: '-54px',
                    width: '54px',
                    height: '1px',
                    backgroundColor: '#333',
                  }} />
                  <span style={{ fontSize: '20px', color: '#333' }}>株式会社bestiee設立</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2025 */}
          <div style={{ display: 'flex', minHeight: '700px' }}>
            {/* Left side - Images */}
            <div style={{
              width: '55%',
              position: 'relative',
              padding: '80px 5%',
              overflow: 'hidden',
            }}>
              {/* Decorative cyan shape */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '60%',
                height: '300px',
                background: 'var(--bestiee-gradient)',
                opacity: 0.15,
                transform: 'skewY(-5deg)',
                zIndex: 0,
              }} />

              {/* Image container */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* ベストティーチ */}
                <div style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '280px',
                  marginBottom: '32px',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/images/history-bestteach.png"
                    alt="ベストティーチ"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* AIチャレンジャーズフェス - YouTube embed */}
                <div style={{
                  width: '100%',
                  maxWidth: '500px',
                  aspectRatio: '16/9',
                  marginBottom: '32px',
                }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/O4GQPqapLI4"
                    title="AIチャレンジャーズフェス"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '8px' }}
                  />
                </div>

                {/* 2025年チーム写真 */}
                <div style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '300px',
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

            {/* Right side - Timeline */}
            <div style={{
              width: '45%',
              borderLeft: '1px solid #e5e7eb',
              padding: '80px 60px',
              position: 'relative',
            }}>
              {/* Year */}
              <h2 style={{
                fontSize: '72px',
                fontWeight: '300',
                color: 'black',
                marginBottom: '40px',
                letterSpacing: '-0.02em',
              }}>
                2025
              </h2>

              {/* Events */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Dot on the vertical line */}
                  <div style={{
                    position: 'absolute',
                    left: '-66px',
                    width: '12px',
                    height: '12px',
                    background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                    borderRadius: '50%',
                  }} />
                  {/* Horizontal line */}
                  <div style={{
                    position: 'absolute',
                    left: '-54px',
                    width: '54px',
                    height: '1px',
                    backgroundColor: '#333',
                  }} />
                  <span style={{ fontSize: '20px', color: '#333' }}>家庭教師サービス「ベストティーチ」正式リリース</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Dot on the vertical line */}
                  <div style={{
                    position: 'absolute',
                    left: '-66px',
                    width: '12px',
                    height: '12px',
                    background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                    borderRadius: '50%',
                  }} />
                  {/* Horizontal line */}
                  <div style={{
                    position: 'absolute',
                    left: '-54px',
                    width: '54px',
                    height: '1px',
                    backgroundColor: '#333',
                  }} />
                  <span style={{ fontSize: '20px', color: '#333' }}>AIチャレンジャーズフェス第1回開催</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2026 */}
          <div style={{ display: 'flex', minHeight: '400px' }}>
            {/* Left side - Images */}
            <div style={{
              width: '55%',
              position: 'relative',
              padding: '80px 5%',
              overflow: 'hidden',
            }}>
              {/* Decorative diagonal stripes */}
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

              {/* Image container */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}>
                  <img
                    src="/images/history-fastpass.jpg"
                    alt="FastPass"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Timeline */}
            <div style={{
              width: '45%',
              borderLeft: '1px solid #e5e7eb',
              padding: '80px 60px',
              position: 'relative',
            }}>
              {/* Year */}
              <h2 style={{
                fontSize: '72px',
                fontWeight: '300',
                color: 'black',
                marginBottom: '40px',
                letterSpacing: '-0.02em',
              }}>
                2026
              </h2>

              {/* Events */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  {/* Dot on the vertical line */}
                  <div style={{
                    position: 'absolute',
                    left: '-66px',
                    width: '12px',
                    height: '12px',
                    background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
                    borderRadius: '50%',
                  }} />
                  {/* Horizontal line */}
                  <div style={{
                    position: 'absolute',
                    left: '-54px',
                    width: '54px',
                    height: '1px',
                    backgroundColor: '#333',
                  }} />
                  <span style={{ fontSize: '20px', color: '#333' }}>AI面接練習データを活用した採用マッチングサービス「FastPass」リリース</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 5%' }}>
        {/* Section header */}
        <div className="flex items-center gap-4" style={{ marginBottom: '40px' }}>
          <div style={{ width: '4px', height: '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
          <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.1em', fontWeight: '500' }}>関連ページ</span>
        </div>

        {/* Related pages grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
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
                alt="会社情報"
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
                padding: '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <span style={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>会社情報</span>
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
                alt="役員紹介"
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
                padding: '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <span style={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>役員紹介</span>
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
                alt="沿革"
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
                padding: '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              }}>
                <span style={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>沿革</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
