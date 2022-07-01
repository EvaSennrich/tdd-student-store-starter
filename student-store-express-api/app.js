// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const storeRouter = require("./routes/store");
const { NotFoundError } = require("./utils/errors");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", storeRouter);

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.get("/store", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

// if not other error happen above this and none of the other app.get success throw an new NotFoundError
app.use((req, res, next) => {
  // const e = new NotFoundError();
  // return next(new Error());
  return next(new NotFoundError("New Error NO HTML"));
});

//and if not throw a generic error
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message; // || "Something wen't wrong in the application";

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
