const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const bookService = require('../services/books.service');
const { BookCreateSchema, BookUpdateSchema } = require('../joi_validation_schemas/books.schemas');

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

const bookCreationDataValidation = async (req, res, next) => {
    try {
        const { error } = BookCreateSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        const book = await bookService.findOne({
            $or: [
                { publicationYear: req.body.publicationYear },
                { price: req.body.price },
            ]
        });

        if (book) {
            throw createError.BadRequest("Book with such publication year or price already exist");
        }

        next();
    } catch (err) {
        next(err);
    }
};

const bookUpdateDataValidation = async (req, res, next) => {
    try {
        const { error } = BookUpdateSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        if (req.body.publicationYear || req.body.price) {
            const orExpressions = [];

            if (req.body.publicationYear) {
                orExpressions.push({ publicationYear: req.body.publicationYear });
            }

            if (req.body.price) {
                orExpressions.push({ price: req.body.price });
            }

            const book = await bookService.findOne({
                _id: {
                    $ne: req.params.bookId
                },
                $or: orExpressions
            });
    
            if (book) {
                throw createError.BadRequest("Book with such publication year or price already exist");
            }
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    bookByIdValidation,
    bookCreationDataValidation,
    bookUpdateDataValidation,
};