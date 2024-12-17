import React from "react";

function App() {

  const [name, setName] = React.useState("");
  const [headingText, setHeading] = React.useState("");

  // on change on input tag
  function handleChange(event) {
    console.log(event.target.value); // value
    // console.log(event.target.placeholder); // placeholder
    // console.log(event.target.type); // type
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  // onChange function for input
  return (
    <div className="container">
      <h1>Hello {name}, {headingText}</h1>
      {/* <form></form> */}
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
