'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Arrow Icon for links
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// External Link Icon
function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7.5V11.5C11 12.0523 10.5523 12.5 10 12.5H2.5C1.94772 12.5 1.5 12.0523 1.5 11.5V4C1.5 3.44772 1.94772 3 2.5 3H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 1.5H12.5V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L12.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ServicePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: 'white', paddingTop: '60px' }}>
        {/* Title */}
        <h1 style={{
          textAlign: 'center',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: 'black'
        }}>
          サービス
        </h1>

        {/* Breadcrumb */}
        <div style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#888',
          marginBottom: '60px'
        }}>
          トップ &gt; サービス
        </div>

        {/* Device Mockups Hero Image */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
        }}>
          {/* Cyan diagonal lines decoration */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            border: '3px solid #1E5AA8',
            transform: 'rotate(15deg)',
            opacity: 0.6
          }} />
          <div style={{
            position: 'absolute',
            bottom: '5%',
            left: '-10%',
            width: '300px',
            height: '300px',
            border: '3px solid #1E5AA8',
            transform: 'rotate(-10deg)',
            opacity: 0.4
          }} />

          {/* Main device mockup container */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Phone mockup */}
            <div style={{
              width: '120px',
              height: '240px',
              backgroundColor: '#1f2937',
              borderRadius: '20px',
              padding: '6px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              transform: 'rotate(-5deg)',
              flexShrink: 0
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '14px',
                overflow: 'hidden'
              }}>
                <div style={{ backgroundColor: '#0d9488', padding: '8px', fontSize: '8px', color: 'white', fontWeight: 'bold' }}>
                  SmartHR
                </div>
                <div style={{ padding: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#e5e7eb', marginBottom: '8px' }} />
                  <div style={{ fontSize: '8px', fontWeight: 'bold', marginBottom: '4px' }}>従業員情報</div>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ height: '6px', backgroundColor: '#f3f4f6', marginBottom: '4px', borderRadius: '2px' }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Main laptop mockup */}
            <div style={{
              width: '500px',
              height: '320px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              border: '6px solid #1f2937',
              borderBottom: '20px solid #1f2937',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
              flexShrink: 0
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
                padding: '16px'
              }}>
                <div style={{
                  backgroundColor: '#0d9488',
                  padding: '8px 12px',
                  borderRadius: '4px 4px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 'bold' }}>SmartHR</span>
                  <span style={{ color: 'white', fontSize: '9px', opacity: 0.8 }}>株式会社サンプル</span>
                </div>
                <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '0 0 4px 4px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>ダッシュボード</div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '8px', color: '#6b7280' }}>従業員数</div>
                      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>427<span style={{ fontSize: '10px' }}>名</span></div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '3px', height: '60px' }}>
                      {[40, 55, 45, 70, 60, 80, 65, 75, 50, 85].map((h, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            backgroundColor: i % 2 === 0 ? '#0891b2' : '#22d3ee',
                            borderRadius: '2px 2px 0 0',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet mockup */}
            <div style={{
              width: '200px',
              height: '280px',
              backgroundColor: '#1f2937',
              borderRadius: '16px',
              padding: '8px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              transform: 'rotate(5deg)',
              flexShrink: 0
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <div style={{ backgroundColor: '#0d9488', padding: '8px', fontSize: '9px', color: 'white', fontWeight: 'bold' }}>
                  SmartHR
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '8px' }}>評価シート</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{
                        padding: '8px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '4px',
                        fontSize: '7px'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>目標{i}</div>
                        <div style={{ color: '#6b7280' }}>達成率 {70 + i * 5}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          height: '1px',
          backgroundColor: '#e5e7eb',
          marginTop: '60px'
        }} />
      </section>

      {/* Service Introduction Section */}
      <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Section label with full-width border */}
        <div style={{ borderBottom: '1px solid #e5e7eb', marginBottom: '60px' }}>
          <div className="flex items-center gap-4" style={{ padding: '0 5%', paddingBottom: '20px' }}>
            <div style={{ width: '4px', height: '28px', background: 'linear-gradient(180deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)' }}></div>
            <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>サービス紹介</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '0 5%' }}>
          {/* Main intro with devices */}
          <div className="flex" style={{ gap: '60px', marginBottom: '80px' }}>
            {/* Left side - Text and feature cards */}
            <div style={{ flex: '0 0 50%' }}>
              {/* SmartHR Logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>S</span>
                </div>
                <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'black' }}>SmartHR</span>
              </div>

              {/* Tagline */}
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 'bold', color: 'black', marginBottom: '24px', lineHeight: '1.4' }}>
                働くを変える一歩を、人事と労務から
              </h2>

              {/* Description */}
              <p style={{ fontSize: '15px', lineHeight: '2', color: '#333', marginBottom: '40px' }}>
                人事・労務の業務効率化を進めながら、従業員の働きやすい環境づくりに、着実な成果につながるタレントマネジメントの環境を整備。従業員が自然な心地よく使える設計と、業務を通じて蓄積される正確な従業員データで、人事・労務を起点に働くを変えていきます。
              </p>

              {/* Two feature cards */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                {/* 労務管理 Card */}
                <div style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>
                    <span style={{ color: '#1E5AA8' }}>SmartHR</span> 労務管理
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>該当する機能の一例：</p>
                  <ul style={{ fontSize: '13px', color: '#333', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                    <li>・入社手続き／雇用契約</li>
                    <li>・勤怠管理</li>
                    <li>・給与計算</li>
                    <li>・給与明細</li>
                    <li>・文書配付</li>
                    <li>・年末調整　など</li>
                  </ul>
                </div>

                {/* タレントマネジメント Card */}
                <div style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>
                    <span style={{ color: '#1E5AA8' }}>SmartHR</span> タレントマネジメント
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>該当する機能の一例：</p>
                  <ul style={{ fontSize: '13px', color: '#333', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                    <li>・採用管理</li>
                    <li>・人事評価</li>
                    <li>・配置シミュレーション</li>
                    <li>・キャリア台帳　など</li>
                  </ul>
                </div>
              </div>

              {/* Main CTA Button */}
              <a
                href="#"
                className="inline-flex items-center justify-between bg-black text-white"
                style={{
                  padding: '18px 28px',
                  fontSize: '16px',
                  borderRadius: '50px',
                  transition: 'border-radius 0.5s ease',
                  gap: '12px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
                onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
              >
                <span>クラウド人事労務ソフトSmartHR</span>
                <ExternalLinkIcon />
              </a>
            </div>

            {/* Right side - Device mockups */}
            <div style={{ flex: '1', position: 'relative', minHeight: '500px' }}>
              {/* Laptop */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '90%',
                height: '300px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                border: '6px solid #1f2937',
                borderBottom: '18px solid #1f2937',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)', padding: '12px' }}>
                  <div style={{ backgroundColor: '#0d9488', padding: '6px 10px', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>SmartHR</span>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
                      <div>
                        <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '4px' }}>従業員情報</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>23.1<span style={{ fontSize: '10px' }}>万</span></div>
                      </div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '2px', height: '50px' }}>
                        {[40, 55, 70, 60, 80, 65].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i % 2 === 0 ? '#0891b2' : '#22d3ee', borderRadius: '2px 2px 0 0' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet */}
              <div style={{
                position: 'absolute',
                bottom: '60px',
                right: '10%',
                width: '180px',
                height: '250px',
                backgroundColor: '#1f2937',
                borderRadius: '16px',
                padding: '6px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#0d9488', padding: '6px', fontSize: '8px', color: 'white', fontWeight: 'bold' }}>SmartHR</div>
                  <div style={{ padding: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
                      <div style={{ fontSize: '8px' }}>田中 太郎</div>
                    </div>
                    {[1,2,3].map(i => (
                      <div key={i} style={{ height: '8px', backgroundColor: '#f3f4f6', marginBottom: '4px', borderRadius: '2px' }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '10%',
                width: '100px',
                height: '200px',
                backgroundColor: '#1f2937',
                borderRadius: '16px',
                padding: '4px',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
              }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#0d9488', padding: '4px 6px', fontSize: '7px', color: 'white', fontWeight: 'bold' }}>SmartHR</div>
                  <div style={{ padding: '6px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#e5e7eb', marginBottom: '6px' }} />
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ height: '5px', backgroundColor: '#f3f4f6', marginBottom: '3px', borderRadius: '2px' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional device mockups row */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '80px' }}>
            {/* Left mockup - 人事台帳・従業員名簿 */}
            <div style={{ flex: 1, backgroundColor: '#f9fafb', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '250px',
                backgroundColor: '#1f2937',
                borderRadius: '8px',
                padding: '4px',
                marginBottom: '16px'
              }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#0d9488', padding: '8px', fontSize: '10px', color: 'white', fontWeight: 'bold' }}>
                    SmartHR - 人事台帳・従業員名簿
                  </div>
                  <div style={{ padding: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                      {[1,2,3,4,5,6,7,8].map(i => (
                        <div key={i} style={{ textAlign: 'center' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e5e7eb', margin: '0 auto 4px' }} />
                          <div style={{ fontSize: '7px', color: '#666' }}>社員{i}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right mockup - 分析レポート */}
            <div style={{ flex: 1, backgroundColor: '#f9fafb', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '250px',
                backgroundColor: '#1f2937',
                borderRadius: '8px',
                padding: '4px',
                marginBottom: '16px'
              }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#0d9488', padding: '8px', fontSize: '10px', color: 'white', fontWeight: 'bold' }}>
                    SmartHR - 分析レポート
                  </div>
                  <div style={{ padding: '12px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 'bold', marginBottom: '8px' }}>2023年上期実績レポート</div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ flex: 1 }}>
                        {[60, 45, 70, 55, 80].map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                            <div style={{ fontSize: '7px', width: '20px' }}>Q{i+1}</div>
                            <div style={{ flex: 1, height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px' }}>
                              <div style={{ width: `${h}%`, height: '100%', background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 100%)', borderRadius: '4px' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '8px solid #00A3E0', borderRightColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two product sections */}
          <div style={{ display: 'flex', gap: '60px' }}>
            {/* 労務管理 Section */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>
                <span style={{ color: '#1E5AA8' }}>SmartHR</span> 労務管理
              </h3>
              <p style={{ fontSize: '18px', fontWeight: '500', color: 'black', marginBottom: '16px' }}>
                確かな効率化で、働きやすい環境をつくる
              </p>
              <p style={{ fontSize: '14px', lineHeight: '2', color: '#666', marginBottom: '24px' }}>
                雇用契約や入社手続き、年末調整などの手続きをペーパーレス化することで、あらゆる労務管理業務の工数を削減。従業員にとっても、心地よく使える設計で、人事・労務の「働きやすさ」を支援します。
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-between bg-black text-white"
                style={{
                  padding: '16px 24px',
                  fontSize: '15px',
                  borderRadius: '50px',
                  transition: 'border-radius 0.5s ease',
                  gap: '12px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
                onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
              >
                <span>SmartHR労務管理</span>
                <ExternalLinkIcon />
              </a>
            </div>

            {/* タレントマネジメント Section */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '16px' }}>
                <span style={{ color: '#1E5AA8' }}>SmartHR</span> タレントマネジメント
              </h3>
              <p style={{ fontSize: '18px', fontWeight: '500', color: 'black', marginBottom: '16px' }}>
                確かなデータで、組織はもっと強くなる
              </p>
              <p style={{ fontSize: '14px', lineHeight: '2', color: '#666', marginBottom: '24px' }}>
                人事業務の効率化から蓄積された正確な人材情報・成績データ等、一覧して見れる人事データベースに、多角的な分析レポート、タレントマネジメントシステムを活用することで、組織のパフォーマンスを最大化します。
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-between bg-black text-white"
                style={{
                  padding: '16px 24px',
                  fontSize: '15px',
                  borderRadius: '50px',
                  transition: 'border-radius 0.5s ease',
                  gap: '12px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderRadius = '8px')}
                onMouseLeave={(e) => (e.currentTarget.style.borderRadius = '50px')}
              >
                <span>SmartHRタレントマネジメント</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
