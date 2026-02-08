'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useTranslation } from '@/hooks/useTranslation';

export default function SecurityPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.security.title')}
        subtitle={t('pages.security.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('pages.security.title') },
        ]}
      />

      {/* Content Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 5%', flex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#333' }}>
          <p style={{ marginBottom: '24px' }}>
            株式会社bestiee（以下「当社」といいます。）は、「学びと出会いに、ワクワクを」をミッションに掲げ、AI面接練習・採用マッチングサービス「FastPass」、採用イベント、東大王の家庭教師「ベストティーチ」等を提供しています。
          </p>
          <p style={{ marginBottom: '24px' }}>
            当社は、AIを活用したサービスを提供する事業者として、情報セキュリティが重要な経営課題であることを認識し、お客様、お取引先様からお預かりした情報資産および当社の情報資産をサイバー攻撃などあらゆる脅威から守り、情報資産の機密性、完全性、可用性の維持・向上に努めます。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>1. 情報セキュリティ管理体制</h2>
          <p style={{ marginBottom: '16px' }}>当社は、経営層が中心となり、必要な規程を定めるなどして情報セキュリティ体制を確立します。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>2. リスクアセスメント</h2>
          <p style={{ marginBottom: '16px' }}>セキュリティリスクを評価する基準を定めて、当社が保有する情報資産について定期的な評価を実施し、評価結果に基づいて必要な対策を計画的に実行します。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>3. 法令・契約遵守</h2>
          <p style={{ marginBottom: '16px' }}>情報セキュリティに関係する法令、契約上の義務、およびその他の社会的規範を遵守します。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>4. セキュリティ関連情報の収集</h2>
          <p style={{ marginBottom: '16px' }}>最新の脅威情報、技術情報等を継続的に収集し、適時に新たなリスクに対応しつつセキュリティ対策を向上させるよう努めます。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>5. 教育・訓練</h2>
          <p style={{ marginBottom: '16px' }}>当社のすべての従業者に対して、本方針、規程、セキュリティ関連情報等についての随時周知を行うとともに、定期的に教育を実施します。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>6. 安全な商品・サービス</h2>
          <p style={{ marginBottom: '16px' }}>商品・サービスの企画、設計、開発、運用等のすべての段階において情報セキュリティを確保することにより、安全な商品・サービスを提供するよう努めます。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>7. インシデント対応体制</h2>
          <p style={{ marginBottom: '16px' }}>セキュリティインシデントが発生し得ることを認識し、対応手順を確立して、有事の際には、速やかに検知・分析、封じ込め・根絶・復旧、関係各所への連絡等の対応に努めるとともに、適切な再発防止を行います。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>8. 委託先管理</h2>
          <p style={{ marginBottom: '16px' }}>当社の業務を外部に委託する場合は、秘密保持契約の締結、選定時および定期的なチェック等を通じて委託先を適切に監督し、委託先が当社と同等以上のセキュリティレベルを維持するよう努めます。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>9. 点検・監査</h2>
          <p style={{ marginBottom: '16px' }}>情報セキュリティに関する自己点検、監査を定期的に行い、情報セキュリティ体制と情報資産の取り扱いについて、継続的な改善を実施します。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>10. 事業継続</h2>
          <p style={{ marginBottom: '16px' }}>災害、事故、障害、その他セキュリティ上の問題のサービスおよび事業活動への影響を最小化する対策を取り、可能な限り早期に復旧するための計画を策定して、有事の際にも事業の継続を図ります。</p>

          <div style={{ marginTop: '60px', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px' }}>2026年1月25日 制定</p>
            <p style={{ marginBottom: '4px' }}>株式会社bestiee</p>
            <p>代表取締役 後藤弘</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
