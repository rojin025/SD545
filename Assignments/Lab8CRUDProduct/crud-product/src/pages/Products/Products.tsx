import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { ProductType } from "../../types";
import Product from "./Product";
import AppLayout from "./AppLayout";

const initialData = [
  {
    Title: "Node.js",
    Price: 200,
    Description: "Back End Development is Awesome!!",
  },
  {
    Title: "React.js",
    Price: 300,
    Description: "Front End Development is BeasutttiiiiiFULLLL!!",
  },
];

function Products() {
  const [products, setProducts] = useState<ProductType[]>(initialData);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product, i) => (
          <>
            <NavLink to="" key={i + 1} className={"btn btn-light"}>
              <Product product={product} />
            </NavLink>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default Products;
