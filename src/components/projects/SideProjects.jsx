import { useState } from 'react';
import { profile, sideProjects } from '../../data';
import { ArrowIcon, ExpandIcon } from '../../icons';
import Section from '../layout/Section';
import Lightbox from './Lightbox';
import './styles/side-projects.css';

function SideCard({ project }) {
  const [index, setIndex] = useState(null);
  const cover = project.shots[0];

  return (
    <article className="card side-card">
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
          <img src={cover.src} alt="" width="960" height="600" loading="lazy" />
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

export default function SideProjects() {
  return (
    <Section id="side-projects" num="04" title="Side projects" link={{ href: profile.github, label: 'All on GitHub' }}>
      <div className="side-grid">
        {sideProjects.map((p) => (
          <SideCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
