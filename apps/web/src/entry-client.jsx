import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'next-themes';
import App from '@/App';
import '@/index.css';

const rootElement = document.getElementById('root');

hydrateRoot(
  rootElement,
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
);
