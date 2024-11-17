import React from 'react';
import './VirtualKeyboard.css';

const VirtualKeyboard = () => {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  const handleKeyPress = (key) => {
    // Simulate key press
  };

  return (
    <div className="virtual-keyboard">
      {keys.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((key) => (
            <button key={key} onClick={() => handleKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;