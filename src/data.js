import sinta from './assets/logos/sinta.webp';
import zxeno from './assets/logos/zxeno.webp';
import mag from './assets/logos/mag.webp';
import pup from './assets/logos/pup.webp';

// side project screenshots live in assets/shots/<project>/01.webp … 10.webp
const shotFiles = import.meta.glob('./assets/shots/*/*.webp', { eager: true, import: 'default' });
const gallery = (dir, captions) =>
  captions.map((caption, i) => ({
    src: shotFiles[`./assets/shots/${dir}/${String(i + 1).padStart(2, '0')}.webp`],
    caption,
  }));

export const profile = {
  name: 'Aquio Fulgencio',
  handle: 'akiakyo',
  location: 'Philippines · UTC+8',
  email: 'aquiokenzie37@gmail.com',
  github: 'https://github.com/akiakyo',
  discord: '@akiakyo',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'side-projects', label: 'Side projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export const skills = ['Frontend', 'Backend', 'Real-time systems', 'APIs', 'Databases', 'Deployment', 'UI/UX'];

export const experience = [
  {
    name: 'SintaChat',
    role: 'Founder',
    logo: sinta,
    desc: 'Leading product direction and engineering for a real-time anonymous student chat platform, including matchmaking, moderation, community features, edge infrastructure, and deployment.',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Cloudflare Workers', 'Durable Objects', 'WebSockets', 'Cloudflare D1', 'SQLite', 'Wrangler'],
    link: { href: 'https://sintachat.com', label: 'sintachat.com' },
  },
  {
    name: 'ZXENO Studio',
    role: 'CTO · Software engineer',
    logo: zxeno,
    inkLogo: true, // solid black mark, flipped to white in dark mode
    desc: 'Working on technical direction and software engineering for the studio, from implementation decisions and web development to deployment workflows and production-ready experiences.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: { href: 'https://zxenostudio.com', label: 'zxenostudio.com' },
  },
  {
    name: 'Magbungkal MC',
    role: 'Lead developer',
    logo: mag,
    desc: "Leading development for Magbungkal MC and maintaining its web presence, with hands-on work across the project's technical systems and implementation.",
    tags: ['HTML', 'JavaScript'],
    link: { href: 'https://magbungkal.com', label: 'magbungkal.com' },
  },
  {
    name: 'Polytechnic University of the Philippines',
    role: 'Computer engineering student · Software engineering',
    logo: pup,
    desc: 'Studying computer engineering while building practical experience through software products, technical leadership, team projects, and hands-on development.',
    tags: [],
    link: null,
  },
];

export const projects = [
  {
    name: 'SintaChat',
    kicker: 'Real-time student platform',
    logo: sinta,
    desc: 'Anonymous chat for students in the Philippines, built around real-time matching, safety, moderation, and edge-first infrastructure.',
    tags: ['Next.js 15', 'Cloudflare Workers'],
    href: 'https://sintachat.com',
    label: 'sintachat.com',
  },
  {
    name: 'ZXENO Studio',
    kicker: 'Creative + technology studio',
    logo: zxeno,
    inkLogo: true, // solid black mark, flipped to white in dark mode
    desc: 'A creative and technology studio where I lead engineering as CTO, bridging creative work with technical execution.',
    tags: ['React', 'TypeScript'],
    href: 'https://zxenostudio.com',
    label: 'zxenostudio.com',
  },
  {
    name: 'Magbungkal MC',
    kicker: 'Minecraft community',
    logo: mag,
    desc: 'A Minecraft project where I serve as lead developer. The website runs on a lightweight HTML and JavaScript stack.',
    tags: ['HTML', 'JavaScript'],
    href: 'https://magbungkal.com',
    label: 'magbungkal.com',
  },
];

export const sideProjects = [
  {
    name: 'Yrah',
    kicker: 'Free flashcard maker',
    shots: gallery('yrah', [
      'Home — study cuter, learn faster',
      'Quick actions + starter deck',
      'How it works in three steps',
      'Install it as a phone app',
      'The toolbox: every tool in one place',
      'PDF to flashcards',
      'Scan your notebook to flashcards',
      'Paste notes to flashcards',
      'Your library of courses & decks',
      'Study mode with swipe-to-learn cards',
    ]),
    desc: 'Turn PDFs, Word docs, slides, notes and photos of your notebook into flashcards in seconds. Free, no sign-up, and works offline.',
    href: 'https://yrah.vercel.app/',
    label: 'yrah.vercel.app',
  },
  {
    name: 'ken.visuals',
    kicker: 'Portfolio for a motion designer',
    shots: gallery('ken', [
      'Hero with editor-style tool panels',
      'Services marquee into the work section',
      'Frames that move: composition viewer',
      'Draggable editing timeline',
      'About: movement with intent',
      'Skills as keyframe sliders',
      'Worked with: client projects',
      'Contact as a render queue',
      'Timeline scrubbing through the reel',
      'Fully responsive on mobile',
    ]),
    desc: 'Portfolio for Kenjie Villacorta, a motion designer and video editor, with an editor-inspired interface of timelines, speed graphs and tool panels.',
    href: 'https://kenvisuals.vercel.app/',
    label: 'kenvisuals.vercel.app',
  },
  {
    name: 'Akademy',
    kicker: 'Free coding tutorials',
    shots: gallery('akademy', [
      'Home — learn to code, one lesson at a time',
      'Course page with a free certificate',
      'Lessons with basics, keywords and tips',
      'Live editor that runs code in the browser',
      'Flashcards for every lesson',
      'Chapter quizzes and final exams',
      'Printable certificate of completion',
    ]),
    desc: '34 courses and 133 short lessons with a live editor, flashcards, quizzes and certificates. No install and no account.',
    href: 'https://akademyy.vercel.app/',
    label: 'akademyy.vercel.app',
  },
];

export const stack = [
  { title: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
  { title: 'Web & frontend', items: ['Next.js', 'React', 'Vite', 'Tailwind CSS', 'HTML'] },
  { title: 'Backend & real-time', items: ['Node.js', 'Express', 'Prisma', 'Cloudflare Workers', 'Durable Objects', 'WebSockets'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'Cloudflare D1', 'SQLite'] },
  { title: 'Tools & deployment', items: ['VS Code', 'IntelliJ IDEA', 'Git', 'GitHub', 'Vercel', 'Cloudflare', 'Wrangler'] },
  { title: 'Creative', items: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'CapCut'] },
];
