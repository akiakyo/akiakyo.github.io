import { projects } from '../../data';
import { ArrowIcon } from '../../icons';
import Section from '../layout/Section';
import './styles/projects.css';

export default function Projects() {
  return (
    <Section id="projects" num="03" title="Projects">
      <div className="project-grid">
        {projects.map((p) => (
          <a key={p.name} className="card project" href={p.href} target="_blank" rel="noopener noreferrer">
            <div className="project-copy">
              <h3>{p.name}</h3>
              <p className="muted">{p.desc}</p>
            </div>
            <div className="project-visual" aria-hidden="true">
              <div className="rings small" />
              <img className="project-logo" src={p.logo} alt="" style={{ background: p.logoBg }} loading="lazy" />
              <span className="float pf-a">{p.tags[0]}</span>
              <span className="float pf-b">{p.tags[1]}</span>
            </div>
            <span className="project-foot">
              <span className="muted">{p.kicker}</span>
              <span className="tile project-tile">
                <ArrowIcon />
              </span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
