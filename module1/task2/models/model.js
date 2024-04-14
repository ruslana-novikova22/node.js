const {Schema, model} = require('mongoose');

const schema = new Schema({
    a: {
        type: Number,
        required: true,
    },
    n: {
        type: Number,
        required: true,
    },
    result: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('result', schema);

