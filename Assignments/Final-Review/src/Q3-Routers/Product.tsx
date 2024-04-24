import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

export default function Product() {
  return (
    <>
      <NavBar />

      <h1>Product</h1>
      <Outlet />
    </>
  );
}
