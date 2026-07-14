import { useState, useEffect } from "react";

/* ── SVG Icons ── */
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconDiscord = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconMinecraft = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h4v4H6V6zm6 0h4v4h-4V6zm-6 6h4v4H6v-4zm6 6h4v4h-4v-4zm0-6h4v4h-4v-4zm-6 6h4v4H6v-4z" />
  </svg>
);

const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconServer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconSpark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);



const IconCube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93a10 10 0 0 1 1.76 2.41M22 12h-1M20.83 16.59A10 10 0 0 1 19.07 19.07M16.59 20.83A10 10 0 0 1 12 22M7.41 20.83a10 10 0 0 1-2.41-1.76M2 12H1M3.17 7.41A10 10 0 0 1 4.93 4.93M7.41 3.17A10 10 0 0 1 12 2" />
  </svg>
);

/* ── Avatar SVG ── */
const AvatarSVG = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="100" height="100" fill="#f8f8f8" />
    {/* body */}
    <rect x="28" y="55" width="44" height="35" rx="4" fill="#1a1a1a" />
    {/* head */}
    <rect x="30" y="18" width="40" height="38" rx="6" fill="#e0c49a" />
    {/* hair */}
    <rect x="28" y="14" width="44" height="14" rx="5" fill="#1a1a1a" />
    {/* eyes */}
    <rect x="38" y="28" width="8" height="8" rx="2" fill="#1a1a1a" />
    <rect x="54" y="28" width="8" height="8" rx="2" fill="#1a1a1a" />
    {/* eye shine */}
    <rect x="40" y="30" width="3" height="3" rx="1" fill="#ffffff" />
    <rect x="56" y="30" width="3" height="3" rx="1" fill="#ffffff" />
    {/* mouth */}
    <path d="M42 42 Q50 48 58 42" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* collar */}
    <rect x="42" y="55" width="16" height="6" rx="2" fill="#2a2a2a" />
    {/* pixel accent */}
    <rect x="70" y="60" width="6" height="6" fill="#333" opacity="0.5" />
    <rect x="24" y="60" width="6" height="6" fill="#333" opacity="0.5" />
  </svg>
);

/* ── Typewriter hook ── */
function useTypewriter(text: string, speed = 80, delay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayed, done };
}

/* ── Section wrapper ── */
function Section({ children, delay = "delay-200", id }: { children: React.ReactNode; delay?: string; id?: string }) {
  return (
    <section id={id} className={`fade-in-up ${delay} mb-10`}>
      {children}
    </section>
  );
}

/* ── Divider ── */
function Divider() {
  return <div className="w-full h-px bg-black/8 my-8" />;
}

