import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World!</h1> <p>This is a paragraph</p>");
});

app.get("/about", (req, res) => {
    res.send("<p>AI engineer Sakib Dalal is here for you!</p>");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});


// nodemon - automatically start our server
// npm install -g nodemon
// nodemon index.js