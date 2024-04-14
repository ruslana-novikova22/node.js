const {Schema, model} = require('mongoose');

const triangleSchema = new Schema({
    x1: {
        type: Number,
        required: true,
    },
    y1: {
        type: Number,
        required: true,
    },
    x2: {
        type: Number,
        required: true,
    },
    y2: {
        type: Number,
        required: true,
    },
    x3: {
        type: Number,
        required: true,
    },
    y3: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = model('triangle', triangleSchema);

