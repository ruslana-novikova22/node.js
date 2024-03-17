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
    title: {
        type: String,
        trim: true,
    },
    publicationYear: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    price: {
        type: String,
        unique: true,
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