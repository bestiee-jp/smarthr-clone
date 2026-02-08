// Service data types and centralized data

/**
 * Service item data structure
 */
export interface ServiceItem {
  name: string;
  description: string;
  image: string;
}

/**
 * Service category with its services
 */
export interface ServiceCategory {
  id: string;
  label: string;
  services: ServiceItem[];
}

// Recruitment support services (採用支援)
export const recruitmentServices: ServiceItem[] = [
  {
    name: 'FastPass',
    description: '「FastPass」は、AI面接練習データを活用した、ハイクラス学生特化の採用マッチングサービスです。AIが解析した面接データをもとに、エージェントが貴社に最適な学生を紹介します。',
    image: '/images/fastpass.webp',
  },
  {
    name: 'AIチャレンジャーズフェス',
    description: '「AIチャレンジャーズフェス」は、日本で最も「AIに熱中」しているハイクラス学生150名が集まる大規模採用イベントです。コードを書きながら事業も語れる、AI時代の企業競争力を担う人材と出会えます。',
    image: '/images/service-aicf.jpg',
  },
  {
    name: 'FastPass meetup',
    description: '「FastPass meetup」は、AIが厳選した成長意欲の高いハイクラス学生と、少人数でじっくり向き合える採用イベントです。大規模イベントでは難しい、深い対話と相互理解を実現します。',
    image: '/images/service-meetup.jpg',
  },
];

// Education services (教育)
export const educationServices: ServiceItem[] = [
  {
    name: '東大王の家庭教師「ベストティーチ」',
    description: '東大王の家庭教師「ベストティーチ」は、AIがお子さまにぴったりの先生を提案してくれる家庭教師サービスです。出身塾や出身高、趣味など350以上の項目から指導経験豊富な先生を選べて、単発1回からお試しできます。',
    image: '/images/service-bestteach.webp',
  },
];

// All service categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'recruitment',
    label: '採用支援',
    services: recruitmentServices,
  },
  {
    id: 'education',
    label: '教育',
    services: educationServices,
  },
];

// Service page introduction text
export const serviceIntroduction = {
  tagline: 'AIの力で、「出会い」と「学び」を変えていく。',
};
