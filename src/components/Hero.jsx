import { profile } from '../data';
import { ArrowIcon, PinIcon } from '../icons';
import Avatar from './Avatar';
import { Sparkle } from './Pixels';
import Typewrite, { typeTime } from './Typewrite';

// timeline for the hero's typing, in ms
const hello = `hi, i'm ${profile.name}`;
const line = 'software engineer building things people';
const LINE_START = 500;
const LINE_SPEED = 24;
const ACCENT_START = LINE_START + typeTime(line, LINE_SPEED) + 100;
const ACCENT_SPEED = 45;
const CARET_START = ACCENT_START + typeTime('actually use.', ACCENT_SPEED);

export default function Hero() {
  return (
    <header className="hero reveal">
      <div className="hero-copy">
        <p className="hello">
          <Typewrite text={hello} speed={30} />
        </p>
        <h1>
          <Typewrite text={line} delay={LINE_START} speed={LINE_SPEED} />{' '}
          <span className="accent-text">
            <Typewrite text="actually use." delay={ACCENT_START} speed={ACCENT_SPEED} />
          </span>
          <span className="caret" style={{ '--caret-d': `${CARET_START}ms` }} aria-hidden="true" />
        </h1>
        <p className="hero-role">
          founder of <mark>sintachat</mark>, cto &amp; software engineer at <mark>zxeno studio</mark>, lead developer at{' '}
          <mark>magbungkal mc</mark>, and a computer engineering student specializing in software engineering at the{' '}
          <mark>polytechnic university of the philippines</mark>.
        </p>
        <div className="actions">
          <a className="btn primary" href="https://sintachat.com" target="_blank" rel="noopener noreferrer">
            visit sintachat <ArrowIcon />
          </a>
          <a className="btn" href="https://zxenostudio.com" target="_blank" rel="noopener noreferrer">
            visit zxeno studio <ArrowIcon />
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            github <ArrowIcon />
          </a>
        </div>
      </div>

      <figure className="player-card">
        <div className="player-stage">
          <Avatar />
        </div>
        <figcaption>
          <PinIcon /> {profile.location}
        </figcaption>
        <div className="bubble" aria-hidden="true">
          <Typewrite text="that's me!" delay={2200} speed={50} />
        </div>
        <Sparkle className="star star-a" />
        <Sparkle className="star star-b" />
      </figure>
    </header>
  );
}
