import express from "express";

const app = express();
const port = 3000;

let bowl = ["Apple", "Orange", "Pears"];

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text</em>",
    };
    res.render("index.ejs", 
        { name: "unknown", fruits: bowl, data: data}
    );
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});