import { FormEvent, useState } from "react";

export default function LoginUseState() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      setUsername("");
      setPassword("");
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
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
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
