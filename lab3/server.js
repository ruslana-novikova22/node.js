const mongoose = require('mongoose');
const express = require('express');
const createError = require('http-errors');
const { port, mongodb_uri } = require('./config');
const booksRouter = require('./routers/books.router');

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Mongo DB connected');
  });

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method}: ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({
      status: 200,
      data: {
        message: "Node.js ExApp"
      }
  })
});

app.use(express.json());

app.use('/books', booksRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


