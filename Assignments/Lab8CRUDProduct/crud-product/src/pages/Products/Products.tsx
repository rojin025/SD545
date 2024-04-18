import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { ProductType } from "../../types";
import Product from "./Product";
import AppLayout from "./AppLayout";

interface Props {
  products: ProductType[];
}

function Products({ products }: Props) {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <>
            <li key={product.Id}>
              <Link to={`${product.Id}`} className={"btn btn-light"}>
                {product.Title}
              </Link>
              <br />
            </li>
          </>
        ))}
      </div>
    </div>
  );
}

export default Products;
