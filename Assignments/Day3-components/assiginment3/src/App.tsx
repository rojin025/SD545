import { useState } from "react";

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
      <h2>RandomNumberGenerator </h2>
      <h2>{randomNumber}</h2>
      <button onClick={randomNumberGenerator}>Random Number</button>
    </div>
  );
}
