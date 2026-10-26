// hand-drawn avatar, inline so css can animate its parts.
// light theme: sunglasses on, with a glint. dark theme: glasses slide off, eyes blink.
// on first view it draws itself: outlines first, then the colors fill in (see .av-body in styles.css).
import { useEffect, useRef } from 'react';

const SHIRT = 'M50 196 C 49 170, 50 140, 58 126 C 70 118, 130 117, 142 125 C 151 140, 152 170, 150 196 Z';
const LENS_L = 'M66 70 C 66 66, 92 65, 94 70 C 95 78, 93 86, 88 87 C 80 88, 70 88, 67 84 C 65 80, 65 74, 66 70 Z';
const LENS_R = 'M106 70 C 108 65, 134 66, 134 70 C 135 76, 135 82, 132 86 C 128 88, 116 88, 111 87 C 107 85, 105 78, 106 70 Z';

export default function Avatar() {
  const ref = useRef(null);

  // normalise every stroke to length 1 so one css dash animation draws them all
  useEffect(() => {
    ref.current.querySelectorAll('.av-body path').forEach((p) => p.setAttribute('pathLength', '1'));
  }, []);

  return (
    <svg ref={ref} className="avatar" viewBox="0 0 200 200" role="img" aria-label="hand-drawn avatar of aquio">
      <defs>
        <filter id="av-wobble" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
        </filter>
        <clipPath id="av-shirt">
          <path d={SHIRT} />
        </clipPath>
        <clipPath id="av-lenses">
          <path d={LENS_L} />
          <path d={LENS_R} />
        </clipPath>
      </defs>

      <g className="av-body" filter="url(#av-wobble)" stroke="#1d2540" strokeLinecap="round" strokeLinejoin="round">
        <path d="M37 151 L 51 149 L 52 163 L 38 165 Z" fill="#9a9aa2" strokeWidth="3" />
        <g className="av-hand-r">
          <path d="M149 149 L 163 151 L 162 165 L 148 163 Z" fill="#9a9aa2" strokeWidth="3" />
        </g>

        <path d={SHIRT} fill="#24252c" strokeWidth="3.5" />
        <g clipPath="url(#av-shirt)" stroke="#fff" strokeOpacity=".14" strokeWidth="2">
          <path d="M40 160 L 80 120 M 40 180 L 100 120 M 50 196 L 126 120 M 70 200 L 150 120 M 92 200 L 160 132 M 116 200 L 160 156" />
        </g>
        <path d="M52 192 C 52 168, 53 142, 60 129 C 72 121, 128 120, 140 127" fill="none" strokeWidth="1.2" opacity=".55" transform="translate(2 -1)" />
        <path d="M84 120 L 116 120 L 113 134 L 87 134 Z" fill="#3a3b44" strokeWidth="3" />

        <g className="av-head" style={{ '--d': '0.5s' }}>
          <path d="M62 52 C 60 80, 60 104, 66 118 C 90 124, 112 124, 136 118 C 141 100, 142 76, 138 52 Z" fill="#e9c99d" strokeWidth="3.5" />
          <path d="M64 56 C 62 82, 63 104, 68 116 C 92 121, 112 121, 134 116" fill="none" strokeWidth="1.2" opacity=".5" transform="translate(-1.5 1)" />
          <ellipse cx="73" cy="99" rx="7" ry="3.5" fill="#f2a0a0" stroke="none" opacity=".65" />
          <ellipse cx="127" cy="99" rx="7" ry="3.5" fill="#f2a0a0" stroke="none" opacity=".65" />

          {/* eyes, only seen once the glasses come off */}
          <g className="av-eyes" style={{ '--d': '1.1s' }}>
            <path d="M71 67 Q 80 62 89 66 M 111 66 Q 120 62 129 67" fill="none" strokeWidth="3" />
            <g className="av-blink">
              <ellipse cx="80" cy="78" rx="5" ry="6.5" fill="#1d2540" stroke="none" />
              <ellipse cx="120" cy="78" rx="5" ry="6.5" fill="#1d2540" stroke="none" />
              <circle cx="82" cy="75" r="1.8" fill="#fff" stroke="none" />
              <circle cx="122" cy="75" r="1.8" fill="#fff" stroke="none" />
            </g>
          </g>

          <path className="av-smile" d="M84 100 Q 100 113 116 100" fill="none" strokeWidth="3.5" />

          <path d="M54 60 C 52 44, 58 30, 76 27 C 98 23, 122 24, 138 28 C 150 32, 150 50, 146 60 C 128 56, 112 58, 100 57 C 84 56, 70 56, 54 60 Z" fill="#1f1f24" strokeWidth="3.5" />
          <path d="M70 36 C 90 31, 112 31, 132 35" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="2.5" />
          <path d="M57 56 C 56 44, 62 33, 78 30 C 100 26, 124 27, 138 31" fill="none" strokeWidth="1.2" opacity=".5" transform="translate(1 -2)" />

          <g className="av-glasses" style={{ '--d': '1.1s' }}>
            <path d={LENS_L} fill="#15151a" strokeWidth="3" />
            <path d={LENS_R} fill="#15151a" strokeWidth="3" />
            <path d="M94 74 Q 100 70 106 74 M 66 72 L 61 69 M 134 72 L 139 69" fill="none" strokeWidth="3" />
            <g clipPath="url(#av-lenses)">
              <path className="av-glint" d="M60 92 L 80 62 M 68 92 L 88 62" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="3" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
