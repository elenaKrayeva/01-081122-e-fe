import React, { useState } from 'react';

export const ContrComp = () => {
  const [inputValue, setInputValue] = useState('');
  const [words, setWords] = useState([]);

  const handleInputChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const handleAddClick = () => {
    if (inputValue !== '') {
      setWords([...words, inputValue]);
      setInputValue('');
    }
  };

  const handleClearClick = () => {
    setWords([]);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleClearClick}>Clear</button>
      <div>
        {words.map((word, index) => (
          <span key={index}>{index > 0 ? ` - ${word}` : word}</span>
        ))}
      </div>
    </div>
  );
}; 










