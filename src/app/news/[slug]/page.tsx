import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getNewsArticle, getRelatedArticles, getAllNewsSlugs, type NewsArticle } from "@/lib/news";
import NewsArticleClient from "./NewsArticleClient";

export const dynamic = 'force-static';

// Generate static params for all news articles
export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return { title: '記事が見つかりません | bestiee' };
  }

  return {
    title: `${article.title} | bestiee`,
    description: article.content.substring(0, 160),
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  // Handle article not found
  if (!article) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '80px 5%' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>記事が見つかりません</h1>
          <p style={{ color: '#666', marginBottom: '32px' }}>お探しの記事は存在しないか、削除された可能性があります。</p>
          <Link
            href="/news"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              backgroundColor: '#333',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
            }}
          >
            ニュース一覧へ戻る
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="ニュース"
        subtitle="News"
        breadcrumb={[
          { label: 'トップ', href: '/' },
          { label: 'ニュース', href: '/news' },
          { label: article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title },
        ]}
      />

      <NewsArticleClient article={article} relatedArticles={relatedArticles} />

      <Footer />
    </main>
  );
}
