const createError = require('http-errors');
const model = require('../models/model');

async function calculateResult(req, res, next) {
    try {
        const { a, n } = req.body;
        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += (2 * i) / (a * (a + i));
        };
    const task = await model.create(request);

    res.status(200).json({
        status: 200,
        data: task,
    });
} catch(err) {
    next(createError.InternalServerError(err.message))
}
};
module.exports = {
    calculateResult
};
