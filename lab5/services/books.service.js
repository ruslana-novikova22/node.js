const bookModel = require('../models/book.model');

async function create(book) {
    const { _id } = await bookModel.create(book);
    return _id;
}

async function find({ searchString = '', page = 1, perPage = 20 }) {
    const filter = {
    };

    return {
        items: await bookModel.find(filter, { password: 0, __v: 0 }).skip((page - 1) * perPage).limit(Number(perPage)),
        count: await bookModel.countDocuments(filter),
    }
}



async function findById(id) {
    return bookModel.findById(id, { password: 0, __v: 0 });}

async function findByIdAndUpdate(id, update) {
    return bookModel.findByIdAndUpdate(id, update, { upsert: false, new: true });
};

async function findByIdAndDelete(id) {
    return bookModel.findByIdAndDelete(id);
};

async function findOne(filter, projection = { password: 0, __v: 0 }) {
    return bookModel.findOne(filter, projection);
}

module.exports = {
    create,
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
    findOne,
};