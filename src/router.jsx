import { useEffect, useState } from 'react';
import { normalize } from './pages';

// a tiny router on the browser's history api: real paths like /experience,
// no page reload when moving between them, back and forward still work.
const EVENT = 'locationchange';

export function navigate(to) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (normalize(to) === normalize(window.location.pathname)) {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    return;
  }
  window.history.pushState({}, '', to);
  window.dispatchEvent(new Event(EVENT));
  window.scrollTo(0, 0);
}

export function usePath() {
  const [path, setPath] = useState(() => normalize(window.location.pathname));
  useEffect(() => {
    const update = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', update);
    window.addEventListener(EVENT, update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener(EVENT, update);
    };
  }, []);
  return path;
}

// a normal <a href>, so links can be opened in a new tab or copied;
// a plain left click moves pages without a reload
export function Link({ to, onClick, children, ...rest }) {
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
