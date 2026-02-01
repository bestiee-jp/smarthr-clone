'use client';

import { useState } from 'react';
import Link from "next/link";
import { useIsMobile } from '@/hooks/useIsMobile';
import type { NewsMetadata } from "@/lib/news";

// Filter options
const filterOptions = {
  categories: ['プレスリリース', 'お知らせ', 'イベント'],
  themes: ['寿司就活', 'AIチャレンジャーズフェス', 'FastPass', 'FastPass meetup', 'ベストティーチ', 'その他'],
  years: ['2026年', '2025年', '2024年'],
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
        fontWeight: isSelected ? '600' : '400',
      }}
    >
      {label}
    </button>
  );
}

// Select All / Deselect All Button Component
function SelectAllButton({
  isAllSelected,
  onSelectAll,
  onDeselectAll,
}: {
  isAllSelected: boolean;
  onSelectAll: () => void;
  onDeselectAll: () => void;
}) {
  return (
    <button
      onClick={isAllSelected ? onDeselectAll : onSelectAll}
      style={{
        padding: '8px 16px',
        fontSize: '13px',
        border: '1px solid #9ca3af',
        borderRadius: '4px',
        backgroundColor: 'white',
        color: '#666',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        marginLeft: '8px',
      }}
    >
      {isAllSelected ? '全解除' : '全選択'}
    </button>
  );
}

// News Card Image Component
function NewsCardImage({ image, contain = false }: { image: string; contain?: boolean }) {
  return (
    <img
      src={image}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: contain ? 'contain' : 'cover',
      }}
    />
  );
}

interface NewsListItem extends NewsMetadata {
  id: number;
  categories: string[];
  themes: string[];
  href: string;
}

// News Card Component
function NewsCard({ item, isMobile }: { item: NewsListItem; isMobile: boolean }) {
  return (
    <Link href={item.href} className="group block">
      {/* Image */}
      <div style={{
        aspectRatio: '16/10',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
      }}>
        <NewsCardImage image={item.image} />
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
          gap: isMobile ? '4px' : '6px',
          flexWrap: 'wrap',
        }}>
          <span style={{ color: '#666', fontSize: isMobile ? '11px' : '12px' }}>{item.date}</span>
          {item.categories.slice(0, 1).map((cat, index) => (
            <span
              key={`cat-${index}`}
              style={{
                color: 'white',
                backgroundColor: 'var(--bestiee-cyan)',
                padding: isMobile ? '2px 8px' : '3px 10px',
                borderRadius: '50px',
                fontSize: isMobile ? '10px' : '11px',
                fontWeight: '500',
              }}
            >
              {cat}
            </span>
          ))}
          {item.themes.slice(0, 1).map((theme, index) => (
            <span
              key={`theme-${index}`}
              style={{
                color: 'white',
                backgroundColor: '#2563eb',
                padding: isMobile ? '2px 8px' : '3px 10px',
                borderRadius: '50px',
                fontSize: isMobile ? '10px' : '11px',
                fontWeight: '500',
              }}
            >
              {theme}
            </span>
          ))}
        </div>

        {/* Arrow Button */}
        <div
          style={{
            width: isMobile ? '28px' : '36px',
            height: isMobile ? '28px' : '36px',
            borderRadius: '50%',
            background: 'var(--bestiee-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
          }}
          className="group-hover:scale-110"
        >
          <svg width={isMobile ? "12" : "16"} height={isMobile ? "12" : "16"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: isMobile ? '14px' : '15px',
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
function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
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
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          color: currentPage === 1 ? '#ccc' : '#333',
          border: 'none',
          fontSize: '16px',
          cursor: currentPage === 1 ? 'default' : 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        ‹
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
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
            onClick={() => onPageChange(totalPages)}
            style={{
              width: totalPages === currentPage ? '40px' : '36px',
              height: totalPages === currentPage ? '40px' : '36px',
              borderRadius: '50%',
              backgroundColor: totalPages === currentPage ? '#333' : 'transparent',
              color: totalPages === currentPage ? 'white' : '#333',
              border: 'none',
              fontSize: '16px',
              fontWeight: totalPages === currentPage ? '600' : '400',
              cursor: 'pointer',
            }}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          color: currentPage === totalPages ? '#ccc' : '#333',
          border: 'none',
          fontSize: '16px',
          cursor: currentPage === totalPages ? 'default' : 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        ›
      </button>
    </div>
  );
}

