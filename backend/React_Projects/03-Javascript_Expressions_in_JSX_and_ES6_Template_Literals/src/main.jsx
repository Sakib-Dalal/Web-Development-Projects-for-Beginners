import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// expressions here
const fname = "Sakib";
const lName = "Dalal"
const randomNumber =  Math.floor(Math.random() * 11);
const currentDate = new Date();
const year = currentDate.getFullYear();

// only works for expressions not for statement's like if else 
root.render(
  <div>
    <h1>Hello {fname} {lName}!</h1>
    <h3>Your Lucky Number is: {randomNumber}</h3>
    <p>Created by {fname} {lName}.</p>
    <p>Copyright Year: {year}</p>
  </div>
);