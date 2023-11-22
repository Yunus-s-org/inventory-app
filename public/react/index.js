import React from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";
import { BrowserRouter } from "react-router-dom";
import "../style.css";

import { App } from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
