const { port, mongodb_uri } = require('./config');

const mongoose = require('mongoose');
const express = require('express');
const createError = require('http-errors');

const { authenticationCheck } = require('./middlewares/auth.middleware');

const booksRouter = require('./routers/books.router');
const authRouter = require('./routers/auth.router');
const usersRouter = require('./routers/users.router');

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Mongo DB connected');
  });

const app = express();

// Built-in middleware that parses incoming requests with JSON payloads
app.use(express.json());

// Application-level middleware. Executed every time the app receives a request
app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method}: ${req.path}`);
  next();
});

// An endpoint to hadle base url route GET request
app.get('/', (req, res) => {
  res.status(200).json({
      status: 200,
      data: {
        message: "Node.js ExApp"
      }
  })
});

// Rest of routs
app.use('/books', booksRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// Application-level middleware. Handling requests for a non-existent path
app.use((req, res, next) => {
  next(createError.NotFound());
});

// Error-handling middleware. Handling global application errors
app.use((err, req, res, next) => {
  const erorrStatus = err.status || 500;
  console.error(`${'\x1b[31m'}[${new Date().toUTCString()}] ${req.method}: ${req.path}. Error(${erorrStatus}): ${err.message}`, '\x1b[0m');
  res.status(erorrStatus).send({
      status: erorrStatus,
      error: err
  });
});

// Starting the application
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});