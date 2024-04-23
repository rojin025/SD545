import { useReducer } from "react";

const initialState: number = 0;

function reducer(state: number, action: { type: string; data: number }) {
  const { type, data } = action;
  switch (type) {
    case "increase":
      return state + data;

    case "decrease":
      return state - data;

    case "reset":
      return data;

    default:
      return initialState;
  }
}

export default function UseReducerSimple() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      count: {state}
      <br />
      <button onClick={() => dispatch({ type: "increase", data: 1 })}>
        +1
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrease", data: 1 })}>
        -1
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset", data: 0 })}>
        Reset
      </button>
    </div>
  );
}
