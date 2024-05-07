var express = require('express');
var router = express.Router();

const controller = require('../controllers/books.controller')
const middleware = require('../middlewares/books.middleware')

router.route('/')
  .get(controller.getBooks)
  .post(middleware.bookDataValidation,controller.createBook)

router.route('/:id')
  .get(middleware.bookByIdValidation, controller.getBook)
  .put(middleware.bookByIdValidation, middleware.bookDataValidation, controller.updateBook)
  .delete(middleware.bookByIdValidation, controller.deleteBook)

module.exports = router;