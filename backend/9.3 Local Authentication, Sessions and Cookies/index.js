import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
// importing session from express-session
import session from "express-session";
// importing passport 
import passport from "passport";
// authenticate that session using passport-local
import { Strategy } from "passport-local";

// more :- https://www.passportjs.org/tutorials/password/

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// setup session using express-session
app.use(session({
  secret: "TOPSECRETWORD",
  resave: false,
  saveUninitialized: true, // store uninitialized session in server memory
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // set expiry of data in milliseconds  // one day cookie
  }
})
); // bypass login process using this secret

// passport module should be after initialization of express-session
app.use(passport.initialize());
app.use(passport.session());


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "5001",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// this is route to secret.ejs if the user is already login and has authentication history stored as cookies
app.get("/secrets", (req, res) => {
  // comes from the passport to check is user already authenticated to this site 
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

// using passport as middleware for login route // use local strategy defined down using passport
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets",   // if success then redirect to /secrets
  failureRedirect: "/login" // if fail redirect to /login page
}));


app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          // applying passport here also
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", // return all the stuff we inserted now
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log(err);
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});



// here we authenticate that session using passport-local
passport.use(
  "local", // add local as strategy name
  new Strategy(async function verify(username, password, cb) {
  // Note the username and password values auto came from the login and register ejs files values "name=username"
  console.log(username);
  // cb -> call back
  // here we trying to validate whether if user already has the user has right password, email exist in database or not
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          // console.error("Error comparing passwords:", err);
          return cb(err);
        } else {
          if (result) {
            // res.render("secrets.ejs");
            return cb(null, user); // send error as null and details of user
          } else {
            // res.send("Incorrect Password");
            return cb(null, false); // user is not authenticated
          }
        }
      });
    } else {
      // res.send("User not found");
      return cb("User not found");
    }
  } catch (err) {
    // console.log(err);
    return cb(err);
  }
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// after login if you re visit to :- http://localhost:3000/secrets then it will already login  
