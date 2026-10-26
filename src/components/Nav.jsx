import { useState } from 'react';
import { navLinks } from '../data';
import { CloseIcon, MenuIcon, MoonIcon, SoundOffIcon, SoundOnIcon, SunIcon } from '../icons';
import { scrollToSection, useActiveSection, useScrolled, useSfxEnabled } from '../hooks';
import { sfx } from '../sfx';

const ids = navLinks.map((l) => l.id);

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const scrolled = useScrolled();
  const soundOn = useSfxEnabled();

  // nav uses buttons + smooth scroll, so the url never gets a #hash
  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  const toggleTheme = () => {
    sfx.toggle(theme !== 'dark');
    onToggleTheme();
  };

  return (
    <nav className={`top-nav ${scrolled ? 'compact' : ''}`} aria-label="primary navigation">
      <button className="brand" type="button" onClick={() => go('top')}>
        &lt;akiakyo.dev /&gt;
      </button>

      <button
        className="icon-btn menu-toggle"
        aria-label={open ? 'close navigation' : 'open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
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
        <div className="nav-tools">
          <button
            className="icon-btn"
            type="button"
            data-sfx="none"
            aria-label={soundOn ? 'mute sound effects' : 'turn on sound effects'}
            aria-pressed={soundOn}
            onClick={() => sfx.setEnabled(!soundOn)}
          >
            {soundOn ? <SoundOnIcon /> : <SoundOffIcon />}
          </button>
          <button className="icon-btn" type="button" data-sfx="none" aria-label="toggle theme" onClick={toggleTheme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
