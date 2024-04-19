function Login() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <body
          className="d-flex align-items-center py-4 bg-body-tertiary vsc-initialized"
          data-new-gr-c-s-check-loaded="14.1168.0"
          data-gr-ext-installed=""
          data-new-gr-c-s-loaded="14.1168.0"
        >
          <main className="form-signin w-100 m-auto">
            <form>
              <h1 className="h3 mb-3 fw-normal">Log in</h1>

              <div className="form-floating">
                <label htmlFor="floatingInput">Email: </label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <label htmlFor="floatingPassword">Password:</label>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
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
