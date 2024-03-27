const createError = require('http-errors');

async function checkYear(req, res, next) {
    try {
        const { year_publishing } = req.body;
        if (year_publishing < 1901 || year_publishing > 2100) { // обмеження книг лише з 20 і 21 століття
            throw createError.BadRequest("year_publishing not valid");
        }
        next();
    } catch(err) {
        next(err);
    }
}

module.exports = {
    checkYear,
};