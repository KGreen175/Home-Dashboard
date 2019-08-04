const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

const loginRouter = require("./routes/login");
const authorizeRouter = require("./routes/authorize");
const calendarRouter = require("./routes/calendar");
const weatherRouter = require("./routes/weather");

const server = express();

// view engine setup
// server.set("views", path.join(__dirname, "views"));
// server.set("view engine", "pug");

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
// server.use(express.static(path.join(__dirname, "public")));

server.use("/login", loginRouter);
server.use("/authorize", authorizeRouter);
server.use("/calendar", calendarRouter);
server.use("/weather", weatherRouter);

server.get("/favicon.ico", (req, res) => res.status(204));

// catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// error handler
server.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = server;
