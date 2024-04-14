const express = require('express');
const router = express.Router();

const controller = require('../controllers/triangleController');
const middleware = require('../middleware/validateInput');

router.route('/')
    .post(middleware.validateTriangleParams, controller.calculateTriangleArea);

module.exports = router;