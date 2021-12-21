const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId,
    },
    description: {
        type: String,
        required: false,
    },
    imageSrc: {
        type: String,
        default: '',
    },
    quantity: {
        type: Number,
        required: false,
    },
    orderQuantity: {
        type: Number,
        required: false,
    },
    inputCost: {
        type: Number,
        required: false,
    },
    promoCost: {
        type: Number,
        required: false,
    },
    brand: {
        type: String,
        required: false,
    },
    groupPages: {
        type: String,
        required: false,
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('positions', positionSchema);