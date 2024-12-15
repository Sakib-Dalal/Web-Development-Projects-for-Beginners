import React from "react";
import ReactDOM from "react-dom/client";

import pie, { doublePi, triplePi, num } from "./math.js";
// import * as pi from "./math.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <ul>
      <li>{ pie }</li>
      <li>{ doublePi() }</li>
      <li>{ triplePi() }</li>
      <li>{ num }</li>
    </ul>
  </div>
);

// <li>{pi.default}</li>
// <li>{pi.doublePi}</li>