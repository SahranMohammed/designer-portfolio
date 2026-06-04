import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Preloader from "./components/Preloader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Preloader>
        <App />
      </Preloader>
    </BrowserRouter>
  </React.StrictMode>
);