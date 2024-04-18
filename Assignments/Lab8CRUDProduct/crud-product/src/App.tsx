import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Add from "./pages/Add";
import Product from "./pages/Products/Products";
import AppLayout from "./pages/Products/AppLayout";
import ProductDetails from "./pages/Products/Product.Details";
import { ProductType } from "./types";
import { useState } from "react";
import Products from "./pages/Products/Products";

const initialData = [
  {
    Title: "Node.js",
    Id: "SD450",
    Price: 200,
    Description: "Back End Development is Awesome!!",
  },
  {
    Title: "React.js",
    Id: "SD550",
    Price: 300,
    Description: "Front End Development is BeasutttiiiiiFULLLL!!",
  },
];

function App() {
  const [products, setProducts] = useState<ProductType[]>(initialData);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="product"
          element={<AppLayout products={products} />}
        ></Route>
        <Route path="product" element={<Products products={products} />} />
        <Route
          path="product/:Id"
          element={<ProductDetails products={products} />}
        />
        <Route path="Add" element={<Add />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
