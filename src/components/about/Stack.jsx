import { stack } from '../../data';
import Section from '../layout/Section';
import './styles/about.css';

export default function Stack() {
  return (
    <Section id="stack" num="05" title="Stack">
      <div className="card stack-card">
        {stack.map((group) => (
          <div key={group.title} className="stack-row">
            <h3 className="muted">{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
