import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./pages/Product/product-list.page";
import AddProduct from "./pages/Product/add-product.page";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="p-3 text-bg-dark d-flex flex-wrap  justify-content-center justify-content-md-between  py-3 mb-4 border-bottom">
        <NavLink to="/products" className="nav-link  ">
          <span className="fs-4">📚 Product List ☕️</span>
        </NavLink>
        <ul className="nav  col-md-3 text-end ">
          <li>
            <NavLink to="/products" className="nav-link px-2 text-secondary">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className="nav-link px-2 text-secondary">
              Add
            </NavLink>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/" element={<Navigate to="/products" />}></Route>
      </Routes>
    </div>
  );
}
