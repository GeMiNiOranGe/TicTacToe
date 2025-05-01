import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  React.createElement(StrictMode, undefined, React.createElement(App)),
);
