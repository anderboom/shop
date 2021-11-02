const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userAuthSchema = new Schema({
    email: {
        type: String,
        required: true,
        uniq: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('usersauth', userAuthSchema)