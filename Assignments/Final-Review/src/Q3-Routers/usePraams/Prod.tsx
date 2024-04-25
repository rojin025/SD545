import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.Prod";

export default function Prod() {
  return (
    <>
      <NavBar />
      <h1>Prod</h1>
      <Outlet />
    </>
  );
}
