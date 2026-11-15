import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, NextIcon, PrevIcon } from '../../icons';
import './styles/lightbox.css';

const wrap = (i, n) => (i + n) % n;

export default function Lightbox({ project, index, onIndex, onClose }) {
  const shots = project.shots;
  const closeRef = useRef(null);
  const prev = () => onIndex(wrap(index - 1, shots.length));
  const next = () => onIndex(wrap(index + 1, shots.length));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  // focus the close button on open, give focus back on close
  useEffect(() => {
    const before = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      before?.focus?.();
    };
  }, []);

  // portal to body: the section's reveal transform would otherwise trap position: fixed
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} screenshots`} onClick={onClose}>
      <figure className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-bar">
          <span className="muted">
            {index + 1} / {shots.length}
          </span>
          <button ref={closeRef} className="icon-btn" type="button" aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <img src={shots[index].src} alt={shots[index].caption} />
        <figcaption>
          <button className="icon-btn" type="button" aria-label="Previous screenshot" onClick={prev}>
            <PrevIcon />
          </button>
          <span>{shots[index].caption}</span>
          <button className="icon-btn" type="button" aria-label="Next screenshot" onClick={next}>
            <NextIcon />
          </button>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
