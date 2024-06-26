import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
    </nav>
  );
}

export default NavBar;
