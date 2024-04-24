import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import PageNotFound from "./PageNotFound";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="ipad" element={<>Ipad is not a computer.</>} />
          <Route
            path="Macbook"
            element={
              <>M1 Pro - Macbook 14 Pro is the best Mac Ever. Period!!!</>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
