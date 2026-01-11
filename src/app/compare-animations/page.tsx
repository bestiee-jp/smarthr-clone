'use client';

import Services1 from "@/components/Services1";
import Services2 from "@/components/Services2";
import Services3 from "@/components/Services3";
import Services4 from "@/components/Services4";
import Services5 from "@/components/Services5";
import Services6 from "@/components/Services6";
import Services7 from "@/components/Services7";

export default function CompareAnimations() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div style={{ padding: '40px 5%', backgroundColor: '#1f2937' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
          アニメーション比較
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '16px' }}>
          7種類のスライド切り替えアニメーションを比較できます。5秒ごとに自動で切り替わります。
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '60px' }}>
        <Services1 />
        <div style={{ height: '1px', backgroundColor: '#e5e7eb' }} />

        <Services2 />
        <div style={{ height: '1px', backgroundColor: '#e5e7eb' }} />

        <Services3 />
        <div style={{ height: '1px', backgroundColor: '#e5e7eb' }} />

        <Services4 />
        <div style={{ height: '1px', backgroundColor: '#e5e7eb' }} />

        <Services5 />
        <div style={{ height: '1px', backgroundColor: '#e5e7eb' }} />

        <Services6 />
        <div style={{ height: '1px', backgroundColor: '#e5e7eb' }} />

        <Services7 />
      </div>

      {/* Quick navigation */}
      <div style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        backgroundColor: 'white',
        padding: '12px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4dd9d9' }} title="1. フェード+スケール" />
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 550, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} title="2. スライド" />
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 1100, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#8b5cf6' }} title="3. 3Dフリップ" />
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 1650, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ec4899' }} title="4. 円形マスク" />
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 2200, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#06b6d4' }} title="5. ブラー" />
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 2750, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} title="6. パララックス" />
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 3300, behavior: 'smooth' }); }}
          style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f43f5e' }} title="7. スプリット" />
      </div>
    </main>
  );
}
