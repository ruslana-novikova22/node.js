const Joi = require('joi');
const bookFirmEnum = require('../enums/bookFirm.enum');

const BookCreateSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(60),
    author: Joi.string()
        .min(2)
        .max(60),
    publicationYear: Joi.string()
        .pattern(/^\d{4}$/),
    address: Joi.string()
        .min(2)
        .max(60),
    price: Joi.string()
        .pattern(/^\d+(\.\d{1,2})?$/),
    bookFirm: Joi.string()
        .valid(...Object.values(bookFirmEnum)),
});

const BookUpdateSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(60),
    author: Joi.string()
        .min(2)
        .max(60),
    publicationYear: Joi.string()
        .pattern(/^\d{4}$/),
    address: Joi.string()
        .min(2)
        .max(60),
    price: Joi.string()
        .pattern(/^\d+(\.\d{1,2})?$/),
    bookFirm: Joi.string()
        .valid(...Object.values(bookFirmEnum)),
});

module.exports = {
    BookCreateSchema,
    BookUpdateSchema,
};