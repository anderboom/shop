const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAuthSchema = new Schema({
    email: {
        type: String,
        required: true,
        uniq: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    secondName: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    deliveryName: {
        type: String,
        required: false,
    },
    area: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('usersauth', userAuthSchema);