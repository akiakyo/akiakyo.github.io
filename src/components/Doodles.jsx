// hand-drawn svg bits. they all use currentColor so they follow the ink color.
// paths use pathLength="1" so css can draw them on (see .draw in styles.css).
// pass style={{ '--draw-d': '1s' }} to delay the drawing.

export function RoughFilter() {
  // shared filter that makes straight borders wobble like pen strokes
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
    </svg>
  );
}

export function Scribble({ className = '', style }) {
  return (
    <svg className={`draw ${className}`} style={style} viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d="M3 13 C 60 5, 110 17, 160 9 S 250 6, 297 11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path pathLength="1" d="M18 17 C 80 11, 150 18, 280 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export function CurlyArrow({ className = '', style }) {
  return (
    <svg className={`draw ${className}`} style={style} viewBox="0 0 120 90" aria-hidden="true">
      <path pathLength="1" d="M8 12 C 40 4, 70 20, 58 42 C 50 58, 30 48, 42 36 C 56 22, 96 40, 104 76" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path pathLength="1" d="M92 70 L 104 78 L 110 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ className = '', style }) {
  return (
    <svg className={`draw ${className}`} style={style} viewBox="0 0 40 40" aria-hidden="true">
      <path pathLength="1" d="M20 3 L24 15 L37 16 L27 24 L31 37 L20 29 L9 37 L13 24 L3 16 L16 15 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className = '', style }) {
  return (
    <svg className={`draw ${className}`} style={style} viewBox="0 0 100 20" aria-hidden="true">
      <path pathLength="1" d="M2 10 q 6 -8 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Check({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 13 C 7 15, 8 17, 10 20 C 13 12, 16 8, 21 4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plane({ className = '', style }) {
  return (
    <svg className={`draw ${className}`} style={style} viewBox="0 0 160 90" aria-hidden="true">
      <path pathLength="1" d="M100 18 L 150 8 L 120 52 L 108 36 Z M 108 36 L 150 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      {/* the dotted trail is already dashed, so it fades in instead of drawing */}
      <path className="dashed" d="M100 30 C 70 40, 60 70, 30 60 C 14 55, 18 40, 30 46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" strokeLinecap="round" />
    </svg>
  );
}

export function Tape({ className = '' }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}
