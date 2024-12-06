import express from "express";
// npm i morgan
// morgan for login
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

// build custom middleware
// app.use((req, res, next) => {
//   console.log("Request method: ", req.methon);
//   next();
// });


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
