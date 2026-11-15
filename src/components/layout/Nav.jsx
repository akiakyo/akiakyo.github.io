import { useState } from 'react';
import { pages } from '../../pages';
import { Link } from '../../router';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '../../icons';
import { useScrolled } from '../../hooks';
import pfp from '../../assets/pfp/pfp-480.webp';
import './styles/nav.css';

const links = pages.filter((p) => p.label);

export default function Nav({ path, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);
  const close = () => setOpen(false);

  return (
    <div className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="top-nav" aria-label="Primary">
        <Link className="brand" to="/" onClick={close}>
          <img className="brand-mark" src={pfp} alt="" width="32" height="32" />
          akiakyo
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link ${path === l.path ? 'active' : ''}`}
              aria-current={path === l.path ? 'page' : undefined}
              onClick={close}
            >
              {l.label}
            </Link>
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
