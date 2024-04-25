import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <Link to="products/items">Items</Link>
      </li>
      <li>
        <NavLink to="products/items/details">details</NavLink>
      </li>
    </nav>
  );
}

export default NavBar;
