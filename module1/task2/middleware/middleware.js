const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;

async function validateParams(req, res, next) {
    try{
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
    catch(err){
        next(err);
    }
};

module.exports = {validateParams};