interface NewsListClientProps {
  newsItems: NewsMetadata[];
}

export default function NewsListClient({ newsItems }: NewsListClientProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();

  // Convert NewsMetadata to NewsListItem format
  const newsListItems: NewsListItem[] = newsItems.map((item, index) => ({
    ...item,
    id: index + 1,
    categories: [item.category],
    themes: [item.theme],
    href: `/news/${item.slug}`,
  }));

  const featuredNews = newsListItems[0];

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
    // Reset to page 1 when filter changes
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedThemes([]);
    setSelectedYears([]);
    setCurrentPage(1);
  };

  // Select all / Deselect all helpers
  const selectAllCategories = () => {
    setSelectedCategories([...filterOptions.categories]);
    setCurrentPage(1);
  };
  const deselectAllCategories = () => {
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  const selectAllThemes = () => {
    setSelectedThemes([...filterOptions.themes]);
    setCurrentPage(1);
  };
  const deselectAllThemes = () => {
    setSelectedThemes([]);
    setCurrentPage(1);
  };

  const selectAllYears = () => {
    setSelectedYears([...filterOptions.years]);
    setCurrentPage(1);
  };
  const deselectAllYears = () => {
    setSelectedYears([]);
    setCurrentPage(1);
  };

  // Filter news items based on selected filters
  const filteredNewsItems = newsListItems.filter(item => {
    // Category filter
    if (selectedCategories.length > 0) {
      const hasCategory = item.categories.some(cat => selectedCategories.includes(cat));
      if (!hasCategory) return false;
    }

    // Theme filter
    if (selectedThemes.length > 0) {
      const hasTheme = item.themes?.some(theme => selectedThemes.includes(theme));
      if (!hasTheme) return false;
    }

    // Year filter
    if (selectedYears.length > 0) {
      const itemYear = item.date.split('.')[0] + '年'; // Extract year from "2025.12.21" and add "年"
      if (!selectedYears.includes(itemYear)) return false;
    }

    return true;
  });

  // Calculate total pages based on items per page
  const itemsPerPage = isMobile ? 6 : 9;
  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);

  // Get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageItems = filteredNewsItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {/* Topics Section */}
      <section style={{ backgroundColor: 'white', padding: isMobile ? '40px 5%' : '60px 5%' }}>
        <h2 style={{
          fontSize: isMobile ? '20px' : '24px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: isMobile ? '24px' : '40px',
        }}>
          トピックス
        </h2>

        {/* Featured News Item */}
        {featuredNews && (
          <Link
            href={featuredNews.href}
            className="group"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '20px' : '40px',
              alignItems: 'flex-start',
            }}
          >
            {/* Image */}
            <div style={{
              flex: isMobile ? undefined : '0 0 55%',
              width: isMobile ? '100%' : undefined,
              aspectRatio: '16/9',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <NewsCardImage image={featuredNews.image} contain />
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingTop: isMobile ? '0' : '10px' }}>
              {/* Date and Tags */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                marginBottom: '16px',
                flexWrap: 'wrap',
              }}>
                <span style={{ color: '#666', fontSize: isMobile ? '13px' : '14px' }}>{featuredNews.date}</span>
                {featuredNews.categories.slice(0, 1).map((cat, index) => (
                  <span
                    key={`cat-${index}`}
                    style={{
                      color: 'white',
                      backgroundColor: 'var(--bestiee-cyan)',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: isMobile ? '11px' : '12px',
                      fontWeight: '500',
                    }}
                  >
                    {cat}
                  </span>
                ))}
                {featuredNews.themes.slice(0, 1).map((theme, index) => (
                  <span
                    key={`theme-${index}`}
                    style={{
                      color: 'white',
                      backgroundColor: '#2563eb',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: isMobile ? '11px' : '12px',
                      fontWeight: '500',
                    }}
                  >
                    {theme}
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
                  fontSize: isMobile ? '18px' : '20px',
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
                    width: isMobile ? '40px' : '48px',
                    height: isMobile ? '40px' : '48px',
                    borderRadius: '50%',
                    background: 'var(--bestiee-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                  }}
                  className="group-hover:scale-110"
                >
                  <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Filter Section */}
      <section style={{ backgroundColor: 'white', padding: isMobile ? '40px 5% 60px' : '60px 5% 80px' }}>
        <h2 style={{
          fontSize: isMobile ? '20px' : '24px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: isMobile ? '24px' : '40px',
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
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            padding: isMobile ? '16px 20px' : '24px 32px',
            borderBottom: '1px solid #e5e7eb',
            gap: isMobile ? '12px' : '0',
          }}>
            <span style={{
              width: isMobile ? 'auto' : '120px',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '500',
              color: '#333',
              flexShrink: 0,
            }}>
              カテゴリー
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {filterOptions.categories.map(cat => (
                <FilterPill
                  key={cat}
                  label={cat}
                  isSelected={selectedCategories.includes(cat)}
                  onClick={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                />
              ))}
              <SelectAllButton
                isAllSelected={selectedCategories.length === filterOptions.categories.length}
                onSelectAll={selectAllCategories}
                onDeselectAll={deselectAllCategories}
              />
            </div>
          </div>

          {/* Theme Row */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            padding: isMobile ? '16px 20px' : '24px 32px',
            borderBottom: '1px solid #e5e7eb',
            gap: isMobile ? '12px' : '0',
          }}>
            <span style={{
              width: isMobile ? 'auto' : '120px',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '500',
              color: '#333',
              flexShrink: 0,
            }}>
              テーマ
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {filterOptions.themes.map(theme => (
                <FilterPill
                  key={theme}
                  label={theme}
                  isSelected={selectedThemes.includes(theme)}
                  onClick={() => toggleFilter(theme, selectedThemes, setSelectedThemes)}
                />
              ))}
              <SelectAllButton
                isAllSelected={selectedThemes.length === filterOptions.themes.length}
                onSelectAll={selectAllThemes}
                onDeselectAll={deselectAllThemes}
              />
            </div>
          </div>

          {/* Year Row */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            padding: isMobile ? '16px 20px' : '24px 32px',
            gap: isMobile ? '12px' : '0',
          }}>
            <span style={{
              width: isMobile ? 'auto' : '120px',
              fontSize: isMobile ? '14px' : '16px',
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
              <SelectAllButton
                isAllSelected={selectedYears.length === filterOptions.years.length}
                onSelectAll={selectAllYears}
                onDeselectAll={deselectAllYears}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          gap: isMobile ? '16px' : '20px',
          marginTop: isMobile ? '32px' : '48px',
        }}>
          {/* Search Button */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: isMobile ? '16px 40px' : '20px 60px',
              backgroundColor: '#333',
              color: 'white',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '500',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              minWidth: isMobile ? 'auto' : '280px',
              transition: 'border-radius 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
            onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
          >
            {filteredNewsItems.length}件を表示する
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
              padding: isMobile ? '16px 40px' : '20px 60px',
              backgroundColor: 'white',
              color: '#333',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '500',
              border: '2px solid #333',
              borderRadius: '50px',
              cursor: 'pointer',
              minWidth: isMobile ? 'auto' : '200px',
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
      <section style={{ backgroundColor: 'white', padding: isMobile ? '0 5% 60px' : '0 5% 100px' }}>
        {/* Count */}
        <h2 style={{
          fontSize: isMobile ? '28px' : '36px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: isMobile ? '24px' : '40px',
        }}>
          {filteredNewsItems.length}件
        </h2>

        {/* News Grid */}
        {filteredNewsItems.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px 16px' : '40px 32px',
          }}>
            {currentPageItems.map(item => (
              <NewsCard key={item.id} item={item} isMobile={isMobile} />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#666',
          }}>
            <p style={{ fontSize: isMobile ? '16px' : '18px', marginBottom: '16px' }}>
              条件に一致するニュースがありません
            </p>
            <button
              onClick={clearAllFilters}
              style={{
                padding: '12px 24px',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              フィルターをクリア
            </button>
          </div>
        )}

        {/* Pagination - only show if more than 1 page */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </>
  );
}
