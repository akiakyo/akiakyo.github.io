import { profile } from './data';
import { useReveal, useTheme } from './hooks';
import Nav from './components/layout/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Stack from './components/about/Stack';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import SideProjects from './components/projects/SideProjects';
import Contact from './components/contact/Contact';
import GitHubGraph from './components/github/GitHubGraph';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useReveal();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SideProjects />
        <Stack />
        <GitHubGraph />
        <Contact />
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React and Vite</span>
        </footer>
      </main>
    </>
  );
}
