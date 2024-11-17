import React, { useState, useRef } from 'react';
import './App.css';
import MainLayout from './components/MainLayout.jsx';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : ''}`}>
      <MainLayout />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}

export default App;