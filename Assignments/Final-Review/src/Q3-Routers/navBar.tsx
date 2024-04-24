import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
