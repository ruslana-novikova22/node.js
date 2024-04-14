const { port, mongodb_uri } = require("./config");

const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(mongodb_uri).then(() => {
  console.log("Mongo DB connected");
});

const app = express();

app.use(express.json());

app.use('/area', triangleRoutes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method}: ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    data: {
      message: "Node.js ExApp",
    },
  });
});

app.use((err, req, res, next) => {
  const erorrStatus = err.status || 500;
  console.error(
    `${"\x1b[31m"}[${new Date().toUTCString()}] ${req.method}: ${
      req.path
    }. Error(${erorrStatus}): ${err.message}`,
    "\x1b[0m"
  );
  res.status(erorrStatus).send({
    status: erorrStatus,
    error: err,
  });
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).send({
    status: err.status || 500,
    error: err.message,
  });
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});



