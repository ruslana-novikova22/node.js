const createError = require('http-errors');
const triangleModel = require('../models/triangleModel');

async function calculateTriangleArea(req, res, next) {
    try {
        const {x1, y1, x2, y2, x3, y3} = req.body;
        const sideA = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        const sideB = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
        const sideC = Math.sqrt(Math.pow((x1 - x3), 2) + Math.pow((y1 - y3), 2));
        const semiPerimeter = (sideA + sideB + sideC) / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
        let request = {
            area: area
        };
    const task = await triangleModel.create(request);

    res.status(200).json({
        status: 200,
        data: task,
    });
} catch(err) {
    next(createError.InternalServerError(err.message))
}
};
module.exports = {
    calculateTriangleArea
};
