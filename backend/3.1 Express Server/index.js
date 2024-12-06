// npm init -y
// npm install express
// package.json -> "type": "module"

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log("Server is running on port " + port);
});

// node index.js
// localhost:3000 in browser