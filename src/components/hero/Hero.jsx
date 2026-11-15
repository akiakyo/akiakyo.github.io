import { useEffect, useRef, useState } from 'react';
import { experience, profile } from '../../data';
import { CheckIcon, CodeIcon, PencilIcon, RocketIcon } from '../../icons';
import pfp480 from '../../assets/pfp/pfp-480.webp';
import pfp960 from '../../assets/pfp/pfp-960.webp';
import './styles/hero.css';

const [sinta, zxeno, mag, pup] = experience;

// a small soft chip that sits inside a sentence, with an icon or a logo
function Chip({ icon, logo, ink, children }) {
  return (
    <span className="chip">
      {logo ? <img src={logo} alt="" className={ink ? 'logo-ink' : undefined} /> : icon}
      {children}
    </span>
  );
}

// overlapping round logo badges followed by plain bold text; they fan out on hover (aky, 2026-11-15)
function LogoStack({ logos, children }) {
  return (
    <span className="logo-stack">
      <span className="logo-dots" aria-hidden="true">
        {logos.map((l) => (
          <span key={l.name} className="logo-dot">
            <img src={l.logo} alt="" className={l.inkLogo ? 'logo-ink' : undefined} />
          </span>
        ))}
      </span>
      <strong>{children}</strong>
    </span>
  );
}

function DiscordLink() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.discord);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // clipboard blocked: the handle is in the contact section too
    }
  };

  return (
    <button className="mono-link" type="button" onClick={copy}>
      <span aria-live="polite">{copied ? 'copied' : 'discord'}</span> {copied ? <CheckIcon /> : <span aria-hidden="true">⧉</span>}
    </button>
  );
}

const roles = [sinta, zxeno, mag];

export default function Hero() {
  return (
    <header className="hero reveal" id="top">
      <div className="hero-main">
        <div className="hero-portrait blur-in" style={{ '--i': 0 }}>
          <img src={pfp480} srcSet={`${pfp480} 480w, ${pfp960} 960w`} sizes="(max-width: 760px) 168px, 300px" width="480" height="480" alt={`Illustrated portrait of ${profile.name}`} />
        </div>

        <div className="hero-copy">
          <h1 className="blur-in" style={{ '--i': 1 }}>
            {profile.name}
          </h1>
          <p className="bio blur-in" style={{ '--i': 2 }}>
            I'm an aspiring <Chip icon={<CodeIcon />}>software engineer</Chip> studying computer engineering at{' '}
            <Chip logo={pup.logo}>PUP</Chip>. These days I'm building{' '}
            <LogoStack logos={[sinta, zxeno]}>SintaChat &amp; ZXENO Studio</LogoStack> as founder and CTO.
          </p>
          <p className="bio blur-in" style={{ '--i': 3 }}>
            Most of what I know comes from <Chip icon={<RocketIcon />}>shipping real projects</Chip> and{' '}
            <Chip icon={<PencilIcon />}>fixing what breaks</Chip> as they grow.
          </p>
          <div className="mono-links blur-in" style={{ '--i': 4 }}>
            <a className="mono-link" href={profile.github} target="_blank" rel="noopener noreferrer">
              github <span aria-hidden="true">↗</span>
            </a>
            <a className="mono-link" href={`mailto:${profile.email}`}>
              email <span aria-hidden="true">↗</span>
            </a>
            <DiscordLink />
          </div>
        </div>
      </div>

      <ul className="hero-row roles">
        {roles.map((job, i) => (
          <li key={job.name} className="blur-in" style={{ '--i': 5 + i }}>
            <a href={job.link.href} target="_blank" rel="noopener noreferrer">
              <img src={job.logo} alt="" className={job.inkLogo ? 'logo-ink' : undefined} />
              <span>
                <strong>{job.name}</strong>
                <small>{job.role.split(' · ')[0]}</small>
              </span>
            </a>
          </li>
        ))}
      </ul>


      <div className="dot-field" aria-hidden="true" />
    </header>
  );
}