export default function App() {
  const { displayed, done } = useTypewriter("akiakyo", 120, 600);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* ── Main layout ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* ── PROFILE ROW ── */}
        <div className="flex items-start gap-5 mb-12 fade-in-left">
          {/* Avatar */}
          <div
            className="float-anim flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-black/10 overflow-hidden"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
          >
            <AvatarSVG />
          </div>

          {/* Name + meta */}
          <div className="flex flex-col justify-center min-h-16 sm:min-h-20">
            <h1
              className={`animated-name text-xl sm:text-2xl font-bold tracking-tight text-black leading-none mb-1 ${done ? "cursor" : ""}`}
              style={{ letterSpacing: "-0.02em" }}
            >
              {displayed}
              {!done && <span className="animate-pulse">|</span>}
            </h1>
            <p className="text-xs text-black/40 font-normal tracking-widest uppercase mb-2 text-glow">aky.dev</p>
            <div className="flex flex-wrap gap-3 text-black/50 text-xs">
              <span className="flex items-center gap-1 text-glow">
                <IconLocation />
                Philippines · UTC+8
              </span>
              <span className="flex items-center gap-1 text-glow">
                <IconClock />
                Available for work
              </span>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── I OFFER ── */}
        <Section delay="delay-200" id="offer">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-5 section-title-glow">I offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: <IconMinecraft />,
                title: "Minecraft Development",
                sub: "3 years experience",
              },
              {
                icon: <IconBot />,
                title: "Discord Bot Dev",
                sub: "2 years · Python",
              },
              {
                icon: <IconGlobe />,
                title: "Website Development",
                sub: "2 years experience",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`glow-card border border-black/8 rounded-xl p-4 fade-in-up delay-${(i + 2) * 100}`}
                style={{ background: "rgba(0,0,0,0.015)" }}
              >
                <div className="flex items-center gap-2 mb-2 text-black/70">
                  {item.icon}
                  <span className="text-sm font-semibold text-glow-strong">{item.title}</span>
                </div>
                <p className="text-xs text-black/40 text-glow">{item.sub}</p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── SERVICES ── */}
        <Section delay="delay-300" id="services">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-5 section-title-glow">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: <IconCode />,
                title: "Denizen Scripting",
                desc: "Custom scripts and quest systems for Paper servers",
              },
              {
                icon: <IconSpark />,
                title: "Spark Profiler Reading",
                desc: "Diagnose lag, analyze profiler reports & give fixes",
              },
              {
                icon: <IconSettings />,
                title: "Plugin Configuration",
                desc: "Full setup and tuning of any plugin to your needs",
              },
              {
                icon: <IconServer />,
                title: "Server Optimization",
                desc: "Paper · Purpur · Pufferfish & beyond",
              },
              {
                icon: <IconCube />,
                title: "Custom Models Setup",
                desc: "Nexo · ItemsAdder · Oraxen resource packs",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`glow-card border border-black/8 rounded-xl p-4 flex items-start gap-3 fade-in-up delay-${(i + 2) * 100}`}
                style={{ background: "rgba(0,0,0,0.015)" }}
              >
                <div className="mt-0.5 text-black/60 flex-shrink-0">{s.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-black mb-0.5 text-glow-strong">{s.title}</p>
                  <p className="text-xs text-black/40 text-glow">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── PROJECTS ── */}
        <Section delay="delay-400" id="projects">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-5 section-title-glow">Projects</h2>
          <div className="flex flex-col gap-4">

            {/* AKY Services */}
            <a
              href="https://discord.gg/jkWE9S9wGm"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card border border-black/8 rounded-xl p-5 block group fade-in-up delay-200"
              style={{ background: "rgba(0,0,0,0.015)" }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <IconStar />
                  <span className="text-sm font-bold text-black text-glow-strong">AKY Services</span>
                </div>
                <span className="icon-glow text-black/30 group-hover:text-black/60 transition-colors">
                  <IconLink />
                </span>
              </div>
              <p className="text-xs text-black/50 leading-relaxed text-glow">
                A small business I run for Minecraft server owners — I handle Denizen scripting, plugin and paper configs, custom models (Nexo/Oraxen), Discord bots, full server dev, Spark analysis, LuckPerms, and more.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Denizen", "Discord Bots", "Configs", "Models", "Optimization"].map((tag) => (
                  <span key={tag} className="text-xs border border-black/10 rounded-md px-2 py-0.5 text-black/40 text-glow">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Magbungkal MC */}
            <a
              href="https://magbungkal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card border border-black/8 rounded-xl p-5 block group fade-in-up delay-300"
              style={{ background: "rgba(0,0,0,0.015)" }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <IconMinecraft />
                  <span className="text-sm font-bold text-black text-glow-strong">Magbungkal MC</span>
                </div>
                <span className="icon-glow text-black/30 group-hover:text-black/60 transition-colors">
                  <IconLink />
                </span>
              </div>
              <p className="text-xs text-black/50 leading-relaxed text-glow">
                A Minecraft server — Est. July 2023
              </p>
              <div className="mt-3 flex flex-col gap-1">
                <span className="text-xs text-black/40 flex items-center gap-1.5 text-glow">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0" />
                  Former Owner: July 2023 – March 2025
                </span>
                <span className="text-xs text-black/60 flex items-center gap-1.5 font-semibold text-glow">
                  <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  Current Lead Developer: March 2025 – Present
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Paper", "Denizen", "Custom Models", "Server Dev"].map((tag) => (
                  <span key={tag} className="text-xs border border-black/10 rounded-md px-2 py-0.5 text-black/40 text-glow">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

          </div>
        </Section>

        <Divider />

        {/* ── CONTACT ── */}
        <Section delay="delay-500" id="contact">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-5 section-title-glow">Contact</h2>
          <div className="flex items-center gap-5">
            {/* Email */}
            <a
              href="mailto:aky@aky.dev"
              className="icon-glow text-black/50 hover:text-black transition-colors"
              title="Email"
            >
              <IconEmail />
            </a>
            {/* Discord */}
            <a
              href="https://discord.gg/jkWE9S9wGm"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-glow text-black/50 hover:text-black transition-colors"
              title="Discord"
            >
              <IconDiscord />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/akiakyo"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-glow text-black/50 hover:text-black transition-colors"
              title="GitHub"
            >
              <IconGithub />
            </a>
          </div>
        </Section>

        {/* ── Footer ── */}
        <div className="mt-16 text-xs text-black/20 text-glow">
          © {new Date().getFullYear()} akiakyo · Philippines
        </div>

      </div>
    </div>
  );
}
