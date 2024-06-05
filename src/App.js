import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    if (counterValue < 99) {
      setCounterValue(counterValue + 1);
    }
  };

  const handleDecrement = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 99) {
      setCounterValue(newValue);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter-container">
          <button
            className="decrement-btn"
            disabled={counterValue === 0}
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            className="inc-dec-input"
            type="number"
            onChange={handleChange}
            value={counterValue}
          />
          <button
            className="increment-btn"
            disabled={counterValue === 99}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <h2 className="App-link">Increment Decrement Counter</h2>
      </header>
    </div>
  );
}

export default App;
