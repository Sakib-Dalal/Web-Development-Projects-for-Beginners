import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const currentTime = new Date();
const currentHour = currentTime.getHours();

let heading;
let color;

if (currentHour > 6 && currentHour < 12) {
  heading = "Good Morning";
  color = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  heading = "Good Afternoon";
  color = "green";
} else if (currentHour >= 18 && currentHour >= 0) {
  heading = "Good Evening";
} else {
  heading = "Good Night";
  color = "blue";
}

root.render(
  <div>
    <h1 style={{color: color}} className="heading"> { heading } </h1>
  </div>
);
