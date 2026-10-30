import { profile } from './data';
import { useReveal, useSfx, useTheme } from './hooks';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';
import Stack from './components/Stack';
import Contact from './components/Contact';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useReveal();
  useSfx();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="page" id="top">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SideProjects />
        <Stack />
        <Contact />
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>built with react · vite · placed pixel by pixel</span>
        </footer>
      </main>
    </>
  );
}
