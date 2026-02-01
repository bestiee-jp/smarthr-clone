import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsDirectory = path.join(process.cwd(), 'content/news');

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

/**
 * Get all news article slugs
 */
export function getAllNewsSlugs(): string[] {
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md') && !fileName.startsWith('_'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

/**
 * Get a single news article by slug
 */
export function getNewsArticle(slug: string): NewsArticle | null {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      category: data.category || '',
      theme: data.theme || 'その他',
      content: content,
      image: data.image || '/news/default.png',
      imageType: data.imageType || 'notice',
    };
  } catch {
    return null;
  }
}

/**
 * Get all news articles sorted by date (newest first)
 */
export function getAllNewsArticles(): NewsArticle[] {
  const slugs = getAllNewsSlugs();
  const articles = slugs
    .map(slug => getNewsArticle(slug))
    .filter((article): article is NewsArticle => article !== null);

  // Sort by date (newest first)
  return articles.sort((a, b) => {
    const dateA = a.date.replace(/\./g, '-');
    const dateB = b.date.replace(/\./g, '-');
    return dateB.localeCompare(dateA);
  });
}

/**
 * Get news metadata only (for list pages)
 */
export function getAllNewsMetadata(): NewsMetadata[] {
  return getAllNewsArticles().map(({ slug, title, date, category, theme, image, imageType }) => ({
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
    return getAllNewsArticles().slice(0, limit);
  }

  const otherArticles = getAllNewsArticles().filter(article => article.slug !== currentSlug);

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
