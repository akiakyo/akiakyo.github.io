import { Fragment } from 'react';

// types text out letter by letter once its .reveal ancestor becomes visible.
// screen readers get the plain text; the animated letters are hidden from them.
export default function Typewrite({ text, delay = 0, speed = 40 }) {
  let i = 0;
  const words = text.split(' ');

  return (
    <span className="tw" style={{ '--tw-d': `${delay}ms`, '--tw-s': `${speed}ms` }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <Fragment key={w}>
            <span className="tw-word">
              {[...word].map((ch) => (
                <span key={i} className="tw-char" style={{ '--i': i++ }}>
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

// how long a Typewrite takes, so the next piece can start right after it
export const typeTime = (text, speed = 40) => text.length * speed;
