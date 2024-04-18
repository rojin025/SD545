import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
