#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PRERENDER_ROUTES } from '../src/prerender-routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');
const serverEntryPath = path.join(distDir, 'server', 'entry-server.js');

function injectPrerenderedHtml(template, { html, head }) {
  const withoutEmptyTitle = template.replace(/<title>\s*<\/title>\s*/i, '');
  const withHead = withoutEmptyTitle.replace(
    /(\t*)<\/head>/,
    `$1${head.split('\n').join(`\n$1`)}\n$1</head>`
  );
  return withHead.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );
}

function outputPathForRoute(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }
  return path.join(distDir, route.slice(1), 'index.html');
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    console.error('Missing dist/index.html. Run vite build first.');
    process.exit(1);
  }

  if (!fs.existsSync(serverEntryPath)) {
    console.error('Missing dist/server/entry-server.js. Run vite build --ssr src/entry-server.jsx first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  for (const route of PRERENDER_ROUTES) {
    const result = render(route);
    const pageHtml = injectPrerenderedHtml(template, result);
    const outPath = outputPathForRoute(route);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, pageHtml, 'utf-8');
    console.log(`prerendered ${route} -> ${path.relative(distDir, outPath)}`);
  }

  fs.rmSync(path.join(distDir, 'server'), { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
