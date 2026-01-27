'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function MissionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="私たちについて"
        subtitle="About Us"
        breadcrumb={[
          { label: 'トップ', href: '/' },
          { label: '私たちについて' },
        ]}
      />

      {/* Mission Section */}
      <section style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        <SectionHeader title="ミッション" withBorder />

        {/* Content */}
        <div style={{
          display: 'flex',
          gap: '60px',
          padding: '80px 5% 100px',
          alignItems: 'center',
        }}>
          {/* Text content */}
          <div style={{ flex: 1, maxWidth: '700px' }}>
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

          {/* Image */}
          <div style={{
            width: '450px',
            height: '320px',
            borderRadius: '16px',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <Image
              src="/images/mission.jpg"
              alt="ミッション"
              width={450}
              height={320}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ backgroundColor: 'white', position: 'relative' }}>
        <SectionHeader title="バリュー" withBorder />

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
                color: 'var(--bestiee-blue)',
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
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <Image
                src="/images/value-bestiee.jpg"
                alt="Be a Bestiee"
                width={400}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
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
                color: 'var(--bestiee-blue)',
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
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <Image
                src="/images/value-wow.jpg"
                alt="Design the Wow"
                width={400}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
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
                color: 'var(--bestiee-blue)',
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
              borderRadius: '16px',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <Image
                src="/images/value-grind.jpg"
                alt="Trust the Grind"
                width={400}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
