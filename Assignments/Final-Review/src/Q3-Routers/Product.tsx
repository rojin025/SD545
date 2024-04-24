import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import ProductNav from "./ProductNav";

export default function Product() {
  const messages = [
    { id: 1, title: "Message 1", content: "Content 1" },
    { id: 2, title: "Message 2", content: "Content 2" },
    { id: 3, title: "Message 3", content: "Content 3" },
  ];
  return (
    <>
      <NavBar />

      <h1>Product Details</h1>
      <ProductNav />
      <h2>
        <Outlet />
      </h2>
    </>
  );
}
