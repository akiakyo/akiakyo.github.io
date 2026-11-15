// turns sprite rows into svg rects, one rect per run of same-colored pixels
export default function SpriteRows({ rows, palette }) {
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
