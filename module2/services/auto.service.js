const autoModel = require('../models/auto.model');

async function create(auto) {
    const { _id } = await autoModel.create(auto);
    return _id;
}

async function find({ searchString = '', page = 1, perPage = 20 }) {
    const filter = {
    };

    return {
        items: await autoModel.find(filter, { password: 0, __v: 0 }).skip((page - 1) * perPage).limit(Number(perPage)),
        count: await autoModel.countDocuments(filter),
    }
}

async function findById(id) {
    return autoModel.findById(id, { password: 0, __v: 0 });
}

async function findByIdAndUpdate(id, update) {
    return autoModel.findByIdAndUpdate(id, update, { upsert: false, new: true });
};

async function findByIdAndDelete(id) {
    return autoModel.findByIdAndDelete(id);
};

async function findOne(filter, projection = { password: 0, __v: 0 }) {
    return autoModel.findOne(filter, projection);
}

module.exports = {
    create,
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
    findOne,
};