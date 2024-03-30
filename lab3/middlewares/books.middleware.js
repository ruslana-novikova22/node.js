const createError = require('http-errors');

async function yearValidation(req, res, next) {
    try {
        const { publicationYear } = req.body;

        if (!publicationYear) {
            throw createError.BadRequest("Publication year is required");
        }

        const year = parseInt(publicationYear, 10);

        if (isNaN(year)) {
            throw createError.BadRequest("Invalid publication year");
        }

        if (year < 1901 || year > 2024) {
            throw createError.BadRequest("Publication year must be between 1901 and 2024");
        }

        next();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    yearValidation,
};
