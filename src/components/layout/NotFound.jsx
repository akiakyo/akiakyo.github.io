import { Link } from '../../router';
import './styles/section.css';

export default function NotFound() {
  return (
    <header className="page-head not-found reveal">
      <h1>404</h1>
      <p className="muted">This page doesn't exist. It may have moved when the site got its own pages.</p>
      <Link to="/" className="btn primary">
        Go Home
      </Link>
    </header>
  );
}
