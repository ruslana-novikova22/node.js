const express = require('express');
const router = express.Router();
const controller = require('../controllers/auto.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', controller.createAuto);
router.get('/', controller.getAutos);
router.post('/upload', upload.single('file'), controller.uploadFile);

module.exports = router;