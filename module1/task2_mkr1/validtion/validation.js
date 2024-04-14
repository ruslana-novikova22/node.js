const Joi = require('joi');

const schema = Joi.object({
    a: Joi.number().required(),
    n: Joi.number().positive().required(),
});

module.exports = {schema};