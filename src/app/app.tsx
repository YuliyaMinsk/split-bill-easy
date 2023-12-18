import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { persistor, store } from '@/shared/store/index.ts';

import { RoutesApp } from './routes-app.tsx';
import { initializeI18n } from '../shared/i18n/i18n.ts';
import '../shared/styles/index.css';

initializeI18n();

// Prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
);
