import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Globalstyled } from "./GlobalStyled";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Globalstyled />
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
