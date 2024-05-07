const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const bookService = require('../services/books.service');
const {BookSchema} = require('../joi_validation_schemas/books.schemas')

async function bookByIdValidation(req, res, next) {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            throw createError.BadRequest("book id is not valid");
        }

        const book = await bookService.findById(id);

        if (!book) {
            throw createError.NotFound("book with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};
const bookDataValidation = async (req, res, next) => {
    try {
        const { error } = BookSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        const book = await bookService.findOne({
            $or: [
                { title: req.body.title },
            ]
        });

        if (book) {
            throw createError.BadRequest("Book with such title already exist");
        }

        next();
    } catch (err) {
        next(err);
    }
};
module.exports = {
    bookByIdValidation,
    bookDataValidation,
};