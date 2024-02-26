const express = require('express');
const router = express.Router();

const controller = require('../controllers/books.controller');

router.route('/')
    .get(controller.getBooks)
    .post(controller.createBook);

router.route('/:bookId')
    .get(controller.getBook)
    .patch(controller.updateBook)
    .delete(controller.deleteBook);

module.exports = router;