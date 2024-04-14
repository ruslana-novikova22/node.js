const {Schema, model} = require('mongoose');
const bookFirmEnum = require('../enums/bookFirm.enum');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publicationYear: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    bookFirm: {
        type: String,
        enum: Object.values(bookFirmEnum)
    },
    password: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = model("books", bookSchema);