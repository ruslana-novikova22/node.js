const Joi = require('joi');

const UserCreateSchema = Joi.object({
    phoneNumber: Joi.string()
        .pattern(/^\+380\d{9}$/)
        .required(),

    firstName: Joi.string()
        .min(2)
        .max(60),

    lastName: Joi.string()
        .min(2)
        .max(60),

    email: Joi.string()
        .email()
        .required(),

    birthDate: Joi.date(),

    password: Joi.string()
        .required()
        .min(6)
        .max(10),
});

const UserUpdateSchema = Joi.object({
    phoneNumber: Joi.string()
        .pattern(/^\+380\d{9}$/),

    firstName: Joi.string()
        .min(2)
        .max(60),

    lastName: Joi.string()
        .min(2)
        .max(60),

    email: Joi.string()
        .email(),

    birthDate: Joi.date(),
});

module.exports = {
    UserCreateSchema,
    UserUpdateSchema,
};