import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props) {
  console.log(props);
  return <div>
    <h2>{props.name}</h2>
    <img
      src={props.image}
      alt="avatar_img"
      height="250px"
      width="250px"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}

root.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Ryan Gosling" 
    image="https://media.vanityfair.com/photos/5548261a7df477df32ed069d/master/w_2560%2Cc_limit/ryan-gosling-cereal.jpg"
    tel="+123 456 789" 
    email="ryan@google.com" />

    <Card name="Jack Bauer" 
    image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    tel="+987 654 321" 
    email="jack@nowhere.com" />

    <Card name="Chuck Norris" 
    image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    tel="+918 372 574" 
    email="gmail@chucknorris.com" />

  </div>
);
