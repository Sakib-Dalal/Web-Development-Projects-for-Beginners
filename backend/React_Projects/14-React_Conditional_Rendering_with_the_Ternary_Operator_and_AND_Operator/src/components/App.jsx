import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// 1 st way
// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>
//   } else {
//     return <Login />
//   }
// }

function App() {
  return (
    <div className="container">
      {/* 1 st way */}
      {/* {renderConditionally()} */}

      {/* or 2 nd way*/}
      { isLoggedIn ? <h1>Hello</h1> : <Login /> }

      {/* or 3 rd way */}
      {/* { isLoggedIn && <h1>Hello</h1> } */}
      {/* { isLoggedIn || <Login /> } */}
      
    </div>
  );
}

export default App;
