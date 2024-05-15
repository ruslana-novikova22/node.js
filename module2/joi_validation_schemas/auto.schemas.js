const Joi = require('joi');

const autoSchema = Joi.object({
    lastName: Joi.string()
        .min(2)
        .max(60)
        .required(),
    carNumber: Joi.string()
        .min(2)
        .max(20)
        .required(),
    brand: Joi.string()
        .min(2)
        .max(60)
        .required(),
    price: Joi.number()
        .min(0)
        .required(),
    homeAddress: Joi.string()
        .min(2)
        .max(100)
        .required()
});

module.exports = autoSchema;