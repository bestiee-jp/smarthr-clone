// Common Icon Components
// Shared across multiple components to avoid duplication

interface ArrowIconProps {
  size?: number;
}

/**
 * Arrow Icon - Used for buttons and links
 * Used in: News, ContactSection, CompanyLinks, service/page, company/page
 */
export function ArrowIcon({ size = 20 }: ArrowIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

interface ArrowCircleIconProps {
  hover?: boolean;
  size?: number;
}

/**
 * Arrow Icon in Circle - Used for news item links
 * Used in: News
 */
export function ArrowCircleIcon({ hover = false, size = 40 }: ArrowCircleIconProps) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: hover ? 'var(--bestiee-cyan)' : 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s',
      }}
    >
      <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}

interface ExternalLinkIconProps {
  size?: number;
}

/**
 * External Link Icon - Used for external links
 * Used in: ServicesMercari, service/page, Footer
 */
export function ExternalLinkIcon({ size = 16 }: ExternalLinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  );
}
