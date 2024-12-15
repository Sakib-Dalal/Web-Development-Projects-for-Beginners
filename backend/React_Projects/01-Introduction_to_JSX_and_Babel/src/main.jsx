import React from 'react';
import ReactDOM from 'react-dom/client';

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// or
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
    <h1>Hello World</h1>
    <p>This is paragraph element.</p>
    </div>
);

// or ReactDOM.createRoot(document.getElementById("root")).render(<h1>Hello World</h1>);
