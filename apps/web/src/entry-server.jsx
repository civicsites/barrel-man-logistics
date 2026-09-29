import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'next-themes';
import App from './App.jsx';

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = [
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
  ]
    .filter(Boolean)
    .join('\n');

  return { html, head };
}
