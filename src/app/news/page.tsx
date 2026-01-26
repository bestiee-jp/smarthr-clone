'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Sample news data
const featuredNews = {
  date: '2025.06.23',
  categories: ['プレスリリース', 'コーポレート'],
  title: '「SmartHR」が10周年を記念し特設サイトを公開。あわせてサービスビジョンを刷新',
  image: '/news/featured.png',
  href: '#',
};

// News list data
const newsItems = [
  {
    id: 1,
    date: '2026.01.13',
    categories: ['お知らせ', 'コーポレート'],
    title: 'SmartHR、ITコンサルティング事業を展開するKICK ZA ISSUE株式会社をグループ会社化',
    imageType: 'kickza',
    href: '#',
  },
  {
    id: 2,
    date: '2025.12.26',
    categories: ['お知らせ', 'コーポレート'],
    title: 'VR体験に関するお知らせ',
    imageType: 'logo',
    href: '#',
  },
  {
    id: 3,
    date: '2025.12.08',
    categories: ['お知らせ', 'コーポレート'],
    title: '不適切なブログ記載内容についてのお詫びとご報告',
    imageType: 'logo',
    href: '#',
  },
  {
    id: 4,
    date: '2025.07.10',
    categories: ['お知らせ', 'サービス'],
    title: 'AI類似従業員検索機能をリリース',
    imageType: 'ai-search',
    href: '#',
  },
  {
    id: 5,
    date: '2025.06.28',
    categories: ['お知らせ', 'サービス'],
    title: '給与シミュレーション機能',
    imageType: 'salary',
    href: '#',
  },
  {
    id: 6,
    date: '2025.06.15',
    categories: ['プレスリリース', 'コーポレート'],
    title: 'SmartHRが注目サービスに選出されました',
    imageType: 'logo',
    href: '#',
  },
  {
    id: 7,
    date: '2025.07.10',
    categories: ['お知らせ', 'コーポレート'],
    title: 'SmartHR、直上企業サービスの共用を目指す「年末志事業アジャスト」へ新たに参画',
    imageType: 'photo1',
    href: '#',
  },
  {
    id: 8,
    date: '2025.06.30',
    categories: ['プレスリリース', 'サービス'],
    title: '人・知識の使える、AIアシスタント機能をリリース',
    imageType: 'ai-assistant',
    href: '#',
  },
  {
    id: 9,
    date: '2025.06.23',
    categories: ['プレスリリース', 'コーポレート'],
    title: '「SmartHR」が10周年を記念し特設サイトを公開。あわせてサービスビジョンを刷新',
    imageType: 'anniversary',
    href: '#',
  },
];

// Filter options
const filterOptions = {
  categories: ['プレスリリース', 'お知らせ'],
  themes: ['コーポレート', 'サービス'],
  years: ['2026年', '2025年', '2024年', '2023年', '2022年', '2021年'],
};

// Filter Pill Component
function FilterPill({
  label,
  isSelected,
  onClick
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 24px',
        fontSize: '15px',
        border: isSelected ? '2px solid #333' : '1px solid #d1d5db',
        borderRadius: '50px',
        backgroundColor: isSelected ? '#f3f4f6' : 'white',
        color: '#333',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontWeight: isSelected ? '600' : '400',
      }}
    >
      {label}
    </button>
  );
}

