const Joi = require('joi');

const triangleSchema = Joi.object({
    x1: Joi.number().required(),
    y1: Joi.number().required(),
    x2: Joi.number().required(),
    y2: Joi.number().required(),
    x3: Joi.number().required(),
    y3: Joi.number().required(),
    area: Joi.number().required(),
});

module.exports = {triangleSchema};