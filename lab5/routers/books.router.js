const express = require('express');
const router = express.Router();

const controller = require('../controllers/books.controller');
const middleware = require('../middlewares/books.middleware');
const { authenticationCheck } = require('../middlewares/auth.middleware');

router.route('/')
    .post(middleware.bookCreationDataValidation, controller.createBook);

router.use(authenticationCheck);

router.route('/')
    .get(controller.getBooks)

router.route('/:bookId')
    .get(middleware.bookByIdValidation, controller.getBook)
    .patch(middleware.bookByIdValidation, middleware.bookUpdateDataValidation, controller.updateBook)
    .delete(middleware.bookByIdValidation, controller.deleteBook);

module.exports = router;