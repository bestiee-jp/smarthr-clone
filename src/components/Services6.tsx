'use client';

import { useState, useEffect } from 'react';

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const slides = [
  {
    description: '人事・労務の業務効率化と、着実な成果につながるタレントマネジメントの推進を支援するクラウド人事労務ソフト「SmartHR」を開発しています。',
    buttonText: 'サービス',
    title: '勤怠レポート',
    subtitle: '月間平均労働時間（正社員）',
    value: '174.6',
    unit: '時間',
    chartData: [60, 45, 70, 55, 80, 65, 75, 50, 85, 60],
    phoneUser: '田中 ゆき',
    phoneLocation: 'カナダ',
    phoneItems: ['住所と連絡先', '電話番号', '業務情報', '所属部署', '所属支店'],
  },
  {
    description: '給与計算から明細配布まで、煩雑な給与業務をシンプルに。従業員はスマホでいつでも給与明細を確認できます。',
    buttonText: '給与明細',
    title: '給与明細',
    subtitle: '今月の総支給額',
    value: '425,000',
    unit: '円',
    chartData: [50, 65, 55, 70, 60, 80, 70, 85, 75, 90],
    phoneUser: '佐藤 健太',
    phoneLocation: '東京',
    phoneItems: ['基本給', '残業手当', '通勤手当', '社会保険', '所得税'],
  },
  {
    description: '有給休暇の取得状況を可視化し、働き方改革を推進。申請から承認までペーパーレスで完結します。',
    buttonText: '勤怠管理',
    title: '有給管理',
    subtitle: '残り有給日数',
    value: '12.5',
    unit: '日',
    chartData: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35],
    phoneUser: '鈴木 美咲',
    phoneLocation: '大阪',
    phoneItems: ['年次有給', '特別休暇', '振替休日', '申請履歴', '承認状況'],
  },
];

// 6. パララックス
export default function Services6() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev >= 100 ? 100 : prev + 2);
    }, 100);

    const slideInterval = setInterval(() => {
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 700);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="bg-white" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ padding: '0 5%', marginBottom: '20px' }}>
        <span style={{
          display: 'inline-block', padding: '8px 16px', backgroundColor: '#10b981',
          color: 'white', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold'
        }}>
          6. パララックス
        </span>
      </div>

      <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
        <div className="flex" style={{ gap: '40px', padding: '0 5%' }}>
          {/* Left side - Text (moves faster) */}
          <div style={{
            flex: '0 0 35%',
            paddingTop: '20px',
            transform: isAnimating ? 'translateX(-150%)' : 'translateX(0)',
            opacity: isAnimating ? 0 : 1,
            transition: 'transform 0.7s ease-out, opacity 0.4s ease-out',
          }}>
            <p className="text-black" style={{ fontSize: '16px', lineHeight: '2', marginBottom: '30px' }}>
              {slide.description}
            </p>
            <a href="#" className="inline-flex items-center justify-between bg-black text-white"
              style={{ padding: '16px 24px', minWidth: '200px', fontSize: '16px', borderRadius: '50px' }}>
              <span>{slide.buttonText}</span>
              <ArrowIcon />
            </a>
          </div>

          {/* Right side - Device Mockups (moves slower) */}
          <div style={{
            flex: '1',
            position: 'relative',
            minHeight: '350px',
            transform: isAnimating ? 'translateX(-50%)' : 'translateX(0)',
            opacity: isAnimating ? 0 : 1,
            transition: 'transform 0.7s ease-out 0.1s, opacity 0.5s ease-out 0.1s',
          }}>
            <div style={{
              position: 'absolute', top: '0', right: '0', width: '80%', height: '280px',
              backgroundColor: '#f3f4f6', borderRadius: '8px', border: '6px solid #1f2937',
              borderBottom: '20px solid #1f2937', overflow: 'hidden',
            }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)', padding: '16px' }}>
                <div style={{ backgroundColor: '#0d9488', padding: '6px 12px', borderRadius: '4px 4px 0 0' }}>
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 'bold' }}>SmartHR</span>
                </div>
                <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '0 0 4px 4px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>{slide.title}</div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '9px', color: '#6b7280' }}>{slide.subtitle}</div>
                      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{slide.value}<span style={{ fontSize: '10px' }}>{slide.unit}</span></div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '3px', height: '60px' }}>
                      {slide.chartData.map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i % 2 === 0 ? '#0891b2' : '#22d3ee', borderRadius: '2px 2px 0 0' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              position: 'absolute', bottom: '0', left: '5%', width: '120px', height: '240px',
              backgroundColor: '#1f2937', borderRadius: '20px', padding: '6px',
              transform: isAnimating ? 'translateY(30px)' : 'translateY(0)',
              transition: 'transform 0.7s ease-out 0.2s',
            }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#0d9488', padding: '6px 10px' }}>
                  <span style={{ color: 'white', fontSize: '9px', fontWeight: 'bold' }}>SmartHR</span>
                </div>
                <div style={{ padding: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)' }} />
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 'bold' }}>{slide.phoneUser}</div>
                      <div style={{ fontSize: '7px', color: '#6b7280' }}>{slide.phoneLocation}</div>
                    </div>
                  </div>
                  {slide.phoneItems.slice(0, 4).map((label, i) => (
                    <div key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '5px 0', fontSize: '7px', color: '#374151' }}>{label}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
          {slides.map((_, index) => (
            <button key={index} onClick={() => { setIsAnimating(true); setProgress(0); setTimeout(() => { setCurrentSlide(index); setIsAnimating(false); }, 350); }}
              style={{ width: currentSlide === index ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none',
                backgroundColor: currentSlide === index ? '#10b981' : '#d1d5db', cursor: 'pointer', transition: 'all 0.3s ease' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
