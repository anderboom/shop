const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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