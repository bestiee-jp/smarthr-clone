'use client';

interface SectionHeaderProps {
  title: string;
  withBorder?: boolean;
  padding?: string;
  id?: string;
}

export default function SectionHeader({
  title,
  withBorder = false,
  padding = '20px 5%',
  id,
}: SectionHeaderProps) {
  return (
    <div id={id} style={withBorder ? { borderBottom: '1px solid #e5e7eb' } : undefined}>
      <div
        className="flex items-center"
        style={{
          padding,
          gap: '16px'
        }}
      >
        <div style={{ width: '4px', height: '28px', background: 'var(--bestiee-gradient-vertical)' }}></div>
        <span style={{ color: 'black', fontSize: '22px', letterSpacing: '0.1em', fontWeight: '500' }}>{title}</span>
      </div>
    </div>
  );
}
