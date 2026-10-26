import { useEffect, useRef, useState } from 'react';
import { profile } from '../data';
import { ArrowIcon, CopyIcon, MailIcon } from '../icons';
import { sfx } from '../sfx';
import { Plane, Tape } from './Doodles';
import Handwrite from './Handwrite';
import Section from './Section';

export default function Contact() {
  const [copyLabel, setCopyLabel] = useState('copy discord');
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(profile.discord);
      setCopyLabel(`copied ${profile.discord}`);
      sfx.pop();
    } catch (e) {
      setCopyLabel(profile.discord);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyLabel('copy discord'), 1600);
  };

  return (
    <Section id="contact" title="contact" note="let's build something">
      <div className="letter sketch draw-in">
        <Tape className="tape-corner" />
        <Plane className="plane" style={{ '--draw-d': '2.6s' }} />
        <p className="dear">
          <Handwrite text="hey there," delay={1100} speed={45} />
        </p>
        <h3>
          <Handwrite text="want to work together?" delay={1550} speed={40} />
        </h3>
        <p>reach out for software projects, collaborations, product work, or engineering opportunities.</p>
        <p className="sign">
          <Handwrite text="— aquio" delay={2500} speed={70} />
        </p>
        <div className="actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <MailIcon /> email me
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            github <ArrowIcon />
          </a>
          <button className="btn" type="button" data-sfx="none" onClick={copyDiscord}>
            <CopyIcon /> {copyLabel}
          </button>
        </div>
      </div>
    </Section>
  );
}
