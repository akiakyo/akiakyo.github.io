import { useState } from 'react';
import { navLinks } from '../../data';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '../../icons';
import { scrollToSection, useActiveSection, useScrolled } from '../../hooks';
import pfp from '../../assets/pfp/pfp-480.webp';
import './styles/nav.css';

const ids = navLinks.map((l) => l.id);

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const scrolled = useScrolled(8);

  // nav uses buttons + smooth scroll, so the url never gets a #hash
  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <div className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="top-nav" aria-label="Primary">
        <button className="brand" type="button" onClick={() => go('top')}>
          <img className="brand-mark" src={pfp} alt="" width="32" height="32" />
          akiakyo
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="nav-tools">
          <button
            className="icon-btn"
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </div>
  );
}
