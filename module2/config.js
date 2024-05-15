require('dotenv').config();

const config = {
    jwtSecret: process.env.JWT_SECRET || 'secret',
    port: process.env.PORT || 6000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab2',
};

module.exports = config;