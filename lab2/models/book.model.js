const {Schema, model} = require('mongoose');
const bookFirmEnum = require('../enums/bookFirm.enum');

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    publicationYear: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    bookFirm: {
        type: String,
        enum: Object.values(bookFirmEnum)
    },
}, {
    timestamps: true,
});

module.exports = model('book', bookSchema);