const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;

async function validateTriangleParams(req, res, next) {
    try{
        const { x1, y1, x2, y2, x3, y3 } = req.body;
        if (!x1 || !y1 || !x2 || !y2 || !x3 || !y3) {
            throw createError.BadRequest("Ви ввели не всі значення або ввели 0 ");
        }
        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
            return res.status(400).json({ error: 'Координати вершин трикутника повинні бути числовими значеннями' });
        }
        next();
    }
    catch(err){
        next(err);
    }
};

module.exports = {validateTriangleParams};