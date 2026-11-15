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

export default function Contact() {
  return (
    <Section id="contact" num="06" title="Contact">
      <div className="card contact-card">
        <div className="icon-grid" aria-hidden="true">
          <span className="cell">
            <MailIcon />
          </span>
          <span className="cell blank" />
          <span className="cell">
            <CodeIcon />
          </span>
          <span className="cell blank" />
          <span className="cell tile">
            <LinkIcon />
          </span>
          <span className="cell blank" />
          <span className="cell">
            <GithubIcon />
          </span>
          <span className="cell blank" />
          <span className="cell">
            <RocketIcon />
          </span>
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
