// News data types and centralized data

/**
 * Full news article with all content
 */
export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string;
  image: string;
  imageType: string;
}

/**
 * News item displayed on the homepage News section
 */
export interface HomeNewsItem {
  slug: string;
  date: string;
  category: string;
  themes: string[];
  title: string;
  image: string;
}

/**
 * Featured news item displayed on the news page
 */
export interface FeaturedNewsItem {
  slug: string;
  date: string;
  categories: string[];
  title: string;
  image: string;
  href: string;
}

/**
 * News list item displayed on the news page
 */
export interface NewsListItem {
  id: number;
  slug: string;
  date: string;
  categories: string[];
  themes: string[];
  title: string;
  image: string;
  imageType: string;
  href: string;
}

/**
 * Filter options for news page
 */
export interface NewsFilterOptions {
  categories: string[];
  themes: string[];
  years: string[];
}

// Common footer sections for news articles
const bestteachAbout = `＜東大王の家庭教師「ベストティーチ」＞

東大王の家庭教師「ベストティーチ」は、「最高の先生の授業を」「単発から気軽に」受けられる、新しい家庭教師サービスです。
東大・早慶・医学部中心の厳選された優秀な教師陣から、ご要望に応じて志望校出身者・同じ塾の先輩などお子様にぴったりな先生をご紹介し、最短翌日に単発から受講が可能です。また、複数の先生を単発から試し、一番相性のよかった先生と定期的に契約することも可能です。`;

const bestieeAbout = `＜株式会社bestieeについて＞

株式会社bestieeは「学びと出会いに、ワクワクを」というミッションのもと、2024年3月に東大発のスタートアップとして設立されました。
東大・早慶などの優秀学生を対象とした就活イベントの企画・運営を行い、これまで累計4,000名以上の学生、25社以上の企業にご参加いただいています。
また、2026年5月にリリース予定のAI採用マッチングサービス「FastPass」を開発中です。
AIアバターとの面接練習データを活用し、企業と優秀学生をマッチング。登録学生の73.9%が東大・早慶以上、完全成果報酬型で導入・固定費0円のサービスで、現在先行申込を受付中です。`;

const companyInfo = `＜会社概要＞

会社名: 株式会社bestiee
設立日: 2024年3月6日
代表取締役: 後藤 弘（ごとう こう）
所在地: 〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C
資本金: 100万円
事業内容:
・教育サービス事業（家庭教師マッチング等）
・採用コンサルティング事業（就活イベント企画・運営）
・AI面接練習ツールの開発
会社HP: https://bestiee.co.jp/`;

