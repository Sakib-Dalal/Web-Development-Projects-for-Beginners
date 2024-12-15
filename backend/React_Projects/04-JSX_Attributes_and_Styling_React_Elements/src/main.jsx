import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const img = "https://picsum.photos/200";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "salmon";

root.render(
  <div>

    <h1 className="heading">My Favorite Foods</h1>

    <ul>
      <li style={{ color: "green" }}>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>

    <p style={customStyle}>Hello World</p>

    <div>
      <img className="food-images" src="https://th.bing.com/th/id/R.717cc0aacdc643eb001436c3ee3520a6?rik=ACYgsJGr64avsg&riu=http%3a%2f%2fwww.wicklowpartnership.ie%2fwp-content%2fuploads%2f2013%2f06%2fHealthy-Foods.jpeg&ehk=uYXnYdv9899BOucywAt460QFbW884y%2bpcFGBUftqJHw%3d&risl=&pid=ImgRaw&r=0"></img>
      <img className="food-images" src="https://wallpaperaccess.com/full/767048.jpg"></img>
      <img className="food-images" src="https://th.bing.com/th/id/OIP.y4p6mRVTwf2k7HR7p8f3uQHaE6?rs=1&pid=ImgDetMain"></img>
    </div>

    <div>
      <img src={img}></img>
    </div>

  </div>
);