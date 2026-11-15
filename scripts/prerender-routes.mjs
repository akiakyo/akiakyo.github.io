// runs after `vite build`. github pages serves files, not routes, so every page in
// src/pages.js gets its own dist/<path>/index.html (the same app, with that page's
// title and description baked in for link previews and search engines). also writes
// dist/404.html for unknown paths and a sitemap listing every page.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { notFound, pages, SITE } from '../src/pages.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

const attr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function withMeta(html, { title, description, url }) {
  const set = (pattern, value) => {
    if (!pattern.test(html)) throw new Error(`index.html is missing ${pattern}`);
    html = html.replace(pattern, value);
  };
  set(/<title>[^<]*<\/title>/, `<title>${attr(title)}</title>`);
  set(/(<meta name="description" content=")[^"]*(")/, `$1${attr(description)}$2`);
  set(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  set(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  set(/(<meta property="og:title" content=")[^"]*(")/, `$1${attr(title)}$2`);
  set(/(<meta property="og:description" content=")[^"]*(")/, `$1${attr(description)}$2`);
  set(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${attr(title)}$2`);
  set(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${attr(description)}$2`);
  return html;
}

for (const page of pages) {
  const dir = join(dist, page.path); // '/' writes dist/index.html itself
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), withMeta(shell, { ...page, url: SITE + page.path }));
  console.log(`  ${page.path === '/' ? '' : page.path}/index.html`);
}

writeFileSync(join(dist, '404.html'), withMeta(shell, { ...notFound, url: SITE + '/' }));
console.log('  404.html');

const today = new Date().toISOString().slice(0, 10);
const urls = pages.map((p) => `  <url>\n    <loc>${SITE}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n');
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log('  sitemap.xml');
