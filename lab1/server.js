const express = require('express');
const { port } = require('./config');
const booksRouter = require('./routers/books.router');

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


