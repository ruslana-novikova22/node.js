const Joi = require('joi');
const bookFirmEnum = require('../enums/bookFirm.enum');

const BookSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(60),
    author: Joi.string()
        .min(2)
        .max(60),
    publicationYear: Joi.number(),
    address: Joi.string()
        .min(2)
        .max(60),
    price: Joi.number(),
    bookFirm: Joi.string()
        .min(1)
        .max(50),
});

module.exports = {
    BookSchema,
};