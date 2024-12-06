import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    // res.send("<h4>path is " + __dirname + "</h4>");
    // res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
