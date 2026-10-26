import { Squiggle } from './Doodles';
import Handwrite, { writeTime } from './Handwrite';

const TITLE_SPEED = 55;

export default function Section({ id, title, note, children }) {
  const titleTime = writeTime(title, TITLE_SPEED);

  return (
    <section id={id} className="section reveal">
      <div className="section-head">
        <h2>
          <Handwrite text={title} speed={TITLE_SPEED} />
        </h2>
        <Squiggle className="head-squiggle" style={{ '--draw-d': `${titleTime}ms` }} />
        {note && (
          <p className="section-note">
            <Handwrite text={`— ${note}`} delay={titleTime + 200} speed={22} />
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
