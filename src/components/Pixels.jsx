import { heart, sparkle } from '../sprites';

const inkPalette = { K: 'currentColor' };

// turns sprite rows into svg rects, one rect per run of same-colored pixels
export function SpriteRows({ rows, palette = inkPalette }) {
  const rects = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; ) {
      const ch = row[x];
      let end = x + 1;
      while (row[end] === ch) end++;
      if (ch !== '.') rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={end - x} height="1" fill={palette[ch]} />);
      x = end;
    }
  });
  return rects;
}

function Sprite({ rows, className = '', style }) {
  return (
    <svg className={`sprite ${className}`} style={style} viewBox={`0 0 ${rows[0].length} ${rows.length}`} shapeRendering="crispEdges" aria-hidden="true">
      <SpriteRows rows={rows} />
    </svg>
  );
}

export function Sparkle({ className = '', style }) {
  return <Sprite rows={sparkle} className={className} style={style} />;
}

export function Heart({ className = '', style }) {
  return <Sprite rows={heart} className={className} style={style} />;
}
