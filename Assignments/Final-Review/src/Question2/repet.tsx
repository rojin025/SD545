import { useReducer } from "react";

const initailState: number = 0;

function someReducer(state: number, action: { type: string; data: number }) {
  const { type, data } = action;

  switch (type) {
    case "inc":
      return state + data;

    case "dec":
      return state - data;

    case "reset":
      return data;

    default:
      return initailState;
  }
}

function SomeReducerApp() {
  const [state, dispatch] = useReducer(someReducer, initailState);

  return (
    <div>
      <h1>Some Reducer Demo</h1>
      <h3>Counter: {state}</h3>
      <button
        onClick={() => {
          dispatch({ type: "inc", data: 1 });
        }}
      >
        +1
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "dec", data: 1 });
        }}
      >
        -1
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "reset", data: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default SomeReducerApp;
