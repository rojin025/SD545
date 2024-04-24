import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./navBar";

export default function Product() {
  return (
    <>
      <nav>
        <ol>
          <li>
            <NavLink to="ipad">Ipad</NavLink>
          </li>
          <li>
            <NavLink to="macbook">Macbook</NavLink>
          </li>
        </ol>
      </nav>
    </>
  );
}
