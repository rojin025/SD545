import { Navigate, useRoutes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default function RouteDemo() {
  const element = useRoutes(routes);

  return <div>{element}</div>;
}
