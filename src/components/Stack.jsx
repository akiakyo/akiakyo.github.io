import { stack } from '../data';
import Section from './Section';

export default function Stack() {
  return (
    <Section id="stack" title="tech stack" note="languages, frameworks & tools">
      <div className="toolbox">
        {stack.map((group) => (
          <div key={group.title} className="tool-group panel pop-in">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
