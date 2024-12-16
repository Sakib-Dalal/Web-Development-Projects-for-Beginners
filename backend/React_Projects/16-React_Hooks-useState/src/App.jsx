import React from "react";

// creating hook

function App() {
    // old method
    const state = React.useState(123); // create state using react // create hook
    console.log(state[0]);

    // destructuring example
    const [red, green, blue] = [9, 34, 212];
    console.log(red, green, blue);

    // new method
    const [count, setCount] = React.useState(0);

    // increase function
    function increase() {
        setCount(count+1);
    }

    // decrease function
    function decrease() {
        setCount(count-1);
    }

    // pass state hook in paragraph
    return <div>
        {/* <p>{state[0]}</p>  */}
        <p>{count}</p>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
}

export default App;