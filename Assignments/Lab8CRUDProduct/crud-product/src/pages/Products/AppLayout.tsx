import { ProductType } from "../../types";
import ProductDetails from "./Product.Details";
import Products from "./Products";

interface Props {
  products: ProductType[];
}

function AppLayout({ products }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Products products={products} />
        </div>
        <div className="col">
          <ProductDetails products={products} />
        </div>
      </div>
      <footer>
        <p>
          &copy; Copyright {new Date().getFullYear()} by Happy Coding :) Inc.
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
