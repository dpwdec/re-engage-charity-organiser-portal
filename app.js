var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const API_KEY = process.env.REACT_APP_MAP_API_KEY;
console.log("hello");
console.log("MY_VARIABLE: " + API_KEY);
var link =
  "https://maps.googleapis.com/maps/api/js?sensor=false&key=" +
  `${API_KEY}` +
  "&libraries=geometry";
console.log("this is my link with api key" + link);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pairsRouter = require("./routes/pairs");
var adminRouter = require("./routes/admin");

var app = express();
app.locals.api_key = API_KEY;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pairs", pairsRouter);
app.use("/admin", adminRouter);

// var Member = require ('./models/member');
// newMember = new Member( {
//   name: "Jackie",
//   address: "SE2",
//   role: "driver"
// })

// newMember.save()

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