// All news articles with full content (sorted by date, newest first)
export const newsArticles: NewsArticle[] = [
  {
    slug: 'ai-challengers-fes-2025',
    title: 'ハイクラスエンジニア学生向け就活イベント「AIチャレンジャーズフェス」を開催しました',
    date: '2025.12.21',
    category: 'イベント',
    content: `株式会社bestieeは、2025年12月21日に、東大・早慶・科学大などからAI活用に意欲的な学生150名を集めたキャリアイベント『AIチャレンジャーズフェス』を開催しました。元デジタル大臣の河野太郎氏や教育系YouTuberのヨビノリたくみ氏等、日本のDX・AI推進を牽引する豪華ゲストや、GMOインターネットグループ、PKSHA Technology、DeNAなどのトップ企業をお招きし、学生との「本気の対話」が行われました。参加学生からはイベント全体を通して95%の満足度を頂き、次世代のAI人材を生み出す場として好評を得ました。

＜AIチャレンジャーズフェスとは＞

『AIチャレンジャーズフェス』は、AIネイティブ世代のためのキャリアイベントです。これからの日本の未来を担う学生が、AI時代の第一線で活躍するゲストやIT企業から、今の時代に身につけるべきスキルやマインドセットを学ぶことを目的に開催されました。会場は、渋谷に位置する「GMO Yours・フクラス」にて行われ、基調講演から座談会まで、終始熱気に包まれたイベントとなりました。

＜参加学生のコメント＞

企業の方と密にお話しする時間が沢山あって大変満足です。（東京大学A.S.さん）

パネルディスカッションにおいて、様々なプロフェッショナルの目線から、AI時代に必要な能力や学生時代にすべきお話をいただけて大変勉強になりました。（東京科学大学I.K.さん）

非常に興味深い話を聞くことができ、企業に対する解像度も上がる良い機会だった。また参加したいです。（横浜国立大学N.S.さん）

＜出展企業のコメント＞

「想像以上に優秀な学生が集結しており、採用チーム一同唸らされました。ぜひ次回も参加させてください！」（メガベンチャー新卒採用担当）

＜「AIチャレンジャーズフェス」開催概要＞

日付：2025年12月21日（日）13:00～17:00
場所：GMO Yours・フクラス（東京都渋谷区道玄坂1丁目2番3号 渋谷フクラス 16階）
対象：AI・テクノロジーに関心のある27卒/28卒の大学生・大学院生（文理不問）
参加費：無料（事前選抜制）

${bestieeAbout}

${companyInfo}`,
    image: '/news/image3.png',
    imageType: 'event',
  },
  {
    slug: 'bestteach-line-app',
    title: '東大王の家庭教師「ベストティーチ」LINEアプリ版をリリースしました',
    date: '2025.06.01',
    category: 'プレスリリース',
    content: `東大王の家庭教師「ベストティーチ」はLINE上で授業予約からフィードバックまでが完結するWebアプリ版の提供を開始しました。授業のマッチング、先生・運営とのやりとり、予約履歴の確認など、すべてをLINE内で管理することができます。

スマートフォン1つで操作できる直感的な設計となっており、特に保護者の方からは「使いやすい」「管理が楽になった」といった声をいただいています。

もちろん、これまで通り先生の詳細なプロフィールを確認した上で、自分にぴったりの先生を選ぶことが可能です。利便性はそのままに、より身近に・より気軽に、質の高い家庭教師サービスをご利用いただける環境が整いました。

${bestteachAbout}

${bestieeAbout}

${companyInfo}`,
    image: '/news/image2.png',
    imageType: 'press',
  },
  {
    slug: 'bestteach-online-campaign-2025',
    title: '東大王の家庭教師「ベストティーチ」は、元東大王メンバーのオンライン授業を受けられるキャンペーンを実施しました',
    date: '2025.03.07',
    category: 'お知らせ',
    content: `株式会社bestieeは、クイズ番組「東大王」で活躍したメンバー（後藤弘・伊藤七海・大道麻優子）による、60分の指導と30分の学習相談を9900円で受けられる「東大王がオンラインで指導!?新学年応援キャンペーン」を実施。学年が上がるタイミングでの実施に、「新しい学年での勉強モチベーションが上がった！」との声を多数いただきました。

＜キャンペーン詳細＞

応募期間：2025年3月7日（金）～3月16日（日）
抽選結果発表：3月20日（木）
対象：小学生から高校生までの方
レベル：受験対策から基礎的な内容まで、どんな学力帯の方も大歓迎
当選人数：30名様
授業実施期間：2025年3月22日（土）～5月31日（土）
授業実施日：当選後に担当教師と調整
内容：東大王による授業60分と学習相談30分（オンライン）
応募方法：応募フォームの入力
料金：9900円（税込）
選考方法：抽選。結果は3/20（木）にメールにてお知らせ。

${bestteachAbout}

${bestieeAbout}

${companyInfo}`,
    image: '/news/image1.png',
    imageType: 'notice',
  },
  {
    slug: 'bestteach-new-members',
    title: '東大王の家庭教師「ベストティーチ」運営に、元東大王の伊藤七海と大道麻優子が加入しました',
    date: '2024.12.01',
    category: 'お知らせ',
    content: `株式会社bestieeに、『東大王』に出演していたメンバーの伊藤七海と大道麻優子が新たに加入しました。

＜伊藤七海（いとう ななうみ）＞

1999年6月21日生まれ　福井県出身
東京大学教育学部卒
TBS『東大王』に5年間出演。SAPIX講師経験や家庭教師経験を活かし、東大王の家庭教師「ベストティーチ」の単発授業キャンペーンにも参加した。
X：https://x.com/nanaumi110
Instagram：https://www.instagram.com/nanaumi110

＜大道麻優子（おおみち まゆこ）＞

2003年4月12日生まれ　埼玉県出身
東京大学農学部在学
TBS『東大王』に2年間出演。共通テスト模試全国1位の実績あり。
X：https://x.com/mayuko_o_michi
Instagram：https://www.instagram.com/mayuko_o_michi

＜伊藤七海・大道麻優子からのコメント＞

私たちは『東大王』という番組に出演していくなかで、様々な方々に「勉強のモチベーションが上がった」「東大王のようになるために勉強を頑張る」といった声をいただき、教育へのポジティブな影響を感じてきました。

『東大王』のレギュラー放送が終わってしまったことを受けて、今度はこのbestieeという会社から、新たに教育への良い働きかけができればと考えています！！

${bestteachAbout}

${bestieeAbout}

${companyInfo}`,
    image: '/news/image6.png',
    imageType: 'notice',
  },
  {
    slug: 'bestteach-free-lesson-campaign',
    title: '東大王の家庭教師「ベストティーチ」が、東大王(後藤弘・伊藤七海・大道麻優子)の"無料授業1年分"が当たるキャンペーンを実施',
    date: '2024.11.01',
    category: 'お知らせ',
    content: `株式会社bestieeは、クイズ番組「東大王」で活躍したメンバー（後藤弘・伊藤七海・大道麻優子）が、90分×12回の個別指導を無料で行うキャンペーンを実施。東大王メンバーならではの知識の広さと深さを活かした指導により、受験対策はもちろん、学問の面白さや知的好奇心も育む、質の高い学習機会を提供しました。

＜ご利用者様の声＞

この1年皆さまのご支援がなければ今の状態でいられなかったと思うくらい、親子共々大変お世話になりました。勉強を教えてもらう、ということだけではなく、先生方への憧れが勉強へのモチベーションにもなっていた気がします。本当に有り難うございます。

＜キャンペーン詳細＞

対象：小学生、中学生、高校生
対象地域：指定なし（対面でもオンラインでも受講可能）
参加予定メンバー：後藤弘・伊藤七海・大道麻優子
応募締切：2024年11月30日 23:59
応募方法：①Xの投稿をリポスト＆いいね　②公式ラインを登録

${bestteachAbout}

${bestieeAbout}

${companyInfo}`,
    image: '/news/image5.png',
    imageType: 'notice',
  },
  {
    slug: 'bestteach-toudaiou-campaign-2024',
    title: '東大王の家庭教師「ベストティーチ」が、東大王（後藤弘・伊藤七海）の授業を自宅で受けられるキャンペーンを実施',
    date: '2024.09.10',
    category: 'お知らせ',
    content: `株式会社bestieeは、クイズ番組『東大王』に出演のメンバー（後藤弘・伊藤七海）が直接ご自宅に訪問し、マンツーマン授業を行う「東大王が自宅で指導!?単発授業体験キャンペーン」を行いました。本キャンペーンでは、当選者15名様に、90分1万円の特別価格で東大王（後藤弘・伊藤七海）によるマンツーマン授業をご提供。「テレビで見ていた東大王がうちに？！」と大変反響をいただきました。

＜キャンペーン詳細＞

応募期間：2024年9月10日（火）～9月23日（月）
抽選結果発表：2024年9月25日（水）
対象：東京近郊にお住まいの小学生、中学生、高校生
レベル：受験対策から基礎的な内容まで、どんな学力帯の方も大歓迎です！
当選人数：15名様
授業実施期間：2024年9月27日（金）～10月31日（木）
授業実施日：当選後に担当教師と調整
応募方法：代表・後藤弘のアカウントをフォロー＆キャンペーン投稿をリポスト後、DMで送られてくるフォームを回答
料金：1万円（税込）/ 90分
選考方法：抽選。当選者は公式LINEから発表。

${bestteachAbout}

${bestieeAbout}

${companyInfo}`,
    image: '/news/image4.png',
    imageType: 'notice',
  },
];

