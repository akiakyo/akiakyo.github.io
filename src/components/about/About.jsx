import { skills } from '../../data';
import { CheckIcon } from '../../icons';
import Section from '../layout/Section';
import './styles/about.css';

export default function About() {
  return (
    <Section id="about" title="about">
      <div className="about-grid">
        <div className="card about-text blur-in" style={{ '--i': 0 }}>
          <h3>Turning ideas into products people use</h3>
          <p className="muted">
            I'm a computer engineering student specializing in software engineering. Most of my learning comes from
            shipping real projects, solving technical problems, and improving products as they grow.
          </p>
        </div>
        <div className="card about-skills blur-in" style={{ '--i': 1 }}>
          <h3>Things I work on</h3>
          <ul>
            {skills.map((s) => (
              <li key={s}>
                <CheckIcon /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
