const express = require('express');
const router = express.Router();

const controller = require('../controllers/books.controller');
const middleware = require('../middlewares/books.middleware');

router
    .route('/')
    .get(controller.getBooks)
    .post(middleware.checkYear, controller.createBook);

router.route('/:bookId')
    .get(controller.getBook)
    .patch(middleware.checkYear, controller.updateBook)
    .delete(controller.deleteBook);

module.exports = router;