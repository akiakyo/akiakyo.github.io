import { stack } from '../../data';
import Section from '../layout/Section';
import { stackIcons } from './stackIcons';
import './styles/about.css';

// where each row starts in the overall chip order, so chips blur in one after another across rows
const rowStart = stack.map((_, i) => stack.slice(0, i).reduce((n, g) => n + g.items.length, 0));

export default function Stack() {
  return (
    <Section id="stack" title="stack">
      <div className="card stack-card">
        {stack.map((group, row) => (
          <div key={group.title} className="stack-row">
            <h3 className="muted">{group.title}</h3>
            <ul className="tech-chips">
              {group.items.map((item, j) => {
                const { Icon, ink } = stackIcons[item] || {};
                return (
                  <li key={item} className="blur-in" style={{ '--i': (rowStart[row] + j) * 0.5 }}>
                    <span className="tech-chip">
                      {Icon && <Icon className={`tech-icon ${ink ? 'ink' : ''}`} aria-hidden="true" />}
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
