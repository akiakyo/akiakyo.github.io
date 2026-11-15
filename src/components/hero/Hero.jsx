import { experience, profile } from '../../data';
import { ArrowIcon, CodeIcon, GithubIcon, PinIcon } from '../../icons';
import Avatar from './Avatar';
import './styles/hero.css';

const [sinta, zxeno, mag] = experience;

function RoleFloat({ job, className }) {
  return (
    <div className={`float ${className}`}>
      <img className="float-logo" src={job.logo} alt="" style={{ background: job.logoBg }} />
      <span>
        {job.role.split(' · ')[0]}
        <small>{job.name}</small>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="group hero reveal" id="top">
      <div className="card hero-intro">
        <p className="hero-eyebrow muted">
          <PinIcon /> {profile.location}
        </p>
        <h1>{profile.name}</h1>
        <p className="hero-lead muted">Founder of Sintachat · CTO at Zxeno Studio · Computer engineering student at PUP</p>
        <div className="actions">
          <a className="btn primary" href="https://sintachat.com" target="_blank" rel="noopener noreferrer">
            Visit Sintachat <ArrowIcon />
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>

      <div className="card hero-visual" aria-hidden="true">
        <div className="rings" />
        <div className="hero-portrait">
          <Avatar />
        </div>
        <RoleFloat job={sinta} className="hf-a" />
        <RoleFloat job={zxeno} className="hf-b" />
        <RoleFloat job={mag} className="hf-c" />
        <span className="tile hf-tile">
          <CodeIcon />
        </span>
      </div>
    </header>
  );
}
