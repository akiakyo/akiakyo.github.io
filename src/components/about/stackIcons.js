// tech logos for the stack chips, inlined at build time by unplugin-icons.
// ink: the logo is solid black, so it is flipped to white on the dark theme.
import Cpp from '~icons/devicon/cplusplus';
import Python from '~icons/devicon/python';
import Java from '~icons/devicon/java';
import JavaScript from '~icons/devicon/javascript';
import TypeScript from '~icons/devicon/typescript';
import NextJs from '~icons/devicon/nextjs';
import ReactIcon from '~icons/devicon/react';
import Vite from '~icons/devicon/vitejs';
import Tailwind from '~icons/devicon/tailwindcss';
import Html from '~icons/devicon/html5';
import Node from '~icons/devicon/nodejs';
import Express from '~icons/devicon/express';
import Prisma from '~icons/devicon/prisma';
import Workers from '~icons/devicon/cloudflareworkers';
import Cloudflare from '~icons/devicon/cloudflare';
import MySql from '~icons/devicon/mysql';
import Postgres from '~icons/devicon/postgresql';
import Sqlite from '~icons/devicon/sqlite';
import VsCode from '~icons/devicon/vscode';
import IntelliJ from '~icons/devicon/intellij';
import Git from '~icons/devicon/git';
import GitHub from '~icons/devicon/github';
import Vercel from '~icons/devicon/vercel';
import Photoshop from '~icons/devicon/photoshop';
import Illustrator from '~icons/devicon/illustrator';
import AfterEffects from '~icons/devicon/aftereffects';
import Premiere from '~icons/devicon/premierepro';
import Php from '~icons/devicon/php';
import Bash from '~icons/devicon/bash';
import GoogleCloud from '~icons/devicon/googlecloud';
import Cable from '~icons/lucide/cable';
import Network from '~icons/lucide/network';
import Scissors from '~icons/lucide/scissors';

export const stackIcons = {
  'C++': { Icon: Cpp },
  Python: { Icon: Python },
  Java: { Icon: Java },
  JavaScript: { Icon: JavaScript },
  TypeScript: { Icon: TypeScript },
  PHP: { Icon: Php },
  Bash: { Icon: Bash, ink: true },
  'Next.js': { Icon: NextJs, ink: true },
  React: { Icon: ReactIcon },
  Vite: { Icon: Vite },
  'Tailwind CSS': { Icon: Tailwind },
  HTML: { Icon: Html },
  'Node.js': { Icon: Node },
  Express: { Icon: Express, ink: true },
  Prisma: { Icon: Prisma, ink: true },
  'Cloudflare Workers': { Icon: Workers },
  'Durable Objects': { Icon: Cloudflare },
  WebSockets: { Icon: Cable, ink: true },
  MySQL: { Icon: MySql },
  PostgreSQL: { Icon: Postgres },
  'Cloudflare D1': { Icon: Cloudflare },
  SQLite: { Icon: Sqlite },
  'VS Code': { Icon: VsCode },
  'IntelliJ IDEA': { Icon: IntelliJ },
  Git: { Icon: Git },
  GitHub: { Icon: GitHub, ink: true },
  Vercel: { Icon: Vercel, ink: true },
  Cloudflare: { Icon: Cloudflare },
  Wrangler: { Icon: Cloudflare },
  'Google Cloud': { Icon: GoogleCloud },
  'Data structures & algorithms': { Icon: Network, ink: true },
  Photoshop: { Icon: Photoshop },
  Illustrator: { Icon: Illustrator },
  'After Effects': { Icon: AfterEffects },
  'Premiere Pro': { Icon: Premiere },
  CapCut: { Icon: Scissors, ink: true },
};
