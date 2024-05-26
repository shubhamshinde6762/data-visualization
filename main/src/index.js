import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "typeface-barlow";
import "typeface-courier-prime";
import "typeface-exo";
import "typeface-lato";
import "typeface-lora";
import "typeface-merriweather";
import "typeface-open-sans";
import "typeface-poppins";
import "typeface-roboto";
import "typeface-roboto-condensed";
import "typeface-roboto-slab";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
