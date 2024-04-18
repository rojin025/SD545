import ProductDetails from "./Product.Details";
import Products from "./Products";

function AppLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Products />
        </div>
        <div className="col">
          <ProductDetails />
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
