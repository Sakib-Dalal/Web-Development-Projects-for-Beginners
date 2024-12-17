import React from "react";

function App() {
  // const [fNameHeading, setFNameHeading] =  React.useState("");
  // const [lNameHeading, setLNameHeading] = React.useState("");

  const [fullName, setFullName] = React.useState({
    fNameHeading: "",
    lNameHeading: "",
  });


  // function handleOnFNameChange(event) {
  //   console.log(event.target.value);
  //   setFNameHeading(event.target.value);
  // }

  // function handleOnLNameChange(event) {
  //   console.log(event.target.value);
  //   setLNameHeading(event.target.value);
  // }

  function handleChange(event) {
    const newValue = event.target.value; 
    const inputName = event.target.name;

    console.log(newValue);
    console.log(inputName);

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fNameHeading: newValue,
          lNameHeading: prevValue.lNameHeading,
        }
      } else if (inputName === "lName") {
          return {
            fNameHeading: prevValue.fNameHeading,
            lNameHeading: newValue,
          }
      }
    });
  }

  return (
    <div className="container">
      {/* <h1>Hello {fNameHeading} {lNameHeading}</h1> */}
      <h1>Hello {fullName.fNameHeading} {fullName.lNameHeading}</h1>
      <form>
        {/* <input onChange={handleOnFNameChange} name="fName" placeholder="First Name" value={fNameHeading} />
        <input onChange={handleOnLNameChange} name="lName" placeholder="Last Name" value={lNameHeading} /> */}
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fNameHeading} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lNameHeading} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
