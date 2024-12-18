import { StrictMode } from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);