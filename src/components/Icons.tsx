interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function Compass({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function Building({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="9" y1="22" x2="9" y2="18" />
      <line x1="15" y1="22" x2="15" y2="18" />
      <rect x="8" y="6" width="3" height="3" rx="0.5" />
      <rect x="13" y="6" width="3" height="3" rx="0.5" />
      <rect x="8" y="12" width="3" height="3" rx="0.5" />
      <rect x="13" y="12" width="3" height="3" rx="0.5" />
    </svg>
  );
}

export function Strategy({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <path d="M2 12h4l3 -9l4 18l3 -9h6" />
    </svg>
  );
}

export function People({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <circle cx="17" cy="7" r="2" />
      <path d="M21 21v-1.5a3 3 0 0 0 -2 -2.83" />
    </svg>
  );
}

export function Lightbulb({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0 -4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

export function Handshake({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <path d="M11 17l-1 1a2.83 2.83 0 0 1 -4 0l-1 -1a2.83 2.83 0 0 1 0 -4l6 -6" />
      <path d="M13 7l1 -1a2.83 2.83 0 0 1 4 0l1 1a2.83 2.83 0 0 1 0 4l-6 6" />
      <line x1="2" y1="12" x2="6" y2="8" />
      <line x1="18" y1="16" x2="22" y2="12" />
    </svg>
  );
}

export function Globe({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function Shield({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <path d="M12 22s8 -4 8 -10V5l-8 -3 -8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function Target({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function Chart({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function GraduationCap({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <path d="M6 9.5v6a6 3 0 0 0 12 0v-6" />
      <line x1="22" y1="7" x2="22" y2="13" />
    </svg>
  );
}

export function ArrowRight({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Diamond({ size = 24, color = "currentColor", strokeWidth = 1 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ color, transition: "color 0.5s" }}>
      <path d="M6 3h12l4 6 -10 13L2 9z" />
      <path d="M2 9h20" />
      <path d="M10 3l-4 6 6 13 6 -13 -4 -6" />
    </svg>
  );
}
