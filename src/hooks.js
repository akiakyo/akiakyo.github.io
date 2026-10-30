import { useEffect, useState } from 'react';
import { sfx } from './sfx';

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

// adds .visible to every .reveal / .pop-in element once it scrolls into view,
// and plays typing blips when that brings typed text with it
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal, .pop-in');
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
          if (e.target.classList.contains('reveal') && e.target.querySelector('.tw')) sfx.typing(1.1);
        }),
      { threshold: 0.1, rootMargin: '0px 0px -30px' }
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

export function useSfxEnabled() {
  const [on, setOn] = useState(sfx.isEnabled);
  useEffect(() => sfx.subscribe(setOn), []);
  return on;
}

// site-wide sounds: soft blip on hover, select beep on click.
// elements can opt into another sound with data-sfx="flip", or out with data-sfx="none".
export function useSfx() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover)').matches;
    let lastTarget = null;

    const onOver = (e) => {
      const el = e.target.closest('a, button');
      if (el === lastTarget) return;
      lastTarget = el;
      if (el && canHover && el.closest('[data-sfx]')?.dataset.sfx !== 'none') sfx.hover();
    };
    const onClick = (e) => {
      const el = e.target.closest('a, button');
      if (!el) return;
      const kind = el.closest('[data-sfx]')?.dataset.sfx;
      if (kind === 'none') return;
      if (kind === 'flip') sfx.flip();
      else sfx.tap();
    };

    document.addEventListener('pointerover', onOver);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('click', onClick);
    };
  }, []);
}
