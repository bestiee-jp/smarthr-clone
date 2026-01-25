'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MissionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ padding: '0 5%' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 'bold',
            color: 'black',
          }}>
            私たちについて
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginTop: '12px',
          }}>
            About Us
          </p>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginTop: '24px',
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
            <span style={{ margin: '0 8px' }}>-</span>
            <span>私たちについて</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* ミッション label with full-width border */}
        <div style={{ borderBottom: '1px solid #e5e7eb' }}>
          <div
            className="flex items-center"
            style={{
              padding: '20px 5%',
              gap: '16px'
            }}
          >
            <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
            <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>ミッション</span>
          </div>
        </div>

        {/* Content with ellipse background */}
        <div style={{ position: 'relative', padding: '80px 5% 100px' }}>
          {/* Cyan ellipse decorations */}
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}>
            {/* Main ellipse - top right */}
            <svg
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-15%',
                width: '70%',
                height: '500px',
              }}
              viewBox="0 0 700 400"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="missionWave1" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5de0e0" />
                  <stop offset="50%" stopColor="#4dd9d9" />
                  <stop offset="100%" stopColor="#3dd4d4" />
                </linearGradient>
              </defs>
              <path
                d="M700,100 Q650,30 500,60 C350,100 200,180 100,280 Q50,340 120,380 C250,420 450,400 600,350 C700,310 720,200 700,100 Z"
                fill="url(#missionWave1)"
                opacity="0.85"
              />
            </svg>

            {/* Secondary ellipse */}
            <svg
              style={{
                position: 'absolute',
                top: '150px',
                right: '-5%',
                width: '50%',
                height: '350px',
              }}
              viewBox="0 0 500 300"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="missionWave2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6ee7e7" />
                  <stop offset="100%" stopColor="#4dd9d9" />
                </linearGradient>
              </defs>
              <path
                d="M500,80 Q450,20 350,50 C200,100 100,180 50,250 Q20,300 100,300 C250,300 400,260 480,180 Q520,120 500,80 Z"
                fill="url(#missionWave2)"
                opacity="0.6"
              />
            </svg>

            {/* Soft glow */}
            <div
              style={{
                position: 'absolute',
                top: '100px',
                right: '15%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(77, 217, 217, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
            />
          </div>

          {/* Text content */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '16px',
              letterSpacing: '0.1em',
            }}>
              turn fear into passion
            </p>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 'bold',
              color: 'black',
              lineHeight: '1.6',
              marginBottom: '60px',
            }}>
              学びと出会いに、ワクワクを
            </h2>

            <div style={{ fontSize: '16px', lineHeight: '2.2', color: '#333' }}>
              <p style={{ marginBottom: '32px' }}>
                人生の分岐点。
              </p>

              <p style={{ marginBottom: '32px' }}>
                そこには常に、見えない「不安」や、やり場のない「退屈」がつきまといます。<br />
                勉強への苦手意識、就活に対する恐れ、キャリアへの迷い。<br />
                多くの人が、その重圧の前で立ち尽くしてしまう現実があります。
              </p>

              <p style={{ marginBottom: '32px' }}>
                だからこそ、私たちはそのプロセス自体を、心躍る体験へと変えていきたい。
              </p>

              <p>
                私たちは、AIとテクノロジーの力を使い、<br />
                人々の前に立ちはだかる「不安」を「熱狂」へ、<br />
                繰り返される「退屈」を、明日への「期待」へと変えていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ backgroundColor: 'white', position: 'relative' }}>
        {/* バリュー label with full-width border */}
        <div style={{ borderBottom: '1px solid #e5e7eb' }}>
          <div
            className="flex items-center"
            style={{
              padding: '20px 5%',
              gap: '16px'
            }}
          >
            <div style={{ width: '4px', height: '28px', backgroundColor: '#4dd9d9' }}></div>
            <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.2em', fontWeight: '500' }}>バリュー</span>
          </div>
        </div>

        {/* Values Content */}
        <div style={{ padding: '80px 5% 100px' }}>
          {/* Intro text */}
          <p style={{
            fontSize: '16px',
            lineHeight: '2',
            color: '#333',
            marginBottom: '80px',
            maxWidth: '800px',
          }}>
            スタートアップである私たちが、大きな社会課題に挑むために必要なこと。<br />
            それは、一人ひとりのお客様に深く向き合い、期待を超える体験を設計し、最後まで泥臭くやり抜くこと。<br />
            この3つのバリューは、私たちがミッションを実現するための約束です。
          </p>

          {/* Value 1 */}
          <div style={{
            display: 'flex',
            gap: '60px',
            marginBottom: '80px',
            alignItems: 'center',
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                color: '#4dd9d9',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                Be a Bestiee
              </p>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: '24px',
              }}>
                最高の相棒であれ
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '2',
                color: '#333',
              }}>
                私たちは、お客様にとって「困ったときに真っ先に頼りたくなる存在」を目指します。
                表面的なサービス提供ではなく、本音で語り合える関係性を築き、
                一人ひとりの課題に寄り添い、共に解決していく。
                社名の由来である「bestie（親友）」のように、
                かけがえのないパートナーであり続けます。
              </p>
            </div>
            <div style={{
              width: '400px',
              height: '280px',
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#999', fontSize: '14px' }}>画像</span>
            </div>
          </div>

          {/* Value 2 */}
          <div style={{
            display: 'flex',
            gap: '60px',
            marginBottom: '80px',
            alignItems: 'center',
            flexDirection: 'row-reverse',
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                color: '#4dd9d9',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                Design the &apos;Wow&apos;
              </p>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: '24px',
              }}>
                人の心を動かす仕掛けを！
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '2',
                color: '#333',
              }}>
                細部にこそ、感動は宿る。
                ボタンひとつ、言葉ひとつ、体験のすべてにおいて
                「どうすれば人の心を動かせるか」を問い続けます。
                期待を超える驚きと喜びを届けるために、
                私たちは妥協なく「Wow」を設計し続けます。
              </p>
            </div>
            <div style={{
              width: '400px',
              height: '280px',
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#999', fontSize: '14px' }}>画像</span>
            </div>
          </div>

          {/* Value 3 */}
          <div style={{
            display: 'flex',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '14px',
                color: '#4dd9d9',
                fontWeight: '600',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                Trust the Grind
              </p>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'black',
                marginBottom: '24px',
              }}>
                泥臭さを、愛せ
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '2',
                color: '#333',
              }}>
                どんなに優れたアイデアも、実行しなければ価値は届かない。
                私たちは、地道な努力を厭わず、最後までやり抜くことを誇りとします。
                華やかな成果の裏には、必ず泥臭い積み重ねがある。
                その過程を愛し、信じ抜く姿勢が、私たちの強さです。
              </p>
            </div>
            <div style={{
              width: '400px',
              height: '280px',
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#999', fontSize: '14px' }}>画像</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
