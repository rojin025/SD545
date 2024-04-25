import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import Prod from "./Prod";
import Items from "./Items";
import Details from "./Details";

function RootUseParams() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Prod />} />
        {/* <Route path="/" element={<Navigate to="prod" />} /> */}
        <Route path="products" element={<Prod />}>
          <Route path="items" element={<Items />}>
            <Route path="details/:id/:title/:content" element={<Details />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootUseParams;
