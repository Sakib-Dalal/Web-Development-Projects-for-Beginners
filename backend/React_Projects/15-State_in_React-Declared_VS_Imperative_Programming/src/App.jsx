import React from "react";

var isDone=true;

function App() {
    var strikeThrough = { textDecoration: "line-through" };
    console.log(isDone);
    return <div>
        <p style={isDone ? strikeThrough : null}>By Milk</p>
    </div>

}

export default App;