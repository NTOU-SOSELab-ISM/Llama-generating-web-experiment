// App.jsx
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');

  function handleInput(event) {
    setInputText(event.target.value);
  }

  function handleSubmit() {
    console.log(inputText);
  }

  return (
    <div>
      <h1>Typing Game</h1>
      <p>輸入文本：</p>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleSubmit}>送出</button>
    </div>
  );
}

export default App;