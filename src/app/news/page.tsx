import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getAllNewsMetadata } from "@/lib/news";
import NewsListClient from "./NewsListClient";

export const dynamic = 'force-static';

export const metadata = {
  title: 'ニュース | bestiee',
  description: 'bestieeの最新ニュース、プレスリリース、イベント情報をお届けします。',
};

export default function NewsPage() {
  const newsItems = getAllNewsMetadata();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="ニュース"
        subtitle="News"
        breadcrumb={[
          { label: 'トップ', href: '/' },
          { label: 'ニュース' },
        ]}
      />

      <NewsListClient newsItems={newsItems} />

      <Footer />
    </main>
  );
}
