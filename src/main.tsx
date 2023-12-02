import Header from '@components/Header/Header.tsx';
import LightSwitch from '@components/LightSwitch/LightSwitch.tsx';
import { LayoutProvider } from '@shared/layout/Layout.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <Header />
        <LightSwitch />
        <App />
      </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
