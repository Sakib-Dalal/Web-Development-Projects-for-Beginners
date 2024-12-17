import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");

  function handleClick() {
    console.log("CLICKED");
    setHeadingText("Submitted");
  }

  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOn() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ background: isMouseOver ? "black" : "white", color: isMouseOver  ? "white" : "black"}} 
      onClick={handleClick} 
      onMouseOver={handleMouseOver} onMouseOut={handleMouseOn}>
        Submit
      </button>
    </div>
  );
}

export default App;
