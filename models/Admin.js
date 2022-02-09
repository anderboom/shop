const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Admin model

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        uniq: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('users', adminSchema);