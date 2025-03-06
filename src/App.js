import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalresult = eval(input);
        setResult(evalresult);
        setInput('')
      } catch (error) {
        setResult('Math Error');
        setResult('');
      }
    }
    else if (value === 'Clear') {
      setInput('');
      setResult('');
    }
    else {
      setInput((prev) => prev + value);
    }
  };
  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="screen">
        <input type="txt" readOnly value={input} placeholder="0" />
        <input type="txt" readOnly value={result} placeholder="Result" />
      </div>
      <div className="button-row">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick("=")}>=</button>
        <button className="clear" onClick={() => handleClick("clear")}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
