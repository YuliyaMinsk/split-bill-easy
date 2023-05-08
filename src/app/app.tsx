import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

import { RoutesApp } from './routes-app.tsx';

import '../shared/i18n/i18n.ts';
import '../shared/styles/index.css';

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