// News Card Image Component
function NewsCardImage({ type }: { type: string }) {
  if (type === 'kickza') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ fontSize: '12px', color: '#333', textAlign: 'center', marginBottom: '20px', lineHeight: 1.5 }}>
          SmartHR、<br/>
          ITコンサルティング事業を展開する<br/>
          KICK ZA ISSUE株式会社をグループ会社化
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>S</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '14px' }}>SmartHR</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '0',
              height: '0',
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderBottom: '24px solid #333',
            }} />
            <span style={{ fontWeight: 'bold', fontSize: '12px' }}>KICK ZA ISSUE</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ai-search') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ fontSize: '10px', color: '#666', marginBottom: '8px' }}>AI</div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
          AI 類似<br/>従業員検索
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '10px' }}>S</span>
          </div>
          <span style={{ fontSize: '12px' }}>SmartHR</span>
        </div>
      </div>
    );
  }

  if (type === 'salary') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
          給与シミュレーション<br/>機能
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '10px' }}>S</span>
          </div>
          <span style={{ fontSize: '12px' }}>SmartHR</span>
        </div>
      </div>
    );
  }

  if (type === 'ai-assistant') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ fontSize: '10px', color: 'white', marginBottom: '8px' }}>人・知識の使える</div>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
          AIアシスタント
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#1E5AA8', fontWeight: 'bold', fontSize: '10px' }}>S</span>
          </div>
          <span style={{ fontSize: '12px', color: 'white' }}>SmartHR</span>
        </div>
      </div>
    );
  }

  if (type === 'anniversary') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          left: '10px',
          bottom: '10px',
          width: '30px',
          height: '30px',
          backgroundColor: '#ff6b35',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          right: '20%',
          top: '15%',
          width: '40px',
          height: '40px',
          backgroundColor: '#333',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ color: 'white', fontSize: '6px', textAlign: 'center', lineHeight: 1.2 }}>
            10周年<br/>特設サイト<br/>公開
          </span>
        </div>
        <div style={{
          position: 'absolute',
          left: '15px',
          top: '15px',
          color: 'white',
          fontSize: '8px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '4px' }}>
            0→1→10→
          </div>
        </div>
        <div style={{
          color: '#333',
          fontSize: '14px',
          fontWeight: 'bold',
          writingMode: 'vertical-rl',
        }}>
          人が、社会が、本当に欲しいもの
        </div>
      </div>
    );
  }

  if (type === 'photo1') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
        backgroundImage: 'linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ color: '#999', fontSize: '12px' }}>Photo</span>
      </div>
    );
  }

  // Default: SmartHR logo on teal background
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: 'white',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <path
            d="M20.5 10C16.5 10 14 12 14 14.8C14 17.8 16.5 19 20 19.8C23 20.5 24 21.2 24 22.5C24 24 22.5 25 20 25C17 25 15.5 23.5 15.2 21.5H11.5C11.8 25.5 15 28.5 20 28.5C24.5 28.5 27.5 26 27.5 22.3C27.5 19 25 17.5 21 16.7C18.2 16.1 17 15.5 17 14.3C17 13 18.3 12 20.3 12C22.5 12 24 13.2 24.3 15H28C27.5 11.5 24.5 10 20.5 10Z"
            fill="#00A3E0"
          />
        </svg>
      </div>
      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>SmartHR</span>
    </div>
  );
}

