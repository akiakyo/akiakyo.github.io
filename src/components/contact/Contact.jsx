import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data';
import { ArrowIcon, CheckIcon, CodeIcon, CopyIcon, GithubIcon, LinkIcon, MailIcon, RocketIcon } from '../../icons';
import Section from '../layout/Section';
import './styles/contact.css';

// copy button for one line of contact info; says "Copied" for a moment
function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // clipboard blocked: the value is on screen to select by hand
    }
  };

  return (
    <div className="copy-row">
      <span className="copy-label muted">{label}</span>
      <span className="copy-value">{value}</span>
      <button className="btn copy-btn" type="button" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}>
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
}

// the decorative 3x3 tile grid. ring = steps from the center, so tiles pop in
// from the middle outward; anim picks each icon's own little hover move (aky, 2026-11-15)
const grid = [
  { Icon: MailIcon, ring: 2, anim: 'bounce' },
  { kind: 'blank', ring: 1 },
  { Icon: CodeIcon, ring: 2, anim: 'shake' },
  { kind: 'blank', ring: 1 },
  { Icon: LinkIcon, kind: 'tile', ring: 0, anim: 'spin' },
  { kind: 'blank', ring: 1 },
  { Icon: GithubIcon, ring: 2, anim: 'tilt' },
  { kind: 'blank', ring: 1 },
  { Icon: RocketIcon, ring: 2, anim: 'launch' },
];

export default function Contact() {
  return (
    <Section id="contact" title="contact">
      <div className="card contact-card blur-in">
        <div className="icon-grid" aria-hidden="true">
          {grid.map((cell, i) => (
            <span
              key={i}
              className={`cell ${cell.kind || ''} ${cell.anim ? `anim-${cell.anim}` : ''}`}
              style={{ '--ring': cell.ring }}
            >
              {cell.Icon && (
                <span className="ic">
                  <cell.Icon />
                </span>
              )}
            </span>
          ))}
        </div>
        <h2>Say hello</h2>
        <p className="muted">Software projects, collaborations, product work, or engineering roles — my inbox is open.</p>

        <div className="copy-list">
          <CopyRow label="Email" value={profile.email} />
          <CopyRow label="Discord" value={profile.discord} />
        </div>

        <div className="actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <MailIcon /> Open Mail App
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowIcon />
          </a>
        </div>
      </div>
    </Section>
  );
}
