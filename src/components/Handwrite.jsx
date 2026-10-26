import { Fragment } from 'react';

// writes text out letter by letter once its .reveal ancestor becomes visible.
// screen readers get the plain text; the animated letters are hidden from them.
export default function Handwrite({ text, delay = 0, speed = 40 }) {
  let i = 0;
  const words = text.split(' ');

  return (
    <span className="hw" style={{ '--hw-d': `${delay}ms`, '--hw-s': `${speed}ms` }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <Fragment key={w}>
            <span className="hw-word">
              {[...word].map((ch) => (
                <span key={i} className="hw-char" style={{ '--i': i++ }}>
                  {ch}
                </span>
              ))}
            </span>
            {w < words.length - 1 && ' '}
          </Fragment>
        ))}
      </span>
    </span>
  );
}

// how long a Handwrite takes, so the next piece can start right after it
export const writeTime = (text, speed = 40) => text.length * speed;
