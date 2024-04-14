const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');
const middleware = require('../middleware/middleware');

router.route('/')
    .post(middleware.validateParams, controller.calculateResult);

module.exports = router;