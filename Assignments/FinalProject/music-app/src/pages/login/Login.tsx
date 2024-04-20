import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

import { LoginCredentials, LoginResponse } from "../../types/types";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit Req:", username, password);
    login({ username, password });
  };

  async function login(credentials: LoginCredentials) {
    try {
      console.log("Login: ", credentials);
      const response = await axios.post<LoginResponse>(
        "http://localhost:4000/api/auth/login",
        credentials
      );

      const { accessToken } = response.data;
      sessionStorage.setItem("token", accessToken);
      console.log("Access Token: ", accessToken);
    } catch (error) {
      console.error("Error on login:", error);
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center w-400">
        <body
          className="d-flex align-items-center m-5 p-5 bg-body-tertiary vsc-initialized"
          data-new-gr-c-s-check-loaded="14.1168.0"
          data-gr-ext-installed=""
          data-new-gr-c-s-loaded="14.1168.0"
        >
          <main className="form-signin p-auto m-auto">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal">Log in</h1>

              <div className="form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="form">
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </div>

              <button className="btn btn-success w-50 py-2 mt-2" type="submit">
                Sign in
              </button>
            </form>
          </main>
        </body>
      </div>
    </>
  );
}

export default Login;
