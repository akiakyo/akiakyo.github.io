// every page on the site, in nav order. plain data (no jsx or imports) so the
// build script can read it too and write a real html file for each path.
export const SITE = 'https://akiakyo.dev';

export const pages = [
  {
    path: '/',
    key: 'home',
    title: 'akiakyo.dev',
    description: 'Aquio Fulgencio, an aspiring software engineer and computer engineering student at PUP, building SintaChat and ZXENO Studio.',
  },
  {
    path: '/about',
    key: 'about',
    label: 'About',
    title: 'About — Aquio Fulgencio',
    intro: 'What I do and how I learn.',
    description: 'About Aquio Fulgencio: a computer engineering student at PUP who learns by shipping real projects.',
  },
  {
    path: '/experience',
    key: 'experience',
    label: 'Experience',
    title: 'Experience — Aquio Fulgencio',
    intro: 'Where I build right now.',
    description: 'Founder of SintaChat, CTO at ZXENO Studio, lead developer at Magbungkal MC, and computer engineering student at PUP.',
  },
  {
    path: '/projects',
    key: 'projects',
    label: 'Projects',
    title: 'Projects — Aquio Fulgencio',
    intro: 'Products I lead and build.',
    description: 'SintaChat, ZXENO Studio and Magbungkal MC: the products Aquio Fulgencio leads and builds.',
  },
  {
    path: '/side-projects',
    key: 'side-projects',
    label: 'Side projects',
    title: 'Side projects — Aquio Fulgencio',
    intro: 'Things I built for fun & friends. Scroll to flip through each one.',
    description: 'Yrah, ken.visuals and Akademy: side projects by Aquio Fulgencio.',
  },
  {
    path: '/stack',
    key: 'stack',
    label: 'Stack',
    title: 'Stack — Aquio Fulgencio',
    intro: 'Languages, frameworks and tools I use.',
    description: 'The languages, frameworks, databases and tools Aquio Fulgencio works with.',
  },
  {
    path: '/contact',
    key: 'contact',
    label: 'Contact',
    title: 'Contact — Aquio Fulgencio',
    intro: "Let's build something.",
    description: 'Reach Aquio Fulgencio for software projects, collaborations, product work, or engineering roles.',
  },
];

export const notFound = {
  key: 'not-found',
  title: 'Page not found — akiakyo.dev',
  description: "This page doesn't exist on akiakyo.dev.",
};

// "/experience/" and "/experience" are the same page
export const normalize = (path) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/';
export const findPage = (path) => pages.find((p) => p.path === normalize(path)) || null;
