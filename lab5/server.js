const mongoose = require('mongoose');
const express = require('express');
const createError = require('http-errors');
const { port, mongodb_uri } = require('./config');
const { authenticationCheck } = require('./middlewares/auth.middleware');

const authRouter = require('./routers/auth.router');
const booksRouter = require('./routers/books.router');
var usersRouter = require('./routers/users.router');

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

app.use('/auth', authRouter);
app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  const erorrStatus = err.status || 500;
  console.error(`${'\x1b[31m'}[${new Date().toUTCString()}] ${req.method}: ${req.path}. Error(${erorrStatus}): ${err.message}`, '\x1b[0m');
  res.status(erorrStatus).send({
      status: erorrStatus,
      error: err
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


