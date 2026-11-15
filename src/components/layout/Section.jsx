import { findPage } from '../../pages';
import { ArrowIcon } from '../../icons';
import './styles/section.css';

// every page opens with a big title and a one-line intro taken from pages.js,
// then one hairline group frame holds its cards (aky, 2026-11-15).
// page={false} keeps the small quiet label instead, for blocks on the landing page.
// link is an optional { href, label } shown on the right, like "All on GitHub ↗".
export default function Section({ id, title, link, page = true, children }) {
  const meta = page ? findPage(`/${id}`) : null;

  const linkEl = link && (
    <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label} <ArrowIcon />
    </a>
  );

  return (
    <>
      {meta && (
        <header className="page-head reveal">
          <h1 id={`${id}-title`}>{meta.label}</h1>
          <div className="page-head-row">
            <p className="muted">{meta.intro}</p>
            {linkEl}
          </div>
        </header>
      )}
      <section id={id} className="group section reveal" aria-labelledby={`${id}-title`}>
        {!meta && (
          <div className="section-head">
            <h2 id={`${id}-title`}>{title}</h2>
            {linkEl}
          </div>
        )}
        {children}
      </section>
    </>
  );
}
