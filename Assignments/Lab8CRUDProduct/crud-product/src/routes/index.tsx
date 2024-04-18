import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Add from "../pages/Add";
import Product from "../pages/Products/Products";

export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "Product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/about",
    element: <Add />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
