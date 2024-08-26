import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
