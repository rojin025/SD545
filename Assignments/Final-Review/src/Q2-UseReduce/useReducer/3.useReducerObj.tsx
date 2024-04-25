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

const initialState = {
  username: "",
  password: "",
  error: "",
  isLoggedIn: false,
};

function reducer(state: StateType, action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case "username":
      return { ...state, username: payload.username };

    case "password":
      return { ...state, password: payload.password };
    default:
      return initialState;
  }
}

export default function UseReducerObj() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { username, password } = state;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "user" && password === "pwd123") {
            resolve("success");
            // alert("Success");
            console.log("Success");
          } else {
            reject("fail Loggin!");
          }
        }, 1000);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <p>Please Login!</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "username",
                payload: { ...state, username: e.target.value },
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
                type: "password",
                payload: { ...state, password: e.currentTarget.value },
              })
            }
          />
          <button className="submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
