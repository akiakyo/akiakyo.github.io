import { projects } from '../data';
import { ArrowIcon } from '../icons';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" title="featured projects" note="selected work">
      <div className="project-board">
        {projects.map((p, i) => (
          <a
            key={p.name}
            className={`sticky project draw-in ${p.color} ${i % 2 ? 'tilt-r' : 'tilt-l'}`}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pin" aria-hidden="true" />
            <div className="logo-circle" style={{ background: p.logoBg }}>
              <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
            </div>
            <h3>{p.name}</h3>
            <p className="kicker">{p.kicker}</p>
            <p className="desc">{p.desc}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className="visit">
              visit <ArrowIcon />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
