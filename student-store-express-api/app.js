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

app.use((req, res, next) => {
  // const e = new NotFoundError();
  // return next(new Error());
  return next(new NotFoundError());
});

module.exports = app;
