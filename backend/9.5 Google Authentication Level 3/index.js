import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";
// passport google authentication
import GoogleStrategy from "passport-google-oauth2";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
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

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/secrets", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

// google register and login route here 
// route all-ready defined in ejs as button sign up with google & sign in with google
app.get(
  "/auth/google",
   passport.authenticate("google", {
    scope: ["profile", "email"],  // define what we wanted after authorization with google #profile & email
  })
); // add strategy google which is already we have defined down using passport

// this is the route if user success to authorize with google
// show him the secret at this route
app.get(
  "/auth/google/secrets",
   passport.authenticate("google", {
    successRedirect: "/secrets", // if success go here
    failureRedirect: "/login", // else go here
  })
);

// logout if user login
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
    res.redirect("/")
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets", // if success go here
    failureRedirect: "/login", // else go here
  })
);

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      req.redirect("/login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log("success");
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// this is local strategy using cookies
passport.use(
  "local", // here add local as another strategy
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            //Error with password check
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              //Passed password check
              return cb(null, user);
            } else {
              //Did not pass password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);

// this is google authenticate strategy using passport
passport.use(
  "google", 
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // import id environment variable 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets", // url use used as receiver used at oauth2 google
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    }, 
    async (accessToken, refreshToken, profile, cb) => {
      
      // here we store the user data received after google authentication (provided by google) in our local database
      try {
        console.log(profile);
        const result = await db.query("SELECT * FROM users WHERE email = $1;", [profile.email]); // check user email in users db
        if (result.rows.length === 0) {
          // if user email not present then do
          const newUser = await db.query("INSERT INTO users (email, password) VALUES ($1, $2);", [profile.email, "google"]);
          // add new user to user db with their email and we don't know their password so add as google or random
          return cb(null, newUser.rows[0]); // for serialization and deserialize user
        } else { 
          // if user already exist in db
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
