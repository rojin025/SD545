import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { ProductType } from "../../types";
import Product from "./Product";
import AppLayout from "./AppLayout";

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

function Products() {
  const [products, setProducts] = useState<ProductType[]>(initialData);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <>
            <Link to={`${product.Id}`} className={"btn btn-light"}>
              <Product key={product.Id} product={product} />
            </Link>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default Products;
