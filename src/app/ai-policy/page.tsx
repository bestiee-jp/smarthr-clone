'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useTranslation } from '@/hooks/useTranslation';

export default function AIPolicyPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.aiPolicy.title')}
        subtitle={t('pages.aiPolicy.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('pages.aiPolicy.title') },
        ]}
      />

      {/* Content Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 5%', flex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#333' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>前文</h2>
          <p style={{ marginBottom: '16px' }}>
            株式会社bestieeは、「学びと出会いに、ワクワクを」をミッションに掲げ、人生の分岐点に立つ人々の「不安」を「熱狂」へ、「退屈」を「期待」へと変えていくことを目指しています。
          </p>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AI面接練習・採用マッチングサービス「FastPass」、AIを活用した東大王の家庭教師「ベストティーチ」など、AIを事業の中核に据えたサービスを提供しています。AIの力を活用することで、就職活動や学習における一人ひとりの可能性を最大限に引き出し、より良い出会いと成長の機会を創出することを目指しています。
          </p>
          <p style={{ marginBottom: '24px' }}>
            私たちは、AIの健全な発展に貢献するとともに、以下のポリシーのもとで、責任あるAIの技術開発・利用に取り組んでまいります。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>1. 人間中心の原則</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AIを活用したサービスの企画・開発・提供において、常に人間を中心に考えることを第一の原則としています。AIは人間の意思決定を補助し、可能性を拡張する役割を担います。
          </p>
          <p style={{ marginBottom: '16px' }}>
            FastPassにおけるAI面接練習は、学生が自身の強みや課題を発見し、成長するためのツールであり、最終的な判断や選択は常に人間が行います。私たちは、AIを通じて人々がより自分らしいキャリアや学びを実現できるよう支援していきます。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>2. 教育・リテラシーの原則</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AI活用に関する技術の進歩、社会への影響・課題について日頃から情報収集を行い、適切なサービス開発に努めます。また、AIを活用したサービスの企画・開発・提供を行うにあたって、AIの正確な理解と、社会的に正しい利用ができる知識・倫理観を持った人材を育成してまいります。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>3. プライバシー保護の原則</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AIを活用したサービスの企画・開発・提供において、個人情報保護法をはじめとする関係法令を遵守し、お客様のデータを適切に取り扱います。AI面接で取得する音声データや対話内容、学習データなどのセンシティブな情報については、特に慎重に取り扱い、サービスの企画・設計段階からプライバシー保護を意識したサービス開発に取り組みます。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>4. セキュリティ確保の原則</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AIの利活用に伴う個人情報の漏えいといったセキュリティリスクを防ぎ、安心してサービスをご利用いただくため、適切な安全管理措置を施し、万全な情報管理に努めます。また、AI利用のリスク評価を常に行い、リスクに応じた適切なセキュリティ対策を実施することで、サイバーセキュリティリスクの防止に努めてまいります。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>5. 公平性の尊重</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AIを活用したサービスの企画・開発・提供において、すべての個人が公平に扱われるよう留意します。AI面接の評価やマッチングにおいて、性別、年齢、出身地、学歴などによる不当な差別が生じないよう、データの偏りを定期的に確認し、必要に応じて修正するなど、公平性を意識してAIを利活用します。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>6. 透明性と説明責任の原則</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、AIの判断根拠は透明であるべきだと考えます。AI面接の評価やフィードバックについて、その根拠をできる限り明確に説明できるよう努めます。また、AIの限界についても誠実に伝え、ユーザーがAIの出力を適切に理解し活用できるよう支援します。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>7. 継続的な改善</h2>
          <p style={{ marginBottom: '16px' }}>
            私たちは、本ポリシーを策定するに留まらず、テクノロジーの進歩、社会情勢や人々の生活の変化、AIに関する議論の発展や規制の整備などを踏まえ、本ポリシーを柔軟に見直し、より良いものへと発展させていきます。
          </p>

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
