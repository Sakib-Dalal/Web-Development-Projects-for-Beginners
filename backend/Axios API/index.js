// npm i axios

import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
        console.log(response);
        res.render("index.ejs", { activity: response.data });
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
    }
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
  