// News Card Component
function NewsCard({ item }: { item: typeof newsItems[0] }) {
  return (
    <Link href={item.href} className="group block">
      {/* Image */}
      <div style={{
        aspectRatio: '16/10',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
      }}>
        <NewsCardImage type={item.imageType} />
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
          gap: '12px',
          fontSize: '13px',
        }}>
          <span style={{ color: '#666' }}>{item.date}</span>
          {item.categories.map((cat, index) => (
            <span
              key={index}
              style={{
                color: index === 0 ? '#333' : '#666',
                textDecoration: index === 0 ? 'underline' : 'none',
                textUnderlineOffset: '3px',
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Arrow Button */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
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
        {item.title}
      </h3>
    </Link>
  );
}

// Pagination Component
function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const pages = [];

  // Show first 5 pages, then ... and last page
  for (let i = 1; i <= Math.min(5, totalPages); i++) {
    pages.push(i);
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '60px',
    }}>
      {pages.map(page => (
        <button
          key={page}
          style={{
            width: page === currentPage ? '40px' : '36px',
            height: page === currentPage ? '40px' : '36px',
            borderRadius: '50%',
            backgroundColor: page === currentPage ? '#333' : 'transparent',
            color: page === currentPage ? 'white' : '#333',
            border: 'none',
            fontSize: '16px',
            fontWeight: page === currentPage ? '600' : '400',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {page}
        </button>
      ))}
      {totalPages > 5 && (
        <>
          <span style={{ color: '#666', padding: '0 8px' }}>...</span>
          <button
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              color: '#333',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            {totalPages}
          </button>
        </>
      )}
    </div>
  );
}

export default function NewsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [showOlderYears, setShowOlderYears] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFilter = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter(i => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedThemes([]);
    setSelectedYears([]);
  };

  const totalSelected = selectedCategories.length + selectedThemes.length + selectedYears.length;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 5% 40px' }}>
        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          fontWeight: 'bold',
          color: 'black',
          letterSpacing: '0.1em',
        }}>
          ニュース
        </h1>

        {/* Breadcrumb */}
        <div style={{
          fontSize: '14px',
          color: '#666',
          marginTop: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid #333',
        }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
          <span style={{ margin: '0 8px' }}>-</span>
          <span>ニュース</span>
        </div>
      </section>

      {/* Topics Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 5%' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '40px',
        }}>
          トピックス
        </h2>

        {/* Featured News Item */}
        <Link
          href={featuredNews.href}
          className="group"
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start',
          }}
        >
          {/* Image */}
          <div style={{
            flex: '0 0 55%',
            aspectRatio: '16/9',
            backgroundColor: '#00a0a0',
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Placeholder design mimicking SmartHR 10th anniversary */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                left: '20px',
                bottom: '20px',
                width: '60px',
                height: '60px',
                backgroundColor: '#ff6b35',
                borderRadius: '50%',
              }} />
              <div style={{
                position: 'absolute',
                right: '30%',
                top: '20%',
                width: '80px',
                height: '80px',
                backgroundColor: '#333',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontSize: '12px', textAlign: 'center', lineHeight: 1.2 }}>
                  10周年<br/>特設サイト<br/>公開
                </span>
              </div>
              {/* Text overlay */}
              <div style={{
                position: 'absolute',
                left: '30px',
                top: '30px',
                color: 'white',
                fontSize: '14px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <span>0</span>
                  <span>→</span>
                  <span>1</span>
                  <span>→</span>
                  <span>10</span>
                  <span>→</span>
                </div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>SmartHR 10th Anniversary</div>
              </div>
              {/* Japanese text */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#333',
                fontSize: '28px',
                fontWeight: 'bold',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                letterSpacing: '0.1em',
              }}>
                人が、社会が、本当に欲しいもの
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, paddingTop: '10px' }}>
            {/* Date and Tags */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px',
              fontSize: '14px',
            }}>
              <span style={{ color: '#666' }}>{featuredNews.date}</span>
              {featuredNews.categories.map((cat, index) => (
                <span
                  key={index}
                  style={{
                    color: index === 0 ? '#333' : '#666',
                    textDecoration: index === 0 ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '500',
                color: '#333',
                lineHeight: 1.6,
                flex: 1,
              }}>
                <span className="relative inline">
                  {featuredNews.title}
                </span>
              </h3>

              {/* Arrow Button */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 50%, #4DD9D9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                }}
                className="group-hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Filter Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 5% 80px' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '40px',
        }}>
          ニュースを絞り込む
        </h2>

        {/* Filter Options */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '0',
        }}>
          {/* Category Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '24px 32px',
            borderBottom: '1px solid #e5e7eb',
          }}>
            <span style={{
              width: '120px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#333',
              flexShrink: 0,
            }}>
              カテゴリー
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {filterOptions.categories.map(cat => (
                <FilterPill
                  key={cat}
                  label={cat}
                  isSelected={selectedCategories.includes(cat)}
                  onClick={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                />
              ))}
            </div>
          </div>

          {/* Theme Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '24px 32px',
            borderBottom: '1px solid #e5e7eb',
          }}>
            <span style={{
              width: '120px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#333',
              flexShrink: 0,
            }}>
              テーマ
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {filterOptions.themes.map(theme => (
                <FilterPill
                  key={theme}
                  label={theme}
                  isSelected={selectedThemes.includes(theme)}
                  onClick={() => toggleFilter(theme, selectedThemes, setSelectedThemes)}
                />
              ))}
            </div>
          </div>

          {/* Year Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '24px 32px',
          }}>
            <span style={{
              width: '120px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#333',
              flexShrink: 0,
            }}>
              年別
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {filterOptions.years.map(year => (
                <FilterPill
                  key={year}
                  label={year}
                  isSelected={selectedYears.includes(year)}
                  onClick={() => toggleFilter(year, selectedYears, setSelectedYears)}
                />
              ))}
              <button
                onClick={() => setShowOlderYears(!showOlderYears)}
                style={{
                  padding: '10px 24px',
                  fontSize: '15px',
                  border: '1px solid #d1d5db',
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  color: '#333',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                それ以前を表示する
                <span style={{ fontSize: '18px' }}>{showOlderYears ? '−' : '+'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '48px',
        }}>
          {/* Search Button */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px 60px',
              backgroundColor: '#333',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              minWidth: '280px',
              transition: 'border-radius 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            281件を表示する
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Clear Button */}
          <button
            onClick={clearAllFilters}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px 60px',
              backgroundColor: 'white',
              color: '#333',
              fontSize: '16px',
              fontWeight: '500',
              border: '2px solid #333',
              borderRadius: '50px',
              cursor: 'pointer',
              minWidth: '200px',
              transition: 'border-radius 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            条件をクリア
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </section>

      {/* News List Section */}
      <section style={{ backgroundColor: 'white', padding: '0 5% 100px' }}>
        {/* Count */}
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '40px',
        }}>
          281件
        </h2>

        {/* News Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px 32px',
        }}>
          {newsItems.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={24} />
      </section>

      <Footer />
    </main>
  );
}
