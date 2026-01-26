'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { ArrowIcon, ArrowCircleIcon } from '@/components/icons';

// News item data
const newsItems = [
  {
    date: '2025.12.26',
    category: 'お知らせ',
    title: 'VP就任に関するお知らせ',
  },
  {
    date: '2025.12.08',
    category: 'お知らせ',
    title: '不適切なブログ記事公開に関するお詫びと今後の対応について',
  },
  {
    date: '2025.12.03',
    category: 'プレスリリース',
    title: 'SmartHR、蓄積された従業員データをAIが分析し、最適な人材選定を提案する「AI類似従業員検索」機能を提供',
  },
  {
    date: '2025.11.25',
    category: 'お知らせ',
    title: 'SmartHR、「人事評価」に「給与シミュレーション」機能を追加',
  },
  {
    date: '2025.11.18',
    category: 'お知らせ',
    title: 'General AtlanticがSmartHRの株主に参画 Coral Capitalから146億円の株式を取得',
  },
];

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

      {/* News list */}
      <div style={{ padding: '0 5%' }}>
        {newsItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="group"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '20px 0' : '30px 0',
              borderBottom: '1px solid #e5e7eb',
              textDecoration: 'none',
              gap: isMobile ? '12px' : '0',
            }}
          >
            {/* Left side: Date, Category, Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? '8px' : '30px',
                flex: 1
              }}
            >
              {/* Date and Category row on mobile */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '30px',
                }}
              >
                {/* Date */}
                <span
                  style={{
                    color: '#6b7280',
                    fontSize: isMobile ? '13px' : '15px',
                    minWidth: isMobile ? 'auto' : '110px',
                  }}
                >
                  {item.date}
                </span>

                {/* Category tag */}
                <span
                  style={{
                    border: '1px solid var(--bestiee-cyan)',
                    color: 'var(--bestiee-cyan)',
                    padding: isMobile ? '4px 12px' : '6px 20px',
                    borderRadius: '20px',
                    fontSize: isMobile ? '11px' : '13px',
                    minWidth: isMobile ? 'auto' : '100px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <span
                className="group-hover:text-[var(--bestiee-cyan)] transition-colors"
                style={{
                  color: 'black',
                  fontSize: isMobile ? '14px' : '16px',
                  flex: 1,
                  lineHeight: '1.6',
                }}
              >
                {item.title}
              </span>
            </div>

            {/* Right side: Arrow */}
            <div
              className="group-hover:scale-110 transition-transform"
              style={{
                alignSelf: isMobile ? 'flex-end' : 'center',
                marginTop: isMobile ? '8px' : '0',
              }}
            >
              <ArrowCircleIcon size={isMobile ? 32 : 40} />
            </div>
          </a>
        ))}
      </div>

      {/* ニュース一覧 Button */}
      <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', marginTop: isMobile ? '32px' : '60px', padding: '0 5%' }}>
        <a
          href="#"
          className="inline-flex items-center justify-between bg-black text-white"
          style={{
            padding: isMobile ? '16px 24px' : '24px 32px',
            minWidth: isMobile ? '200px' : '280px',
            fontSize: isMobile ? '14px' : '18px',
            borderRadius: '50px',
            transition: 'border-radius 0.5s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
          onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
        >
          <span>ニュース一覧</span>
          <ArrowIcon size={isMobile ? 16 : 20} />
        </a>
      </div>
    </section>
  );
}
