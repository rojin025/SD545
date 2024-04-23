import { ChangeEvent, FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { LoginCredentials, LoginResponse } from "../../types/types";
import "./login.css";

interface Props {
  onHandleIsLoggedin: (condition: boolean) => void;
}

function Login({ onHandleIsLoggedin }: Props) {
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
      onHandleIsLoggedin(successLogin);
      setLoginSuccess(successLogin);
    }
    setUsername("");
    setPassword("");
  };

  async function login(credentials: LoginCredentials) {
    try {
      console.log("Login: ", credentials);
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
      setErrorMessage("Wrong Credential!");
      console.error("Error on login:", error);
      return false;
    }
  }

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
            <FaRegUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
          <div> {errorMessage && <div>{errorMessage}</div>}</div>
        </form>
        {loginSuccess && <Navigate to="/playlist" />}
      </div>
    </>
  );
}

export default Login;
