import React from "react";


function App() {
  const time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = React.useState(time)

  function resetTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  // auto update time - setInterval function
  setInterval(resetTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={resetTime}>Get Time</button>
    </div>
  );
}

export default App;
