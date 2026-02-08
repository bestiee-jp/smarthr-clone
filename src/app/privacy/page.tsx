'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useTranslation } from '@/hooks/useTranslation';

export default function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.privacy.title')}
        subtitle={t('pages.privacy.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('pages.privacy.title') },
        ]}
      />

      {/* Content Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 5%', flex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#333' }}>
          <p style={{ marginBottom: '24px' }}>
            株式会社bestiee（以下「当社」といいます。）は、事業活動を推進するにあたり、プライバシーの適切な保護の重要性と社会的責任を十分に認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関係法令を遵守します。また、当社およびその役職員は、業務にあたり以下の個人情報保護方針を遵守します。なお、本プライバシーポリシーにおいて、「個人情報」、「個人データ」および「保有個人データ」は、個人情報保護法の定義に従います。
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>1. 個人情報保護方針</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>1.1 個人情報の取扱い</h3>
          <p style={{ marginBottom: '16px' }}>当社は、個人情報の取得について、利用目的をできる限り特定し、適法かつ公正な手段によって取得を行います。また、個人情報の利用は、特定した利用目的の達成に必要な範囲内で行います。</p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>1.2 個人情報の適正な管理</h3>
          <p style={{ marginBottom: '16px' }}>当社は、個人情報の安全管理措置を講じ、個人情報への不正アクセスまたは個人情報の漏えい、滅失もしくは毀損の防止および是正に努めます。</p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>1.3 個人情報に関する相談・苦情のお問い合わせ</h3>
          <p style={{ marginBottom: '16px' }}>当社は、個人情報に関するお問い合わせや苦情に対し、適切に対応します。</p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>1.4 個人情報に関する法令等の遵守</h3>
          <p style={{ marginBottom: '16px' }}>当社は、個人情報を取り扱うに際し、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守します。</p>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>1.5 継続的な改善</h3>
          <p style={{ marginBottom: '16px' }}>当社は、個人情報保護に関する取り組みを継続的に見直し改善します。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>2. 個人情報の取得</h2>
          <p style={{ marginBottom: '16px' }}>当社は、以下の場合に個人情報を取得します。</p>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>当社のサービス利用に伴い、お客さまご自身にご入力いただく場合</li>
            <li>当社のサービス利用に伴い、当社がお客さまに関する情報を収集する場合</li>
            <li>お客さまから直接または書面等の媒体を通じてご提供いただく場合</li>
            <li>上記のほか、お客さまの同意を得た第三者から提供を受ける場合等、適法に取得する場合</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>3. 個人情報の利用目的</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>3.1 サービス利用者の情報</h3>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【FastPass・採用イベント（AIチャレンジャーズフェス、FastPass meetup等）利用者】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>ユーザー認証、ログイン管理</li>
            <li>サービスに関する通知、スカウト・オファーの配信</li>
            <li>AI面接機能の提供（音声認識、評価生成）</li>
            <li>AIモデルの学習・精度向上・チューニング</li>
            <li>企業への紹介・推薦資料としての利用</li>
            <li>マーケティング調査・統計・分析</li>
            <li>個人を特定できない統計データの作成</li>
            <li>お問い合わせ対応</li>
          </ul>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【東大王の家庭教師「ベストティーチ」利用者（保護者・生徒）】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>本人確認、ユーザー認証</li>
            <li>サービスの提供、先生とのマッチング</li>
            <li>AIによる相性診断・先生のレコメンデーション</li>
            <li>授業予約・決済処理</li>
            <li>先生への生徒情報の提供（授業実施のため）</li>
            <li>サービス改善、新機能開発</li>
            <li>お問い合わせ対応</li>
          </ul>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【企業のお客さま】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>契約手続、お客さま管理およびこれらに付随する業務の遂行</li>
            <li>サービスに関するご案内・お知らせの提供</li>
            <li>お問い合わせへの対応</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>3.2 採用応募者情報</h3>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>採用選考・日程等の連絡・採用結果の通知</li>
            <li>入社手続き実施</li>
            <li>上記目的に付随する目的</li>
          </ul>

          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '24px', marginBottom: '12px' }}>3.3 従業員・業務委託先情報</h3>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>労務管理・社内手続き、給与・報酬の支払い</li>
            <li>業務上の連絡</li>
            <li>官公庁への届出・報告等</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>4. 第三者提供</h2>
          <p style={{ marginBottom: '16px' }}>当社は、以下に掲げる場合を除き、事前にご本人の同意を得ることなく個人データを第三者に提供しません。</p>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>上記にかかわらず、当社は以下の場合に個人情報を第三者に提供することがあります。</p>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li><strong>企業への紹介・推薦：</strong>利用者がFastPass等を通じて求人に応募した場合、またはスカウト・オファーを承諾した場合、当該企業に対して利用者の氏名、経歴、AI面接の評価レポート等を提供します。</li>
            <li><strong>イベント開催企業への提供：</strong>採用イベントの実施に必要な範囲内で、参加者情報を開催企業に提供します。</li>
            <li><strong>先生への生徒情報提供：</strong>東大王の家庭教師「ベストティーチ」において、授業実施のために必要な範囲内で、先生に生徒情報を提供します。</li>
            <li><strong>統計データの提供：</strong>個人を特定できないように加工した統計情報を、提携企業に提供する場合があります。</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>5. 外部送信（情報収集モジュール）</h2>
          <p style={{ marginBottom: '16px' }}>当社は、サービスの提供、機能改善、およびAI機能の実装のために、以下の第三者サービスを利用しており、利用者の情報を当該サービス提供者へ送信しています。</p>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【AI関連サービス】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>OpenAI API：音声データの文字起こし、AI面接官の対話生成、回答内容の評価・分析</li>
            <li>Anthropic Claude API：AI対話生成、コンテンツ分析</li>
            <li>Google Gemini API：AI対話生成、コンテンツ分析</li>
          </ul>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【認証・通知関連】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>LINE Login / Messaging API：アカウント認証、メッセージ配信、スカウト通知</li>
          </ul>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【決済関連】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>Stripe：決済処理（東大王の家庭教師「ベストティーチ」）</li>
          </ul>

          <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '8px' }}>【分析・監視関連】</h4>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>Google Analytics：利用状況の分析、パフォーマンス改善</li>
            <li>Sentry（または同等の監視ツール）：エラー検知、バグ修正</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>6. 第三国への移転</h2>
          <p style={{ marginBottom: '16px' }}>当社のサービス（特にAI機能）を提供するために、利用者の情報が以下の第三国にあるサーバーに移転、処理される可能性があります。</p>
          <ul style={{ marginBottom: '16px', paddingLeft: '24px', listStyleType: 'disc' }}>
            <li>アメリカ合衆国（OpenAI, L.L.C.、Anthropic, PBC、Google LLC、Stripe, Inc. 等のサービスプロバイダーが所在）</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>7. 安全管理措置</h2>
          <p style={{ marginBottom: '16px' }}>当社は、個人データへの不正アクセスまたは個人データの漏えい、滅失または毀損の防止その他の個人データの安全管理のために、技術的および組織的に適切なセキュリティ対策を講じます。当社は個人データの保護を継続的・向上的に行っていくため、当社が定めた社内規程等を法令および社会規範の変化にあわせて見直し、改善をしていきます。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>8. 保有個人データの開示等</h2>
          <p style={{ marginBottom: '16px' }}>個人情報保護法の規定に基づき、ご本人から保有個人データの利用目的の通知、保有個人データの開示、内容の訂正、追加もしくは削除、または、利用の停止、消去もしくは第三者への提供の停止（以下「開示等」と総称します。）を請求することができます。開示等のご請求があった場合、当社は、ご本人からのご請求であることを確認のうえで、遅滞なく対応いたします。</p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>9. お問い合わせ窓口</h2>
          <p style={{ marginBottom: '16px' }}>
            株式会社bestiee 個人情報問合せ窓口<br />
            メールアドレス：info@bestiee.co.jp
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px', borderLeft: '4px solid var(--bestiee-blue)', paddingLeft: '12px' }}>10. プライバシーポリシーの変更</h2>
          <p style={{ marginBottom: '16px' }}>当社は、本プライバシーポリシーを随時変更できるものとします。重要な変更については、当社ウェブサイト上での通知または公表を行います。</p>

          <div style={{ marginTop: '60px', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <p style={{ marginBottom: '8px' }}><strong>改定履歴</strong></p>
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
