/* eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operator: null,
    };
  }

    handleClick = (event) => {
      const result = (calculate(this.state, event.target.textContent));
      this.setState(result);
    }

    resultDisplay = (event) => {
      this.setState({ total: event.target.textContent });
    }

    render() {
      const { total, next, operation } = this.state;
      return (
        <div className="container">
          <div className="output" onChange={this.resultDisplay}>
            {total}
            {operation}
            {next}
          </div>

          <div className="btns">
            <button type="button" className="grey" onClick={this.handleClick}>AC</button>
            <button type="button" className="grey" onClick={this.handleClick}>+/-</button>
            <button type="button" className="grey" onClick={this.handleClick}>%</button>
            <button type="button" className="orange" onClick={this.handleClick}>÷</button>
            <button type="button" className="grey" onClick={this.handleClick}>7</button>
            <button type="button" className="grey" onClick={this.handleClick}>8</button>
            <button type="button" className="grey" onClick={this.handleClick}>9</button>
            <button type="button" className="orange" onClick={this.handleClick}>x</button>
            <button type="button" className="grey" onClick={this.handleClick}>4</button>
            <button type="button" className="grey" onClick={this.handleClick}>5</button>
            <button type="button" className="grey" onClick={this.handleClick}>6</button>
            <button type="button" className="orange" onClick={this.handleClick}>-</button>
            <button type="button" className="grey" onClick={this.handleClick}>1</button>
            <button type="button" className="grey" onClick={this.handleClick}>2</button>
            <button type="button" className="grey" onClick={this.handleClick}>3</button>
            <button type="button" className="orange" onClick={this.handleClick}>+</button>
            <button type="button" className="grey span-2" onClick={this.handleClick}>0</button>
            <button type="button" className="grey" onClick={this.handleClick}>.</button>
            <button type="button" className="orange" onClick={this.handleClick}>=</button>
          </div>
        </div>
      );
    }
}

export default Calculator;
