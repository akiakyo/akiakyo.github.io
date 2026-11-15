// pixel art avatar, inline so the theme can swap its parts:
// light theme wears the sunglasses, dark theme takes them off.
import { avatarBase, avatarBrows, avatarEyes, avatarGlasses, avatarGlint, avatarHandL, avatarHandR, avatarPalette } from '../../sprites';
import SpriteRows from './SpriteRows';
import './styles/avatar.css';

const Layer = ({ rows }) => <SpriteRows rows={rows} palette={avatarPalette} />;

export default function Avatar({ label }) {
  return (
    <svg
      className="avatar"
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
    >
      <Layer rows={avatarBase} />
      <g className="av-eyes">
        <Layer rows={avatarBrows} />
        <Layer rows={avatarEyes} />
      </g>
      <g className="av-glasses">
        <Layer rows={avatarGlasses} />
        <Layer rows={avatarGlint} />
      </g>
      <Layer rows={avatarHandL} />
      <Layer rows={avatarHandR} />
    </svg>
  );
}
