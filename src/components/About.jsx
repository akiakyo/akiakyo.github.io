import { skills } from '../data';
import { CheckIcon } from '../icons';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="about" note="what i do">
      <div className="about-grid">
        <div className="panel yellow about-text pop-in">
          <p>
            i'm a <mark>computer engineering student specializing in software engineering</mark> who likes turning ideas
            into products people can actually use.
          </p>
          <p>
            most of my learning comes from <strong>shipping real projects</strong>, solving technical problems, and
            improving products as they grow.
          </p>
        </div>

        <div className="checklist panel pop-in">
          <h3>things i work on:</h3>
          <ul>
            {skills.map((s) => (
              <li key={s}>
                <span className="box">
                  <CheckIcon className="tick" />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
