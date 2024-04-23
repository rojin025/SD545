import { FormEvent, useReducer, useState } from "react";

type StateType = {
  username?: string;
  password?: string;
  error?: string;
  isLoggedIn?: boolean;
};

type ActionType = {
  type: string;
  payload: any;
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
    case "FIELD_CHANGE":
      let newState = state;
      if (payload.username) {
        newState = { ...newState, username: payload.username.toUpperCase() };
      } else {
        newState = { ...newState, password: payload.password.toUpperCase() };
      }
      return newState;
    case "LOGOUT":
      return { ...state, ...payload };
    case "SUCCESS":
      return { ...state, ...payload };
    case "FAIL":
      return { ...state, ...payload };
    default:
      return initialState;
  }
}

// 3. const [state, dispatch] = useReducer(reducer, initial state);
// 4. call dispatch

export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { username, password, isLoggedIn, error } = state;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "USER" && password === "PWD123") {
            resolve("success");
          } else {
            reject("fail");
          }
        }, 1000);
      });
      // setIsLoggedIn(true);
      dispatch({ type: "SUCCESS", payload: { isLoggedIn: true } });
    } catch (error) {
      // setError('Incorrect username or password!');
      // setUsername('');
      // setPassword('');
      dispatch({
        type: "FAIL",
        payload: {
          username: "",
          password: "",
          error: "Incorrect username or password!",
        },
      });
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button
              onClick={() =>
                dispatch({ type: "LOGOUT", payload: { isLoggedIn: false } })
              }
            >
              Log Out
            </button>
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
                  type: "FIELD_CHANGE",
                  payload: { username: e.currentTarget.value },
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
                  type: "FIELD_CHANGE",
                  payload: { password: e.currentTarget.value },
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
