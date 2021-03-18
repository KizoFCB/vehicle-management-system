import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Vehicle from "./components/FuelHistory/Filters/Vehicle/Vehicle";
import Filters from "./components/FuelHistory/Filters/Filters";
import FuelHistory from "./components/FuelHistory/FuelHistory";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Vehicle /> */}
    {/* <Filters /> */}
    <FuelHistory />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
