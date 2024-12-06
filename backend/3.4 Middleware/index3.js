import express from "express";

const app = express();
const port = 3000;

// // get url of the page in terminal - custom middleware
// app.use((req, res, next) => {
//   console.log(req.url);
// });

// get url of the page in terminal - custom middleware function
function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  next(); // next is important to go to next function
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
