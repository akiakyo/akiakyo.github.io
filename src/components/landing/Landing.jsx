import { experience, profile, projects, sideProjects, skills, stack } from '../../data';
import { ArrowIcon, MailIcon } from '../../icons';
import { Link } from '../../router';
import { stackIcons } from '../about/stackIcons';
import Hero from '../hero/Hero';
import GitHubGraph from '../github/GitHubGraph';
import './styles/landing.css';

// the landing page: the hero, then one card per page that previews what's inside
// and opens it, in the soft bento look of aky's first reference (aky, 2026-11-15)

const toolCount = stack.reduce((n, g) => n + g.items.length, 0);
// a short strip of logos for the stack card, one per group so it shows the range
const stripTools = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Cloudflare Workers', 'PostgreSQL', 'Git', 'Google Cloud', 'Python', 'Photoshop'];

function Card({ to, i, span, title, text, className = '', children }) {
  return (
    <div className={`bento-cell blur-in ${span}`} style={{ '--i': i }}>
      <Link to={to} className={`card bento-card ${className}`}>
        <span className="bento-copy">
          <span className="bento-title">{title}</span>
          <span className="bento-text muted">{text}</span>
        </span>
        <span className="tile bento-arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
        <span className="bento-visual" aria-hidden="true">
          {children}
        </span>
      </Link>
    </div>
  );
}

export default function Landing() {
  const firstSide = sideProjects[0];

  return (
    <>
      <Hero />

      <section className="group reveal" aria-label="Explore the site">
        <div className="bento">
          <Card
            to="/experience"
            i={0}
            span="span-4"
            title="Experience"
            text="Founder, CTO, lead developer, and student, all at once."
          >
            <span className="mini-roles">
              {experience.map((job) => (
                <span key={job.name} className="mini-role">
                  <img src={job.logo} alt="" className={job.inkLogo ? 'logo-ink' : undefined} />
                  <span>
                    <strong>{job.name}</strong>
                    <small>{job.role}</small>
                  </span>
                </span>
              ))}
            </span>
          </Card>

          <Card to="/projects" i={1} span="span-2" title="Projects" text="The products I lead and build.">
            <span className="mini-fan">
              {projects.map((p, n) => (
                <span key={p.name} className="mini-fan-card" style={{ '--n': n - 1, zIndex: n === 1 ? 1 : 0 }}>
                  <img src={p.logo} alt="" className={p.inkLogo ? 'logo-ink' : undefined} />
                  <small>{p.name}</small>
                </span>
              ))}
            </span>
          </Card>

          <Card
            to="/side-projects"
            i={2}
            span="span-2"
            title="Side projects"
            text={`${sideProjects.map((p) => p.name).join(', ')}.`}
            className="side-peek"
          >
            <span className="mini-browser">
              <span className="mini-bar">
                <i />
                <i />
                <i />
              </span>
              <img src={firstSide.shots[0].src} alt="" loading="lazy" />
            </span>
          </Card>

          <Card to="/stack" i={3} span="span-2" title="Stack" text={`${toolCount} languages, frameworks and tools.`}>
            <span className="mini-logos">
              {stripTools.map((t) => {
                const { Icon, ink } = stackIcons[t] || {};
                return Icon ? <Icon key={t} className={`tech-icon ${ink ? 'ink' : ''}`} /> : null;
              })}
            </span>
          </Card>

          <Card to="/about" i={4} span="span-2" title="About" text="A computer engineering student who learns by shipping.">
            <span className="mini-skills">
              {skills.slice(0, 6).map((s) => (
                <span key={s}>{s}</span>
              ))}
            </span>
          </Card>

          <div className="bento-cell blur-in span-6" style={{ '--i': 5 }}>
            <Link to="/contact" className="card bento-card contact-cta">
              <span className="bento-copy">
                <span className="bento-title">Say hello</span>
                <span className="bento-text">
                  Software projects, collaborations, product work, or engineering roles — {profile.email}
                </span>
              </span>
              <span className="tile bento-arrow" aria-hidden="true">
                <MailIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GitHubGraph />
    </>
  );
}
