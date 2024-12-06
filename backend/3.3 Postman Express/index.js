// HTTP request's postman

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/sakib", (req, res) => {
    res.sendStatus(200);
});

app.patch("user/sakib", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/sakib", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});