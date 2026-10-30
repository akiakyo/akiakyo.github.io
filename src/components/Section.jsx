import Typewrite, { typeTime } from './Typewrite';

const TITLE_SPEED = 55;

export default function Section({ id, title, note, children }) {
  const titleTime = typeTime(title, TITLE_SPEED);

  return (
    <section id={id} className="section reveal">
      <div className="section-head">
        <h2>
          <Typewrite text={title} speed={TITLE_SPEED} />
        </h2>
        {note && (
          <p className="section-note">
            <Typewrite text={`> ${note}`} delay={titleTime + 200} speed={22} />
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
