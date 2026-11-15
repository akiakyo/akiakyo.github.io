import { useRef, useState } from 'react';
import { profile, projects } from '../../data';
import { ArrowIcon, NextIcon, PrevIcon } from '../../icons';
import Section from '../layout/Section';
import './styles/projects.css';

// where a card sits relative to the front one: -1 left, 0 front, 1 right
const slot = (i, active, n) => {
  let rel = i - active;
  if (rel > n / 2) rel -= n;
  if (rel < -n / 2) rel += n;
  return rel;
};

// projects as a fanned stack: one card in front, the others tilted behind it.
// tapping a back card, the arrows, or a swipe brings the next one forward (aky, 2026-11-15)
export default function Projects() {
  const [active, setActive] = useState(0);
  const touchX = useRef(null);
  const n = projects.length;
  const go = (i) => setActive((i + n) % n);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <Section id="projects" num="03" title="projects" link={{ href: profile.github, label: 'All on GitHub' }}>
      <div className="fan" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {projects.map((p, i) => {
          const rel = slot(i, active, n);
          const front = rel === 0;
          return (
            <article
              key={p.name}
              className={`fan-card ${front ? 'front' : 'back'}`}
              style={{ '--rel': rel }}
              aria-hidden={front ? undefined : 'true'}
              onClick={front ? undefined : () => go(i)}
            >
              <ul className="fan-chips">
                <li className="dark">{p.kicker}</li>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="fan-title">
                <img src={p.logo} alt="" className={p.inkLogo ? 'logo-ink' : undefined} loading="lazy" />
                <h3>{p.name}</h3>
              </div>
              <p className="fan-desc muted">{p.desc}</p>
              <a className="btn primary fan-visit" href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={front ? 0 : -1}>
                Visit {p.label} <ArrowIcon />
              </a>
            </article>
          );
        })}
      </div>

      <div className="fan-controls">
        <button className="icon-btn" type="button" aria-label="Previous project" onClick={() => go(active - 1)}>
          <PrevIcon />
        </button>
        <span className="fan-count" aria-live="polite">
          {active + 1} / {n} · {projects[active].name}
        </span>
        <button className="icon-btn" type="button" aria-label="Next project" onClick={() => go(active + 1)}>
          <NextIcon />
        </button>
      </div>
    </Section>
  );
}
