'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import RelatedPagesGrid from "@/components/RelatedPagesGrid";

// Company info data
const companyInfo = [
  { label: '社名', value: '株式会社bestiee' },
  { label: '代表者', value: '代表取締役CEO 後藤弘' },
  { label: '事業内容', value: 'AI採用マッチングサービス・採用イベント・家庭教師マッチングサービスの企画・開発・運営' },
  { label: '設立', value: '2024年3月6日' },
  { label: '資本金', value: '1,000,000円' },
  { label: '登記住所', value: '〒150-0043 東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F-C' },
  { label: 'オフィス', value: '〒102-0074 東京都千代田区九段南2-3-1 青葉第一ビル 5F' },
];

// Related pages
const relatedPages = [
  { label: '会社情報', href: '/company', image: '/images/related-company.jpg' },
  { label: '役員紹介', href: '/company/executives', image: '/images/related-executives.jpg' },
  { label: '沿革', href: '/company/history', image: '/images/history-tib.jpg' },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="会社情報"
        subtitle="Company"
        breadcrumb={[
          { label: 'トップ', href: '/' },
          { label: '会社情報' },
        ]}
        decorative
      />

      {/* Hero Image */}
      <section style={{ backgroundColor: 'white' }}>
        <div style={{ padding: '0 5%', paddingBottom: '60px' }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '12px',
          }}>
            <Image
              src="/images/related-company.jpg"
              alt="オフィス"
              width={1200}
              height={675}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Company Info Table Section */}
      <section style={{ backgroundColor: 'white', padding: '0 5% 80px' }}>
        <div style={{ maxWidth: '1200px' }}>
          <SectionHeader title="会社概要" padding="0 0 40px 0" />

          {/* Info Table */}
          <div style={{ borderTop: '1px solid #e5e7eb' }}>
            {companyInfo.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '24px 0',
                }}
              >
                <div style={{
                  flex: '0 0 200px',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#333',
                }}>
                  {item.label}
                </div>
                <div style={{
                  flex: '1',
                  fontSize: '18px',
                  color: '#333',
                  lineHeight: '1.8',
                  whiteSpace: 'pre-line',
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Company Images */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '8px' }}>
              <Image
                src="/images/会社情報_上司と部下.jpg"
                alt="オフィス風景"
                width={600}
                height={375}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: '1 1 400px', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '8px' }}>
              <Image
                src="/images/会社情報_AIコーディング.jpg"
                alt="AIコーディング"
                width={600}
                height={375}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px' }}>
          <SectionHeader title="アクセス" padding="0 0 40px 0" />

          {/* Access Info */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#333', marginBottom: '16px' }}>
              〒102-0074 東京都千代田区九段南2-3-1 青葉第一ビル 5F
            </p>
            <div style={{ fontSize: '16px', color: '#666', lineHeight: '2' }}>
              <p>東京メトロ東西線・半蔵門線 / 都営新宿線「九段下駅」徒歩6分</p>
              <p>JR中央・総武線 / 東京メトロ有楽町線・南北線 / 都営新宿線「市ヶ谷駅」徒歩10分</p>
            </div>
          </div>

          {/* Google Maps */}
          <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6480.670245376782!2d139.74546!3d35.69337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c69146baa49%3A0xe464fb5b1da4d499!2z44CSMTAyLTAwNzQg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Lmd5q615Y2X77yS5LiB55uu77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1769323408390!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <RelatedPagesGrid pages={relatedPages} />

      <Footer />
    </main>
  );
}
