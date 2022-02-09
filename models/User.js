const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        default: '',
    },
    secondName: {
        type: String,
        required: false,
        default: '',
    },
    phoneNumber: {
        type: String,
        required: false,
        default: '',
    },
    deliveryName: {
        type: String,
        required: false,
        default: '',
    },
    area: {
        type: String,
        required: false,
        default: '',
    },
    city: {
        type: String,
        required: false,
        default: '',
    },
    department: {
        type: String,
        required: false,
        default: '',
    },
    isFilledProfile: {
        type: Boolean,
        required: false,
        default: false,
    },
});

module.exports = mongoose.model('usersauth', userSchema);