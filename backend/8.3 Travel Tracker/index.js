import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// postgres setup
const db = new pg.Client(
  {
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "5001",
    port: 5432,
  }
);

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries;");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  });
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const userInput = req.body["country"];
  
  // get country code
  const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'; ", [userInput.toLowerCase()]);

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1);",
      [countryCode],
    );
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
