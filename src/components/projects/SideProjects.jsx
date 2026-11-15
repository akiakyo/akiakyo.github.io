import { useEffect, useRef, useState } from 'react';
import { profile, sideProjects } from '../../data';
import { ArrowIcon, ExpandIcon } from '../../icons';
import Section from '../layout/Section';
import Lightbox from './Lightbox';
import './styles/side-projects.css';

const NAV = 64; // sticky nav height, the pinned panel sits right under it
// each shot holds still for part of the scroll, then glides to the next one
const HOLD = 0.35;
const glide = (exact) => {
  const base = Math.floor(exact);
  const t = Math.min(1, Math.max(0, (exact - base - HOLD) / (1 - 2 * HOLD)));
  return base + t * t * (3 - 2 * t);
};
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// one side project as a scroll story: the panel pins to the screen while scrolling
// slides its screenshots sideways, one caption at a time. the page holds on the
// side projects until every shot has passed, then moves on (aky, 2026-11-15)
function ScrollStory({ project }) {
  const shots = project.shots;
  const wrap = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(null);
  const [still] = useState(reduceMotion);

  useEffect(() => {
    if (still) return;
    let frame = 0;
    let last = -1;

    const update = () => {
      frame = 0;
      const el = wrap.current;
      const tr = track.current;
      if (!el || !tr) return;
      const pinned = el.querySelector('.story-pin');
      const travel = el.offsetHeight - pinned.offsetHeight;
      const p = Math.min(1, Math.max(0, (NAV - el.getBoundingClientRect().top) / travel));

      // slide the track so the current shot lines up with the start of the frame
      const first = tr.children[0];
      const step = first ? first.offsetWidth + 24 : 0;
      const exact = p * (shots.length - 1);
      const pos = glide(exact);
      tr.style.transform = `translate3d(${-pos * step}px, 0, 0)`;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;

      const idx = Math.round(pos);
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [still, shots.length]);

  // jump the page so a given shot is the one in view
  const goTo = (i) => {
    const el = wrap.current;
    if (!el || still) return setActive(i);
    const travel = el.offsetHeight - el.querySelector('.story-pin').offsetHeight;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV + (i / (shots.length - 1)) * travel;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <article
      className={`story ${still ? 'still' : ''}`}
      ref={wrap}
      style={still ? undefined : { height: `calc(100svh - ${NAV}px + ${shots.length * 38}vh)` }}
    >
      <div className="story-pin">
        <div className="story-copy">
          <p className="story-kicker">{project.kicker}</p>
          <h3>{project.name}</h3>
          <p className="story-desc muted">{project.desc}</p>

          <div className="story-caption" aria-live="polite">
            <span className="story-count">
              {String(active + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
            </span>
            {/* keyed so each new caption replays its blur-in */}
            <span key={active} className="story-caption-text">
              {shots[active].caption}
            </span>
          </div>

          <div className="story-progress" aria-hidden="true">
            <span ref={bar} />
          </div>

          <div className="story-dots">
            {shots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={i === active ? 'on' : ''}
                aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
            {project.label} <ArrowIcon />
          </a>
        </div>

        <div className="story-stage">
          <div className="story-track" ref={track}>
            {shots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`story-shot ${i === active ? 'active' : ''}`}
                onClick={() => setZoom(i)}
                aria-label={`Enlarge: ${s.caption}`}
                tabIndex={i === active ? 0 : -1}
              >
                <span className="browser-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <img src={s.src} alt="" width="960" height="600" loading="lazy" draggable="false" />
                <span className="tile story-zoom" aria-hidden="true">
                  <ExpandIcon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {zoom !== null && <Lightbox project={project} index={zoom} onIndex={setZoom} onClose={() => setZoom(null)} />}
    </article>
  );
}

export default function SideProjects() {
  return (
    <Section id="side-projects" title="side projects" link={{ href: profile.github, label: 'All on GitHub' }}>
      <div className="stories">
        {sideProjects.map((p) => (
          <ScrollStory key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
