import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

import routes from "./routes";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Add from "./pages/Add";
import Product from "./pages/Products/Products";
import AppLayout from "./pages/Products/AppLayout";
import ProductDetails from "./pages/Products/Product.Details";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<AppLayout />} />
        <Route path="product/:Id" element={<ProductDetails />} />
        <Route path="Add" element={<Add />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
