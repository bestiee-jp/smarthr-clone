import newsData from './news-data.json';

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  theme: string;
  content: string;
  image: string;
  imageType: string;
}

export interface NewsMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  theme: string;
  image: string;
  imageType: string;
}

const articles: NewsArticle[] = newsData as NewsArticle[];

/**
 * Get all news article slugs
 */
export function getAllNewsSlugs(): string[] {
  return articles.map(article => article.slug);
}

/**
 * Get a single news article by slug
 */
export function getNewsArticle(slug: string): NewsArticle | null {
  return articles.find(article => article.slug === slug) || null;
}

/**
 * Get all news articles sorted by date (newest first)
 */
export function getAllNewsArticles(): NewsArticle[] {
  return [...articles];
}

/**
 * Get news metadata only (for list pages)
 */
export function getAllNewsMetadata(): NewsMetadata[] {
  return articles.map(({ slug, title, date, category, theme, image, imageType }) => ({
    slug,
    title,
    date,
    category,
    theme,
    image,
    imageType,
  }));
}

/**
 * Get related articles (excluding current)
 * Priority: same theme > same category > newest
 */
export function getRelatedArticles(currentSlug: string, limit: number = 3): NewsArticle[] {
  const currentArticle = getNewsArticle(currentSlug);
  if (!currentArticle) {
    return articles.slice(0, limit);
  }

  const otherArticles = articles.filter(article => article.slug !== currentSlug);

  // Score articles by relevance
  const scored = otherArticles.map(article => {
    let score = 0;
    if (article.theme === currentArticle.theme) score += 2;
    if (article.category === currentArticle.category) score += 1;
    return { article, score };
  });

  // Sort by score (desc), then by date (newest first)
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const dateA = a.article.date.replace(/\./g, '-');
    const dateB = b.article.date.replace(/\./g, '-');
    return dateB.localeCompare(dateA);
  });

  return scored.slice(0, limit).map(s => s.article);
}
