import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { sideProjects } from '../data';
import { ArrowIcon, CloseIcon, ExpandIcon, NextIcon, PrevIcon } from '../icons';
import { sfx } from '../sfx';
import { Tape } from './Doodles';
import Section from './Section';

const wrap = (i, n) => (i + n) % n;

function Lightbox({ project, index, onIndex, onClose }) {
  const shots = project.shots;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        sfx.flip();
        onIndex(wrap(index - 1, shots.length));
      }
      if (e.key === 'ArrowRight') {
        sfx.flip();
        onIndex(wrap(index + 1, shots.length));
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, shots.length, onIndex, onClose]);

  // portal to body: the tilted card's transform would otherwise trap position: fixed
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} screenshots`} onClick={onClose}>
      <figure className="lightbox-frame sketch" data-sfx="flip" onClick={(e) => e.stopPropagation()}>
        <img src={shots[index].src} alt={shots[index].caption} />
        <figcaption>
          <span>
            {index + 1} / {shots.length}
          </span>
          {shots[index].caption}
        </figcaption>
        <button className="icon-btn lb-close" type="button" aria-label="close" onClick={onClose}>
          <CloseIcon />
        </button>
        <button className="icon-btn lb-prev" type="button" aria-label="previous screenshot" onClick={() => onIndex(wrap(index - 1, shots.length))}>
          <PrevIcon />
        </button>
        <button className="icon-btn lb-next" type="button" aria-label="next screenshot" onClick={() => onIndex(wrap(index + 1, shots.length))}>
          <NextIcon />
        </button>
      </figure>
    </div>,
    document.body
  );
}

function SideCard({ project, tilt }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const shots = project.shots;
  const shot = shots[index];

  return (
    <article className={`side-card sketch draw-in ${tilt}`}>
      <Tape className="tape-top" />
      <div className="browser" data-sfx="flip">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>{project.label}</em>
        </div>
        <div className="shot-stage">
          <button className="shot-main" type="button" onClick={() => setZoomed(true)} aria-label={`enlarge: ${shot.caption}`}>
            <img src={shot.src} alt={shot.caption} width="960" height="600" loading="lazy" />
            <span className="shot-zoom" aria-hidden="true">
              <ExpandIcon />
            </span>
          </button>
          <button className="icon-btn shot-nav prev" type="button" aria-label="previous screenshot" onClick={() => setIndex(wrap(index - 1, shots.length))}>
            <PrevIcon />
          </button>
          <button className="icon-btn shot-nav next" type="button" aria-label="next screenshot" onClick={() => setIndex(wrap(index + 1, shots.length))}>
            <NextIcon />
          </button>
        </div>
      </div>

      <p className="shot-caption">
        <span>
          {index + 1}/{shots.length}
        </span>{' '}
        {shot.caption}
      </p>

      <div className="thumbs" data-sfx="flip" role="tablist" aria-label={`${project.name} screenshots`}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.caption}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          >
            <img src={s.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      <div className="side-body">
        <h3>{project.name}</h3>
        <p className="kicker">{project.kicker}</p>
        <p className="desc">{project.desc}</p>
        <a className="visit" href={project.href} target="_blank" rel="noopener noreferrer">
          visit {project.label} <ArrowIcon />
        </a>
      </div>

      {zoomed && <Lightbox project={project} index={index} onIndex={setIndex} onClose={() => setZoomed(false)} />}
    </article>
  );
}

export default function SideProjects() {
  return (
    <Section id="side-projects" title="side projects" note="things i built for fun & friends">
      <div className="side-grid">
        {sideProjects.map((p, i) => (
          <SideCard key={p.name} project={p} tilt={i % 2 ? 'tilt-r' : 'tilt-l'} />
        ))}
      </div>
    </Section>
  );
}
