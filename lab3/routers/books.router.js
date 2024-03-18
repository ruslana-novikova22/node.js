const express = require('express');
const router = express.Router();

const controller = require('../controllers/books.controller');
const middleware = require('../middlewares/books.middleware');

router
    .route('/')
    .get(controller.getBooks)
    .post(controller.createBook);

router.route('/:bookId')
    .get(middleware.bookByIdValidation, controller.getBook)
    .patch(middleware.bookByIdValidation, controller.updateBook)
    .delete(middleware.bookByIdValidation, controller.deleteBook);

module.exports = router;