import React, { useState, useEffect, useRef } from 'react';
import './MainLayout.css';
import VirtualKeyboard from './VirtualKeyboard.jsx';

function MainLayout() {
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    if (isTyping) {
      const startTime = Date.now();
      const endTime = Date.now() - startTime;
      const wordsCount = inputText.split(' ').length;
      const minutes = endTime / 60000;
      setWpm(Math.floor(wordsCount / minutes));
    }
  }, [inputText, isTyping]);

  const handleKeyPress = (event) => {
    setInputText((prevInput) => prevInput + event.key);
    if (!isTyping) setIsTyping(true);
  };

  return (
    <div className="main-layout">
      <h1>打字練習網站</h1>
      <div className="text-area" onKeyPress={handleKeyPress}>
        {text.split('').map((char, index) => (
          <span key={index} style={{ color: char === inputText[index] ? 'black' : 'red' }}>
            {char}
          </span>
        ))}
      </div>
      <VirtualKeyboard />
      <p>WPM: {wpm}</p>
    </div>
  );
}

export default MainLayout;