import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Component = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operator: null,
  });

  const handleClick = (event) => {
    const result = (calculate(state, event.target.textContent));
    setState(result);
  };

  const resultDisplay = (event) => {
    setState({ total: event.target.textContent });
  };

  const { total, next, operation } = state;

  return (
    <div className="container">
      <div className="output" onChange={resultDisplay}>
        {total}
        {operation}
        {next}
      </div>

      <div className="btns">
        <button type="button" className="grey" onClick={handleClick}>AC</button>
        <button type="button" className="grey" onClick={handleClick}>+/-</button>
        <button type="button" className="grey" onClick={handleClick}>%</button>
        <button type="button" className="orange" onClick={handleClick}>÷</button>
        <button type="button" className="grey" onClick={handleClick}>7</button>
        <button type="button" className="grey" onClick={handleClick}>8</button>
        <button type="button" className="grey" onClick={handleClick}>9</button>
        <button type="button" className="orange" onClick={handleClick}>x</button>
        <button type="button" className="grey" onClick={handleClick}>4</button>
        <button type="button" className="grey" onClick={handleClick}>5</button>
        <button type="button" className="grey" onClick={handleClick}>6</button>
        <button type="button" className="orange" onClick={handleClick}>-</button>
        <button type="button" className="grey" onClick={handleClick}>1</button>
        <button type="button" className="grey" onClick={handleClick}>2</button>
        <button type="button" className="grey" onClick={handleClick}>3</button>
        <button type="button" className="orange" onClick={handleClick}>+</button>
        <button type="button" className="grey span-2" onClick={handleClick}>0</button>
        <button type="button" className="grey" onClick={handleClick}>.</button>
        <button type="button" className="orange" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Component;
