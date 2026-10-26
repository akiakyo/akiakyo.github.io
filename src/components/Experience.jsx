import { experience } from '../data';
import { ArrowIcon } from '../icons';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="experience" note="current roles">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.name} className="timeline-item">
            <span className="dot" aria-hidden="true" />
            <article className="index-card sketch draw-in">
              <div className="card-top">
                <div className="logo-circle" style={{ background: job.logoBg }}>
                  <img src={job.logo} alt={`${job.name} logo`} loading="lazy" />
                </div>
                <div>
                  <h3>{job.name}</h3>
                  <p className="role">{job.role}</p>
                </div>
                {job.link && (
                  <a className="card-link" href={job.link.href} target="_blank" rel="noopener noreferrer">
                    {job.link.label} <ArrowIcon />
                  </a>
                )}
              </div>
              <p className="desc">{job.desc}</p>
              {job.tags.length > 0 && (
                <ul className="tags">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