// Helper function to get article by slug
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

// Helper function to get related articles (excluding current article)
export function getRelatedArticles(currentSlug: string, limit: number = 3): NewsArticle[] {
  return newsArticles
    .filter(article => article.slug !== currentSlug)
    .slice(0, limit);
}

// Homepage news items (latest 4 articles)
export const homeNewsItems: HomeNewsItem[] = newsArticles.slice(0, 4).map(article => ({
  slug: article.slug,
  date: article.date,
  category: article.category,
  themes: getArticleThemes(article),
  title: article.title,
  image: article.image,
}));

// Featured news on the news page (most recent article)
export const featuredNews: FeaturedNewsItem = {
  slug: newsArticles[0].slug,
  date: newsArticles[0].date,
  categories: [newsArticles[0].category],
  title: newsArticles[0].title,
  image: newsArticles[0].image,
  href: `/news/${newsArticles[0].slug}`,
};

// Helper to determine themes based on article content
export function getArticleThemes(article: NewsArticle): string[] {
  const themes: string[] = [];

  // 東大王の家庭教師「ベストティーチ」関連
  if (article.slug.includes('bestteach') || article.title.includes('ベストティーチ')) {
    themes.push('東大王の家庭教師「ベストティーチ」');
  }

  // AIチャレンジャーズフェス関連
  if (article.slug.includes('ai-challengers') || article.title.includes('AIチャレンジャーズ')) {
    themes.push('AIチャレンジャーズフェス');
  }

  // FastPass関連
  if (article.slug.includes('fastpass') || article.title.includes('FastPass')) {
    // FastPass meetup判定
    if (article.slug.includes('meetup') || article.title.includes('meetup')) {
      themes.push('FastPass meetup');
    } else {
      themes.push('FastPass');
    }
  }

  // どのテーマにも該当しない場合は「その他」
  if (themes.length === 0) {
    themes.push('その他');
  }

  return themes;
}

// News list items on the news page (all articles)
export const newsListItems: NewsListItem[] = newsArticles.map((article, index) => ({
  id: index + 1,
  slug: article.slug,
  date: article.date,
  categories: [article.category],
  themes: getArticleThemes(article),
  title: article.title,
  image: article.image,
  imageType: article.imageType,
  href: `/news/${article.slug}`,
}));

// Filter options for news page
export const newsFilterOptions: NewsFilterOptions = {
  categories: ['プレスリリース', 'お知らせ', 'イベント'],
  themes: ['FastPass', 'AIチャレンジャーズフェス', 'FastPass meetup', '東大王の家庭教師「ベストティーチ」', 'その他'],
  years: ['2026年', '2025年', '2024年'],
};
