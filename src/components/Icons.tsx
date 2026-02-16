interface IconProps {
  size?: number;
  color?: string;
}

export function ArrowRight({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Shield({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M12 2l8 4v6c0 5.25-3.38 8.24-8 10-4.62-1.76-8-4.75-8-10V6l8-4z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Crown({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M2 20h20M4 17l1-12 5 5 2-6 2 6 5-5 1 12H4z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Hotel-specific icons */

export function HotelBed({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M3 7v11M21 7v11M3 18h18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11h18v3H3v-3z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 11V8a1 1 0 011-1h3a1 1 0 011 1v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ConciergeBell({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M2 18h20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M4 18c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 10V7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="6" r="1" stroke="currentColor" strokeWidth="1" />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function KeyIcon({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <circle cx="8" cy="15" r="5" stroke="currentColor" strokeWidth="1" />
      <path d="M11.5 11.5L21 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M18 2h3v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7l2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function Clipboard({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function TrendingUp({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M22 7l-8.5 8.5-5-5L2 17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7h6v6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UserCheck({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="1" />
      <path d="M17 11l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Award({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Building({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M3 22V6l9-4 9 4v16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 22h18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M9 22v-4h6v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10h1M12 10h1M16 10h1M8 14h1M12 14h1M16 14h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Globe({ size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
