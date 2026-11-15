import { useEffect, useState } from 'react';

const THEME_KEY = 'aquio-theme';

// index.html sets data-theme before paint; this keeps react in sync with it
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // storage blocked, theme just won't persist
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return [theme, toggle];
}

// smooth scroll without touching the url
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (id === 'top') window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-28% 0px -62% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

// adds .visible to every .reveal element once it scrolls into view
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }),
      // threshold 0: a section taller than the screen (the side projects) could never reach a percentage
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useScrolled(offset = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolled;
}
