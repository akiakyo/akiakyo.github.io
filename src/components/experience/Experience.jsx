import { experience } from '../../data';
import { ArrowIcon } from '../../icons';
import Section from '../layout/Section';
import './styles/experience.css';

// a plain list: role on the left, company and details on the right
export default function Experience() {
  return (
    <Section id="experience" num="02" title="experience">
      <ol className="card job-list">
        {experience.map((job) => (
          <li key={job.name} className="job">
            <p className="job-role muted">{job.role}</p>
            <div className="job-body">
              <div className="job-head">
                <img className={`job-logo ${job.inkLogo ? 'logo-ink' : ''}`} src={job.logo} alt="" loading="lazy" />
                <h3>{job.name}</h3>
                {job.link && (
                  <a className="text-link" href={job.link.href} target="_blank" rel="noopener noreferrer">
                    {job.link.label} <ArrowIcon />
                  </a>
                )}
              </div>
              <p className="job-desc muted">{job.desc}</p>
              {job.tags.length > 0 && (
                <ul className="meta-list">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
