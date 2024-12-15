import React from "react";
import ReactDOM from "react-dom/client";

import { add, mul, sub, div } from "./calculator.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{mul(2, 3)}</li>
    <li>{sub(7, 2)}</li>
    <li>{div(5, 2)}</li>
  </ul>
);
