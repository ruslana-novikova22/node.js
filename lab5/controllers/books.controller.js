const bookService = require('../services/books.service');
const createError = require('http-errors');
const bcrypt = require('bcrypt');

async function createBook(req, res, next) {
    try {
        const _id = await bookService.create({
            ...req.body,
            password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
        });

        res.status(200).json({
            status: 200,
            data: {_id},
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getBooks(req, res, next) {
    try {
        res.status(200).json({
            status: 200,
            data: await bookService.find(req.query),
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getBook(req, res, next) {
    try {
        const { bookId } = req.params;
        const book = await bookService.findById(bookId);

        if (!book) {
            return res.status(400).json({
                status: 400,
                error: {
                    message: 'Book not found.'
                },
            });
        }

        res.status(200).json({
            status: 200,
            data: book,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function updateBook(req, res, next) {
    try {
        const { bookId } = req.params;
        const bookData = req.body;
        await bookService.findByIdAndUpdate(bookId, bookData);

        res.status(200).json({
            status: 200,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function deleteBook(req, res, next) {
    try {
        const { bookId } = req.params;
        await bookService.findByIdAndDelete(bookId);

        res.status(200).json({
            status: 200,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};