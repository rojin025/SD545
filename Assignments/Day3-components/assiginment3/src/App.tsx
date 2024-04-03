import { ChangeEvent, useState } from "react";

/**
 1. Create a simple React component called Counter that displays a counter value initialized to 0. 
 Include two buttons: one for incrementing the counter and another for decrementing it. 
 Use useState to manage the counter state.
 */
export function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <div className="Counter">
      <h2>Counter: </h2>
      <h2>{counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

/**
 * 2. Create a temperature converter component that allows users to enter a temperature in Celsius
 * and converts it to Fahrenheit when a button is clicked.
 * Use useState to manage the temperature input and output.
 */
export function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.currentTarget.value));
  };

  function celsiusToFahrenheit() {
    const newFahrenheit = (celsius * 9) / 5 + 32;
    setFahrenheit(newFahrenheit);
  }

  return (
    <div>
      <hr />
      <h2>Temperature Converter</h2>
      <label id="">Enter Celsius: </label>
      <input value={celsius} onChange={handleChange} />{" "}
      <button onClick={celsiusToFahrenheit}>Convert to Fahrenheit</button>
      <h2>Fahrenheit: {fahrenheit}</h2>
    </div>
  );
}

/**
 * 3. Build a component that generates a random number between 1 and 100
 * when a button is clicked. Display the generated number using useState.
 */
export function RandomNumGenerator() {
  const [randomNumber, setRandomNumber] = useState(0);

  const randomNumberGenerator = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="RandomNumberGenerator">
      <hr />
      <h2>RandomNumberGenerator </h2>
      <h2>{randomNumber}</h2>
      <button onClick={randomNumberGenerator}>Random Number</button>
    </div>
  );
}
