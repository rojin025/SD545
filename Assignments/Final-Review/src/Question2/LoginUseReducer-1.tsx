import { FormEvent, useReducer, useState } from "react";

type StateType = {
  username: string;
  password: string;
  error: string;
  isLoggedIn: boolean;
};

type ActionType = {
  type: string;
  payload: StateType;
};

// 1. initial state

const initialState: StateType = {
  username: "",
  password: "",
  error: "",
  isLoggedIn: false,
};

// 2. reducer function

function reducer(state: StateType, action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case "USERNAME":
      return { ...state, username: payload.username };
    case "PASSWORD":
      return { ...state, password: payload.password };
    default:
      return initialState;
  }

  // return new
}

// 3. const [state, dispatch] = useReducer(reducer, initial state);
// 4. call dispatch

export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { username, password } = state;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "user" && password === "pwd123") {
            resolve("success");
          } else {
            reject("fail");
          }
        }, 1000);
      });
      setIsLoggedIn(true);
    } catch (error) {
      setError("Incorrect username or password!");
      // setUsername('');
      // setPassword('');
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "USERNAME",
                  payload: { ...state, username: e.currentTarget.value },
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "PASSWORD",
                  payload: { ...state, password: e.currentTarget.value },
                })
              }
            />
            <button className="submit" type="submit">
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
