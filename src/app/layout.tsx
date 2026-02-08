import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Sans_SC, Sacramento, Pacifico, Dancing_Script, Great_Vibes, Satisfy } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HydrationHandler from "@/components/HydrationHandler";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: ["400"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "bestiee | 学びと出会いに、ワクワクを。",
  description: "株式会社bestiee - 学びと出会いに、ワクワクを。AI面接練習サービス「FastPass」や東大王の家庭教師「ベストティーチ」を運営。",
  openGraph: {
    title: "bestiee | 学びと出会いに、ワクワクを。",
    description: "株式会社bestiee - 学びと出会いに、ワクワクを。",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "bestiee - 学びと出会いに、ワクワクを。",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bestiee | 学びと出会いに、ワクワクを。",
    description: "株式会社bestiee - 学びと出会いに、ワクワクを。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSansSC.variable} ${sacramento.variable} ${pacifico.variable} ${dancingScript.variable} ${greatVibes.variable} ${satisfy.variable} antialiased`}>
        <HydrationHandler />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
