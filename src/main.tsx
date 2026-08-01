import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Swap the print-media Google Fonts stylesheet to "all" once it has loaded,
// so it downloads without blocking first paint (the "loadCSS" pattern).
// Done here instead of an inline `onload` attribute so the page can run
// under a strict script-src CSP with no 'unsafe-inline'.
document.querySelectorAll<HTMLLinkElement>('link[data-async-font]').forEach((link) => {
  const applyStylesheet = () => {
    link.media = 'all';
  };
  if (link.sheet) {
    applyStylesheet();
  } else {
    link.addEventListener('load', applyStylesheet, { once: true });
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
