import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./components/context/productcontext";
import { FilterContextProvider } from "./components/context/filter_context";
import { CartProvider } from "./components/context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
    <CartProvider>
        <App />
    </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);


reportWebVitals();
