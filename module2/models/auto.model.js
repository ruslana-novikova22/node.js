const { Schema, model } = require('mongoose');

const autoSchema = new Schema({
    lastName: {
        type: String,
        trim: true,
    },
    carNumber: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

module.exports = model('auto', autoSchema);