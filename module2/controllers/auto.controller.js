const autoService = require('../services/auto.service');

async function createAuto(req, res) {
  try {
    const auto = await autoService.create(req.body);
    res.status(201).json(auto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAutos(req, res) {
  try {
    const { searchString, page, perPage } = req.query;
    const auto = await autoService.find({ searchString, page, perPage });
    res.status(200).json(auto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function uploadFile(req, res) {
  const filePath = req.file.path;
  const results = [];
  const csv = require('csv-parser');
  const fs = require('fs');

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        await autoService.bulkCreate(results);
        res.send('File uploaded and data saved to database');
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
}

module.exports = {
  createAuto,
  getAutos,
  uploadFile,
};