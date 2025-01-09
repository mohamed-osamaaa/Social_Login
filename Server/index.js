const expressSession = require("express-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
    expressSession({
        secret: process.env.SECRET_SESSION,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log("Server is running!");
});
