import React from "react";
import { createRoot } from "react-dom/client";
import { Counter, RandomNumGenerator } from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Counter />
    <RandomNumGenerator />
  </React.StrictMode>
);
