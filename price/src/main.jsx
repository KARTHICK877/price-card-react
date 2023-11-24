import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Price from "./Price";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App />
    <Price />
  </React.StrictMode>,
)
