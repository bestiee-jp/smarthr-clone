'use client';

import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DecorativeBands } from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

// Executive data
const executives = [
  {
    title: '代表取締役 CEO',
    name: '後藤 弘',
    bio: '2024年、株式会社bestieeを創業し、代表取締役CEOに就任。AI面接練習サービス「FastPass」や採用イベント「AIチャレンジャーズフェス」を立ち上げ、AI×採用領域で事業を展開。開成高校、東京大学工学部を経て、現在は同大学院工学系研究科修士課程に在籍中。TBS『東大王』レギュラー出演（2021〜2024年）、「ミスター東大コンテスト2023」グランプリ受賞。Forbes JAPAN「2026年注目の100人」に選出。',
    image: '/images/ceo.jpg',
  },
  {
    title: '取締役 COO',
    name: '備海 佑樹',
    bio: '2024年、後藤と共に株式会社bestieeを創業し、COOに就任。新規事業開発およびプロダクト開発を統括。AIを活用したサービス設計・PMを強みとし、FastPassの開発を推進。開成高校、慶應義塾大学経済学部卒業。在学中はTikTok Shopや東南アジア（インドネシア）における新規ビジネスの研究に従事。',
    image: '/images/coo.jpg',
  },
];

// Core members data
const coreMembers = [
  {
    title: 'ベストティーチ運営',
    name: '伊藤 七海',
    bio: '2024年12月、株式会社bestieeに参画。家庭教師マッチングサービス「ベストティーチ」の運営を担当。福井県立武生高等学校から塾なしで東京大学に現役合格。同大学教育学部卒業。TBS『東大王』に2019年より出演し、「理数系の絶対王者」として活躍。『東大王』で共に活動した後藤と、教育を通じてより多くの人に影響を届けるべくbestieeに参画。',
    image: '/images/core-member-ito.jpeg',
  },
];

// Navigation sections
const navSections = [
  { label: '取締役・CXO', id: 'executives', active: true },
  { label: 'コアメンバー', id: 'core-members', active: false },
];

export default function ExecutivesPage() {
  const [showNav, setShowNav] = useState(true);
  const relatedSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (relatedSectionRef.current) {
        const rect = relatedSectionRef.current.getBoundingClientRect();
        // Hide nav when related section is in view (top of section reaches 300px from top)
        setShowNav(rect.top > 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: 'white', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
        <DecorativeBands />

        {/* Content */}
        <div style={{ padding: '0 5%', position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 'bold',
              color: 'black',
              display: 'inline-block',
            }}>
              役員紹介
            </h1>
            <span style={{
              fontSize: '16px',
              color: '#666',
              marginLeft: '24px',
              verticalAlign: 'middle',
            }}>
              2026年1月25日現在
            </span>
          </div>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '60px',
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
            <span style={{ margin: '0 8px' }}>-</span>
            <Link href="/company" style={{ color: '#666', textDecoration: 'none' }}>会社情報</Link>
            <span style={{ margin: '0 8px' }}>-</span>
            <span>役員紹介</span>
          </div>
        </div>

        {/* Section header with full-width border */}
        <SectionHeader title="取締役・CXO" withBorder id="executives" padding="0 5% 20px 5%" />
      </section>

      {/* Executives Content Section */}
      <section style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {/* Main content area */}
          <div style={{ flex: 1, padding: '80px 5%', paddingRight: '300px' }}>
            {/* Decorative elements behind executives */}
            <div style={{ position: 'relative' }}>
              {/* Background decorative stripes - left side */}
              <div style={{
                position: 'absolute',
                top: '100px',
                left: '-15%',
                width: '400px',
                height: '300px',
                zIndex: 0,
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '500px',
                  height: '60px',
                  background: 'repeating-linear-gradient(90deg, var(--bestiee-blue-light) 0px, var(--bestiee-blue-light) 3px, transparent 3px, transparent 8px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.4,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '50px',
                  width: '400px',
                  height: '40px',
                  background: 'repeating-linear-gradient(90deg, var(--bestiee-cyan) 0px, var(--bestiee-cyan) 2px, transparent 2px, transparent 6px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.3,
                }} />
              </div>

              {/* Background decorative stripes - right side */}
              <div style={{
                position: 'absolute',
                top: '50px',
                right: '-10%',
                width: '400px',
                height: '350px',
                zIndex: 0,
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '500px',
                  height: '80px',
                  background: 'repeating-linear-gradient(90deg, var(--bestiee-blue-light) 0px, var(--bestiee-blue-light) 3px, transparent 3px, transparent 8px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.5,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '80px',
                  width: '450px',
                  height: '50px',
                  background: 'repeating-linear-gradient(90deg, var(--bestiee-cyan) 0px, var(--bestiee-cyan) 2px, transparent 2px, transparent 5px)',
                  transform: 'rotate(-25deg)',
                  opacity: 0.3,
                }} />
              </div>

              {/* Executives grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '60px',
                position: 'relative',
                zIndex: 1,
              }}>
                {executives.map((exec, index) => (
                  <div key={index}>
                    {/* Photo */}
                    <div style={{
                      width: '100%',
                      aspectRatio: '1',
                      maxWidth: '400px',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '0',
                      marginBottom: '24px',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={exec.image}
                        alt={exec.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>

                    {/* Title */}
                    <div style={{
                      fontSize: '14px',
                      color: '#666',
                      marginBottom: '8px',
                    }}>
                      {exec.title}
                    </div>

                    {/* Name */}
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: 'black',
                      marginBottom: '16px',
                    }}>
                      {exec.name}
                    </h3>

                    {/* Bio */}
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '2',
                      color: '#333',
                    }}>
                      {exec.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar navigation */}
          <div style={{
            position: 'fixed',
            right: '5%',
            top: '200px',
            width: '200px',
            zIndex: 100,
            opacity: showNav ? 1 : 0,
            visibility: showNav ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
          }}>
            {navSections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: section.active ? 'linear-gradient(90deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)' : 'white',
                  color: section.active ? 'white' : 'black',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                <span>{section.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2L6 10M6 10L10 6M6 10L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Core Members Section */}
      <section style={{ backgroundColor: 'white', position: 'relative' }}>
        {/* Section header with full-width border */}
        <SectionHeader title="コアメンバー" withBorder id="core-members" />

        {/* Core Members Content */}
        <div style={{ padding: '80px 5%', paddingRight: '300px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '60px',
          }}>
            {coreMembers.map((member, index) => (
              <div key={index}>
                {/* Photo */}
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  maxWidth: '400px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '0',
                  marginBottom: '24px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Title */}
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '8px',
                }}>
                  {member.title}
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: '16px',
                }}>
                  {member.name}
                </h3>

                {/* Bio */}
                <p style={{
                  fontSize: '14px',
                  lineHeight: '2',
                  color: '#333',
                }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section ref={relatedSectionRef} style={{ backgroundColor: '#f8fafc', padding: '80px 5%' }}>
        {/* Section header */}
        <SectionHeader title="関連ページ" padding="0 0 40px 0" />

        {/* Related pages grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {/* 会社情報 */}
          <a href="/company" style={{ textDecoration: 'none' }}>
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
          </a>

          {/* 役員紹介 */}
          <a href="/company/executives" style={{ textDecoration: 'none' }}>
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
          </a>

          {/* 沿革 */}
          <a href="/company/history" style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '16/10',
              overflow: 'hidden',
              borderRadius: '8px',
            }}>
              <img
                src="/images/related-history.jpg"
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
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
