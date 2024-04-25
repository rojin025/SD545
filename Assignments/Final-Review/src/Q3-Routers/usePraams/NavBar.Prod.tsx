import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="products/items">Items</Link>
        </li>
        <li>
          <NavLink to="products/items/details">details</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
