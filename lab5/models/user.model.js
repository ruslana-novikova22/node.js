const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    birthDate: {
        type: Date,
    },
    password: {
        type: String, // Contains hashed password
    },
}, {
    timestamps: true,
});

module.exports = model('user', userSchema);