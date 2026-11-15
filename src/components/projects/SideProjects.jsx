import { useRef, useState } from 'react';
import { profile, sideProjects } from '../../data';
import { ArrowIcon, ExpandIcon, NextIcon, PrevIcon } from '../../icons';
import Section from '../layout/Section';
import Lightbox from './Lightbox';
import './styles/side-projects.css';

function SideCard({ project, i }) {
  const [index, setIndex] = useState(null);
  const cover = project.shots[0];

  return (
    <article className="card side-card blur-in" style={{ '--i': i }}>
      <div className="side-copy">
        <h3>{project.name}</h3>
        <p className="muted">{project.desc}</p>
        <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
          {project.label} <ArrowIcon />
        </a>
      </div>

      <button
        className="side-visual"
        type="button"
        onClick={() => setIndex(0)}
        aria-label={`View ${project.shots.length} screenshots of ${project.name}`}
      >
        <span className="browser">
          <span className="browser-bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <img src={cover.src} alt="" width="960" height="600" loading="lazy" draggable="false" />
        </span>
        <span className="tile side-tile" aria-hidden="true">
          <ExpandIcon />
        </span>
        <span className="float side-count" aria-hidden="true">
          {project.shots.length} screenshots
        </span>
      </button>

      {index !== null && <Lightbox project={project} index={index} onIndex={setIndex} onClose={() => setIndex(null)} />}
    </article>
  );
}

// side projects slide sideways: swipe, drag with a mouse, or use the arrows.
// the arrows wrap around at either end instead of going dead (aky, 2026-11-15)
export default function SideProjects() {
  const track = useRef(null);
  const drag = useRef(null);
  const justDragged = useRef(false);

  const step = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('.side-card');
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let left = el.scrollLeft + dir * amount;
    if (dir > 0 && el.scrollLeft >= max - 4) left = 0;
    if (dir < 0 && el.scrollLeft <= 4) left = max;
    el.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
  };

  // mouse drag to scroll; touch already scrolls natively
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      track.current.classList.add('dragging');
    }
    if (d.moved) track.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    if (!drag.current) return;
    const moved = drag.current.moved;
    drag.current = null;
    track.current.classList.remove('dragging');
    // a drag shouldn't also count as a click on the card under the pointer
    if (moved) {
      justDragged.current = true;
      setTimeout(() => (justDragged.current = false), 80);
    }
  };

  return (
    <Section id="side-projects" title="side projects" link={{ href: profile.github, label: 'All on GitHub' }}>
      <div
        className="side-track"
        ref={track}
        onScroll={(e) => {
          const el = e.currentTarget;
          el.classList.toggle('at-end', el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          if (justDragged.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {sideProjects.map((p, i) => (
          <SideCard key={p.name} project={p} i={i} />
        ))}
      </div>
      <div className="side-controls">
        <button className="icon-btn" type="button" aria-label="Scroll side projects left" onClick={() => step(-1)}>
          <PrevIcon />
        </button>
        <button className="icon-btn" type="button" aria-label="Scroll side projects right" onClick={() => step(1)}>
          <NextIcon />
        </button>
      </div>
    </Section>
  );
}
