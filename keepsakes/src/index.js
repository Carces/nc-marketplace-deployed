import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUser";
import { BasketProvider } from "./contexts/Basket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </CurrentUserProvider>
  </BrowserRouter>
);
