// pixel art avatar, inline so css can animate its parts.
// light theme: sunglasses on, with a glint. dark theme: glasses hop off, eyes blink.
import { avatarBase, avatarBrows, avatarEyes, avatarGlasses, avatarGlint, avatarHandL, avatarHandR, avatarPalette } from '../sprites';
import { SpriteRows } from './Pixels';

const Layer = ({ rows }) => <SpriteRows rows={rows} palette={avatarPalette} />;

export default function Avatar() {
  return (
    <svg className="avatar" viewBox="0 0 32 32" shapeRendering="crispEdges" role="img" aria-label="pixel art avatar of aquio">
      <g className="av-body">
        <Layer rows={avatarBase} />
        <g className="av-eyes">
          <Layer rows={avatarBrows} />
          <g className="av-blink">
            <Layer rows={avatarEyes} />
          </g>
        </g>
        <g className="av-glasses">
          <Layer rows={avatarGlasses} />
          <g className="av-glint">
            <Layer rows={avatarGlint} />
          </g>
        </g>
      </g>
      <Layer rows={avatarHandL} />
      <g className="av-hand-r">
        <Layer rows={avatarHandR} />
      </g>
    </svg>
  );
}
