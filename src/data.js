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
  name: 'aquio fulgencio',
  handle: 'akiakyo',
  location: 'philippines · utc+8',
  email: 'aquiokenzie37@gmail.com',
  github: 'https://github.com/akiakyo',
  discord: '@akiakyo',
};

export const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'side-projects', label: 'side projects' },
  { id: 'stack', label: 'tech stack' },
  { id: 'contact', label: 'contact' },
];

export const skills = ['frontend', 'backend', 'real-time systems', 'apis', 'databases', 'deployment', 'ui/ux'];

export const experience = [
  {
    name: 'sintachat',
    role: 'founder',
    logo: sinta,
    logoBg: '#fff',
    desc: 'leading product direction and engineering for a real-time anonymous student chat platform, including matchmaking, moderation, community features, edge infrastructure, and deployment.',
    tags: ['next.js 15', 'react 19', 'typescript', 'cloudflare workers', 'durable objects', 'websockets', 'cloudflare d1', 'sqlite', 'cloudflare', 'wrangler'],
    link: { href: 'https://sintachat.com', label: 'sintachat.com' },
  },
  {
    name: 'zxeno studio',
    role: 'cto · software engineer',
    logo: zxeno,
    logoBg: '#fff',
    desc: 'working on technical direction and software engineering for the studio, from implementation decisions and web development to deployment workflows and production-ready experiences.',
    tags: ['react', 'typescript', 'vite'],
    link: { href: 'https://zxenostudio.com', label: 'zxenostudio.com' },
  },
  {
    name: 'magbungkal mc',
    role: 'lead developer',
    logo: mag,
    logoBg: '#14110f',
    desc: "leading development for magbungkal mc and maintaining its web presence, with hands-on work across the project's technical systems and implementation.",
    tags: ['html', 'javascript'],
    link: { href: 'https://magbungkal.com', label: 'magbungkal.com' },
  },
  {
    name: 'polytechnic university of the philippines',
    role: 'computer engineering student · specialization in software engineering',
    logo: pup,
    logoBg: '#fff',
    desc: 'studying computer engineering while building practical experience through software products, technical leadership, team projects, and hands-on development.',
    tags: [],
    link: null,
  },
];

export const projects = [
  {
    name: 'sintachat',
    kicker: 'real-time student platform',
    logo: sinta,
    logoBg: '#fff',
    desc: 'anonymous chat platform for students in the philippines, built around real-time matching, user safety, moderation, community features, and edge-first infrastructure.',
    tags: ['next.js 15', 'react 19', 'typescript', 'cloudflare workers'],
    href: 'https://sintachat.com',
    color: 'yellow',
  },
  {
    name: 'zxeno studio',
    kicker: 'creative + technology studio',
    logo: zxeno,
    logoBg: '#fff',
    desc: 'creative and technology studio where i handle cto and software engineering responsibilities, bridging creative work with technical execution.',
    tags: ['react', 'typescript', 'vite'],
    href: 'https://zxenostudio.com',
    color: 'pink',
  },
  {
    name: 'magbungkal mc',
    kicker: 'lead developer · minecraft community',
    logo: mag,
    logoBg: '#14110f',
    desc: 'minecraft project where i serve as lead developer. the website at magbungkal.com uses a lightweight html and javascript stack.',
    tags: ['html', 'javascript'],
    href: 'https://magbungkal.com',
    color: 'blue',
  },
];

export const sideProjects = [
  {
    name: 'yrah',
    kicker: 'free flashcard maker',
    shots: gallery('yrah', [
      'home — study cuter, learn faster',
      'quick actions + starter deck',
      'how it works in three steps',
      'install it as a phone app',
      'the toolbox: every tool in one place',
      'pdf to flashcards',
      'scan your notebook to flashcards',
      'paste notes to flashcards',
      'your library of courses & decks',
      'study mode with swipe-to-learn cards',
    ]),
    desc: 'turn pdfs, word docs, slides, notes and photos of your notebook into flashcards in seconds. free, no sign up, and works offline on your phone.',
    href: 'https://yrah.vercel.app/',
    label: 'yrah.vercel.app',
  },
  {
    name: 'ken.visuals',
    kicker: 'portfolio for a motion designer',
    shots: gallery('ken', [
      'hero with editor-style tool panels',
      'services marquee into the work section',
      'frames that move: composition viewer',
      'draggable editing timeline',
      'about: movement with intent',
      'skills as keyframe sliders',
      'worked with: client projects',
      'contact as a render queue',
      'timeline scrubbing through the reel',
      'fully responsive on mobile',
    ]),
    desc: 'portfolio site for kenjie villacorta, a motion designer and video editor, with an editor-inspired interface of timelines, speed graphs and tool panels.',
    href: 'https://kenvisuals.vercel.app/',
    label: 'kenvisuals.vercel.app',
  },
];

export const stack = [
  { title: 'languages', items: ['c++', 'python', 'java', 'javascript', 'typescript'] },
  { title: 'web & frontend', items: ['next.js', 'react', 'vite', 'tailwind css', 'html'] },
  { title: 'backend & realtime', items: ['node.js', 'express', 'prisma', 'cloudflare workers', 'durable objects', 'websockets'] },
  { title: 'databases', items: ['mysql', 'postgresql', 'cloudflare d1', 'sqlite'] },
  { title: 'development & deployment', items: ['visual studio code', 'intellij idea', 'git', 'github', 'vercel', 'cloudflare', 'wrangler'] },
  { title: 'creative tools', items: ['photoshop', 'illustrator', 'after effects', 'premiere pro', 'capcut'] },
];
