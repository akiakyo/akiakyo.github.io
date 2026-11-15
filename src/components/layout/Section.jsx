import { ArrowIcon } from '../../icons';
import './styles/section.css';

// one hairline group frame with a numbered heading ("01 — About"), cards go inside (aky, 2026-11-15).
// link is an optional { href, label } shown on the right, like "All on GitHub ↗".
export default function Section({ id, num, title, link, children }) {
  return (
    <section id={id} className="group section reveal" aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>
          {num && (
            <span className="section-num" aria-hidden="true">
              {num} —
            </span>
          )}
          {title}
        </h2>
        {link && (
          <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} <ArrowIcon />
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
