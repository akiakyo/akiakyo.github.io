import { profile } from '../data';
import { ArrowIcon, PinIcon } from '../icons';
import Avatar from './Avatar';
import { CurlyArrow, Scribble, Star, Tape } from './Doodles';
import Handwrite, { writeTime } from './Handwrite';

// timeline for the hero's handwriting, in ms
const hello = `hi, i'm ${profile.name} ✎`;
const line = 'software engineer building things people';
const LINE_START = 500;
const LINE_SPEED = 24;
const ACCENT_START = LINE_START + writeTime(line, LINE_SPEED) + 100;
const ACCENT_SPEED = 45;
const UNDERLINE_START = ACCENT_START + writeTime('actually use.', ACCENT_SPEED);

export default function Hero() {
  return (
    <header className="hero reveal">
      <div className="hero-copy">
        <p className="hello">
          <Handwrite text={hello} speed={30} />
        </p>
        <h1>
          <Handwrite text={line} delay={LINE_START} speed={LINE_SPEED} />{' '}
          <span className="underlined">
            <Handwrite text="actually use." delay={ACCENT_START} speed={ACCENT_SPEED} />
            <Scribble className="underline-svg" style={{ '--draw-d': `${UNDERLINE_START}ms` }} />
          </span>
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

      <figure className="polaroid">
        <Tape className="tape-top" />
        <div className="polaroid-photo">
          <Avatar />
        </div>
        <figcaption>
          <PinIcon /> {profile.location}
        </figcaption>
        <div className="note-me" aria-hidden="true">
          <Handwrite text="that's me!" delay={2200} speed={50} />
          <CurlyArrow className="arrow" style={{ '--draw-d': '2.7s' }} />
        </div>
        <Star className="star star-a" style={{ '--draw-d': '3s' }} />
        <Star className="star star-b" style={{ '--draw-d': '3.2s' }} />
      </figure>
    </header>
  );
}
