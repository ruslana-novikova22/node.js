const mongoose = require('mongoose');
const express = require('express');
const { port, mongodb_uri } = require('./config');
const booksRouter = require('./routers/books.router');

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Mongo DB connected');
  });

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


