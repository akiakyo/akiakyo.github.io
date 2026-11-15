import { useEffect } from 'react';
import { profile } from './data';
import { findPage, notFound, pages, SITE } from './pages';
import { Link, usePath } from './router';
import { useReveal, useTheme } from './hooks';
import Nav from './components/layout/Nav';
import NotFound from './components/layout/NotFound';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Stack from './components/about/Stack';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import SideProjects from './components/projects/SideProjects';
import Contact from './components/contact/Contact';

const views = {
  home: Landing,
  about: About,
  experience: Experience,
  projects: Projects,
  'side-projects': SideProjects,
  stack: Stack,
  contact: Contact,
};

// keep the tab title, description and canonical link in step with the page
function usePageMeta(page) {
  useEffect(() => {
    const meta = page || notFound;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE + (page ? page.path : '/'));
  }, [page]);
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const path = usePath();
  const page = findPage(path);
  const View = page ? views[page.key] : NotFound;
  usePageMeta(page);
  useReveal(path);

  return (
    <>
      <Nav path={path} theme={theme} onToggleTheme={toggleTheme} />
      {/* keyed by path so each page change replays the blur-fade */}
      <main className="page route-view" key={path}>
        <View />
      </main>
      <footer className="footer">
        <nav className="footer-links" aria-label="All pages">
          {pages.map((p) => (
            <Link key={p.path} to={p.path} aria-current={p.path === path ? 'page' : undefined}>
              {p.label || 'Home'}
            </Link>
          ))}
        </nav>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </>
  );
}
