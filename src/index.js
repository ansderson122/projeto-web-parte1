import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './view/App';
import { AnimesProvider } from './animesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimesProvider>
      <App />
    </AnimesProvider>
  </React.StrictMode>
);

