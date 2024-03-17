const bookModel = require('../models/book.model');

async function create(book) {
    return bookModel.create(book);
}

async function find({ searchString = '', page = 1, perPage = 20 }) {
    const filter = {};

    return {
        items: await bookModel.find(filter).skip((page - 1) * perPage).limit(Number(perPage)),
        count: await bookModel.countDocuments(filter),
    }
}

async function findById(id) {
    return bookModel.findById(id);
}

async function findByIdAndUpdate(id, update) {
    return bookModel.findByIdAndUpdate(id, update, { upsert: false, new: true });
};

async function findByIdAndDelete(id) {
    return bookModel.findByIdAndDelete(id);
};

module.exports = {
    create,
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
};