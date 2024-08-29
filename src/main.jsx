import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
