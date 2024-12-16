import React from "react";

let time = new Date().toLocaleTimeString();

function App() {
  const [currentTime, setTime] = React.useState(time)

  function resetTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={resetTime}>Get Time</button>
    </div>
  );
}

export default App;
