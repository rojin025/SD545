import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export interface LoginResponse {
  id: string;
  username: string;
  playType: string;
  accessToken: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface MusicList {
  id: string;
  urlPath: string;
  title: string;
  releaseDate: string;
}

export interface Music {
  id: string;
  userId: string;
  songId: string;
  orderId: number;
  title: string;
  urlPath: string;
}

async function login(credentials: LoginCredentials) {
  try {
    const response = await axios.post<LoginResponse>(
      "http://localhost:4000/api/auth/login",
      credentials
    );

    if (response.status !== 200) {
      throw new Error("Wrong Credential!");
    }

    const responseData = response.data;
    console.log(response.data);
    sessionStorage.setItem("accessToken", responseData.accessToken);
    return true;
  } catch (error) {
    console.error("Error on login:", error);
    return false;
  }
}

function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit Req:", username, password);
    const successLogin = await login({ username, password });
    if (successLogin) {
      setLoginSuccess(successLogin);
    }
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="text">Please Login</h1>
          <div className="input-box">
            <input
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Login</button>
          <div> {errorMessage && <div>{errorMessage}</div>}</div>
        </form>
      </div>
    </>
  );
}

export default Login;
