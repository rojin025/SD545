import logo from "../images/logo.jpg";

export default function NavBar() {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} alt="React Logo" style={{ width: "100px" }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Add
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
