function Calculator() {
  return (
    <div className="container">
      <form>
        <input className="output" type="text" />
      </form>

      <div className="btns">
        <button type="button" className="grey">AC</button>
        <button type="button" className="grey">+/-</button>
        <button type="button" className="grey">%</button>
        <button type="button" className="orange">&divide;</button>
        <button type="button" className="grey">7</button>
        <button type="button" className="grey">8</button>
        <button type="button" className="grey">9</button>
        <button type="button" className="orange">&times;</button>
        <button type="button" className="grey">4</button>
        <button type="button" className="grey">5</button>
        <button type="button" className="grey">6</button>
        <button type="button" className="orange">&minus;</button>
        <button type="button" className="grey">1</button>
        <button type="button" className="grey">2</button>
        <button type="button" className="grey">3</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="grey span-2">0</button>
        <button type="button" className="grey">.</button>
        <button type="button" className="orange">=</button>
      </div>
    </div>
  );
}

export default Calculator;
