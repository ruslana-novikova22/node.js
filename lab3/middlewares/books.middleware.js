const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const bookService = require('../services/books.service');

async function bookByIdValidation(req, res, next) {
    try {
        const { bookId } = req.params;

        if (!ObjectId.isValid(bookId)) {
            throw createError.BadRequest("Book id is not valid");
        }

        const book = await bookService.findById(bookId);

        if (!book) {
            throw createError.NotFound("Book with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    bookByIdValidation,
};